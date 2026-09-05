import { TopNav } from "@/components/navigation/TopNav";
import { ScrollToTop } from "@/components/ScrollToTop";

export const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollToTop />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <TopNav />
      <main className="pt-[5.5rem]">{children}</main>
    </div>
  );
};
