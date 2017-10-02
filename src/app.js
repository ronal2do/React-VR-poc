import React, {Component} from 'react';
import {asset, Pano, Text, View, StyleSheet, VrButton, Box, VrHeadModel, Sphere, PointLight, Animated} from 'react-vr';

export default class WelcomeToVR extends Component {
  state = { 
    myStateVariableCounter: 0,
    // bg: 'HangarLastFrame.jpg',
    bg: 'chess-world.jpg',
    hmRot: VrHeadModel.rotation(),
    springValue: new Animated.Value(-1),
  }

  componentDidMount(){
    this.timer = setInterval(()=>{this.tick()}, 50);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    this.setState({
      hmRot: VrHeadModel.rotation()
    });
  }

  spring = () => {
    Animated.spring(
      this.state.springValue,
      {
        toValue: 0,
        tension: 1,
        friction: 2
      }
    ).start();
  }

  render() {
    const { myStateVariableCounter, hmRot, bg, springValue } = this.state;

    return (
      <View>
        <PointLight
          intensity={2}
          style={{
            transform: [{
              translateZ: -5
            }]
          }}
        />
        <Pano source={asset(bg)} />
        {/* <Text style={styles.text}>Eitcha</Text> */}
        <Animated.Text style={{
          layoutOrigin: [ 0.5, 0.5 ],
          transform: [
           { translateZ: -1},
           { translateY: springValue},
          ],
        }}>Eitcha</Animated.Text>
        {/* <View
          style={styles.action}
          onEnter={() => { console.log( 'on enter' ) }}
          onMove={ (event) => console.log('move ', event.nativeEvent) }
          onInput={ (event) => console.log('input ', event.nativeEvent.inputEvent.type) }
          onExit={() => { console.log( 'on exit' ) }}
        /> */}
        {/* <VrButton 
          style={styles.button}
          onClick={() => {
            console.log('onClick')
            this.setState({ myStateVariableCounter : myStateVariableCounter + 1 })
          } }
          onLongClick={() => console.log('onLongClick') }
          onButtonPress={() => console.log('onButtonPress') }
          onButtonRelease={() => console.log('onButtonRelease') }
          >
          <Text>Click me! { myStateVariableCounter }</Text>
        </VrButton> */}
        {/* <VrButton 
          style={styles.button}
          onClick={() => {
            console.log('onClick')
            this.setState({ bg : 'HangarLastFrame.jpg' })
          } }
          onLongClick={() => console.log('onLongClick') }
          onButtonPress={() => console.log('onButtonPress') }
          onButtonRelease={() => console.log('onButtonRelease') }
          >
          <Text>Entrar</Text>
        </VrButton> */}
        <VrButton 
          style={styles.button}
          onClick={() => this.spring() }
          onLongClick={() => console.log('onLongClick') }
          onButtonPress={() => console.log('onButtonPress') }
          onButtonRelease={() => console.log('onButtonRelease') }
          >
          <Text>Click me!</Text>
        </VrButton>
        <Box
          dimWidth={1}
          dimHeight={1}
          style={{
            transform: [
              {translate: [-2, 0, -2]},
              {rotateY: -20}
            ],
            color: '#4444ff'
          }}
          lit={true}
          materialParameters={{
            vertexShader: this.vertexShader,
            fragmentShader: this.fragmentShader,
          }}
        />
        {/* <View
          style={{
            position: 'absolute',
            layoutOrigin: [0.5, 0.5],
            transform: [
              {translate: [0, 0, 0]},
              {rotateX: hmRot[0]},
              {rotateY: hmRot[1]},
              {rotateZ: hmRot[2]}
            ]
          }}>
          <Text
            style={{
              position: 'absolute',
              layoutOrigin: [0.5, 0.5],
              backgroundColor: '#f00',
              transform: [
                {translate: [0, 0, -2]},
              ]
            }}>
            Fixed
          </Text>
        </View> */}
        {/* <Sphere 
          wireframe
          heightSegments={30}
          widthSegments={30}
          style={[styles.sphere, {
            transform: [{ translate: [ -1 , myStateVariableCounter, -10] }]
          }]}
        /> */}
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
