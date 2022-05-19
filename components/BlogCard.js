import React from 'react';

const BlogCard = ({ post }) => {
  const {
    name,
    slug,
    description,
    briefInfo,
    thumbnail,
    image,
    published,
    source,
    tag,
    video,
  } = post;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(published).toLocaleDateString('ru-RU', options);
  return (
    <a href={source} className="blog_card">
      <div className="blog_thumbnail">
        <img src={thumbnail} alt={briefInfo} loading="lazy" />
      </div>
      <div className="blog_info">
        <span className="blog_tag">{tag}</span>
        <h3>{name}</h3>
        <span className="blog_date">{date}</span>
      </div>
    </a>
  );
};

export default BlogCard;
