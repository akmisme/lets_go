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
  // Our Mission and Vision
  Mission_List: `${API_BASE_URL}/mission`,
  Vision_List: `${API_BASE_URL}/vision`,
  // FAQ
  FAQ_List: `${API_BASE_URL}/faq`,
  // Exps
  Yg_Exp_List: `${API_BASE_URL}/ygnexperience`,
  Mdy_Exp_List: `${API_BASE_URL}/mdyexperience`,
  Bg_Exp_List: `${API_BASE_URL}/bgexperience`,
  Tgi_Exp_List: `${API_BASE_URL}/tgexperience`,
  Inle_Exp_List: `${API_BASE_URL}/inlexperience`,
};
