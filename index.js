const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const experienceRouter = require("./routers/experience");
const projectRouter = require("./routers/project");
const app = express();

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

app.use("/", authRouter);
app.use("/user", userRouter);
app.use("/experience", experienceRouter);
app.use("/project", projectRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = router;
