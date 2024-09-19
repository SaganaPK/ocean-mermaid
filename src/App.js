import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import mermaidGif from './assets/images/mermaidanime.gif'; // Add your GIF here
import RSVPForm from './RSVPForm';
import Invitation from './Invitation';

function App() {
  return (
    <div className="App" >
      <Parallax pages={3} style={{ top: '0', left: '0' }} className="animation">
        
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="floor"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="l4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="l7"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="l8"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="l9"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="l6"></div>
        </ParallaxLayer>

        {/* Mermaid GIF Layer */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1}}
          factor={0.5}
          className="mermaid-layer"
        >
          <img src={mermaidGif} alt="Mermaid" className="mermaid-gif" />
        </ParallaxLayer>
        {/* "Splish and Splash" text at offset 0 */}
        <ParallaxLayer offset={0} speed={0.25} className="text-layer">
          <div className="splish-splash-container">
            <h3 className="splish-splash-text">
              Splish and splash, let’s celebrate Nithila's fun one and Nila’s lively five!
            </h3>
          </div>
        </ParallaxLayer>

        {/* Invitation Text and Event Details Layer */}
        <ParallaxLayer offset={1} speed={0} className="invitation-page">
          <Invitation /> {/* Rendering the invitation inside the parallax */}
        </ParallaxLayer>

        {/* RSVP Component */}
        <ParallaxLayer offset={2} speed={0} className="rsvp-page">
          <RSVPForm /> {/* Rendering the RSVPForm inside the parallax */}
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
