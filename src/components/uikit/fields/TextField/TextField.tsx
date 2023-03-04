import React from "react";
import cn from "classnames";
import styles from "./TextField.module.scss";
import { IconComponent } from "../../Icon";
import { FieldLabel } from "../../LabelWrapper";
import { FieldError, FieldValues } from "react-hook-form";
import { UseFormRegister } from "react-hook-form/dist/types/form";

type SelfProps = {
  id: string;
  label: string;
  isRequired?: boolean;
  isClearable?: boolean;
  className?: string;
  placeholder?: string;
  renderIcon?: () => React.ReactNode;
  icon?: IconComponent;
};

export type FormFieldProps = {
  value: string;
  register: UseFormRegister<FieldValues>;
  error: FieldError;
  onClear: () => void;
};

type Props = SelfProps & Partial<FormFieldProps>;

export const TextField: React.FC<Props> = ({
  id,
  isRequired,
  register,
  error,
  className,
  placeholder,
  label,
}) => {
  return (
    <FieldLabel label={label} className={className}>
      <div className={cn(styles.inputContainer, className)}>
        <input
          placeholder={placeholder}
          className={cn(styles.input, { [styles.hasError]: error })}
          {...register?.(id, { required: isRequired })}
        />
      </div>
      {error && <span className={styles.errorMessage}>Обязательное поле</span>}
    </FieldLabel>
  );
};
