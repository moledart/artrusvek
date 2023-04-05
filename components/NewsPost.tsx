import Image from "next/image";
import { NewsPostType } from "../types/categories";
import Link from "next/link";

interface Props {
  post: NewsPostType;
}

const NewsPost = ({ post }: Props) => {
  const { title, thumbnail, date, link, tag } = post;

  return (
    <Link href={link}>
      <article className="flex flex-col cursor-pointer group">
        <div className="rounded-lg overflow-hidden relative h-40">
          <Image
            src={thumbnail.url || "https://picsum.photos/200/300"}
            alt={title}
            fill={true}
            quality={100}
            className=" lg:group-hover:scale-105 basic-animation object-cover object-top"
          />
        </div>
        <span className="text-main text-sm mt-4">{tag}</span>
        <h3 className="card-header mb-2">{title}</h3>
        <span className="text-sm text-neutral-400">
          {new Date(date).toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </article>
    </Link>
  );
};

export default NewsPost;
