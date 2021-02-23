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
import image2 from "Images/ftimg.jpg";
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
          <h2 className={classes.title}>Enjoy Bathing Again</h2>
          <p className={classes.description}>
            Schedule A Walk-In Tub Installation In Maumelle, AR Or Elsewhere In The State
          </p>
          <p className={classes.description}>
            Arkansas Walk-In Tub and Shower offers accessible tub installation services to residents of Maumelle, 
            AR and the entire state. If you have mobility issues that make it difficult 
            for you to get in and out of the tub, a walk-in tub installation may be exactly what you need.
          </p>
          <p className={classes.description}>
            You shouldn't have to worry about your safety in the comfort of your own home. 
            Schedule an appointment today to make your bathroom more comfortable.
          </p>

        </GridItem>
      </GridContainer>
      <br></br>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title} align="left">
              Installing All Types Of High-End Showers
            </h3>
            <p className={classes.description} align="left">
              An installed Walk-In Tub can Allow you to:
            </p>
            <ul style={{color:"black"}} align="left">
              <li>Enjoy a nice hot bath at home</li>
              <li>Get peace of mind that you won't injure yourself</li>
              <li>Increase your property value</li>
            </ul>
            <p className={classes.description} align="left">So, what are you waiting for? Call today to set 
            up your walk-in tub installation.</p>
            <h5 align="left">
                <Link to="/Contact" className={classes.dropdownLink} >
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
