import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Salman', 'AAmir', 'Shahrukh','Salman shah', 'Shuvo'];
  const cinemas = [
    {nayok:'Salman', nayika:'Katrina'},
    {nayok:'Aamir', nayika:'Katrina'},
    {nayok:'Salman Shah', nayika:'Katrina'}
  ]
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* <Cinema nayok="Salman" nayika="cat"></Cinema> */}
        {
          // cinemas.map(cinema => console.log(cinema))
          cinemas.map(cinema =>  <Cinema nayok= {cinema.nayok} nayika={cinema.nayika}></Cinema>)
        }
      

    </div>
  );
}

/* 
<a href="https://www.google.com./">google.com </a>
      <p id="title">Title </p>
      <Person name= "Joy" nayika= "Nai"> </Person>
      <Person name="Ananta" nayika='Borsha'> </Person>
      <Person> </Person>
      <Person> </Person>
      <Person name="Kober da" nayika="Kopila"> </Person>



*/


/* 
<Friend phone="01770963874" address="Rajshahi"></Friend>
      <Friend phone="01770963874" address="Nator"></Friend>
      <Friend phone="01770963874" address="Sardah "></Friend>
      <Friend phone="01770963874" address="Charghat"></Friend>

*/

/* 
  <Country name="Salman Khan" country="India"></Country>
      <Country name="Aamir Khan" country="India"></Country>
      <Country name="Shahrukh Khan" country="India"></Country>
      <Country name="Kapil Sharma" country="India"></Country>
      <Country name="Selim Khan" country="India"></Country>
      


*/

/* 
  <Person name={nayoks[0]} nayika="Sridebi"> </Person>
      <Person name={nayoks[1]} nayika="Madhuri"> </Person>
      <Person name={nayoks[2]} nayika="Juhi"> </Person>
      <Person name={nayoks[3]} nayika="Ash"> </Person>
      <Person name={nayoks[4]} nayika="Zareen"> </Person>


*/

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '5px solid lightSalmon',
    margin: '20px',
    borderRadius: '20px'
  }

  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of:{props.nayika}  </h4>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className="person">
      <h3>Phone:{props.phone} </h3>
      <h5>Address: {props.address} </h5>
    </div>
  );
}

function Country(props) {
  return (
    <div className="person">
      <h3>Name:{props.name} </h3>
      <h3>Country: {props.country} </h3>

    </div>
  )
}


function Cinema(props) {
  return(
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h3>Nayika; {props.nayika}</h3>
    </div>
  )
}


export default App;
