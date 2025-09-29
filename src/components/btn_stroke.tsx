import { type ReactNode } from "react";

interface BtnStrokeProps {
  Size?: string;
  children?: ReactNode;
  color?: string;
}

export default function BtnStroke({ color, Size, children }: BtnStrokeProps) {
  return (
    <div
      className={
        `justify-center border-4 ${
          color ? `border-${color}` : "border-white"
        } p-1 w-44 lg:w-64 xl:w-64 xl:h-12  md:w-86 justify-self-center text-center items-center min-h-10 ` +
        (Size ? Size : "h-15")
      }
    >
      <p
        className={`${
          color ? `text-${color}` : "text-white"
        } text-center font-semibold text-sm cursor-pointer xl:text-2xl`}
      >
        {children}
      </p>
    </div>
  );
}
