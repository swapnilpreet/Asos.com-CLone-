import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  ListItem,
  Select,
  Text,
  UnorderedList,
} from "@chakra-ui/react";


import React, { useEffect, useRef, useState } from "react";
import asoslogologin from "../../Images/asos-logo-login.png";
import digicImg from "../../data/digicert.svg";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { ClearcartApi, GetAllCartProducts } from "../../ApiCall/cartApi";
import { AddtoCart, ClearCart } from "../../Redux/Cartslice";
import { useNavigate } from "react-router-dom";
import { AddAddress } from "../../Redux/AddressSlice";
import { getpaymentOrder, getpaymentVerify } from "../../ApiCall/payment";


const MainCheckout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [showpromo, setshowpromo] = useState(false);
  const [updated, setUpdated] = useState("");
  const [show, setshow] = useState(false);
  const [payable, setpayable] = useState(0);
  const [showbtn, setshowbtn] = useState(true);

  const [customerSignUp, setCustomerSignUp] = useState({
    mobile: "",
    postcode: "",
    firstname: "",
    lastname: "",
    city: "",
    address: "",
  });

  function SubmitButton(){
    if (customerSignUp.mobile && customerSignUp.postcode && customerSignUp.firstname && customerSignUp.lastname && customerSignUp.city && customerSignUp.address){
      return <Button
      color={"white"}
      bg={"black"}
      mt={10}
      borderRadius={"none"}
      onClick={HandleAddress}
    >
      DELIVER TO THIS ADDRESS
    </Button>
    } else {
      return <Button
      isDisabled={true}
      color={"white"}
      bg={"black"}
      mt={10}
      borderRadius={"none"}
      onClick={HandleAddress}
    >
      DELIVER TO THIS ADDRESS
    </Button>
    };
  };

  const handleClick = () => {
    setUpdated(inputRef.current.value);
  };

  const { cart } = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.users);
  const { address } = useSelector((state) => state.address);

  const handleToggle = () => setshow(!show);
  const handleTogglepromo = () => setshowpromo(!showpromo);

  const handlegetAllcart = async () => {
    try {
      const response = await GetAllCartProducts();
      if (response) {
        dispatch(AddtoCart(response.cart.items));
      }
    } catch (error) {
      console.log(error);
    }
  };

  let sum = cart?.reduce((prev, curr) => {
    return prev + (curr.product.price * curr.quantity);
  },0);

  let totalsum = sum ;

  const handleChange = (event) => {
    setCustomerSignUp({
      ...customerSignUp,
      [event.target.name]: event.target.value,
    });
  };

  const HandleAddress =() => {
    // console.log('add',customerSignUp);
    dispatch(AddAddress(customerSignUp));
    setshowbtn(false)
    
  };
   
  const handleClearCart=async()=>{
    try {
      const response = await ClearcartApi();
      if(response){
        navigate('/women-home')
        setpayable(totalsum)
        dispatch(ClearCart());
        localStorage.removeItem('payableAmount')
      }
      else{
        throw new Error("something went wrong in handle-Clear-Cart");
      }
    } catch (error) {
     console.log(error);
    }
  }
   
  const handlePayment=async(price)=>{
    const amount=Number(price);
    const _data={amount:amount}
   try {
     const response = await getpaymentOrder(_data);
     if (response.success) {
        console.log(response.data)
        handleOpenRazorpay(response.data)
      } else {
        throw new Error("Product not fiilters");
      }
    } catch (error) {
       console.error(error.message);
    }
  }

  const handleOpenRazorpay=(data)=>{
     const options={
         key:'rzp_test_93GbPzDVgg9zAW',
         amount:data.amount,
         currency:data.currency,
         order_id:data.id,
         name:"Asos",
         description:"security",
         image:"https://1000logos.net/wp-content/uploads/2020/08/ASOS-Logo.jpg",

         handler:function(response){

           const handlePaymentverify=async(response)=>{
            const _data={response:response}
            try {
              const response = await getpaymentVerify(_data);
                // console.log(response)
                handleClearCart();
             } catch (error) {
              //  message.error(error.message);
             }
          }
          handlePaymentverify(response);
          },
         theme: {
           "color": "#3399cc"
         }
     };
     const rzp = new window.Razorpay(options)
     rzp.open()
  }

  useEffect(() => {
    if (updated === "SAVINGS") {
      let discountAmount = (totalsum * 10) / 100;
      let payableAmount = totalsum - discountAmount;
      setshowpromo(true);
      localStorage.setItem("payableAmount", payableAmount);
    }
  }, [handleTogglepromo]);


  useEffect(() => {
    setpayable(Number(localStorage.getItem("payableAmount")));
  }, [handleClick]);


  useEffect(() => {
    handlegetAllcart();
  }, []);


  return (

    <Box  w={["100%","100%","100%","50%"]} margin={"auto"}>

      <Flex justifyContent={"space-between"} p={2}>
        <Box>
          {" "}
          <Image src={asoslogologin} alt=""></Image>{" "}
        </Box>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            CHECKOUT
          </Text>
        </Box>
        <Box h={9}>
          {" "}
          <Image h={"full"} src={digicImg} alt=""></Image>{" "}
        </Box>
      </Flex>

      <Flex gap={2} p={3} direction={{ base:'column-reverse',md:'row'}}>
        {/* left */}
        <Box w={["100%","100%","100%","60%"]}>
          <Text fontWeight={"bold"} letterSpacing={"2px"}>
            DELIVERY COUNTRY
          </Text>

          <Flex alignItems={"center"} gap={2} mt={5}>
            <Box h={10}>
              <Image
                h={"full"}
                src="https://assets.asosservices.com/storesa/images/flags/in.png"
              ></Image>
            </Box>
            <Box w={"full"}>
              <Select
                // onChange={(e) => handlepriceRange(e)}
                _hover={{ color: "#0770cf" }}
                border={"1px solid black"}
                borderRadius="0px"
                w={"80%"}
              >
                <option value="India">India</option>
                <option value="united States">united States</option>
                <option value="Canada">Canada</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Germany">Germany</option>
                <option value="Australia">Australia</option>
              </Select>
            </Box>
          </Flex>

          <Box mt={10}>
            <Flex
              fontWeight={"bold"}
              letterSpacing={"2px"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>PROMO/STUDENT CODE OR VOUCHERS</Box>
              <Box>
                {show ? (
                  <BiSolidUpArrow onClick={handleToggle} cursor={"pointer"} />
                ) : (
                  <BiSolidDownArrow onClick={handleToggle} cursor={"pointer"} />
                )}
              </Box>
            </Flex>

            <Collapse in={show}>
              <Text mt={10} mb={5}>
                ADD A PROMO / STUDENT CODE
              </Text>

              <Flex gap={3}>
                <Box w={"70%"}>
                  <Input
                    borderRadius={"none"}
                    ref={inputRef}
                    type="text"
                    id="message"
                    name="message"
                  ></Input>
                </Box>
                <Box>
                  <Button
                    bg={"black"}
                    borderRadius={"none"}
                    color={"white"}
                    onClick={handleClick}
                  >
                    APPLY CODE
                  </Button>
                </Box>
              </Flex>

              <Text mt={4} fontWeight={"bold"}>
                NEED TO KNOW
              </Text>

              <UnorderedList>
                <ListItem mt={2}>
                  You can only use one discount/promo code per order. This
                  applies to our free-delivery codes, too.
                </ListItem>
                <ListItem mt={2}>
                  Discount/promo codes cannot be used when buying gift vouchers.
                </ListItem>
              </UnorderedList>
            </Collapse>
          </Box>

          <Box mt={8}>
            <Text fontWeight={"bold"} letterSpacing={2}>
              EMAIL ADDRESS
            </Text>
            <Text fontSize={"sm"}>{user?.email}</Text>
          </Box>

          <Box mt={10}>
            <Text fontWeight={"bold"} letterSpacing={"2px"}>
              DELIVERY ADDRESS
            </Text>
            <Text mt={4} fontWeight={"bold"} letterSpacing={"2px"}>
              ADD ADDRESS
            </Text>

            <FormControl isRequired mt={8} w={"70%"}>
              <FormLabel color={"gray"}>FIRST NAME :</FormLabel>
              <Input
                borderRadius={"none"}
                border={"1px solid black"}
                name="firstname"
                value={customerSignUp.firstname}
                onChange={handleChange}
                required
              />

              <FormLabel color={"gray"} mt={8}>
                LAST NAME :
              </FormLabel>
              <Input
                borderRadius={"none"}
                border={"1px solid black"}
                name="lastname"
                value={customerSignUp.lastname}
                onChange={handleChange}
                required
              />

              <FormLabel color={"gray"} mt={8}>
                MOBILE (For delivery updates) :
              </FormLabel>
              <Input
                borderRadius={"none"}
                type="tel"
                border={"1px solid black"}
                name="mobile"
                value={customerSignUp.mobile}
                onChange={handleChange}
                required
              />

              <FormLabel color={"gray"} mt={8}>
                ADDRESS :
              </FormLabel>
              <Input
                borderRadius={"none"}
                border={"1px solid black"}
                name="address"
                value={customerSignUp.address}
                onChange={handleChange}
                required
              />

              <FormLabel color={"gray"} mt={8}>
                CITY :
              </FormLabel>
              <Input
                borderRadius={"none"}
                border={"1px solid black"}
                name="city"
                value={customerSignUp.city}
                onChange={handleChange}
                required
              />

              <FormLabel color={"gray"} mt={8}>
                POSTCODE :
              </FormLabel>
              <Input
                type="number"
                borderRadius={"none"}
                border={"1px solid black"}
                name="postcode"
                value={customerSignUp.postcode}
                onChange={handleChange}
                required
              />

              <FormLabel color={"gray"} mt={8}>
                COUNTRY :
              </FormLabel>
              <Text>(India)</Text>

              {/* <Button
                color={"white"}
                bg={"black"}
                mt={10}
                borderRadius={"none"}
                onClick={HandleAddress}
              >
                DELIVER TO THIS ADDRESS
              </Button> */}
              <SubmitButton/>
            </FormControl>
          </Box>

       {payable > 0 ? (
          <Button
          onClick={()=> handlePayment(payable)}
          isDisabled={showbtn}
          mt={10}
          h={16}
          w={"full"}
          border={"1px solid black"}
          borderRadius={"none"}
          bg={"#018849"}
          color={"white"}
          letterSpacing={2}
          fontSize={"xl"}
        >
      BUY
          </Button>
       ) : (
        <Button
        onClick={()=> handlePayment(totalsum)}
        isDisabled={showbtn}
        mt={10}
        h={16}
        w={"full"}
        border={"1px solid black"}
        borderRadius={"none"}
        bg={"#018849"}
        color={"white"}
        letterSpacing={2}
        fontSize={"xl"}
      >
        BUY
        </Button>
       )}
        </Box>
        {/* right */}
        <Box w={["100%","100%","100%","40%"]}  >
          <Box p={2} border={"1px solid grey"} borderRadius={5}>
            <Text letterSpacing={2} fontWeight={"bold"} fontSize={"xl"}>
              {cart?.length} ITEM
            </Text>
            <Box  h={"415px"} overflow={"scroll"} borderRadius={5}>
              {cart?.map((item,index) => (
                <Box mt={2} key={index}>
                  <Flex gap={2}>
                    <Box>
                      <Box h={32} w={32}>
                        <Image
                          h={"full"}
                          w={"full"}
                          src={item.product.images[0]}
                        ></Image>
                      </Box>
                    </Box>
                    <Box>
                      <Text>&pound; {item.product.price}</Text>
                      <Box h={"50px"} overflow={"hidden"}>
                        <Text>{item.product.name}</Text>
                      </Box>
                      <Flex justifyContent={"space-between"}>
                        <Text>{item.product.color}</Text>
                        <Text>{item.product.size}</Text>
                      </Flex>
                      <Text>Qty : {item.quantity}</Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Box>
            <Divider></Divider>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Text>Subtotal</Text>
              </Box>
              <Box>
                <Text>&pound;{totalsum}</Text>
              </Box>
            </Flex>

            <Collapse in={showpromo}>
              <Flex justifyContent={"space-between"}>
                <Box>
                  <Text>Promo</Text>
                </Box>
                <Box>
                  <Text>-10%</Text>
                </Box>
              </Flex>
            </Collapse>

            <Flex justifyContent={"space-between"}>
              <Box>
                <Text>TOTAL TO PAY</Text>
              </Box>
              <Box>
                {payable > 0 ? (
                  <Text>&pound; {payable}</Text>
                ) : (
                  <Text>&pound;{totalsum}</Text>
                )}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainCheckout;
