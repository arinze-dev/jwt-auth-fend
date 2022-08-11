"use strict";

var _reactRouterDom = require("react-router-dom");

function Logout() {
  return fetch("http://localhost:4000/api/logout", {
    method: "get"
  }).then(function (res) {
    res.json("loged out");
    console.log(res.json());
  });
}