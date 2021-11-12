import React from 'react';

const Greetings = ({ lang, children }) => {
  const getGreet = language => {
    switch(language) {
        case 'de':
            return 'Hallo';
        case 'fr':
            return 'Bonjour';
        case 'en':
            return 'Hello';
        default:
            return 'Hola';
    }
  };

  return (

  <div className="border border-dark m-2 p-1">
    <p>{getGreet(lang)} { children }</p>
  </div>
    
  );
};

export default Greetings;
