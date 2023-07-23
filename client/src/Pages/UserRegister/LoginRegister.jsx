import {
  Box,
  Flex,
  Tab,
  Image,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import asoslogologin from '../../Images/asos-logo-login.png'






export default function LoginRegister() {
  const location = useLocation();
  const navigate = useNavigate();

  
  return (
    <Box bg={"#efefef"} h={"100%"}>
      <Box pt={50}>

      <Flex
        justifyContent={"center"}
        fontWeight={"bold"}
        w={"100%"}
        mb={"30px"}
      >
        <Image src={asoslogologin} alt="logoasos" mt={5}/>
      </Flex>

      <Box  w={["90%","80%","70%","35%"]} margin={"auto"} bg={"white"}>
        <Tabs defaultIndex={location.pathname === "/login" ? 1 : 0}>
          <TabList w={"100%"} h={"75px"}>
            <Tab onClick={() => navigate("/login")} fontSize={"17px"} w={"50%"}>
              JOIN
            </Tab>
            <Tab
              onClick={() => navigate("/register")}
              fontSize={"17px"}
              w={"50%"}
            >
              SIGN IN
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Register />
            </TabPanel>
            <TabPanel>
              <Login />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>


      <Flex pt={"80px"} w={"100%"}>
        <Flex margin={"auto"}>
          <Text>Privacy Policy</Text>
          <Text ml={"10px"} mr={"10px"}>
            |
          </Text>
          <Text pb={"25px"}>Terms and Conditions</Text>
        </Flex>
      </Flex>
      
      </Box>
    </Box>
  );
}
