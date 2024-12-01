// src/modules/authentication/interfaces/user.interface.ts

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

}
