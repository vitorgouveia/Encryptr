import dynamic from "next/dynamic";

const Head = dynamic(() => import("../modules/seo/head"));

import { Header } from "../components/header";
import { Heading } from "../components/heading";
import { Footer } from "../components/footer";

import styles from "../styles/pages/support.module.scss";
import { Cog } from "../icon/cog";

type Solution = {
  title: string;
  description: string;
};

type Question = {
  label: string;
  solution: Solution;
};

type Section = {
  title: string;
  questions: Question[];
};

const FAQ: Section[] = [
  {
    title: "General",
    questions: [
      {
        label: "Who created it?",
        solution: {
          title: "It's a me, mario.",
          description:
            "My name is Vitor, I'm a 17 years old high school student, you can see more of my work in <a href='https://github.com/VitorGouveia'>here</a>",
        },
      },
      {
        label: "Why did you do it??",
        solution: {
          title: "School Project",
          description:
            "My teacher assigned my class a project to implement ROT13 and ZenitPolar in PHP, I don't like PHP that much, so I took it to javascript and after some over-engineerings I made this multi-framework platform called Encryptr, and I'm really proud of how it turned out",
        },
      },
    ],
  },
];

const Support: React.FC = () => {
  return (
    <>
      <Head title="Support" />

      <Header />

      <section className={styles.hero}>
        <Heading variant="title" className={styles.title}>
          Help Center
        </Heading>

        <Heading variant="text" className={styles.description}>
          (almost) everything you need will be in here
        </Heading>
      </section>

      <main className={styles.list}>
        {FAQ.map(({ title, questions }) => (
          <section key={title} className={styles.card}>
            <Heading variant="subtitle" className={styles.cardTitle}>
              {title}
            </Heading>

            <ul>
              {questions.map(({ label, solution }) => (
                <li key={label}>
                  <details>
                    <summary className={styles.cardLink}>
                      <Heading variant="text">{label}</Heading>

                      <Cog />
                    </summary>

                    <section>
                      <Heading variant="text" weight="bold">
                        {solution.title}
                      </Heading>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: solution.description,
                        }}
                      ></div>
                    </section>
                  </details>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
};

export default Support;
