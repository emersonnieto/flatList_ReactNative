import React, {Component} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class App extends Component{

  //controi os state
  constructor(props){
    super(props);
    this.state = {
      //controi o array
      feed:[
        {id:'1', nome: 'Emerson', idade: 28, email: 'exemplo@email.com'},
        {id:'2', nome: 'teste1', idade: 22, email: 'exemplo@email.com'},
        {id:'3', nome: 'teste2', idade: 24, email: 'exemplo@email.com'},
        {id:'4', nome: 'teste3', idade: 23, email: 'exemplo@email.com'},
        {id:'5', nome: 'teste4', idade: 23, email: 'exemplo@email.com'},
      ]
    }; 
  }

  render(){
    //data e renderItem são propriedades obrigatorias no FlatList
    return(
      <View style={styles.container}>

        <FlatList
        //data recebe lista
          data={this.state.feed}
        //sempre precisa de id para uma lista
          keyExtractor={(item) => item.id}
         //renderItem mostra na tela, renderiza 
          renderItem={ ({item})=> <Pessoa data={item} />}
        />

      </View>
    );
  }
}
//estilos
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  areaPessoa:{
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20,
  },
});

export default App;

//componente 
class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
          <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
          <Text style={styles.textoPessoa}>Idade: {this.props.data.idade} </Text>
          <Text style={styles.textoPessoa}>Email: {this.props.data.email} </Text>
      </View>
    );
  }
}