import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  FacebookFilled, 
  WhatsAppOutlined,
  LinkedinFilled 
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // On utilise motion pour l'animation
import { COLORS } from '../components/color'; // Importation des couleurs depuis le fichier color.js

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const AppFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Configuration de l'animation au survol
  const iconHover = {
    scale: 1.3,
    transition: { duration: 0.3 }
  };

  return (
    <Footer style={{ background:  COLORS.primary, color: '#fff', padding: '60px 10% 30px' }}>
      <Row gutter={[32, 32]}>
        
        {/* COLONNE 1 : À PROPOS */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color:  COLORS.secondary }}>Elite Academy</Title>
          <Paragraph style={{ color: '#e0e0e0', marginTop: '20px' }}>
            Le centre de formation de référence à Bamako pour maîtriser les technologies du futur.
          </Paragraph>
          
          {/* ICÔNES DYNAMIQUES */}
          <Space size="large" style={{ marginTop: '15px' }}>
            <motion.div whileHover={{ ...iconHover, color: '#1877F2' }} style={{ color: '#e0e0e0', cursor: 'pointer' }}>
              <FacebookFilled style={{ fontSize: '26px' }} />
            </motion.div>
            
            <motion.div whileHover={{ ...iconHover, color: '#25D366' }} style={{ color: '#e0e0e0', cursor: 'pointer' }}>
              <WhatsAppOutlined style={{ fontSize: '26px' }} />
            </motion.div>
            
            <motion.div whileHover={{ ...iconHover, color: '#0A66C2' }} style={{ color: '#e0e0e0', cursor: 'pointer' }}>
              <LinkedinFilled style={{ fontSize: '26px' }} />
            </motion.div>
          </Space>
        </Col>

        {/* COLONNE 2 : NAVIGATION */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color:  COLORS.secondary }}>Navigation</Title>
          <Space direction="vertical" size="middle" style={{ marginTop: '20px' }}>
            <Link to="/" onClick={scrollToTop} className="footer-link">Accueil</Link>
            <Link to="/formations" onClick={scrollToTop} className="footer-link">Formations</Link>
            <Link to="/cours-en-ligne" onClick={scrollToTop} className="footer-link">Cours en ligne</Link>
            <Link to="/contact" onClick={scrollToTop} className="footer-link">Contact</Link>
          </Space>
        </Col>

        {/* COLONNE 3 : CONTACT */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color:  COLORS.secondary }}>Contact</Title>
          <Space direction="vertical" size="middle" style={{ marginTop: '20px' }}>
            <Text style={{ color: '#e0e0e0' }}><EnvironmentOutlined style={{ color:  COLORS.secondary }} /> Bamako, Mali</Text>
            <Text style={{ color: '#e0e0e0' }}><PhoneOutlined style={{ color:  COLORS.secondary }} /> +223 70 00 00 00</Text>
            <Text style={{ color: '#e0e0e0' }}><MailOutlined style={{ color:  COLORS.secondary }} /> contact@eliteacademy.ml</Text>
          </Space>
        </Col>
      </Row>

      <Divider style={{ borderColor: '#303f9f', margin: '40px 0 20px' }} />
      
      <div style={{ textAlign: 'center', color: '#9fa8da' }}>
        Elite Academy ©{new Date().getFullYear()} — Créé par <strong>Sekou Diaby & Fatoumata Traoré</strong>
      </div>

      {/* CSS INTERNE POUR LES LIENS (Optionnel si tu n'as pas de fichier .css) */}
      <style>{`
        .footer-link {
          color: #e0e0e0;
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: #FFB300 !important;
          padding-left: 5px;
        }
      `}</style>
    </Footer>
  );
};

export default AppFooter;