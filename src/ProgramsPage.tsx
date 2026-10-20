const PROGRAMS = [
  ['Nursery · Ages 3–5', 'Phonics, counting rhymes, pre-writing motor work. Two teachers per room of twenty; naps on mats until the last term of KG2.'],
  ['Primary · Ages 6–11', 'English, Mathematics, Quantitative Reasoning, Social Studies, Yorùbá/Igbo, Creative Arts. Weekly mental-maths league tables.'],
  ['Junior College · JSS1–3', 'BECE stream: twelve subjects, first sitting in JSS3. ICT lab from JSS1; every pupil leaves JSS able to type.'],
  ['Senior College · SS1–3', 'Science, Commercial and Arts tracks. WAEC + NECO double registration; STEM pupils keep two lab periods weekly.'],
];

const COCURR = ['Chess club', 'Coding & robotics', 'Football (boys & girls)', 'Drama society', 'Press club', 'Choir & orchestra'];

const STRUCTURE = [
  ['Nursery', '20', '—', '—'],
  ['Primary', '26', 'Weekly tests', 'Common Entrance'],
  ['Junior College', '26', 'Continuous assessment', 'BECE (JSS3)'],
  ['Senior College', '24', 'Mock exams twice', 'WAEC · NECO'],
];

export default function ProgramsPage() {
  return (
    <div className="ga pg">
      <div className="top">
        <a className="crest" href="/index.html" aria-label="Greenfield Academy home"><span>G</span></a>
        <div className="tword">
          <a className="brand" href="/index.html">Greenfield Academy</a>
          <small>Programmes &amp; structure</small>
        </div>
        <nav className="tnav">
          <a href="/index.html">← Home</a><a href="/index.html#academics">Academics</a><a href="/index.html#admissions">Admissions</a>
        </nav>
        <a className="tcta" href="/index.html#admissions">Admissions 2026</a>
      </div>
      <header className="phead">
        <p className="kick">CURRICULUM · CLASS STRUCTURE · BEYOND THE CLASSROOM</p>
        <h1>Programmes, explained<br />the way parents read them.</h1>
      </header>
      <section className="plist">
        {PROGRAMS.map((p) => (
          <article className="prow" key={p[0]}>
            <h2>{p[0]}</h2>
            <p>{p[1]}</p>
          </article>
        ))}
      </section>
      <section className="structure">
        <h2>Structure at a glance</h2>
        <table className="sttable">
          <thead><tr><th>Section</th><th>Class cap</th><th>Assessment</th><th>Exit exams</th></tr></thead>
          <tbody>
            {STRUCTURE.map((s) => (
              <tr key={s[0]}><td>{s[0]}</td><td>{s[1]}</td><td>{s[2]}</td><td className="stexit">{s[3]}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="cocurr">
        <h2>Beyond the classroom</h2>
        <div className="cochips">
          {COCURR.map((c) => <span className="cochip" key={c}>{c}</span>)}
        </div>
      </section>
      <section className="pback">
        <div className="pbin">
          <h2>See the school in person</h2>
          <p>Guided tours hold every Tuesday and Thursday at 10 AM. Come during assembly and hear the school sing — that tells you more than any brochure.</p>
          <a className="tcta" href="/index.html#admissions">Start an admission enquiry</a>
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Greenfield Academy · Greenfields Estate, Asaba, Delta State.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}