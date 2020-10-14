import React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import { observer, inject } from 'mobx-react';
import { withNavigation } from 'react-navigation';
import styles from './styles'

const MaybeRenderButton = (props) => {
  if (props.homeStore.triggered) {
      return(
        <View>
        <Button
          title="Deactivate trigger!"
          color="red"
          onPress={() => {
            props.homeStore.deActivateTrigger()
            props.leftStore.deActivateTrigger()
          }}
        />
        </View>
      );
  }
  return null;
}

const HomePageFunction = (props) => (
  <View style={styles.container}>
    <ImageBackground source={require('../react_native.png')} style={styles.background}>
    <View style={styles.buttonContainer}>
        <View style={styles.button}>
              <Button
                title="Go left"
                color="black"
                onPress={() => props.navigation.navigate('Left')}
              />
        </View>
        <View style={styles.button}>
            <Button 
              title="Go To Recursive Screen"
              color="black"
              onPress={() => props.navigation.navigate('Recursive')}
            />
        </View>
        <MaybeRenderButton 
            homeStore={props.homeStore}
            leftStore={props.leftStore}
        />
    </View>
    </ImageBackground>
  </View>
)

// -+-+-+-+-+-+-+-+-+-+-+-+-+-
//            Main           //
// -+-+-+-+-+-+-+-+-+-+-+-+-+-
@inject("store")
@observer
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.homeStore = this.props.store.$imports.homeStore
    this.leftStore = this.props.store.$imports.leftStore
  }

  render() {
    this.homeStore.triggered
    console.log("TRIGGERED HOMESCREEN RE-RENDER")
    return (
      <HomePageFunction 
        navigation={this.props.navigation}
        homeStore={this.homeStore}
        leftStore={this.leftStore}
      />
     );
  }
}

export default withNavigation(Home)

// // Conver to Class
// @inject("store")
// @observer
// //
// export const HomeScreen = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('../react_native.png')} style={styles.background}>
//       <View style={styles.buttonContainer}>
//           {/* <Text>Home Screen</Text> */}
//           <View style={styles.button}>
//               <Button
//                 // style={styles.button}
//                 title="Go left"
//                 color="black"
//                 onPress={() => navigation.navigate('Left')}
//               />
//           </View>
//           <View style={styles.button}>
//               <Button 
//                 // style={styles.button}
//                 title="Go To Recursive Screen"
//                 color="black"
//                 onPress={() => navigation.navigate('Recursive')}
//               />
//           </View>
          
//           {global.StackManager.triggered == true ? <DeTrigger/> : null} 
//           {/* ^If-statement is checked during compilation */}
//           <MaybeRenderButton/>
//           {/* ^If-statement is checked during compilation */}

//           {/* <Text>Left screen is {global.StackManager.triggerMsg}</Text> */}
//       </View>
//       </ImageBackground>
//     </View>
//   );
// }

// --------------------------

// export function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go left"
//         onPress={() => navigation.navigate('Left')}
//       />
//       <Button
//         title="Go To Recursive Screen"
//         onPress={() => navigation.navigate('Recursive')}
//       />
//       <TEST/>
      
//       {global.StackManager.triggered == true ? <DeTrigger/> : null} 
//       {/* ^If-statement is checked during compilation */}
//       <MaybeRenderButton/>
//       {/* ^If-statement is checked during compilation */}

//       <Text>Left screen is {global.StackManager.triggerMsg}</Text>
//     </View>
//   );
// }

//export default HomeScreen
