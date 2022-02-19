
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";
import { Nav } from "./Nav";
import { Box, Text, MotionDiv } from "../../styles/components";
import Image from 'next/image';
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from 'react';

export function SlickSlider({ imgPaths }) {
  const categories = Object.keys(imgPaths);
  const [active, setActive] = useState(categories[0]);

  return (
    <Box>
      <Nav active={active} setActive={setActive} list={categories} />
      <Slider {...settings}>
        {imgPaths[active].map((path, index) => (
          <Image
            src={path}
            layout="responsive"
            width={960} height={1200}
            alt={path}
            key={index}
          />
        ))}
      </Slider>
    </Box>
  );
}