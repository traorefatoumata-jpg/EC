import React from 'react';
import { Typography, Row, Col, Card, Button, Space, Divider } from 'antd';
import { 
  RocketOutlined, 
  ReadOutlined, 
  TeamOutlined, 
  CheckCircleFilled,
  ArrowRightOutlined 
} from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;

const Accueil = () => {
  return (
    <div style={{ width: '100%' }}>
      
      {/* --- SECTION HERO --- */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #1A237E 0%, #303F9F 100%)', 
        color: '#fff',
        textAlign: 'center'
      }}>
        <Row justify="center">
          <Col xs={24} md={18} lg={14}>
            <Title level={1} style={{ color: '#FFB300', fontSize: '3.5rem', marginBottom: '10px', }}>
              ELITE ACADEMY
            </Title>
            <Title level={2} style={{ color: '#fff', marginTop: 0, fontWeight: '300' }}>
              Devenez l'expert que les entreprises recherchent.
            </Title>
            <Paragraph style={{ color: '#e0e0e0', fontSize: '1.2rem', marginBottom: '40px' }}>
              Des formations certifiantes en informatique, management et design, 
              conçues par des professionnels pour des futurs professionnels.
            </Paragraph>
            <Space size="large">
              <Button type="primary" size="large" icon={<RocketOutlined />} style={{ backgroundColor: '#FFB300', borderColor: '#FFB300', height: '50px', fontWeight: 'bold' }}>
                Explorer les cours
              </Button>
              <Button ghost size="large" style={{ height: '50px', fontWeight: 'bold' }}>
                En savoir plus
              </Button>
            </Space>
          </Col>
        </Row>
      </section>

      {/* --- SECTION AVANTAGES --- */}
      <section style={{ padding: '80px 50px', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={2} style={{ color: '#1A237E' }}>Nos Modes d'Apprentissage</Title>
          <div style={{ width: '60px', height: '4px', background: '#FFB300', margin: '0 auto' }}></div>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card 
              hoverable 
              style={{ borderRadius: '15px', overflow: 'hidden', border: '1px solid #f0f0f0' }}
              cover={
                <div style={{ background: '#E8EAF6', padding: '40px', textAlign: 'center' }}>
                  <ReadOutlined style={{ fontSize: '60px', color: '#1A237E' }} />
                </div>
              }
            >
              <Title level={3}>100% En Ligne</Title>
              <Paragraph>
                Étudiez depuis chez vous avec un accès illimité à notre plateforme 24h/24. 
                Vidéos, supports de cours et examens blancs inclus.
              </Paragraph>
              <Button type="link" icon={<ArrowRightOutlined />} style={{ padding: 0, color: '#1A237E' }}>
                Découvrir le E-learning
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card 
              hoverable 
              style={{ borderRadius: '15px', overflow: 'hidden', border: '1px solid #f0f0f0' }}
              cover={
                <div style={{ background: '#FFF8E1', padding: '40px', textAlign: 'center' }}>
                  <TeamOutlined style={{ fontSize: '60px', color: '#FFB300' }} />
                </div>
              }
            >
              <Title level={3}>En Présentiel</Title>
              <Paragraph>
                Venez apprendre dans nos salles équipées avec un formateur dédié. 
                Idéal pour le networking et les travaux pratiques en groupe.
              </Paragraph>
              <Button type="link" icon={<ArrowRightOutlined />} style={{ padding: 0, color: '#FFB300' }}>
                Voir nos centres
              </Button>
            </Card>
          </Col>
        </Row>
      </section>

      {/* --- SECTION POURQUOI NOUS --- */}
      <section style={{ padding: '80px 50px', background: '#F5F5F5' }}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} md={12}>
            <Title level={2} style={{ color: '#1A237E' }}>Pourquoi choisir Elite Academy ?</Title>
            <Paragraph style={{ fontSize: '1.1rem' }}>
              Nous ne nous contentons pas d'enseigner, nous transformons votre carrière.
            </Paragraph>
            <div style={{ marginTop: '30px' }}>
              <p><CheckCircleFilled style={{ color: '#52c41a', marginRight: '10px' }} /> Certifications reconnues par l'État</p>
              <p><CheckCircleFilled style={{ color: '#52c41a', marginRight: '10px' }} /> Formateurs en activité (Experts métiers)</p>
              <p><CheckCircleFilled style={{ color: '#52c41a', marginRight: '10px' }} /> Accompagnement à la recherche d'emploi</p>
              <p><CheckCircleFilled style={{ color: '#52c41a', marginRight: '10px' }} /> Projets réels pour votre portfolio</p>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ 
              background: '#1A237E', 
              padding: '40px', 
              borderRadius: '20px', 
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <Title level={3} style={{ color: '#FFB300' }}>Prêt à commencer ?</Title>
              <Paragraph style={{ color: '#fff' }}>
                Rejoignez les 500+ étudiants déjà formés cette année.
              </Paragraph>
              <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
              <Button size="large" block style={{ fontWeight: 'bold' }}>
                Créer un compte gratuit
              </Button>
            </div>
          </Col>
        </Row>
      </section>

    </div>
  );
};

export default Accueil;