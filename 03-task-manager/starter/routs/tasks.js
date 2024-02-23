const express = require('express');
const router = express.Router();
const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../contorels/tasks')



router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


//router.route('/').post()



module.exports = router;