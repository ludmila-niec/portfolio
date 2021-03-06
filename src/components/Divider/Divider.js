import React from "react";
import { DividerContainer, CurveSVG } from "./styled";

const Divider = ({ fill, className }) => {
  return (
    <DividerContainer className={className}>
      <CurveSVG
        width="1444"
        height="315"
        viewBox="0 0 1444 315"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M146.5 78.0977C121 54.2005 71.3508 -3.54159 0 0.17093V315H1444V0.17093H1416C1364.58 5.83338 1336.46 29.9348 1286.5 78.0977C1218.23 112.539 1180.51 110.691 1114 78.0977C1057.37 22.0425 1024.08 -1.30666 956.5 0.17093C880.211 2.75501 855 35.8444 810 78.0977C765 120.351 667.5 111.347 630 78.0977C592.5 44.8486 546.102 -2.41471 478.5 0.17093C410.898 2.75657 365.5 30.9956 317 78.0977C268.5 125.2 172 101.995 146.5 78.0977Z"
          fill={fill || "#DCD1EF"}
        />
      </CurveSVG>
    </DividerContainer>
  );
};

export default Divider;
