import { type HTMLAttributes } from "react";

type TextContainerProps = HTMLAttributes<HTMLDivElement>;

export default function TextContainer({
  children,
  className,
  ...rest
}: TextContainerProps) {
  return (
    <div
      className={`text-white bg-amber-600 border-4 border-amber-800 p-4 ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
}
