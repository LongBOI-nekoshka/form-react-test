import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const GiftCardForm = () => {
    return (
      <Box width={550} mt={4} mb={4}>
        <Typography variant='caption'>Oops gift card is unavalable</Typography>
        <TextField fullWidth placeholder="Enter Gift Card Code" disabled/>
      </Box>
    );
  };
  
  export default GiftCardForm;