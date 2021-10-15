import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useState, useEffect } from "react";

const articleServices = () => {
  return axiosWithAuth()
    .get("http://localhost:5000/api/articles")
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default articleServices;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
