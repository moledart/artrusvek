import React from "react";
import { Link } from "react-router-dom";

export const SectionHeader = ({ title, link, linkText }) => {
  return (
    <div className="section_header">
      <h2>{title}</h2>
      <Link to={link} className="title_link">
        {linkText}
      </Link>
    </div>
  );
};
