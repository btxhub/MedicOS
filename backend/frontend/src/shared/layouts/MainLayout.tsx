import React from "react";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <header>MedicOS</header>
      <main>{children}</main>
    </div>
  );
};