import React from 'react';
import { Navbar } from './navbar';
import { motion } from 'framer-motion';
import './About.css';
import useWindowSize from '../hooks/useWindowSize';

const aboutCopy =
  "Woofstr was inspired by 'fur baby' Slack channels in every cool workplace, and randomly bumping into other great dogs for our dogs to play with. Use Woofstr to connect and commiserate with other dog owners in any location, or down the street. Then share Woofstr with fellow dog owners in your neighborhood to synchronize walking and play times.";

export default function About() {
  const page = useWindowSize();

  return (
    <div className="about" style={{ ...page }}>
      <Navbar />
      <div
        className="about__body"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dm89xfnl4/image/upload/v1633290162/shutterstock_221403820_npk2rd.webp)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="about__placeholder">
        <motion.div
          className="about__container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="about__title">About Woofstr</h3>
            <p>{aboutCopy}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
