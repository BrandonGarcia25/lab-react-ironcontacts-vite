import { useState } from "react";
import "./App.css";
import contacts from './contacts.json'




function App() {
  const [allContacts, setAllContacts] = useState([...contacts]); 
  const [orderBy, setOrderBy] = useState(''); 

  if (orderBy === 'popularity') {
    allContacts.sort((a, b) => b.popularity - a.popularity); 
  } else if (orderBy === 'name') {
    allContacts.sort ((a, b) => a.name.localeCompare(b.name));
  }

  const handleClick = (event) => {
    setOrderBy (event.target.id);
  }; 
  const handleDelete


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
        </thead>
        <tbody>
          {allContacts.map( c => contacts (<tr>
<td> <img style={{ width: 100}} src={c.pictureUrl} alt={c.name}></img></td>
<td>{c.name}</td>
<td>{c.popularity.toFixed(2)}</td>  
</tr>))}
</tbody>
</table>
</div>
  );
}

export default App;
