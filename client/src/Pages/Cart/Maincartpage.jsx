import React from 'react'
import Cartitemsdetails from './Cartitemsdetails'
import Ordersummary from './Ordersummary'
import { useSelector } from 'react-redux'
import { Box, Flex} from '@chakra-ui/react'
import BlankCart from '../../components/BlankCart'


const Maincartpage = () => {
  // BlankCart
  const {cart} = useSelector((state) => state.carts);
  return (
    <Box bg={'gray.100'}>
         <Box w={['100%','100%','100%','55%']} margin={'auto'}>
             {cart?.length > 0 ? (
                <Flex gap={1}
                direction={{ base: 'column', md: 'row' }}
                >
                <Box w={['100%','100%','100%','65%']}>
                   <Cartitemsdetails data={cart}/>
                </Box>
                <Box w={['100%','100%','100%','40%']}>
                   <Ordersummary data={cart}/>
                </Box>
          </Flex>
             ):(
                 <BlankCart/>
             )}
         </Box>
    </Box>
  )
}

export default Maincartpage