import React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import cn from "classnames";
import styles from "./Form.module.scss";

type Props<T extends FieldValues> = {
  id: string;
  onSubmit: (data: T) => void;
  children: React.ReactElement | React.ReactNode;
  className?: string;
  form: UseFormReturn<T>;
};

export const Form = <T extends FieldValues>({
  id,
  className,
  onSubmit,
  children,
  form,
}: Props<T>) => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = form;

  return (
    <form id={id} className={cn(styles.form, className)} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children as React.ReactElement, (child) => {
        const {
          type,
          props: { id },
        } = child;

        return id
          ? React.createElement(type, {
              ...{
                ...child.props,
                register: register,
                value: getValues(id),
                error: errors[id],
                key: id,
              },
            })
          : child;
      })}
    </form>
  );
};
