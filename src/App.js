import React, {useState} from 'react';
import * as Style from './style.js';
import Profile from './components/Profile';
import Card from './components/Card';
import Data from './data.json';
import Work from './images/icon-work.svg';
import Exercise from './images/icon-exercise.svg';
import Play from './images/icon-play.svg';
import Study from './images/icon-study.svg';
import Social from './images/icon-social.svg';
import SelfCare from './images/icon-self-care.svg';


// to choose the name that comes after 'last' in the card display
function App() {
  const [timeFrame, setTimeFrame] = useState('daily');
  function thisTimeCurrent(timeFrame){
    switch(timeFrame){
      case 'daily':
        return 'day';
      case 'weekly':
        return 'week';
      default:
        return 'month';
    }
  }

  //image switch to pick the right image to the right card
  function imgSwitch(title){
    switch(title){
      case 'Work':
        return Work;
      case 'Exercise':
        return Exercise;
      case 'Play':
        return Play;
      case 'Study':
        return Study;
      case 'Social':
        return Social;
      default:
        return SelfCare;
    }
  }
  
  return (
    <Style.App>
      <Profile onTimeDisplay={(value) => {
        setTimeFrame(value);
      }} />
      <Style.AllCards>
      {Data.map((item) => (
        <Card
          key={item.title}
          title={item.title} 
          currentFrame={item.timeframes[timeFrame].current}
          previousFrame={item.timeframes[timeFrame].previous}
          imgTitle={imgSwitch(item.title)}
          thisTime={thisTimeCurrent(timeFrame)}
        />   
      ))}
      </Style.AllCards>
    </Style.App>
  );
}

export default App;
