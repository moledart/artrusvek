import React from "react";
//Social icons
import { Facebook, Instagram, Vkontakte, Website } from "./iconsSocial";

const SocialLinks = (actor) => {
  const { fbLink, igLink, vkLink, link } = actor.actor;
  return (
    <div className="social_links">
      {fbLink && (
        <a href={fbLink} className="href">
          <Facebook />
        </a>
      )}
      {igLink && (
        <a href={igLink} className="href">
          <Instagram />
        </a>
      )}
      {vkLink && (
        <a href={vkLink} className="href">
          <Vkontakte />
        </a>
      )}
      {link && (
        <a href={link} className="href">
          <Website />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
