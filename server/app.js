const express = require("express");
const app = express();
const port = 3020;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.headers.cookie);
  console.log(req.cookies);
  res.json("Hello World!");
});

app.post("/login", function (req, res, next) {
  const access_token = "Bearer abc";
  res.cookie("access_token", access_token, {
    expires: new Date(Date.now() + 3600 * 1000 * 24 * 180 * 1), //second min hour days year
    secure: true, // set to true if your using https or samesite is none
    httpOnly: true, // backend only
    sameSite: "none", // set to none for cross-request
  });

  res.json({ msg: "Login Successfully", access_token });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} with CORS`);
});
