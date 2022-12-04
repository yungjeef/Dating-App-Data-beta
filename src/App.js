import './App.css';
import * as React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from './config/configParticles';

function App() {

    const particlesInit = useCallback(async (engine) => {
      console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
      <React.Fragment>
        <div className='app'>
            <div id="welcome-page">
                <div className="welcome-page" style={{ position: 'relative', overflow: "hidden" }}>
                  
                  <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={particlesConfig}
                  />
                  <h1>Hello world</h1>
                </div>
              </div>
        </div>
        
      </React.Fragment>
  );
}

export default App;
