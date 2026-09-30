import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  readonly as?: "div" | "section" | "header" | "footer" | "article";
  readonly size?: "editorial" | "ultrawide";
  readonly children: React.ReactNode;
}

/**
 * Responsive Editorial Container
 * Supports 375px, 414px, 768px, 1024px, 1366px, 1920px+ with controlled horizontal rhythm.
 */
export function Container({
  as: Component = "div",
  size = "editorial",
  className = "",
  children,
  ...props
}: ContainerProps) {
  const maxWidthClass =
    size === "ultrawide" ? "max-w-ultrawide" : "max-w-editorial";

  return (
    <Component
      className={`mx-auto w-full px-5 sm:px-6 md:px-10 lg:px-12 xl:px-16 ${maxWidthClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
