import Head from 'next/head';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Gopala Krishna</title>
      </Head>
      <header className="header">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/hobbies">Hobbies</Link>
        </nav>
      </header>

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
