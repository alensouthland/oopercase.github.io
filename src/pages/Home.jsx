import { useState } from 'react'
import '../styles/Home.css'

const typefaces = [
  {
    id: '01',
    name: 'Edmund',
    family: 'Edmund',
    styles: 1,
    specimen: 'Northampton',
  },
  {
    id: '02',
    name: 'Verum Sans',
    family: 'VerumSans',
    styles: 1,
    specimen: 'Kingsthorpe',
  },
  {
    id: '03',
    name: 'Elim text',
    family: 'ElimText',
    styles: 4,
    specimen: 'Luffingcott',
  },
  {
    id: '04',
    name: 'Ner Variable',
    family: 'NerVariable',
    styles: 3,
    specimen: 'Thrikkakara',
  },
]

const PANGRAM = 'The five boxing wizards jump quickly.'

const DESKTOP_SIZE = 72
const MOBILE_SIZE  = 50
const MIN_SIZE     = 24
const MAX_SIZE     = 160

const getDefaultSize = () =>
  window.matchMedia('(max-width: 480px)').matches ? MOBILE_SIZE : DESKTOP_SIZE

export default function Home() {
  const [hovered, setHovered]   = useState(null)
  const [fontSize, setFontSize] = useState(
    () => Object.fromEntries(typefaces.map(f => [f.id, getDefaultSize()]))
  )

  return (
    <main className="home">
      <ul className="home__list">
        {typefaces.map((face) => (
          <li
            key={face.id}
            className={`home__face${hovered === face.id ? ' is-hovered' : ''}`}
            onMouseEnter={() => setHovered(face.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* ── Meta row ── */}
            <div className="home__meta">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '135px'}}>
                <span className="home__index">{face.id}</span>
                <span className="home__name">{face.name}</span>
              </div>
              
              <div className="home__slider-wrap">
                <span className="home__slider-label">Aa</span>
                <input
                  type="range"
                  className="home__slider"
                  min={MIN_SIZE}
                  max={MAX_SIZE}
                  step={1}
                  value={fontSize[face.id]}
                  onChange={e =>
                    setFontSize(prev => ({ ...prev, [face.id]: Number(e.target.value) }))
                  }
                  onMouseEnter={() => setHovered(face.id)}
                />
                <span className="home__slider-value">{fontSize[face.id]}px</span>
              </div>
              <span className="home__styles">{face.styles}&nbsp;Styles</span>
            </div>

            {/* ── Editable specimen ── */}
            <div
              className="home__specimen"
              style={{
                fontFamily: `'${face.family}', serif`,
                fontSize: `${fontSize[face.id]}px`,
              }}
              contentEditable
              suppressContentEditableWarning
              spellCheck={false}
            >
              {face.specimen}
            </div>

            {/* ── Pangram ── */}
            <div
              className="home__pangram"
              style={{ fontFamily: `'${face.family}', serif` }}
            >
              {PANGRAM}
            </div>
          </li>
        ))}
      </ul>

      <footer className="home__footer">
        <span>© {new Date().getFullYear()} Ooper Case Type</span>
      </footer>
    </main>
  )
}