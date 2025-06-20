import { Request, Response } from "express";
import { AppDataSource } from "../config/ormconfig";
import { Task } from "../entities/task.entity";

const taskRepo = AppDataSource.getRepository(Task);

export const getTasks = async ( req: any, res: any) => {
  const tasks = await taskRepo.find();
  return res.json(tasks);
};

export const createTask = async (req: any, res: any) => {
  const { title, description, status, dueDate } = req.body;
  const task = taskRepo.create({ title, description, status, dueDate });
  const result = await taskRepo.save(task);
  return res.status(201).json(result);
};

export const updateTask = async (req: any, res: any) => {
  const { id } = req.params;
  const data = req.body;

  const task = await taskRepo.findOneBy({ id });
  if (!task) return res.status(404).json({ error: "Task not found" });

  taskRepo.merge(task, data);
  const result = await taskRepo.save(task);
  return res.json(result);
};

export const deleteTask = async (req: any, res: any) => {
  const { id } = req.params;

  const result = await taskRepo.delete(id);
  if (!result.affected) return res.status(404).json({ error: "Task not found" });

  return res.json({ message: "Task deleted" });
};
