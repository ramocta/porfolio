import React from 'react';
import Particles from '../styles/background/Background.jsx';

export default function Background() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0, // Menggunakan zIndex 0 agar tidak tertutup background body
      }}
    >
      <Particles
        particleColors={["#ffffff", "#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        glow={0.5}
        twinkle={0.3}
        moveParticlesOnHover={true}
        hoverEffect="parallax"
        sizeRandomness={1}
        shape="circle"
        depthOfField={0}
        connections={false}
        connectionDistance={110}
        particleHoverFactor={1}
        hoverRadius={140}
        drift="none"
        driftSpeed={1}
        alphaParticles={false}
        disableRotation={false}
        cameraDistance={20}
        variation={0}
        opacity={1}
        clickBurst={true}
        intro={true}
        lightMode={false}
      />
    </div>
  );
}