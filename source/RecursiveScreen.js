// -+-+-+-+-+-+-+-+-+-+-+-+-+-
//           Imports        //
// -+-+-+-+-+-+-+-+-+-+-+-+-+-
import * as React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native'
import { withNavigation } from 'react-navigation'
import styles from './styles'

const ScreenFunction = (props) => (
  <View style={styles.container}>
  <ImageBackground source={require('../react_native.png')} style={styles.background}>
  <View style={styles.buttonContainer}>
      <View style={styles.button}>
          <Button
              title="Go to Recursive Screen."
              color="black"
              onPress={() => props.navigation.push('Recursive')}
          />
      </View>
      <View style={styles.button}>
          <Button
              title="Go to Home"
              color="black"
              onPress={() =>
                props.navigation.navigate('Home')
            }
      />
      </View>
          <Button
              title="Go back"
              color="black"
              onPress={() => props.navigation.goBack()
           }
      />
  </View>
  </ImageBackground>
  </View>
)

// -+-+-+-+-+-+-+-+-+-+-+-+-+-
//            Main          //
// -+-+-+-+-+-+-+-+-+-+-+-+-+-
class RecursiveScreen extends React.Component {
  render() {
    return(
      <ScreenFunction navigation={this.props.navigation}/>
    );
  }
}

export default withNavigation(RecursiveScreen)
