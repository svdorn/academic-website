import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

const icons = [
  { name: "twitter", href: "https://x.com/stphn_drn" },
  { name: "github", href: "https://github.com/svdorn" },
  { name: "googlescholar", href: "https://scholar.google.com/citations?user=Ysb-abIAAAAJ&hl=en" },
  { name: "cv", href: "https://drive.google.com/file/d/1ScfRk0WPFAfNrYYp9gYyvyTOc4IO4erU/view?usp=sharing" },
  { name: "email", href: "mailto:stephendorn@g.ucla.edu" }
];

function Social({ styles }) {
  return (
    <div {...css(styles.container)}>
      {icons.map(icon => (
        <a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          {...css(styles.image_clickable)}
        >
          <img
            src={`/images/social/${icon.name}.svg`}
            alt={icon.name}
            {...css(styles.image)}
          />
        </a>
      ))}
    </div>
  );
}

Social.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    display: "inline-block"
  },

  image_clickable: {
    margin: "0 5px",
    opacity: "0.4",
    ":hover": {
      opacity: "0.6"
    }
  },

  image: {
    height: "40p !important"
  },
  "@media (max-width: 1050px)": {
    height: "34px"
  }
}))(Social);
