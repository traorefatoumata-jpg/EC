import React from 'react';
import { Card, Form, Input, Button, Typography, message, Tabs, Space } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onLogin = (values) => {
    // Simulation d'une base de données
    const userData = {
      email: values.email,
      name: "Utilisateur Elite",
      isLoggedIn: true,
      purchasedCourses: [2] // Il a déjà accès au cours Excel par défaut
    };

    // On stocke dans le navigateur
    localStorage.setItem('user_session', JSON.stringify(userData));
    
    message.success('Connexion réussie ! Bienvenue sur Elite Academy.');
    
    // Redirection et rafraîchissement pour mettre à jour la Navbar
    navigate('/cours-en-ligne');
    window.location.reload(); 
  };

  return (
    <div style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f2f5' }}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Card style={{ width: 400, borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => navigate('/')} style={{ padding: 0, marginBottom: 20 }}>
            Retour à l'accueil
          </Button>
          
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Title level={2} style={{ color: '#1A237E', margin: 0 }}>Elite Academy</Title>
            <Text type="secondary">Espace Étudiant</Text>
          </div>

          <Tabs defaultActiveKey="1" centered items={[
            {
              key: '1',
              label: 'Connexion',
              children: (
                <Form layout="vertical" onFinish={onLogin}>
                  <Form.Item name="email" rules={[{ required: true, message: 'Email ou Numéro requis' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Email ou Téléphone" size="large" />
                  </Form.Item>
                  <Form.Item name="password" rules={[{ required: true, message: 'Mot de passe requis' }]}>
                    <Input.Password prefix={<LockOutlined />} placeholder="Mot de passe" size="large" />
                  </Form.Item>
                  <Button type="primary" htmlType="submit" block size="large" style={{ background: '#1A237E', height: '45px', borderRadius: '10px' }}>
                    SE CONNECTER
                  </Button>
                </Form>
              )
            },
            {
              key: '2',
              label: 'Inscription',
              children: (
                <Form layout="vertical" onFinish={() => message.info("Inscription via Orange Money bientôt disponible")}>
                  <Form.Item name="name" label="Nom Complet"><Input placeholder="Sekou Diaby" /></Form.Item>
                  <Form.Item name="tel" label="Numéro WhatsApp"><Input prefix={<PhoneOutlined />} placeholder="70 00 00 00" /></Form.Item>
                  <Button block size="large" style={{ background: '#FFB300', color: '#1A237E', fontWeight: 'bold' }}>
                    CRÉER MON COMPTE
                  </Button>
                </Form>
              )
            }
          ]} />
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;