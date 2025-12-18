import Background from '../components/background'
import { Box, Typography } from '@mui/material'
import ButtonComponent from '../components/button'
import { useNavigate } from 'react-router-dom'

export default function CPanel() {
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
          width: '100%',
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
          Welcome to the GreenGrowth Ltd. CPanel
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'rgb(238,238,238,0.9)', textAlign: 'center', mb: 2, maxWidth: 600 }}
        >
          <strong>This is a demonstration page.</strong>
          <br />
          <br />
          Here you can add:
          <br />
          • Dashboard with statistics and analytics
          <br />
          • Tree planting management system
          <br />
          • Growth monitoring tools
          <br />
          • User management and permissions
          <br />
          • Donation tracking and reports
          <br />
          • Project management features
          <br />
          • Data visualization and charts
          <br />
          <br />
          For custom features and integration, please contact us.
        </Typography>
        <ButtonComponent onClick={() => navigate('/')}>BACK</ButtonComponent>
      </Box>
    </Background>
  )
}
