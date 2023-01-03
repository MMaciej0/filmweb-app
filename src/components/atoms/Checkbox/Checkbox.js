import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

const checkboxStyle = {
  '&.Mui-checked': {
    color: 'hsl(var(--highlight))',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 25,
  },
};

const labelStyle = {
  '& .MuiFormControlLabel-label': {
    fontSize: '1.6rem',
    letterSpacing: '1px',
  },
};

function PrimaryCheckbox({ label, handleChange }) {
  return (
    <FormControlLabel
      control={
        <Checkbox onChange={() => handleChange(label)} sx={checkboxStyle} />
      }
      label={label}
      sx={labelStyle}
    />
  );
}

export default PrimaryCheckbox;
