import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`${className}`} aria-label="Auto Elétrica Braun">
      <svg viewBox="0 0 500 340" className="w-full h-full drop-shadow-sm" style={{ minWidth: '180px' }}>
        <defs>
          <style>
            {`
              .braun-script { font-family: 'Kaushan Script', cursive; }
              .braun-display { font-family: 'Chakra Petch', sans-serif; font-weight: 700; }
            `}
          </style>
        </defs>

        {/* Background "X" Spikes - Grey with black outline */}
        <g stroke="black" strokeWidth="2" fill="#9CA3AF">
            {/* Left Spike */}
            <path d="M 10 30 L 250 160 L 10 290 L 80 160 Z" />
            {/* Right Spike */}
            <path d="M 490 30 L 250 160 L 490 290 L 420 160 Z" />
        </g>

        {/* Shield - Red with White & Black Border */}
        <g transform="translate(0, 10)">
            {/* Main Red Shape */}
            <path 
                d="M 90 100 Q 250 60 410 100 L 380 190 Q 250 270 120 190 Z" 
                fill="#D32F2F" 
                stroke="black" 
                strokeWidth="3"
            />
            {/* Inner White Stroke */}
            <path 
                d="M 105 108 Q 250 75 395 108 L 370 185 Q 250 250 130 185 Z" 
                fill="none" 
                stroke="white" 
                strokeWidth="5"
            />
            
            {/* "BRAUN" Text */}
            <text 
                x="250" 
                y="175" 
                textAnchor="middle" 
                className="braun-display" 
                fontSize="85" 
                fill="white" 
                stroke="black" 
                strokeWidth="2.5"
                style={{ letterSpacing: '2px' }}
            >
                BRAUN
            </text>
        </g>

        {/* "Auto Elétrica" - Top */}
        <text 
            x="250" 
            y="60" 
            textAnchor="middle" 
            className="braun-script" 
            fontSize="52" 
            fill="#1A1A1A"
            stroke="white"
            strokeWidth="0.5"
            style={{ textShadow: '1px 1px 0px white' }}
        >
            Auto Elétrica
        </text>

        {/* "Som" - Bottom Left */}
        <text 
            x="130" 
            y="250" 
            textAnchor="middle" 
            className="braun-script" 
            fontSize="28" 
            fill="#1A1A1A" 
            transform="rotate(-15, 130, 250)"
        >
            Som
        </text>

        {/* "Alarmes" - Bottom Right */}
        <text 
            x="370" 
            y="250" 
            textAnchor="middle" 
            className="braun-script" 
            fontSize="28" 
            fill="#1A1A1A" 
            transform="rotate(15, 370, 250)"
        >
            Alarmes
        </text>

        {/* "Injeção Eletrônica" - Bottom Center */}
        <text 
            x="250" 
            y="300" 
            textAnchor="middle" 
            className="braun-script" 
            fontSize="30" 
            fill="#1A1A1A"
        >
            Injeção Eletrônica
        </text>
      </svg>
    </div>
  );
};