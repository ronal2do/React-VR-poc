import React, {Component} from 'react';
import {asset, Pano, Text, View, StyleSheet, VrButton, Box, VrHeadModel, Sphere, PointLight, Animated} from 'react-vr';

import Intro from './intro';
import Home from './Home';
import Screen from './Screen';

export default class WelcomeToVR extends Component {

  state = {
    bg: "chess-world.jpg",
    scene: 1,
    previews: "",
    IDs: "",
    selectedStreamID: "",
    selectedEnv: "",
    environments: [
      "title-background.jpg",
      "dashboard-background.jpg",
      "Arizona.jpg",
      "Hawaii.jpg",
      "New Hampshire.jpg",
      "Texas.jpg"
    ]
  };

  changeScenes(nextScene, selectionIndex) {
    console.log('====================================');
    console.log('nextScene', nextScene);
    console.log('====================================');
    switch (nextScene) {
      case 1:
        this.setState({scene: 1, bg: 'chess-world.jpg'});
        break;
      case 2:
        this.setState({scene: 2, bg: 'wall.jpg'});
        break;
    }
  }

  render() {
    const { bg, scene } = this.state;

    return (
      <View>
        <Pano source={asset(bg)} />
        <PointLight
          intensity={2}
          style={{
            transform: [{
              translateZ: -5
            }]
          }}
        />
        { scene === 1 ? (
          <Intro 
            text={"Começar"}
            changeScenes={this.changeScenes.bind(this)}
            scene={scene}
          />
        ) : (
          <Home 
            text={"Voltar"}
            changeScenes={this.changeScenes.bind(this)}
            scene={scene}
          />
        )
        }
      </View>
    );
  }
}