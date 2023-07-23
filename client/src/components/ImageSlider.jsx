import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const ImageSlider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide:0
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 
        }
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
          <Link to={'/men-newIn'}>
            <Image src="https://images.asos-media.com/products/asos-design-relaxed-deep-revere-shirt-in-black-paisley-print/202868510-4?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
            <Text ml={12} fontWeight={'bold'} p={2}>SHIRTS</Text>
            </Box>
          </Link>
        </Box>
        <Box p={5}>
        <Link to={'/men-newIn'}>
            <Image src="https://images.asos-media.com/products/another-influence-oversized-chino-shorts-in-khaki/204203391-1-khaki?$n_640w$"></Image>
            <Box bg={"white"}>
            <Text ml={12} fontWeight={'bold'} p={2}>SHORTS</Text>
            </Box>
        </Link>
        </Box>

        <Box p={5}>
        <Link to={'/men-newIn'}>
            <Image src="https://images.asos-media.com/groups/gianni-feraud-single-breasted-suit-in-turquoise-blue/96484-group-1?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
            <Text ml={12} fontWeight={'bold'} p={2}>SHORTS</Text>
            </Box>
        </Link>
        </Box>

        <Box p={5}>
        <Link to={'/men-newIn'}>
            <Image src="https://images.asos-media.com/products/adidas-originals-adventure-large-chest-graphic-t-shirt-in-green/203404465-3?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
            <Text ml={12} fontWeight={'bold'} p={2}>SMART STUFF</Text>
            </Box>
        </Link>
        </Box>

        <Box p={5}>
        <Link to={'/men-accessories'}>
           <Image src="https://images.asos-media.com/products/asos-design-90s-retro-rimless-sunglasses-in-with-green-gradient-lens-in-gold/204232165-1-gold?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
            <Text ml={12} fontWeight={'bold'} p={2}>TEES</Text>
            </Box>
        </Link>
        </Box>

        <Box p={5}>
        <Link to={'/men-shoe'}>
            
            <Image src="https://images.asos-media.com/products/hi-tech-shadow-og-trainers-in-navy/202167597-1-navy?$n_640w$&wid=513&fit=constrain"></Image>
            <Box bg={"white"}>
            <Text ml={12} fontWeight={'bold'} p={2}>SNEAKES</Text>
            </Box>
        </Link>
        </Box>
        </Carousel>
    </>
  )
}

export default ImageSlider

