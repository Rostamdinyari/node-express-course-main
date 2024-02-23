const { json } = require('express')
const Task = require('../models/task')

const getAllTasks = async (req,res)=>{
  try{
    const tasks = await Task.find({})
    res.status(200).json({tasks})

  }catch(error){
    res.status(500).json({msg: error})
  }
   res.send('get All tasks')
}

const createTask = async (req,res)=>{
  try{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    console.log(task)
  }catch(error){
    res.status(500).json({msg: error})
  }
}

const getTask = async(req,res)=>{ 
  try{
    const {id: taskID} = req.params
    const task = await Task.findOne({_id: taskID})
  if(!task){
      return res.status(404).json({msg: `This ID is not valis ${task}`})
    }
    res.status(200).json({task})    
  }catch(error){
    res.status(500).json({error})
  }  
}

const updateTask = async (req,res)=>{
  try {
    const {id: taskID} = req.params
    const task = await Task.findOneAndUpdate({_id: taskID},req.body,{new:true,runValidators: true})
    if(!task){
      return res.status(404).json({msg: `This ID is not valis ${task}`})
    } 
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({error})
  }
  
}

const deleteTask = async (req,res)=>{
  try {
    const {id: taskID} = req.params
    const task = await Task.findOneAndDelete({_id: taskID})    
    if(!task){
      return res.status(404).json({msg:`This ID is not valid ${task}`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: error})  
    return  
  }
  res.json({id: req.params.id})
}

module.exports = {getAllTasks, createTask,getTask,updateTask,deleteTask}