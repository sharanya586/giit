import * as React from 'react';
import { Text, View, StyleSheet ,TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component {
 constructor(){
   super()
   this.state={
     textInput:'',
     displayText:''
   }
 }
 
  render() {
    return (
      <View style={styles.container}>
      <Header centerComponent={{text:'Monkey chunkey', style:{color:"yellow", fontSize:20, fontWeight:"bold" }}}>
      
      </Header>
      <TouchableOpacity 
      onPress={()=>this.setState({displayText:this.state.textInput})}
      
      style={{borderRadius:100,backgroundColor:"yellow",marginLeft:50,width:50,height:50}}>
      <Text style={{marginTop:15,marginLeft:15}}>go</Text>
      </TouchableOpacity>
      <TextInput 
      
      onChangeText={text => this.setState({textInput:text})}

      style={{marginTop: 200,
    width: 200,
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,}}/>
    <Text>hi {this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  }
});
