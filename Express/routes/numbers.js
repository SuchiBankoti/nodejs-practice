const express = require("express");
const { writeFile } = require("fs");
const router = express.Router();
const uuid = require("uuid");
const numbers = require("../data.json");

//get all elements
router.get("/", (req, res) => res.json(numbers));

//get elements by id
router.get("/:id", (req, res) => {
  const i = parseInt(req.params.id);
  const found = numbers.some((e) => e.id === i);
  if (!found) {
    res.status(400).json({ message: `number with id ${i} doesnot exist` });
  } else {
    res.json(numbers.filter((e) => e.id === i));
  }
});

//create element and post

router.post("/", (req, res) => {
  const newElement = {
    ...req.body,
    id: uuid.v4(),
  };
  if (!newElement.number) {
    res.status(400).json({ message: "please include a number" });
  } else {
    res.send(newElement);
  }
});

router.put("/:id", (req, res) => {
  const i = parseInt(req.params.id);
  const found = numbers.some((e) => e.id === i);
  if (!found) {
    res.status(400).json({ message: `number with id ${i} doesnot exist` });
  } else {
    const newNumbers = numbers.map((e) =>
      e.id === i ? { ...e, ...req.body } : e
    );
    res.json(newNumbers);
  }
});

module.exports = router;
