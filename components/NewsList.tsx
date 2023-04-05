import { NewsPostType } from "../types/categories";
import { Slider } from "./Slider";
import NewsPost from "./NewsPost";

interface Props {
  news: NewsPostType[];
}

const options = {
  size: "25%",
  breakpoints: [
    { maxWidth: "md", slideSize: "30%" },
    { maxWidth: "sm", slideSize: "90%" },
  ],
};

export const NewsList = ({ news }: Props) => {
  const slides = news.map((post) => <NewsPost post={post} />);

  return <Slider slides={slides} options={options} />;
};
