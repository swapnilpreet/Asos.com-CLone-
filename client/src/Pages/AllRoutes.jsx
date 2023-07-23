import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./UserRegister/LoginRegister";
import Home from "./Home";
import ProtectedPage from "../components/ProtectedPage";
import { Navbar } from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {NewIn} from "./Women/NewIn/NewIn";
import {MenNewIn} from "./Men/NewIn/MenNewIn";
import {Cloth} from "./Women/Cloth/Cloth";
import { Dresses } from "./Women/Dresses/Dresses";
import { Shoes } from "./Women/Shoes/Shoes";
import { Sportwear } from "./Women/Sportwear/Sportwear";
import { Accessories } from "./Women/Accessories/Accessories";
import { Brands } from "./Women/Brands/Brands";
import { FaceBody } from "./Women/FaceBody/FaceBody";
import { Topshop } from "./Women/Topshop/Topshop";
import { MenTopshop } from "./Men/Topshop/MenTopshop";
import { MenCloth } from "./Men/Cloth/MenCloth";
import { MenShoes } from "./Men/Shoes/MenShoes";
import { MenAccessories } from "./Men/Accessories/MenAccessories";
import { MenSportwear } from "./Men/Sportwear/MenSportwear";
import { MenBrands } from "./Men/Brands/MenBrands";
import WomenHome from "./Women/WomenHome";
import Footer from "./Footer";
import MenHome from "./Men/MenHome";
import { Gift } from "./Women/Gifting/Gift";
import Maincartpage from "../Pages/Cart/Maincartpage";
import { WishListGrid } from "./wishlist/WishListGrid";
import MainCheckout from "./Checkout/MainCheckout";
import SingleProduct from "./SingleProduct/SingleProduct";
import Summer from "./Men/Summer/Summer";
import WomenSummer from "./Women/Summer/WomenSummer";
import { GetAllCartProducts } from "../ApiCall/cartApi";
import { AddtoCart } from "../Redux/Cartslice";
import SearchProduct from "./SearchProduct/SearchProduct";

const AllRoutes = () => {
  const {user} = useSelector((state)=>state?.users);
  const dispatch = useDispatch();
  
  const handlegetAllcart = async () => {
    try {
      const response = await GetAllCartProducts();
      if (response) {
        dispatch(AddtoCart(response.cart.items));
      }
    } catch (error) {
     console.log(error.message);
    }
  };

  useEffect(() => {
    handlegetAllcart()
  }, []);

  return (
    <div>
      {user !== null ? <Navbar/> : null}
      <Routes>
        <Route path="/register" element={<LoginRegister/>}/>
        <Route path="/login" element={<LoginRegister />}/>
        {/* womennewin */}

        <Route path="/" element={
            <ProtectedPage>
                <Home />
            </ProtectedPage>
        } />

        <Route path="/product/:id" element={
            <ProtectedPage>
                <SingleProduct />
            </ProtectedPage>
        } />

        <Route path="/checkout" element={
            <ProtectedPage>
                <MainCheckout />
            </ProtectedPage>
        } />

        <Route path="/cart" element={
            <ProtectedPage>
                <Maincartpage />
            </ProtectedPage>
        } />

        <Route path="/women-home" element={
            <ProtectedPage>
                <WomenHome/>
            </ProtectedPage>
        } />

        <Route path="/women-summer" element={
            <ProtectedPage>
                <WomenSummer/>
            </ProtectedPage>
        } />

        <Route path="/men-home" element={
            <ProtectedPage>
                <MenHome />
            </ProtectedPage>
        } />

        <Route path="/wishlist" element={
            <ProtectedPage>
                <WishListGrid />
            </ProtectedPage>
        } />

        <Route path="/women-newIn" element={
            <ProtectedPage>
                <NewIn />
            </ProtectedPage>
        }/>
        <Route path="/men-newIn" element={
            <ProtectedPage>
                <MenNewIn />
            </ProtectedPage>
        }/>
        <Route path="/women-cloth" element={
            <ProtectedPage>
                <Cloth />
            </ProtectedPage>
        }/>
        <Route path="/men-cloth" element={
            <ProtectedPage>
                <MenCloth />
            </ProtectedPage>
        }/>
        <Route path="/women-dresses" element={
            <ProtectedPage>
                <Dresses />
            </ProtectedPage>
        }/>

        <Route path="/women-shoe" element={
            <ProtectedPage>
                <Shoes/>
            </ProtectedPage>
        }/>
        <Route path="/women-sportwear" element={
            <ProtectedPage>
                <Sportwear/>
            </ProtectedPage>
        }/>
        <Route path="/women-accessories" element={
            <ProtectedPage>
                <Accessories/>
            </ProtectedPage>
        }/>
        <Route path="/women-topshop" element={
            <ProtectedPage>
                <Topshop/>
            </ProtectedPage>
        }/>
        <Route path="/men-topshop" element={
            <ProtectedPage>
                <MenTopshop/>
            </ProtectedPage>
        }/>
        <Route path="/women-facebody" element={
            <ProtectedPage>
                <FaceBody/>
            </ProtectedPage>
        }/>
        <Route path="/women-brands" element={
            <ProtectedPage>
                <Brands/>
            </ProtectedPage>
        } />
 
        <Route path="/men-shoe" element={
            <ProtectedPage>
                <MenShoes/>
            </ProtectedPage>
        } />

        <Route path="/men-accessories" element={
            <ProtectedPage>
                <MenAccessories/>
            </ProtectedPage>
        } />

        <Route path="/men-sportwear" element={
            <ProtectedPage>
                <MenSportwear/>
            </ProtectedPage>
        } />

        <Route path="/men-brand" element={
            <ProtectedPage>
                <MenBrands/>
            </ProtectedPage>
        } />

        <Route path="/men-summer" element={
            <ProtectedPage>
                <Summer/>
            </ProtectedPage>
        } />

<Route path="/searchproduct" element={
            <ProtectedPage>
                <SearchProduct/>
            </ProtectedPage>
        } />
{/* /searchproduct */}
      </Routes>
      {user !== null ? <Footer/> : null}
    </div>
  );
};

export default AllRoutes;
