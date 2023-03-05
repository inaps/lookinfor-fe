import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { requestService } from "../../../services/requestsService";
import { Form } from "../../uikit/Form";
import { TextField } from "../../uikit/fields/TextField";
import { Button } from "../../uikit/Button";
import { NewRequest } from "../../../types/common";
import styles from "./Customer.module.scss";

const formId = "form";

export const Customer = () => {
  const [isCreated, setIsCreated] = useState(false);
  const form = useForm<NewRequest>();

  const onSubmit = (formData: NewRequest) => {
    requestService.createRequest(formData);
    form.reset();
    setIsCreated(true);
  };

  const resetCreatedStatus = () => {
    setIsCreated(false);
  };

  if (isCreated) {
    return (
      <div className={styles.createdRequest}>
        <span className={styles.message}>Запрос создан!</span>
        <Button primary onClick={resetCreatedStatus} className={styles.buttonRepeatRequest}>
          Ищете что-нибудь ещё?
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <Form id={formId} onSubmit={onSubmit} form={form}>
        <TextField id="name" label="Название" />
        <TextField id="category" label="Категория" />
        <TextField id="contacts" label="Связь со мной" />
      </Form>
      <Button submit primary formId={formId} className={styles.buttonSubmit}>
        Ищу!
      </Button>
    </div>
  );
};
