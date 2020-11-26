import React from "react";
import { Helmet } from "react-helmet";

const SEO = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  );
};

export default SEO;
