import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { AuthContext } from "../../../context/auth";
import { useTypeSafeRouter } from "../../../hooks/use-type-safe-router";
import { services } from "../../../lib/services";
import { ROT, CaesarCipher, Zenit, DefaultZenitPolar } from "@encryptr/core";

import { FiTrash } from "react-icons/fi";
import Head from "../../../modules/seo/head";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";
import { Heading } from "../../../components/heading";
import { Button } from "../../../components/button";
import Input, { InputHandles } from "../../../components/input";

import styles from "../../../styles/pages/service/service.module.scss";
import zenitStyles from "../../../styles/pages/service/zenit.module.scss";
import createStyles from "../../../styles/pages/dashboard/folder/create.module.scss";

const File: NextPage = () => {
  const router = useTypeSafeRouter<{ id: string }>(useRouter());

  const {
    loadFileByID,
    deleteFileByID,
    handleUpdateFileTitle,
    handleUpdateFileContent,
    handleUpdateFileService,
    handleUpdateFileDetails,
  } = useContext(AuthContext);

  const TitleInput = useRef<InputHandles>(null);
  const ContentInput = useRef<InputHandles>(null);
  const PreviewInput = useRef<InputHandles>(null);

  const [selectedService, setSelectedService] = useState("ROT");

  // Service State config
  const [skip, setSkip] = useState(13);
  const [shift, setShift] = useState(4);
  const [keys, setKeys] = useState<string[]>([]);

  const KeyInput = useRef<InputHandles>(null);

  // load the file
  useEffect(() => {
    const file = loadFileByID(router.query.id);

    // need to load all the file information

    // loading file title
    TitleInput.current?.setValue(file?.label || "");

    // loading file content
    PreviewInput.current?.setValue(file?.content || "");

    // load select file service
    setSelectedService(file?.service || "ROT");

    // load file details
    const loadFileDetails = async () => {
      if (file?.details.skip) {
        setSkip(file.details.skip);

        // de-construct the preview with ROT
        const rot = new ROT({
          skip: file.details.skip,
        });

        if (file.service === "ROT") {
          const result = await rot.decrypt(file.content);
          console.log(result);
          ContentInput.current?.setValue(result);
        }
      }

      if (file?.details.shift) {
        setShift(file.details.shift);

        const caesarCipher = new CaesarCipher({
          shift: -file.details.shift,
        });

        if (file.service === "CaesarCipher") {
          const result = await caesarCipher.execute(file.content);

          ContentInput.current?.setValue(result);
        }
      }

      if (file?.details.keys) {
        setKeys(file.details.keys);

        const zenit = new Zenit({
          keys: file.details.keys,
        });

        if (file.service === "Zenit") {
          const result = await zenit.execute(file.content);

          ContentInput.current?.setValue(result);
        }
      }
    };

    loadFileDetails();
  }, [router.query.id]);

  const handleAddKey = useCallback(async () => {
    const key = KeyInput.current?.value;

    if (!key) {
      KeyInput.current?.setState("error");
      KeyInput.current?.setMessage("please, insert a 5 letter word :/");
      return;
    }

    const wordNotBigEnough = KeyInput.current.value.length < 5;
    const tooBig = KeyInput.current.value.length > 5;

    if (wordNotBigEnough) {
      KeyInput.current?.setState("warning");
      KeyInput.current?.setMessage("Word not big enough");
      return;
    }

    if (tooBig) {
      KeyInput.current?.setState("warning");
      KeyInput.current?.setMessage("Word too big");
      return;
    }

    const wordAlreadyExists = keys.find(
      (key) => KeyInput.current?.value === key
    );

    if (wordAlreadyExists) {
      KeyInput.current?.setState("error");
      KeyInput.current?.setMessage("That word is already on the list");
      return;
    }

    setKeys((keys) => [...keys, key]);

    const file = handleUpdateFileDetails(router.query.id, {
      keys: [...keys, key],
      shift,
      skip,
    });

    KeyInput.current?.setValue("");

    if (keys.length + 1 > 1) {
      ContentInput.current?.setDisabled(false);

      const zenit = new Zenit({
        keys: [...keys, key],
      });

      const result = await zenit.execute(ContentInput.current?.value || "");

      PreviewInput.current?.setValue(result);

      handleUpdateFileContent(router.query.id, result, file);
    }
  }, [
    handleUpdateFileContent,
    handleUpdateFileDetails,
    keys,
    router.query.id,
    shift,
    skip,
  ]);

  const handleRemoveKey = useCallback(
    async (key: string) => {
      setKeys((keys) => keys.filter((_key) => _key !== key));

      const adjustedLength = keys.length - 1;

      if (adjustedLength <= 1) {
        ContentInput.current?.setDisabled(true);
        return;
      }

      const zenit = new Zenit({
        keys: keys.filter((_key) => _key !== key),
      });

      const result = await zenit.execute(ContentInput.current?.value || "");

      PreviewInput.current?.setValue(result);

      const file = handleUpdateFileDetails(router.query.id, {
        keys: keys.filter((_key) => _key !== key),
        shift,
        skip,
      });

      handleUpdateFileContent(router.query.id, result, file);
    },
    [
      handleUpdateFileContent,
      handleUpdateFileDetails,
      keys,
      router.query.id,
      shift,
      skip,
    ]
  );

  return (
    <>
      <Head title="Create new file" />

      <Header />

      <main className={styles.container}>
        <header>
          <Heading weight="bold" variant="title">
            Create new File
          </Heading>
        </header>

        <section>
          <Input
            ref={TitleInput}
            style={{ width: "100%" }}
            label="File Title"
            placeholder="lorem ipsum"
            handleInputChange={(event) => {
              handleUpdateFileTitle(router.query.id, event.target.value);
            }}
          />

          <select
            name="service"
            value={selectedService}
            onChange={async (event) => {
              ContentInput.current?.setDisabled(false);
              setSelectedService(event.target.value);

              if (event.target.value === "ROT") {
                const rot = new ROT({
                  skip,
                });

                const result = await rot.execute(
                  ContentInput.current?.value || ""
                );

                PreviewInput.current?.setValue(result);

                const file = handleUpdateFileDetails(router.query.id, {
                  keys,
                  shift,
                  skip,
                });

                const file2 = handleUpdateFileService(
                  router.query.id,
                  event.target.value,
                  file
                );
                handleUpdateFileContent(router.query.id, result || "", file2);
              } else if (event.target.value === "CaesarCipher") {
                const caesarCipher = new CaesarCipher({
                  shift,
                });

                const result = await caesarCipher.execute(
                  ContentInput.current?.value || ""
                );

                PreviewInput.current?.setValue(result);

                const file = handleUpdateFileDetails(router.query.id, {
                  keys,
                  shift,
                  skip,
                });

                const file2 = handleUpdateFileService(
                  router.query.id,
                  event.target.value,
                  file
                );
                handleUpdateFileContent(router.query.id, result || "", file2);
              } else if (event.target.value === "Zenit") {
                // check for length of keys
                const adjustedLength = keys.length;

                if (adjustedLength <= 1) {
                  ContentInput.current?.setDisabled(true);
                  return;
                }

                const zenit = new Zenit({
                  keys,
                });

                const result = await zenit.execute(
                  ContentInput.current?.value || ""
                );

                PreviewInput.current?.setValue(result);

                const file = handleUpdateFileDetails(router.query.id, {
                  keys,
                  shift,
                  skip,
                });

                const file2 = handleUpdateFileService(
                  router.query.id,
                  event.target.value,
                  file
                );
                handleUpdateFileContent(router.query.id, result || "", file2);
              } else if (event.target.value === "ZenitPolar") {
                const zenitPolar = new DefaultZenitPolar();

                const result = await zenitPolar.execute(
                  ContentInput.current?.value || ""
                );

                PreviewInput.current?.setValue(result);

                const file = handleUpdateFileDetails(router.query.id, {
                  keys,
                  shift,
                  skip,
                });

                const file2 = handleUpdateFileService(
                  router.query.id,
                  event.target.value,
                  file
                );

                handleUpdateFileContent(router.query.id, result || "", file2);
              }
            }}
          >
            {services.map((service) => (
              <option key={service.href}>{service.title}</option>
            ))}
          </select>

          {selectedService === "ROT" && (
            <Input
              label="ROT Skip"
              placeholder="Range 0-∞"
              value={skip}
              type="number"
              min={1}
              handleInputChange={async (event) => {
                const file = handleUpdateFileDetails(router.query.id, {
                  skip: Number(event.target.value),
                  keys,
                  shift,
                });

                setSkip(Number(event.target.value));

                const rot = new ROT({
                  skip: Number(event.target.value),
                });

                const newContent = await rot.execute(
                  ContentInput.current?.value || ""
                );

                PreviewInput.current?.setValue(newContent);

                // this is the error
                handleUpdateFileContent(router.query.id, newContent, file);
              }}
            />
          )}

          {selectedService === "CaesarCipher" && (
            <Input
              label="CaesarCipher Shift"
              placeholder="Range 0-∞"
              value={shift}
              type="number"
              min={1}
              handleInputChange={async (event) => {
                const file = handleUpdateFileDetails(router.query.id, {
                  shift: Number(event.target.value),
                  keys,
                  skip,
                });

                setShift(Number(event.target.value));

                const caesarCipher = new CaesarCipher({
                  shift: Number(event.target.value),
                });

                const newContent = await caesarCipher.execute(
                  ContentInput.current?.value || ""
                );

                PreviewInput.current?.setValue(newContent);

                // this is the error
                handleUpdateFileContent(router.query.id, newContent, file);
              }}
            />
          )}

          {selectedService === "Zenit" && (
            <>
              <form
                className={zenitStyles.form}
                onSubmit={(event) => {
                  event.preventDefault();

                  handleAddKey();
                }}
              >
                <Input
                  ref={KeyInput}
                  label="Insert Key"
                  placeholder="any 5 letter word"
                  type="text"
                />
                <Button variant="outlined">Add +</Button>
              </form>

              <ul className={zenitStyles.tagList}>
                {keys.map((key) => (
                  <li key={key}>
                    <Heading variant="text" weight="bold">
                      {key}
                    </Heading>
                    <button onClick={() => handleRemoveKey(key)}>
                      <FiTrash size={24} />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className={createStyles.contentInputContainer}>
            <Input
              ref={ContentInput}
              style={{ width: "100%" }}
              label="File Content"
              variant="textarea"
              placeholder=""
              handleInputChange={async (event) => {
                if (selectedService === "ROT") {
                  const rot = new ROT({
                    skip: Number(skip),
                  });

                  const result = await rot.execute(event.target.value);

                  PreviewInput.current?.setValue(result);

                  // save preview input to thing
                  handleUpdateFileContent(router.query.id, result);
                } else if (selectedService === "CaesarCipher") {
                  const caesarCipher = new CaesarCipher({
                    shift: Number(shift),
                  });

                  const result = await caesarCipher.execute(event.target.value);

                  PreviewInput.current?.setValue(result);

                  // save preview input to thing
                  handleUpdateFileContent(router.query.id, result);
                } else if (selectedService === "Zenit") {
                  const zenit = new Zenit({
                    keys,
                  });

                  const result = await zenit.execute(event.target.value);

                  PreviewInput.current?.setValue(result);

                  // save preview input to thing
                  handleUpdateFileContent(router.query.id, result);
                } else if (selectedService === "ZenitPolar") {
                  const zenitPolar = new DefaultZenitPolar();

                  const result = await zenitPolar.execute(event.target.value);

                  PreviewInput.current?.setValue(result);

                  // save preview input to thing
                  handleUpdateFileContent(router.query.id, result);
                }
              }}
            />

            <Input
              ref={PreviewInput}
              inputWrapperClassname={createStyles.containerTextarea}
              className={createStyles.textarea}
              style={{ width: "100%" }}
              label="Preview"
              disabled
              variant="textarea"
              placeholder="How your file will look like"
            />
          </div>

          <Button
            variant="primary"
            className={createStyles.buttonRed}
            onClick={() => {
              deleteFileByID(router.query.id);

              router.push("/dashboard");
            }}
          >
            Delete File
          </Button>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default File;

// import {
//   useRef,
//   useEffect,
//   useLayoutEffect,
//   useState,
//   useCallback,
//   useContext,
// } from "react";
// import dynamic from "next/dynamic";

// const Head = dynamic(() => import("../../../modules/seo/head"));
// import { Header } from "../../../components/header";
// import { Footer } from "../../../components/footer";
// import Input, { InputHandles } from "../../../components/input";
// import { Heading } from "../../../components/heading";
// import { Button } from "../../../components/button";
// import { services } from "../../../lib/services";

// import { ROT, CaesarCipher, Zenit, DefaultZenitPolar } from "@encryptr/core";

// import createStyles from "../../../styles/pages/dashboard/folder/create.module.scss";
// import zenitStyles from "../../../styles/pages/service/zenit.module.scss";
// import styles from "../../../styles/pages/service/service.module.scss";
// import { FiTrash } from "react-icons/fi";
// import { nanoid } from "nanoid";
// import { AuthContext, User } from "../../../context/auth";
// import { useRouter } from "next/router";
// import { useTypeSafeRouter } from "../../../hooks/use-type-safe-router";

// const Create = () => {
//   const router = useTypeSafeRouter<{ id: string }>(useRouter());

//   const { user } = useContext(AuthContext);

//   const TitleInput = useRef<InputHandles>(null);
//   const ContentInput = useRef<InputHandles>(null);
//   const PreviewInput = useRef<InputHandles>(null);
//   const selectRef = useRef<HTMLSelectElement>(null);
//   const KeyInput = useRef<InputHandles>(null);
//   const [selectedService, setSelectedService] = useState<string>("ROT");
//   const [id, setId] = useState<string | null>(null);

//   const [skip, setSkip] = useState(13);
//   const [shift, setShift] = useState(4);
//   const [keys, setKeys] = useState<string[]>([]);

//   useEffect(() => {
//     setId(router.query.id);

//     const localUsers = JSON.parse(
//       localStorage.getItem("@encryptr:users") || "[]"
//     ) as User[];

//     const loggedUserId = localStorage.getItem("@encryptr:logged-user-id");
//     const loggedUser = localUsers.find((user) => user.id === loggedUserId);

//     if (!loggedUser) {
//       return;
//     }

//     const file = loggedUser.files.find((file) => file.id === id);

//     // if (!file) {
//     //   router.push("/dashboard");
//     //   return;
//     // }

//     if (file) {
//       console.log(file.details);
//       TitleInput.current?.setValue(file.label);
//       PreviewInput.current?.setValue(file.content);

//       setSelectedService(file.service);

//       const run = async () => {
//         if (file.service === "ROT") {
//           const rot = new ROT({
//             skip: file.details.skip,
//           });

//           ContentInput.current?.setValue(await rot.decrypt(file.content));

//           setSkip(file.details.skip || 13);
//         } else if (file.service === "CaesarCipher") {
//           const caesar = new CaesarCipher({
//             shift: -file.details.shift! || -4,
//           });

//           ContentInput.current?.setValue(await caesar.execute(file.content));

//           setShift(file.details.shift || 4);
//         } else if (file.service === "Zenit") {
//           const zenit = new Zenit({
//             keys: file.details.keys || [],
//           });

//           ContentInput.current?.setValue(await zenit.execute(file.content));

//           setKeys(file.details.keys || []);
//         }
//       };

//       run();
//     }
//   }, [router]);

//   // useLayoutEffect(() => {
//   //   window.addEventListener("load", () => {
//   //     const textarea = document.querySelector(
//   //       `#input-${ContentInput.current?.id}`
//   //     ) as HTMLTextAreaElement;
//   //     document.body.style.setProperty(
//   //       "--base-height",
//   //       `${textarea.clientHeight}px`
//   //     );

//   //     new ResizeObserver((value) => {
//   //       const [
//   //         {
//   //           borderBoxSize: [{ blockSize }],
//   //         },
//   //       ] = value;

//   //       document.body.style.setProperty("--base-height", `${blockSize}px`);
//   //     }).observe(textarea);
//   //   });
//   // }, [ContentInput.current?.id]);

//   const handleAddKey = useCallback(async () => {
//     if (!KeyInput.current?.value) {
//       return;
//     }

//     const wordNotBigEnough = KeyInput.current.value.length < 5;
//     const tooBig = KeyInput.current.value.length > 5;

//     if (wordNotBigEnough) {
//       KeyInput.current?.setState("warning");
//       KeyInput.current?.setMessage("Word not big enough");
//       return;
//     }

//     if (tooBig) {
//       KeyInput.current?.setState("warning");
//       KeyInput.current?.setMessage("Word too big");
//       return;
//     }

//     const wordAlreadyExists = keys.find(
//       (key) => KeyInput.current?.value === key
//     );

//     if (wordAlreadyExists) {
//       KeyInput.current?.setState("error");
//       KeyInput.current?.setMessage("That word is already on the list");
//       return;
//     }

//     const value = KeyInput.current.value;

//     setKeys((keys) => [...keys, value]);

//     KeyInput.current?.setValue("");

//     if (keys.length + 1 > 1) {
//       ContentInput.current?.setDisabled(false);
//     }

//     const zenit = new Zenit({
//       keys: [...keys, value],
//     });

//     handleUpdateDetails(id!, {
//       keys: [...keys, value],
//     });

//     PreviewInput.current?.setValue(
//       await zenit.execute(ContentInput.current?.value!)
//     );
//   }, [handleUpdateDetails, id, keys]);

//   const handleRemoveKey = useCallback(
//     async (key: string) => {
//       setKeys((keys) => keys.filter((_key) => _key !== key));

//       const adjustedLength = keys.length - 1;

//       if (adjustedLength <= 1) {
//         ContentInput.current?.setDisabled(true);
//         return;
//       }

//       const zenit = new Zenit({
//         keys: keys.filter((_key) => _key !== key),
//       });

//       handleUpdateDetails(id!, {
//         keys: keys.filter((_key) => _key !== key),
//       });

//       PreviewInput.current?.setValue(
//         await zenit.execute(ContentInput.current?.value!)
//       );
//     },
//     [handleUpdateDetails, id, keys]
//   );

//   return (
//     <>
//       <Head title="Create new file" />

//       <Header />

//       <main className={styles.container}>
//         <header>
//           <Heading weight="bold" variant="title">
//             Create new File
//           </Heading>
//         </header>

//         <section>
//           <Input
//             ref={TitleInput}
//             style={{ width: "100%" }}
//             label="File Title"
//             placeholder="lorem ipsum"
//             handleInputChange={(event) => {
//               handleUpdateFileTitle(id!, event.target.value);
//             }}
//           />

//           <select
//             value={selectedService}
//             onChange={async (event) => {
//               setSelectedService(event.target.value);
//               handleUpdateFileService(id!, event.target.value);

//               if (event.target.value === "Zenit") {
//                 const adjustedLength = keys.length - 1;

//                 if (adjustedLength <= 1) {
//                   ContentInput.current?.setDisabled(true);
//                   return;
//                 }

//                 const zenit = new Zenit({
//                   keys,
//                 });

//                 PreviewInput.current?.setValue(
//                   await zenit.execute(ContentInput.current?.value!)
//                 );

//                 handleUpdateDetails(id!, {
//                   keys,
//                 });
//               } else if (event.target.value === "ROT") {
//                 const rot = new ROT({
//                   skip: Number(skip),
//                 });

//                 PreviewInput.current?.setValue(
//                   await rot.execute(ContentInput.current?.value!)
//                 );

//                 handleUpdateDetails(id!, {
//                   skip,
//                 });
//               } else if (event.target.value === "CaesarCipher") {
//                 const cipher = new CaesarCipher({
//                   shift,
//                 });

//                 PreviewInput.current?.setValue(
//                   await cipher.execute(ContentInput.current?.value!)
//                 );

//                 handleUpdateDetails(id!, {
//                   shift,
//                 });
//               } else if (event.target.value === "ZenitPolar") {
//                 const zenit = new DefaultZenitPolar();

//                 PreviewInput.current?.setValue(
//                   await zenit.execute(ContentInput.current?.value!)
//                 );
//               }

//               handleUpdateFileContent(id!, PreviewInput.current?.id || "");
//             }}
//             name="service"
//             ref={selectRef}
//           >
//             {services.map((service) => (
//               <option key={service.href}>{service.title}</option>
//             ))}
//           </select>

//           {selectedService === "ROT" && (
//             <Input
//               label="ROT Skip"
//               placeholder="Range 0-∞"
//               value={skip}
//               type="number"
//               min={1}
//               handleInputChange={async (event) => {
//                 setSkip(Number(event.target.value));

//                 const rot = new ROT({
//                   skip: Number(event.target.value),
//                 });

//                 const newContent = await rot.execute(
//                   ContentInput.current?.value || ""
//                 );

//                 PreviewInput.current?.setValue(newContent);

//                 handleUpdateDetails(id!, {
//                   skip: Number(event.target.value),
//                 });

//                 handleUpdateFileContent(id!, newContent);
//               }}
//             />
//           )}

//           {selectedService === "CaesarCipher" && (
//             <Input
//               label="CaesarCipher Shift"
//               placeholder="Range 0-∞"
//               value={shift}
//               type="number"
//               min={1}
//               handleInputChange={async (event) => {
//                 setShift(Number(event.target.value));

//                 const cipher = new CaesarCipher({
//                   shift: Number(event.target.value),
//                 });

//                 const newContent = await cipher.execute(
//                   ContentInput.current?.value || ""
//                 );

//                 PreviewInput.current?.setValue(newContent);

//                 handleUpdateDetails(id!, {
//                   shift: Number(event.target.value),
//                 });

//                 handleUpdateFileContent(id!, newContent);
//               }}
//             />
//           )}

//           {selectedService === "Zenit" && (
//             <>
//               <form
//                 className={zenitStyles.form}
//                 onSubmit={(event) => {
//                   event.preventDefault();

//                   handleAddKey();
//                 }}
//               >
//                 <Input
//                   ref={KeyInput}
//                   label="Insert Key"
//                   placeholder="any 5 letter word"
//                   type="text"
//                 />
//                 <Button onClick={handleAddKey} variant="outlined">
//                   Add +
//                 </Button>
//               </form>

//               <ul className={zenitStyles.tagList}>
//                 {keys.map((key) => (
//                   <li key={key}>
//                     <Heading variant="text" weight="bold">
//                       {key}
//                     </Heading>
//                     <button onClick={() => handleRemoveKey(key)}>
//                       <FiTrash size={24} />
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}

//           <div className={createStyles.contentInputContainer}>
//             <Input
//               ref={ContentInput}
//               style={{ width: "100%" }}
//               label="File Content"
//               variant="textarea"
//               placeholder=""
//               handleInputChange={async (event) => {
//                 if (selectedService === "ROT") {
//                   const rot = new ROT({
//                     skip: Number(skip),
//                   });

//                   PreviewInput.current?.setValue(
//                     await rot.execute(event.target.value)
//                   );
//                 } else if (selectedService === "CaesarCipher") {
//                   const cipher = new CaesarCipher({
//                     shift,
//                   });

//                   PreviewInput.current?.setValue(
//                     await cipher.execute(event.target.value)
//                   );
//                 } else if (selectedService === "Zenit") {
//                   const zenit = new Zenit({
//                     keys,
//                   });

//                   PreviewInput.current?.setValue(
//                     await zenit.execute(event.target.value)
//                   );
//                 } else if (selectedService === "ZenitPolar") {
//                   const zenit = new DefaultZenitPolar();

//                   PreviewInput.current?.setValue(
//                     await zenit.execute(event.target.value)
//                   );
//                 } else {
//                   PreviewInput.current?.setValue(event.target.value);
//                 }

//                 // save preview input to thing
//                 handleUpdateFileContent(id!, PreviewInput.current?.value!);
//               }}
//             />

//             <Input
//               ref={PreviewInput}
//               inputWrapperClassname={createStyles.containerTextarea}
//               className={createStyles.textarea}
//               style={{ width: "100%" }}
//               label="Preview"
//               disabled
//               variant="textarea"
//               placeholder="How your file will look like"
//             />
//           </div>

//           <Button
//             variant="primary"
//             className={createStyles.buttonRed}
//             onClick={() => {
//               handleDeleteFile(id!);
//               router.push("/dashboard");
//             }}
//           >
//             Delete File
//           </Button>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default Create;
