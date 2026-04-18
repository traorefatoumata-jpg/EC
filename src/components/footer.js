import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center', background: '#f0f2f5', color: '#1A237E' }}>
      <p style={{ fontWeight: '500' }}>Elite Academy ©{new Date().getFullYear()} - L'excellence au service de votre avenir</p>
      <p style={{ fontSize: '0.8rem', color: '#666' }}>Formations certifiantes en ligne et en présentiel</p>
    </AntFooter>
  );
};

export default Footer;