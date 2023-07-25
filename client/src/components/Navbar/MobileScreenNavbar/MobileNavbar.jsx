import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useDisclosure,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import React, { useRef, useState } from "react";
  import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react";
  import { HamburgerIcon, RepeatClockIcon, Search2Icon } from "@chakra-ui/icons";
  import { Link, useNavigate } from "react-router-dom";
  import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
  import { FiShoppingBag } from "react-icons/fi";
  import { GrContact } from "react-icons/gr";
  import { IoBagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../../Redux/UserSlice";



  export const MobileNavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const { user } = useSelector((state) => state.users);
    const { cart } = useSelector((state) => state.carts);
  
    const Navigate = useNavigate();
    const [item,setItem]=useState("")
    const toast=useToast()
    const dispatch = useDispatch();
      const HandleSearch=()=>{
        if(item===""){
          toast({
            title: 'Input is empty',
            status: 'error',
            duration: 5000,
            position:"top",
            isClosable: true,
          })
        }else{
          Navigate("/searchproduct")
        }
      }
    const handelSignout = () => {
      localStorage.removeItem("token");
      dispatch(LogoutUser());
      Navigate("/login");
    };

    
    return (
      <Box w="100%" h="60px" bgColor={"#2d2d2d"}>

        <Flex ml={"15px"} color="white" h={"100%"} alignItems={"center"} justifyContent={'space-between'} >
          
          <Box>
            <HamburgerIcon
              fontSize={40}
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
            />
          </Box>

          <Link to="/">
            <Box ml={"20px"}>
              <Text
                fontWeight={"bold"}
                w="100%"
                fontSize={"25px"}
                lineHeight="22px"
                letterSpacing={2}
              >
                Asos
              </Text>
            </Box>
          </Link>
        
          {/* <MobileSearch /> */}
          <Box>
            <Flex alignItems={"center"} >
            {/* <Popover>
                <PopoverTrigger>
                  <Button
                    mr={-5}
                    bgColor={"transparent"}
                    _hover={{ bgColor: "transparent" }}
                  >
                    <Search2Icon fontSize={20} color='white' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent color="black">
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader bgColor={"#ddd"}>
                  <Center>SEARCH</Center>  
                  </PopoverHeader>
                  <PopoverBody>
                  <InputGroup size='md'>
        <Input onChange={(e)=>setItem(e.target.value)} 
        borderRadius={"25px"} color="black"  bgColor="white" type={"text"}
         placeholder="Search for items and brand" />
      <InputRightElement width='4.5rem'>
       
          <Search2Icon color={"black"} cursor={"pointer"} mr={-5} onClick={HandleSearch}/>
      
      </InputRightElement>
    </InputGroup>
                  </PopoverBody>
                </PopoverContent>
              </Popover> */}


              <Popover>
                <PopoverTrigger>
                  <Button
                     
                    bgColor={"transparent"}
                    _hover={{ bgColor: "transparent" }}
                  >
                    <HiOutlineUser size={27} 
                    color="white"
                    />
                  </Button>
                </PopoverTrigger>
                <PopoverContent color="black">
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader bgColor={"#ddd"}>
                    <Box>
                      {" "}
                      {user ? (
                        <>
                          <Flex>
                            <Text>{user.firstname}</Text>
                            &nbsp;|&nbsp;{" "}
                            <Text cursor={"pointer"} onClick={handelSignout}>
                              SignOut
                            </Text>
                          </Flex>
                        </>
                      ) : (
                        <Box>
                          <Link to="/login"> Sign In</Link>|
                          <Link to="/register">Join</Link>
                        </Box>
                      )}
                    </Box>
                  </PopoverHeader>
                  <PopoverBody>
                    <Flex
                      _hover={{ color: "#0770cf" }}
                      mt={2}
                      ml={2}
                      alignItems={"center"}
                    >
                      <HiOutlineUser size={30} /> <Text ml={2}> My Account</Text>
                    </Flex>
                    <Flex
                      _hover={{ color: "#0770cf" }}
                      mt={5}
                      ml={2}
                      alignItems={"center"}
                    >
                      <FiShoppingBag size={25} />
                      <Text ml={2}> My Orders</Text>
                    </Flex>
                    <Flex
                      _hover={{ color: "#0770cf" }}
                      mt={5}
                      ml={2}
                      alignItems={"center"}
                    >
                      <RepeatClockIcon fontSize={"25px"} />
                      <Text ml={2}> Returns Information</Text>
                    </Flex>
                    <Flex
                      _hover={{ color: "#0770cf" }}
                      mt={5}
                      ml={2}
                      alignItems={"center"}
                    >
                      <GrContact size={25} />
                      <Text ml={2}> Contact Preference</Text>
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

               <Box mr={4}>
              <Link to="/wishlist">
                <HiOutlineHeart size={27}/>
              </Link>
               </Box>
              <Box position={"relative"} mr={3}>
            <Link to={"/cart"}>
                  {" "}
                  <IoBagOutline size={27}/>
     
                  {/* data.length */}
                  <Text position={"absolute"} right="2.5" top="1.5">{cart?.length}</Text>
                </Link>
                </Box>
            </Flex>
          </Box>
        </Flex>
  

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay />
          
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab
                    w="40%"
                    fontSize={"22px"}
                    borderRadius="0px"
                    fontWeight="bold"
                  >
                    {" "}
                    <Link to="/women-home" >Women</Link>{" "}
                  </Tab>
                  <Tab
                    w="40%"
                    fontSize={"22px"}
                    borderRadius="0px"
                    fontWeight="bold"
                  >
                    <Link to="/men-home" >Men</Link>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <VStack w="100%" m="auto" spacing={4}>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_homebuttontemplate_1746711?&$n_320w$)"
                        }
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="50px"
                        w="100%"
                        onClick={onClose}
                      >
                        <Link to="/women-home" onClick={onClose}> Home </Link>
                      </Flex>
                      <Flex
                       backgroundSize="cover"
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/gradient_1_1m_041021?&$n_320w$)"
                        }
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="80px"
                        w="100%"
                      >
                        <Link to="/women-dresses" onClick={onClose}> SALE: UP TO 80% OFF</Link>
                      </Flex>

                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_gbl_newin_newin_4wl_119920305?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/women-newIn" onClick={onClose}> NEW IN</Link>
                      </Flex>

                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_sale_autumnedit_au_1m_1251578?&$n_320w$)"
                        }
                        backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/women-cloth" onClick={onClose}> CLOTHING</Link>
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_gbl_toplevel_dresses_1m_117815345?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/women-dresses" onClick={onClose}> DRESSES</Link>
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_gbl_shoes_toplevel2_1m_114865509?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/women-shoe" onClick={onClose}>SHOES</Link>
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/ww_sportswear_top+level+gbl_1m_114633822?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/women-sportwear" onClick={onClose}>SPORTWEAR</Link>
                      </Flex>
                    </VStack>
                  </TabPanel>
                  <TabPanel>
                  <VStack w="100%" m="auto" spacing={4}>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_homebuttonnew_1826147?&$n_320w$)"
                        }
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="50px"
                        w="100%"
                      >
                        <Link to="/men-home" onClick={onClose}> Home </Link>
                      </Flex>
                      <Flex
                       backgroundSize="cover"
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/gradient_1_1m_041021?&$n_320w$)"
                        }
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="80px"
                        w="100%"
                      >
                        <Link to="/men-cloth" onClick={onClose}> SALE: UP TO 80% OFF</Link>
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_gbl_new_in_new_in_flo_118858767_4WL?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/men-newIn" onClick={onClose}> NEW IN</Link>
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_gbl_clothing_clothing_flo_116031299_4WL?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/men-cloth" onClick={onClose}> CLOTHING</Link>
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_uk_autumn_toplevel_1M_123064845?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/men-topshop" onClick={onClose}> TOPSHOP</Link>
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_toplevel_shoes_gbl_1m_117448576?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/men-shoe" onClick={onClose}>SHOES</Link>
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        backgroundImage={
                          "url(https://images.asos-media.com/navigation/mw_gbl_sportswear_sportswear_1585797_1m?&$n_320w$)"
                        }
                       backgroundSize="cover"
                        fontSize="sm"
                        fontWeight={"bold"}
                        p="5"
                        h="100px"
                        w="100%"
                      >
                        <Link to="/men-sportwear" onClick={onClose}>SPORTWEAR</Link>
                      </Flex>
                    </VStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    );
  };
  