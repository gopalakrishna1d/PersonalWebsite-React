// pages/hobbies.js
import Head from 'next/head';
import Link from 'next/link';

export default function Hobbies() {
  return (
    <>
      <Head>
        <title>Hobbies | Gopala Krishna</title>
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
          <h1>My Hobbies</h1>
          <ul>
            <li><strong>🎸 Playing Guitar:</strong> I enjoy composing and learning songs during my downtime.</li>
            <li><strong>✈️ Traveling:</strong> Visiting new places broadens my perspective and refreshes creativity.</li>
            <li><strong>🎨 Creative Tools:</strong> I explore 3D modeling and design using Blender, Krita, and Adobe tools.</li>
            <li><strong>📚 Anime & Comics:</strong> Enthusiastic fan who has volunteered twice at Comic-Con.</li>
            <li><strong>🏋️ Fitness:</strong> I train regularly and stay focused on strength and nutrition.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
