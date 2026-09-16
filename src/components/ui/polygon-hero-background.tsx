import React from "react";

interface PolygonHeroBackgroundProps {
  className?: string;
  showGlow?: boolean;
}

export default function PolygonHeroBackground({ 
  className = "",
  showGlow = true
}: PolygonHeroBackgroundProps) {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden bg-[#060813] pointer-events-none select-none ${className}`}>
      {/* SVG Blue Polygon Wireframe with Centered Blue Dots */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.48) 45%, rgba(0,0,0,1) 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.48) 45%, rgba(0,0,0,1) 85%)"
        }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="poly-wireframe-grid-shared" width="69.282" height="120" patternUnits="userSpaceOnUse">
              {/* Hexagon 1: Center (34.641, 40) */}
              {/* Outer wireframe border (fill="none", stroke blue) */}
              <path 
                d="M 34.641 0 L 69.282 20 L 69.282 60 L 34.641 80 L 0 60 L 0 20 Z" 
                fill="none" 
                stroke="#2563eb" 
                strokeWidth="1.1" 
                strokeOpacity="0.38" 
              />
              {/* Inner isometric Y-spokes */}
              <path 
                d="M 34.641 40 L 34.641 0 M 34.641 40 L 69.282 60 M 34.641 40 L 0 60" 
                fill="none" 
                stroke="#2563eb" 
                strokeWidth="1.1" 
                strokeOpacity="0.38" 
              />
              
              {/* Hexagon 2: Center (0, 100) & (69.282, 100) */}
              {/* Vertical wireframe edges */}
              <path 
                d="M 34.641 80 L 34.641 120 M 0 60 L 0 100 M 0 100 L 0 120 M 69.282 60 L 69.282 100 M 69.282 100 L 69.282 120" 
                fill="none" 
                stroke="#2563eb" 
                strokeWidth="1.1" 
                strokeOpacity="0.38" 
              />
              {/* Diagonal wireframe spokes */}
              <path 
                d="M 0 100 L 34.641 80 M 0 100 L 34.641 120 M 69.282 100 L 34.641 80 M 69.282 100 L 34.641 120" 
                fill="none" 
                stroke="#2563eb" 
                strokeWidth="1.1" 
                strokeOpacity="0.38" 
              />
              
              {/* Blue Dots inside each polygon / diamond facet */}
              <circle cx="34.641" cy="20" r="2" fill="#3b82f6" opacity="0.85" />
              <circle cx="17.32" cy="50" r="2" fill="#3b82f6" opacity="0.85" />
              <circle cx="51.96" cy="50" r="2" fill="#3b82f6" opacity="0.85" />
              <circle cx="0" cy="80" r="2" fill="#3b82f6" opacity="0.85" />
              <circle cx="69.282" cy="80" r="2" fill="#3b82f6" opacity="0.85" />
              <circle cx="17.32" cy="110" r="2" fill="#3b82f6" opacity="0.85" />
              <circle cx="51.96" cy="110" r="2" fill="#3b82f6" opacity="0.85" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#poly-wireframe-grid-shared)" />
        </svg>
      </div>

      {/* Soft center ambient blue glow */}
      {showGlow && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      )}
    </div>
  );
}
