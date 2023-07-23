import { Box,Image,Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


const ImageSlider = () => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[" ", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Box p={5}>
          <Link to={"/women-dresses"}>
            <Image src="https://images.asos-media.com/products/rebellious-fashion-mini-dress-with-ruched-side-in-blue-zebra-print/203012265-1-blue?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
              <Text ml={12} fontWeight={"bold"} p={2}>
                Dresses
              </Text>
            </Box>
          </Link>
        </Box>

        <Box p={5}>
          <Link to={"/women-accessories"}>
            <Image src="https://images.asos-media.com/products/asos-design-co-ord-metallic-halter-cami-top-with-frill-hem-panels-in-pink/202951439-1-pink?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
              <Text ml={12} fontWeight={"bold"} p={2}>
                Tops
              </Text>
            </Box>
          </Link>
        </Box>

        <Box p={5}>
          <Link to={"/women-sportwear"}>
            <Image src="https://images.asos-media.com/products/asos-design-straight-jean-in-light-wash-with-rip-and-split-hem/201933857-1-lightwashblue?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
              <Text ml={12} fontWeight={"bold"} p={2}>
                Jeans
              </Text>
            </Box>
          </Link>
        </Box>

        <Box p={5}>
          <Link to={"/women-shoe"}>
            <Image src="https://images.asos-media.com/products/south-beach-halter-tie-bikini-top-in-tropical-abstract-print/204502981-3?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
              <Text ml={12} fontWeight={"bold"} p={2}>
                Swim
              </Text>
            </Box>
          </Link>
        </Box>

        <Box p={5}>
          <Link to={"/women-shoe"}>
            <Image src="https://images.asos-media.com/products/adidas-originals-retropy-f90-trainers-in-pale-grey-with-blue-details/202533726-1-silver?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
              <Text ml={12} fontWeight={"bold"} p={2}>
                Sneakes
              </Text>
            </Box>
          </Link>
        </Box>

        <Box p={5}>
          <Link to={"/women-newIn"}>
            <Image src="https://images.asos-media.com/products/aj-morgan-slim-square-sunglasses-in-blue/203941940-2?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
              <Text ml={12} fontWeight={"bold"} p={2}>
                Best Deals
              </Text>
            </Box>
          </Link>
        </Box>
      </Carousel>
    </>
  );
};

export default ImageSlider;
