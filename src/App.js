import './App.css';
import * as React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from './config/configParticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";

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
                  <header className="App-header">
                    <div style={{display: 'flex'}}>
                      <div className="Header-description">
                        <h1>Dating App Data</h1>
                        <h3>Discover your dating data</h3>
                        <div class="picture-row">
                          <img src={require('./images/all_3.png')}></img>
                        </div>
                        <p>
                        <span class="name"><b>Scroll down</b></span> to see how the rest of the online dating community swipes.
                          <pre></pre>Upload and discover your statistics in online dating. Browse around to find more
                            online dating analytics.
                          </p>
                      </div>
                    </div>
                    <div className='bottom-pic'>
                      <div className='bottom-pic-column'>
                        <img src={require('./images/online_dating.png')} style={{width: '250px', height:'auto'}}></img>
                      </div>
                      <div className='bottom-pic-column'>
                        <img src={require('./images/right-arrow-icon-114837-11.png')} style={{width: '250px', height:'auto'}}></img>
                      </div>
                      <div className='bottom-pic-column'>
                        <img src={require('./images/data.png')} style={{width: '250px', height:'auto'}}></img>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="Header-description">
                      <h3>Where do you rank amongst other dating app users?</h3>
                      <p>Fill the form below to do a live search and find out.</p>
                    </div>
                  </header>
                  
                </div>
              </div>
        </div>
        
      </React.Fragment>
  );
}

export default App;
