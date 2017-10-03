import React, { Component } from 'react';
import {
  Text,
  View,
  VrButton,
  Image,
  asset
} from 'react-vr';

//Element
export default class Panels extends Component {

  render() {
    const { stage } = this.props;
    return (
      <View style={{marginTop: -0.09, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
    
        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => console.log('click') }>
      
                <Image
                  source={asset('gato.jpg')}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    // borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
         
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => console.log('click') }>
      
                <Image
                  source={asset('gato.jpg')}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    // borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
         
            </VrButton>
          </View>
         
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => console.log('click') }>
      
                <Image
                  source={asset('gato.jpg')}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    // borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
         
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => console.log('click') }>
      
                <Image
                  source={asset('gato.jpg')}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    // borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
         
            </VrButton>
          </View>
         
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => console.log('click') }>
      
                <Image
                  source={asset('gato.jpg')}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    // borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
         
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => console.log('click') }>
      
                <Image
                  source={asset('gato.jpg')}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    // borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
         
            </VrButton>
          </View>
         
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => console.log('click') }>
      
                <Image
                  source={asset('gato.jpg')}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    // borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
         
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => console.log('click') }>
      
                <Image
                  source={asset('gato.jpg')}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    // borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
         
            </VrButton>
          </View>
         
        </View>

     </View>
    )
  }
}
