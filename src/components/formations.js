import React, { useState } from 'react';
import { Typography, Row, Col, Card, Button, Modal, Form, Input, Space, Badge } from 'antd';
import { 
  CodeOutlined, 
  DesktopOutlined, 
  LaptopOutlined, 
  RocketOutlined, 
  CheckCircleFilled,
  ArrowRightOutlined 
} from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS } from '../components/color'; // Importation des couleurs depuis le fichier color.js

const { Title, Text, Paragraph } = Typography;

const Formations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState(null);

  const listeFormations = [
    { id: 1, titre: "Bureautique Avancée", prix: "40 000 FCFA", icon: <DesktopOutlined />, color: "#1A237E", desc: "Maîtrisez Excel, Word et PowerPoint comme un pro." },
    { id: 2, titre: "Développement Web", prix: "150 000 FCFA", icon: <CodeOutlined />, color: "#FFB300", desc: "Devenez développeur Fullstack (React, Node, JS)." },
    { id: 3, titre: "Maintenance & Réseau", prix: "75 000 FCFA", icon: <LaptopOutlined />, color: "#1A237E", desc: "Installation, configuration et dépannage système." },
    { id: 4, titre: "Design Graphique", prix: "40 000 FCFA", icon: <RocketOutlined />, color: "#FFB300", desc: "Création de logos et visuels avec la Suite Adobe." },
  ];

  // Animation pour l'apparition des cartes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <div style={{ 
      background: '#f0f2f5', 
      padding: '60px 5%', 
      minHeight: '100vh',
      fontFamily: "'Poppins', sans-serif" 
    }}>
      
      {/* HEADER DE LA PAGE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <Badge status="processing" text={<Text strong style={{ color:  COLORS.secondary }}>INSCRIPTIONS OUVERTES</Text>} />
        <Title style={{ color:  COLORS.primary , fontSize: '3rem', marginTop: '10px' }}>
          Nos Catalogues <span style={{ borderBottom: '4px solid #FFB300' }}>Elite</span>
        </Title>
      </motion.div>

      {/* GRILLE DES FORMATIONS */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Row gutter={[32, 32]}>
          {listeFormations.map((f) => (
            <Col xs={24} md={12} lg={6} key={f.id}>
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <Card
                  hoverable
                  style={{ 
                    borderRadius: '20px', 
                    border: 'none', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    overflow: 'hidden'
                  }}
                  bodyStyle={{ padding: '24px' }}
                >
                  {/* Icône et Titre */}
                  <div style={{ 
                    background: f.color, 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '15px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '24px',
                    color: '#fff',
                    marginBottom: '20px'
                  }}>
                    {f.icon}
                  </div>
                  
                  <Title level={4} style={{ color:  COLORS.primary  }}>{f.titre}</Title>
                  <Paragraph type="secondary" style={{ height: '45px' }}>{f.desc}</Paragraph>
                  
                  <div style={{ borderTop: '1px solid #eee', marginTop: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text strong style={{ fontSize: '1.2rem', color:  COLORS.primary  }}>{f.prix}</Text>
                    
                    {/* LE BOUTON DYNAMIQUE (LE B) */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        onClick={() => { setSelectedFormation(f); setIsModalOpen(true); }}
                        type="primary"
                        icon={<ArrowRightOutlined />}
                        style={{ 
                          background: f.color ===  COLORS.secondary ?  COLORS.primary  :  COLORS.secondary, 
                          borderColor: 'transparent',
                          height: '45px',
                          borderRadius: '10px',
                          fontWeight: 'bold',
                          boxShadow: '0 4px 14px 0 rgba(0,0,0,0.2)'
                        }}
                      >
                        Postuler
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      {/* FORMULAIRE D'INSCRIPTION MODAL */}
      <Modal 
        open={isModalOpen} 
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        centered
        width={450}
        bodyStyle={{ padding: '0' }}
        style={{ borderRadius: '20px', overflow: 'hidden' }}
      >
        <div style={{ background:  COLORS.primary , padding: '30px', textAlign: 'center', color: '#fff' }}>
          <CheckCircleFilled style={{ fontSize: '50px', color:  COLORS.secondary, marginBottom: '15px' }} />
          <Title level={3} style={{ color: '#fff', margin: 0 }}>Candidature</Title>
          <Text style={{ color: '#bdc3c7' }}>{selectedFormation?.titre}</Text>
        </div>
        
        <div style={{ padding: '30px' }}>
          <Form layout="vertical">
            <Form.Item label={<strong>Nom Complet</strong>}><Input size="large" placeholder="Sékou Diaby" /></Form.Item>
            <Form.Item label={<strong>Téléphone</strong>}><Input size="large" placeholder="+223 ..." /></Form.Item>
            <Form.Item label={<strong>Niveau actuel</strong>}><Input size="large" placeholder="Ex: Licence 2" /></Form.Item>
            <Button 
              block 
              size="large" 
              style={{ 
                background:  COLORS.secondary, 
                color: '#fff', 
                height: '50px', 
                fontWeight: 'bold', 
                borderRadius: '10px',
                border: 'none',
                marginTop: '10px'
              }}
              onClick={() => { 
                alert('Dossier envoyé ! Nous vous contacterons bientôt.'); 
                setIsModalOpen(false); 
              }}
            >
              ENVOYER MON DOSSIER
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Formations;