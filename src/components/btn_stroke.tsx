import { type ReactNode } from "react";

interface BtnStrokeProps {
  Size?: string;
  children: ReactNode;
}

export default function BtnStroke({ Size, children }: BtnStrokeProps) {
  return (
    <div className="border-4 border-white p-1 w-44 justify-self-center ">
      <p className="text-white text-center">{children}</p>
    </div>
  );
}
