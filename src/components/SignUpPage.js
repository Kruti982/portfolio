import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./SignUpPage.css";


export default function SignUpPage() {
  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
    

    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const passwordsMatch = password === confirmPassword;
    
    const handleChange = (e) => {
        const input = e.target.value;
    
        // Remove non-digit characters
        const digitsOnly = input.replace(/\D/g, '');
    
        // Check if there are at least 10 digits
        setError(digitsOnly.length > 0 && digitsOnly.length < 10);
    
        setPhone(digitsOnly);
      };
  return (
    <div className="register" style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "35ch" }, backgroundColor: '#8b7474', border: '2px solid black', boxShadow: '5px 5px 2px', borderRadius: '2%'}}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        id="input-with-icon-textfield"
        label="First Name"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfield"
        label="Last Name"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      />
        <TextField
      label="Phone Number"
      multiline
      fullWidth
      variant="standard"
      value={phone}
      onChange={handleChange}
      error={error}
      helperText={error ? "Phone number must be at least 10 digits." : ""}
    />

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPassword.length > 0 && !passwordsMatch}
            helperText={
              confirmPassword.length > 0 && !passwordsMatch
                ? "Passwords do not match"
                : ""
            }
            variant="standard"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>

        <Button variant="contained" sx={{width: '20ch', margin: '1rem auto', display: 'block'}}>Submit</Button>
        </div>
      </div>
    </Box>
    </div>
  );
}
