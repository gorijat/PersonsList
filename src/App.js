import React, { Component } from "react";
import PersonsList from "./components/PersonsList";
import NewPerson from "./components/NewPerson";
//styles
import "./App.css";

class App extends Component {
  state = {
    name: "Goran",
    data : [
      
  ]
}
componentDidMount(){
  let data = [];
  if (localStorage.data) {
    data = JSON.parse(localStorage.data)
  }
  this.setState({
    data : data
  })
}

insertNewPerson = (person)=>{
  person.id = Math.floor(Math.random()*(10000-10)+10);
  localStorage.data = JSON.stringify([...this.state.data,person]);
  //let dataCopy = this.state.data.concat(person)
  let dataCopy = [...this.state.data,person];
  this.setState({
    data : dataCopy
  })
}

deletePerson = (id)=>{
  
  let filteredData = this.state.data.filter(el=>{
    return el.id !== id;
  })
  localStorage.data = JSON.stringify(filteredData);

  this.setState({
    data : filteredData
  })
  
  
}

    render(){
      return(
      <div>
        <PersonsList deletePerson={this.deletePerson} data={this.state.data} />
        <NewPerson insertNewPerson={this.insertNewPerson}/>
      </div>
      
      )
    }
  }

  export default App;