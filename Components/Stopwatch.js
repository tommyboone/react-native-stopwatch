import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {Stopwatch} from 'react-native-stopwatch-timer';

const image = {uri: 'https://reactjs.org/logo-og.png'};

export default class BasicStopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopWatchStart: false,
      resetStopWatch: false,
    };
    this.startStopStopWatch = this.startStopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
  startStopStopWatch() {
    this.setState({
      isStopwatchStart: !this.state.isStopwatchStart,
      resetStopwatch: false,
    });
  }
  resetStopwatch() {
    this.setState({isStopwatchStart: false, resetStopwatch: true});
  }
  getFormattedTime(time) {
    this.currentTime = time;
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground source={image} style={options.image}>
          <View
            style={{
              flex: 1,
              marginTop: 32,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: '',
            }}>
            <Stopwatch
              laps
              start={this.state.isStopwatchStart}
              //To start
              reset={this.state.resetStopwatch}
              //To reset
              options={options}
              //options for the styling
              getTime={this.getFormattedTime}
            />

            <TouchableHighlight onPress={this.startStopStopWatch}>
              <Text style={options.btn}>
                {!this.state.isStopwatchStart ? 'START' : 'STOP'}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.resetStopwatch}>
              <Text style={options.btn}>RESET</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const options = StyleSheet.create({
  container: {
    backgroundColor: 'darkslategray',
    padding: 5,
    borderRadius: 10,
    width: '95%',
    height: 100,
    alignItems: 'center',
    
  },
  text: {
    fontSize: 60,
    color: '#FFF',
    marginLeft: 7,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: 'rebeccapurple',
    fontSize: 20,
    marginTop: 10,
    color: '#fff',
    width: 100,
    height:30,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    fontWeight: 'bold',
    borderRadius: 5
  },
});
