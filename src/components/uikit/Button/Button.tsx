import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type Props = {
  children: React.ReactNode;
  formId?: string;
  onClick?: (event?: React.SyntheticEvent) => void;
  submit?: boolean;
  className?: string;
  isDisabled?: boolean;
  type?: "text" | "default";
};

export const Button: React.FC<Props> = ({
  formId,
  onClick,
  className,
  children,
  isDisabled = false,
  submit,
  type = "default",
  ...props
}) => {
  const handleClick = (event: React.SyntheticEvent) => {
    onClick?.(event);
  };

  return (
    <button
      form={formId}
      type={submit ? "submit" : "button"}
      disabled={isDisabled}
      className={cn(styles.button, className, type && styles[type])}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
