const db = require("../models");
const Cube = db.cubes;
const Op = db.Sequelize.Op;

// Create and Save a new Cube
exports.create = (req, res) => {
  // Validate request
  if (!req.body.brand || !req.body.model){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Cube
  const cube = {
    brand: req.body.brand,
    model: req.body.model,
    filename: req.file ? req.file.filename : ""
  }

  // Save Cube in the database
  Cube.create(cube).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the cube"
    })
  });
};

// Retrieve all Cubes from the database.
exports.findAll = (req, res) => {
  Cube.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Cubes"
    })
  })
};

// Find a single Cube with an id
exports.findOne = (req, res) => {

}

// Update a Cube by the id in the request
exports.update = (req, res) => {

};

// Delete a Cube with the specified id in the request
exports.delete = (req, res) => {

};
