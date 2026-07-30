import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Display({
  children,
  className = "",
}: Props) {
  return (
    <h1
      className={`font-[family-name:var(--font-display)] uppercase tracking-[0.45em] text-white ${className}`}
    >
      {children}
    </h1>
  );
}

export function Title({
  children,
  className = "",
}: Props) {
  return (
    <h2
      className={`font-[family-name:var(--font-display)] uppercase tracking-[0.3em] text-white ${className}`}
    >
      {children}
    </h2>
  );
}

export function Body({
  children,
  className = "",
}: Props) {
  return (
    <p
      className={`text-white/60 leading-8 ${className}`}
    >
      {children}
    </p>
  );
}