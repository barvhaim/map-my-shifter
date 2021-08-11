import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { STIX_VERSION } from "../../global/constants";
import { changeStixVersion } from "../../store/actions/stix";

import {
  Header,
  HeaderName,
  SkipToContent,
  HeaderNavigation,
  HeaderMenuItem,
} from "carbon-components-react";

const HeaderSection = () => {
  const dispatch = useDispatch();
  return (
    <Header aria-label="Carbon Tutorial">
      <SkipToContent />
      <HeaderName element={Link} to="/" prefix="MAP">
        My Shifter
      </HeaderName>
      <HeaderNavigation aria-label="Side navigation">
        <HeaderMenuItem
          element={Link}
          to="/from_stix"
          onClick={() => dispatch(changeStixVersion(STIX_VERSION.V_2_0))}
        >
          From STIX
        </HeaderMenuItem>
        <HeaderMenuItem
          element={Link}
          to="/to_stix"
          onClick={() => dispatch(changeStixVersion(STIX_VERSION.V_2_0))}
        >
          To STIX
        </HeaderMenuItem>
        <HeaderMenuItem element={Link} to="/about">
          About
        </HeaderMenuItem>
      </HeaderNavigation>
    </Header>
  );
};
export default HeaderSection;
