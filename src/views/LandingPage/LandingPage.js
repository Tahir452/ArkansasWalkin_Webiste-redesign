import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

// Sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import water from "Images/watergif.mp4";

import styles from "assets/jss/material-kit-react/views/landingPage.js";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Arkansas Walkin Tub And Shower"
        rightLinks={<HeaderLinks 
          changeColorOnScroll={{
            height: 0,
            textColor: "black"
          }}
        />}
        fixed
        changeColorOnScroll={{
          height: 250,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax filter image={require("Images/sidekix-media-g51F6-WYzyU-unsplash.jpg")}>
        <div className={classes.container}>
          <GridContainer>

            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}></h1>
              <h2 align="center">
                Interested in Custom-Fitted Glass?
              </h2>
              <h5 align="center">
                We offer custom shower installation in Maumelle, AR and the rest of the state
              </h5>
              <h5 align="center">
                <Link to="/Contact" className={classes.dropdownLink} style={{ textDecoration: 'none', color: 'white'}}>
                  <Button 
                    color="black"
                    target="_blank"
                    className={classes.navLink}>
                      Get Started Now
                  </Button>
                </Link>
              </h5>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
