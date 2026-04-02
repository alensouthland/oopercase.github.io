function About() {
  return (
    <div className="page_container">
      <h1 style={{ fontFamily: 'Edmund, serif', fontSize: 'clamp(2rem, -1.5rem + 8vw, 3rem)' }}>Hello, I'm <span> <a style={{ color: 'var(--text-color)', borderBottom: '2px solid var(--text-color)' }} href="https://alen.framer.website">Alen</a></span></h1>

      <footer style={{
        textAlign: 'center',
        fontSize: '0.9rem',
        color: 'var(--text-color)',
        borderTop: '0px solid var(--border-color)',
        opacity: 0.8
        }}>
        <p style={{ maxWidth: '48ch', marginBottom: '1rem', fontFamily: 'VerumSans, sans-serif', fontSize: '1rem', textWrap: 'pretty' }}>
          OOPER CASE TYPE is a library of fonts created by me. This project is actively in development adding new fonts and features. Built with ❤️ using React with Claude.
        </p>
      </footer>

    </div>
    
  )
}

export default About  // ✅ This line is critical
