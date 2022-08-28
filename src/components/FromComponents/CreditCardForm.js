import { FormControl, Grid, TextField, Tooltip, Typography } from "@mui/material";
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HelpIcon from '@mui/icons-material/Help';

const CreditCardForm = (props) => {
  const {
    cardNum,
    validThruMonth,
    validThruYear,
    cardHolder,
    cvv,

    setCardNum,
    setValidThruM,
    setValidThruY,
    setCardHolder,
    setCvv,
  } = props;
  return (
    <Grid container direction='row' spacing={1} marginTop={4} marginLeft={1}>
      <Grid xs={6} item container spacing={1} border='1px solid #f6f6f6' padding={2} direction='column'>
        <Grid item>
          <FormControl>
            <Typography variant="caption"><strong>Card number*</strong></Typography>
            <TextField
              InputProps={{
                endAdornment:(
                  <CreditCardOutlinedIcon/>
                )
              }}
              value={cardNum}
              onChange={(event) => {
                const arr = [4, 9, 14]
                if(event.target.value.length <= 19  && !event.target.value.match(/[^0-9" "]/g)) {
                  if(arr.includes(event.target.value.length)) {
                    setCardNum(event.target.value+' ')
                  }else {
                    setCardNum(event.target.value)
                  }
                }
              }}
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <Typography variant="caption"><strong>Valid thru (mm/yy)*</strong></Typography>
        </Grid>
        <Grid item container spacing={1} alignItems='center'>
          <Grid item>
            <FormControl>
              <TextField
                size="small"
                sx={{
                  width:100
                }}
                value={validThruMonth}
                onChange={(event) => {
                  if((event.target.value.length <= 2  && !event.target.value.match(/[^0-9]/g)) && (event.target.value >= 1 && event.target.value <= 12)) {
                    setValidThruM(event.target.value)
                  }
                }}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Typography variant='h5'>
              /
            </Typography>
          </Grid>
          <Grid item>
            <FormControl>
              <TextField
                size="small"
                sx={{
                  width:100
                }}
                value={validThruYear}
                onChange={(event) => {
                  if(event.target.value.length <= 2  && !event.target.value.match(/[^0-9]/g)) {
                    setValidThruY(event.target.value)
                  }
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <FormControl>
            <Typography variant="caption"><strong>Cardholder's name*</strong></Typography>
            <TextField
              size="small"
              value={cardHolder}
              onChange={(event) => {
                setCardHolder(event.target.value)
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item>
        <FormControl>
          <Typography variant="caption"><strong>CVV/CVC*</strong></Typography>
          <TextField
            size="small"
            sx={{
              width:100
            }}
            value={cvv}
            onChange={(event) => {
              if(event.target.value.length <= 3  && !event.target.value.match(/[^0-9]/g)) {
                setCvv(event.target.value)
              }
            }}
            InputProps={{
              endAdornment:(
                <Tooltip title='The CVV Number ("Card Verification Value") on your credit card or debit card is a 3 digit number on VISA®, MasterCard® and Discover® branded credit and debit cards'>
                  <HelpIcon/>
                </Tooltip>
              )
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CreditCardForm;