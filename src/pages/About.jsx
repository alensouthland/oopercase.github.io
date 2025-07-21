function About() {
  return (
    <div className="page_container">
      <h1 style={{ fontFamily: 'Edmund Italic, sans-serif' }}>Hello, I'm Alen</h1>

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
        <p style={{ marginBottom: '1rem', fontFamily: 'Scypha, sans-serif', fontSize: '1rem' }}>
          Vibe-coded with ❤️ using React and ChatGPT.
        </p>
      </footer>

    </div>
    
  )
}

export default About  // ✅ This line is critical
