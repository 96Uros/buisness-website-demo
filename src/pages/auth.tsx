import { useState } from 'react'
import Background from '../components/background'
import { Box, Typography, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signup')
  const navigate = useNavigate()

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
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              mb: 3,
              width: '100%',
            }}
          >
            <Button
              type="button"
              onClick={() => setMode('signin')}
              variant={mode === 'signin' ? 'contained' : 'outlined'}
              fullWidth
              sx={{
                flex: 1,
                background: mode === 'signin' ? 'white' : 'transparent',
                color: mode === 'signin' ? '#222' : 'white',
                borderColor: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  background:
                    mode === 'signin' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                },
              }}
            >
              Sign In
            </Button>
            <Button
              type="button"
              onClick={() => setMode('signup')}
              variant={mode === 'signup' ? 'contained' : 'outlined'}
              fullWidth
              sx={{
                flex: 1,
                background: mode === 'signup' ? 'white' : 'transparent',
                color: mode === 'signup' ? '#222' : 'white',
                borderColor: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  background:
                    mode === 'signup' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
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
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
            }}
          >
            {mode === 'signup' && (
              <TextField
                type="text"
                label="Username"
                variant="outlined"
                fullWidth
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
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                marginTop: 2,
                width: '100%',
              }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  flex: 1,
                  background: 'white',
                  color: '#222',
                  fontWeight: 'bold',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                {mode === 'signin' ? 'Sign In' : 'Sign Up'}
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={() => navigate('/')}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    borderColor: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                ← Back
              </Button>
            </Box>
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
              onClick={() => {
                // Handle forgot password click
                console.log('Forgot password clicked')
              }}
            >
              Forgot your password?
            </Typography>
          )}
        </Box>
      </Box>
    </Background>
  )
}
