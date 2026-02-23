import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layout/MainLayout";
import { Home } from "@/pages/Home";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Footer } from "@/layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </MainLayout>
  );
}

export default App;
