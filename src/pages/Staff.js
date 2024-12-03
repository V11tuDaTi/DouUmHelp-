import React from 'react';
import './Staff.css';

const participants = [
  {
    name: 'Isaac Arantes',
    role: 'Desenvolvedor Back-End',
    image: '/participants/isaac.jpg',
  },
  {
    name: 'Eduardo Aguiar',
    role: 'Desenvolvedor Front-End',
    image: '/participants/eduardo.jpg',
  },
];

const Staff = () => {
  return (
    <div className="staff-container">
      <h1>Equipe DouUmHelp!</h1>
      <div className="staff-grid">
        {participants.map((participant, index) => (
          <div key={index} className="staff-card">
            <img src={participant.image} alt={participant.name} className="staff-image" />
            <h2>{participant.name}</h2>
            <p>{participant.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
