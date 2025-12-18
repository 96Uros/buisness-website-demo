import type { SignUpRequest, SignInRequest, AuthResponse } from './auth.types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

const apiRequest = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }))
    throw new Error(error.message || 'Request failed')
  }

  return response.json()
}

export const signUp = async (data: SignUpRequest): Promise<AuthResponse> => {
  return apiRequest<AuthResponse>('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const signIn = async (data: SignInRequest): Promise<AuthResponse> => {
  return apiRequest<AuthResponse>('/auth/signin', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const forgotPassword = async (email: string): Promise<AuthResponse> => {
  return apiRequest<AuthResponse>('/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}
