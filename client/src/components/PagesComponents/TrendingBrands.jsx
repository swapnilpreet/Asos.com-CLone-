import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import monkl from "../../Brands/monkl.png";
import never from "../../Brands/never.png";
import collusionlogo from "../../Brands/collusionlogo.png";
import reclaimed from "../../Brands/reclaimed.png";
import topshop from "../../Brands/topshop.png";
import weekday from "../../Brands/weekday.png";


const TrendingBrands = () => {
  
  return (
    <Box mt={["10px","10px","10px","30px"]}>
        <Flex justifyContent={'center'} p={5} fontWeight={'semibold'}>
           <Text >TRENDING BRANDS</Text>
        </Flex>

        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(6,1fr)",
          }}
          margin={"auto"}
          gap={"5px"}
          width={["100%","100%","100%","70%"]}
          justifyContent={"space-evenly"}
        >
          <Box >
            <Link to={"/women-shoe"}>
              <Image className="bimg" src={monkl} alt="monkl" />
            </Link>
          </Box>
          <Box>
            <Link to={"/women-brands"}>
            <Image className="bimg" src={never} alt="never" />
            </Link>
          </Box>
          <Box>
            <Link to={"/women-topshop"}>
            <Image className="bimg" src={topshop} alt="topshop" />
            </Link>
          </Box>
          <Box>
            <Link to={"/women-newIn"}>
            <Image className="bimg" src={reclaimed} alt="reclaimed" />
            </Link>
          </Box>
          <Box>
            <Link to={"/women-topshop"}>
            <Image className="bimg" src={collusionlogo} alt="collusionlogo" />
            </Link>
          </Box>
          <Box>
            <Link to={"/women-dresses"}>
            <Image className="bimg" src={weekday} alt="weekday" />
            </Link>
          </Box>
        </Grid>
      </Box>
  )
}

export default TrendingBrands