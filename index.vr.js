import React from 'react';
import Button from './button.js';

import {
  NativeModules,
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Video,
  VideoControl,
  MediaPlayerState,
  Sound,
} from 'react-vr';

const Linking = NativeModules.Linking;

export default class WelcomeToVR extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({
        autoPlay: true,
        muted: true
      }), // init with muted, autoPlay
    };
  }

  render() {
    this.Linking = NativeModules.Linking;
    return (
      <View

        style={{
       }}

        >


        <Pano source={asset('louvre.jpg')} />
        <View style={{ }}>
          <Sound source={{
            mp3: asset('rose.mp3')
           }} />
          <Text style={{
           backgroundColor: 'rgba(200, 54, 54, 0.5)',
             transform: [{translate: [0, 3, -5]}],
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center'
             }}>
            The Louvre is the world's largest museum
            and a historic monument in Paris, </Text>
        </View>
        <View style={{  }}>
          <Text

            style={{

            backgroundColor: 'rgba(200, 54, 54, 0.5)',
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [-3, 3, 0]},  {rotateY : 90} ],
          }}>
            Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735
            square
            metres (782,910 square feet)

          </Text>
        </View>

        <View style={{  }}>

          <Text
            style={{
            backgroundColor: 'rgba(200, 54, 54, 0.5)',
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [3, 3, 0]},  {rotateY : -90} ],
          }}>
            The Louvre is the world's most visited museum, receiving 7.4 million visitors in 2016
          </Text>
        </View>

        <View>
          <Video
            style={{
width: 3,
        height:2.0,
        transform: [{translate: [0, 4, 5]},  {rotateY : 180} ],
        }} source={{uri: '../static_assets/louvre_video.mp4'}}
            playerState={this.state.playerState}
            onEnter={() => this.state.playerState.play()}
            onExit={() => this.state.playerState.pause()}
            />
          <VideoControl
            style={{height: 0.2, width: 4}}
            playerState={this.state.playerState} />

        </View>

        <View
          onEnter={() => this.Linking.openURL("https://www.google.com").catch(err => console.error('An error occurred', err))}

          style={{
         }}>


          <Text

            style={{
            backgroundColor: '#777879',
            fontSize: 0.4,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: -0.5,
            paddingRight: -0.5,
            width: 2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]},  {rotateX : -45} ],
          }}>
            Next
          </Text>
        </View>

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

