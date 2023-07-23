import { Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text, color, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import styles from "../nav.module.css";
import { Link } from 'react-router-dom';

const MensubCatMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="100%" h={"50px"} bgColor={"#525050"}>
         <Box w={['100%','100%','100%','60%']} margin={"auto"} h={'50px'}>
            <Flex gap={1} alignItems={'center'} textAlign={'center'}>
               <Menu isOpen={isOpen} w={'full'}>
                <MenuButton  cursor={'pointer'}
                w={20}
                h={'50px'}
                transform={"skew(-10deg)"}
                alignItems={"center"}
                justifyContent={"center"}
                bgColor={"#d01345"}
                color={"white"}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                _hover={{ bgColor: "white", color: "black" }}>
                   <Text fontSize={'xs'}>Sale</Text>
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}  w={"1050px"} mt={-2} borderRadius={'none'}>
                    <Flex justifyContent={'space-between'}>
                        <Box w={'35%'}>
                            <Text fontSize={'sm'} textAlign={'start'} p={2} decoration={'underline'} fontWeight={'semibold'}>SHOP BY PRODUCT</Text>
                            <Flex gap={8} pl={2}>
                                <Box fontSize={'xs'} textAlign={'start'} cursor={'pointer'}>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Selling fast</Text>
                                     <Text _hover={{color:'blue'}}  mt={1}>SALE Last chance to buy</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE View all</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Shoes & Trainers</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Shorts</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Shirts</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE T-Shirts & Vests</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Swimwear</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Trainers</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Accessories</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Activewear</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Bags</Text>
                                </Box>

                                <Box fontSize={'xs'} textAlign={'start'} cursor={'pointer'}>
                                     <Text  _hover={{color:'blue'}} mt={1}>SALE Hoodies & Sweatshirts</Text>
                                     <Text  _hover={{color:'blue'}} mt={1}>SALE Jackets & Coats</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Jeans</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Jewellery & Watches</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Jumpers & Cardigans</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Loungewear</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Polo shirts</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Suits & Tailoring</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Sunglasses</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Tracksuits</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Trousers & Chinos</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Underwear & Socks</Text>
                                </Box>
                            </Flex>

                        </Box>


                        <Box w={"35%"}>
                        <Text fontSize={'sm'} textAlign={'start'} p={2} decoration={'underline'} fontWeight={'semibold'}>SHOP BY EDIT</Text>
                        <SimpleGrid columns={2} gap={5}>
                            <Box >
                                <Box w={'70%'} height='100px' borderRadius={50} _hover={{color:'blue',border:'1px solid blue'}}>
                                    <Image h={'full'} w={'full'} p={1} src='https://images.asos-media.com/products/asos-design-relaxed-deep-revere-shirt-in-black-paisley-print/202868510-4?$n_640w$&wid=513&fit=constrain' borderRadius={50}></Image>
                                </Box>
                                <Text marginLeft={-5} _hover={{color:'blue'}} fontSize={'xs'}>T-shirts under 10</Text>
                            </Box>

                            <Box>
                                <Box w={'70%'} height='100px' borderRadius={50} _hover={{color:'blue',border:'1px solid blue'}}>
                                    <Image h={'full'} w={'full'} p={1} src='https://images.asos-media.com/products/asos-design-relaxed-deep-revere-shirt-in-black-paisley-print/202868510-4?$n_640w$&wid=513&fit=constrain' borderRadius={50}></Image>
                                </Box>
                                <Text marginLeft={-5} _hover={{color:'blue'}} fontSize={'xs'}>T-shirts under 10</Text>
                            </Box>

                            <Box >
                                <Box w={'70%'} height='100px' borderRadius={50} _hover={{color:'blue',border:'1px solid blue'}}>
                                    <Image h={'full'} w={'full'} p={1} src='https://images.asos-media.com/products/asos-design-relaxed-deep-revere-shirt-in-black-paisley-print/202868510-4?$n_640w$&wid=513&fit=constrain' borderRadius={50}></Image>
                                </Box>
                                <Text  marginLeft={-5} _hover={{color:'blue'}} fontSize={'xs'}>T-shirts under 10</Text>
                            </Box>

                            <Box >
                                <Box w={'70%'} height='100px' borderRadius={50} _hover={{color:'blue',border:'1px solid blue'}}>
                                    <Image h={'full'} w={'full'} p={1} src='https://images.asos-media.com/products/asos-design-relaxed-deep-revere-shirt-in-black-paisley-print/202868510-4?$n_640w$&wid=513&fit=constrain' borderRadius={50}></Image>
                                </Box>
                                <Text  marginLeft={-5} _hover={{color:'blue'}} fontSize={'xs'}>T-shirts under 10</Text>
                            </Box>
                        </SimpleGrid>
                        </Box>

                        <Box  cursor={'pointer'}>
                        <Text fontSize={'sm'} textAlign={'start'} p={2} decoration={'underline'} fontWeight={'semibold'}>SHOP BY BRANDS</Text>
                                <Flex  alignItems={'center'}>
                                    <Box position="absolute">
                                        <Text  top={10} fontWeight={'semibold'}>ASOS BRANDS</Text>
                                    </Box>
                                    <Box h={'100px'} w={'full'}><Image h="full" w={'full'} src='https://images.asos-media.com/navigation/mw_sale_asosbrands_4WL_112888353?&$n_320w$'></Image></Box>
                                </Flex>

                                <Flex mt={1}  alignItems={'center'}>
                                <Box position="absolute">
                                    <Text  top={10} fontWeight={'semibold'}>TOPMAN</Text>
                                    </Box>
                                    <Box h={'100px'} w={'full'}><Image h="full" w={'full'} src='https://images.asos-media.com/navigation/mw_sale_topman_4WL_114766413?&$n_320w$'></Image></Box>
                                </Flex>

                                <Flex mt={1} alignItems={'center'}>
                                <Box  position="absolute">
                                    <Text   fontWeight={'semibold'}>PUMA</Text>
                                    </Box>
                                    <Box h={'100px'} w={'full'}><Image h="full" w={'full'} src='https://images.asos-media.com/navigation/mw_sale_puma_4WL_127095911?&$n_320w$'></Image></Box>
                                </Flex>
                        </Box>
                    </Flex>

                    {/* <Box className={styles.megaBox}>
              <Box className={styles.content}>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY PRODUCTS
                  </header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#@">SALE View all</a>
                    </li>
                    <li>
                      <a href="#@">SALE New Added </a>
                    </li>
                    <li>
                      <Link>SALE Seling fast</Link>
                    </li>
                    <li>
                      <a href="#@">SALE Dresses</a>
                    </li>
                    <li>
                      <Link to={"/Asos_clone"}>SALE Top</Link>
                    </li>
                    <li>
                      <Link>SALE Shoes</Link>
                    </li>
                    <li>
                      <a href="#@">SALE Accessories</a>
                    </li>
                    <li>
                      <a href="#@">SALE Activewear</a>
                    </li>
                    <li>
                      <a href="#@">SALE Face + Body</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#@" style={{ marginTop: "50px" }}>SALE Jeans</a>
                    </li>
                    <li>
                      <a href="#@">SALE Jwellery </a>
                    </li>
                    <li>
                      <Link>SALE Watches</Link>
                    </li>
                    <li>
                      <a href="#@">SALE Shorts</a>
                    </li>
                    <li>
                      <Link to={"/Asos_clone"}>SALE Tights</Link>
                    </li>
                    <li>
                      <Link>SALE T-shirts & Vests</Link>
                    </li>
                    <li>
                      <a href="#@">SALE Trainers</a>
                    </li>
                    <li>
                      <a href="#@">SALE Trousers</a>
                    </li>
                    <li>
                      <a href="#@">SALE Sunglasses</a>
                    </li>
                  </ul>
                </div>

                <div style={{ marginLeft: "-150px" }} className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY PRODUCTS
                  </header>
                  <ul
                    style={{ borderLeft: "1px solid black", padding: "10px" }}
                    className={styles.megaLinks}
                  >
                    <li>
                      <b>
                        <a href="#@">Biggest deals</a>
                      </b>
                    </li>
                    <li>
                      <b>
                        {" "}
                        <a href="#@">Sale under £15 </a>
                      </b>
                    </li>
                    <li>
                      <Link>
                        <b> Top saved</b>
                      </Link>
                    </li>
                    <li>
                      <a href="#@">Dresses under £15</a>
                    </li>
                    <li>
                      <Link to={"/Asos_clone"}>Jeans under £20</Link>
                    </li>
                    <li>
                      <Link>Sale: Autumn essentials</Link>
                    </li>
                    <li>
                      <a href="#@">Sale: Sneakerbrands</a>
                    </li>
                    <li>
                      <a href="#@">Occasionwear</a>
                    </li>
                    <li>
                      <a href="#@">Last chance to buy</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP SALE BY BODY FIT{" "}
                  </header>
                  <div className={styles.midNavImg}>
                    <div>
                      
                      <img
                        src="https://images.asos-media.com/navigation/mw_sale_plussize_3m_1652684?&$n_240w$"
                        alt=""
                      />
                    </div>

                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/mw_sale_tall_3m_115913938?&$n_240w$"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Box>
            </Box> */}
                </MenuList>
               </Menu>

               <Menu isOpen={isOpen} w={'full'}>
                <MenuButton  cursor={'pointer'}
                w={20}
                h={'50px'}
                alignItems={"center"}
                justifyContent={"center"}
                color={"white"}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                _hover={{ bgColor: "white", color: "black" }}>
                <Text fontSize={'xs'}>New In</Text>
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}  w={"1050px"} mt={-2} borderRadius={'none'}>
                    <Flex justifyContent={'space-between'}>
                        <Box w={'35%'}>
                            <Text fontSize={'sm'} textAlign={'start'} p={2} decoration={'underline'} fontWeight={'semibold'}>SHOP BY PRODUCT</Text>
                            <Flex gap={8} pl={2}>
                                <Box fontSize={'xs'} textAlign={'start'} cursor={'pointer'}>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Selling fast</Text>
                                     <Text _hover={{color:'blue'}}  mt={1}>SALE Last chance to buy</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE View all</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Shoes & Trainers</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Shorts</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Shirts</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE T-Shirts & Vests</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Swimwear</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Trainers</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Accessories</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Activewear</Text>
                                     <Text _hover={{color:'blue'}} mt={1} >SALE Bags</Text>
                                </Box>

                                <Box fontSize={'xs'} textAlign={'start'} cursor={'pointer'}>
                                     <Text  _hover={{color:'blue'}} mt={1}>SALE Hoodies & Sweatshirts</Text>
                                     <Text  _hover={{color:'blue'}} mt={1}>SALE Jackets & Coats</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Jeans</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Jewellery & Watches</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Jumpers & Cardigans</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Loungewear</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Polo shirts</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Suits & Tailoring</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Sunglasses</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Tracksuits</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Trousers & Chinos</Text>
                                     <Text _hover={{color:'blue'}} mt={1}>SALE Underwear & Socks</Text>
                                </Box>
                            </Flex>

                        </Box>
                        <Box w={"35%"}>
                        <Text fontSize={'sm'} textAlign={'start'} p={2} decoration={'underline'} fontWeight={'semibold'}>SHOP BY EDIT</Text>
                        <SimpleGrid columns={2} gap={5}>
                            <Box >
                                <Box w={'70%'} height='100px' borderRadius={50} _hover={{color:'blue',border:'1px solid blue'}}>
                                    <Image h={'full'} w={'full'} p={1} src='https://images.asos-media.com/products/asos-design-relaxed-deep-revere-shirt-in-black-paisley-print/202868510-4?$n_640w$&wid=513&fit=constrain' borderRadius={50}></Image>
                                </Box>
                                <Text marginLeft={-5} _hover={{color:'blue'}} fontSize={'xs'}>T-shirts under 10</Text>
                            </Box>

                            <Box>
                                <Box w={'70%'} height='100px' borderRadius={50} _hover={{color:'blue',border:'1px solid blue'}}>
                                    <Image h={'full'} w={'full'} p={1} src='https://images.asos-media.com/products/asos-design-relaxed-deep-revere-shirt-in-black-paisley-print/202868510-4?$n_640w$&wid=513&fit=constrain' borderRadius={50}></Image>
                                </Box>
                                <Text marginLeft={-5} _hover={{color:'blue'}} fontSize={'xs'}>T-shirts under 10</Text>
                            </Box>

                            <Box >
                                <Box w={'70%'} height='100px' borderRadius={50} _hover={{color:'blue',border:'1px solid blue'}}>
                                    <Image h={'full'} w={'full'} p={1} src='https://images.asos-media.com/products/asos-design-relaxed-deep-revere-shirt-in-black-paisley-print/202868510-4?$n_640w$&wid=513&fit=constrain' borderRadius={50}></Image>
                                </Box>
                                <Text  marginLeft={-5} _hover={{color:'blue'}} fontSize={'xs'}>T-shirts under 10</Text>
                            </Box>

                            <Box >
                                <Box w={'70%'} height='100px' borderRadius={50} _hover={{color:'blue',border:'1px solid blue'}}>
                                    <Image h={'full'} w={'full'} p={1} src='https://images.asos-media.com/products/asos-design-relaxed-deep-revere-shirt-in-black-paisley-print/202868510-4?$n_640w$&wid=513&fit=constrain' borderRadius={50}></Image>
                                </Box>
                                <Text  marginLeft={-5} _hover={{color:'blue'}} fontSize={'xs'}>T-shirts under 10</Text>
                            </Box>
                        </SimpleGrid>
                        </Box>

                        <Box  cursor={'pointer'}>
                        <Text fontSize={'sm'} textAlign={'start'} p={2} decoration={'underline'} fontWeight={'semibold'}>SHOP BY BRANDS</Text>
                                <Flex  alignItems={'center'}>
                                    <Box position="absolute">
                                        <Text  top={10} fontWeight={'semibold'}>ASOS BRANDS</Text>
                                    </Box>
                                    <Box h={'100px'} w={'full'}><Image h="full" w={'full'} src='https://images.asos-media.com/navigation/mw_sale_asosbrands_4WL_112888353?&$n_320w$'></Image></Box>
                                </Flex>

                                <Flex mt={1}  alignItems={'center'}>
                                <Box position="absolute">
                                    <Text  top={10} fontWeight={'semibold'}>TOPMAN</Text>
                                    </Box>
                                    <Box h={'100px'} w={'full'}><Image h="full" w={'full'} src='https://images.asos-media.com/navigation/mw_sale_topman_4WL_114766413?&$n_320w$'></Image></Box>
                                </Flex>

                                <Flex mt={1} alignItems={'center'}>
                                <Box  position="absolute">
                                    <Text   fontWeight={'semibold'}>PUMA</Text>
                                    </Box>
                                    <Box h={'100px'} w={'full'}><Image h="full" w={'full'} src='https://images.asos-media.com/navigation/mw_sale_puma_4WL_127095911?&$n_320w$'></Image></Box>
                                </Flex>
                        </Box>
                    </Flex>

                    {/* <Box className={styles.megaBox}>
              <Box className={styles.content}>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY PRODUCTS
                  </header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#@">SALE View all</a>
                    </li>
                    <li>
                      <a href="#@">SALE New Added </a>
                    </li>
                    <li>
                      <Link>SALE Seling fast</Link>
                    </li>
                    <li>
                      <a href="#@">SALE Dresses</a>
                    </li>
                    <li>
                      <Link to={"/Asos_clone"}>SALE Top</Link>
                    </li>
                    <li>
                      <Link>SALE Shoes</Link>
                    </li>
                    <li>
                      <a href="#@">SALE Accessories</a>
                    </li>
                    <li>
                      <a href="#@">SALE Activewear</a>
                    </li>
                    <li>
                      <a href="#@">SALE Face + Body</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#@" style={{ marginTop: "50px" }}>SALE Jeans</a>
                    </li>
                    <li>
                      <a href="#@">SALE Jwellery </a>
                    </li>
                    <li>
                      <Link>SALE Watches</Link>
                    </li>
                    <li>
                      <a href="#@">SALE Shorts</a>
                    </li>
                    <li>
                      <Link to={"/Asos_clone"}>SALE Tights</Link>
                    </li>
                    <li>
                      <Link>SALE T-shirts & Vests</Link>
                    </li>
                    <li>
                      <a href="#@">SALE Trainers</a>
                    </li>
                    <li>
                      <a href="#@">SALE Trousers</a>
                    </li>
                    <li>
                      <a href="#@">SALE Sunglasses</a>
                    </li>
                  </ul>
                </div>

                <div style={{ marginLeft: "-150px" }} className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY PRODUCTS
                  </header>
                  <ul
                    style={{ borderLeft: "1px solid black", padding: "10px" }}
                    className={styles.megaLinks}
                  >
                    <li>
                      <b>
                        <a href="#@">Biggest deals</a>
                      </b>
                    </li>
                    <li>
                      <b>
                        {" "}
                        <a href="#@">Sale under £15 </a>
                      </b>
                    </li>
                    <li>
                      <Link>
                        <b> Top saved</b>
                      </Link>
                    </li>
                    <li>
                      <a href="#@">Dresses under £15</a>
                    </li>
                    <li>
                      <Link to={"/Asos_clone"}>Jeans under £20</Link>
                    </li>
                    <li>
                      <Link>Sale: Autumn essentials</Link>
                    </li>
                    <li>
                      <a href="#@">Sale: Sneakerbrands</a>
                    </li>
                    <li>
                      <a href="#@">Occasionwear</a>
                    </li>
                    <li>
                      <a href="#@">Last chance to buy</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP SALE BY BODY FIT{" "}
                  </header>
                  <div className={styles.midNavImg}>
                    <div>
                      
                      <img
                        src="https://images.asos-media.com/navigation/mw_sale_plussize_3m_1652684?&$n_240w$"
                        alt=""
                      />
                    </div>

                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/mw_sale_tall_3m_115913938?&$n_240w$"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Box>
            </Box> */}
                </MenuList>
               </Menu>

               <Box 

               cursor={'pointer'}
                w={20}
                h={'50px'}
                pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Clothing</Text>
               </Box>

               <Box 

                cursor={'pointer'}
                w={20}
                h={'50px'}
                pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Dresses</Text>
               </Box>

               <Box 

                cursor={'pointer'}
                w={20}
                h={'50px'}
                pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Shoes</Text>
               </Box>

               <Box 

                cursor={'pointer'}
                w={20}
                h={'50px'}
                pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Accessories</Text>
               </Box>

               <Box 

                cursor={'pointer'}
                w={20}
                h={'50px'}
                pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Face + Body</Text>
               </Box>

               <Box 

                 cursor={'pointer'}
                 w={20}
                 h={'50px'}
                 pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Topshop</Text>
               </Box>
                
               <Box 

                 cursor={'pointer'}
                 w={20}
                 h={'50px'}
                 pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Sportwear</Text>
               </Box>

               <Box 

               cursor={'pointer'}
               w={20}
               h={'50px'}
               pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Summer</Text>
               </Box>

               <Box 

                cursor={'pointer'}
                w={20}
                h={'50px'}
                pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Brands</Text>
               </Box>

               <Box 

                cursor={'pointer'}
                w={20}
                h={'50px'}
                pt={4}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Marketplace</Text>
               </Box>
               
               <Box 

               cursor={'pointer'}
               w={20}
               h={'50px'}
               pt={4}
               transform={"skew(-10deg)"}
               alignItems={"center"}
               justifyContent={"center"}
               bgColor={"#d01345"}
               color={"white"}
               _hover={{ bgColor: "white", color: "black" }}
               >
                   <Text fontSize={'xs'}>Outlet</Text>
               </Box>

            </Flex>
         </Box>
    </Box>
  )
}

export default MensubCatMenu