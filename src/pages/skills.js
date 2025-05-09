// pages/skills.js
import Head from 'next/head';
import Link from 'next/link';

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | Gopala Krishna</title>
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
          <h1>Skills</h1>
          <ul>
            <li><strong>Languages:</strong> Python, Java, JavaScript, C++, C, C#</li>
            <li><strong>Frameworks:</strong> Django, Flask, Express, ReactJS, Node.js</li>
            <li><strong>AI/ML:</strong> TensorFlow, Keras, OpenCV, scikit-learn, YOLO</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL</li>
            <li><strong>Tools & Platforms:</strong> Docker, Git, GitHub, Postman, Linux, Jupyter</li>
            <li><strong>Creative Tools:</strong> Blender, Krita, Adobe Photoshop, Adobe Premiere Pro</li>
            <li><strong>Soft Skills:</strong> Team collaboration, communication, problem-solving, adaptability</li>
            <li><strong>Languages:</strong> English (Fluent), Telugu (Native), Hindi (Proficient), Japanese (Beginner)</li>
          </ul>
        </section>
      </main>
    </>
  );
}
