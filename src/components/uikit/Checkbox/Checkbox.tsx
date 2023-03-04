import React from "react";
import { ReactComponent as IconCheckmark } from "../../../assets/icons/icon-checkmark.svg";
import styles from "./Checkbox.module.scss";
import { Icon } from "../Icon";
import cn from "classnames";

type Props = {
  isChecked: boolean;
  onChange?: (isChecked: boolean) => void;
};

export const Checkbox: React.FC<Props> = ({ isChecked, onChange, ...props }) => {
  const toggleCheckbox = () => {
    onChange?.(!isChecked);
  };

  return (
    <label className={styles.checkboxContainer} {...props}>
      <input
        type="checkbox"
        checked={isChecked}
        className={styles.input}
        onChange={toggleCheckbox}
      />
      <span
        className={cn(styles.checkmark, {
          [styles.checked]: isChecked,
        })}
      >
        {isChecked && <Icon iconComponent={IconCheckmark} className={styles.iconCheck} />}
      </span>
    </label>
  );
};
