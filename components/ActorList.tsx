import { TTeamMember } from "../data/actors";
import Actor from "./Actor";
import { Slider } from "./Slider";

interface Props {
  actors: TTeamMember[];
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
