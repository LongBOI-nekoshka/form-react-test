import { Button, Box, Stack, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from 'notistack';

const PayPalForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [ loading, setLoading ] = useState(false);

  const connectToPayPal = () => {
    setLoading(true);
    window.setTimeout(() => {
      enqueueSnackbar('Oops cannot connect to Paypal', { 
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }   
      })
      setLoading(false)
      
    }, 2000)
  };

  return (
    <Box width={550} mt={4} mb={4}>
      <Stack justifyContent='center' alignItems='center'>
        <Button variant='outlined' onClick={connectToPayPal} disabled={loading}>
          {
            loading ? <CircularProgress/> : 'Log in Paypal'
          }
        </Button>
      </Stack>
    </Box>
  );
};
  
export default PayPalForm;