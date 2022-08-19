import { signInGoogle, signOutGoogle } from '../../api/auth';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

export function SignInButton() {
  return <Button variant="outlined" startIcon={<LoginIcon />} onClick={signInGoogle}>Login</Button>;
}

export function SignOutButton() {
  return <Button variant="outlined" startIcon={<LogoutIcon />} onClick={signOutGoogle}>Logout</Button>;  return <button onClick={signOutGoogle}>Logout</button>;
}