import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

import Title from './components/Title.js';
import Button from './components/Button.js';

//Layout
export default class Intro extends React.Component {
  render() {
    return (
      <View style={{
        width: 2,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -3]}]
      }}>
        <Title/>
        <Button
          text={this.props.text}
          changeScenes={this.props.changeScenes}
          scene={this.props.scene}
        />
      </View>
    )
  }
}
