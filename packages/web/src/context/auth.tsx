import { nanoid } from "nanoid";
import {
  createContext,
  useState,
  useCallback,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

type ServiceDetails = {
  skip?: number;
  shift?: number;
  keys?: string[];
};

export type File = {
  id: string;
  label: string;
  content: string;
  service: string;
  details: ServiceDetails;
};

export type Folder = {
  id: string;
  label: string;
  files: File[];
};

export type User = {
  id: string;
  username: string;
  type: "business" | "client";
  email: string;
  password: string;

  files: File[];
  folders: Folder[];
};

type RegisterProps = {
  username: string;
  type: "business" | "client";
  email: string;
  password: string;
};

type LoginProps = {
  login: string;
  password: string;
};

type AuthError = {
  field: string;
  message: string;
};

type AuthContextProps = {
  user: User | null;
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;

  handleRegister: (
    props: RegisterProps
  ) => Promise<{ error: AuthError } | null>;
  handleLogin: (props: LoginProps) => Promise<{ error: AuthError } | null>;
  handleLogout: () => void;
  handleCreateFile: () => File;
  loadFileByID: (id: string) => File | null;
  handleUpdateFileTitle: (id: string, title: string) => void;
  deleteFileByID: (id: string) => void;
  handleUpdateFileContent: (
    id: string,
    content: string,
    customFile?: File
  ) => void;
  handleUpdateFileService: (
    id: string,
    service: string,
    customFile?: File
  ) => File;
  handleUpdateFileDetails: (id: string, details: ServiceDetails) => File;
  handleUpdateFilesOrder: (files: File[]) => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const localUsers = JSON.parse(
      localStorage.getItem("@encryptr:users") || "[]"
    ) as User[];
    setUsers(localUsers);

    const loggedUser = localStorage.getItem("@encryptr:logged-user-id");
    setCurrentUser(localUsers.find((user) => user.id === loggedUser) || null);
  }, []);

  const handleRegister = useCallback(
    async ({
      username,
      email,
      password,
      type,
    }: RegisterProps): Promise<{ error: AuthError } | null> => {
      // find user with same email or username
      const userWithUsernameAlreadyExists = users.find(
        (user) => user.username === username
      );

      if (userWithUsernameAlreadyExists) {
        return {
          error: {
            field: "username",
            message: `Username ${username} already taken`,
          },
        };
      }

      const userWithEmailAlreadyExists = users.find(
        (user) => user.email === email
      );

      if (userWithEmailAlreadyExists) {
        return {
          error: {
            field: "email",
            message: `E-mail ${email} already taken`,
          },
        };
      }

      const user: User = {
        id: nanoid(12),
        type,
        username,
        email,
        password,
        files: [],
        folders: [],
      };

      setCurrentUser(user);

      const newUsers = [user, ...users];
      setUsers(newUsers);
      localStorage.setItem("@encryptr:logged-user-id", user.id);
      localStorage.setItem("@encryptr:users", JSON.stringify(newUsers));

      return null;
    },
    [users]
  );

  const handleLogin = useCallback(
    async ({
      login,
      password,
    }: LoginProps): Promise<{ error: AuthError } | null> => {
      const user = users.find((user) => {
        if (user.email === login || user.username === login) {
          return user;
        }

        return null;
      });

      if (!user) {
        return {
          error: {
            field: "login",
            message: "Could not find your user :/",
          },
        };
      }

      if (user.password !== password) {
        return {
          error: {
            field: "password",
            message: "Boo, wrong password :(",
          },
        };
      }

      setCurrentUser(user);
      localStorage.setItem("@encryptr:logged-user-id", user.id);

      return null;
    },
    [users]
  );

  const handleCreateFile = useCallback(() => {
    const file: File = {
      id: nanoid(12),
      label: "",
      content: "",
      service: "ROT",
      details: {
        skip: 13,
      },
    };

    const newUser = {
      ...currentUser!,
      files: [file, ...currentUser!.files],
    };

    setCurrentUser(newUser);

    // save to localStorage
    const newUsers = [
      newUser,
      ...(users.filter((user) => user.id !== currentUser!.id) || []),
    ];

    setUsers(newUsers);

    localStorage.setItem("@encryptr:users", JSON.stringify(newUsers));

    return file;
  }, [currentUser, users]);

  const loadFileByID = useCallback(
    (id: string) => {
      return currentUser?.files.find((file) => file.id === id) || null;
    },
    [currentUser?.files]
  );

  const deleteFileByID = useCallback(
    (id: string) => {
      const newUser: User = {
        ...currentUser!,
        files: currentUser?.files.filter((file) => file.id !== id) || [],
      };

      setCurrentUser(newUser);

      // save to localStorage
      const newUsers = [
        newUser,
        ...(users.filter((user) => user.id !== currentUser!.id) || []),
      ];

      setUsers(newUsers);

      localStorage.setItem("@encryptr:users", JSON.stringify(newUsers));
    },
    [currentUser, users]
  );

  const handleUpdateFileTitle = useCallback(
    (id: string, title: string) => {
      const file = currentUser?.files.find((file) => file.id === id);

      if (!file) {
        // should return error
        return;
      }

      const newFile: File = {
        ...file,
        label: title,
      };

      const newUser = {
        ...currentUser!,
        files: [
          newFile,
          ...currentUser!.files.filter((file) => file.id !== id),
        ],
      };

      setCurrentUser(newUser);

      // save to localStorage
      const newUsers = [
        newUser,
        ...(users.filter((user) => user.id !== currentUser!.id) || []),
      ];

      setUsers(newUsers);

      localStorage.setItem("@encryptr:users", JSON.stringify(newUsers));
    },
    [currentUser, users]
  );

  const handleUpdateFileContent = useCallback(
    (id: string, content: string, customFile?: File) => {
      let file = customFile;
      if (!customFile) {
        // should return error
        file = currentUser?.files.find((file) => file.id === id);
      }

      const newFile: File = {
        ...file!,
        content,
      };

      const newUser = {
        ...currentUser!,
        files: [
          newFile,
          ...currentUser!.files.filter((file) => file.id !== id),
        ],
      };

      setCurrentUser(newUser);

      // save to localStorage
      const newUsers = [
        newUser,
        ...(users.filter((user) => user.id !== currentUser!.id) || []),
      ];

      setUsers(newUsers);

      localStorage.setItem("@encryptr:users", JSON.stringify(newUsers));
    },
    [currentUser, users]
  );

  const handleUpdateFileService = useCallback(
    (id: string, service: string, customFile?: File) => {
      let file = customFile;

      if (!customFile) {
        // should return error
        file = currentUser?.files.find((file) => file.id === id);
      }

      const newFile: File = {
        ...file!,
        service,
      };

      const newUser = {
        ...currentUser!,
        files: [
          newFile,
          ...currentUser!.files.filter((file) => file.id !== id),
        ],
      };

      setCurrentUser(newUser);

      // save to localStorage
      const newUsers = [
        newUser,
        ...(users.filter((user) => user.id !== currentUser!.id) || []),
      ];

      setUsers(newUsers);

      localStorage.setItem("@encryptr:users", JSON.stringify(newUsers));

      return newFile;
    },
    [currentUser, users]
  );

  const handleUpdateFileDetails = useCallback(
    (id: string, { skip, shift, keys }: ServiceDetails) => {
      const file = currentUser?.files.find((file) => file.id === id);

      const newFile: File = {
        ...file!,
        details: {
          keys,
          shift,
          skip,
        },
      };

      const newUser = {
        ...currentUser!,
        files: [
          newFile,
          ...currentUser!.files.filter((file) => file.id !== id),
        ],
      };

      setCurrentUser(newUser);

      // save to localStorage
      const newUsers = [
        ...(users.filter((user) => user.id !== currentUser!.id) || []),
        newUser,
      ];

      setUsers(newUsers);

      localStorage.setItem("@encryptr:users", JSON.stringify(newUsers));

      return newFile;
    },
    [currentUser, users]
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem("@encryptr:logged-user-id");
    setCurrentUser(null);
  }, []);

  const handleUpdateFilesOrder = useCallback(
    (files: File[]) => {
      const newFiles = files;

      const newUser: User = {
        ...currentUser!,
        files: newFiles,
      };

      const newUsers = [
        ...(users.filter((user) => user.id !== currentUser!.id) || []),
        newUser,
      ];

      setUsers(newUsers);

      localStorage.setItem("@encryptr:users", JSON.stringify(newUsers));
    },
    [currentUser, users]
  );

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        handleRegister,
        loadFileByID,
        handleUpdateFilesOrder,
        handleLogin,
        users,
        handleLogout,
        setUsers,
        deleteFileByID,
        handleCreateFile,
        handleUpdateFileTitle,
        handleUpdateFileContent,
        handleUpdateFileService,
        handleUpdateFileDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
