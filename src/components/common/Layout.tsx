import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-[390px] min-h-screen mx-auto bg-white overflow-x-clip">
      {children}
    </div>
  );
}
