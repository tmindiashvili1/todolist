import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
      input:''
    }
  }

  handleChangeText = (event) =>{
    this.setState({input:event.target.value})
  }

  handlePressAdd = () =>{
    const list =  [...this.state.list];
    this.setState({
      list: list.concat(this.state.input),
      input:''
    })
  }

  handleDeleteItem = (itemId) => {
    const newList = [...this.state.list.filter((item, index)=>{
      return index!==itemId
    })]
    this.setState({list:newList})
  }
  
  render() {
    const list = this.state.list.map((item, index)=>{
      return (
        <div key={index}>
          <p>{item}</p>
          <button onClick={()=>{this.handleDeleteItem(index)}}>Delete</button>
        </div>
      )
    })
    return (
      <div className="App">
        <h2>Enter ToDo</h2>
        <div> 
          <input type="text" name="todo" value={this.state.input} onChange={(event)=>this.handleChangeText(event)}/>
          <button onClick={()=>this.handlePressAdd()}>Add</button>
        </div>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

export default App;
