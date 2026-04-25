import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Button, Tag, Space, message, Divider } from 'antd';
import { 
  PlayCircleOutlined, 
  FilePdfOutlined, 
  LockFilled,
  UnlockFilled,
  ThunderboltFilled,
  ClockCircleOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../components/color'; // Importation des couleurs depuis le fichier color.js

const { Title, Text, Paragraph } = Typography;

const CoursEnLigne = () => {
  const navigate = useNavigate();
  
  // État utilisateur (à lier plus tard à Firebase/Base de données)
  const [user, setUser] = useState({
    isLoggedIn: false, 
    purchasedCourses: [2] // Simule que le cours ID 2 est déjà payé
  });

  // Liste des cours (même structure que tes formations présentiel)
  const coursVideos = [
    {
      id: 1,
      titre: "Développement Web React.js",
      description: "Apprenez à créer des interfaces modernes et dynamiques avec le framework le plus populaire.",
      prix: "15 000",
      duree: "15h 30min",
      modules: "12 Modules",
      niveau: "Avancé",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800"
    },
    {
      id: 2,
      titre: "Maîtrise de Microsoft Excel",
      description: "Des bases aux fonctions avancées (VLOOKUP, Tableaux croisés dynamiques) pour le milieu pro.",
      prix: "5 000",
      duree: "08h 45min",
      modules: "08 Modules",
      niveau: "Débutant",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800"
    },
    {
      id: 3,
      titre: "Design UI/UX avec Figma",
      description: "Concevez des maquettes professionnelles et des prototypes interactifs pour vos projets.",
      prix: "10 000",
      duree: "10h 00min",
      modules: "10 Modules",
      niveau: "Intermédiaire",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800"
    }
  ];

  const handleAccess = (cours) => {
    if (!user.isLoggedIn) {
      message.info("Veuillez vous connecter pour acheter ou voir vos cours.");
      navigate('/login');
      return;
    }

    const hasPaid = user.purchasedCourses.includes(cours.id);
    if (hasPaid) {
      navigate(`/watch/${cours.id}`);
    } else {
      // Ici tu lanceras ton processus de paiement Orange Money
      message.loading("Initialisation du paiement Orange Money...", 2);
    }
  };

  return (
    <div style={{ background: '#f0f2f5', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* HEADER STYLE FORMATION */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1A237E 0%, #0d47a1 100%)', 
        padding: '60px 10%', 
        color: '#fff',
        textAlign: 'center' 
      }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Title style={{ color:  COLORS.secondary, marginBottom: '10px' }}>E-Learning Elite</Title>
          <Paragraph style={{ color: '#fff', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Accédez à nos formations vidéos haute définition. Apprenez à votre rythme, payez une fois via Orange Money, accédez à vie.
          </Paragraph>
        </motion.div>
      </section>

      {/* GRILLE DE COURS (Style identique aux formations présentiel) */}
      <div style={{ padding: '50px 10%' }}>
        <Row gutter={[32, 32]}>
          {coursVideos.map((cours) => {
            const isOwned = user.purchasedCourses.includes(cours.id);

            return (
              <Col xs={24} sm={12} lg={8} key={cours.id}>
                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <Card
                    hoverable
                    cover={
                      <div style={{ position: 'relative' }}>
                        <img alt={cours.titre} src={cours.image} style={{ height: 220, objectFit: 'cover', width: '100%' }} />
                        <Tag color={isOwned ? "#25D366" :  COLORS.primary} style={{ position: 'absolute', top: 15, right: 10, borderRadius: '5px', padding: '2px 10px' }}>
                          {isOwned ? "DÉBLOQUÉ" : cours.niveau}
                        </Tag>
                      </div>
                    }
                    style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
                    actions={[
                      <Button 
                        type="text" 
                        icon={isOwned ? <PlayCircleOutlined style={{color: '#25D366'}} /> : <ThunderboltFilled style={{color:  COLORS.secondary}} />}
                        style={{ fontWeight: 'bold', color: isOwned ? '#25D366' :  COLORS.primary }}
                        onClick={() => handleAccess(cours)}
                      >
                        {isOwned ? "REPRENDRE LE COURS" : `ACHETER (${cours.prix} FCFA)`}
                      </Button>
                    ]}
                  >
                    <Title level={4} style={{ marginBottom: 10, height: '50px', overflow: 'hidden' }}>{cours.titre}</Title>
                    <Paragraph type="secondary" ellipsis={{ rows: 2 }}>{cours.description}</Paragraph>
                    
                    <Divider style={{ margin: '15px 0' }} />
                    
                    <Row justify="space-between">
                      <Space><ClockCircleOutlined /> <Text type="secondary">{cours.duree}</Text></Space>
                      <Space><FilePdfOutlined /> <Text type="secondary">{cours.modules}</Text></Space>
                    </Row>
                  </Card>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>

      {/* SECTION RÉASSURANCE */}
      <section style={{ textAlign: 'center', marginTop: '20px' }}>
        <Title level={3} style={{ color:  COLORS.primary }}>Pourquoi choisir nos cours en ligne ?</Title>
        <Space size="large" split={<Divider type="vertical" />}>
          <Text strong><UnlockFilled style={{ color:  COLORS.secondary }} /> Accès illimité</Text>
          <Text strong><ThunderboltFilled style={{ color:  COLORS.secondary }} /> Support WhatsApp</Text>
          <Text strong><ArrowRightOutlined style={{ color:  COLORS.secondary }} /> Certificat inclus</Text>
        </Space>
      </section>
    </div>
  );
};

export default CoursEnLigne;
