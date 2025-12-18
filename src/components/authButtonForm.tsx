import { Box, Button } from '@mui/material'

interface AuthButtonFormProps {
  mode: 'signin' | 'signup'
  onModeChange: (mode: 'signin' | 'signup') => void
  loading?: boolean
  onBack?: () => void
}

// Mode toggle buttons (Sign In / Sign Up)
export function AuthModeToggle({
  mode,
  onModeChange,
}: {
  mode: 'signin' | 'signup'
  onModeChange: (mode: 'signin' | 'signup') => void
}) {
  return (
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
        onClick={() => onModeChange('signin')}
        variant={mode === 'signin' ? 'contained' : 'outlined'}
        fullWidth
        sx={{
          flex: 1,
          background: mode === 'signin' ? 'white' : 'transparent',
          color: mode === 'signin' ? '#222' : 'white',
          borderColor: 'white',
          fontWeight: 'bold',
          '&:hover': {
            background: mode === 'signin' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
            borderColor: 'white',
          },
        }}
      >
        Sign In
      </Button>
      <Button
        type="button"
        onClick={() => onModeChange('signup')}
        variant={mode === 'signup' ? 'contained' : 'outlined'}
        fullWidth
        sx={{
          flex: 1,
          background: mode === 'signup' ? 'white' : 'transparent',
          color: mode === 'signup' ? '#222' : 'white',
          borderColor: 'white',
          fontWeight: 'bold',
          '&:hover': {
            background: mode === 'signup' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
            borderColor: 'white',
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  )
}

// Submit and Back buttons (must be inside form)
export function AuthActionButtons({
  mode,
  loading = false,
  onBack,
}: {
  mode: 'signin' | 'signup'
  loading?: boolean
  onBack?: () => void
}) {
  return (
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
        disabled={loading}
        sx={{
          flex: 1,
          background: 'white',
          color: '#222',
          fontWeight: 'bold',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.9)',
          },
          '&:disabled': {
            background: 'rgba(255, 255, 255, 0.5)',
            color: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {loading ? 'Loading...' : mode === 'signin' ? 'Sign In' : 'Sign Up'}
      </Button>
      {onBack && (
        <Button
          type="button"
          variant="outlined"
          onClick={onBack}
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
      )}
    </Box>
  )
}

// Main component that exports both
export default function AuthButtonForm({
  mode,
  onModeChange,
  loading = false,
  onBack,
}: AuthButtonFormProps) {
  return (
    <>
      <AuthModeToggle mode={mode} onModeChange={onModeChange} />
      <AuthActionButtons mode={mode} loading={loading} onBack={onBack} />
    </>
  )
}
