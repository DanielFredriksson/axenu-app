import React, { Component } from 'react';
import { ImageBackground, View, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation'
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import homeStyles from './styles'

// -+-+-+-+-+-+-+-+-+-+-+-+-+-
//          Styling         //
// -+-+-+-+-+-+-+-+-+-+-+-+-+-
const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 0,
        padding: 0,
        margin: 0,
    },
    ImageView: {
        padding: 0,
        margin: 0,       
        height: "50%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageOfMe: {
        aspectRatio: 0.4,
        alignItems: 'center',
        margin: 0,
        padding: 0,
        borderRadius: 500,
        maxHeight: '100%',
        maxWidth: '50%',  
        resizeMode: 'contain',
    },
    buttonContainer: {
        width: '100%',
        paddingLeft: '30%',
        paddingRight: '30%',
      },
      button: {
        paddingVertical: '10%',
      },
      triggerContainer: {
        flex: 1,
        alignItems: 'center',
      },
      triggerInner: {
        flex: 1,
        aspectRatio: 1.9,
        borderWidth: 2,
        paddingBottom: '110%',
        paddingTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      triggerOuter: {
        flex: 1,
        aspectRatio: 2,
        borderWidth: 2,
        paddingTop: '40%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
      }
});
// -+-+-+-+-+-+-+-+-+-+-+-+-+-
//           Image          //
// -+-+-+-+-+-+-+-+-+-+-+-+-+-
const NormalImage = () => {
    return (
        <View style={styles.ImageView}>
            <Image
                style={styles.ImageOfMe}
                source={require('../jagnu.png')}
            />
        </View>
    );
}
const AngryImage = (props) => {
    return (
        <View style={styles.triggerOuter}>
        <Image
            style={styles.triggerInner}
            source={require('../jagsen.png')}
            onPress={
                //props.navigation.navigate("Home")
                 console.log("Pressed!")
            }
            />
        </View>
    );
}

const RenderImage = (props) => {
    if (props.leftStore.triggered) {
        return(<AngryImage navigation={props.navigation} />)
    }  
    return(<NormalImage/>)
}

const NormalPageFunction = (props) => (
    // { flex: 1, style:styles.container, alignItems: 'center', justifyContent: 'center' }
    <View style={homeStyles.container}>
        <ImageBackground source={require('../react_native.png')} style={homeStyles.background}>
        <View style={homeStyles.buttonContainer}>
            <View style={homeStyles.button}>
                <Button
                    title="Trigger"
                    color="black"
                    onPress={action(() => {
                        props.homeStore.activateTrigger()
                        props.leftStore.activateTrigger()
                    })}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Go Home"
                    color="black"
                    onPress={() => {
                        props.navigation.navigate("Home")
                    }}
                />
            </View>
        </View>
        <RenderImage navigation={null} leftStore={props.leftStore}/>
        </ImageBackground>
    </View>
)

const AngryPageFunction = (props) => (
    <View style={styles.triggerContainer}>
        {props.leftStore.triggered == true ? 
            <Button
                title="Go Home"
                color="black"
                onPress={() => {
                    props.navigation.navigate("Home")
                }}
            />
        :   null
        } 
        <RenderImage 
            navigation={props.navigation}
            leftStore={props.leftStore}
        />
    </View>
)
// -+-+-+-+-+-+-+-+-+-+-+-+-+-
//            Main           //
// -+-+-+-+-+-+-+-+-+-+-+-+-+-
@inject("store")
@observer
class LeftScreen extends Component {
    constructor(props) {
        super(props)
        this.leftStore = this.props.store.$imports.leftStore
        this.homeStore = this.props.store.$imports.homeStore
    }

    render() {
        console.log("TRIGGERED LEFTSCREEN RE-RENDER")
        if (this.leftStore.triggered) {
            return (
                <AngryPageFunction
                    navigation={this.props.navigation}
                    leftStore={this.leftStore}
                />
            );
        }
        return (
            <NormalPageFunction 
                navigation={this.props.navigation}
                leftStore={this.leftStore}
                homeStore={this.homeStore}
            />
        );
    }
}

export default withNavigation(LeftScreen);
