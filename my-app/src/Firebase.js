import React from "react";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {collection, getDocs, addDoc} from "firebase/firestore";

function Firebase() {
  const [newName, setNewName] = useState("")
  const [newIntern, setNewIntern] = useState("")

  const [users, setUsers] = useState([]);
  const usersCollection = collection(db,"users");
  
 

  const createUser = async () => {
      await addDoc(usersCollection, {name: newName, internship: newIntern });
  }
  
  useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollection);
        console.log(data);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };

      getUsers();

    }, [])
    
    console.log(process.env.REACT_APP_API_KEY)

  return <div className="App">
    
    <input placeholder="Name.."
    onChange = {(event) => {
      setNewName(event.target.value);
    }}
    />

    <input placeholder="Internship.."
    onChange ={(event) => {
      setNewIntern(event.target.value);
    }} 
    />
    <button onClick={createUser}>Create User</button>

    {users.map((user) => {
      return <div> {" "} 
      <h1> Name: {user.name} </h1> 
      <h1> Internship: {user.internship} </h1> 
      </div>;
    })}

    <br/> <br/><br/>
    <h1> After creating a user refresh page to verify user has been added to Firebase</h1>
    </div>
  
};

export default Firebase;
