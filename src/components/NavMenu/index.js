import React from 'react';
import * as Style from './style';

function NavMenu({onTimeCurrent}) {
  const changeTime = (e) => {
    if(onTimeCurrent) onTimeCurrent(e);
  }

  return (
  <div>
      <Style.Nav>
          <Style.UlLinks>
              <Style.LiLinks onClick={() => changeTime('daily')}>
                <Style.ALinks>
                  Daily
                </Style.ALinks>
              </Style.LiLinks>
              <Style.LiLinks onClick={() => changeTime('weekly')}>
                <Style.ALinks>
                  Weekly
                </Style.ALinks>
              </Style.LiLinks>
              <Style.LiLinks onClick={() => changeTime('monthly')}>
                <Style.ALinks>
                  Monthly
                </Style.ALinks>
              </Style.LiLinks>
          </Style.UlLinks>
      </Style.Nav>
  </div>
  );
}

export default NavMenu;
