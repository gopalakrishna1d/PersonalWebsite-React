import "@/styles/main.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer className="footer">
        <nav>
          <a href="mailto:gopalakrishna.1d@gmail.com">Email</a> |{" "}
          <a href="https://linkedin.com/in/gopala-krishna-d" target="_blank">LinkedIn</a> |{" "}
          <a href="https://twitter.com/g0pa1kr1shna" target="_blank">X</a> |{" "}
          <a href="https://github.com/gopalakrishna1d" target="_blank">GitHub</a>
        </nav>
        <p>© 2025 Gopala Krishna. All Rights Reserved.</p>
      </footer>
    </>
  );
}
