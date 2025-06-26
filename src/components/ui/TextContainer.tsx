import { type HTMLAttributes } from "react";

type TextContainerProps = HTMLAttributes<HTMLDivElement>;

export default function TextContainer({
  children,
  className,
  ...rest
}: TextContainerProps) {
  return (
    <div
      className={`bg-black text-green-400 border-4 border-green-600 font-share-tech-mono p-4 rounded-sm shadow-lg tracking-wide ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
