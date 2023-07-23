import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css';

export const BottomBanner = () => {
  
  return (
    <Box w="100%" h={"60px"}
    className={styles.gradient}
    >
        <Flex>
          
          <Box w={'50%'} pt={1} justifyContent={'center'} pl={300} color={'white'} style={{letterSpacing:'2px'}}>
            <Text fontSize={'xs'}>20% OFF EVERYTHING</Text>
            <Text fontSize={'xs'}>The weekend just got Sweeter</Text>
            <Text fontSize={'xs'}>Use Code: SHOPNOW</Text>
          </Box>

          <Box h={'60px'} pt={4} bg={'black'} w={'50%'} pl={300}>
              <Text color={"white"}>FREE WORLDWIDE DELIVERY</Text>
          </Box>

        </Flex>
    </Box>
  );
};
