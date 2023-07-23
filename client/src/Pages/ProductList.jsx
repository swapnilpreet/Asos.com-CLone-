import {
  Box,
  Flex,
  Image,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AddProductToWishlist } from "../ApiCall/wishlistApi";

const ProductList = ({ product }) => {
  const toast = useToast();
  
  const handlewishlist=async (prodId)=>{
    try {
     const response = await AddProductToWishlist(prodId);
     if(response){
      toast({
        title: "Product added to wishlist",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
     }else{
     throw new Error("error occured in wishlist handlewishlist");
     }
    } catch (error) {
        console.log(error.message);
    }
  }

  return (
    <>
      {product?.length > 0 &&
        product?.map((item) => (
          <Box mt={5} key={item._id}>

            <Link to={`/product/${item._id}`}>
              <Tag
                fontSize={"10px"}
                mt={[40,5,5,5]}
                position="absolute"
                bgColor={"white"}
                borderRadius={0}
              >
                MORE COLOURS
              </Tag>

              <Tag
                fontSize={"10px"}
                mt={[44,12,12,12]}
                position="absolute"
                bgColor={"white"}
                borderRadius={0}
                color={'red'}
              >
                {item.discount}%
              </Tag>
              <Image w="100%" src={item.images[0]} 
              />

              <Box>
                <Text
                  mt={2}
                  h={"50px"}
                  overflow={"hidden"}
                >
                  {item.name}
                </Text>
              </Box>
            </Link>
            
            <Flex justifyContent={"space-between"}>
              <Box>
                <Flex alignItems={"center"} mt={1}>
                  <s>
                    {" "}
                    <Text fontSize={"12px"}>&pound;{item.price}</Text>
                  </s>
                  <Text ml={2} fontWeight={"bold"} color={"#d01345"}>
                    &pound;{((item.price)-(item.discount/100)*item.price).toFixed(0)}
                  </Text>
                </Flex>
              </Box>

              <Box cursor={"pointer"}>
             <AiOutlineHeart size={30} onClick={()=>handlewishlist({prodId:item._id})}/>
              </Box>

            </Flex>

          </Box>
        ))}
    </>
  );
};

export default ProductList;
