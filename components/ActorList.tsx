import { ActorType } from "../types/categories";
import { Slider } from "./Slider";
import Actor from "./Actor";

interface Props {
  actors: ActorType[];
}

const options = {
  size: "16.66%",
  breakpoints: [
    { maxWidth: "md", slideSize: "30%" },
    { maxWidth: "sm", slideSize: "45%" },
  ],
};

export const ActorList = ({ actors }: Props) => {
  const slides = actors.map((actor) => <Actor actor={actor} />);

  return <Slider slides={slides} options={options} />;
};
