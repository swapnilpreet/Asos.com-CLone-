import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ProductList from '../ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { SetLoader } from '../../Redux/LoaderSlice'
import { GetAllWomensProducts, GetProductsBysearch } from '../../ApiCall/products'
import { SetWomenProduct } from '../../Redux/WomesProductSlice'

const SearchProduct = () => {
    const {product}  = useSelector((state) => state.womenProduct);
    const {searchkey}  = useSelector((state) => state.womenProduct);
    
    useEffect(() => {
    }, [searchkey])
    
  return (
    <Box w={"100%"} >

    <Box w={"70%"} margin={'auto'}> 
        <Box w="90%" m="auto" mt={3} mb={3} fontSize={'xs'}>
        <Breadcrumb
          spacing="8px"
          separator={ <ChevronRightIcon color="gray.500"/> }
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#@">{searchkey}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>

    <Box w={"100%"} >
     <hr/>
    </Box>

    <Box w={"90%"} margin={'auto'}>
      <SimpleGrid columns={[2,2,3,4]} w="90%" m={"auto"} spacing={3} mt={2}>
        <ProductList product={product}/>
      </SimpleGrid>
    </Box>
    
    </Box>
  )
}

export default SearchProduct