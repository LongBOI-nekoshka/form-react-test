import { Box, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import PaymentMethodCompoment from "./PaymentMethodCompoment";

const CheckOutSummary = () => {
  const productsBrought = [
    {
      name: 'Apple® - Ipad® with Retina® display Wi-fi - 32GB - White',
      price: '$499.00'
    },
    {
      name: '16GB A Series Walkman Video MP3',
      price: '$130.00'
    }
  ]
  return (
    <>
      <Stack spacing={2} justifyContent='flex-start'>
        <Typography fontSize={25}>Checkout</Typography>
        <Typography>Products</Typography>
        <Box paddingLeft={3} width={550}>
          {
            productsBrought.map((data) => {
              return (
                <Stack justifyContent='space-between' direction='row'>
                  <Link variant='body2'> 
                    {data.name}
                  </Link>
                  <Typography variant='body2'>
                    {data.price}
                  </Typography>
                </Stack>
              );
            })
          }
        </Box>
        <Typography>Shipping method</Typography>
        <Box paddingLeft={3} width={550}>
          <Stack justifyContent='space-between' direction='row'>
            <Typography variant='body2'> 
              FedEx
            </Typography>
            <Typography variant='body2'>
              $13.99
            </Typography>
          </Stack>
        </Box>
        <br/>
        <Typography>Payment method</Typography>
        <PaymentMethodCompoment/>
      </Stack>
    </>
  )
};

export default CheckOutSummary;