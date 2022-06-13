import {
  ChangeEvent,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  SetStateAction,
  Dispatch,
  useEffect,
  InputHTMLAttributes,
} from "react";
import { nanoid } from "nanoid";

import styles from "./styles.module.scss";

type State = "error" | "warning" | "success" | "focused" | "none";

type Type = "text" | "password" | "email" | "number";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  label?: string;
  disabled?: boolean;
  state?: State;
  message?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "input" | "textarea";
  type?: Type;
  value?: string | number;
  inputWrapperClassname?: string;
  handleInputChange?: (
    event: InputEvent | ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export interface InputHandles {
  type: Type;
  value: string;
  id: string | null;

  setState: Dispatch<SetStateAction<State>>;
  setValue: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<Type>>;
  setDisabled: Dispatch<SetStateAction<boolean>>;
}

type InputEvent = ChangeEvent<HTMLInputElement>;

const Input: React.ForwardRefRenderFunction<InputHandles, InputProps> = (
  {
    variant = "input",
    placeholder,
    disabled: Disabled = false,
    message: Message = "",
    state: State = "none",
    label,
    rightIcon,
    leftIcon,
    type: Type = "text",
    handleInputChange: handleChange,
    style,
    inputWrapperClassname,
    ...props
  },
  ref
) => {
  const [disabled, setDisabled] = useState(Disabled);
  const [value, setValue] = useState("");
  const [state, setState] = useState<State>(State);
  const [message, setMessage] = useState(Message);
  const [type, setType] = useState(Type);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setId(nanoid(6));
  }, []);

  const handleInputChange = useCallback(
    (event: InputEvent | ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
      handleChange && handleChange(event);
    },
    [handleChange]
  );

  const handleFocus = useCallback(() => {
    setMessage("");
    setState("focused");
  }, []);

  const handleBlur = useCallback(() => {
    setState("none");
  }, []);

  useImperativeHandle<InputHandles, InputHandles>(ref, () => {
    return {
      handleInputChange,
      setMessage,
      setValue,
      setState,
      setType,
      type,
      setDisabled,
      value,
      id,
    };
  });

  return (
    <div
      className={`${styles.inputWrapper}`}
      data-disabled={disabled}
      data-state={state}
      data-errored={!!message}
      style={style}
    >
      {label && <label htmlFor={`input-${id!}`}>{label}</label>}

      <div className={`${styles.inputInnerWrapper} ${inputWrapperClassname}`}>
        {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}

        {variant === "input" && (
          <input
            id={`input-${id!}`}
            type={type}
            style={{
              paddingLeft: leftIcon ? `var(--size-600)` : "var(--size-200)",
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
        )}

        {variant === "textarea" && (
          <textarea
            id={`input-${id!}`}
            style={{
              paddingLeft: leftIcon ? `var(--size-400)` : "var(--size-200)",
              paddingRight: rightIcon ? `var(--size-400)` : "var(--size-200)",
            }}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            rows={10}
            // @ts-ignore
            onFocus={handleFocus}
            // @ts-ignore
            onBlur={handleBlur}
            // @ts-ignore
            onChange={handleInputChange}
            {...props}
          ></textarea>
        )}

        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>

      {label && <span className={styles.message}>{message}</span>}
    </div>
  );
};

export default forwardRef(Input);
