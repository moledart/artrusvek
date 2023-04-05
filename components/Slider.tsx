"use client";
import { Carousel } from "@mantine/carousel";

export const Slider = ({
  slides,
  options,
}: {
  slides: JSX.Element[];
  options: {
    size: string;
    breakpoints?: { maxWidth: string; slideSize: string }[];
  };
}) => {
  return (
    <Carousel
      slideSize={options.size}
      align="start"
      slideGap="md"
      dragFree
      loop
      breakpoints={options.breakpoints}
    >
      {slides.map((slide, i) => (
        <Carousel.Slide key={i}>{slide}</Carousel.Slide>
      ))}
    </Carousel>
  );
};
