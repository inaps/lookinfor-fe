import { Modal } from "../../../uikit/Modal";
import { userService } from "../../../../services/userService";
import React from "react";
import { Form } from "../../../uikit/Form";
import { useForm } from "react-hook-form";
import { TextField } from "../../../uikit/fields/TextField";

type Props = {
  onClose: () => void;
};

type CustomerLoginForm = {
  phone: string;
};

export const CustomerLoginModal: React.FC<Props> = ({ onClose }) => {
  const form = useForm<CustomerLoginForm>();

  const handleConfirm = () => {
    userService.loginCustomer();
  };

  return (
    <Modal onClose={onClose} isCloseOutside={false} title="Вход">
      <Form id="customerLogin" onSubmit={handleConfirm} form={form}>
        <TextField id="phone" />
      </Form>
    </Modal>
  );
};
