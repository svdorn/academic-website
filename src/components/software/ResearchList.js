import React from "react";
import PropTypes from "prop-types";
import Software from "./Software";
import { css, withStyles } from "../../withStyles";

const researchList = [
  {
    color: "#003B6F",
    placement: "left",
    name: "Impact of Genomic Variation on Function",
    link: "#publications",
    description: "Integrating molecular phenotypes with GWAS to identify important genes and pathways for human disease"
  },
  {
    color: "#003B6F",
    placement: "center",
    name: "Neurological Disease",
    link: "#publications",
    description: "Applying statistical genetics approaches to study neurological disease and the role of Tandem Repeats in neurological disease"
  },
  {
    color: "#003B6F",
    placement: "right",
    name: "Genetic Risk Prediction",
    link: "#publications",
    description: "Predicting disease risk using genetic information through development of Polygenic Risk Score (PRS) methodology"
  }
];

function ResearchList({ styles }) {

  return (
    <div>
      <div {...css(styles.container)}>
        {researchList.map(software => (
          <Software key={software.name} software={software} />
        ))}
      </div>
    </div>
  );
}

ResearchList.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    display: "inline-flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  }
}))(ResearchList);
