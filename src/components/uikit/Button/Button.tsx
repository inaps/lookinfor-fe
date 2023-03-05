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

  primary?: boolean;
  secondary?: boolean;
  text?: boolean;
};

export const Button: React.FC<Props> = ({
  formId,
  onClick,
  className,
  children,
  isDisabled = false,
  text,
  submit,
  primary,
  secondary,
  ...props
}) => {
  const handleClick = (event: React.SyntheticEvent) => {
    onClick?.(event);
  };

  return (
    <button
      key={formId}
      form={formId}
      type={submit ? "submit" : "button"}
      disabled={isDisabled}
      className={cn(styles.button, className, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.text]: text,
        // type && styles[type],
      })}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
