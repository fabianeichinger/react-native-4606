/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
} = React;

class GifTest extends React.Component {
  componentWillMount() {
    this._changeWidthModifier();
  }

  _changeWidthModifier() {
    this.setState({widthModifier: Math.random(10)});
  }

  render() {
    const restore = () => this._changeWidthModifier();

    return (
      <View style={styles.container}>
        <Image style={{width: 250 + this.state.widthModifier, height: 250, backgroundColor: 'grey',}} source={require('./1.gif')} />
        <Text style={{fontSize: 30}} onPress={restore}>Restore</Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('GifTest', () => GifTest);
