// The user and verse types for the application
// are defined here to ensure type safety across the application.
export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
}

export interface Verse {
  id: number;
  reference: string;
  text: string;
  theme: string;
  notes: string;
  userId: number;
}
