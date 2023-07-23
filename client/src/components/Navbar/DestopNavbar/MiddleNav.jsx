import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { RepeatClockIcon } from "@chakra-ui/icons";
import { SearchInput } from "../SearchInput";
import { HiOutlineUser, HiOutlineHeart } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import styles from "../nav.module.css";
import WomensubMenu from "./WomensubMenu";
import MenSubNav from "./MenSubNav";
import { BottomBanner } from "./BottomBanner";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../../../Redux/UserSlice";
import MensubCatMenu from "./MensubCatMenu";

export const MiddleNav = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);
  const { cart } = useSelector((state) => state.carts);

  const handelSignout = () => {
    localStorage.removeItem("token");
    dispatch(SetUser(null));
    Navigate("/login");
  };

  return (
    <Tabs variant="unstyled">
      <Box width={'100%' } bgColor={"#2d2d2d"}>
      <TabList>
        <Box h="50px" w="80%" marginLeft={'15%'}>
          <Flex
            color={"white"}
            alignItems={"center"}
            w="90%"
            h="100%"
            m={"auto"}
          >
            {" "}
            <Link to="/">
              <Box mr="20px" fontWeight={"bold"}>
                <Text className={styles.Heading} lineHeight="22px">
                  Asos
                </Text>
              </Box>
            </Link>
            <Tab
              borderLeft={"1px solid grey"}
              _selected={{ color: "white", bg: "#525050" }}
              w="8%"
              h="100%"
              fontWeight={"bold"}
              onClick={() => Navigate("/women-home")}
            >
              <Box> WOMEN</Box>
            </Tab>
            <Tab
              borderRight={"1px solid grey"}
              _selected={{ color: "white", bg: "#525050" }}
              w="8%"
              h="100%"
              fontWeight={"bold"}
              onClick={() => Navigate("/men-home")}
            >
              <Box> MEN</Box>
            </Tab>
            <SearchInput />
            <Box ml={5}>
              <Flex alignItems={"center"}>
                {/* {user logo with deatils} */}

                <Popover>
                  <PopoverTrigger>
                    <Button
                      mr={-5}
                      bgColor={"transparent"}
                      _hover={{ bgColor: "transparent" }}
                    >
                      <HiOutlineUser size={30} color="white" />
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
                              &nbsp; | &nbsp;
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
                        <HiOutlineUser size={30} color="black" />{" "}
                        <Text ml={2}>My Account</Text>
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

                <Link to="/wishlist">
                  <HiOutlineHeart size={30} style={{ marginLeft: "20px" }} />
                </Link>

                <Box position={"relative"}>
                  <Link to={"/cart"}>
                    {" "}
                    <IoBagOutline size={30} style={{ marginLeft: "20px" }} />
                    <Text position={"absolute"} right="3" top="2.5" fontSize={'xs'}>
                      {cart?.length}
                    </Text>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </TabList>
      </Box>

      <TabPanels>
        <TabPanel p="0" w="100%">
          <WomensubMenu />
          <BottomBanner />
        </TabPanel>
        <TabPanel p="0" w="100%">
          <MenSubNav />
          <BottomBanner />
        </TabPanel>
      </TabPanels>

    </Tabs>
  );
};
