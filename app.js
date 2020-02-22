import "core-js"
import express from "express";
import morgan from "morgan";
import helmet from "helmet"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter"
import routes from "./routes"
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);



export default app;