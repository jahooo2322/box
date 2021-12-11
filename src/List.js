//import logo from './logo.svg';
//import './App.css';

// exemplo simples
/*
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

function List() {
  return (
    <div className="List">
    
  <ul>{listItems}</ul>
    
    </div>
  );
}

export default List;

*/

// lista passando valores

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
          
          {number}
          
     </li>
    );
    return (
      <ul>{listItems}</ul>
    );

    
  }

  

  export default NumberList