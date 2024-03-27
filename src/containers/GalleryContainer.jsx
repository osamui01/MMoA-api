import { useEffect, useState } from "react";
import GalleryList from "../components/GalleryList";
import GalleryItem from "../components/GalleryItem";
import GalleryForm from "../components/GalleryForm";

const GalleryContainer = () => {
  const [collection, setCollection] = useState([]);
  // const [isTrue, setIsTrue] = useState(false)
  const fetchCollection = async () => {
    const response = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Da%20Vinci&dateStart=1400"
    );
    const collectionJson = await response.json();
    const itemDetailPromises = collectionJson.objectIDs.map((objectID) => {
      return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
      .then((response) => {
        return response.json();
      })
    })

    console.log(itemDetailPromises);

    Promise.all(itemDetailPromises)
    .then((result) => {
      console.log(result)
      setCollection(result);
    })
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  const [filteredCollection, setFilteredCollection] = useState([...collection]);

  const filteredEmpty = () => {
    return filteredCollection.length === 0;
  }

  return (
    <>
      <h1>Leonardo Da Vinci's <span>Digital Gallery</span></h1>
      <GalleryForm collection={collection} setFilteredCollection={setFilteredCollection} />

      {filteredEmpty() ? <GalleryList collection={collection} /> : <GalleryList collection={filteredCollection} />}
    </>
  );
};

export default GalleryContainer;