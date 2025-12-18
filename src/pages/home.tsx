import Background from '../components/background'
import ButtonComponent from '../components/button'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Background>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '80vh',
          width: '100%',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            letterSpacing: 2,
            color: 'white',
            textAlign: 'center',
          }}
        >
          Verdant Canopy Enterprises
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'rgb(238, 238, 238, 0.8)',
            textAlign: 'center',
            width: '50%',
            marginTop: 2,
          }}
        >
          We are a team of passionate developers who are dedicated to creating beautiful and
          functional websites.
        </Typography>
        <ButtonComponent onClick={() => navigate('/auth')}>REGISTER</ButtonComponent>
      </Box>
    </Background>
  )
}
