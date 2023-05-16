
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Picker } from 'react-native';
import React, {useState, useEffect } from 'react';
import moment from "moment";

export default function App() {
  
  

const [tarefas,setTarefas] = useState([
  {
    company_id: "114",
    created_at: 1571323199864,
    name: "Aula Álgebra",
    id: "114_0v62DokeArxPA9oDSBst_349785",
    status: "IN_PROGRESS",
    summary: {
        percentage: 20
    }
},
{
    company_id: "114",
    created_at: 1578343188529,
    name: "Aula Trigonometria",
    id: "114_3Lj7okST2yBSYXUUByg2_349798",
    status: "NOT_STARTED",
    summary: {
        percentage: null
    }
},
{
    company_id: "114",
    created_at: 1568918240759,
    name: "Aula Filosofia",
    id: "114_3O81FOuWLZIlSDnRJHm1_349798",
    status: "COMPLETED",
    summary: {
      percentage: 100
    }
},
{
    company_id: "114",
    created_at: 1574361972593,
    name: "Aula Geografia",
    id: "114_46keopvfEUvlNP7bd049_349798",
    status: "IN_PROGRESS",
    summary: {
        percentage: 75
    }
},
{
    company_id: "114",
    created_at: 1571946887159,
    name: "Aula História",
    id: "114_5FK4ExJCz3vW4XmS0KVr_349798",
    status: "NOT_STARTED",
    summary: {
        percentage: null
    }
}
])



const [orderDate, setOrderDate] = useState('created_at');




tarefas.sort((a, b) => {
  return a[orderDate] < b[orderDate] ? -1 : 1
})



  

function deleltaraula(id){
  let array = tarefas.filter(function(val){
      return val.id != id;
  })
  setTarefas(array)
}

function carregaimagem(summary){
  if(summary === 100){
      return require('./src/img/fei.png');
  } if(summary > 0 && summary < 100) {
      return require('./src/img/car.png');
  } else {
      return;
  }
}

  return (
    <ScrollView 
    
    style={styles.container}>

      <Text style={styles.titulo}>Lista de Aulas</Text>

      {
        tarefas.map(function(val){
          
          const dataFormatada = moment(val.created_at).format('DD/MM/YYYY');

         
          
         
          

          return(

            
            <View style={styles.list}>
              
              <Text style={styles.txt}>Nome: {val.name}</Text>
              
              <Text style={styles.txt}>Data da criação: {dataFormatada}</Text>
              <Text style={styles.txt}>Id: {val.id}</Text>

              <Image
              source={carregaimagem(val.summary.percentage)}
              style={styles.img}
              /> 
              <TouchableOpacity 
              onPress={() => deleltaraula(val.id)}
              style={styles.btn}>
                  <Text style={{textAlign:'center'}}>Excluír</Text>    
                  

                  
              </TouchableOpacity>  
        
             </View>)
      })
    }
     
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
    backgroundColor:'#000'
  },

  titulo: {
    color:'#fff',
    textAlign:'center',
    fontSize:26,
    marginTop:10

  },

  list: {
    marginTop:20,
    marginLeft:50,
    width: 300,
    padding:8,
    backgroundColor: '#dcdcdc',
    borderRadius:10,
    margin:10,
    borderWidth:2,
    borderColor:'#fff'
},

txt: {
  color:'#000'
},

btn: {
  backgroundColor:'#fff',
  width:70,
  borderRadius:10,
  padding:5,
  marginTop:5
},
img: {
  width:50,
  height:50
}

});
