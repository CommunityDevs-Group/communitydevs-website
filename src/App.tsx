import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Layout from "./components/layout/index"; 
import Home from "./pages/Home";
import CookieConsent from "./components/common/CookieConsent";

function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <Layout>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={i18n.language} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Layout>

      
      <CookieConsent />
    </Router>
  );
}

export default App;