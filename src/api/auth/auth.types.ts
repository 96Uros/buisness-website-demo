export interface SignUpRequest {
  username: string
  email: string
  password: string
  reenterPassword: string
}

export interface SignInRequest {
  email: string
  password: string
}

export interface User {
  id: string
  username: string
  email: string
}

export interface AuthResponse {
  success: boolean
  user?: User
  token?: string
  message?: string
}

export interface AuthError {
  message: string
  code?: string
}
