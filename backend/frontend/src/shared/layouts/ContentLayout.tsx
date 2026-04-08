import React from 'react';

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '16px' }}>
      {children}
    </div>
  );
}