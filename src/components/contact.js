import React from 'react';
import { Typography, Row, Col, Form, Input, Button, Card, Space, message } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  WhatsAppOutlined,
  SendOutlined 
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { COLORS } from '../components/color'; // Importation des couleurs depuis le fichier color.js

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Formulaire reçu:', values);
    message.success('Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.');
    form.resetFields();
  };

  return (
    <div style={{ background: '#f4f7f6', minHeight: '100vh' }}>
      
      {/* HEADER BANNER */}
      <div style={{ 
        background: 'linear-gradient(135deg, #1A237E 0%, #0d47a1 100%)', 
        padding: '80px 10%', 
        textAlign: 'center',
        color: '#fff'
      }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Title style={{ color: '#fff', fontSize: '3rem' }}>Contactez <span style={{ color:  COLORS.secondary }}>Elite</span></Title>
          <Paragraph style={{ color: '#e0e0e0', fontSize: '1.2rem' }}>
            Une question sur nos formations ? Besoin d'aide pour vos cours en ligne ? Nous sommes là.
          </Paragraph>
        </motion.div>
      </div>

      <div style={{ padding: '60px 10%' }}>
        <Row gutter={[40, 40]}>
          
          {/* COLONNE 1 : INFOS DE CONTACT */}
          <Col xs={24} lg={10}>
            <Title level={2} style={{ color:  COLORS.primary }}>Nos Coordonnées</Title>
            <Paragraph style={{ marginBottom: '40px' }}>
              N'hésitez pas à passer nous voir ou à nous contacter directement sur nos réseaux sociaux.
            </Paragraph>

            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Card style={{ borderRadius: '15px', borderLeft: '5px solid #FFB300' }}>
                <Space size="middle">
                  <div style={{ background: '#FFF3E0', padding: '12px', borderRadius: '10px' }}>
                    <EnvironmentOutlined style={{ fontSize: '24px', color:  COLORS.secondary }} />
                  </div>
                  <div>
                    <Text strong style={{ display: 'block' }}>Siège Social</Text>
                    <Text type="secondary">Bamako, Mali (Près de l'Institut ISPATEC)</Text>
                  </div>
                </Space>
              </Card>

              <Card style={{ borderRadius: '15px', borderLeft: '5px solid #25D366' }}>
                <Space size="middle">
                  <div style={{ background: '#E8F5E9', padding: '12px', borderRadius: '10px' }}>
                    <WhatsAppOutlined style={{ fontSize: '24px', color: '#25D366' }} />
                  </div>
                  <div>
                    <Text strong style={{ display: 'block' }}>WhatsApp Support</Text>
                    <Text type="secondary">+223 70 00 00 00</Text>
                  </div>
                </Space>
              </Card>

              <Card style={{ borderRadius: '15px', borderLeft: '5px solid #1A237E' }}>
                <Space size="middle">
                  <div style={{ background: '#E8EAF6', padding: '12px', borderRadius: '10px' }}>
                    <MailOutlined style={{ fontSize: '24px', color:  COLORS.primary }} />
                  </div>
                  <div>
                    <Text strong style={{ display: 'block' }}>Email Professionnel</Text>
                    <Text type="secondary">contact@eliteacademy.ml</Text>
                  </div>
                </Space>
              </Card>
            </Space>

            {/* PETITE MAP SIMULÉE */}
         
    <div style={{ 
    marginTop: '40px', 
    borderRadius: '20px', 
    overflow: 'hidden', 
    height: '350px', 
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    border: '1px solid #ddd'
    }}>
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.300588636735!2d-8.01633512537554!3d12.628867422312693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe43cfc5c4268779%3A0x7ce7bb0f025d06c2!2sISPATEC%20UNIVERSIT%C3%89%20BILINGUE!5e0!3m2!1sfr!2sml!4v1714152000000!5m2!1sfr!2sml" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation Elite Academy - ISPATEC"
    ></iframe>
    </div>
          </Col>

          {/* COLONNE 2 : FORMULAIRE DE CONTACT */}
          <Col xs={24} lg={14}>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Card style={{ borderRadius: '25px', padding: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.05)' }}>
                <Title level={3}>Envoyez un message</Title>
                <Paragraph type="secondary">Nous répondons généralement en moins de 2 heures.</Paragraph>
                
                <Form 
                  form={form} 
                  layout="vertical" 
                  onFinish={onFinish}
                  style={{ marginTop: '30px' }}
                >
                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item 
                        label="Nom Complet" 
                        name="user_name" 
                        rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
                      >
                        <Input placeholder="Ex: Sekou Diaby" size="large" style={{ borderRadius: '8px' }} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item 
                        label="Email ou Téléphone" 
                        name="user_contact" 
                        rules={[{ required: true, message: 'Requis pour vous répondre' }]}
                      >
                        <Input placeholder="Ex: +223 70..." size="large" style={{ borderRadius: '8px' }} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item 
                    label="Sujet" 
                    name="subject" 
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Ex: Inscription au cours React" size="large" style={{ borderRadius: '8px' }} />
                  </Form.Item>

                  <Form.Item 
                    label="Votre Message" 
                    name="message" 
                    rules={[{ required: true, min: 10, message: 'Le message est trop court' }]}
                  >
                    <TextArea rows={5} placeholder="Comment pouvons-nous vous aider ?" style={{ borderRadius: '8px' }} />
                  </Form.Item>

                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      icon={<SendOutlined />} 
                      size="large" 
                      block 
                      style={{ 
                        background:  COLORS.primary, 
                        height: '55px', 
                        borderRadius: '12px',
                        fontWeight: 'bold',
                        fontSize: '16px'
                      }}
                    >
                      ENVOYER LE MESSAGE
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;