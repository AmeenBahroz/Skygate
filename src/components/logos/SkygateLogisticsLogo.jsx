import React, { useState } from 'react';

const SkygateLogisticsLogo = ({ width = 200, height = 60, className = '' }) => {
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
          src="/logos/skygate-logistics-logo.svg"
          alt="Skygate Logistics Logo"
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
            color: '#bf2530',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          SKYGATE
          <br />
          <span style={{ fontSize: '12px', fontWeight: 'normal' }}>LOGISTICS</span>
        </div>
      )}
    </div>
  );
};

export default SkygateLogisticsLogo;