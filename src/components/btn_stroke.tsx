import React from "react";

interface BtnStrokeProps {
  Size?: string;
}

export default function BtnStroke({ Size }: BtnStrokeProps) {
  return (
    <div className="border-4 border-white p-1 w-44 justify-self-center ">
      <p className="text-white">ver</p>
    </div>
  );
}
