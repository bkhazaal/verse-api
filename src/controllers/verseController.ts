import { Request, Response } from "express";
import { db } from "../db";

export const getAllVerses = async (req: Request, res: Response) => {
  const [rows] = await db.query("SELECT * FROM Verse");
  res.json(rows);
};

export const getVerseById = async (req: Request, res: Response) => {
  const [rows]: [any[], any] = await db.query(
    "SELECT * FROM Verse WHERE id = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const createVerse = async (req: Request, res: Response) => {
  const { reference, text, theme, notes, userId } = req.body;
  await db.query(
    "INSERT INTO Verse (reference, text, theme, notes, userId) VALUES (?, ?, ?, ?, ?)",
    [reference, text, theme, notes, userId]
  );
  res.status(201).json({ message: "Verse created" });
};

export const updateVerse = async (req: Request, res: Response) => {
  const { reference, text, theme, notes, userId } = req.body;
  await db.query(
    "UPDATE Verse SET reference=?, text=?, theme=?, notes=?, userId=? WHERE id=?",
    [reference, text, theme, notes, userId, req.params.id]
  );
  res.json({ message: "Verse updated" });
};

export const deleteVerse = async (req: Request, res: Response) => {
  await db.query("DELETE FROM Verse WHERE id = ?", [req.params.id]);
  res.json({ message: "Verse deleted" });
};
