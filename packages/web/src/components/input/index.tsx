import {
  ChangeEvent,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  SetStateAction,
  Dispatch,
} from "react";
import { nanoid } from "nanoid";

import styles from "./styles.module.scss";

type State = "error" | "warning" | "success" | "focused" | "none";

type InputProps = {
  placeholder: string;
  label?: string;
  disabled?: boolean;
  state?: State;
  message?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: "text" | "password";
};

export interface InputHandles {
  setState: Dispatch<SetStateAction<State>>;
  setValue: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}

type InputEvent = ChangeEvent<HTMLInputElement>;

const Input: React.ForwardRefRenderFunction<InputHandles, InputProps> = (
  {
    placeholder,
    disabled,
    message: Message = "",
    state: State = "none",
    label,
    rightIcon,
    leftIcon,
    type = "text",
    ...props
  },
  ref
) => {
  const [value, setValue] = useState("");
  const [state, setState] = useState<State>(State);
  const [message, setMessage] = useState(Message);

  const id = nanoid(6);

  const handleInputChange = useCallback((event: InputEvent) => {
    setValue(event.target.value);
  }, []);

  const handleFocus = useCallback(() => {
    setMessage("");
    setState("focused");
  }, []);

  const handleBlur = useCallback(() => {
    setState("none");
  }, []);

  useImperativeHandle(ref, () => {
    return {
      setMessage,
      setValue,
      setState,
    };
  });

  return (
    <div
      className={`${styles.inputWrapper} `}
      data-disabled={disabled}
      data-state={state}
      data-errored={!!message}
    >
      {label && <label htmlFor={id}>{label}</label>}

      <div className={styles.inputInnerWrapper}>
        {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}

        <input
          id={label ? id : ""}
          type={type}
          style={{
            paddingLeft: leftIcon ? `var(--size-400)` : "var(--size-200)",
            paddingRight: rightIcon ? `var(--size-400)` : "var(--size-200)",
          }}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          {...props}
        />

        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>

      {label && <span className={styles.message}>{message}</span>}
    </div>
  );
};

export default forwardRef(Input);
