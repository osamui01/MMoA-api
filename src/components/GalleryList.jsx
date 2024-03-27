import React from 'react'
import GalleryItem from './GalleryItem';

const GalleryList = ({collection}) => {
  
  const itemComponents = collection.map((item) =>{
    return <GalleryItem key={collection.objectID} item={item} />
  });
  
  return (
    <div>
      <h2>The Gallery</h2>
        <div className='item-components'>      
            {itemComponents}
        </div>
    </div>
  )
}

export default GalleryList;