import Background from '../components/background'
import { Box, Typography } from '@mui/material'
import ButtonComponent from '../components/button'
import { useNavigate } from 'react-router-dom'

export default function Donate() {
  const navigate = useNavigate()

  return (
    <Background>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            mb: 2,
            letterSpacing: 1,
          }}
        >
          DEMO DONATE PAGE
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'rgb(238,238,238,0.9)', textAlign: 'center', mb: 2, maxWidth: 550 }}
        >
          <strong>This page is a demonstration only.</strong>
          <br />
          <br />
          For integration inquiries or custom requirements, please contact us.
        </Typography>
        <ButtonComponent onClick={() => navigate('/')}>BACK</ButtonComponent>
      </Box>
    </Background>
  )
}
