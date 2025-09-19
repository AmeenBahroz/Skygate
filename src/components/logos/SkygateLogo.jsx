import React, { useState } from 'react';

const SkygateLogo = ({ width = 200, height = 60, className = '' }) => {
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
          src="/logos/skygate-logo.svg"
          alt="Skygate Group Logo"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain'
          }}
          onError={(e) => {
            console.error('Logo failed to load:', e);
            setImageError(true);
          }}
          onLoad={() => {
            console.log('Logo loaded successfully');
          }}
        />
      ) : (
        // Fallback text logo
        <div 
          style={{
            color: '#5e716a',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          SKYGATE
          <br />
          <span style={{ fontSize: '12px', fontWeight: 'normal' }}>GROUP</span>
        </div>
      )}
    </div>
  );
};

export default SkygateLogo;