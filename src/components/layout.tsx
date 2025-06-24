import { MainNav } from "@/components/main-nav";
import { GoBackButton } from "@/components/go-back-button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainNav />
                  <main className="py-10">
        <GoBackButton />
        {children}
      </main>
    </>
  );
}
