import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { requestService } from "../../../services/requestsService";
import { Form } from "../../uikit/Form";
import { TextField } from "../../uikit/fields/TextField";
import { Button } from "../../uikit/Button";
import styles from "./Customer.module.scss";

const formId = "form";

export const Customer = () => {
  const form = useForm();

  const onSubmit = (form: FieldValues) => {
    requestService.createRequest(form);
  };

  return (
    <div className={styles.form}>
      <Form id={formId} onSubmit={onSubmit} form={form}>
        <TextField id="name" label="Название" />
        <TextField id="category" label="Категория" />
      </Form>
      <Button submit formId={formId} className={styles.buttonSubmit}>
        Ищу!
      </Button>
    </div>
  );
};
