export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export type ReservationStatus = "ACTIVE" | "CANCELLED";

export interface Equipment {
  id: number;
  name: string;
  description: string;
  location: string;
  maxHr: number;
  avUnits: number;
}

export interface User {
  id: number;
}
//no se donde esta el backend
