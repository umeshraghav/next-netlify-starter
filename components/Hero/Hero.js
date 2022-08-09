import React from "react";
import { Box } from "@mui/system";
import heroImage from "../../public/hero.jpg";
import Image from "next/image";

function Hero() {
  return (
    <Box component="div">
      Hello
      <div>
        <Image
          alt="Mountains"
          src={heroImage}
          objectFit="contain"
          quality={100}
          style={{ height: 200 }}
        />
      </div>
    </Box>
  );
}

export default Hero;
