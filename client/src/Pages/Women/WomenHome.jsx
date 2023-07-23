import { AspectRatio, Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import wedding from '../../Images/wedding.avif'
import "../../style/LandingPage.css";
import ImageSlider from './ImageSlider';
import styles from '../../components/Navbar/DestopNavbar/style.module.css'
import './loading.css'
import TrendingBrands from '../../components/PagesComponents/TrendingBrands'


const WomenHome = () => {

  return (
     <Box>
        {/* top discount offer*/}
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


          <AspectRatio height={'469px'} w={['100%','100%','100%','60%']} border={'2px soldi red'} margin={'auto'}>
            <iframe
              title='naruto'
              src='https://video.asos-media.com//Navigation/_content_BARBIE_HERO_VIDEO_1440x640_Flash9_1440xAuto_2000K.mp4?autoplay=1&cc_load_policy=1' allow="autoplay"
            />
          </AspectRatio>
        
        <Box w={["90%","90%","90%","80%"]} margin={'auto'} p={5}>
        <Grid gridTemplateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={"10px"}
        w={["90%","90%","80%","85%"]}
        margin="auto"
        >
            <Flex direction={'column'}   alignItems={'center'}>
                <Box>
                    <Image src='https://content.asos-media.com/-/media/homepages/ww/2023/june/19-prime/ww-gbl/ww_global_motel_moment_870x1110.jpg'></Image>
                </Box>
                <Text fontWeight={'bold'}>MOTEL</Text>
                <Text>The brand to know</Text>
            </Flex>

            <Flex direction={'column'} alignItems={'center'}>
                <Box>
                    <Image src='https://content.asos-media.com/-/media/homepages/ww/2023/june/19-prime/ww-gbl/ww_global_footwear__high_summer_edit_moment_870x1110.jpg'></Image>
                </Box>
                <Text fontWeight={'bold'}>HOT STEPPERS</Text>
                <Text>Summer staples</Text>
            </Flex>

            <Flex direction={'column'} alignItems={'center'}>
                <Box>
                    <Image src='https://content.asos-media.com/-/media/homepages/ww/2023/june/19-prime/ww-gbl/wwglobalwhitenaturalswimbeachmoment870x1110.jpg'></Image>
                </Box>
                <Text fontWeight={'bold'}>SWIM WINS</Text>
                <Text>Hot stuff</Text>
            </Flex>

            <Flex direction={'column'} alignItems={'center'}>
                <Box>
                    <Image src='https://content.asos-media.com/-/media/homepages/ww/2023/june/19-prime/ww-gbl/wwglobalfbbreadhaircaremoment870x1110.jpg'></Image>
                </Box>
                <Text fontWeight={'bold'}>BREAD</Text>
                <Text>Hair food</Text>
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
          <Box  w={["100%","100%","100%","80%"]}  margin={'auto'}>
              <ImageSlider/>
          </Box>
        </Flex>
       

        <Box mb={10}>
          <Image src={wedding}></Image>
        </Box>

        <Box  width={["100%","100%","100%","80%"]} margin={'auto'}>
          <Grid gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}>
              <GridItem >
                <Link to={'/women-topshop'}>
                  <Box ml={[0,0,0,20]}>
                    <Box h={["500px","500px","500px","500px"]}>
                      <Image h={"full"} src='https://content.asos-media.com/-/media/homepages/ww/2023/june/19-prime/ww-gbl/ww_global_topshop_moment_870x1110.jpg'></Image>
                    </Box>
                    <Flex direction={'column'} alignItems={'center'} w={['100%','100%','100%','75%']} mt={2} gap={2}>
                    <Text fontSize={'2xl'}>TOPSHOP</Text>
                    <Text>Endless style</Text>
                    <Box border={'2px solid black'} p={1}>
                    <Link border={"1px solid red"} to={'/women-topshop'}>
                          <Text>SHOP THE BRAND</Text>
                    </Link>
                    </Box>
                    </Flex>
                  </Box>
                </Link>
              </GridItem>
              <GridItem >
                <Link to={'/women-brands'}>
                  <Box ml={[0,0,0,20]}>
                    <Box h={["500px","500px","500px","500px"]}>
                      <Image h={"full"} src='https://content.asos-media.com/-/media/homepages/ww/2023/june/19-prime/ww-gbl/ww_global_collusion_ballerina_sleaze_moment_870x1110.jpg'></Image>
                    </Box>
                    <Flex direction={'column'} alignItems={'center'} w={['100%','100%','100%','75%']} mt={2} gap={2}>
                    <Text fontSize={'2xl'}>COLLUSION</Text>
                    <Text>Go grunge</Text>
                    <Box border={'2px solid black'} p={1}>
                    <Link border={"1px solid red"} to={'/women-brands'}>
                          <Text>SHOP THE BRAND</Text>
                    </Link>
                    </Box>
                    </Flex>
                  </Box>
                </Link>
              </GridItem>
          </Grid>
        </Box>
        

        <Box className='div' p={[1,1,1,10]} mt={10}>
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

export default WomenHome