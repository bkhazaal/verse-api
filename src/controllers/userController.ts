import { Request, Response } from "express";
import { db } from "../db";

export const getAllUsers = async (req: Request, res: Response) => {
  const [rows] = await db.query("SELECT id, name, email FROM User");
  res.json(rows);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, passwordHash } = req.body;
  await db.query(
    "INSERT INTO User (name, email, passwordHash) VALUES (?, ?, ?)",
    [name, email, passwordHash]
  );
  res.status(201).json({ message: "User created" });
};

export const getUserById = async (req: Request, res: Response) => {
  const [rows]: [any[], any] = await db.query(
    "SELECT id, name, email FROM User WHERE id = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const updateUser = async (req: Request, res: Response) => {
  const { name, email, passwordHash } = req.body;
  await db.query("UPDATE User SET name=?, email=?, passwordHash=? WHERE id=?", [
    name,
    email,
    passwordHash,
    req.params.id,
  ]);
  res.json({ message: "User updated" });
};

export const deleteUser = async (req: Request, res: Response) => {
  await db.query("DELETE FROM User WHERE id = ?", [req.params.id]);
  res.json({ message: "User deleted" });
};
