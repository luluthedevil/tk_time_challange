import React from 'react';
import * as Style from './style';


function Card({title, currentFrame, previousFrame, imgTitle, thisTime}) {

  function cardStyle(cardTitle){
    switch(cardTitle){
      case 'Work':
        return 0;
      case 'Exercise':
        return 1;
      case 'Play':
        return 2;
      case 'Study':
        return 3;
      case 'Social':
        return 4;
      default:
        return 5;
    }
  }

  return (
    <Style.Card key={title}>
      <Style.ImgBackg styleIndex={cardStyle(title)}>
        <Style.Img src={imgTitle}/>
      </Style.ImgBackg>
      <Style.Text>
        <Style.Title>{ title }</Style.Title>
        <Style.PrCurrent>{ currentFrame } hrs</Style.PrCurrent>
        <Style.PrPrevious>Last {thisTime} - { previousFrame } hrs</Style.PrPrevious>
      </Style.Text>
    </Style.Card>
  );
}

export default Card;
