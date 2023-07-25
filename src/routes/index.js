import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.render("index", { title: "mi primera pagina" });
});

router.get("/about", (_req, res) => {
  res.render("about");
});

router.get("/contact", (_req, res) => {
  res.render("contact", { info: "12366" });
});

export default router;
