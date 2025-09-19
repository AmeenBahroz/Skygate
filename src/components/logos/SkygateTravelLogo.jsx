import React, { useState } from 'react';

const SkygateTravelLogo = ({ width = 200, height = 60, className = '' }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className={`${className} flex items-center justify-center`}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      {!imageError ? (
        <img
          src="/logos/skygate-travel-logo.svg"
          alt="Skygate Travel Logo"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain'
          }}
          onError={() => setImageError(true)}
        />
      ) : (
        <div 
          style={{
            color: '#1eba55',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          SKYGATE
          <br />
          <span style={{ fontSize: '12px', fontWeight: 'normal' }}>TRAVEL</span>
        </div>
      )}
    </div>
  );
};

export default SkygateTravelLogo;