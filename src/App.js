import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Accueil from './accueil';
import Formations from './components/formations';
import Contact from './components/contact';
import CoursEnLigne from './components/coursenligne'; // 1. Importe la nouvelle page
import Login from './components/login'; // 1. Importe la page de connexion

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/cours-en-ligne" element={<CoursEnLigne />} /> {/* 2. Ajoute la route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> {/* 2. Ajoute la route pour la page de connexion
         */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;