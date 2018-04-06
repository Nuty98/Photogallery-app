import React from 'react';
import '../NotFoundError/NotFound.css';

const UndefinedError = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-header">
        Je nám ľúto, ale stránka je dočasne nedostupná. Ak by problém
        pretrvával, kontaktujte prosím administrátora stránky.
      </div>
    </div>
  );
};

export default UndefinedError;
