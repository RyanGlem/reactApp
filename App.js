import logo from './logo.svg';
import React, {Component, useState} from 'react'
import './App.css';

class ContactCard extends Component {
  constructor (props) {

      super (props);
      this.state = {
          name: props.name,
          mobile: props.mobile,
          email: props.email
      }
  }

      render () {
          return <h1> {this.state.name} {this.state.mobile} {this.state.email}</h1>
  }
}

function App() {
  
  const [count, setCount] = useState(0);

  return (
  <div>
    <h1>Contact Cards!</h1>
    <p> You clicked {count} times</p>
    <button onClick={() => setCount (count + 1)}> Increment </button>
    <button onClick={() => setCount (count - 1)}> Decrement </button>
      <div style = {{color: "red" , 
                     backgroundColor: "lightblue",
                     borderStyle: "dashed",
                     fontFamily: "Arial",
                     textAlign: "center"}}>
        <ContactCard name = "bobby"/>
        <ContactCard mobile = "347-673-9402"/>
        <ContactCard email = "bobby@hotmail.com"/>
      </div>
      <div style = {{color: "black" , 
                     backgroundColor: "lightblue",
                     borderStyle: "dashed",
                     textAlign: "center"}}>
      <ContactCard name = "tommy"/>
      <ContactCard mobile = "917-673-9402"/>
      <ContactCard email = "tommy@hotmail.com"/>
      </div>
      <div style = {{color: "red" , 
                     backgroundColor: "lightblue",
                     borderStyle: "dashed",
                     textAlign: "center"}}>
      <ContactCard name = "John"/>
      <ContactCard mobile = "454-745-9402"/>
      <ContactCard email = "john@hotmail.com"/>
      </div>
  </div>)
}

export default App;
