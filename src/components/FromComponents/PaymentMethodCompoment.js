import { Button, CircularProgress, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CreditCardForm from "./CreditCardForm";
import TermsAndCondition from "./TermsAndCondition";
import { useSnackbar } from 'notistack';
import PayPalForm from "./PayPalForm";
import GiftCardForm from "./GiftCardForm";

const PaymentMethodCompoment = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [ selected, setSelected ] = useState('credit');
  const [ cardNum, setCardNum] = useState('');
  const [ validThruMonth, setValidThruM] = useState('');
  const [ validThruYear, setValidThruY] = useState('');
  const [ cardHolder, setCardHolder] = useState('');
  const [ cvv, setCvv] = useState('');
  const [ isChecked, setIsChecked ] = useState(false);
  const [ loading, setIsLoading ] = useState(false);

  const save = () => {
    if(
      (cardNum !== '' && cardNum.length === 19) &&
      validThruMonth !== '' &&
      validThruYear !== '' &&
      cardHolder !== '' &&
      (cvv !== '' && cvv.length === 3) &&
      isChecked !== false
    ) {
      setIsLoading(true)
      window.setTimeout(() => {
        enqueueSnackbar('Done Puchasing', { 
          variant: 'success',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
          }
        })
        setIsLoading(false)
      }, 4000);
    }else {
      if(isChecked) {
        enqueueSnackbar('Please complete the form', { 
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
          }
        })
      }else {
        enqueueSnackbar('Terms and Condition is not checked', { 
          variant: 'error',
          anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
          }
        })
      }
    }
  };

  return (
    <Box p={1} width={550}>
      <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center'>
        <Button 
          variant={selected === 'credit' ? "contained"  : "outlined" }
          size='small' 
          fullWidth
          onClick={() => setSelected('credit')}
        >
          Credit
        </Button>
        <Button 
          variant={selected === 'gift' ? "contained"  : "outlined" }
          size='small' 
          fullWidth
          onClick={() => setSelected('gift')}
        >
          Gift Card
        </Button>
        <Button 
          variant={selected === 'paypal' ? "contained"  : "outlined" }
          size='small' 
          fullWidth
          onClick={() => setSelected('paypal')}
        >
          PayPal
        </Button>
      </Stack>
      {
        selected === 'credit' ?
          <CreditCardForm
            cardNum={cardNum}
            validThruMonth={validThruMonth}
            validThruYear={validThruYear}
            cardHolder={cardHolder}
            cvv={cvv}
            setCardNum={setCardNum}
            setValidThruM={setValidThruM}
            setValidThruY={setValidThruY}
            setCardHolder={setCardHolder}
            setCvv={setCvv}
          />
        :undefined
      }
      {
        selected === 'paypal' ?
          <PayPalForm/>
        :undefined
      }
      {
        selected === 'gift' ?
          <GiftCardForm/>
        :undefined
      }
      <TermsAndCondition
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <Box width={550} mt={1} p={1}>
        <Stack justifyContent='center' alignItems='center'>
          <Button 
            variant='contained'
            color='secondary'
            fullWidth
            onClick={save}
            disabled={loading}
          >
            {
              loading ? 
              <CircularProgress/>
              : 'Place Order ( $ 624.99 )'
            }
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PaymentMethodCompoment;