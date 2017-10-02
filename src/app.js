import React, {Component} from 'react';
import {asset, Pano, Text, View, StyleSheet, VrButton} from 'react-vr';

export default class WelcomeToVR extends Component {
  state = { myStateVariableCounter: 0 }
  render() {
    const { myStateVariableCounter } = this.state;

    return (
      <View>
        <Pano source={asset('HangarLastFrame.jpg')} />
        {/* <Text style={styles.text}>Eitcha</Text> */}
        {/* <View
          style={styles.action}
          onEnter={() => { console.log( 'on enter' ) }}
          onMove={ (event) => console.log('move ', event.nativeEvent) }
          onInput={ (event) => console.log('input ', event.nativeEvent.inputEvent.type) }
          onExit={() => { console.log( 'on exit' ) }}
        /> */}
        <VrButton 
          style={styles.button}
          onClick={() => {
            console.log('onClick')
            this.setState({ myStateVariableCounter : 10 })
          } }
          onLongClick={() => console.log('onLongClick') }
          onButtonPress={() => console.log('onButtonPress') }
          onButtonRelease={() => console.log('onButtonRelease') }
          >
          <Text>Click me! { myStateVariableCounter }</Text>
        </VrButton>
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
    transform: [{translate: [0, 0, -13]}],
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
  }
});
