import { Box } from '@mui/material'
import bgImage from '../assets/bg.jpg?url'
import type { ReactNode } from 'react'

interface BackgroundProps {
  children?: ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
