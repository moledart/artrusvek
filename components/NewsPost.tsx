import Image from "next/image";
import { NewsPostType } from "../types/categories";
import Link from "next/link";

interface Props {
  post: NewsPostType;
}

const NewsPost = ({ post }: Props) => {
  const { name, thumbnail, published, source, tag } = post;

  let date;
  if (published)
    date = new Date(published).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <Link href={source}>
      <article className="flex flex-col cursor-pointer group">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={thumbnail}
            alt={name}
            layout="responsive"
            objectFit="cover"
            width={16}
            height={9}
            className="lg:group-hover:scale-105 basic-animation"
          />
        </div>
        <span className="text-main text-sm mt-4">{tag}</span>
        <h3 className="card-header mb-2">{name}</h3>
        <span className="text-sm text-neutral-400">{date}</span>
      </article>
    </Link>
  );
};

export default NewsPost;
