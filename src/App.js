import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des composants que tu as créés
import Navbar from './components/navbar';
import Footer from './components/footer';
import Accueil from './accueil';
const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* La barre de navigation est appelée ici une seule fois */}
        <Navbar />
        
        <Content style={{ flex: 1 }}>
          <Routes>
            {/* La page d'accueil est appelée ici via sa route */}
            <Route path="/" element={<Accueil />} />
            
            {/* Plus tard, tu ajouteras tes autres pages ici :
            <Route path="/formations" element={<Formations />} /> 
            */}
          </Routes>
        </Content>

        {/* Le bas de page est appelé ici une seule fois */}
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;