import api from "../api/axios";
import type { AuthResponse, LoginDto, RegisterDto } from "../types";

export const login = (loginDto: LoginDto) =>
  api.post<AuthResponse>("/auth/login", loginDto);

export const register = (registerDto: RegisterDto) =>
  api.post<AuthResponse>("/auth/register", registerDto);
