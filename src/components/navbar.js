import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importation pour l'animation
import logoElite from '../assets/logo.jpeg'; 

const { Header } = Layout;

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100 }} // Commence hors de l'écran (en haut)
      animate={{ y: 0 }}    // Descend à sa position normale
      transition={{ duration: 0.5 }} // Durée de l'animation
    >
      <Header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        background: '#FFFFFF', 
        padding: '0 50px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        height: '90px',
        lineHeight: '90px'
      }}>
        
        {/* Logo animé : il grossit légèrement au survol */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoElite} alt="Logo" style={{ height: '70px', width: 'auto' }} />
          </Link>
        </motion.div>

        <Menu 
          mode="horizontal" 
          style={{ background: 'transparent', borderBottom: 'none', minWidth: '400px', justifyContent: 'flex-end' }}
        >
          {['Accueil', 'Formations', 'Contact'].map((item, index) => (
            <Menu.Item key={index}>
              {/* Chaque lien de menu s'anime au survol */}
              <motion.div
                whileHover={{ y: -3, color: '#FFB300' }} // Monte de 3px et change de couleur
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link 
                  to={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`} 
                  style={{ color: '#000000', fontWeight: '500' }}
                >
                  {item}
                </Link>
              </motion.div>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </motion.div>
  );
};

export default Navbar;