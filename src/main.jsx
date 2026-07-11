import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft, ArrowRight, BarChart3, Bell, BookOpen, Calculator, CalendarDays,
  Check, ChevronRight, CircleHelp, Clock3, FileQuestion, Flag, Flame, FlaskConical,
  GraduationCap, Home, Languages, LayoutDashboard, Lightbulb, Menu, Play, Search,
  Sparkles, Star, Target, Trophy, UserRound, X, Zap
} from 'lucide-react';
import './styles.css';

const subjects = [
  { name: 'Mathematics', icon: Calculator, color: 'green', progress: 75, detail: '12 of 16 topics' },
  { name: 'English Language', icon: Languages, color: 'blue', progress: 60, detail: '9 of 15 topics' },
  { name: 'Integrated Science', icon: FlaskConical, color: 'purple', progress: 68, detail: '11 of 16 topics' },
  { name: 'Social Studies', icon: GraduationCap, color: 'orange', progress: 55, detail: '8 of 15 topics' },
];

function Logo({ compact = false }) {
  return <button className="logo" onClick={() => location.hash = 'home'} aria-label="EduPass Ghana home">
    <span className="logo-mark"><BookOpen size={compact ? 22 : 27} /><Star size={11} /></span>
    {!compact && <span>EduPass <em>Ghana</em></span>}
  </button>;
}

function TopNav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  return <header className="topnav">
    <div className="nav-inner">
      <Logo />
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <button onClick={() => { setPage('dashboard'); setOpen(false); }}>My learning</button>
        <button onClick={() => { setPage('subjects'); setOpen(false); }}>Subjects</button>
        <button onClick={() => { setPage('exam'); setOpen(false); }}>Past questions</button>
        <button onClick={() => { setPage('exam'); setOpen(false); }}>Mock exams</button>
        <button className="nav-signin" onClick={() => { setPage('dashboard'); setOpen(false); }}>Sign in</button>
        <button className="button gold small" onClick={() => { setPage('dashboard'); setOpen(false); }}>Start learning</button>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}

function HomePage({ setPage }) {
  return <div className="site-page">
    <TopNav setPage={setPage} />
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Built for Ghanaian students</span>
          <h1>Prepare.<br/><span>Practice.</span> <b>Pass.</b></h1>
          <p>Master BECE and WASSCE with guided lessons, past questions and realistic mock exams—all in one place.</p>
          <div className="hero-actions">
            <button className="button green" onClick={() => setPage('dashboard')}>Start BECE prep <ArrowRight size={18}/></button>
            <button className="button gold" onClick={() => setPage('dashboard')}>Start WASSCE prep <ArrowRight size={18}/></button>
          </div>
          <div className="trust-row"><span><Check/> Free to begin</span><span><Check/> Learn at your pace</span></div>
        </div>
        <div className="hero-visual" aria-label="Students studying together">
          <img className="hero-photo" src="/assets/edupass-students.png" alt="Three Ghanaian students studying together with a laptop" />
          <div className="student-card student-one"><span>AK</span><div><b>Akosua</b><small>Mathematics • 82%</small></div></div>
          <div className="hero-goal"><span><Target/></span><div><small>Today's goal</small><b>24 / 30 min</b><i><em></em></i></div></div>
          <div className="floating-score"><Trophy/><span><b>+120 pts</b><small>Mock exam complete</small></span></div>
        </div>
      </section>

      <section className="exam-paths section-wrap">
        <div className="section-heading"><span>Choose your path</span><h2>One platform. Two big goals.</h2></div>
        <div className="path-grid">
          <article className="path-card bece">
            <div className="path-icon"><BookOpen/></div><div><span className="tag">Junior High</span><h3>BECE Preparation</h3><p>Build strong foundations with focused lessons and examiner-style questions.</p>
            <ul><li><Check/> All core subjects</li><li><Check/> Past questions by topic</li><li><Check/> Full timed mock exams</li></ul>
            <button onClick={() => setPage('dashboard')}>Explore BECE <ArrowRight/></button></div>
          </article>
          <article className="path-card wassce">
            <div className="path-icon"><GraduationCap/></div><div><span className="tag">Senior High</span><h3>WASSCE Preparation</h3><p>Master key concepts and practise under realistic examination conditions.</p>
            <ul><li><Check/> Core and elective subjects</li><li><Check/> Step-by-step explanations</li><li><Check/> Personal study plans</li></ul>
            <button onClick={() => setPage('dashboard')}>Explore WASSCE <ArrowRight/></button></div>
          </article>
        </div>
      </section>

      <section className="subjects-section section-wrap">
        <div className="section-heading"><span>Learn what matters</span><h2>Master your key subjects</h2><p>Short lessons, smart practice and clear explanations that help concepts stick.</p></div>
        <div className="subject-grid">{subjects.map(({name, icon: Icon, color}) => <button className={`subject-tile ${color}`} key={name} onClick={() => setPage('dashboard')}><span><Icon/></span><b>{name}</b><small>Start learning <ArrowRight/></small></button>)}</div>
      </section>

      <section className="proof section-wrap"><div><span className="eyebrow light"><Zap/> Study smarter every day</span><h2>Turn practice into progress.</h2><p>Get instant feedback, understand every answer and always know what to study next.</p></div><div className="proof-stats"><div><b>5,000+</b><small>Past questions</small></div><div><b>150k+</b><small>Questions answered</small></div><div><b>98%</b><small>Feel more prepared</small></div></div></section>
    </main>
    <footer><Logo/><p>Independent exam preparation platform. Not affiliated with or endorsed by WAEC.</p><small>© 2026 EduPass Ghana</small></footer>
  </div>;
}

function SideBar({ page, setPage, open, close }) {
  const links = [
    ['dashboard', Home, 'Home'], ['subjects', BookOpen, 'My subjects'], ['exam', FileQuestion, 'Practice'],
    ['exam', Clock3, 'Mock exams'], ['results', BarChart3, 'Progress']
  ];
  return <><aside className={`sidebar ${open ? 'mobile-open' : ''}`}>
    <div className="side-top"><Logo/><button className="side-close" onClick={close}><X/></button></div>
    <nav>{links.map(([target, Icon, label], i) => <button key={i} className={page === target ? 'active' : ''} onClick={() => {setPage(target); close();}}><Icon/><span>{label}</span></button>)}</nav>
    <div className="upgrade"><Trophy/><b>Go Premium</b><p>Unlock more questions and deeper analytics.</p><button>Upgrade now</button></div>
    <button className="help"><CircleHelp/> Need help?</button>
  </aside>{open && <button className="scrim" onClick={close} aria-label="Close menu"/>}</>;
}

function AppShell({ page, setPage, children }) {
  const [sideOpen, setSideOpen] = useState(false);
  return <div className="app-shell">
    <SideBar page={page} setPage={setPage} open={sideOpen} close={() => setSideOpen(false)}/>
    <section className="app-main">
      <header className="app-topbar"><button className="app-menu" onClick={() => setSideOpen(true)}><Menu/></button><Logo compact/><div className="top-search"><Search/><span>Search lessons or questions</span></div><button className="icon-button"><Bell/></button><button className="avatar">AM</button></header>
      {children}
    </section>
  </div>;
}

function Metric({ icon: Icon, color, label, value, note }) { return <div className="metric"><span className={color}><Icon/></span><div><small>{label}</small><b>{value}</b><em>{note}</em></div></div>; }

function Dashboard({ setPage }) {
  return <AppShell page="dashboard" setPage={setPage}><main className="dashboard app-content">
    <div className="dash-heading"><div><span className="mobile-greeting">SATURDAY, 11 JULY</span><h1>Good afternoon, Ama <span>👋</span></h1><p>Small steps every day lead to big results. Keep going!</p></div><button className="button green" onClick={() => setPage('exam')}><Play/> Quick practice</button></div>
    <div className="metrics-grid"><Metric icon={Target} color="green" label="Daily goal" value="80%" note="24 / 30 minutes"/><Metric icon={Flame} color="orange" label="Study streak" value="12 days" note="Personal best: 16"/><Metric icon={Zap} color="blue" label="Total points" value="2,450" note="+120 this week"/><Metric icon={Trophy} color="purple" label="Your rank" value="Top 8%" note="Keep it up!"/></div>
    <div className="dash-grid">
      <section className="panel progress-panel"><div className="panel-title"><div><h2>Weekly study progress</h2><p>Hours spent learning this week</p></div><select><option>This week</option></select></div><div className="chart"><div className="chart-lines"><i></i><i></i><i></i></div><svg viewBox="0 0 600 180" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0a9b55" stopOpacity=".28"/><stop offset="1" stopColor="#0a9b55" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0 145 L90 90 L180 35 L270 100 L360 85 L450 25 L540 55 L600 30 L600 180 L0 180Z"/><polyline points="0,145 90,90 180,35 270,100 360,85 450,25 540,55 600,30"/></svg><div className="days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div><div className="chart-note"><Check/> You studied 24 hours this week. Great job!</div></section>
      <section className="panel continue-panel"><div className="panel-title"><div><h2>Continue learning</h2><p>Pick up where you left off</p></div><button>View all</button></div><div className="lesson"><span className="purple"><Calculator/></span><div><small>Mathematics</small><b>Algebraic Expressions</b><div className="progress"><i style={{width:'65%'}}></i></div><em>65% complete</em></div></div><button className="button green full" onClick={() => setPage('exam')}>Continue lesson <Play/></button></section>
      <section className="panel subjects-panel"><div className="panel-title"><div><h2>Your subjects</h2><p>Keep building momentum</p></div><button>View all</button></div><div className="dash-subjects">{subjects.map(({name,icon:Icon,color,progress,detail}) => <article key={name}><span className={color}><Icon/></span><div className="subject-name"><b>{name}</b><strong>{progress}%</strong></div><div className="progress"><i className={color} style={{width:`${progress}%`}}></i></div><small>{detail}</small><button onClick={() => setPage('exam')}>Practice now</button></article>)}</div></section>
      <section className="panel mock-panel"><div className="panel-title"><div><h2>Upcoming mock exam</h2><p>Your next scheduled challenge</p></div></div><div className="mock-date"><span><b>18</b><small>JUL</small></span><div><b>WASSCE Mathematics Mock</b><p><Clock3/> 9:00 AM · 120 minutes</p><small>50 questions</small></div></div><button className="button outline full" onClick={() => setPage('exam')}>View details</button></section>
    </div>
  </main></AppShell>;
}

const questions = [
  { q: 'If 3x + 5 = 20, what is the value of x?', choices: ['3','5','7','15'], answer: 1 },
  { q: 'Simplify 2(a + 4) − 3a.', choices: ['a + 8','8 − a','5a + 4','a − 8'], answer: 1 },
  { q: 'What is 15% of 240?', choices: ['24','30','36','40'], answer: 2 },
];

function Exam({ setPage }) {
  const [index, setIndex] = useState(0); const [selected, setSelected] = useState({}); const [flagged, setFlagged] = useState(false);
  const current = questions[index];
  return <div className="exam-page">
    <header className="exam-header"><Logo/><div className="exam-title"><b>WASSCE Mathematics Mock</b><small>Mathematics • Core</small></div><div className="exam-timer"><Clock3/><span><small>Time remaining</small><b>01:24:36</b></span></div><button className="exit-exam" onClick={() => setPage('dashboard')}>Exit exam</button></header>
    <div className="exam-progress-top"><i style={{width:`${((index+1)/50)*100}%`}}></i></div>
    <main className="exam-layout">
      <section className="question-area">
        <div className="mobile-exam-intro">
          <h1>WASSCE Mathematics Mock</h1>
          <div className="mobile-timer"><Clock3/><b>01:24:36</b></div>
        </div>
        <div className="question-meta"><div><span>QUESTION {index+12} OF 50</span><div className="mini-progress"><i style={{width:`${((index+12)/50)*100}%`}}></i></div></div><span className="topic-chip">x²&nbsp; Algebra</span></div>
        <article className="question-card"><h1>{current.q}</h1><div className="answers">{current.choices.map((choice,i) => <button key={choice} className={selected[index] === i ? 'selected' : ''} onClick={() => setSelected({...selected,[index]:i})}><span>{String.fromCharCode(65+i)}</span><b>{choice}</b>{selected[index] === i && <Check/>}</button>)}</div></article>
        <div className="exam-controls"><button className="button outline" disabled={index===0} onClick={() => setIndex(index-1)}><ArrowLeft/> Previous</button><button className={`flag-button ${flagged?'active':''}`} onClick={() => setFlagged(!flagged)}><Flag/> {flagged?'Flagged':'Flag for review'}</button><button className="button navy" onClick={() => index < questions.length-1 ? setIndex(index+1) : setPage('results')}>{index < questions.length-1 ? 'Next' : 'Finish'} <ArrowRight/></button></div>
        <div className="mobile-question-strip">
          <div>{[8,9,10,11,12,13,14,15].map(n => <button key={n} className={`${n < 10 ? 'done' : ''} ${n === index + 12 ? 'active' : ''}`}>{n}</button>)}</div>
          <p><span><i className="done"></i> Answered</span><span><i className="open"></i> Unanswered</span><span><i className="marked"></i> Flagged</span></p>
        </div>
      </section>
      <aside className="question-nav"><div><h2>Question navigator</h2><span><i className="answered"></i> Answered <i className="current"></i> Current</span></div><div className="number-grid">{Array.from({length:20},(_,i) => <button className={`${i===index+11?'current':''} ${i<10?'answered':''}`} key={i}>{i+1}</button>)}</div><div className="nav-legend"><span><i className="answered"></i> Answered</span><span><i></i> Unanswered</span><span><i className="flagged"></i> Flagged</span></div><button className="button green full" onClick={() => setPage('results')}>Submit exam</button></aside>
    </main>
  </div>;
}

function Results({ setPage }) { return <div className="results-page"><header className="simple-header"><Logo/><button className="avatar">AM</button></header><main className="results-wrap">
  <section className="celebrate"><div className="trophy-burst"><Trophy/></div><span>MOCK EXAM COMPLETE</span><h1>Great work, Ama!</h1><p>You’ve completed the WASSCE Mathematics Mock. Here’s how you performed.</p></section>
  <div className="results-grid"><section className="score-panel panel"><div className="score-ring"><div><b>78%</b><small>Your score</small></div></div><div className="score-counts"><div className="correct"><b>39</b><small>Correct</small></div><div className="wrong"><b>8</b><small>Incorrect</small></div><div><b>3</b><small>Skipped</small></div></div></section>
  <section className="panel performance"><div className="panel-title"><div><h2>Performance by topic</h2><p>See where you’re strongest</p></div></div>{[['Algebra',85,'green'],['Geometry',70,'gold'],['Statistics',80,'blue'],['Number & Numeration',72,'purple']].map(([n,p,c]) => <div className="topic-row" key={n}><span>{n}</span><div className="progress"><i className={c} style={{width:`${p}%`}}></i></div><b>{p}%</b></div>)}</section>
  <section className="panel focus"><span><Target/></span><div><small>FOCUS NEXT</small><h2>Strengthen your Geometry</h2><p>Practising angles and constructions could lift your next score by up to 8%.</p><button className="button green" onClick={() => setPage('exam')}>Practice weak topics <ArrowRight/></button></div></section>
  <section className="panel explanation"><div className="panel-title"><div><h2>Review a question</h2><p>Understand the working, not just the answer</p></div></div><span>QUESTION 12</span><h3>If 3x + 5 = 20, what is the value of x?</h3><div className="working"><p>3x + 5 = 20</p><p>3x = 20 − 5 <em>Subtract 5 from both sides</em></p><p>3x = 15</p><p>x = 15 ÷ 3 <em>Divide both sides by 3</em></p><b>x = 5</b></div></section></div>
  <div className="result-actions"><button className="button outline" onClick={() => setPage('dashboard')}><LayoutDashboard/> Back to dashboard</button><button className="button navy" onClick={() => setPage('exam')}><FileQuestion/> Review answers</button></div>
  </main></div>; }

function App() {
  const getPage = () => location.hash.replace('#','') || 'home';
  const [page, setPageState] = useState(getPage());
  const setPage = p => { location.hash = p; setPageState(p); window.scrollTo(0,0); };
  useEffect(() => { const fn=()=>setPageState(getPage()); window.addEventListener('hashchange',fn); return()=>window.removeEventListener('hashchange',fn); },[]);
  if (page === 'dashboard' || page === 'subjects') return <Dashboard setPage={setPage}/>;
  if (page === 'exam') return <Exam setPage={setPage}/>;
  if (page === 'results') return <Results setPage={setPage}/>;
  return <HomePage setPage={setPage}/>;
}

createRoot(document.getElementById('root')).render(<App/>);
