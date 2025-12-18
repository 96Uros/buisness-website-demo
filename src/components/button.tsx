import { Button } from '@mui/material'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function ButtonComponent({ children, onClick }: ButtonProps) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        mt: 5,
        width: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
        border: '2px solid #fff',
        color: 'white',
        height: 50,
        fontSize: '1rem',
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: 'uppercase',
        borderRadius: 2,
        boxShadow: 3,
        transition: 'background 0.3s, box-shadow 0.25s, color 0.25s, border-color 0.25s',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderColor: '#fff',
          color: '#fff',
          boxShadow: 6,
        },
      }}
    >
      {children}
    </Button>
  )
}
