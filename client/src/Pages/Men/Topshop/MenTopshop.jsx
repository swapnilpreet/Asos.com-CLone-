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
import SortSection from "../../../components/PagesComponents/SortSection";
import { SetLoader } from "../../../Redux/LoaderSlice";
import Info from "../../../components/PagesComponents/Info";
import data from './contain.json'

const stylesdata=[
  {
    name:"Style",
    value:""
  },
  {
    name:"Split",
    value:"Split"
  },
  {
    name:"Regular",
    value:"Regular"
  },
  {
    name:"Cropped",
    value:"Cropped"
  },
  {
    name:"Denim",
    value:"Denim"
  },
  {
    name:"slim fit",
    value:"slim fit"
  },
  {
    name:"Ankle strap",
    value:"Ankle strap"
  }
  ,
  {
    name:"flat",
    value:"flat"
  }
] 

export const MenTopshop = () => {
  const [filters, setfilters] = useState({
    gender:"Male",
    category:'',
    topshop:true,
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
            console.log(error);
        }
    }

  useEffect(() => {
        fetchPorducts()
  }, [filters])
 

  useEffect(() => {
  }, [dispatch]);

  return (
    <Box mb={10}> 
      <Box w="85%" m="auto" mt={3} mb={3} fontSize={'xs'}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/men-home">Men</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontSize={'xs'}>
            <BreadcrumbLink href="#@">Topshop</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />

      <Info data={data}/>
      <hr />


      <Box  mb={2} bgColor="#EEEEEE" >
        <SortSection setfilters={setfilters} filters={filters} styles={stylesdata}/>
      </Box>

      <SimpleGrid columns={[2,2,3,4]} w="85%" m={"auto"} spacing={3} p={0}>
        <ProductList product={product} />
      </SimpleGrid>
    </Box>
  )
};
