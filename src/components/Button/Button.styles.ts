import { tv } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'flex items-center justify-center h-10 cursor-pointer text-white disabled:text-gray-400 rounded-lg py-2 px-4 gap-2 [&_svg]:size-4.5',
  variants: {
    variant: {
      primary: 'bg-primary hover:bg-primary-hover disabled:bg-primary/50',
      secondary:
        'bg-transparent hover:bg-border border-1 border-border disabled:bg-transparent',
      ghost:
        'bg-transparent hover:bg-border disabled:bg-transparent disabled:text-gray-400',
    },
    size: {
      icon: 'w-10 aspect-square',
      full: 'w-full',
    },
    disabled: {
      true: 'cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: { variant: 'primary' },
});

export { buttonVariants };
