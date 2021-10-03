import { Button } from '@material-ui/core';
import './Login.css';
import { Navbar } from './navbar';
import { auth, provider } from '../firebase';
import { motion } from 'framer-motion';

export default function Login() {
  function login() {
    auth.signInWithRedirect(provider);
  }

  return (
    <div className="app">
      <Navbar />
      <div
        className="bg"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dm89xfnl4/image/upload/v1632497132/hannah-lim-U6nlG0Y5sfs-unsplash_c242no.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="login__container">
        <motion.div
          className="login"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="../login-logo.png"
            alt="Logo"
            style={{ width: '175px', height: '175px' }}
          />
          <div>
            <h3 className="login_prompt">Connect with Dog Owners near You</h3>
          </div>
          <Button onClick={login}>Sign in with Google</Button>
        </motion.div>
      </div>
    </div>
  );
}
