import React from "react";
//Router
import { Link } from "react-router-dom";
//Components
import Play from "./Play";

const Section = (props) => {
  return (
    <section>
      <div className="section_header">
        <h2>{props.title}</h2>
        <Link to="/plays" className="title_link">
          Все {props.title}
        </Link>
      </div>
      <div className="list">
        {props.plays.map((play) => (
          <Play play={play} key={play.id} />
        ))}
      </div>
    </section>
  );
};

export default Section;
