import {
  Box,
  Text,
  Divider,
  Flex,
  Button,
} from "@chakra-ui/react";

import React  from "react";
import Cartsingleitem from "./Cartsingleitem";
import { ClearcartApi } from "../../ApiCall/cartApi";
import { useDispatch } from "react-redux";
import { ClearCart } from "../../Redux/Cartslice";
import { useNavigate } from "react-router-dom";


const Cartitemsdetails = ({ data }) => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleClearCart=async()=>{
     try {
        const response = await ClearcartApi();
        if(response){
          dispatch(ClearCart(response.data))
          Navigate('/')
        }
     } catch (error) {
        console.log(error);
     }
  }

  return (
    <Box w={'100%'} bg={'white'}>
      
         <Box>
          <Flex justifyContent={'space-between'} p={3} fontWeight={'bold'}>
            <Box>
              <Text>My Bug</Text>
            </Box>
            <Box>
              <Flex gap={2} justifyContent={'center'} alignItems={'center'}>
              <Text fontSize={"xs"}>Items are reversed for 60 minutes</Text>
              <Button borderRadius={'none'} bg={'red'} color={'white'} letterSpacing={'wide'} onClick={handleClearCart}>Clear cart</Button>
              </Flex>
            </Box>
          </Flex>
          <Divider orientation="horizontal"></Divider>
         </Box>

         <Box h={'100vh'} overflow={'scroll'}>
          {data?.map((el) => <Cartsingleitem el={el}/>)}
         </Box>
    </Box>
  );
};

export default Cartitemsdetails;
