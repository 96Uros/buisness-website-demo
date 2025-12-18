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
          GreenGrowth Ltd.
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
          GreenGrowth Ltd. is a company dedicated to tree planting, monitoring growth, and
          sustainable forest management using modern technology. We are committed to fostering a
          greener future for generations to come.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <ButtonComponent onClick={() => navigate('/auth')}>REGISTER</ButtonComponent>
          <ButtonComponent onClick={() => navigate('/')}>DONATE</ButtonComponent>
        </Box>
      </Box>
    </Background>
  )
}
