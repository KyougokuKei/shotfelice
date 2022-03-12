import { RightArrow, LeftArrow } from "./Arrow";

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: "16%",
  centerMode: true,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  waitForAnimate: false,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
