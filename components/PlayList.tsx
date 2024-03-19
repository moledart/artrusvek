import { TPlay } from "../data/plays";
import Play from "./Play";
import { Slider } from "./Slider";

interface Props {
  plays: TPlay[];
}

const options = {
  size: "33.33%",
  breakpoints: [
    { maxWidth: "md", slideSize: "30%" },
    { maxWidth: "sm", slideSize: "90%" },
  ],
};

export const PlayList = ({ plays }: Props) => {
  const slides = plays.map((play) => <Play play={play} />);
  return <Slider slides={slides} options={options} />;
};
