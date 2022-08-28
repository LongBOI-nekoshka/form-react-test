import { Box, Stack, Typography } from "@mui/material";
import WidgetsIcon from '@mui/icons-material/Widgets';
import CheckOutSummary from "./FromComponents/CheckOutSummary";
import ThemeChanger from './ThemeChanger';
const Form = () => {
  return (
    <Box>
      <Stack justifyContent='center' alignItems='center'>
        <ThemeChanger/>
      </Stack>
      <Stack spacing={3} justifyContent='center' alignItems='center' direction='row'>
        <WidgetsIcon/>
        <Typography> <strong>DEMO</strong> STORE</Typography>
      </Stack>
      <Stack justifyContent='center' alignItems='center'>
        <Box mt={10} width={500}>
          <CheckOutSummary/>
        </Box>
      </Stack>
    </Box>
  )
}
export default Form;