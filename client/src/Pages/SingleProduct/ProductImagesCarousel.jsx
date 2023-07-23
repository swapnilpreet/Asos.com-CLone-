import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Flex } from "@chakra-ui/react";

const ProductImagesCarousel = ({ images }) => {
  return (
    <Flex w={['100%','100%','100%','100%']}>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
        width={'auto'}
      >
        {images?.map((img,index) => (
          <img
            key={index}
            src={img}
            alt={img}
          />
        ))}
      </Carousel>
    </Flex>
  );
};

export default ProductImagesCarousel;