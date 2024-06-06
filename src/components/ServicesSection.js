import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

const services = [
  { title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet...', icon: '📊' },
  { title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet...', icon: '🎥' },
  { title: 'Translation Services', description: 'Lorem ipsum dolor sit amet...', icon: '📝' },
  { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet...', icon: '🎨' },
  { title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet...', icon: '🔍' },
  { title: 'Data Processing', description: 'Lorem ipsum dolor sit amet...', icon: '💾' },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
};

export default ServicesSection;
