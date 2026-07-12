import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft, ArrowRight, BarChart3, Bell, BookOpen, Calculator, CalendarDays,
  Check, ChevronRight, CircleHelp, Clock3, FileQuestion, Flag, Flame, FlaskConical,
  GraduationCap, Home, Languages, LayoutDashboard, Lightbulb, Menu, Play, Search,
  Sparkles, Star, Target, Trophy, UserRound, X, Zap, Users, ClipboardList,
  Settings, MoreHorizontal, Plus, Filter, Download, Edit3, Trash2, Eye,
  ShieldCheck, TrendingUp, Upload, CheckCircle2, LogOut, SlidersHorizontal,
  LockKeyhole, Mail, Award, Video, ListChecks, Bookmark, RotateCcw, Save,
  Camera, ChevronDown, CirclePlay, Brain, NotebookTabs
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
        <button onClick={() => { setPage('past-questions'); setOpen(false); }}>Past questions</button>
        <button onClick={() => { setPage('mock-library'); setOpen(false); }}>Mock exams</button>
        <button className="nav-signin" onClick={() => { setPage('signin'); setOpen(false); }}>Sign in</button>
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
    ['dashboard', Home, 'Home'], ['subjects', BookOpen, 'My subjects'], ['past-questions', FileQuestion, 'Past questions'],
    ['mock-library', Clock3, 'Mock exams'], ['progress', BarChart3, 'Progress'], ['profile', Settings, 'Profile & settings']
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

function AuthPage({ mode, setPage }) {
  const register=mode==='register';
  const [showPassword,setShowPassword]=useState(false);
  const submit=e=>{e.preventDefault();setPage('dashboard')};
  return <div className="auth-page"><section className="auth-visual"><div className="auth-brand"><Logo/></div><img src="/assets/edupass-students.png" alt="Ghanaian students learning together"/><div className="auth-visual-copy"><span><Sparkles/> Built for your success</span><h1>Study with confidence.<br/>Walk into every exam ready.</h1><p>Lessons, past questions and realistic mock exams—all built around your goals.</p><div><b>5,000+</b><small>Past questions</small><b>150k+</b><small>Questions answered</small></div></div></section><section className="auth-form-side"><button className="auth-back" onClick={()=>setPage('home')}><ArrowLeft/> Back to home</button><div className="auth-mobile-logo"><Logo/></div><form className="auth-form" onSubmit={submit}><span className="auth-eyebrow">{register?'CREATE YOUR ACCOUNT':'WELCOME BACK'}</span><h1>{register?'Start your learning journey':'Sign in to EduPass'}</h1><p>{register?'Join students across Ghana preparing smarter for BECE and WASSCE.':'Continue learning, practising and tracking your progress.'}</p>{register&&<div className="auth-two"><label>First name<div><UserRound/><input required placeholder="Ama"/></div></label><label>Last name<div><UserRound/><input required placeholder="Serwaa"/></div></label></div>}<label>Email address<div><Mail/><input type="email" required placeholder="ama@example.com"/></div></label>{register&&<label>Preparing for<div><GraduationCap/><select defaultValue="WASSCE"><option>BECE</option><option>WASSCE</option></select><ChevronDown/></div></label>}<label>Password<div><LockKeyhole/><input type={showPassword?'text':'password'} required placeholder="Enter your password"/><button type="button" onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Hide':'Show'}</button></div></label>{!register&&<div className="auth-options"><label><input type="checkbox"/> Remember me</label><button type="button">Forgot password?</button></div>}<button className="auth-submit" type="submit">{register?'Create my account':'Sign in'} <ArrowRight/></button><div className="auth-divider"><span>or continue with</span></div><button className="auth-google" type="button"><b>G</b> Google</button><p className="auth-switch">{register?'Already have an account?':'New to EduPass?'} <button type="button" onClick={()=>setPage(register?'signin':'register')}>{register?'Sign in':'Create an account'}</button></p></form></section></div>;
}

function StudentPage({ page, setPage, title, subtitle, action, children }) {
  return <AppShell page={page} setPage={setPage}><main className="student-page app-content"><div className="student-page-heading"><div><span>MY LEARNING</span><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>{children}</main></AppShell>;
}

const curriculum = [
  {name:'Mathematics',icon:Calculator,color:'green',progress:75,topics:[['Algebraic expressions',65],['Sets and operations',80],['Geometry and mensuration',54],['Statistics and probability',72]]},
  {name:'English Language',icon:Languages,color:'blue',progress:60,topics:[['Comprehension skills',70],['Grammar and usage',62],['Essay writing',48],['Oral English',58]]},
  {name:'Integrated Science',icon:FlaskConical,color:'purple',progress:68,topics:[['Cells and living systems',82],['Energy and electricity',60],['Matter and materials',74],['The environment',56]]},
  {name:'Social Studies',icon:GraduationCap,color:'orange',progress:55,topics:[['Governance and citizenship',70],['Culture and identity',61],['Environment and society',44],['Economic development',48]]},
];

function StudentSubjects({ setPage }) {
  const [programme,setProgramme]=useState('WASSCE'); const [expanded,setExpanded]=useState('Mathematics');
  return <StudentPage page="subjects" setPage={setPage} title="Subjects and topics" subtitle="Follow your curriculum and continue from where you stopped." action={<div className="programme-switch"><button className={programme==='BECE'?'active':''} onClick={()=>setProgramme('BECE')}>BECE</button><button className={programme==='WASSCE'?'active':''} onClick={()=>setProgramme('WASSCE')}>WASSCE</button></div>}><div className="curriculum-summary"><div><span><BookOpen/></span><div><small>YOUR PROGRAMME</small><b>{programme} preparation</b><p>4 active subjects • 62 topics</p></div></div><div><span>Overall progress <b>66%</b></span><div className="progress"><i className="green" style={{width:'66%'}}></i></div></div></div><div className="curriculum-list">{curriculum.map(({name,icon:Icon,color,progress,topics})=><article className={`curriculum-card ${expanded===name?'expanded':''}`} key={name}><button className="curriculum-card-head" onClick={()=>setExpanded(expanded===name?'':name)}><span className={color}><Icon/></span><div><h2>{name}</h2><p>{topics.length*4} lessons • {topics.length} topic groups</p></div><div className="subject-overall"><b>{progress}%</b><div className="progress"><i className={color} style={{width:`${progress}%`}}></i></div></div><ChevronDown/></button>{expanded===name&&<div className="topic-list">{topics.map(([topic,p],i)=><button key={topic} onClick={()=>setPage('lesson')}><span>{i+1}</span><div><b>{topic}</b><small>{3+i} lessons • {12+i*4} practice questions</small></div><div><em>{p}%</em><div className="progress"><i className={color} style={{width:`${p}%`}}></i></div></div><ChevronRight/></button>)}</div>}</article>)}</div></StudentPage>;
}

function LessonPage({ setPage }) {
  const [section,setSection]=useState(0); const sections=['Introduction to expressions','Like and unlike terms','Simplifying expressions','Worked examples','Quick knowledge check'];
  return <StudentPage page="subjects" setPage={setPage} title="Algebraic expressions" subtitle="Mathematics • Topic 3 of 16"><div className="lesson-layout"><aside className="lesson-outline"><div><span>TOPIC PROGRESS</span><b>3 of 5 complete</b><div className="progress"><i className="green" style={{width:'60%'}}></i></div></div><h2>In this lesson</h2>{sections.map((s,i)=><button className={section===i?'active':''} onClick={()=>setSection(i)} key={s}><span>{i<2?<Check/>:i+1}</span><div><b>{s}</b><small>{i===4?'5 questions':`${5+i*2} min`}</small></div>{section===i&&<Play/>}</button>)}</aside><article className="lesson-content"><div className="lesson-video"><div><CirclePlay/><span>LESSON {section+1}</span><h2>{sections[section]}</h2><p>Watch the explanation, then use the notes and worked examples below.</p><button><Play/> Play video lesson</button></div></div><div className="lesson-body"><span className="lesson-tag"><NotebookTabs/> Lesson notes</span><h2>Understanding algebraic expressions</h2><p>An algebraic expression combines numbers, variables and mathematical operations. Unlike an equation, it does not contain an equals sign.</p><div className="formula-box"><span>Example</span><b>3x + 5y − 2</b><p><strong>3x</strong> and <strong>5y</strong> are terms, while <strong>−2</strong> is the constant.</p></div><h3>Key ideas to remember</h3><ul><li><Check/> A variable is a letter that represents an unknown value.</li><li><Check/> Like terms have the same variables raised to the same powers.</li><li><Check/> Only like terms can be added or subtracted directly.</li></ul><div className="lesson-nav"><button disabled={section===0} onClick={()=>setSection(section-1)}><ArrowLeft/> Previous</button><button onClick={()=>section<sections.length-1?setSection(section+1):setPage('past-questions')}>{section<sections.length-1?'Next lesson':'Start practice'} <ArrowRight/></button></div></div></article></div></StudentPage>;
}

const questionSets=[
  ['WASSCE Mathematics 2025','Mathematics','WASSCE','50 questions','120 min','2025'],['BECE English Language 2025','English Language','BECE','40 questions','60 min','2025'],['WASSCE Integrated Science 2024','Integrated Science','WASSCE','50 questions','90 min','2024'],['BECE Social Studies 2024','Social Studies','BECE','40 questions','60 min','2024'],['WASSCE Core Mathematics 2023','Mathematics','WASSCE','50 questions','120 min','2023'],['BECE Integrated Science 2023','Integrated Science','BECE','40 questions','60 min','2023']
];

function PastQuestions({ setPage }) {
  const [query,setQuery]=useState(''); const [exam,setExam]=useState('All');
  const filtered=questionSets.filter(q=>(q[0]+q[1]).toLowerCase().includes(query.toLowerCase())&&(exam==='All'||q[2]===exam));
  return <StudentPage page="past-questions" setPage={setPage} title="Past questions" subtitle="Practise official-style questions organised by subject and year."><div className="library-toolbar"><div><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search past questions"/></div><select value={exam} onChange={e=>setExam(e.target.value)}><option>All</option><option>BECE</option><option>WASSCE</option></select><select><option>All subjects</option><option>Mathematics</option><option>English Language</option></select><select><option>Newest first</option><option>Oldest first</option></select></div><div className="question-set-grid">{filtered.map(([title,subject,level,count,time,year],i)=><article key={title}><div className="set-card-top"><span className={['green','blue','purple','orange'][i%4]}><FileQuestion/></span><button><Bookmark/></button></div><span className="set-level">{level} • {year}</span><h2>{title}</h2><p>{subject}</p><div className="set-meta"><span><ListChecks/> {count}</span><span><Clock3/> {time}</span></div><div className="set-foot"><small>{i%3===0?'Last score: 78%':'Not attempted'}</small><button onClick={()=>setPage('exam')}>{i%3===0?'Try again':'Start practice'} <ArrowRight/></button></div></article>)}</div></StudentPage>;
}

function MockLibrary({ setPage }) {
  const mocks=[['WASSCE Mathematics Mock 4','Mathematics','50','120','Medium','2,420'],['BECE Core Mock 6','All core subjects','80','150','Medium','1,860'],['WASSCE English Trial','English Language','60','120','Hard','1,530'],['BECE Science Sprint','Integrated Science','40','60','Easy','980']];
  return <StudentPage page="mock-library" setPage={setPage} title="Mock-exam library" subtitle="Test yourself under realistic examination conditions."><section className="featured-mock"><div><span><Sparkles/> RECOMMENDED FOR YOU</span><h2>WASSCE Mathematics Mock 4</h2><p>Based on your recent Algebra progress, this is the right challenge for your next study session.</p><div><span><FileQuestion/> 50 questions</span><span><Clock3/> 120 minutes</span><span><Target/> Medium difficulty</span></div><button onClick={()=>setPage('exam')}>Start mock exam <ArrowRight/></button></div><div className="featured-score"><Target/><b>+8%</b><span>Possible score improvement</span></div></section><div className="mock-filter-row"><div><button className="active">All exams</button><button>BECE</button><button>WASSCE</button></div><select><option>All subjects</option></select></div><div className="mock-library-grid">{mocks.map(([name,subject,count,time,diff,taken],i)=><article key={name}><div className="mock-cover"><span>{i%2?'BECE':'WASSCE'}</span><ClipboardList/></div><div className="mock-card-body"><span className={`difficulty ${diff.toLowerCase()}`}>{diff}</span><h2>{name}</h2><p>{subject}</p><div><span><FileQuestion/> {count} questions</span><span><Clock3/> {time} min</span></div><small><Users/> {taken} students attempted this</small><button onClick={()=>setPage('exam')}>View exam <ArrowRight/></button></div></article>)}</div></StudentPage>;
}

function StudentProgress({ setPage }) {
  return <StudentPage page="progress" setPage={setPage} title="Progress analytics" subtitle="Understand your strengths and know exactly what to study next." action={<select className="period-select"><option>Last 30 days</option><option>This term</option></select>}><div className="progress-metrics"><div><span className="green"><TrendingUp/></span><small>Average score</small><b>76%</b><em>+5% this month</em></div><div><span className="orange"><Flame/></span><small>Study streak</small><b>12 days</b><em>Personal best: 16</em></div><div><span className="blue"><Clock3/></span><small>Time studied</small><b>24.5 hrs</b><em>+3.2 hours</em></div><div><span className="purple"><Award/></span><small>Questions mastered</small><b>482</b><em>of 620 attempted</em></div></div><div className="analytics-grid"><section className="analytics-card score-trend"><div className="panel-title"><div><h2>Score trend</h2><p>Your mock-exam scores over time</p></div></div><div className="trend-chart"><div className="trend-grid"><i></i><i></i><i></i><i></i></div><svg viewBox="0 0 600 180" preserveAspectRatio="none"><path d="M0 145 L100 120 L200 130 L300 76 L400 92 L500 42 L600 28"/><circle cx="0" cy="145"/><circle cx="100" cy="120"/><circle cx="200" cy="130"/><circle cx="300" cy="76"/><circle cx="400" cy="92"/><circle cx="500" cy="42"/><circle cx="600" cy="28"/></svg><div><span>May 04</span><span>May 18</span><span>Jun 01</span><span>Jun 15</span><span>Jul 01</span></div></div></section><section className="analytics-card goal-card"><div className="panel-title"><div><h2>Weekly goal</h2><p>5 of 7 study days complete</p></div></div><div className="large-goal-ring"><span><b>71%</b><small>complete</small></span></div><p>Two more study sessions to reach your weekly goal.</p></section><section className="analytics-card topic-mastery"><div className="panel-title"><div><h2>Topic mastery</h2><p>Performance across your active subjects</p></div></div>{[['Algebra',85,'green'],['Comprehension',78,'blue'],['Living systems',72,'purple'],['Governance',66,'orange']].map(([n,p,c])=><div key={n}><span>{n}</span><div className="progress"><i className={c} style={{width:`${p}%`}}></i></div><b>{p}%</b></div>)}</section><section className="analytics-card next-focus"><span><Brain/></span><div><small>YOUR NEXT FOCUS</small><h2>Geometry and mensuration</h2><p>Your last three attempts averaged 58%. A focused 15-minute practice could make a meaningful difference.</p><button onClick={()=>setPage('past-questions')}>Practise this topic <ArrowRight/></button></div></section></div><section className="recent-results-card"><div className="panel-title"><div><h2>Recent results</h2><p>Your latest completed examinations</p></div><button onClick={()=>setPage('results')}>View answer reviews</button></div>{[['WASSCE Mathematics Mock 3','10 Jul 2026','82%','Pass'],['English Language Trial','06 Jul 2026','76%','Pass'],['Integrated Science Sprint','30 Jun 2026','68%','Review']].map(([name,date,score,status])=><div key={name}><span><ClipboardList/></span><div><b>{name}</b><small>{date}</small></div><strong>{score}</strong><em className={status==='Pass'?'pass':''}>{status}</em><button onClick={()=>setPage('results')}><ChevronRight/></button></div>)}</section></StudentPage>;
}

function ProfileSettings({ setPage }) {
  const [tab,setTab]=useState('profile'); const [toggles,setToggles]=useState([true,true,false,true]); const [saved,setSaved]=useState(false);
  const save=()=>{setSaved(true);setTimeout(()=>setSaved(false),1800)};
  return <StudentPage page="profile" setPage={setPage} title="Profile and study settings" subtitle="Manage your account, preferences and learning goals."><div className="settings-tabs"><button className={tab==='profile'?'active':''} onClick={()=>setTab('profile')}><UserRound/> Profile</button><button className={tab==='study'?'active':''} onClick={()=>setTab('study')}><Target/> Study preferences</button><button className={tab==='notifications'?'active':''} onClick={()=>setTab('notifications')}><Bell/> Notifications</button><button className={tab==='security'?'active':''} onClick={()=>setTab('security')}><LockKeyhole/> Security</button></div>{tab==='profile'&&<div className="student-settings-grid"><section className="settings-card profile-photo-card"><div className="profile-photo">AM<button><Camera/></button></div><h2>Ama Mensah</h2><p>WASSCE candidate • Joined May 2026</p><span>Level 8 learner</span><div className="profile-mini-stats"><div><b>2,450</b><small>Points</small></div><div><b>12</b><small>Day streak</small></div></div></section><section className="settings-card settings-fields"><div><h2>Personal information</h2><p>Update the details attached to your account.</p></div><div className="form-two"><label>First name<input defaultValue="Ama"/></label><label>Last name<input defaultValue="Mensah"/></label></div><label>Email address<input defaultValue="ama.mensah@example.com"/></label><label>School<input defaultValue="Accra Senior High School"/></label><label>Preparing for<select defaultValue="WASSCE"><option>BECE</option><option>WASSCE</option></select></label><button onClick={save}><Save/> Save changes</button></section></div>}{tab==='study'&&<section className="settings-card preference-card"><div><h2>Study preferences</h2><p>Personalise the way EduPass plans your learning.</p></div><label>Daily study goal<select defaultValue="30 minutes"><option>15 minutes</option><option>30 minutes</option><option>45 minutes</option><option>60 minutes</option></select></label><label>Preferred study time<select defaultValue="Evening"><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label><label>Exam programme<select defaultValue="WASSCE"><option>BECE</option><option>WASSCE</option></select></label><label>Priority subject<select defaultValue="Mathematics"><option>Mathematics</option><option>English Language</option><option>Integrated Science</option></select></label><button onClick={save}><Save/> Save preferences</button></section>}{tab==='notifications'&&<section className="settings-card preference-card"><div><h2>Notifications</h2><p>Choose the reminders and updates you would like to receive.</p></div>{['Daily study reminder','Upcoming mock-exam reminder','Weekly progress summary','New lessons and question sets'].map((n,i)=><div className="student-toggle" key={n}><div><b>{n}</b><small>{['Stay consistent with a reminder at your preferred time.','Get notified one day before a scheduled mock.','Receive a helpful summary every Sunday.','Hear when new resources are added.'][i]}</small></div><button className={toggles[i]?'on':''} onClick={()=>setToggles(toggles.map((v,x)=>x===i?!v:v))}><i></i></button></div>)}</section>}{tab==='security'&&<section className="settings-card preference-card"><div><h2>Password and security</h2><p>Keep your EduPass account secure.</p></div><label>Current password<input type="password" placeholder="Enter current password"/></label><label>New password<input type="password" placeholder="At least 8 characters"/></label><label>Confirm new password<input type="password" placeholder="Repeat new password"/></label><button onClick={save}><LockKeyhole/> Update password</button></section>}{saved&&<div className="student-save-toast"><CheckCircle2/> Your changes have been saved.</div>}</StudentPage>;
}

const adminStudents = [
  { name:'Ama Serwaa', id:'STU-2048', level:'WASSCE', joined:'08 Jul 2026', score:'82%', status:'Active', initials:'AS' },
  { name:'Kwame Mensah', id:'STU-2047', level:'BECE', joined:'08 Jul 2026', score:'76%', status:'Active', initials:'KM' },
  { name:'Esi Owusu', id:'STU-2046', level:'WASSCE', joined:'07 Jul 2026', score:'91%', status:'Active', initials:'EO' },
  { name:'Nana Boateng', id:'STU-2045', level:'BECE', joined:'06 Jul 2026', score:'64%', status:'Needs support', initials:'NB' },
  { name:'Abena Asare', id:'STU-2044', level:'WASSCE', joined:'05 Jul 2026', score:'88%', status:'Active', initials:'AA' },
];

const adminQuestions = [
  { code:'MAT-2401', question:'If 3x + 5 = 20, what is the value of x?', subject:'Mathematics', exam:'WASSCE', difficulty:'Easy', status:'Published' },
  { code:'ENG-1842', question:'Choose the word nearest in meaning to “diligent”.', subject:'English Language', exam:'BECE', difficulty:'Medium', status:'Published' },
  { code:'SCI-1560', question:'Which organelle is responsible for respiration?', subject:'Integrated Science', exam:'WASSCE', difficulty:'Medium', status:'Draft' },
  { code:'SOC-0921', question:'Which arm of government interprets the law?', subject:'Social Studies', exam:'BECE', difficulty:'Easy', status:'Published' },
  { code:'MAT-2400', question:'Find the gradient of the line joining the two points.', subject:'Mathematics', exam:'WASSCE', difficulty:'Hard', status:'Review' },
];

function AdminMetric({ icon:Icon, label, value, change, color }) {
  return <article className="admin-metric"><span className={color}><Icon/></span><div><small>{label}</small><b>{value}</b><em className={change?.startsWith('+')?'up':''}>{change}</em></div></article>;
}

function AdminTable({ columns, children }) {
  return <div className="admin-table-wrap"><table className="admin-table"><thead><tr>{columns.map(c=><th key={c}>{c}</th>)}</tr></thead><tbody>{children}</tbody></table></div>;
}

function AdminDashboard({ notify }) {
  return <>
    <div className="admin-metrics"><AdminMetric icon={Users} label="Total students" value="12,840" change="+8.2% this month" color="green"/><AdminMetric icon={FileQuestion} label="Question bank" value="5,462" change="+184 this month" color="blue"/><AdminMetric icon={ClipboardList} label="Mock exams taken" value="8,931" change="+12.4% this month" color="purple"/><AdminMetric icon={TrendingUp} label="Average score" value="74.6%" change="+3.1% this month" color="gold"/></div>
    <div className="admin-dashboard-grid">
      <section className="admin-card admin-growth"><div className="admin-card-title"><div><h2>Student activity</h2><p>Active learners over the past seven days</p></div><select><option>Last 7 days</option><option>Last 30 days</option></select></div><div className="admin-bar-chart">{[48,66,58,78,64,92,84].map((v,i)=><div key={i}><i style={{height:`${v}%`}}></i><span>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</span></div>)}</div></section>
      <section className="admin-card admin-performance"><div className="admin-card-title"><div><h2>Exam performance</h2><p>Average scores by programme</p></div></div><div className="performance-rings"><div className="mini-ring bece-ring"><span><b>71%</b><small>BECE</small></span></div><div className="mini-ring wassce-ring"><span><b>78%</b><small>WASSCE</small></span></div></div><button onClick={()=>notify('Analytics report opened')}>View full analytics <ArrowRight/></button></section>
      <section className="admin-card admin-recent"><div className="admin-card-title"><div><h2>Recent students</h2><p>Latest accounts created</p></div><button onClick={()=>location.hash='admin-students'}>View all</button></div><div className="recent-list">{adminStudents.slice(0,4).map(s=><div key={s.id}><span>{s.initials}</span><div><b>{s.name}</b><small>{s.level} • {s.id}</small></div><em>{s.joined.replace(' 2026','')}</em></div>)}</div></section>
      <section className="admin-card admin-tasks"><div className="admin-card-title"><div><h2>Needs attention</h2><p>Items awaiting an administrator</p></div></div>{[['28','Questions awaiting review'],['4','Mock exams scheduled this week'],['17','Students needing support']].map(([n,l],i)=><button key={l} onClick={()=>notify(`${l} opened`)}><span className={['gold','blue','red'][i]}>{n}</span><b>{l}</b><ChevronRight/></button>)}</section>
    </div>
  </>;
}

function AdminStudents({ notify }) {
  const [query,setQuery]=useState('');
  const filtered=adminStudents.filter(s=>(s.name+s.id+s.level).toLowerCase().includes(query.toLowerCase()));
  return <section className="admin-card admin-page-card"><div className="admin-page-tools"><div className="admin-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search students by name or ID"/></div><button className="admin-filter"><Filter/> Filters</button><button className="admin-secondary" onClick={()=>notify('Student report exported')}><Download/> Export</button><button className="admin-primary" onClick={()=>notify('Student invitation form opened')}><Plus/> Add student</button></div><AdminTable columns={['Student','Programme','Joined','Average score','Status','Actions']}>{filtered.map(s=><tr key={s.id}><td><div className="table-person"><span>{s.initials}</span><div><b>{s.name}</b><small>{s.id}</small></div></div></td><td><span className="admin-chip neutral">{s.level}</span></td><td>{s.joined}</td><td><b>{s.score}</b></td><td><span className={`admin-chip ${s.status==='Active'?'success':'warning'}`}>{s.status}</span></td><td><button className="table-action" onClick={()=>notify(`${s.name}'s profile opened`)}><Eye/></button><button className="table-action"><MoreHorizontal/></button></td></tr>)}</AdminTable><div className="table-footer"><span>Showing {filtered.length} of 12,840 students</span><div><button disabled>Previous</button><button className="active">1</button><button>2</button><button>3</button><button>Next</button></div></div></section>;
}

function AdminSubjects({ notify }) {
  return <><div className="admin-section-actions"><div><h2>Curriculum subjects</h2><p>Organise lessons, topics and questions for each programme.</p></div><button className="admin-primary" onClick={()=>notify('New subject form opened')}><Plus/> Add subject</button></div><div className="admin-subject-grid">{subjects.concat([{name:'ICT',icon:LayoutDashboard,color:'blue',progress:45,detail:'7 of 12 topics'},{name:'French',icon:Languages,color:'purple',progress:38,detail:'5 of 14 topics'}]).map(({name,icon:Icon,color},i)=><article className="admin-subject-card" key={name}><div className="subject-card-top"><span className={color}><Icon/></span><button><MoreHorizontal/></button></div><h3>{name}</h3><p>{i%2?'BECE and WASSCE':'Core subject • BECE and WASSCE'}</p><div className="subject-card-stats"><span><b>{12+i*2}</b><small>Topics</small></span><span><b>{430+i*74}</b><small>Questions</small></span><span><b>{8+i}</b><small>Lessons</small></span></div><div className="subject-card-foot"><span className="admin-chip success">Published</span><button onClick={()=>notify(`${name} curriculum opened`)}>Manage subject <ArrowRight/></button></div></article>)}</div></>;
}

function AdminQuestions({ notify }) {
  const [query,setQuery]=useState('');
  const rows=adminQuestions.filter(q=>(q.question+q.subject+q.code).toLowerCase().includes(query.toLowerCase()));
  return <section className="admin-card admin-page-card"><div className="admin-page-tools"><div className="admin-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search the question bank"/></div><select className="admin-select"><option>All subjects</option><option>Mathematics</option><option>English Language</option></select><button className="admin-secondary" onClick={()=>notify('Import panel opened')}><Upload/> Import</button><button className="admin-primary" onClick={()=>notify('Question editor opened')}><Plus/> Add question</button></div><AdminTable columns={['Question','Subject','Exam','Difficulty','Status','Actions']}>{rows.map(q=><tr key={q.code}><td className="question-cell"><b>{q.question}</b><small>{q.code}</small></td><td>{q.subject}</td><td><span className="admin-chip neutral">{q.exam}</span></td><td><span className={`admin-chip ${q.difficulty.toLowerCase()}`}>{q.difficulty}</span></td><td><span className={`admin-chip ${q.status==='Published'?'success':q.status==='Draft'?'neutral':'warning'}`}>{q.status}</span></td><td><button className="table-action" onClick={()=>notify(`${q.code} opened in editor`)}><Edit3/></button><button className="table-action danger"><Trash2/></button></td></tr>)}</AdminTable><div className="table-footer"><span>Showing {rows.length} of 5,462 questions</span><div><button disabled>Previous</button><button className="active">1</button><button>2</button><button>Next</button></div></div></section>;
}

function AdminExams({ notify }) {
  const exams=[['WASSCE Mathematics Mock 4','WASSCE','Mathematics','50 questions','18 Jul 2026','Scheduled'],['BECE Core Mock 6','BECE','All core subjects','80 questions','20 Jul 2026','Draft'],['WASSCE English Trial','WASSCE','English Language','60 questions','10 Jul 2026','Completed'],['BECE Science Sprint','BECE','Integrated Science','40 questions','08 Jul 2026','Completed']];
  return <><div className="admin-section-actions"><div><h2>Mock examinations</h2><p>Create, schedule and monitor practice examinations.</p></div><button className="admin-primary" onClick={()=>notify('Mock exam builder opened')}><Plus/> Create mock exam</button></div><div className="admin-exam-grid">{exams.map(([name,level,subject,count,date,status],i)=><article className="admin-card admin-exam-card" key={name}><div className="exam-card-head"><span className={i%2?'green':'blue'}><ClipboardList/></span><div><span className={`admin-chip ${status==='Completed'?'success':status==='Scheduled'?'info':'neutral'}`}>{status}</span><button><MoreHorizontal/></button></div></div><h3>{name}</h3><p>{level} • {subject}</p><div className="exam-card-meta"><span><FileQuestion/> {count}</span><span><CalendarDays/> {date}</span><span><Users/> {status==='Completed'?`${1,240+i*381} attempts`:'Not started'}</span></div><div className="exam-card-foot"><button onClick={()=>notify(`${name} preview opened`)}><Eye/> Preview</button><button onClick={()=>notify(`${name} editor opened`)}><Edit3/> Edit</button></div></article>)}</div></>;
}

function AdminResults() {
  return <><div className="admin-metrics"><AdminMetric icon={ClipboardList} label="Completed attempts" value="8,931" change="+12.4% this month" color="green"/><AdminMetric icon={Target} label="Pass rate" value="72.8%" change="+4.2% this month" color="blue"/><AdminMetric icon={Trophy} label="Highest score" value="98%" change="WASSCE Mathematics" color="purple"/><AdminMetric icon={Clock3} label="Average duration" value="74 min" change="−6 min this month" color="gold"/></div><section className="admin-card admin-page-card"><div className="admin-card-title"><div><h2>Recent exam results</h2><p>Latest completed student attempts</p></div><button className="admin-secondary"><Download/> Export report</button></div><AdminTable columns={['Student','Mock exam','Completed','Score','Result','Review']}>{adminStudents.map((s,i)=><tr key={s.id}><td><div className="table-person"><span>{s.initials}</span><div><b>{s.name}</b><small>{s.id}</small></div></div></td><td>{i%2?'BECE Core Mock 5':'WASSCE Mathematics Mock 4'}</td><td>{9+i}:2{i} AM</td><td><b>{s.score}</b></td><td><span className={`admin-chip ${parseInt(s.score)>69?'success':'warning'}`}>{parseInt(s.score)>69?'Pass':'Review'}</span></td><td><button className="table-action"><Eye/></button></td></tr>)}</AdminTable></section></>;
}

function AdminSettings({ notify }) {
  const [toggles,setToggles]=useState([true,true,false,true]);
  return <div className="admin-settings-grid"><section className="admin-card settings-form"><div className="admin-card-title"><div><h2>Platform information</h2><p>Core information shown across EduPass Ghana</p></div></div><label>Platform name<input defaultValue="EduPass Ghana"/></label><label>Support email<input defaultValue="support@edupassghana.com"/></label><label>Default timezone<select defaultValue="Africa/Accra"><option>Africa/Accra</option></select></label><label>Student registration<select defaultValue="Open"><option>Open</option><option>Invitation only</option><option>Closed</option></select></label><button className="admin-primary" onClick={()=>notify('Platform settings saved')}><Check/> Save changes</button></section><section className="admin-card settings-form"><div className="admin-card-title"><div><h2>Notifications and access</h2><p>Control important platform behaviour</p></div></div>{['Email new student registrations','Notify when questions need review','Allow students to retake completed mocks','Send weekly performance summaries'].map((label,i)=><div className="toggle-row" key={label}><div><b>{label}</b><small>{['Receive an email when a new account is created.','Alert administrators about editorial tasks.','Students can retry an exam after submission.','Email administrators a weekly overview.'][i]}</small></div><button className={toggles[i]?'on':''} onClick={()=>setToggles(toggles.map((v,x)=>x===i?!v:v))}><i></i></button></div>)}</section></div>;
}

function AdminPortal({ page, setPage }) {
  const [mobileOpen,setMobileOpen]=useState(false); const [toast,setToast]=useState('');
  const notify=message=>{setToast(message);setTimeout(()=>setToast(''),2200)};
  const current=page.replace('admin-','')==='admin'?'dashboard':page.replace('admin-','');
  const items=[['dashboard',LayoutDashboard,'Overview'],['students',Users,'Students'],['subjects',BookOpen,'Subjects'],['questions',FileQuestion,'Question bank'],['exams',ClipboardList,'Mock exams'],['results',BarChart3,'Results'],['settings',Settings,'Settings']];
  const titles={dashboard:['Dashboard','Monitor learning activity and platform performance.'],students:['Students','Manage student accounts and learning access.'],subjects:['Subjects','Manage the BECE and WASSCE curriculum.'],questions:['Question bank','Create, review and organise examination questions.'],exams:['Mock exams','Build and schedule realistic practice examinations.'],results:['Results and analytics','Review examination performance across the platform.'],settings:['Platform settings','Configure access, notifications and platform information.']};
  return <div className="admin-shell"><aside className={`admin-sidebar ${mobileOpen?'open':''}`}><div className="admin-brand"><Logo/><button className="admin-close" onClick={()=>setMobileOpen(false)}><X/></button></div><div className="admin-badge"><ShieldCheck/><span><b>Administrator</b><small>Control centre</small></span></div><nav>{items.map(([id,Icon,label])=><button key={id} className={current===id?'active':''} onClick={()=>{setPage(`admin-${id}`);setMobileOpen(false)}}><Icon/><span>{label}</span>{id==='questions'&&<em>28</em>}</button>)}</nav><div className="admin-user"><span>YA</span><div><b>Yaw Admin</b><small>Super administrator</small></div><button onClick={()=>setPage('home')}><LogOut/></button></div></aside>{mobileOpen&&<button className="admin-scrim" onClick={()=>setMobileOpen(false)}/>}<main className="admin-main"><header className="admin-topbar"><button className="admin-menu" onClick={()=>setMobileOpen(true)}><Menu/></button><div className="admin-top-search"><Search/><span>Search students, questions or exams</span></div><button className="icon-button"><Bell/></button><button className="admin-avatar">YA</button></header><div className="admin-content"><div className="admin-heading"><div><span>ADMIN PORTAL</span><h1>{titles[current]?.[0]}</h1><p>{titles[current]?.[1]}</p></div>{current==='dashboard'&&<button className="admin-secondary"><CalendarDays/> 06–12 July 2026</button>}</div>{current==='dashboard'&&<AdminDashboard notify={notify}/>} {current==='students'&&<AdminStudents notify={notify}/>} {current==='subjects'&&<AdminSubjects notify={notify}/>} {current==='questions'&&<AdminQuestions notify={notify}/>} {current==='exams'&&<AdminExams notify={notify}/>} {current==='results'&&<AdminResults/>} {current==='settings'&&<AdminSettings notify={notify}/>}</div></main>{toast&&<div className="admin-toast"><CheckCircle2/>{toast}</div>}</div>;
}

function App() {
  const getPage = () => location.hash.replace('#','') || 'home';
  const [page, setPageState] = useState(getPage());
  const setPage = p => { location.hash = p; setPageState(p); window.scrollTo(0,0); };
  useEffect(() => { const fn=()=>setPageState(getPage()); window.addEventListener('hashchange',fn); return()=>window.removeEventListener('hashchange',fn); },[]);
  if (page === 'signin' || page === 'register') return <AuthPage mode={page} setPage={setPage}/>;
  if (page === 'dashboard') return <Dashboard setPage={setPage}/>;
  if (page === 'subjects') return <StudentSubjects setPage={setPage}/>;
  if (page === 'lesson') return <LessonPage setPage={setPage}/>;
  if (page === 'past-questions') return <PastQuestions setPage={setPage}/>;
  if (page === 'mock-library') return <MockLibrary setPage={setPage}/>;
  if (page === 'progress') return <StudentProgress setPage={setPage}/>;
  if (page === 'profile') return <ProfileSettings setPage={setPage}/>;
  if (page === 'exam') return <Exam setPage={setPage}/>;
  if (page === 'results') return <Results setPage={setPage}/>;
  if (page === 'admin' || page.startsWith('admin-')) return <AdminPortal page={page} setPage={setPage}/>;
  return <HomePage setPage={setPage}/>;
}

createRoot(document.getElementById('root')).render(<App/>);
