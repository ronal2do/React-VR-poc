import React from 'react';
import {
  Text,
  View,
  VrButton,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

//Element
class Button extends React.Component {
  constructor() {
    super();
    this.state = { slideRight: new Animated.Value(1), fadeIn: new Animated.Value(0)};
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideRight,
          {
           toValue: 0,
           duration: 2000,
           easing: Easing.ease
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 1,
           duration: 2000,
           easing: Easing.ease
          }
        )
      ])
    ]).start();
  }

  render() {
    const currentScene = this.props.scene;
    let nextScene;
    switch (currentScene) {
      case 1:
        nextScene = 2;
        break;
      case 2:
        nextScene = 1;
        break;
    }

    const stage = this.props.stage;
    const selectionIndex = this.props.selectionIndex;

    return (
  
      <Animated.View
        style={{
          margin: 0.1,
          paddingLeft: 0.2,
          paddingRight: 0.2,
          height: 0.3,
          backgroundColor: '#A482DF',
          borderRadius: 0.1,
          opacity: this.state.fadeIn,
          transform: [
            {translateX: this.state.slideRight}
          ]
        }}
      >

        <VrButton onClick={() => this.props.changeScenes(nextScene)}>
          <Text
            style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
          {this.props.text}
          </Text>
        </VrButton>

      </Animated.View>
    )
  }
}

module.exports = Button;
