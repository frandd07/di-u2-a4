import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const quimicos = people.filter(person => person.profession == "químico").map(person => 
  <li key={person.id}>
    <img
      src={getImageUrl(person)}
      alt={person.name}
    />
    <p>
      <b>{person.name}:</b>
      {' ' + person.profession + ' '}
      conocido/a por {person.accomplishment}
    </p>
  </li> );

  const resto = people.filter(person => person.profession != "químico").map(person =>   <li key={person.id}>
    <img
      src={getImageUrl(person)}
      alt={person.name}
    />
    <p>
      <b>{person.name}:</b>
      {' ' + person.profession + ' '}
      conocido/a por {person.accomplishment}
    </p>
  </li> );
  
   
  return (
    <article>
      <h1>Científicos químicos</h1>
      <ul>{quimicos}</ul>
      <h1>Resto de cientificos</h1>
      <ul>{resto}</ul>
    </article>
  );
}
