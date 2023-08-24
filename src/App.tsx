import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginP from "./pages/LoginP";
import AdminLayout from "./components/layout";
import DashboardP from "./pages/DashboardP";
import UsersP from "./pages/UsersP";
import ExperiencesP from "./pages/ExperiencesP";
import SkillsP from "./pages/SkillsP";
import EducationP from "./pages/EducationP";
import MessagesP from "./pages/MessagesP";
import AboutP from "./pages/AboutP";
import {registerAuth, useAuth} from "./states/auth";
import RegisterP from "./pages/RegiterP";
import ProjectsP from "./pages/Projects";
import ContactP from "./pages/ContactP";

function App() {
  const { isAuthenticated } = useAuth();
  const { isRegisterAuthenticated } = registerAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginP />}/>
        <Route path="/register" element={isRegisterAuthenticated ? <Navigate to="/dashboard"/> : <RegisterP/>}/>
        <Route path={('/' || '/register')} element={<AdminLayout />}>
          <Route path="dashboard" element={(isAuthenticated || isRegisterAuthenticated)  ? <DashboardP /> : <Navigate to="/" />}/>
          <Route path="users" element={<UsersP />} />
          <Route path="experiences" element={<ExperiencesP />} />
          <Route path="skills" element={<SkillsP />} />
          <Route path="education" element={<EducationP />} />
          <Route path="messages" element={<MessagesP />} />
          <Route path="about" element={<AboutP />} />
          <Route path="projects" element={<ProjectsP />} />
          <Route path="contact" element={<ContactP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
