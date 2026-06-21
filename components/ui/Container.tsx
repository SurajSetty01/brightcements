import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`px-2 md:px-8 lg:px-12 xl:px-24 2xl:px-40 ${className}`}
    >
      {children}
    </div>
  );
}
