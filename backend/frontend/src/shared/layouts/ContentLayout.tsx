import { ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
}

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div>
      {children}
    </div>
  );
};