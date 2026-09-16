import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
<header>
  <div className="wrap">
    <nav>
      <a className="mark" href="#top">K<span>.</span>KISHORE</a>
      <div className="links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#vision">Vision</a>
        <a href="#achievements">Achievements</a>
        <a href="#stack">Stack</a>
      </div>
      <a className="talk" href="#contact">Let's talk</a>
    </nav>
  </div>
</header>

<div className="wrap">

  <div className="hero">
    <p className="hello">Hello, I'm</p>
    <h1>KISHORE</h1>
    <p className="lede">I build practical, human-centered products at the intersection of engineering, design, and entrepreneurship — turning real problems into shippable ideas.</p>
    <div className="actions">
      <a className="btn btn-solid" href="#stack">View projects</a>
      <a className="btn btn-ghost" href="#contact">Contact me</a>
      <a className="btn btn-ghost" href="resume.pdf">Download resume</a>
    </div>
    <div className="tags"><span className="tag">AI</span><span className="tag">TypeScript</span><span className="tag">UX</span><span className="tag">React</span></div>
  </div>

  <section id="about">
    <p className="kicker">About</p>
    <h2>A brief introduction</h2>
    <div className="grid split">
      <div>
        <p>I'm a builder at heart — passionate about turning real-world problems into practical, human-centered products. I blend engineering, design, and entrepreneurial thinking to ship things that matter.</p>
        <ul className="chips">
          <li>Real-world problem solving</li>
          <li>Practical startup solutions</li>
          <li>Artificial intelligence</li>
          <li>Full stack development</li>
          <li>UI/UX design</li>
          <li>Entrepreneurship</li>
          <li>Continuous learning</li>
          <li>Innovation mindset</li>
        </ul>
      </div>
      <ol className="path">
        <li><b>Student</b><small>Learning the fundamentals, deeply.</small></li>
        <li><b>Developer</b><small>Shipping working software.</small></li>
        <li><b>Problem solver</b><small>Finding what's actually worth building.</small></li>
        <li><b>Future startup founder</b><small>Where it's all heading.</small></li>
      </ol>
    </div>
  </section>

  <section id="skills">
    <p className="kicker">Skills</p>
    <h2>Tools I build with</h2>
    <div className="skillset" style={{"margin-top": "34px"}}>
      <div><h3>Programming</h3><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>TypeScript</li><li>Python</li><li>Java</li><li>C++</li></ul></div>
      <div><h3>Frameworks</h3><ul><li>React</li><li>Next.js</li><li>Node.js</li><li>Express</li></ul></div>
      <div><h3>Databases</h3><ul><li>MongoDB</li><li>Firebase</li><li>MySQL</li></ul></div>
      <div><h3>Artificial intelligence</h3><ul><li>Prompt engineering</li><li>AI tools</li><li>Claude</li><li>ChatGPT</li></ul></div>
      <div><h3>Design</h3><ul><li>Figma</li><li>Canva</li></ul></div>
      <div><h3>Version control</h3><ul><li>Git</li><li>GitHub</li></ul></div>
    </div>
  </section>

  <section id="vision">
    <p className="kicker">Startup vision</p>
    <h2>Building solutions that matter</h2>
    <p>I believe technology should solve practical problems faced by ordinary people. My goal is to build startups that improve everyday life using AI, automation, and thoughtful design.</p>
    <blockquote>Don't chase trends. Solve real problems. <em>Impact follows.</em></blockquote>
  </section>

  <section id="achievements">
    <p className="kicker">Milestones</p>
    <h2>Achievements &amp; recognition</h2>
    <div className="cards">
      <div><h3>Certifications</h3><p>Full stack, AI, and cloud coursework.</p></div>
      <div><h3>Hackathons</h3><p>Multiple national-level participations.</p></div>
      <div><h3>Competitions</h3><p>Coding and innovation contests.</p></div>
      <div><h3>Leadership</h3><p>Led collegiate tech initiatives.</p></div>
      <div><h3>Entrepreneurship club</h3><p>Active core member.</p></div>
      <div><h3>Awards</h3><p>Recognition for innovation and design.</p></div>
    </div>
  </section>

  <section id="stack">
    <p className="kicker">Tech stack</p>
    <h2>Powered by tools I love</h2>
    <ul className="stack">
      <li>React</li><li>Node.js</li><li>MongoDB</li><li>Python</li>
      <li>GitHub</li><li>Claude</li><li>ChatGPT</li><li>Figma</li><li>Canva</li>
    </ul>
  </section>

  <section id="contact" style={{"border-bottom": "1px solid var(--line)"}}>
    <p className="kicker">Contact</p>
    <h2>Let's build something</h2>
    <form onSubmit={(e) => e.preventDefault()}>
      <div><label htmlFor="n">Name</label><input id="n" name="name" autocomplete="name" /></div>
      <div><label htmlFor="e">Email</label><input id="e" name="email" type="email" autocomplete="email" /></div>
      <div><label htmlFor="s">Subject</label><input id="s" name="subject" /></div>
      <div><label htmlFor="m">Message</label><textarea id="m" name="message"></textarea></div>
      <button type="submit">Send message</button>
    </form>
    <div className="details">
      <div><span>Email</span> · <a href="mailto:hello@kishore.dev">hello@kishore.dev</a></div>
      <div><span>Location</span> · India</div>
      <div><a href="https://github.com/">GitHub</a> · <a href="https://linkedin.com/">LinkedIn</a> · <a href="https://instagram.com/">Instagram</a></div>
    </div>
  </section>

  <footer>
    <span>© 2026 Kishore. Crafted with care.</span>
    <a href="#top">Back to top</a>
  </footer>

</div>
    </>
  );
}
