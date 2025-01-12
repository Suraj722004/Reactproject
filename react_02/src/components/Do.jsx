import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Do = () => {
  const [dotLottie, setDotLottie] = React.useState(null);

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

  function play(){
    if(dotLottie){
      dotLottie.play();
    }
  }

  function pause(){
    if(dotLottie){
      dotLottie.pause();
    }
  }

  function stop(){
    if(dotLottie){
      dotLottie.stop();
    }
  }

  function seek(){
    if(dotLottie){
      dotLottie.setFrame(30);
    }
  }

  return (
    <>
    <DotLottieReact src="path/to/animation.lottie"
      loop
      autoplay
      dotLottieRefCallback={dotLottieRefCallback}
    />
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
      <button onClick={seek}>Seek to frame no. 30</button>
    </div>
    </>  );
};

export default Do;