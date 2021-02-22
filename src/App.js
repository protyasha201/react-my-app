import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {nameIs: "Photoshop", price: "$90.99"},
    {nameIs: "Illustrator", price: "$48.23"},
    {nameIs: "PDF Reader", price: "$2.3"},
    {nameIs: "Somehow monitor", price: "$123.32"}
  ]

  const hero = ["john", "wick", "stephen"];

  var person = {
    name: "Dr. Mahfuz",
    job: "singer"
  }

  var person2 = {
    name:"Eva Rahman",
    n: "kokil"
  }

  var style = {
    color: "red",
    backgroundColor: "white",
    borderRadius: "20px"
  }
  return (
    <div className="App">
      <header className="App-header">
      <Users></Users>
        <Counter></Counter>

        <ul>
          {
            hero.map(heroes => <li>{heroes}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {/* <Product name={products[0].nameIs} price={products[0].price}></Product>
        <Product name={products[1].nameIs} price={products[1].price}></Product>
        <Product name={products[2].nameIs} price={products[2].price}></Product>
        <Product name={products[3].nameIs} price={products[3].price}></Product> */}
       
        {/* <Person></Person>
        <Person></Person>
        <Person></Person> */}
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Person(props){
  return (
  <div style={{width:'300px',border:"2px solid yellow", margin: "10px", padding: "20px"}}>
    <h1>Name: {props.name}</h1>
    <h3>job: {props.job}</h3>
  </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'light-gray',
    width: "300px",
    margin: "20px",
    padding: "20px"
  }

  const buttonStyle = {
    cursor: "pointer",
    border: "none",
    width: "100px",
    height: "30px",
    backgroundColor: "cornflowerBlue",
    borderRadius: "10px"
  }

  return (
    <div style={productStyle}>
      <h2>Name: {props.nameIs}</h2>
      <h1>Price: {props.price}</h1>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}

export default App;