import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CommandsPage from "./pages/CommandsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import InvitePage from "./pages/InvitePage";
import SupportPage from "./pages/SupportPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/commands" element={<CommandsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/invite" element={<InvitePage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
