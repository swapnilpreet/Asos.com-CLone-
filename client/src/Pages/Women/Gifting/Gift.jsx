import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Collapse,
  Heading,
  SimpleGrid,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList  from "../../ProductList";
import { GetAllWomensProducts } from "../../../ApiCall/products";
import { SetWomenProduct } from "../../../Redux/WomesProductSlice";
import ProductSubCategory from "../../../components/PagesComponents/ProductSubCategory";
import SortSection from "../../../components/PagesComponents/SortSection";
import TagsData from './subcategory.json'
import { SetLoader } from "../../../Redux/LoaderSlice";


export const Gift = () => {
  const toast = useToast();
  const [filters, setfilters] = useState({
    gender:"Female",
    // category:'Gift',
    brand:'',
    sort:'',
    color:''
  });
  const [show="", setshow] = useState(false)
  const dispatch=useDispatch();
  const {product}  = useSelector((state) => state.womenProduct);

    const fetchPorducts=async()=>{
        try {
             dispatch(SetLoader(true))
            const response = await GetAllWomensProducts(filters);
            if(response){
            dispatch(SetLoader(false))
            dispatch(SetWomenProduct(response.data))
            }else{
            throw new Error("Product not fiilters");
            }
        } catch (error) {
            dispatch(SetLoader(false))
            toast({
              title: "Error while fetching",
              description: error.message,
              status: "error",
              duration: 4000,
              isClosable: true,
            });
        }
    }

  useEffect(() => {
        fetchPorducts()
  }, [filters])
 

  useEffect(() => {
  }, [dispatch]);

  const handleToggle = () => setshow(!show);
  return (
    <Box mb={10}> 
      <Box w="85%" m="auto" mt={3} mb={3} fontSize={'xs'}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#@">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#@">Women</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#@">Accessories</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />

      <Box w="85%" m="auto" mt={5}>
        <Center>
          <Heading size={"md"}>Women's Accessories</Heading>
        </Center>
        <VStack w="80%" m={"auto"} mt={4}>
          <Collapse startingHeight={20} in={show}>    
        When your clothes are a vibe but there’s potench for more, enter our edit of women’s accessories for that final touch. From cat-eye sunglasses to crisp-white caps and essential jewellery, these little things can really bring your look to another level. Find your new cross-body bag under LOVE Moschino or aim higher (read: your updo) with women’s hair accessories from ASOS DESIGN. We’re talking swirly scrunchies, bow headbands and more super-cute, 90s-inspired bits. And to wrap up things up, check out Pieces for women’s hat and scarf sets that’ll make cold-weather dressing a breeze
          </Collapse>
          <Button
            bgColor={"transparent"}
            size="md"
            onClick={handleToggle}
            mt="1rem"
          >
            View {show ? "Less" : "More"}
          </Button>
        </VStack>
      </Box>

      <hr />
       <ProductSubCategory data={TagsData} setfilters={setfilters} filters={filters}/>

      <Box  mb={2} bgColor="#EEEEEE" >
        <SortSection setfilters={setfilters} filters={filters}/>
      </Box>

      <SimpleGrid columns={[2,2,3,4]} w="85%" m={"auto"} spacing={3} p={0}>
        <ProductList product={product} />
      </SimpleGrid>
    </Box>
  )
};
