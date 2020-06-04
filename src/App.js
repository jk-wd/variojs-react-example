import React, {useEffect} from 'react';
import variojs from 'variojs';
import './App.css';

const initVariojs = async () => {
  await variojs.init({
    url: '/animation-data.json',
  });
  
  if(process.env.NODE_ENV === 'development') {
    const devTools = await import(/* webpackMode: "lazy", webpackChunkName: "variojs-toolbox" */ 'variojs-toolbox');
    devTools.default.init(variojs);
  }

  variojs.play("bird");
};


const App = () => {
  useEffect(() => {
    initVariojs();
  }, []);
  return (
    <>

    <div className="bird-wrapper" data-v="bird-wrapper">
        <div className="bird" data-v="bird" >
          <div className="bird bird-bg"></div>
          <div data-v="bird1" className="bird bird1"></div>
          <div data-v="bird2" className="bird bird2"></div>
          <div data-v="bird3" className="bird bird3"></div>
          <div data-v="bird4" className="bird bird4"></div>
        </div>
    </div>
    <p className="scroll">scroll down</p>
    </>
  );
}

export default App;
