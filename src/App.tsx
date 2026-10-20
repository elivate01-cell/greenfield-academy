const ACADEMICS = [
  { n: 'Nursery', ages: 'Ages 3–5', body: 'Phonics through song, numbers through play, and naps that follow the school clock, not the teacher’s mood.' },
  { n: 'Primary', ages: 'Ages 6–11', body: 'Reading across subjects, mental maths drills, and the first provincial exams taken without tears (mostly).' },
  { n: 'College', ages: 'Ages 12–18', body: 'BECE in JSS3, WAEC and NECO at the summit, with STEM labs and a commerce stream that respects both paths.' },
];

const TIMELINE = [
  ['November', 'Enquiry forms open', 'Collect at the bursar’s office or download; forms close mid-January.'],
  ['January', 'Entrance test', 'Written test in English, Maths and General Paper, held on two Saturdays.'],
  ['February', 'Interviews', 'Pupils and parents meet the head of section — bring the last report card.'],
  ['September', 'Resumption', 'Full fees before resumption; uniform fitting week begins the last Monday of August.'],
];

export default function App() {
  return (
    <div className="ga">
      <div className="top">
        <a className="crest" href="#top" aria-label="Greenfield Academy home"><span>G</span></a>
        <div className="tword">
          <a className="brand" href="#top">Greenfield Academy</a>
          <small>Nursery · Primary · College — Asaba</small>
        </div>
        <nav className="tnav">
          <a href="#academics">Academics</a><a href="#admissions">Admissions</a><a href="/programs.html">Programmes</a><a href="#parents">Parents</a>
        </nav>
        <a className="tcta" href="#admissions">Admissions 2026</a>
      </div>
      <header className="hero" id="top">
        <p className="kick">SINCE 1998 · GREENFIELDS ESTATE, OFF SUMMIT ROAD, ASABA</p>
        <h1>Quiet corridors.<br /><em>Loud results.</em></h1>
        <p className="lede">A day school of 1,240 pupils on nine green acres — where discipline is enforced with timetables, not threats.</p>
        <div className="hstats">
          <div className="hstat"><b>1,240</b><span>pupils enrolled</span></div>
          <div className="hstat"><b>26</b><span>class size cap</span></div>
          <div className="hstat"><b>94%</b><span>WAEC credits in 5 papers</span></div>
        </div>
      </header>
      <section className="academics" id="academics">
        <h2>Three sections, one standard</h2>
        <div className="aggrid">
          {ACADEMICS.map((a) => (
            <article className="agcard" key={a.n}>
              <span className="agage">{a.ages}</span>
              <h3>{a.n}</h3>
              <p>{a.body}</p>
              <a className="aglink" href="/programs.html">{a.n} programme detail →</a>
            </article>
          ))}
        </div>
      </section>
      <section className="admissions" id="admissions">
        <h2>Admissions timeline</h2>
        <ol className="atline">
          {TIMELINE.map((t) => (
            <li key={t[0]}>
              <b className="atmon">{t[0]}</b>
              <div><b>{t[1]}</b><p>{t[2]}</p></div>
            </li>
          ))}
        </ol>
      </section>
      <section className="parents" id="parents">
        <div className="pgpanel">
          <div className="pgleft">
            <h2>Parents’ gateway</h2>
            <p className="pglede">Reports publish mid-term and end-of-term. The bursar answers fees questions between 9 AM and 3 PM, school days.</p>
          </div>
          <div className="pgright">
            <a href="#parents">Term fees &amp; parts</a>
            <a href="#parents">PTA meeting dates</a>
            <a href="#parents">Transport routes &amp; pricing</a>
            <a href="#parents">Newsletter archive</a>
          </div>
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Greenfield Academy · Greenfields Estate, Asaba, Delta State.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}