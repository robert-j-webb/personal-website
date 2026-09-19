import type { ReactNode } from "react";

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function Asterisk() {
  return (
    <svg
      className="asterisk"
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
    >
      {[0, 30, 60, 90, 120, 150].map((angle) => (
        <path
          key={angle}
          d="M80 8v144"
          stroke="currentColor"
          strokeWidth="13"
          transform={`rotate(${angle} 80 80)`}
        />
      ))}
    </svg>
  );
}

function SectionHeading({ children, id }: { children: ReactNode; id: string }) {
  return (
    <h2 className="section-heading" id={id}>
      {children}
    </h2>
  );
}

function Position({
  company,
  role,
  dates,
  children,
}: {
  company: string;
  role: string;
  dates: string;
  children: ReactNode;
}) {
  return (
    <article className="position">
      <h3 className="position-heading">
        <span className="company">{company}</span>
        <span className="role"> — {role}</span>
      </h3>
      <p className="dates">{dates}</p>
      <div className="position-body">{children}</div>
    </article>
  );
}

const skills = [
  ["Javascript / Typescript", "(8+ years)"],
  ["NextJS", "(4 years)"],
  ["Java", "(4 years)"],
  ["NodeJS", "(5+ years)"],
  ["HTML, CSS, Sass", "(8+ years)"],
  ["Dart + Flutter", "(1 year)"],
  ["Tailwind", "(2 years)"],
  ["Ember", "(2 years)"],
  ["Angular", "(2 years)"],
  ["React", "(6 years)"],
];

export default function Resume() {
  return (
    <div className="resume">
      <header className="masthead">
        <p className="location">Zagreb, Croatia</p>
        <a className="email" href="mailto:me@robertjwebb.com">
          me@robertjwebb.com
          <Arrow />
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="name">
          <div>
            <h1 id="name">Robert Webb</h1>
            <p className="intro">
              Senior Software Engineer, Full Stack with a focus on Frontend Web
            </p>
            <p className="motto">
              Bias to action, Overcomes roadblocks, always quality code
            </p>
          </div>
          <div className="hero-aside">
            <Asterisk />
            <div>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/robert-w-66009b108/"
              >
                <span>linkedin.com/in/robert-w-66009b108/</span>
                <Arrow />
              </a>
              <a className="linkedin" href="https://github.com/robert-j-webb">
                <span>github.com/robert-j-webb</span>
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        <div className="resume-body">
          <section aria-labelledby="experience">
            <SectionHeading id="experience">EXPERIENCE</SectionHeading>

            <Position
              company="Modular"
              role="Staff Frontend Engineer"
              dates="April 2023 - Jan 2026"
            >
              <p className="project">
                Tech lead for Modular Frontend -{" "}
                <a href="http://www.modular.com">www.modular.com</a>
              </p>
              <p>
                First employee to work on frontend - built a team from the
                ground up including a SAAS,{" "}
                <a href="https://docs.modular.com">docsite</a>,{" "}
                <a href="https://comic.modular.com/">comic book</a> and a{" "}
                <a href="https://builds.modular.com">builds showcase.</a>
              </p>
              <p>
                Worked across the stack creating scalable backend
                infrastructure, handling up to 125QPS during bursts of
                announcement traffic.
              </p>
              <p>
                Created AI Model repository containing ~800 models at peak,
                using scraping, AI curation, and internal data sources
              </p>
              <p>
                Revolutionized Blog post publishing with custom components,
                server side rendering and superior UX - has become defacto
                standard to publish blog posts at company -{" "}
                <a href="https://robertjwebb.substack.com/p/notion-is-the-only-blog-platform">
                  see substack post about it
                </a>
              </p>
            </Position>

            <Position
              company="Google"
              role="Senior Software Engineer"
              dates="October 2021 - February 2023"
            >
              <p className="project">
                Tech lead for Antologi Project -{" "}
                <a href="https://antologi.area120.com/">antologi.area120.com</a>
              </p>
              <p>
                Lead the creation of the Mobile Flutter app for an experimental,
                Area 120 project, from its inception. I lead two other mobile
                engineers, while working with 2 backend engineers and a ML
                engineer to ensure that our features would work together
                effectively. I was converted to Senior Software Engineer due to
                this effort.
              </p>
              <p>
                Worked with the lead of the project, designers and other
                engineers to implement a production ready, first rate
                iOS+Android mobile app. We launched a dogfood to all of Google
                in November 2022 and were planning to launch to Netflix and
                Robert Morris University the week after our project was
                terminated.
              </p>
            </Position>

            <Position
              company="Google"
              role="Senior User Experience Engineer"
              dates="February 2018 - October 2021"
            >
              <p className="project">
                Tech lead for Google Store Frontend -{" "}
                <a href="http://store.google.com">store.google.com</a>
              </p>
              <p>
                Lead a rewrite of the 8 year old Frontend Server into the new,
                Google Internal framework Boq Web + Wiz. We added server side,
                rendering, better tooling, test coverage, and removed a lot of
                legacy, mismatched architecture. I started with a team of 2 and
                then expanded until I was leading a team of 7, 3 of which I
                onboarded to Google and the tech myself. We improved the
                pagespeed score from 17/100 to 43/100. However the greatest
                improvement was the ease of development on the new tech stack,
                as I had many many improvements to DX in the process. Due to
                this multi-year effort, I was promoted twice to Senior UX
                Engineer (L5).
              </p>
              <p>
                I was the go-to person for the Google Store frontend, where
                there were many stakeholders across multiple organizations. I
                would answer questions daily from engineers, project managers,
                marketing and engineering managers.
              </p>
              <p>
                I implemented quite a bit of the stack too, for 3 years on
                gStore, I was submitting more change requests than any other
                engineer in the ~150 person organization. Additionally, I
                reviewed more changes than any other engineer in the
                organization for about a year.
              </p>
            </Position>
          </section>

          <aside className="sidebar">
            <section className="proficient" aria-labelledby="proficient-skills">
              <SectionHeading id="proficient-skills">
                Most Proficient Skills
              </SectionHeading>
              <ul className="skills">
                {skills.map(([name, years]) => (
                  <li key={name}>
                    {name} <span className="skill-years">{years}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="other-skills" aria-labelledby="other-skills">
              <SectionHeading id="other-skills">
                Some Other Skills
              </SectionHeading>
              <p>
                Python, Go, C, Rust, Haskell, Linux, Git, Mercurial, Bazel, PHP,
                Symfony, Bash, ZSH, Redis, MongoDB, Firebase, Nginx, MySql,
                Mantine
              </p>
            </section>

            <section className="education" aria-labelledby="education">
              <SectionHeading id="education">EDUCATION</SectionHeading>
              <h3>
                University of Pittsburgh
                <span className="degree"> — Bachelors of Science</span>
              </h3>
              <p className="dates">January 2014 - August 2017</p>
              <p>Computer Science Degree</p>
            </section>
          </aside>
        </div>
      </main>
      <div className="endmark" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
