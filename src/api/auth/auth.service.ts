import type { SignUpRequest, SignInRequest, AuthResponse } from './auth.types'
import * as authApi from './auth.api'
import * as authMock from './auth.mock'

// Switch between real API and mock
// Set to true to use mock, false to use real API
const USE_MOCK = true

export const signUp = async (data: SignUpRequest): Promise<AuthResponse> => {
  try {
    if (USE_MOCK) {
      return await authMock.mockSignUp(data)
    }
    return await authApi.signUp(data)
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred during sign up',
    }
  }
}

export const signIn = async (data: SignInRequest): Promise<AuthResponse> => {
  try {
    if (USE_MOCK) {
      return await authMock.mockSignIn(data)
    }
    return await authApi.signIn(data)
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred during sign in',
    }
  }
}

export const forgotPassword = async (email: string): Promise<AuthResponse> => {
  try {
    if (USE_MOCK) {
      return await authMock.mockForgotPassword(email)
    }
    return await authApi.forgotPassword(email)
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred',
    }
  }
}
