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

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import image2 from "Images/b-3260210slw-32-inch-by-60-inch-walk-in-bath.jpg";
import image3 from "Images/shutterstock_52966966_1611162450_e160733cda770f998bac3d20a2d044ab68.jpg";
import image4 from "Images/shutterstock_525808891_1611162299_e1f90999955d8d7606c726daf487c395c2.jpg";
import image5 from "Images/shutterstock_365002559_1611162417_e127039ce25eb6c37e5727d9b2b97c84bb.jpg";
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
          <h2 className={classes.title}>Create Your Own At-Home Spa</h2>
          <p className={classes.description}>
            Get Help From A Higly Qualified Walk-In Tub Installer Serving Maumelle, AR And The Entire State</p>
          <p className={classes.description}>
            Everyone deserves to have a comfortable bathroom. 
            If you aren't able to use yours the way you want to due to safety concerns, 
            you should consider hiring a walk-in tub installer. Arkansas Walk-In Tub and 
            Shower is a premier walk-in tub company serving residents of Maumelle, AR and the rest of the state.
          </p>
          <p className={classes.description}>
            When you work with us, you'll know you're getting high-quality work.
            We also offer other types of bathroom remodeling services, 
            including custom shower installation. Call today to discuss your needs with one 
            of our friendly team members. If you are a Medicare recipient, you may be entitled to a discount.
          </p>

        </GridItem>
      </GridContainer>
      <br></br>
      <br></br>
      <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h4 className={classes.title} align="center">
            Walk-In Tubs
          </h4>
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
        <br></br>
      <br></br>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h4 className={classes.title} align="center">
            Custom Showers
          </h4>
          <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image3}
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
      <br></br>
      <br></br>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6} >
          <h4 className={classes.title} align="center" >
            Bathroom Remodeling
          </h4>
          <Card carousel>
            <Carousel {...settings}>
              <div>
                <img
                  src={image4}
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
      <br></br>
      <br></br>
      <GridContainer justify="center">
        <GridItem>
        <h4 className={classes.title} align="Center">Safety Is Essential</h4>
          <h5 className={classes.description} align="Center">You deserve to have a fully functional and safe bathroom</h5>
              <h5 align="Center">
                  <Link to="/Contact" className={classes.dropdownLink} >
                    Contact Us
                    
                  </Link>
                </h5>
        </GridItem>
        </GridContainer>
      </div>
      <br></br>
      <br></br>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title} align="left">
              About Us
            </h3>
            <p className={classes.description} align="left">
              Why should you choose us as your walk-in tub company in Maumelle, AR or elsewhere in the state?       
            </p>
            <p className={classes.description} align="left">
              Arkansas Walk-In Tub and Shower is:
            </p>
            <ul style={{color:"black"}} align="left">
              <li>Locally owned and operated</li>
              <li>Veteran owned and operated</li>
              <li>Fully licensed and insured</li>
            </ul>
            <p className={classes.description} align="left">Our walk-in tub installers pay 
            close attention to all the details, and we never rush through a job. 
            Schedule an appointment today to discover the difference that comes from working with us.</p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src={image5}
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
        <div>
        <br></br>
      <br></br>
      <GridContainer justify="center">
        <GridItem>
        <h3 className={classes.title} align="Center">How Can We Help You?</h3>
          <p className={classes.description} align="Center">If you're ready to improve your bathroom, you should hire us. We offer:</p>
          <p className={classes.description} align="Center">Walk-in tub installation services | Custom shower installation services | Bathroom remodeling services</p>
          <p className={classes.description} align="Center">We'll work hard to meet your needs and exceed your expectations. Visit our Reviews page today to read what satisfied customers have to say about working with us.</p>
        </GridItem>
        </GridContainer>
      </div>
      </div>
    </div>
  );
}
