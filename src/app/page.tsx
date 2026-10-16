import CopyEmail from "@/components/CopyEmail";
import CvButton from "@/components/CvButton";
import Logo from "@/components/Logo";
import Screenshots from "@/components/Screenshots";
import ThemeToggle from "@/components/ThemeToggle";
import { about, education, profile, projects, stack } from "@/content";

const tints = ["tint-mint", "tint-sky", "tint-sand", "tint-slate"];

export default function Home() {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <>
      <header className="top">
        <div className="wrap">
          <a className="brand" href="#top">
            {profile.shortName}
          </a>
          <nav className="nav" aria-label="Sections">
            <a href="#projects">Projects</a>
            <a href="#stack">Tech stack</a>
            <a href="#education">Education</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="wrap" id="top">
        <div className="hero">
          <div className="hero-main">
            <p className="mono">
              {profile.name} &middot; {profile.role}
            </p>
            <h1>
              {profile.headlineStart} <span className="accent">{profile.headlineAccent}</span>.
            </h1>
            <p className="lede">{profile.intro}</p>
            <div className="hero-actions">
              <a className="btn" href="#projects">
                See my projects
              </a>
              <CvButton />
            </div>
          </div>
          <aside className="panel now" aria-label="Courses this semester">
            <p className="mono">Courses this semester</p>
            <ul>
              {profile.learning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>

        <section id="projects">
          <div className="sec-head">
            <h2>Projects</h2>
            <span className="mono">Things I built while learning</span>
          </div>
          <ul className="project-grid">
            {projects.map((project, i) => (
              <li key={project.title} className="panel project">
                <div className={`strip ${tints[i % tints.length]}`}>
                  <span className="mono">{project.kind}</span>
                </div>
                <Screenshots
                  images={project.images ?? []}
                  title={project.title}
                  showPlaceholders={isDev}
                />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="learned">
                    <span className="mono">Highlights</span>
                    {project.highlight}
                  </p>
                  <ul className="tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.demo && <a href={project.demo}>Live demo &rarr;</a>}
                    {project.repo && <a href={project.repo}>Source code &rarr;</a>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="stack">
          <div className="sec-head">
            <h2>Tech stack</h2>
            <span className="mono">Tools I use in my projects</span>
          </div>
          <div className="stack">
            {stack.map((group) => (
              <div key={group.group}>
                <h3 className="mono group-title">{group.group}</h3>
                <ul className="tiles">
                  {group.items.map((item) => (
                    <li key={item.name} className="panel tile">
                      <Logo name={item.name} icon={item.icon} />
                      <b>{item.name}</b>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="sec-head">
            <h2>Education</h2>
          </div>
          <div className="panel edu">
            <div className="edu-main">
              <h3>{education.school}</h3>
              <p>{education.program}</p>
              <p className="mono">{education.campus}</p>
            </div>
            <div className="edu-stats">
              <div className="stat tint-sky">
                <span className="mono">Currently in</span>
                <b>{education.semester}</b>
              </div>
              <div className="stat tint-mint">
                <span className="mono">{education.gpaLabel}</span>
                <b>
                  {education.gpa} <small>{education.gpaScale}</small>
                </b>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="sec-head">
            <h2>About me</h2>
          </div>
          <div className="about">
            <div>
              {about.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <dl className="panel facts">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="mono">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact">
          <div className="panel contact-card">
            <p className="mono">Contact</p>
            <h2>
              Let&apos;s <span className="accent">work together</span>
            </h2>
            <CopyEmail email={profile.email}>
              <CvButton />
            </CopyEmail>
          </div>
        </section>

        <footer>
          <span className="mono">{profile.name}</span>
          <span className="mono">Updated {profile.updated}</span>
        </footer>
      </main>
    </>
  );
}
