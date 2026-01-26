import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { TerminalNav } from "@/components/navigation/TerminalNav/TerminalNav";
import { Home } from "@/pages/Home";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { ScrollToTop } from "@/components/ScrollToTop"; // I'll create this to fix scroll on nav

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
      <TerminalNav />
    </div>
  );
}

export default App;
