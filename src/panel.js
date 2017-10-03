import React, {Component} from 'react';
import { 
  asset, 
  Image,
  Pano, 
  Text, 
  View, 
  StyleSheet,
  VrButton,
  Animated,
  CylindricalPanel
} from 'react-vr';

class Button extends React.Component {
  state = {open: false};
  
  render() {
    return (
      <VrButton
        onClick={() => {
          this.setState({open: !this.state.open});
        }}
      >
        <Text>Ver</Text>
      </VrButton>
    );
  }
}

export default class Panel extends Component {
  state = {
    bounceValue: new Animated.Value(0),
  };

  componentDidMount() {
    this.state.bounceValue.setValue(1.2);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.8,                         // Animate to smaller size
        friction: 2,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }

  render() {
    const { image } = this.props;
    return (
      <VrButton onClick={() => this.componentDidMount() }>

        <Animated.View
          style={{
            opacity: 1,
            width: 1,
            height: 1,
            transform: [                        // `transform` is an ordered array
              {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
            ]
          }}
        >
          <Image
            style={{
              width: 1,
              height: 1,
            }}
            source={asset(image)}
          />
          <Text
            style={{
              margin: 1,
              fontSize: 30,
              backgroundColor: 'grey',
            }}
          >
            {image}
          </Text>
          <Button />
        </Animated.View>
      </VrButton>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 0.8,
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [-1, 1, -5]}],
  },
  action: {
    width: 2,
    height: 2,
    backgroundColor: 'white',
    layoutOrigin: [0.5, 0.5],
    transform: [{ translate: [0, 0, -3] }]
  },
  button: {
    layoutOrigin: [0.5, 0.5],
    transform: [{ translate: [0, 0, -3] }]
  },
  sphere: {
    color: 'lightblue',
    // transform: [{ translate: [ 0, 0, -2] }]
  },
  light: {
    transform: [{ translate: [0, 7, 7] }]
  }
});
