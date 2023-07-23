import React from "react";
import { Box } from "@chakra-ui/react";
import { TopBanner } from "./DestopNavbar/TopBanner";
import { MiddleNav } from "./DestopNavbar/MiddleNav";
import { Desktop, Mobile, Tablet } from "../../Responsiveness/Responsive";
import { MobileNavbar } from "./MobileScreenNavbar/MobileNavbar";
import { TabNavbar } from "./TabScreenNavbar/TabNavbar";

export const Navbar = () => {
  return (
    <>
      <Desktop>
        <Box>
          <TopBanner />
          <MiddleNav />
        </Box>
      </Desktop>

      <Tablet>
        <TabNavbar />
      </Tablet>

      <Mobile>
        <MobileNavbar />
      </Mobile>
    </>
  );
};
