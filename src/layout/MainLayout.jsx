import { TopNav } from "@/components/navigation/TopNav";
import { ScrollToTop } from "@/components/ScrollToTop";

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <TopNav />
      <main className="pt-28 md:pt-32">{children}</main>
    </div>
  );
};
