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
        `justify-self-center border-4 ${
          color ? `border-${color}` : "border-white"
        } p-1 w-44 justify-self-center` + (Size ? Size : "h-10")
      }
    >
      <p
        className={`${
          color ? `text-${color}` : "text-white"
        } text-center font-bold`}
      >
        {children}
      </p>
    </div>
  );
}
