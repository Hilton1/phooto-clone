import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className="bg-[#f89c1b] text-white font-bold text-[11px] p-1 mx-4"
    >
      {children}

    </button>
  );
}
