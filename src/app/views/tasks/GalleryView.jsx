import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

class GalleryView extends Component {
  state = {
    imageList: [
        {
            img: "/assets/images/products/iphone-1.jpg",
            thumbnail: "/assets/images/products/thumbnails/iphone-1_tn.jpg"
        },
        {
            img: "/assets/images/products/headphone-1.jpg",
            thumbnail: "/assets/images/products/thumbnails/headphone-1_tn.jpg"
        },
        {
            img: "/assets/images/products/headphone-2.jpg",
            thumbnail: "/assets/images/products/thumbnails/headphone-2_tn.jpg"
        },
        {
            img: "/assets/images/products/headphone-3.jpg",
            thumbnail: "/assets/images/products/thumbnails/headphone-3_tn.jpg"
        },
        {
            img: "/assets/images/products/headphone-4.jpg",
            thumbnail: "/assets/images/products/thumbnails/headphone-4_tn.jpg"
        },
        {
            img: "/assets/images/products/iphone-2.jpg",
            thumbnail: "/assets/images/products/thumbnails/iphone-2_tn.jpg"
        },
        {
            img: "/assets/images/products/weather.jpg",
            thumbnail: "/assets/images/products/thumbnails/weather_tn.jpg"
        }
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
                    original={img.img}
                    thumbnail={img.thumbnail}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={img.thumbnail} />
                    )}
                  </Item>
           ))}

             </Gallery>
           </div>
         </SimpleCard>
         </div>

             )
  }
}

export default GalleryView;