import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import routerPath from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routerPath);
app.use(express.static(join(__dirname, "public")));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`escuchando en el puerto ${PORT}`);
});
