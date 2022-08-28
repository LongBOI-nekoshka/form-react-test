import { Checkbox, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import DialogTermsAndCondition from "./DialogTermsAndCondition";

const TermsAndCondition = (props) => {
  const {
    isChecked,
    setIsChecked
  } = props
  const [open, setOpen] = useState(false);
  return (
    <Box width={550} mt={2} p={1} border="1px solid #F6f6f6">
      <DialogTermsAndCondition
        open={open}
        setOpen={setOpen}
      />
      <Stack spacing={1} direction='row' alignItems='center'>
        <Checkbox checked={isChecked} onChange={(event) => {
          setIsChecked(event.target.checked)
        }}/>
        <Typography variant="caption">
          I accept the <Link onClick={()=>setOpen(true)}>Terms and Conditions</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default TermsAndCondition;