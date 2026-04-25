import React, { useState, useEffect } from 'react';
import { Layout, Button, message, Dropdown, Space } from 'antd';
import { 
  UserOutlined, 
  LogoutOutlined, 
  DownOutlined,
  PlayCircleOutlined,
  BookOutlined
} from '@ant-design/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COLORS } from '../components/color'; // Importation des couleurs depuis le fichier color.js

// IMPORTATION DE TON LOGO DEPUIS ASSETS
import logoImage from '../assets/logo.jpeg'; 

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem('user_session');
    if (session) setUser(JSON.parse(session));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user_session');
    setUser(null);
    message.success("Déconnecté avec succès");
    navigate('/');
    window.location.reload();
  };

  const itemsFormations = [
    {
      key: '1',
      label: <Link to="/formations">Formations Présentiel</Link>,
      icon: <BookOutlined />,
    },
    {
      key: '2',
      label: <Link to="/cours-en-ligne">Cours en Ligne</Link>,
      icon: <PlayCircleOutlined />,
    },
  ];

  return (
    <Header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      background: '#fff',
      padding: '0 5%',
      height: '90px', // Navbar un peu plus grande pour bien voir le logo
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      
      {/* 1. TON LOGO AVEC ANIMATION AU SURVOL */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        onClick={() => navigate('/')}
      >
        <img 
          src={logoImage} 
          alt="Elite Academy Logo" 
          style={{ height: '70px', width: 'auto', display: 'block' }} 
        />
      </motion.div>

      {/* 2. MENU CENTRAL ANIMÉ */}
      <Space size="large">
        <motion.div whileHover={{ y: -2 }}>
          <Link to="/" style={{ color: '#333', fontWeight: 'bold', fontSize: '15px' }}>ACCUEIL</Link>
        </motion.div>

        <Dropdown menu={{ items: itemsFormations }} placement="bottom" arrow>
          <motion.div 
            whileHover={{ y: -2 }} 
            style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '15px', color: '#333' }}
          >
            NOS FORMATIONS <DownOutlined style={{ fontSize: '12px' }} />
          </motion.div>
        </Dropdown>

        <motion.div whileHover={{ y: -2 }}>
          <Link to="/contact" style={{ color: '#333', fontWeight: 'bold', fontSize: '15px' }}>CONTACT</Link>
        </motion.div>
      </Space>

      {/* 3. BOUTON DE CONNEXION ANIMÉ */}
      <div style={{ minWidth: '150px', textAlign: 'right' }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {user ? (
            <Button 
              danger 
              type="primary"
              icon={<LogoutOutlined />} 
              onClick={handleLogout}
              style={{ borderRadius: '8px', height: '42px', fontWeight: 'bold' }}
            >
              DÉCONNEXION
            </Button>
          ) : (
            <Button 
              type="primary" 
              icon={<UserOutlined />} 
              onClick={() => navigate('/login')}
              style={{ 
                background:  COLORS.primary, 
                borderColor:  COLORS.primary,
                borderRadius: '8px', 
                height: '42px',
                padding: '0 25px',
                fontWeight: 'bold'
              }}
            >
              CONNEXION
            </Button>
          )}
        </motion.div>
      </div>

      <style>{`
        .ant-dropdown-menu-item:hover {
          background-color: #fffbe6 !important;
        }
      `}</style>
    </Header>
  );
};

export default Navbar;