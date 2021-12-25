import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Video } from 'expo-av';

export default  VideoPlayer = ({ route, navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
    
    return (
        
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{uri:route.params?.vidurl}}
        //useNativeControls
        resizeMode="stretch"
        isLooping
        rate={0.75 }
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
      <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>    
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    
    video: {
      alignSelf: 'center',
      width: "100%",
      height: "92%",
    },
    buttons: {
      backgroundColor:"white",
      flexDirection: 'row',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  