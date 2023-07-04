const express = require("express");
const app = express();

const port = process.env.PORT || 9600;
const { ErrorHandler } = require("./src/middleware");

app.use(express.urlencoded({ extended: true }));     
app.use(express.json());

app.use("/", require("./src/routes/index.routes"));
app.listen(port, () => console.log(`Server is Listening on Port:- ${port}`));
app.use(ErrorHandler);