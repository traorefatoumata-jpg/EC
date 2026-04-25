import React from 'react';
import { Typography, Button, Row, Col, Card, Space, Divider, Tag } from 'antd';
import { 
  PlayCircleOutlined, 
  RocketOutlined, 
  EnvironmentOutlined, 
  ArrowRightOutlined,
  CheckCircleFilled,
  TeamOutlined,
  ThunderboltFilled 
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { COLORS } from './components/color'; // Importation des couleurs depuis le fichier color.js
const { Title, Paragraph, Text } = Typography;

const Accueil = () => {
  const navigate = useNavigate();

  return (
    <div style={{ overflowX: 'hidden', fontFamily: "'Poppins', sans-serif" }}>
      
      {/* SECTION HERO : BANNIÈRE PRINCIPALE */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1A237E 0%, #0d47a1 100%)', 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 10%',
        color: '#fff',
        position: 'relative'
      }}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div 
              initial={{ x: -50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }}
            >
              <Tag color={COLORS.secondary} style={{ marginBottom: '15px', fontWeight: 'bold', color: COLORS.primary, marginTop: '10px' }}>
                BIENVENUE CHEZ ELITE ACADEMY
              </Tag>
              <Title style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '10px', lineHeight: 1.2 }}>
                L'Excellence au service de votre <span style={{ color: COLORS.secondary }}>Avenir</span>.
              </Title>
              <Paragraph style={{ color: '#e0e0e0', fontSize: '1.2rem', marginBottom: '40px' }}>
                Maîtrisez les outils numériques et devenez un expert convoité. 
                Que vous préfériez nos classes à Bamako ou la liberté du cours en ligne.
              </Paragraph>
              <Space size="large">
                <Button 
                  type="primary" 
                  size="large" 
                  icon={<RocketOutlined />}
                  style={{ background: COLORS.secondary, borderColor: COLORS.secondary, height: '50px', fontWeight: 'bold', color:  COLORS.primary , marginBottom: '10px' }}
                  onClick={() => navigate('/formations')}
                >
                  VOIR LES FORMATIONS
                </Button>
                <Button 
                  ghost 
                  size="large" 
                  style={{ height: '50px', color:'#fff', background: COLORS.primary, borderColor:'#fff', marginBottom: '10px'}}
                  onClick={() => navigate('/contact')}
                >
                  NOUS CONTACTER
                </Button>
              </Space>
            </motion.div>
          </Col>
          <Col xs={0} lg={12}>
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" 
              alt="Elite Academy Training" 
              style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            />
          </Col>
        </Row>
      </section>

      {/* SECTION : NOS 2 MODES D'APPRENTISSAGE */}
      <section style={{ padding: '80px 10%', background: '#f0f2f5' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={2} style={{ color: COLORS.primary }}>Comment souhaitez-vous apprendre ?</Title>
          <Divider style={{ borderColor: COLORS.secondary, width: '100px', minWidth: '100px', margin: '20px auto' }} />
          <Text type="secondary" style={{ fontSize: '1.1rem' }}>Des solutions adaptées à vos besoins au Mali.</Text>
        </div>

        <Row gutter={[32, 32]}>
          {/* CARTE 1 : PRÉSENTIEL */}
          <Col xs={24} lg={12}>
            <motion.div whileHover={{ y: -10 }} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card 
                title={<Space><TeamOutlined style={{ color: 'COLORS.primary' }} /> Formation en Présentiel</Space>}
                style={{ borderRadius: '20px', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                bodyStyle={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'space-between' }}
              >
                <div>
                  <Paragraph>
                    Venez apprendre dans nos locaux à <strong>Bamako</strong> avec un encadrement direct. 
                    Idéal pour ceux qui préfèrent le contact humain et la pratique immédiate.
                  </Paragraph>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><CheckCircleFilled style={{ color: COLORS.primary }} /> Coaching direct par des experts</li>
                    <li><CheckCircleFilled style={{ color:  COLORS.primary  }} /> Matériel informatique disponible</li>
                    <li><CheckCircleFilled style={{ color: ' COLORS.primary ' }} /> Networking avec d'autres étudiants</li>
                  </ul>
                </div>
                <Button 
                  block 
                  icon={<EnvironmentOutlined />}
                  style={{ borderRadius: '10px', height: '45px', border: '1.5px solid #1A237E', color:  COLORS.primary , fontWeight: 'bold' }}
                  onClick={() => navigate('/formations')}
                >
                  S'INSCRIRE EN CLASSE
                </Button>
              </Card>
            </motion.div>
          </Col>

          {/* CARTE 2 : EN LIGNE (E-LEARNING) */}
          <Col xs={24} lg={12}>
            <motion.div whileHover={{ y: -10 }} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card 
                title={<Space><PlayCircleOutlined style={{ color: COLORS.secondary }} /> E-Learning (Cours en ligne)</Space>}
                extra={<Tag color="gold" icon={<ThunderboltFilled />}>ACCÈS 24H/7J</Tag>}
                style={{ borderRadius: '20px', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '2px solid COLORS.secondary' }}
                bodyStyle={{ display: 'flex', flexDirection: 'column', height: '300px', justifyContent: 'space-between' }}
              >
                <div>
                  <Paragraph>
                    Apprenez à votre rythme depuis chez vous. Accédez à nos vidéos HD et documents PDF exclusifs.
                  </Paragraph>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><CheckCircleFilled style={{ color: COLORS.secondary }} /> Paiement via <strong>Orange Money</strong></li>
                    <li><CheckCircleFilled style={{ color: COLORS.secondary }} /> Vidéos consultables à vie</li>
                    <li><CheckCircleFilled style={{ color: COLORS.secondary }} /> Support WhatsApp dédié</li>
                  </ul>
                </div>
                <Button 
                  type="primary" 
                  block 
                  icon={<PlayCircleOutlined />}
                  style={{ borderRadius: '10px', height: '45px', background: COLORS.secondary, borderColor: COLORS.secondary, color:  COLORS.primary , fontWeight: 'bold' }}
                  onClick={() => navigate('/cours-en-ligne')}
                >
                  ACCÉDER AUX COURS VIDÉOS
                </Button>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* SECTION : STATS & PAIEMENT */}
      <section style={{ padding: '60px 10%', background: '#fff' }}>
        <Row gutter={[32, 32]} style={{ textAlign: 'center' }}>
          <Col xs={12} md={8}>
            <Title level={3} style={{ color: COLORS.primary, marginBottom: 0 }}>100% PRATIQUE</Title>
            <Text type="secondary">Zéro théorie inutile</Text>
          </Col>
          <Col xs={12} md={8}>
            <Title level={3} style={{ color: COLORS.secondary, marginBottom: 0 }}>BAMAKO, MALI</Title>
            <Text type="secondary">Locaux accessibles</Text>
          </Col>
          <Col xs={24} md={8}>
            <Title level={3} style={{ color:  COLORS.primary , marginBottom: 0 }}>ORANGE MONEY</Title>
            <Text type="secondary">Paiement local simple</Text>
          </Col>
        </Row>
      </section>

    </div>
  );
};

export default Accueil;