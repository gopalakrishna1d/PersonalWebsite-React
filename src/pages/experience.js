// pages/experience.js
import Head from 'next/head';
import Link from 'next/link';
import { useScroll, motion } from 'framer-motion';

export default function Experience() {
  return (
    <>
      <Head>
        <title>Gopala Krishna | Portfolio</title>
        <meta name="description" content="Personal portfolio of Gopala Krishna" />
      </Head>


      <main className="main">
        <section className="about">
          <h1>Experience</h1>

          <h2>Junior Backend Developer – MATDUN Labs (Nov 2023 – Present)</h2>
          <ul>
            <li>Built backend systems for Chabee and SecurLive with Django and PostgreSQL.</li>
            <li>Designed APIs with secure authentication and role-based access control.</li>
            <li>Collaborated in Agile teams with AI developers and product managers.</li>
            <li>Improved server response times through performance tuning and debugging.</li>
          </ul>

          <h2>Backend Developer Intern – MATDUN Labs (Feb 2023 – Nov 2023)</h2>
          <ul>
            <li>Assisted in database design, API integration, and backend optimization.</li>
            <li>Contributed to documentation and participated in code reviews.</li>
          </ul>

          <h2>Education</h2>
          <ul>
            <li><strong>B.Tech in Computer Science</strong> – JNTU (2019–2023)</li>
            <li><strong>Intermediate (MPC)</strong> – TS Board (2017–2019)</li>
            <li><strong>SSC</strong> – TS SSC Board (2017)</li>
          </ul>
        </section>
      </main>
    </>
  );
}
