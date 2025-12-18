import type { SignUpRequest, SignInRequest, AuthResponse, User } from './auth.types'

// Internal structure to store users with passwords
interface MockUserWithPassword {
  id: string
  username: string
  email: string
  password: string
}

const mockUsersWithPasswords: MockUserWithPassword[] = [
  {
    id: '1',
    username: 'ukukovec',
    email: 'ukukovec@example.com',
    password: 'password123',
  },
]

// Helper to convert to User (without password)
const toUser = (user: MockUserWithPassword): User => ({
  id: user.id,
  username: user.username,
  email: user.email,
})

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const mockSignUp = async (data: SignUpRequest): Promise<AuthResponse> => {
  await delay(200)

  if (!data.username || !data.email || !data.password) {
    return {
      success: false,
      message: 'All fields are required',
    }
  }

  if (data.password !== data.reenterPassword) {
    return {
      success: false,
      message: 'Passwords do not match',
    }
  }

  if (data.password.length < 6) {
    return {
      success: false,
      message: 'Password must be at least 6 characters',
    }
  }

  // Check if user already exists
  const existingUser = mockUsersWithPasswords.find((u) => u.email === data.email)
  if (existingUser) {
    return {
      success: false,
      message: 'User with this email already exists',
    }
  }

  // Create new user with password
  const newUser: MockUserWithPassword = {
    id: String(mockUsersWithPasswords.length + 1),
    username: data.username,
    email: data.email,
    password: data.password,
  }

  mockUsersWithPasswords.push(newUser)

  return {
    success: true,
    user: toUser(newUser),
    token: `mock-token-${newUser.id}-${Date.now()}`,
    message: 'Sign up successful',
  }
}

export const mockSignIn = async (data: SignInRequest): Promise<AuthResponse> => {
  await delay(200)

  // Validation
  if (!data.email || !data.password) {
    return {
      success: false,
      message: 'Email and password are required',
    }
  }

  // Find user and validate password
  const user = mockUsersWithPasswords.find((u) => u.email === data.email)

  if (!user) {
    return {
      success: false,
      message: 'Invalid email or password',
    }
  }

  // Validate password
  if (user.password !== data.password) {
    return {
      success: false,
      message: 'Invalid email or password',
    }
  }

  return {
    success: true,
    user: toUser(user),
    token: `mock-token-${user.id}-${Date.now()}`,
    message: 'Sign in successful',
  }
}

export const mockForgotPassword = async (email: string): Promise<AuthResponse> => {
  await delay(200)

  if (!email) {
    return {
      success: false,
      message: 'Email is required',
    }
  }

  const user = mockUsersWithPasswords.find((u) => u.email === email)
  if (!user) {
    return {
      success: false,
      message: 'User with this email does not exist',
    }
  }

  return {
    success: true,
    message: 'Password reset email sent (mock)',
  }
}
