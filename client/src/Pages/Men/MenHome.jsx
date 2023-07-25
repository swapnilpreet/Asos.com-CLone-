import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import offer1 from '../../Images/MenHome/offer1.avif'
import wedding from '../../Images/wedding.avif'
import pic1 from '../../Images/MenHome/pic1.avif'
import pic2 from '../../Images/MenHome/pic2.avif'
import pic3 from '../../Images/MenHome/pic3.avif'
import pic4 from '../../Images/MenHome/pic4.avif'
import "../../style/LandingPage.css";
import treat from '../../Images/treat.png'
import collussion from '../../Images/collussion.png'
import ImageSlider from '../../components/ImageSlider';
import monkl from "../../Brands/monkl.png";
import never from "../../Brands/never.png";
import collusionlogo from "../../Brands/collusionlogo.png";
import reclaimed from "../../Brands/reclaimed.png";
import topshop from "../../Brands/topshop.png";
import weekday from "../../Brands/weekday.png";
import styles from '../../components/Navbar/DestopNavbar/style.module.css'

// wedding
import data from './menimagedata.json'
import './loading.css'
import TrendingBrands from '../../components/PagesComponents/TrendingBrands'

const MenHome = () => {
  return (
    <Box>
        {/* top discount offer  border={'1px solid red'}*/}
         <Box className={styles.gradient} p={5}>
            <Flex w={["100%","100%","100%","70%"]} direction={'column'} margin={'auto'} alignItems={'center'} gap={1}>
            <Heading fontWeight={'bold'} fontSize={'5xl'}>20 % OFF EVERYTHING !</Heading>
            <Text fontSize={'lg'}>The weekend just got sweeter</Text>
            <Flex gap={1} alignItems={'center'}>
             <Box>
                <Text>Use Code : </Text>
             </Box>
             <Box border={"2px solid black"} p={1}>
                <Text  fontWeight={'bold'}>SHOPNOW</Text>
             </Box>
            </Flex>
            <Text fontSize={'xs'}>See website banner Ts&Cs. Selected marked products excluded from promo.</Text>
            </Flex>
         </Box>

         <Grid className="maindiv" >
            <Link  to={"/men-newIn"} >
            <Image style={{ width: "100%"}} src={offer1} alt="offer"/>
            </Link>
        </Grid>
        
        <Box  w={"80%"} margin={'auto'} p={5}>
        <Grid gridTemplateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={"10px"}
        w={["100%","100%","100%","85%"]}
        // width={"75%"}
        margin="auto"
        >
            <Flex direction={'column'} alignItems={'center'}  >
              <Box>
              <Link to={'/men-newIn'}>
                <Box >
                    <Image  src={pic1}></Image>
                </Box>
              </Link>
              </Box>
              <Box>
              <Text fontWeight={'bold'}>NEW IN</Text>
                <Text>Coming in hot</Text>
              </Box>
            </Flex>

            <Flex direction={'column'} alignItems={'center'}>
            <Box>
              <Link to={'/men-cloth'}>
                <Box >
                    <Image  src={pic2}></Image>
                </Box>
              </Link>
              </Box>
              <Box>
              <Text fontWeight={'bold'}>ASOS BASICS</Text>
                <Text>Anything but..</Text>
              </Box>
            </Flex>

            <Flex direction={'column'}  alignItems={'center'}>
            <Box>
              <Link to={'/men-accessories'}>
                <Box >
                    <Image  src={pic3}></Image>
                </Box>
              </Link>
              </Box>
              <Box>
              <Text fontWeight={'bold'}>THE NORTH FACE</Text>
                <Text>Bold moves</Text>
              </Box>
            </Flex>

            <Flex direction={'column'} alignItems={'center'}>
            <Box>
              <Link to={'/men-shoe'}>
                <Box >
                    <Image  src={pic4}></Image>
                </Box>
              </Link>
              </Box>
              <Box>
              <Text fontWeight={'bold'}>NEW BALANCE</Text>
                <Text>Kick game: brazy</Text>
              </Box>
            </Flex>
        </Grid>
        </Box>

    {/* slide image */}

     <Flex gap={35} direction={'column'}  w={"100%"} className='div'  mb={10}>
      <Flex mt={20} direction={'column'} alignItems={'center'} gap={2}>
             <Button>SALE</Button>
             <Text fontSize={'5xl'} fontFamily={'serif'} fontWeight={'bold'}>FINAL REDUCTIONS !</Text>
             <Text fontSize={'2xl'}>ALREADY UP TO 80% OFF</Text>
             <Text fontSize={'xl'}>It's your last chance to bag a deal !</Text>
             <Text fontSize={'xs'}>Limited time onli. Selected styles marked down as shows</Text>
      </Flex>
      <Box w={["100%","100%","100%","80%"]} margin={'auto'}>
          <ImageSlider data={data}/>
      </Box>
     </Flex>
       

        <Link to={'/women-dresses'}>
          <Box mb={10}  >
            <Image src={wedding}></Image>
          </Box>
        </Link>

      {/* <Box  width={["90%","100%","100%","80%"]} margin={'auto'}>
        <Grid gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}>
            <GridItem >
              <Link to={'/men-cloth'}>
                <Box ml={[1,1,1,20]} cursor={'pointer'}>
                  <Box h={["500px","500px","500px","500px"]}>
                    <Image h={"full"} src='https://content.asos-media.com/-/media/homepages/mw/2023/july/10-gbl-excl-uk/mw-moments/mw_global_denim_washes_moment_870x1110.jpg'></Image>
                  </Box>
                  <Flex direction={'column'} alignItems={'center'} w={['100%','100%','100%','75%']} mt={2} gap={2}>
                  <Text fontSize={'2xl'}>DO IT IN DENIM</Text>
                  <Text>Endless style</Text>
                  <Box border={'2px solid black'} p={1}>
                   <Link border={"1px solid red"} to={'/men-cloth'}>
                        <Text>SHOP NOW</Text>
                   </Link>
                  </Box>
                  </Flex>
                </Box>
                </Link>
            </GridItem>

            <GridItem >
              <Link to={'/men-cloth'}>
                <Box ml={[1,1,1,20]}>
                  <Box h={["500px","500px","500px","500px"]}>
                    <Image h={"full"} src='https://content.asos-media.com/-/media/homepages/ww/2023/july/17---gbl/mw_global_barbie_moment_870x1110_2.jpg'></Image>
                  </Box>
                  <Flex direction={'column'} alignItems={'center'} w={['100%','100%','100%','75%']} mt={2} gap={2}>
                  <Text fontSize={'2xl'}>BARBIE | ASOS</Text>
                  <Text>Go grunge</Text>
                  <Box border={'2px solid black'} p={1}>
                   <Link border={"1px solid red"} to={'/men-cloth'}>
                        <Text>SHOP NOW</Text>
                   </Link>
                  </Box>
                  </Flex>
                </Box>
              </Link>
            </GridItem>
        </Grid>
      </Box> */}
      
      <Box width={["100%","100%","100%","60%"]} margin={'auto'}>
           <Flex justifyContent={'space-between'} gap={50} direction={{ base: 'column-reverse', md: 'row' }}>
             <Box w={['100%','50%','50%','50%']}>
                 <Link to={'/men-cloth'}>
                 <Box>
                  <Image h={"full"} w={'full'} src='https://content.asos-media.com/-/media/homepages/mw/2023/july/10-gbl-excl-uk/mw-moments/mw_global_denim_washes_moment_870x1110.jpg'>
                  </Image>
                 </Box>
                 </Link>

                 <Flex direction={'column'} alignItems={'center'} w={['100%','100%','100%','100%']} mt={2} gap={2}>
                  <Text fontSize={'2xl'}>DO IT IN DENIM</Text>
                  <Text>Endless style</Text>
                  <Box border={'2px solid black'} p={1}>
                   <Link border={"1px solid red"} to={'/men-cloth'}>
                        <Text>SHOP NOW</Text>
                   </Link>
                  </Box>
                  </Flex>
             </Box>

             <Box w={['100%','50%','50%','50%']}>
                 <Link to={'/men-cloth'}>
                 <Box>
                  <Image h={"full"} w={'full'} src='https://content.asos-media.com/-/media/homepages/ww/2023/july/17---gbl/mw_global_barbie_moment_870x1110_2.jpg'>
                  </Image>
                 </Box>
                 </Link>
                 <Flex direction={'column'} alignItems={'center'} w={['100%','100%','100%','100%']} mt={2} gap={2}>
                  <Text fontSize={'2xl'}>BARBIE | ASOS</Text>
                  <Text>Go grunge</Text>
                  <Box border={'2px solid black'} p={1}>
                   <Link border={"1px solid red"} to={'/men-cloth'}>
                        <Text>SHOP NOW</Text>
                   </Link>
                  </Box>
                  </Flex>
             </Box>

           </Flex>
      </Box>

      <Box className='div' p={10} mt={10}>
            <Flex direction={'column'} w={['100%','100%','100%','50%']} margin={"auto"} alignItems={'center'} gap={2}>
                <Button colorScheme='white' variant='outline'>THE ASOS APP</Button>
                <Text color={'white'} fontWeight={'bold'} fontSize={'3xl'}>Hey,You app?</Text>
                <Text color={'white'} fontWeight={'bold'} fontSize={'3xl'}>Shop personalised edits created just for you</Text>
                <Button borderRadius={20}>DOWNLOAD NOW</Button>
            </Flex>
      </Box>

      <TrendingBrands/>

    </Box>
  )
}

export default MenHome;