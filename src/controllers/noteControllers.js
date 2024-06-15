const noteModel = require("../models/note");

const createNote = async (req, res) => {
  const { title, content } = req.body;
  const newNote = new noteModel({
    title: title,
    description: description,
    user: req.userId,
  });
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({ userId: req.userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  const newNote = {
    title: title,
    description: description,
    userId: req.userId,
  };
  try {
    await noteModel.findByAndUpdate(id, newNote, { new: true });
    res.status(200).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await noteModel.findByIdAndDelete(id);
    res.status(200).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
};
