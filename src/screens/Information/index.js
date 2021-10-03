import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0
import {LogBox} from 'react-native'
LogBox.ignoreAllLogs(true)
const InformationScreen = () => (
  <Onboarding
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../../assets/images/mask.jpeg')} style={{height: 200, width: 200, margin: -50, borderRadius: 100}} />,
        title: 'Wear Mask',
        subtitle: 'Masks should be used as part of a comprehensive strategy of measures to suppress transmission and save lives.',
      },
      {
        backgroundColor: '#CA4AEE',
        image: <Image source={require('../../../assets/images/wash.jpeg')} style={{height: 200, width: 200, margin: -50, borderRadius: 100}} />,
        title: 'Use Sanitizer',
        subtitle: 'Rub the hand sanitizer all over your hands, making sure to get between your fingers and on the back of your hands.',
      },
      {
        backgroundColor: '#474747',
        image: <Image source={require('../../../assets/images/hand.jpeg')} style={{height: 200, width: 200, margin: -50, borderRadius: 100}} />,
        title: 'Hand Wash',
        subtitle: "We can help stop the spread of COVID-19 by washing our hands regularly with soap and water for 20 seconds.",
      },
    ]}
  />
);

export default InformationScreen;
