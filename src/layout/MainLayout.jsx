import { TopNav } from "@/components/navigation/TopNav";
import { SideNav } from "@/components/navigation/SideNav";
import { ScrollToTop } from "@/components/ScrollToTop";

import { useState } from "react";

export const MainLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ScrollToTop />
      <TopNav
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <SideNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
            {/* 
        Adjust margin-left (ml-64) to account for the fixed SideNav.
        Adjust padding-top (pt-20) to account for the fixed TopNav.
      */}
            <main className="pt-24 pl-0 md:pl-64 transition-all duration-300">
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                    {children}
                </div>
            </main>
        </div>
    );
};
