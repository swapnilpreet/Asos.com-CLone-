import {
  Box,
  Text,
  Image,
  Button,
  Divider,
  Flex,
  Select,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Ordersummary.module.css";
import {GoQuestion} from 'react-icons/go'
import { useNavigate } from "react-router-dom";

const Ordersummary = ({ data }) => {

  const navigate = useNavigate();

  let sum = data.reduce((prev, curr) => {
    return prev + (curr.product.price * curr.quantity);
  }, 0);

  let totalsum = sum;
 

  return (

    <div className={styles.ordersumbox}>
      <div className={styles.ordersum_mainbox}>
        <Box w="100%" p={7}>
          <Box>
            <Text fontSize={'xl'} fontWeight={'bold'}>Total</Text>
          </Box>

          <Divider orientation="horizontal"></Divider>

          <Box>
            <Flex mt={5} justifyContent={'space-between'}>
                 <Box>
                  <Text>Sub-Total</Text>
                 </Box>
                 <Box>
                  <Text>&pound;{totalsum}</Text>
                 </Box>
            </Flex>

            <Flex mt={5} mb={5} justifyContent={'space-between'}>
                 <Box>
                  <Text>Delivery</Text>
                 </Box>
                 <Box>
                  <Text><GoQuestion/></Text>
                 </Box>
            </Flex>
             
            <Select
            mt={5} mb={5}
            _hover={{ color: "#0770cf" }}
            borderLeft="none"
            borderRight="none"
            borderRadius="0px"
            borderBottom={"1px solid black"}
          >
            <option value="">Standard Delivery</option>
            <option value="Standard Delivery(Free)">Standard Delivery(Free)</option>
            <option value="Express Delivery(&pound; 22.50)">Express Delivery(&pound; 22.50)</option>
            </Select>

            <Button w={"full"} color={'white'} letterSpacing={'2px'} bg={"#018849"} borderRadius={'none'} variant='solid' onClick={()=>navigate('/checkout')} >
              CHECKOUT
            </Button>

            <Text mt={5} mb={5}>We Accept</Text>

            <Box w="200px" mt={5} mb={5}>
                  <Image
                    objectFit="cover"
                    src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                    alt="Fluffybuns the destroyer"
                  />
            </Box>

            <Text>Got a discount code Add it in the next step</Text>
            
            </Box>
        </Box>
      </div>
    </div>
    
  );
};

export default Ordersummary;
