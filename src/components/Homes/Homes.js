import React, { useMemo } from "react";
import PropTypes from "prop-types";

//components
import { Conntainer } from "../Container";
import { Card } from "../Card";
import { BtnArrow } from "../BtnArrow/";
import { useSliderButtonStyles } from "../Button/Button.styles";
import { useHomesStyles } from "./Homes.styles";

export const Homes = ({ title, dataHomes }) => {
  const btnStyles = useSliderButtonStyles();
  const classes = useHomesStyles();

  const prepareHotels = useMemo(
    () => (dataHomes.length > 4 ? dataHomes.slice(0, 4) : dataHomes),
    [dataHomes],
  );

  return (
    <section className={classes.homes}>
      <Conntainer>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.sliderItems}>
          {prepareHotels.map((data) => (
            <Card key={data.id} {...data} />
          ))}
          {dataHomes.length >= 4 && (
            <BtnArrow
              className={classes.rightArrow}
              classNameBtn={btnStyles.root}
            />
          )}
        </div>
      </Conntainer>
    </section>
  );
};

Homes.propTypes = {
  title: PropTypes.string.isRequired,
  dataHomes: PropTypes.arrayOf(PropTypes.element).isRequired,
};
