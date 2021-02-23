import React from "react";
// @material-ui/core components
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import image2 from "Images/shutterstock_52966966_1611162450_e160733cda770f998bac3d20a2d044ab68.jpg";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center" style={{color:"black"}}>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Make Your Bathroom More High-End</h2>
          <p className={classes.description}>
            Start With A Custom Shower installation In Maumelle, AR Or Elsewhere In The State
          </p>
          <p className={classes.description}>
            Are you interested in custom glass shower installation services? If so, Arkansas Walk-In Tub and Shower is the company for you. 
            We offer comprehensive custom shower installation services to residents of Maumelle, AR and the entire state.
          </p>
          <p className={classes.description}>
            If you have mobility issues, we'll design a shower that is safe, beautiful and useful. 
            Plus, we offer discounts for Medicare recipients.
            Our goal is to help you love your bathroom more. Contact us today to learn more
          </p>

        </GridItem>
      </GridContainer>
      <br></br>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title} align="left">
              Installing All Types Of High-end Showers
            </h3>
            <p className={classes.description} align="left">
              We can handle:
            </p>
            <ul style={{color:"black"}} align="left">
              <li>Custom glass shower installation</li>
              <li>Walk-in shower installation</li>
              <li>Luxury shower installation</li>
            </ul>
            <p className={classes.description} align="left">Not sure exactly what you need? 
            Call today to discuss your options with a highly trained professional. 
            We'll help you make the best decision for your lifestyle needs.</p>
            <h5 align="left">
                <Link to="/Contact" className={classes.dropdownLink} style={{ textDecoration: 'none', color: 'dark'}}>
                  Contact Us
                </Link>
              </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}




