import React from "react";
import cn from "classnames";
import styles from "./FieldLabel.module.scss";

type Props = {
  label: string;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
};

export const FieldLabel: React.FC<Props> = ({ children, label, className, labelClassName }) => {
  return (
    <div className={cn(styles.fieldLabel, className)}>
      <label className={cn(styles.label, labelClassName)}>{label}</label>
      {children}
    </div>
  );
};
