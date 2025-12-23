import React from "react";
import AboutUs from "../[locale]/aboutus/page";
import OurValue from "../components/ourvalues";

// Base URLs
export const API_BASE_URL = "http://localhost:8000/api";
export const Image_URL = "http://localhost:8000";

//  API Endpoints
export const ENDPOINT = {
  // About Us
  AboutUs_List: `${API_BASE_URL}/aboutus`,
  // Our Value
  OurValue_List: `${API_BASE_URL}/ourvalue`,
  // Executive Team
  ExTeam_List: `${API_BASE_URL}/executiveteam`,
};
