import React, { useRef } from "react";
import { Button } from "../Button";
import { ReactComponent as IconClose } from "../../../assets/icons/icon-close.svg";
import styles from "./Modal.module.scss";
import { Icon } from "../Icon";
import { useClickOutside } from "../../../hooks/useClickOutside";
import cn from "classnames";

type Props = {
  title?: string;
  onClose: () => void;
  onConfirm: () => void;
  onAction?: () => void;
  text?: string;
  isCloseOutside?: boolean;
  buttonCloseText?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  buttonConfirmText?: string;
  buttonActionText?: string;
  headerClassName?: string;
};

export const Modal: React.FC<Props> = ({
  text,
  title,
  children,
  footer,
  onClose,
  onConfirm,
  isCloseOutside = true,
  buttonCloseText = "Отмена",
  buttonConfirmText = "Применить",
  headerClassName,
}) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, isCloseOutside ? onClose : () => null);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal} ref={modalRef}>
        <div className={cn(styles.header, headerClassName)}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <Icon iconComponent={IconClose} onClick={onClose} />
        </div>
        <div className={styles.content}>
          {text ? <div className={styles.text}>{text}</div> : children}
        </div>
        {footer ? (
          footer
        ) : (
          <div className={styles.footer}>
            <Button onClick={onConfirm}>{buttonConfirmText}</Button>
            <Button onClick={onClose} className={styles.buttonCancel}>
              {buttonCloseText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
