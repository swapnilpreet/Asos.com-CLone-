import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  Toast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList  from "../../ProductList";
import { GetAllMensProducts} from "../../../ApiCall/products";
import { SetWomenProduct } from "../../../Redux/WomesProductSlice";
import ProductSubCategory from "../../../components/PagesComponents/ProductSubCategory";
import SortSection from "../../../components/PagesComponents/SortSection";
import { SetLoader } from "../../../Redux/LoaderSlice";
import Info from "../../../components/PagesComponents/Info";
import data from './contain.json'
import TagsData from './subcategory.json'


const stylesdata=[
  {
    name:"Style",
    value:""
  },
  {
    name:"Regular",
    value:"Regular"
  }
]

export const MenSportwear = () => {

  const [filters, setfilters] = useState({
    gender:"Male",
    category:'Sportwear',
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
        dispatch(SetLoader(true));
        const response = await GetAllMensProducts(filters);
        if(response){
           dispatch(SetLoader(false));
           dispatch(SetWomenProduct(response.data))
        }else{
          throw new Error("error occurred while fetching mensSportswers");
        }
    } catch (error){
      dispatch(SetLoader(false));
      console.log(error);
    }
}
 useEffect(() => {
    fetchPorducts()
 }, [filters])
 
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
            <BreadcrumbLink href="#@">Sportwear</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />

      <Info data={data}/>
     
     
      <Box pl={['2%','5%','2%','40%']}>
       <ProductSubCategory data={TagsData} setfilters={setfilters} filters={filters}/>
      </Box>


      <Box  mb={2} bgColor="#EEEEEE" >
        <SortSection setfilters={setfilters} filters={filters} styles={stylesdata}/>
      </Box>

      <SimpleGrid columns={[2,2,3,4]} w="85%" m={"auto"} spacing={3} p={0}>
        <ProductList product={product} />
      </SimpleGrid>
    </Box>
  )
};
