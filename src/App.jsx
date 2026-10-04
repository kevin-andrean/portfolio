import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github, MapPin, Menu, X } from 'lucide-react'
import content from './data/content.js'

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.02 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function scrollToSection(target) {
  const section = document.getElementById(target)
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  section?.scrollIntoView({ behavior })
}

function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] })
    content.navigation.forEach(({ target }) => {
      const section = document.getElementById(target)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [location.pathname])

  function goToSection(event, target) {
    event.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') navigate('/')
    window.requestAnimationFrame(() => scrollToSection(target))
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="wordmark" href="#about" onClick={(event) => goToSection(event, 'about')} aria-label={content.profile.name}>
          <span className="wordmark-mark">{content.profile.name.charAt(0)}</span>
          <span>{content.profile.name}</span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? content.labels.closeMenu : content.labels.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label={content.labels.mainNavigation}>
          {content.navigation.map((item) => (
            <a key={item.target} className={activeSection === item.target ? 'nav-link active' : 'nav-link'} href={`#${item.target}`} aria-current={activeSection === item.target ? 'location' : undefined} onClick={(event) => goToSection(event, item.target)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  function scrollToProjects(event) {
    event.preventDefault()
    scrollToSection('projects')
  }

  return (
    <section className="hero section-anchor" id="about" tabIndex={-1}>
      <div className="hero-inner page-width">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" />{content.profile.badge}</div>
          <h1>{content.profile.name}</h1>
          <p className="hero-title">{content.profile.title}</p>
          <p className="hero-intro">{content.profile.intro}</p>
          <p className="hero-location"><MapPin size={17} aria-hidden="true" />{content.profile.location}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects" onClick={scrollToProjects}>{content.labels.viewProjects}<ArrowDownRight size={17} aria-hidden="true" /></a>
            <a className="button button-secondary" href={`mailto:${content.profile.email}`}>{content.labels.emailMe}<ArrowUpRight size={17} aria-hidden="true" /></a>
            <a className="icon-button" href={content.profile.github} target="_blank" rel="noreferrer" aria-label={content.labels.openGithub}><Github size={19} /></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core"><span>{content.profile.heroSymbol}</span><i /><i /><i /></div>
          {content.profile.visualLabels.map((label, index) => <div className={`art-label label-${['web', 'game', 'ai'][index]}`} key={label}>{label}</div>)}
          <div className="art-spark spark-one" /><div className="art-spark spark-two" />
        </div>
      </div>
      <div className="hero-rule page-width"><span /><span /><span /></div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="section section-soft section-anchor reveal" id="skills">
      <div className="page-width">
        <SectionHeading eyebrow={content.labels.skills} title={content.sectionTitles.skills} />
        <div className="skills-grid">
          {content.skills.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-index">0{index + 1}</div>
              <h3>{group.title}</h3>
              <div className="tag-list">{group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
}

function ExperienceSection() {
  return (
    <section className="section section-anchor reveal" id="experience">
      <div className="page-width experience-layout">
        <div><SectionHeading eyebrow={content.labels.experience} title={content.sectionTitles.experience} /></div>
        <div className="timeline">
          {content.experience.map((item) => (
            <article className="timeline-item" key={`${item.organization}-${item.period}`}>
              <span className="timeline-dot" />
              <div className="timeline-head"><div><h3>{item.organization}</h3><p className="timeline-role">{item.role}</p></div><span className="period">{item.period}</span></div>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </article>
          ))}
          <article className="timeline-item education-item">
            <span className="timeline-dot" />
            <div className="timeline-head"><div><h3>{content.education.degree}</h3><p className="timeline-role">{content.education.institution}</p></div><span className="period">{content.education.year}</span></div>
            <p className="education-detail">{content.education.detail}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section section-anchor reveal" id="contact">
      <div className="page-width contact-inner">
        <div><p className="eyebrow eyebrow-light">{content.navigation.find((item) => item.target === 'contact').label}</p><h2>{content.labels.contactHeadline}</h2></div>
        <div className="contact-actions">
          <a className="contact-email" href={`mailto:${content.profile.email}`}>{content.profile.email}<ArrowUpRight size={20} aria-hidden="true" /></a>
          <div className="contact-socials">
            <a href={content.profile.github} target="_blank" rel="noreferrer"><Github size={17} />{content.labels.github}</a>
            {content.profile.linkedin && <a href={content.profile.linkedin} target="_blank" rel="noreferrer">{content.labels.linkedin}</a>}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="site-footer"><div className="page-width"><span>{content.footer}</span><span>© {content.labels.currentYear}</span></div></footer>
}

function projectImage(path) {
  return `${import.meta.env.BASE_URL}${path}`
}

function ProjectLinks({ project }) {
  return (
    <div className="project-links" aria-label={content.labels.projectLinks}>
      {project.links.live && <a href={project.links.live} target="_blank" rel="noreferrer" aria-label={content.labels.liveDemo}><ExternalLink size={16} /></a>}
      {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer" aria-label={content.labels.github}><Github size={16} /></a>}
    </div>
  )
}

function IntegrationsSection() {
  const countRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const target = countRef.current
    if (!target) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setCount(content.integrations.count)
      return undefined
    }

    let frameId
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const start = performance.now()
      const duration = 1100
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        setCount(Math.round(content.integrations.count * progress))
        if (progress < 1) frameId = window.requestAnimationFrame(animate)
      }
      frameId = window.requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.35 })
    observer.observe(target)
    return () => {
      observer.disconnect()
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section className="integration-section section-soft section-anchor reveal" id="integrations">
      <div className="page-width">
        <div className="integration-intro">
          <h2 aria-label={content.integrations.accessibleHeadline}>
            <span ref={countRef} className="integration-count" aria-hidden="true">{count}{content.integrations.suffix}</span>
            <span>{content.integrations.headline}</span>
          </h2>
          <p>{content.integrations.description}</p>
        </div>
        <div className="integration-methods">
          <h3>{content.labels.howIWork}</h3>
          <div className="method-grid">
            {content.integrations.methods.map((method, index) => (
              <article className="method-card" key={method.title}>
                <span className="method-number">0{index + 1}</span>
                <h4>{method.title}</h4>
                <p>{method.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="selected-integrations">
          <h3>{content.labels.selectedIntegrations}</h3>
          <div className="integration-slots">
            {content.integrations.selected.map((slot, index) => (
              <div className="integration-slot" key={index} aria-label={slot.title}>
                <span className="slot-mark" aria-hidden="true" />
                <span>{slot.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState(content.projectCategories[0])
  const projects = activeCategory === content.projectCategories[0]
    ? content.projects
    : content.projects.filter((project) => project.category === activeCategory)

  return (
    <section className="section section-anchor projects-section reveal" id="projects">
      <div className="page-width">
        <SectionHeading eyebrow={content.navigation[1].label} title={content.sectionTitles.projects} />
        <div className="project-filters" role="group" aria-label={content.labels.projectFilters}>
          {content.projectCategories.map((category) => (
            <button key={category} className={activeCategory === category ? 'filter-chip selected' : 'filter-chip'} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>
          ))}
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <Link className="project-card-main" to={`/projects/${project.slug}`} aria-label={`${content.labels.projectDetails}: ${project.title}`}>
                <div className="project-image-wrap">
                  <img src={projectImage(project.images[0])} alt={`${project.title} - ${content.labels.imagePlaceholder}`} loading="lazy" />
                  {project.placeholder && <span className="placeholder-label">{content.labels.placeholder}</span>}
                  <span className="project-open" aria-hidden="true"><ArrowUpRight size={18} /></span>
                </div>
                <div className="project-card-copy">
                  <div className="project-card-title"><h3>{project.title}</h3></div>
                  <p className="project-description">{project.description}</p>
                  <span className="project-context">{project.context}</span>
                  <div className="tag-list project-tags">{project.tags.map((tag) => <span className="skill-tag" key={tag}>{tag}</span>)}</div>
                  {project.placeholder && <span className="project-placeholder-text">{content.labels.placeholder}</span>}
                </div>
              </Link>
              {(project.links.live || project.links.github) && <div className="project-card-link-row"><ProjectLinks project={project} /></div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = content.projects.find((item) => item.slug === slug)
  const imageDialog = useRef(null)
  const [activeImage, setActiveImage] = useState(null)
  const projectIndex = content.projects.findIndex((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])
  useScrollReveal()

  function openImage(path) {
    setActiveImage(path)
    imageDialog.current?.showModal()
  }

  function backToProjects(event) {
    event.preventDefault()
    navigate('/', { state: { scrollTarget: 'projects' } })
  }

  if (!project) {
    return <main className="not-found page-width"><h1>{content.labels.noProject}</h1><Link className="button button-primary" to="/">{content.labels.backToProjects}</Link></main>
  }

  const previousProject = content.projects[projectIndex - 1]
  const nextProject = content.projects[projectIndex + 1]

  return (
    <>
      <main className="project-detail page-width">
        <a className="back-link" href="/#projects" onClick={backToProjects}><ArrowLeft size={16} />{content.labels.backToProjects}</a>
        <header className="detail-header">
          <div><span className="project-context">{project.context}</span>{project.placeholder && <span className="placeholder-label detail-placeholder">{content.labels.placeholder}</span>}</div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </header>
        <button className="detail-hero-image image-button" type="button" onClick={() => openImage(project.images[0])} aria-label={`${content.labels.enlargeImage}: ${project.title}`}>
          <img src={projectImage(project.images[0])} alt={`${project.title} - ${content.labels.imagePlaceholder}`} loading="lazy" />
        </button>
        <section className="detail-gallery" aria-label={content.labels.projectGallery}>
          {project.images.slice(1).map((image, index) => (
            <button className="image-button gallery-image" key={image} type="button" onClick={() => openImage(image)} aria-label={`${content.labels.enlargeImage}: ${project.title} ${index + 2}`}>
              <img src={projectImage(image)} alt={`${project.title} ${index + 2} - ${content.labels.imagePlaceholder}`} loading="lazy" />
            </button>
          ))}
        </section>
        <div className="detail-content-grid">
          <div className="detail-main-copy">
            <section><h2>{content.labels.overview}</h2><p>{project.overview}</p></section>
            <section><h2>{content.labels.myRole}</h2><p>{project.role}</p></section>
            <section><h2>{content.labels.whatIBuilt}</h2><ul>{project.built.map((item) => <li key={item}>{item}</li>)}</ul></section>
          </div>
          <aside className="detail-sidebar">
            <h2>{content.labels.techStack}</h2>
            <div className="tag-list">{project.tags.map((tag) => <span className="skill-tag" key={tag}>{tag}</span>)}</div>
            {(project.links.live || project.links.github) && <div className="detail-external-links">
              {project.links.live && <a href={project.links.live} target="_blank" rel="noreferrer">{content.labels.liveDemo}<ExternalLink size={15} /></a>}
              {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer">{content.labels.github}<Github size={15} /></a>}
            </div>}
          </aside>
        </div>
        <nav className="project-pagination" aria-label={content.labels.projectNavigation}>
          {previousProject ? <Link to={`/projects/${previousProject.slug}`}><ArrowLeft size={17} /><span><small>{content.labels.previousProject}</small>{previousProject.title}</span></Link> : <span />}
          {nextProject && <Link className="next-project" to={`/projects/${nextProject.slug}`}><span><small>{content.labels.nextProject}</small>{nextProject.title}</span><ArrowRight size={17} /></Link>}
        </nav>
        <dialog className="image-dialog" ref={imageDialog} aria-label={`${project.title} ${content.labels.projectGallery}`} onClose={() => setActiveImage(null)}>
          <button className="dialog-close" type="button" aria-label={content.labels.closeImage} onClick={() => imageDialog.current?.close()}><X size={20} /></button>
          {activeImage && <img src={projectImage(activeImage)} alt={`${project.title} - ${content.labels.imagePlaceholder}`} />}
        </dialog>
      </main>
      <Footer />
    </>
  )
}

function HomePage() {
  const location = useLocation()
  useScrollReveal()

  useEffect(() => {
    if (location.state?.scrollTarget) {
      window.requestAnimationFrame(() => scrollToSection(location.state.scrollTarget))
    }
  }, [location.state])

  return (
    <>
      <a className="skip-link" href="#about" onClick={(event) => { event.preventDefault(); document.getElementById('about')?.focus() }}>{content.labels.skipToContent}</a>
      <Navigation />
      <main>
        <Hero />
        <ProjectsSection />
        <IntegrationsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return <Routes><Route path="/" element={<HomePage />} /><Route path="/projects/:slug" element={<ProjectDetailPage />} /><Route path="*" element={<HomePage />} /></Routes>
}