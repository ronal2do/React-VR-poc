import React, { Component } from 'react';
import {
  Text,
  View,
  VrButton,
  Image,
  asset
} from 'react-vr';

//Element
export default class Panel extends Component {
  state = {
    show: false
  }

  render() {
    const { img } = this.props;
    const { show } = this.state;
    return (
      <View
        style={{
          margin: 0.1,
          height: show ? 1.2 : 0.8,
          backgroundColor: "#CAB9E5",
          borderStyle: "solid"
        }}
      >
        <VrButton onClick={ () => this.setState({ show: !this.state.show }) }>
            <Image
              source={asset(img)}
              style=
              {{
                width: show ? 1.2 : 0.8,
                height: show ? 1.2 : 0.8,
                borderColor: "#A482DF"
              }}
            />
        </VrButton>
        { show && <Text>
          React-conf 2017
        </Text>}
      </View>
    )
  }
}
