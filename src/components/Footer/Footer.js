import React from "react";
import classNames from "classnames";
//styles
import { useFooterStyles } from "./Footer.styles";
import { useAppStyles } from "../App/App.styles";
//components
import { Conntainer } from "../Container/Container";

export const Footer = () => {
  const classes = useFooterStyles();
  const mediaClasses = useAppStyles();
  return (
    <footer className={classes.footer}>
      <Conntainer>
        <svg className={classes.logo}>
          <use href="./src/img/icons/logo-vector.svg#logo-footer" />
        </svg>

        <div className={classes.contacts}>
          <div>
            <div className={classes.contactsTitle} href="#">
              About
            </div>
            <a className={classes.contactsDescr} href="#">
              How Triphouse works
            </a>
            <a className={classes.contactsDescr} href="#">
              Careers
            </a>
            <a className={classes.contactsDescr} href="#">
              Privacy
            </a>
            <a className={classes.contactsDescr} href="#">
              Terms
            </a>
          </div>
          <div>
            <div className={classes.contactsTitle} href="#">
              Property types
            </div>
            <a className={classes.contactsDescr} href="#">
              Guest houses
            </a>
            <a className={classes.contactsDescr} href="#">
              Hotels
            </a>
            <a className={classes.contactsDescr} href="#">
              Apartments
            </a>
            <a className={classes.contactsDescr} href="#">
              Villas
            </a>
            <a className={classes.contactsDescr} href="#">
              Holiday homes
            </a>
            <a className={classes.contactsDescr} href="#">
              Hostels
            </a>
          </div>
          <div>
            <div className={classes.contactsTitle} href="#">
              Support
            </div>
            <a className={classes.contactsDescr} href="#">
              Contact Customer Service
            </a>
            <a className={classes.contactsDescr} href="#">
              FAQ
            </a>
          </div>
        </div>
        <strong
          className={classNames(
            classes.copyright,
            mediaClasses.colXs3,
          )} 
        >
          &copy; 2020 Triphouse, Inc. All rights reserved
        </strong>
      </Conntainer>
    </footer>
  );
};
