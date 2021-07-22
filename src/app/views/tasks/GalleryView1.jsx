import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

class GalleryView extends Component {
  state = {
    imageList: [
      "/assets/images/products/iphone-1.jpg",
      "/assets/images/products/headphone-1.jpg",
      "/assets/images/products/iphone-1.jpg"
    ]
  };

  render() {
      let { imageList } = this.state;
      return (
         <div>
         <SimpleCard title="Task Documents">
           <div className="d-flex flex-wrap mb-4">
           <Gallery>
           {imageList.map((img, ind) => (
                <Item key={ind}
                    original="https://placekitten.com/1024/768?image=1"
                    thumbnail="https://placekitten.com/80/60?image=1"
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
                    )}
                  </Item>
           ))}

               <Item
                 original="https://placekitten.com/1024/768?image=1"
                 thumbnail="https://placekitten.com/80/60?image=1"
                 width="1024"
                 height="768"
               >
                 {({ ref, open }) => (
                   <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
                 )}
               </Item>
               <Item
                 original="https://placekitten.com/1024/768?image=2"
                 thumbnail="https://placekitten.com/80/60?image=2"
                 width="1024"
                 height="768"
               >
                 {({ ref, open }) => (
                   <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
                 )}
               </Item>
             </Gallery>
           </div>
         </SimpleCard>
         </div>

             )
  }
}

export default GalleryView;