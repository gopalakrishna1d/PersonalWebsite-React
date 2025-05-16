import Head from 'next/head';
import Link from 'next/link';
import { useScroll, motion } from 'framer-motion';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Gopala Krishna | Portfolio</title>
        <meta name="description" content="Personal portfolio of Gopala Krishna" />
      </Head>

      <main className="main">
        <section className="about">
          <h1>Projects</h1>
          <ul>
            <li>
              <strong>SecurLive (2024–2025)</strong> – Vision AI platform for surveillance in malls and retail. Integrated theft, fall, and weapon detection. Stack: Python, Django, OpenCV, Docker.
            </li>
            <li>
              <strong>Chabee (2023–2024)</strong> – AI-powered smart door lock with facial recognition and access management. Stack: Django, PostgreSQL, Docker.
            </li>
            <li>
              <strong>Facial Expression Recognition</strong> – Deep learning system using CNN, YOLO, and RNN to classify human emotions in real time.
            </li>
            <li>
              <strong>Heart Disease Prediction</strong> – Django web app using ML models to predict risk of heart disease from user input.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
