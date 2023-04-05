import NewsPost from "../../components/NewsPost";
import hygraph from "../../functions/hygraph";
import { NewsPostType } from "../../types/categories";

export default async function Page() {
  const news = await hygraph.getDataByCategory("news");
  return (
    <section>
      <h2 className="text-3xl font-bold leading-8 mb-8">Новости</h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(286px,_1fr))] gap-8">
        {news.map((post: NewsPostType) => (
          <NewsPost post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
}
