import React from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  );
}
