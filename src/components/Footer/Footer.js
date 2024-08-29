import React from "react";
import classNames from "classnames";
//styles
import { useFooterStyles } from "./Footer.styles";
import { useAppStyles } from "../App/App.styles";
//components
import { Conntainer } from "../Container/Container";
//const
import { FOOTER_SETTING } from "../../constans/footerSetting";

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
          {FOOTER_SETTING.map(section => (
            <div key={section.id}>
              <div className={classes.contactsTitle} href="#">
                {section.name}
              </div>
              {section.links.map(link => (
                <a className={classes.contactsDescr} href={link.link} key={link.name}>
                  {link.name}
                </a>
              ))}
            </div>
          ))}
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
