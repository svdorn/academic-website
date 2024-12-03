import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";
import ResearchList from "../components/software/ResearchList";
import Social from "../components/Social";
import SoftwareList from "../components/software/SoftwareList";
import { css, withStyles } from "../withStyles";

const publications = [
  {
    name: "One score to rule them all: regularized ensemble polygenic risk prediction with GWAS summary statistics",
    link: "https://doi.org/10.1101/2024.11.27.625748",
    authors: <div>Z Zhao*, <b>S Dorn*</b>, Y Wu, X Yang, J Jin, Q Lu (2024)</div>,
    preprint: "https://doi.org/10.1101/2024.11.27.625748",
    journal: "Submitted (preprint available of bioRxiv)",
    software: {
      name: "PUMAS",
      link: "https://github.com/qlu-lab/PUMAS"
    }
  },
  {
    name: "Pervasive biases in proxy GWAS based on parental history of Alzheimer’s disease",
    link: "https://www.nature.com/articles/s41588-024-01963-9",
    authors: <div>Y Wu*, Z Sun*, Q Zheng, J Miao, <b>S Dorn</b>, S Mukherjee, JM Fletcher, Q Lu (2024)</div>,
    published_journal: "https://www.nature.com/articles/s41588-024-01963-9",
    preprint: "https://www.biorxiv.org/content/10.1101/2023.10.13.562272v1",
    journal: "Nature Genetics",
    software: {
      name: "GSUB",
      link: "https://github.com/qlu-lab/GSUB"
    }
  },
  {
    name: "Controlling for polygenic genetic confounding in epidemiologic association studies",
    link: "https://pubmed.ncbi.nlm.nih.gov/39432782/",
    authors: <div>Z Zhao, X Yang, <b>S Dorn</b>, J Miao, SH Barcellos, JM Fletcher, Q Lu (2024)</div>,
    published_journal: "https://www.pnas.org/doi/10.1073/pnas.2408715121",
    preprint: "https://www.biorxiv.org/content/10.1101/2024.02.12.579913v1",
    journal: "Proceedings of the National Academy of Sciences (PNAS)",
    software: {
      name: "PENGUIN",
      link: "https://github.com/qlu-lab/PENGUIN"
    }
  }
];

class Home extends React.Component {

  render() {
    const { styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <section id="intro" {...css(styles.intro)}>
          <div {...css(styles.intro_words_container)}>
            <h1 {...css(styles.intro_header)}>Stephen Dorn</h1>
            <p {...css(styles.intro_p)}>I am a Master's student in Biomedical Data Science at UW-Madison working with Prof. <a {...css(styles.intro_p_link)} href="https://qlu-lab.org/" target="_blank"
                  rel="noopener noreferrer">Qiongshi Lu</a>. I am applying for PhD programs for Fall 2025. You can view my <a {...css(styles.intro_p_link)} href="https://drive.google.com/file/d/1MEEB5EIy-d1WTwfebV4ZQG41C48lLOGY/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV here</a>. My research interests are:
            </p>
            <ResearchList />
          </div>
          <div {...css(styles.social)}>
            <Social />
          </div>
        </section>
        <section id="publications" {...css(styles.publications_container)}>
          <h1 {...css(styles.publications_header)}>Publications</h1>
          <div>
            <p>I am applying for PhD programs for Fall 2025. You can view my <a {...css(styles.publication_name)} href="https://drive.google.com/file/d/1MEEB5EIy-d1WTwfebV4ZQG41C48lLOGY/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV here</a>.</p>
            {publications.map(publication => (
                  <p
                    key={publication.name}
                    {...css(styles.publication)}
                  >
                    <div {...css(styles.publication_name_container)}>
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...css(styles.publication_name)}
                      >
                        {publication.name}
                      </a>
                    </div>
                    {publication.authors}
                    <div {...css(styles.publication_journal)}><b>{publication.journal}</b></div>
                    <div>
                    {publication.published_journal ? 
                      <a 
                        href={publication.published_journal} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Chip
                          key={`journal${publication.name}`}
                          label={"Journal"}
                          {...css(styles.chip)}
                        />
                      </a> : <></>}
                    {publication.preprint ? 
                      <a 
                        href={publication.preprint} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Chip
                          key={`preprint${publication.name}`}
                          label={"Preprint"}
                          {...css(styles.chip)}
                        />
                      </a> : <></>}
                      {publication.software ? 
                        <a 
                          href={publication.software.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Chip
                            key={`software${publication.software.name}`}
                            label={`Software: ${publication.software.name}`}
                            {...css(styles.chip)}
                          />
                          </a> : <></>}
                    </div>
                  </p>
                ))}
            <p><b>*</b> indicates authors with equal contribution</p>
          </div>
        </section>
        <section id="software" {...css(styles.software)}>
          <div {...css(styles.software_list)}>
            <h1>Software</h1>
            <SoftwareList />
          </div>
        </section>
        <section id="contact" {...css(styles.contact)}>
          <h1>Contact Me!</h1>
          <p {...css(styles.contact_paragraph)}>
            Please feel free to contact me for any reason, I{"'"}d love to talk!
          </p>
          <div {...css(styles.contact_img_container)}>
            <img
              src="/images/people/einstein.png"
              alt="Stephen Dorn"
              {...css(styles.contact_img)}
            />
          </div>
          <div>
            <Icon {...css(styles.contact_icon)}>email</Icon>{" "}
            svdorn@wisc.edu
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    marginTop: "-80px"
  },
  /* intro section styling */
  intro: {
    backgroundColor: color.primary,
    height: "calc(100vh)",
    minHeight: "600px",
    "@media (min-height: 900px)": {
      height: "900px"
    },
    "@media (max-width: 1050px)": {
      height: "auto",
      paddingTop:"120px",
      paddingBottom: "60px"
    },
    "@media (max-width: 500px)": {
      paddingTop:"100px",
    }
  },

  intro_words_container: {
    verticalAlign: "middle",
    width: "1030px",
    paddingTop: "8%",
    margin: "auto",
    color: "white",
    "@media (max-width: 1050px)": {
      width: "80%",
    },
    "@media (max-width: 500px)": {
      width: "90%"
    }
  },

  intro_header: {
    fontSize: "36px",
    fontWeight: "800",
    "@media (max-width: 1000px)": {
      fontSize: "32px"
    },
    "@media (max-width: 500px)": {
      fontSize: "25px"
    }
  },

  intro_p: {
    fontSize: "24px",
    "@media (max-width: 1000px)": {
      fontSize: "20px"
    },
    "@media (max-width: 500px)": {
      fontSize: "18px"
    }
  },
  intro_p_link: {
    color: "white",
    fontWeight: "700",

  },

  /* publications section */
  publications_container: {
    padding: "40px 0",
    color: color.black,
    fontSize: "18px",
    width: "750px",
    display: "inline-block",
    textAlign: "left",
    "@media (max-width: 760px)": {
      width: "90%",
      fontSize: "16px"
    }
  },
  publications_header: {
    textAlign: "center",
  },
  publication: {
    margin: "50px auto",
    "@media (max-width: 760px)": {
      margin: "40px auto",
    }
  },

  publication_name_container: {
    margin: "5px 0"
  },
  publication_name: {
    color: color.primary,
    fontSize: "20px",
    textDecoration: "none",
    "@media (max-width: 760px)": {
      fontSize: "18px"
    },
    ":hover": {
      textDecoration: "underline"
    }
  },
  publication_journal: {
    margin: "5px 0"
  },

  icons: {
    position: "absolute",
    color: "white",
    bottom: "15%",
    right: "0",
    left: "0",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (max-width: 1000px)": {
      position: "relative",
      paddingTop: "50px",
      bottom: "auto"
    }
  },

  icon: {
    display: "inline-block",
    padding: "0 30px",
    "@media (max-width: 1000px)": {
      padding: "10px 20px"
    }
  },

  icon_img: {
    padding: "10px 0",
    height: "120px",
    "@media (max-width: 1000px)": {
      height: "70px"
    }
  },

  social: {
    position: "absolute",
    bottom: "4%",
    right: "0",
    left: "0",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (min-height: 900px)": {
      display: "none"
    },
    "@media (max-width: 1050px)": {
      display: "none"
    }
  },

  chip: {
    backgroundColor: color.primary,
    color: color.white,
    margin: "5px 10px 5px -3px",
    opacity: "1",
    ":hover": {
      opacity: "0.7",
      cursor: "pointer"
    }
  },
  
  /* software section styling */
  software: {
    
  },

  software_list: {
    color: color.primary,
    backgroundColor: color.secondary,
    padding: "60px 0",
    width: "100%"
  },
  /* contact section styling */
  contact: {
    padding: "60px 0 40px 0"
  },

  contact_paragraph: {
    margin: "auto",
    width: "92%"
  },

  contact_img_container: {
    display: "inline-block",
    margin: "10px",
    height: "130px",
    width: "130px",
    backgroundColor: color.primary,
    borderRadius: "50%"
  },

  contact_img: {
    paddingTop: "15px",
    height: "90px"
  },

  contact_icon: {
    color: color.primary,
    verticalAlign: "middle",
    marginRight: "5px"
  }
}))(Home);
