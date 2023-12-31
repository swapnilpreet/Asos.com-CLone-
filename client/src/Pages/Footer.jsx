import React from "react";
import american from "../Brands/american.png";
import mastercard from "../Brands/mastercard.png";
import paypal from "../Brands/paypal.png";
import visaelectron from "../Brands/visaelectron.png";
import india from "../Brands/india.png";
import "../style/Footer.css";
import {
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  SimpleGrid,
  Box,
  Flex,
} from "@chakra-ui/react";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
const Footer = () => {
  return (
    <Box>
      <hr style={{ marginBottom: "20px" }}/>
      <SimpleGrid  w={["80%","70%","60%","50%"]} m="auto" columns={[8,8,8,8]} spacing={2}>
        <Flex
          alignItems={"center"}
          justifyContent="center"
          w="40px"
          h="40px"
          bgColor={"purple"}
          borderRadius={"50%"}
        >
          <Link href="https://www.facebook.com/ASOS/">
            <AiFillFacebook size={"25px"} color="white" />
          </Link>
        </Flex>

        <Flex
          alignItems={"center"}
          justifyContent="center"
          w="40px"
          h="40px"
          bgColor={"purple"}
          borderRadius={"50%"}
        >
          <Link href="https://www.instagram.com/asos/">
            <AiOutlineInstagram size={"30px"} color="white" />
          </Link>
        </Flex>

        <Flex
          alignItems={"center"}
          justifyContent="center"
          w="40px"
          h="40px"
          bgColor={"yellow"}
          borderRadius={"50%"}
        >
          <Link href="https://www.snapchat.com/add/asosfashion">
            <BsSnapchat size={"25px"} color="white" />
          </Link>
        </Flex>

        <Flex
          h={"40px"}
          pl={5}
          alignItems={"center"}
          borderLeft={"1px solid black"}
        >
          <FaCcVisa size={"40px"} />
        </Flex>

        <Flex h={"40px"} alignItems={"center"}>
          <Image w={"50px"} src={mastercard} alt="mastercard" />
        </Flex>

        <Flex h={"40px"} alignItems={"center"}>
          <Image w={"50px"} src={paypal} alt="mastercard" />
        </Flex>

        <Flex h={"40px"} alignItems={"center"}>
          <Image w={"50px"} src={american} alt="mastercard" />
        </Flex>

        <Flex h={"40px"} alignItems={"center"}>
          <Image w={"50px"} src={visaelectron} alt="mastercard" />
        </Flex>

      </SimpleGrid>
      <br />

      <Box   pb={5} pt={5} bgColor="#ddd" width={"100%"}>
        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          margin={"auto"}
          gap={"20px"}
          lineHeight={"30px"}
          width={"85%"}
          justifyContent={"center"}
        >
          <GridItem className="helpdiv">
            <Text className="head">HELP & INFORMATION</Text>
            <a href="https://www.asos.com/customer-care/" target="blank">
              {" "}
              <Text>Help </Text>
              <Text>Track Order</Text>{" "}
            </a>
            <a
              href="https://www.asos.com/payments-and-deliveries/delivery/"
              target="blank"
            >
              {" "}
              <Text>Delivery & Returns</Text>
            </a>
            <Text>Sitemap</Text>
          </GridItem>
          <GridItem className="helpdiv">
            <Text className="head">ABOUT ASOS</Text>
            <a href="https://www.asos.com/about/" target="blank">
              {" "}
              <Text>About asos</Text>
            </a>
            <a href="https://asoscareers.asos.com/" target="blank">
              {" "}
              <Text>Career at ASOS</Text>
            </a>
            <Text>Corporate responsibilty</Text>
            <Text>Investor's site</Text>
          </GridItem>
          <GridItem className="helpdiv">
            <Text className="head">MORE FROM ASOS</Text>
            <a href="https://www.asos.com/discover/our-apps/" target="blank">
              {" "}
              <Text>Mobile and asos apps</Text>
            </a>
            <a
              href="https://marketplace.asos.com/?ctaref=Global+footer"
              target="blank"
            >
              <Text>ASOS Marketplace</Text>
            </a>
            <Text>Gift vouchers</Text>
            <Text>Black Friday</Text>
            {/* <Text>ASOS x Thrift+</Text> */}
          </GridItem>
          <GridItem className="helpdiv">
            <Text className="head">SHOPPING FROM</Text>

            <SimpleGrid>
              <Text>You're in</Text>
              <Image ml={3} mr={3} w={["20px","20px","30px"]} src={india} alt="india" />
              <Text>| CHANGE </Text>
            </SimpleGrid>
            {/* <Text>
            You're in{" "}
            <span>
              <img style={{ width: "20px" }} src={india} alt="india" />
            </span>{" "}
          </Text> */}
           
          </GridItem>
        </Grid>
      </Box>

      <br />
    </Box>
  );
};

export default Footer;
