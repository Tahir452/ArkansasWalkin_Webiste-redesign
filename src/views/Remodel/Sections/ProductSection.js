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
import image2 from "Images/shutterstock_365002559_1611162417_e127039ce25eb6c37e5727d9b2b97c84bb.jpg";
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
          <h2 className={classes.title}>Ready to Remodel?</h2>
          <p className={classes.description}>
            We offer Bathroom Remodeling Services In Maumelle, AR And The Entire State
          </p>
          <p className={classes.description}>
            If your bathroom is starting to look outdated, it's time to call Arkansas Walk-In Tub and Shower. 
            Residents of Maumelle, AR and the rest of the state rely on us for high-quality bathroom remodeling services. Because we specialize in installing walk-in tubs, 
            we understand the unique needs of those with mobility issues.
          </p>
          <p className={classes.description}>
            Of course, you don't have to experience mobility issues to work with us. We also offer electrical, 
            flooring and custom bathroom cabinet installation services. 
            Schedule an appointment today to make your home better fit your needs and style.
          </p>

        </GridItem>
      </GridContainer>
      <br></br>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title} align="left">
              We Will Handle Every Step Of The Project
            </h3>
            <p className={classes.description} align="left">
              Our team will:
            </p>
            <ul style={{color:"black"}} align="left">
              <li>Wire the space</li>
              <li>Install tile flooring</li>
              <li>Handle the plumbing work</li>
              <li>Install custom bathroom cabinets</li>
            </ul>
            <p className={classes.description} align="left">All you have to do is sit back and relax while we get to work. Call today to set up your appointment.</p>
            <h5 align="left">
                <Link to="/Contact" className={classes.dropdownLink}>
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




