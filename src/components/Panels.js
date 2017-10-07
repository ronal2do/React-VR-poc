import React, { Component } from 'react';
import {
  Text,
  View,
  VrButton,
  Image,
  asset
} from 'react-vr';

import Panel from './Panel';
//Element
export default class Panels extends Component {

  render() {
    const { stage } = this.props;
    return (
      <View style={{marginTop: -0.09, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
    
        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Panel 
            img="sashko.jpg"
          />
          <Panel 
            img="kete.jpg"
          /> 
    
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Panel 
            img="jbaxleyiii.jpg"
          />
          <Panel 
            img="milfont.jpg"
          /> 
          <Panel 
            img="haskell.jpg"
          /> 
            
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Panel 
            img="sibelius.jpg"
          />
          <Panel 
            img="sebas.jpg"
          /> 
          <Panel 
            img="joaogoncalves.jpg"
          />      
              
        </View>


        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Panel 
            img="marsiglio.jpg"
          />
          <Panel 
            img="react.jpg"
          />  
          <Panel 
            img="sosa.jpg"
          />     
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Panel 
            img="amorim.jpg"
          />
          <Panel 
            img="matheuslima.jpg"
          />  
          <Panel 
            img="geisy.jpg"
          />            
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Panel 
            img="daciuk.jpg"
          />
          <Panel 
            img="clara.jpg"
          />   
          <Panel 
            img="ronaldo.jpeg"
          />         
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Panel 
            img="raphael.jpg"
          />
          <Panel 
            img="keuller.jpg"
          />     
        </View>

     </View>
    )
  }
}
