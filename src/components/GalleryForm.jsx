import React from 'react'
import { useState } from "react";
const GalleryForm = ({collection, setFilteredCollection}) => {
    const[titleToFind, setTitleToFind] = useState("")

    const filterCollection = collection.filter((item) => 
      item.title.toLowerCase().includes(titleToFind.toLowerCase())
    );

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        setFilteredCollection(filterCollection);
        e.target.reset();
       }
       
  return (
    <>
    <p>Find an artowrk: </p>
    <form onSubmit = {handleFormSubmit} >
    <input
     type="search" 
     name="titleToFind"
     value= {titleToFind}
      onInput={(e) => setTitleToFind(e.target.value)}
     />
    <input type="submit" value="Submit"/>
    </form>
    </>
  )
}

export default GalleryForm