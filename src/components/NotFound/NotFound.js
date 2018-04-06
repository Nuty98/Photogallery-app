import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Icon from '../Icon';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found-header">Ľutujeme, táto stránka neexistuje.</div>
    <div className="not-found-message" style={{ fontSize: '20px' }}>
      Ak ste zadávali adresu stránky manuálne, skontrolujte či bola zadaná
      správne.
    </div>
    <div style={{ marginTop: '20px' }}>
      <Link to="/" className="link">
        <Button>
          <Icon name="back_black.svg" styleProps="back-svg" />
          <span className="not-found-back-button-message">Späť na hlavnú stránku</span>
        </Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
