function About() {
  return (
    <div className="page_container">
      <h1 style={{ fontFamily: 'Edmund, sans-serif' }}>Hello, I'm Alen</h1>

      <footer style={{
        marginTop: '4rem',
        padding: '2rem 1rem',
        textAlign: 'center',
        fontFamily: 'Departure Mono Regular, monospace',
        fontSize: '0.9rem',
        color: 'var(--text-color)',
        borderTop: '1px solid var(--border-color)',
        opacity: 0.8
        }}>
        <p style={{ maxWidth: '40ch', marginBottom: '1rem', fontFamily: 'VerumSans, sans-serif', fontSize: '1rem' }}>
          OOPER CASE TYPE is a library of fonts created by me. This website is still in progress and was built with ❤️ using React with Claude.
        </p>
      </footer>

    </div>
    
  )
}

export default About  // ✅ This line is critical
