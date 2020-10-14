import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'column-reverse',
      borderWidth: 1,
    },
    background: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    buttonContainer: {
      flex: 1,
      width: '100%',
      paddingLeft: '30%',
      paddingRight: '30%',
    },
    button: {
      paddingVertical: '10%',
    }
  })

  export default styles