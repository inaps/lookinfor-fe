import React from "react";
import styles from "./Icon.module.scss";
import cn from "classnames";

export type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export enum IconSize {
  Icon16 = 16,
  Icon24 = 24,
}

type Props = {
  iconComponent: IconComponent;
  size?: IconSize;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

export const Icon: React.FC<Props> = ({
  iconComponent: IconComponent,
  className,
  onClick,
  size = IconSize.Icon16,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
  };

  return (
    <div
      style={{ height: `${size}px`, width: `${size}px` }}
      className={cn(styles.iconContainer, className, {
        [styles.clickable]: onClick,
      })}
      onClick={handleClick}
      {...props}
    >
      <IconComponent className={styles.icon} />
    </div>
  );
};
