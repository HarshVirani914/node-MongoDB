import { Router } from "express";

const router = Router();

// /api/item
router
  .route("/")
  .get((req, res) => {
    res.send({ msg: "Hello World!" });
  })
  .post((req, res) => {
    res.send({ msg: "Hello World!" });
  });

// /api/item/:id
router
  .route("/:id")
  .get((req, res) => {
    res.send({ msg: "Hello World!" });
  })
  .put((req, res) => {
    res.send({ msg: "Hello World!" });
  })
  .delete((req, res) => {
    res.send({ msg: "Hello World!" });
  });

export default router;
