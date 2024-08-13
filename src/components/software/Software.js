import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import { css, withStyles } from "../../withStyles";

function Software({ software, styles }) {
  return (
    <a
      href={software.link}
      target="_blank"
      rel="noopener noreferrer"
      {...css(styles.container)}
    >
      <Box
        placement={software.placement}
        color={software.color}
        {...css(styles.box_container)}
      >
        <div {...css(styles.box)}>
          <h3 {...css(styles.title)}>{software.name}</h3>
          <div {...css(styles.description)}>
            {software.description}
          </div>
        </div>
      </Box>
    </a>
  );
}

Software.propTypes = {
  software: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    margin: "30px",
    textDecoration: "none"
  },

  box_container: {
    display: "flex",
    verticalAlign: "top",
    width: "250px",
    minHeight: "180px",
    backgroundColor: "white",
    cursor: "pointer"
  },

  box: { padding: "30px 20px 30px 20px", textAlign: "left" },

  title: { color: color.primary, margin: "0 auto 20px auto" },

  description: { fontSize: "16px", marginTop: "10px", color: "black" }
}))(Software);
