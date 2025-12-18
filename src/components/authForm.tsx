import Background from './background'
import { Box, Typography, TextField, Alert } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp, signIn, forgotPassword } from '../api/auth/auth.service'
import { AuthModeToggle, AuthActionButtons } from './authButtonForm'

export default function AuthForm() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signup')
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [reenterPassword, setReenterPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (mode === 'signup') {
      if (!username || !email || !password || !reenterPassword) {
        setError('All fields are required')
        return
      }
      if (password !== reenterPassword) {
        setError('Passwords do not match')
        return
      }
    } else {
      if (!email || !password) {
        setError('Email and password are required')
        return
      }
    }

    setLoading(true)

    try {
      let response
      if (mode === 'signup') {
        response = await signUp({ username, email, password, reenterPassword })
      } else {
        response = await signIn({ email, password })
      }

      if (response.success) {
        if (mode === 'signup') {
          setSuccess(response.message || 'Sign up successful!')
          setTimeout(() => {
            setMode('signin')
            setUsername('')
            setEmail('')
            setPassword('')
            setReenterPassword('')
            setSuccess(null)
          }, 1500)
        } else {
          // Sign in - no success message, redirect immediately
          if (response.token) {
            localStorage.setItem('authToken', response.token)
          }
          // Use requestAnimationFrame for smooth transition
          requestAnimationFrame(() => {
            navigate('/cpanel')
          })
        }
      } else {
        setError(response.message || 'An error occurred')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address first')
      return
    }

    setError(null)
    setLoading(true)

    try {
      const response = await forgotPassword(email)
      if (response.success) {
        setSuccess(response.message || 'Password reset email sent')
      } else {
        setError(response.message || 'An error occurred')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Background>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            letterSpacing: 2,
            color: 'white',
            width: '30%',
            textAlign: 'center',
            mb: 4,
          }}
        >
          GreenGrowth Ltd. <br /> C-panel
        </Typography>
        <Box
          sx={{
            border: '2px solid white',
            borderRadius: 2,
            p: 4,
            backgroundColor: 'rgba(255,255,255,0.05)',
            minWidth: 340,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: loading && mode === 'signin' ? 0 : 1,
            transition: 'opacity 0.2s ease-out',
            pointerEvents: loading && mode === 'signin' ? 'none' : 'auto',
          }}
        >
          <AuthModeToggle mode={mode} onModeChange={setMode} />
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              mb: 2,
              fontWeight: 'bold',
              letterSpacing: 1,
            }}
          >
            {mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
            }}
          >
            {error && (
              <Alert severity="error" sx={{ width: '100%' }}>
                {error}
              </Alert>
            )}
            {success && (
              <Alert severity="success" sx={{ width: '100%' }}>
                {success}
              </Alert>
            )}
            {mode === 'signup' && (
              <TextField
                type="text"
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    backgroundColor: 'transparent',
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
                inputProps={{
                  style: {
                    color: 'white',
                  },
                }}
              />
            )}
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  backgroundColor: 'transparent',
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
              inputProps={{
                style: {
                  color: 'white',
                },
              }}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  backgroundColor: 'transparent',
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
              inputProps={{
                style: {
                  color: 'white',
                },
              }}
            />
            {mode === 'signup' && (
              <TextField
                type="password"
                label="Reenter Password"
                variant="outlined"
                fullWidth
                value={reenterPassword}
                onChange={(e) => setReenterPassword(e.target.value)}
                disabled={loading}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    backgroundColor: 'transparent',
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
                inputProps={{
                  style: {
                    color: 'white',
                  },
                }}
              />
            )}
            <AuthActionButtons mode={mode} loading={loading} onBack={() => navigate('/')} />
          </Box>

          {mode === 'signin' && (
            <Typography
              sx={{
                color: 'white',
                mt: 2,
                fontSize: '0.9rem',
                textDecoration: 'underline',
                cursor: 'pointer',
                opacity: 0.8,
                '&:hover': {
                  opacity: 1,
                },
              }}
              onClick={handleForgotPassword}
            >
              Forgot your password?
            </Typography>
          )}
        </Box>
      </Box>
    </Background>
  )
}
