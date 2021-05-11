import express from "express";
import path from "path";
import homeRoutes from "./routes/home";
import specialtyRoutes from "./routes/specialty-pizza";
import reviewRoutes from "./routes/review";
import customRoutes from "./routes/custom-pizza";

const app = express();

//webserver settings
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

//page routes
app.use("/", homeRoutes);
app.use("/special", specialtyRoutes);
app.use("/review", reviewRoutes);
app.use("/custom", customRoutes);

//server port
const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));
