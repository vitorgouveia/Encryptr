import { nanoid } from "nanoid";
import { createContext, useState, useCallback, useEffect } from "react";

type User = {
  id: string;
  username: string;
  type: "business" | "client";
  email: string;
  password: string;
};

type RegisterProps = Omit<User, "id">;

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

  handleRegister: (
    props: RegisterProps
  ) => Promise<{ error: AuthError } | null>;
  handleLogin: (props: LoginProps) => Promise<{ error: AuthError } | null>;
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
      console.log(user);
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

  return (
    <AuthContext.Provider
      value={{ user: currentUser, handleRegister, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
