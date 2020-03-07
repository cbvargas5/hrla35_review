const router = require('express').Router();
const controller = require('./controller.js');

// routes getting and adding students
router
  .route('/students')
  .get(controller.students.get)
  .post(controller.students.post)

// routes student name update  
router 
  .route('/students/:id')
  .put(controller.students.update)

module.exports = router