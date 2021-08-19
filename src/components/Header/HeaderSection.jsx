import React from "react";
import { Link } from "react-router-dom";

import {
  Header,
  HeaderName,
  SkipToContent,
  HeaderNavigation,
  HeaderMenuItem,
} from "carbon-components-react";

const HeaderSection = () => {
  return (
    <Header aria-label="Carbon Tutorial">
      <SkipToContent />
      <HeaderName element={Link} to="/" prefix="MAP">
        My Shifter
      </HeaderName>
      <HeaderNavigation aria-label="Side navigation">
        <HeaderMenuItem element={Link} to="/from_stix">
          From STIX
        </HeaderMenuItem>
        <HeaderMenuItem element={Link} to="/to_stix">
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
