import React from "react";
import PropTypes from "prop-types";
import Software from "./Software";
import { css, withStyles } from "../../withStyles";

const softwareList = [
  {
    color: "#4A6FA5",
    placement: "left",
    name: "GSUB",
    link: "https://github.com/qlu-lab/GSUB",
    description: "A close-form approach to performing GWAS-by-subtraction"
  },
  {
    color: "#4A6FA5",
    placement: "center",
    name: "PENGUIN",
    link: "https://github.com/qlu-lab/PENGUIN",
    description: "Controlling for polygenic genetic confounding in epidemiologic association analysis"
  },
  {
    color: "#4A6FA5",
    placement: "right",
    name: "PUMAS",
    link: "https://github.com/qlu-lab/PUMAS",
    description: "A tool for polygenic risk score model fine-tuning and ensemble learning using GWAS summary statistics"
  }
];

function SoftwareList({ styles }) {

  return (
    <div>
      <div {...css(styles.container)}>
        {softwareList.map(software => (
          <Software key={software.name} software={software} />
        ))}
      </div>
    </div>
  );
}

SoftwareList.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    display: "inline-flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  }
}))(SoftwareList);
