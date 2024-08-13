import React from "react";
import PropTypes from "prop-types";
import Social from "./Social";
import { css, withStyles } from "../withStyles";

const menuItems = [
  { name: "Publications", link: "#publications" },
  { name: "Software", link: "#software" },
  { name: "Contact", link: "#contact" }
];

class Header extends React.Component {
  render() {
    const { styles } = this.props;

    return (
      <nav {...css(styles.container)}>
        <img
          {...css(styles.terminal)}
          src="/images/dna.svg"
          alt="DNA"
        />
        <div {...css(styles.menu_items)}>
          {menuItems.map(item => (
            <a key={item.name} href={item.link} {...css(styles.menu_item)}>
              {item.name}
            </a>
          ))}
          <div {...css(styles.social)}>
            <Social />
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    padding: "10px 20px 20px"
  },

  terminal: {
    display: "inline-block",
    float: "left",
    height: "50px"
  },

  social: {
    marginTop: "-5px"
  },

  menu_items: {
    display: "flex",
    float: "right",
    marginTop: "20px",
    "@media (max-width: 700px)": {
      display: "none"
    }
  },

  menu_item: {
    padding: "0 15px",
    textDecoration: "none",
    textAlign: "left",
    color: "white",
    fontWeight: "600",
    opacity: "0.6",
    ":hover": {
      opacity: "1"
    }
  }
}))(Header);
