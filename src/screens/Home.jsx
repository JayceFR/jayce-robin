import kotlinLogo from '../assets/logos/kotlin.svg'
import haskellLogo from '../assets/logos/haskell.svg'
import pythonLogo from '../assets/logos/python.svg'
import cLogo from '../assets/logos/c.png'
import jsLogo from '../assets/logos/js.svg'
import reactLogo from '../assets/logos/react.svg'

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-text">
        <h2>Hi, I’m Jayce 👋</h2>
        <p className="intro">
          Penultimate-year Computer Science student passionate about software engineering. I’ve worked on projects spanning mobile, web, and systems programming, and I’m always exploring new ways to turn ideas into impactful software.
        </p>
        <p>
          Experienced in <strong>full-stack development</strong>, <strong>mobile development</strong>, and <strong>game development</strong>.
        </p>
        <div className="tech-stack">
          <img src={cLogo} alt="C" />
          <img src={kotlinLogo} alt="Kotlin" />
          <img src={haskellLogo} alt="Haskell" />
          <img src={pythonLogo} alt="Python" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={reactLogo} alt="React" />
        </div>
      </div>
    </section>
  );
}