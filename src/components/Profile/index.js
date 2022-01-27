import React from 'react';
import * as Style from './style';
import NavMenu from '../NavMenu';
import Jeremy from '../../images/image-jeremy.png';

function Profile({onTimeDisplay}) {
  return( 
      <Style.Profile>
        <Style.Info>
          <Style.Img alt='Jeremy Robson' src={Jeremy}/>
          <Style.UserInfo>
            <Style.Report>Report for:</Style.Report>
            <Style.Name>Jeremy Robson</Style.Name>
          </Style.UserInfo>
        </Style.Info>
        <NavMenu 
          onTimeCurrent={(value) => {
            onTimeDisplay(value);
          }}
        />
      </Style.Profile>
  );
}

export default Profile;
