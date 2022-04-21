import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllNews } from "../reducers/dataSlice";
import BlogCard from "../components/BlogCard";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const news = useSelector(selectAllNews);
  const renderedNews = news.map((post) => <BlogCard post={post} key={post.id} />);
  return (
    <main className="news">
      <section>
        <h2>Новости</h2>
        <div className="news_page_wrapper">{renderedNews}</div>
      </section>
    </main>
  );
};

export default News;
