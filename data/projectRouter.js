const express = require('express');

const router = express.Router();
const project = require("./helpers/projectModel")
const action = require("./helpers/actionModel")


//works
router.get('/projects', (req, res) => {
  project.get()
    .then((action) => {
      res.status(200).json(action)
    })
    .catch((error) => {
      next(error)
    })
});

router.get('/projects/:id', (req, res) => {
  project.getProjectActions(req.params.id)
    .then((actions) => {
      res.status(200).json(actions)
    })

    .catch((error) => {
      res.status(500).json({
        error: "The post information could not be modified."

      })
    })
})

//works
router.post('/projects', (req, res) => {
  project.insert(req.body)

    .then((newProject) => {
      res.status(201).json(newProject)
    })
    .catch((error) => {
      res.status(500).json({
        error: "The post information could not be modified."
      })
    })
})

//works
router.delete('/projects/:id', (req, res) => {
  project.remove(req.params.id)
    .then((action) => {
      res.status(200).json({
        message: "The user has been deleted"
      })
        .catch((error) => {
          res.status(404).json({
            message: "The post with the specified ID does not exist."
          })
        })
    })
})

//works
router.put('/projects/:id', (req, res) => {
  project.update(req.params.id, req.body)
    .then((project) => {
      res.status(200).json(project)
        .catch((error) => {
          res.status(404).json({
            message: "The post with the specified ID does not exist."
          })
        })
    })
})

module.exports = router;
