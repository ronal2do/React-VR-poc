import React, {Component} from 'react';
import { 
  asset, 
  Image,
  Pano, 
  Text, 
  View, 
  StyleSheet,
  VrButton,
  CylindricalPanel
} from 'react-vr';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
    return (
      <VrButton
        onClick={() => {
          this.setState({open: !this.state.open});
        }}
      >
        <Image
          style={{
            borderRadius: 20,
            height: this.state.open ? 120 : 60,
            margin: 10,
            width: this.state.open ? 200 : 100}}
            source={asset('gato.jpg')}
        />
      </VrButton>
    );
  }
}

export default class Panel extends Component {
  render() {
    const { image } = this.props;
    return (
      <View
        style={{
          opacity: 1,
          width: 400,
          height: 720,
        }}
      >
        <Text
          style={{
            margin: 10,
            fontSize: 30,
            backgroundColor: 'grey',
          }}
        >
          {image}
        </Text>
        <Image
          style={{
            width: 400,
            height: 315,
          }}
          source={asset(image)}
        />
        <Button />
      </View>
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
