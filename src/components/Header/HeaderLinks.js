/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to={"/landing-page"} style={{ textDecoration: 'none', color: 'white' }}><Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           Home
        </Button></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/walk"} style={{ textDecoration: 'none', color: 'white' }}><Button

          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           Walk-in Tubs
          </Button></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/custom"} style={{ textDecoration: 'none', color: 'white' }}><Button

          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           Custom Showers
          </Button></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/remodel"} style={{ textDecoration: 'none', color: 'white' }}><Button
          
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           Bathroom Remodeling
          </Button></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Reach Us Here"
          hovercolor="transparent"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/Contact" className={classes.dropdownLink} style={{ textDecoration: 'none', color: 'black'}}>
              Contact us
            </Link>,
            <Link to="/review" className={classes.dropdownLink} style={{ textDecoration: 'none', color: 'black'}}>
              Leave A Review
            </Link>
          ]}
        />
      </ListItem>

    </List>
  );
}
