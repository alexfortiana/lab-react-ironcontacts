import logo from './logo.svg';
import './App.css';
import allContacts from "../src/contacts.json"
import {useState} from "react"

function App() {

  const [contacts, setContacts] = useState(allContacts.slice(0,5))


  

  const handleAddContact = () => {
   const positionRandom = Math.floor(Math.random() * allContacts.length)
   const randomContact = allContacts[positionRandom]

    setContacts([randomContact, ...contacts])
  }

  const handleSortPopularity = () => {

    const contactsCopy = [...contacts]
    console.log(contactsCopy)

   setContacts( contactsCopy.sort((elem1, elem2)=>{
      if(elem1.popularity < elem2.popularity) {
        return 1
      } else {
        return -1
      }
    }))

  }

  const handleSortName = () => {
    
    const contactsCopy = [...contacts]
    console.log(contactsCopy)


    setContacts( contactsCopy.sort((elem1, elem2)=>{
      if(elem1.name > elem2.name) {
        return 1
      } else {
        return -1
      }
    }))

  }

  const handleDelete = (indexPosition) =>{
    const contactsCopy = [...contacts]
    contactsCopy.splice(indexPosition, 1)
     

    setContacts(contactsCopy)

    

  }
  

  return (
    <div className="App">
    <h2>IronContacts</h2>
    <button onClick={handleAddContact}>Add Random Contact</button>
    <button onClick={handleSortPopularity}>Sort by Popularity</button>
    <button onClick={handleSortName} >Sort by Name</button>
       <table>
       <tbody>
       <tr>
         <th>Picture</th>
         <th>Name</th>
         <th>Popularity</th>
         <th>Won an Oscar</th>
         <th>Won an Emmy</th>
         <th>Actions</th>
       </tr>

       {contacts.map((eachContact, index) =>{
         return(
        <tr key={eachContact.id}>
         <td><img src={eachContact.pictureUrl} alt="" width={100} /></td>
         <td>{eachContact.name}</td>
         <td>{eachContact.popularity.toFixed(2)}</td>
         <td>{eachContact.wonOscar && "🏆" }</td>
         <td>{eachContact.wonEmmy && "🏆" }</td>
         
         <td> <button onClick={() => handleDelete(index)} >Delete</button></td>
       </tr>
          
       )
       

       })}

       

       </tbody>

        
       </table>

      
    </div>
  );
}

export default App;
