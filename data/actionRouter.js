const express = require('express');

const router = express.Router();
const action = require("./helpers/actionModel")






//??
router.post('/:id/actions', (req, res)=>{
    action.insert({ ...req.body, id: req.params.id, project_id: req.params.project_id })
    
    .then((newaction)=>{
        res.status(201).json(newaction)
    })
    .catch((error)=>{
        res.status(500).json({
            error: "The post information could not be modified."
        })
    })
})

//works
router.delete('/actions/:id', (req, res)=>{
    action.remove(req.params.id)
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
router.put('/actions/:id', (req, res)=>{
    action.update(req.params.id, req.body)
    .then((action) => {
            res.status(200).json(action)
                .catch((error) => {
                    res.status(404).json({
                        message: "The post with the specified ID does not exist."
                    })
                })
        })
})


module.exports = router;

