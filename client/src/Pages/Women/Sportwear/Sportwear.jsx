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
import Info from "../../../components/PagesComponents/Info";
import pageInfo from './contain.json'




const stylesData=[
  {
    name:"Styles",
    value:""
  },{
    name:"split",
    value:"split"
  },{
    name:"Bodycon",
    value:"Bodycon"
  },{
    name:"Regular",
    value:"Regular"
  }
]


export const Sportwear = () => {
  const toast = useToast();

  const [filters, setfilters] = useState({
    gender:"Female",
    category:'Sportswear',
    brand:'',
    subcategory:"",
    sort:'',
    color:'',
    discount:'',
    priceRange:'',
    Size:'',
    bodyfit:"",
    style:'',
  });
 

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
 
 
  return (
    <Box mb={10}> 
      <Box w="85%" m="auto" mt={3} mb={3}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/women-home">Women</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontSize={'xs'}>
            <BreadcrumbLink href="#@">Sportwear</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />

      <Info data={pageInfo}/>
       

      <hr />
      <Box pl={['2%','5%','2%','30%']}>
       <ProductSubCategory data={TagsData} setfilters={setfilters} filters={filters}/>
      </Box>

      <Box  mb={2} bgColor="#EEEEEE" >
        <SortSection setfilters={setfilters} filters={filters} styles={stylesData}/>
      </Box>

      <SimpleGrid columns={[2,2,3,4]} w="85%" m={"auto"} spacing={3} p={0}>
        <ProductList product={product} />
      </SimpleGrid>
    </Box>
  )
};
