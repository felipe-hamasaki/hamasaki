import { BlockScroll } from '@/components/studio/block-scroll'
import { LocalTime } from '@/components/studio/local-time'
import { ProjectScroll } from '@/components/studio/project-scroll'
import { siteConfig } from '@/lib/site-config'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const projectKeys = ['four', 'five', 'six', 'seven'] as const
const experienceKeys = ['fullstack', 'frontend', 'junior'] as const
const projects: Record<
  (typeof projectKeys)[number],
  {
    image: string
    demo: string
    source: string
  }
> = {
  four: {
    image: '/projects/medivi-shop.webp',
    demo: 'https://medivi-shop.vercel.app',
    source: 'https://github.com/felipehborges/medivi-shop'
  },
  five: {
    image: '/projects/psico-gabriela.webp',
    demo: 'https://www.psialmeidagabriela.com.br/',
    source: 'https://github.com/felipehborges/psico-gabriela'
  },
  six: {
    image: '/projects/patio.png',
    demo: 'https://patio-gamma.vercel.app/demo',
    source: 'https://github.com/felipe-hamasaki/patio'
  },
  seven: {
    image: '/projects/hamadle.png',
    demo: 'https://hamadle.vercel.app',
    source: 'https://github.com/felipe-hamasaki/hamadle'
  }
}

export function CodeColorHome() {
  const home = useTranslations('Home')
  const portfolio = useTranslations('Portfolio')
  const headlineAccent = portfolio('headlineAccent').replace(/[.!?]+$/, '')

  return (
    <div className="minimal-site">
      <BlockScroll />
      <div className="minimal-container">
        <section className="minimal-hero" id="top" data-scroll-block>
          <h1>
            Felipe Hamasaki — {portfolio('headline')} {headlineAccent}
            <span className="minimal-period">.</span>
            <span className="minimal-caret" aria-hidden="true" />
          </h1>
          <p>{portfolio.rich('intro', { br: () => <br /> })}</p>
          <div className="minimal-links">
            <a className="minimal-email" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email} <span aria-hidden="true">↗</span>
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section className="minimal-section" id="work">
          <ProjectScroll>
            {projectKeys.map((key, index) => (
              <div
                className="minimal-project-step"
                id={`project-${key}`}
                key={key}
                data-scroll-block
              >
                <article className="minimal-project">
                  <div className="minimal-project-frame">
                    <div className="minimal-project-folio" aria-hidden="true">
                      <span>{home('work.kicker')}</span>
                      <span className="minimal-project-count">
                        {String(index + 1).padStart(2, '0')}
                        <span className="minimal-project-rule">
                          <i />
                        </span>
                        <span>
                          {String(projectKeys.length).padStart(2, '0')}
                        </span>
                      </span>
                    </div>
                    <a
                      className="minimal-project-visual"
                      href={projects[key].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${home('work.demo')}: ${home(`work.projects.${key}.title`)}`}
                    >
                      <Image
                        src={projects[key].image}
                        alt={home(`work.projects.${key}.imageAlt`)}
                        width={2880}
                        height={1800}
                        sizes="(max-width: 800px) 100vw, 760px"
                        unoptimized
                      />
                    </a>
                    <div className="minimal-project-copy">
                      <h2>{home(`work.projects.${key}.title`)}</h2>
                      <p>{home(`work.projects.${key}.solution`)}</p>
                    </div>
                    <div className="minimal-project-links">
                      <a
                        className="minimal-project-source"
                        href={projects[key].source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {home('work.source')} <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </ProjectScroll>
        </section>

        <div className="minimal-about-block" id="about" data-scroll-block>
          <section className="minimal-section">
            <div className="minimal-label">{home('about.kicker')}</div>
            <p className="minimal-about-copy">{home('about.paragraph1')}</p>
            <div className="minimal-experience">
              {experienceKeys.map((key) => (
                <article key={key}>
                  <strong>{home(`experience.entries.${key}.role`)}</strong>
                  <span>{home(`experience.entries.${key}.company`)}</span>
                  <time>{home(`experience.entries.${key}.period`)}</time>
                </article>
              ))}
            </div>
          </section>

          <footer className="minimal-inline-footer">
            <span>© {new Date().getFullYear()} Felipe Hamasaki</span>
            <span className="minimal-location">
              <i /> São Paulo <LocalTime />
            </span>
          </footer>
        </div>
      </div>
    </div>
  )
}
