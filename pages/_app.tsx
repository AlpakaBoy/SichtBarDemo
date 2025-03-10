// src/App.tsx

import React from 'react';
import Section from 'section';

const App: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button wurde geklickt!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Willkommen bei Sicht-Bär</h1>
      <Section
        title="Alle Kanäle vereint"
        description="Poste & analysiere Inhalte auf Instagram, TikTok, LinkedIn & mehr."
        buttonText="Jetzt starten"
        onButtonClick={handleButtonClick}
      />
      <Section
        title="KI-Optimierung"
        description="Unsere smarte KI gibt dir Vorschläge für bessere Posts."
        buttonText="Mehr erfahren"
        onButtonClick={handleButtonClick}
      />
      <Section
        title="Statistiken & Insights"
        description="Sieh, was funktioniert & steigere dein Engagement."
        buttonText="Analysen anzeigen"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default App;
