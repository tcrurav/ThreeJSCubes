module.exports = app => {
  const cubes = require("../controllers/cube.controller");

  var router = require("express").Router();

  // Create a new Cube
  router.post("/", cubes.create);

  // Retrieve all Cubes
  router.get("/", cubes.findAll);

  // Retrieve a single Cube with id
  router.get("/:id", cubes.findOne);

  // Update a Cube with id
  router.put("/:id", cubes.update);

  // Delete a Cube with id
  router.delete("/:id", cubes.delete);

  app.use("/api/cubes", router);
}