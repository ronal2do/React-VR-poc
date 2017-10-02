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
import Panel from './panel';

export default class WelcomeToVR extends Component {
  render() {

    return (
      <View>
        <Pano source={asset('marte.jpg')} />
        <CylindricalPanel layer={{width: 4000, height: 720}} style={{position: 'absolute', transform: [{translate: [-1, 0, -5]}] }}>
          <View
            style={{
              opacity: 1,
              width: 4000,
              height: 720,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <Panel image={'dog.jpg'}/>
            <Panel image={'gato.jpg'}/>
            <Panel image={'dog.jpg'}/>
            <Panel image={'gato.jpg'}/>
          </View>
          <View >
          <View>
            <Text
              style={{
                margin: 10,
                fontSize: 30,
                backgroundColor: 'grey',
              }}
            >
             Menu
            </Text>
          </View>
        </CylindricalPanel>
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
