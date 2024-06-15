const express = require("express");
const noteRouter = express.Router();

const auth = require("../middleware/auth");
const {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} = require("../controllers/noteControllers");

noteRouter.get("/", auth, getNotes);

noteRouter.post("/create", auth, createNote);

noteRouter.delete("/:id", auth, deleteNote);

noteRouter.put("/:id", auth, updateNote);

module.exports = noteRouter;
