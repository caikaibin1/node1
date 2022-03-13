const express = require("express");

const router = express.Router();

router.get("/user/list", (req, res) => {
  let url = req.url;
  console.log("这是get请求");
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send("{name:'你是'}" + url);
});

router.get("/user/name", (req, res) => {
  let url = req.url;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send("这是get请求," + url);
});

module.exports = router;
