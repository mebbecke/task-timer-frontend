import type { ComponentProps, ReactNode } from 'react';
import { type VariantProps } from 'tailwind-variants';
import * as styles from './Button.styles';

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof styles.buttonVariants> & {
    startIcon?: ReactNode;
  };

const Button = ({
  children,
  className,
  variant,
  size,
  startIcon,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={styles.buttonVariants({ variant, size, disabled, className })}
      disabled={disabled}
      {...props}
    >
      {startIcon && <span>{startIcon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};

export { Button, type ButtonProps };
