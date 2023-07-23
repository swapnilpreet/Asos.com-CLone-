import { Box, Center, Collapse, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const Info = ({ data }) => {
  // console.log("info", data);
  const [show, setshow] = useState(false);
  const handleToggle = () => setshow(!show);
  return (
    <Flex  w="55%" m="auto" pb={10} mt={5} alignItems={"center"}>
      {data && (
        <>
          <Box>
            <Center>
              <Heading size={"md"}>{data.label}</Heading>
            </Center>
            <VStack m={"auto"} fontSize={"sm"} mt={4}ml={2}>
              <Collapse startingHeight={20} in={show}>
                {data.description}
              </Collapse>
            </VStack>
          </Box>
          <Box mt={10}>
            {show ? (
              <BiSolidDownArrow onClick={handleToggle} />
            ) : (
              <BiSolidUpArrow onClick={handleToggle} />
            )}
          </Box>
        </>
      )}
    </Flex>
  );
};

export default Info;
