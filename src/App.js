import React, {useEffect} from 'react';
import variojs from 'variojs';
import './App.css';

const initVariojs = async () => {
  await variojs.init({
    url: '/animation-data.json',
  });
  
  const devTools = await import(/* webpackMode: "lazy", webpackChunkName: "variojs-dev-tools" */ 'variojs-dev-tools');
  devTools.default.init(variojs);
  variojs.play();
};


const App = () => {
  useEffect(() => {
    initVariojs();
  }, []);
  return (
    <>
    <div className="logo-holder">
      <div data-v="cricle-group">
        <svg data-v="cricles" id="logo" className="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 182.2 182.2">
          <g>
            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -54.3585 47.4633)" className="st0" cx="30.11" cy="89.35" rx="30.14" ry="30.09"/>
            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -80.3445 110.1989)" className="st1" cx="92.85" cy="152.08" rx="30.14" ry="30.09"/>
            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -21.1103 134.7345)" className="st2" cx="152.08" cy="92.85" rx="30.14" ry="30.09"/>
            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 4.8756 71.9989)" className="st3" cx="89.35" cy="30.11" rx="30.14" ry="30.09"/>
          </g>
        </svg>
      </div>
    </div>
    <p className="scroll">scroll down</p>
    </>
  );
}

export default App;
