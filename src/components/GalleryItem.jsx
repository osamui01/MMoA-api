import React from "react";


const GalleryItem = ({item}) => {
 
  return (
    <>
      <div className="item-card">
        <img src={item.primaryImageSmall} alt="Artwork" />
        <h3>{item.title}</h3>
        <p>{item.GalleryNumber}</p>
        <h4>{item.artistDisplayName}</h4>
        <p>{item.creditLine}</p>
      </div>
      
    </>
  );
};

export default GalleryItem;
