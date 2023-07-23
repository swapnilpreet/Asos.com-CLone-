import { Box, Flex, Image, SimpleGrid, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GetAllWomensProducts } from '../../ApiCall/products';
import {BsHeart} from 'react-icons/bs';
import { SetLoader } from '../../Redux/LoaderSlice';
import { AddProductToWishlist } from '../../ApiCall/wishlistApi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SimilarProducts = ({gender,category,subcategory}) => {
    const [products, setproducts] = useState([]);
    const toast = useToast();
    // const dispatch=useDispatch();

    const fetchPorducts=async()=>{
        try {
            const response = await GetAllWomensProducts({ subcategory:subcategory,
              category:category,
              gender:gender});
            if(response){
            setproducts(response.data)
            }else{
              throw new Error("Product not fiilters");
            }
        } catch (error) {
          toast({
            title: "Error while fetching",
            description: error.message,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
    }

    const handleRemovewishlist = async (prodId) => {
      try {
        const response = await AddProductToWishlist(prodId);
        if (response) {
          toast({
            title: "Product added to Wishlist",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        } else {
          throw new Error("Product added to Wishlist");
        }
      } catch (error) {
        toast({
          title: "Product added to Wishlist",
          description:error.message,
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    };

    useEffect(() => {
        fetchPorducts({ subcategory:subcategory,
          category:category,
          gender:gender})
    },[gender,category,subcategory]);


  return (
    <Box w={['80%','80%','80%','60%']} margin={'auto'} mt={20}> 
        <SimpleGrid columns={[2, null, 3,4]} spacing={1}>
          {products.map((item,index)=>(
            <Box>
            <Link to={`/product/${item._id}`} key={index}>
            <Box w={['100%','100%','100%','80%']} h={'250px'}>
                <Image src={item?.images[0]} w={'full'} h={'full'}>
                </Image>
            </Box>
            </Link>
            <Flex p={2} w={['100%','100%','100%','80%']} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Text> &pound;{item.price}</Text>
                    <Text>{item.brand}</Text>
                </Box>
                <Box>
                  <BsHeart cursor={'pointer'} size={30} onClick={()=>handleRemovewishlist({ prodId: item._id})}/>
                </Box>
            </Flex>
            </Box>
          ))}
        </SimpleGrid>
    </Box>
  )
}

export default SimilarProducts