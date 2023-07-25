import React, { useEffect } from "react";
import offer from "../Images/offer2.avif";
import selfcare from "../Images/selfcare.png";
import gofor from "../Images/gofor.png";
import label from "../Images/label.png";
import inhouse from "../Images/inhouse.png";
import getgift from "../Brands/getgift.png";
import "../style/LandingPage.css";
import styles from '../components/Navbar/DestopNavbar/style.module.css';
import { Link} from "react-router-dom";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import TrendingBrands from "../components/PagesComponents/TrendingBrands";
// import { useDispatch } from "react-redux";
// import { SetLoader } from "../Redux/LoaderSlice";
// import { GetCurrentUser } from "../ApiCall/users";
// import { SetUser } from "../Redux/UserSlice";



const Home = () => {
  
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const getUserInfo = async () => {
  //   try {
  //     dispatch(SetLoader(true));
  //     const response = await GetCurrentUser();
  //     if (response.success) {
  //       dispatch(SetLoader(false));
  //       dispatch(SetUser(response.data));
  //     } else {
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     dispatch(SetLoader(false));
  //     navigate("/login");
  //   }
  // }
  //   useEffect(() => {
  //     getUserInfo()
  //   }, [])
    

  return (

    <Box>
      <Grid className="maindiv" w={['100%','100%','100%','80%']}>
        <Link to={"/men-cloth"}>
          <Image style={{ width: "100%" }} src={offer} alt="offer" />
        </Link>
      </Grid>
      {/* 2nd div  */}
      <Box  mt={10}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",

        }}
        gap={"10"}
        width={["85%","75%","75%","95%"]}
        margin="auto"
      >
        <GridItem textAlign={"center"}>
          <Link to="/women-accessories">
            <img src={selfcare} alt="selfcare" />
          </Link>
          <Box p={2}>
          <Text fontWeight={'bold'} >SELF CARE MOMENT </Text>
          <Text fontSize={'sm'}>It's treats Yourself Time</Text>
          </Box>
        </GridItem>
        <GridItem textAlign={"center"}>
          <Link to="/women-sportwear">
            <img src={label} alt="label" />
          </Link>
          <Box p={2}>
          <Text fontWeight={'bold'} > LABEL LOVE </Text>
          <Text fontSize={'sm'}>It's treats Yourself Time</Text>
          </Box>
        </GridItem>

        <GridItem textAlign={"center"}>
          <Link to="/women-dresses">
            <img src={inhouse} alt="inhouse" />
          </Link>
          <Box p={2}>
          <Text fontWeight={'bold'}>IN-HOUSE BRNDS</Text>
          <Text fontSize={'sm'}>It's treats Yourself Time</Text>
          </Box>
        </GridItem>

        <GridItem textAlign={"center"}>
          <Link to="/women-cloth">
            <img src={gofor} alt="gofor" />
          </Link>

          <Box p={2}>
          <Text fontWeight={'bold'}>GO FOR GLAM</Text>
          <Text fontSize={'sm'}>It's treats Yourself Time</Text>
          </Box>
        </GridItem>
      </Grid>
      </Box>
      {/* 3rd div */}
      <Box mb={20} mt={10} p={5} className={styles.gradient}>
        <Flex justifyContent={'center'} textAlign={'center'}>
          <Link to={"/womenclothing"}>
            <Text className="h2">UPTO 50% OFF COSY GEAR! </Text>
            <Text className="h2">GIVE WINTER THE COLD SHOULDER </Text>
            <Text fontSize={'xs'} color={'white'}>
              Limited time only.Selected styles marked down as shown
            </Text>
          </Link>
        </Flex>
      </Box>
      {/* after offer page 2 div */}
      <Box width={["100%","100%","100%","80%"]} margin={'auto'}>
        <Grid gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}>
            <GridItem >
                <Box ml={[5,0,0,20]}>
                  <Box h={["500px","500px","500px","600px"]}>
                    <Image h={"full"} src='https://content.asos-media.com/-/media/homepages/ww/2023/june/19-prime/ww-gbl/ww_global_topshop_moment_870x1110.jpg'></Image>
                  </Box>

                  <Flex direction={'column'} alignItems={'center'} w={'75%'} mt={2} gap={2}>
                  <Text fontSize={'2xl'}>TOPSHOP</Text>
                  <Text>Endless style</Text>
                  <Box border={'2px solid black'} p={1}>
                   <Link border={"1px solid red"}>
                        <Text>SHOP THE BRAND</Text>
                   </Link>
                  </Box>
                  </Flex>
                </Box>
            </GridItem>
            <GridItem >
                <Box ml={[5,0,0,20]} mt={[10,0,0,0]}>
                  <Box h={["500px","500px","500px","600px"]}>
                    <Image h={"full"} src='https://content.asos-media.com/-/media/homepages/ww/2023/june/19-prime/ww-gbl/ww_global_collusion_ballerina_sleaze_moment_870x1110.jpg'></Image>
                  </Box>
                  <Flex direction={'column'} alignItems={'center'} w={'75%'} mt={2} gap={2}>
                  <Text fontSize={'2xl'}>COLLUSION</Text>
                  <Text>Go grunge</Text>
                  <Box border={'2px solid black'} p={1}>
                   <Link border={"1px solid red"}>
                        <Text>SHOP THE BRAND</Text>
                   </Link>
                  </Box>
                  </Flex>
                </Box>
            </GridItem>
        </Grid>
      </Box>
      <Box w={'100%'} h={['150px','150px','150px','190px']} mt={5}>
        <Image src={getgift} h={'full'} w={'full'} alt="getgift">
        </Image>
      </Box>
      <TrendingBrands/>
    </Box>
  );
};

export default Home;
