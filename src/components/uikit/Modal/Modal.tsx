import React, { useRef } from "react";
import { ReactComponent as IconClose } from "../../../assets/icons/icon-close.svg";
import styles from "./Modal.module.scss";
import { Icon } from "../Icon";
import { useClickOutside } from "../../../hooks/useClickOutside";
import cn from "classnames";

type Props = {
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  isCloseOutside?: boolean;
  headerClassName?: string;
};

export const Modal: React.FC<Props> = ({
  title,
  children,
  onClose,
  isCloseOutside = true,
  headerClassName,
}) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, isCloseOutside ? onClose : () => null);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal} ref={modalRef}>
        <div className={cn(styles.header, headerClassName)}>
          <h2 className={styles.title}>{title}</h2>
          <Icon iconComponent={IconClose} onClick={onClose} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
