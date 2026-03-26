import { useState } from 'react'
import '../styles/Home.css'

const typefaces = [
  {
    id: '01',
    name: 'Edmund',
    family: 'Edmund',
    styles: 4,
    specimen: 'Ampersands',
  },
  {
    id: '02',
    name: 'Verum Sans',
    family: 'VerumSans',
    styles: 6,
    specimen: 'Gymnasium',
  },
  {
    id: '03',
    name: 'Elim text',
    family: 'ElimText',
    styles: 3,
    specimen: 'Obliquely ചരിഞ്ഞത്',
  },
  {
    id: '04',
    name: 'Arcade Display',
    family: 'ArcadeDisplay',
    styles: 2,
    specimen: 'OG Gamer കളിക്കാരൻ',
  },
  // {
  //   id: '05',
  //   name: 'Ooper Slab',
  //   family: 'OoperSlab',
  //   styles: 5,
  //   specimen: 'Typography',
  // },
]
 
const ALPHABET = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
 
export default function Home() {
  const [hovered, setHovered] = useState(null)
 
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
            <div className="home__meta">
              <span className="home__index">{face.id}</span>
              <span className="home__name">{face.name}</span>
              <span className="home__styles">{face.styles}&thinsp;Styles</span>
            </div>
 
            <div
              className="home__specimen"
              style={{ fontFamily: `'${face.family}', serif` }}
            >
              {face.specimen}
            </div>
 
            <div
              className="home__alphabet"
              style={{ fontFamily: `'${face.family}', serif` }}
            >
              {ALPHABET}
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
