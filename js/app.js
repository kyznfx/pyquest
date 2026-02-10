console.log("app.js loaded");
// ================================================
// APP STATE
// ================================================
let currentPage = 'dashboard';
let currentPhase = 0;
let currentActFilter = 'all';


// ================================================
// NAVIGATION
// ================================================
function navigate(page) {
  currentPage = page;

  // Update nav tab styles
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent.toLowerCase().includes(page.substring(0, 4))) {
      tab.classList.add('active');
    }
  });

  // Close mobile menu
  document.getElementById('navTabs').classList.remove('open');

  // Re-render and scroll to top
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ================================================
// LOCAL STORAGE HELPERS
// ================================================
function getChecked() {
  try {
    return JSON.parse(localStorage.getItem('pyq-checked') || '{}');
  } catch (e) {
    return {};
  }
}

function saveChecked(data) {
  localStorage.setItem('pyq-checked', JSON.stringify(data));
}

function getStreak() {
  try {
    return JSON.parse(localStorage.getItem('pyq-streak') || '{}');
  } catch (e) {
    return {};
  }
}

function saveStreak(data) {
  localStorage.setItem('pyq-streak', JSON.stringify(data));
}


// ================================================
// CHECKBOX TOGGLE
// ================================================
function toggleCheck(monthIndex, topicIndex) {
  const checked = getChecked();
  const key = monthIndex + '-' + topicIndex;

  if (checked[key]) {
    delete checked[key];
  } else {
    checked[key] = 1;
  }

  saveChecked(checked);
  render();
}


// ================================================
// STREAK TOGGLE
// ================================================
function toggleStreak(day) {
  const streak = getStreak();
  const today = new Date();
  const key = today.getFullYear() + '-' + today.getMonth() + '-' + day;

  if (streak[key]) {
    delete streak[key];
  } else {
    streak[key] = 1;
  }

  saveStreak(streak);
  render();
}


// ================================================
// MONTH BLOCK TOGGLE (expand/collapse)
// ================================================
function toggleMonth(element) {
  element.closest('.month-block').classList.toggle('open');
}


// ================================================
// STATS CALCULATORS
// ================================================
function getTotalTopics() {
  let count = 0;
  CURRICULUM.forEach(month => count += month.topics.length);
  return count;
}

function getCheckedCount() {
  return Object.keys(getChecked()).length;
}

function getStreakDays() {
  const streak = getStreak();
  const today = new Date();
  let count = 0;

  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();

    if (streak[key]) {
      count++;
    } else if (i > 0) {
      break;
    }
  }

  return count;
}


// ================================================
// RENDER: DASHBOARD
// ================================================
function renderDashboard() {
  const total = getTotalTopics();
  const done = getCheckedCount();
  const pct = total ? Math.round((done / total) * 100) : 0;
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const streak = getStreak();
  const monthKey = now.getFullYear() + '-' + now.getMonth() + '-';
  const monthDays = Object.keys(streak).filter(k => k.startsWith(monthKey)).length;

  let html = '';

  // Hero
  html += `
    <div class="hero">
      <div class="hero-tag"><span class="dot"></span>FEB 2026 → DEC 2026</div>
      <h1>Your Complete<br><em>Python Mastery</em> Journey</h1>
      <p>44 weeks of structured learning from absolute zero to building real-world projects. Every topic has a hands-on activity for VSCode.</p>
      <div class="stats">
        <div class="stat"><div class="n">44</div><div class="l">Weeks</div></div>
        <div class="stat"><div class="n">${total}</div><div class="l">Topics</div></div>
        <div class="stat"><div class="n">${total}</div><div class="l">Activities</div></div>
        <div class="stat"><div class="n">11</div><div class="l">Months</div></div>
      </div>
    </div>`;

  // Progress
  html += `
    <div class="pbox">
      <div class="pbox-top">
        <span class="pbox-label">🐍 Overall Progress</span>
        <span class="pbox-pct">${pct}%</span>
      </div>
      <div class="pbox-track">
        <div class="pbox-fill" style="width:${pct}%"></div>
      </div>
      <div class="pbox-sub">
        <span>${done} of ${total} topics completed</span>
        <span>🔥 ${getStreakDays()} day streak</span>
      </div>
    </div>`;

  // Streak Calendar
  html += `
    <div class="divider">
      <div class="line"></div>
      <h2>Streak Calendar</h2>
      <span class="badge">click days you coded</span>
      <div class="line"></div>
    </div>
    <div class="streak-wrap">
      <div class="streak-head">
        <span>${now.toLocaleString('default', { month: 'long' })} ${now.getFullYear()}</span>
        <span>${monthDays} days</span>
      </div>
      <div class="streak-grid">`;

  for (let d = 1; d <= daysInMonth; d++) {
    const key = now.getFullYear() + '-' + now.getMonth() + '-' + d;
    let cls = 'streak-day';
    if (streak[key]) cls += ' done';
    if (d === now.getDate()) cls += ' today';
    html += `<div class="${cls}" onclick="toggleStreak(${d})">${d}</div>`;
  }

  html += `</div></div>`;

  // Today's Focus
  html += `
    <div class="divider">
      <div class="line"></div>
      <h2>Today's Focus</h2>
      <div class="line"></div>
    </div>
    <div class="day-grid">
      <div class="day-card">
        <div class="day-time">☀️ 15 MIN</div>
        <div class="day-title">📖 Review Yesterday</div>
        <div class="day-desc">Open yesterday's code. Read without running. Can you explain every line?</div>
        <span class="day-tag tag-review">Review</span>
      </div>
      <div class="day-card">
        <div class="day-time">📚 30 MIN</div>
        <div class="day-title">🧠 Learn Today's Topic</div>
        <div class="day-desc">Read/watch the current topic from your roadmap. Take notes first.</div>
        <span class="day-tag tag-theory">Theory</span>
      </div>
      <div class="day-card">
        <div class="day-time">💪 45 MIN</div>
        <div class="day-title">💻 Do the Activity</div>
        <div class="day-desc">Open VSCode and complete today's 🎯 Activity. Type every line manually!</div>
        <span class="day-tag tag-practice">Practice</span>
      </div>
    </div>`;

  return html;
}


// ================================================
// RENDER: ROADMAP
// ================================================
function renderRoadmap() {
  const checked = getChecked();
  let html = '';

  // Header
  html += `
    <div class="divider" style="margin-top:12px">
      <div class="line"></div>
      <h2>Complete Roadmap · Feb–Dec 2026</h2>
      <div class="line"></div>
    </div>`;

  // Phase tabs
  html += `<div class="phase-tabs">`;
  PHASES.forEach((phase, i) => {
    html += `<button class="phase-tab ${currentPhase === i ? 'on' : ''}" onclick="currentPhase=${i};render()">${phase}</button>`;
  });
  html += `</div>`;

  // Month blocks for current phase
  CURRICULUM.filter(c => c.phaseIndex === currentPhase).forEach(month => {
    html += `
      <div class="month-block">
        <div class="month-head" onclick="toggleMonth(this)">
          <div class="month-left">
            <span class="month-num">M${month.monthIndex + 1}</span>
            <span class="month-title">${month.month}</span>
          </div>
          <span class="month-arrow">▾</span>
        </div>
        <div class="month-body">`;

    month.topics.forEach((topic, ti) => {
      const key = month.monthIndex + '-' + ti;
      const isChecked = checked[key];

      html += `
        <div class="topic">
          <div class="checkbox ${isChecked ? 'checked' : ''}" onclick="event.stopPropagation();toggleCheck(${month.monthIndex},${ti})"></div>
          <div class="topic-info">
            <div class="topic-name ${isChecked ? 'done' : ''}">${topic.name}</div>
            <div class="topic-desc">${topic.desc}</div>
            <div class="topic-activity">🎯 ${topic.activity}</div>
          </div>
          <div class="topic-time">${topic.time}</div>
        </div>`;
    });

    html += `</div></div>`;
  });

  return html;
}


// ================================================
// RENDER: ACTIVITIES
// ================================================
function renderActivities() {
  const total = getTotalTopics();
  let html = '';

  // Header
  html += `
    <div class="divider" style="margin-top:12px">
      <div class="line"></div>
      <h2>All Activities</h2>
      <span class="badge">${total} total</span>
      <div class="line"></div>
    </div>
    <p style="color:var(--txt2);font-size:.84rem;margin-bottom:16px;line-height:1.55">
      Every topic has a dedicated hands-on activity. Do these in VSCode. Filter by type below.
    </p>`;

  // Filter buttons
  html += `<div class="act-filter">`;
  ['all', 'build', 'practice', 'challenge', 'project'].forEach(filter => {
    const label = filter === 'all' ? 'All Activities' : filter.charAt(0).toUpperCase() + filter.slice(1);
    html += `<button class="act-filter-btn ${currentActFilter === filter ? 'on' : ''}" onclick="currentActFilter='${filter}';render()">${label}</button>`;
  });
  html += `</div>`;

  // Activity cards
  CURRICULUM.forEach(month => {
    const filtered = month.topics.filter(t => currentActFilter === 'all' || t.type === currentActFilter);

    filtered.forEach(topic => {
      const typeClass = 'type-' + topic.type;
      html += `
        <div class="act-card ${typeClass}">
          <div class="act-top">
            <span class="act-week">${month.month.split(':')[0]}</span>
            <span class="act-type ${topic.type}">${topic.type}</span>
            <span class="act-week">${topic.time}</span>
          </div>
          <div class="act-title">${topic.name}</div>
          <div class="act-desc">${topic.activity}</div>
        </div>`;
    });
  });

  return html;
}


// ================================================
// RENDER: DAILY PLAN
// ================================================
function renderDaily() {
  let html = '';

  html += `
    <div class="divider" style="margin-top:12px">
      <div class="line"></div>
      <h2>Daily Schedule</h2>
      <div class="line"></div>
    </div>
    <p style="color:var(--txt2);font-size:.84rem;margin-bottom:16px;line-height:1.55">
      Follow this structure every day. Adjust times but keep order and minimum durations.
    </p>
    <div class="day-grid">
      <div class="day-card">
        <div class="day-time">☀️ 15 MIN</div>
        <div class="day-title">📖 Review Yesterday</div>
        <div class="day-desc">Re-read yesterday's code. Explain every line to yourself. If you can't, that's your first focus today.</div>
        <span class="day-tag tag-review">Review</span>
      </div>
      <div class="day-card">
        <div class="day-time">📚 30 MIN</div>
        <div class="day-title">🧠 Learn New Concept</div>
        <div class="day-desc">Read/watch today's topic. Take notes in a notebook or .txt file. Understand theory before coding.</div>
        <span class="day-tag tag-theory">Theory</span>
      </div>
      <div class="day-card">
        <div class="day-time">💪 45 MIN</div>
        <div class="day-title">💻 Do the Activity</div>
        <div class="day-desc">Open VSCode. Do today's 🎯 Activity from the Roadmap. Type every line. Don't copy-paste. Break things. Experiment.</div>
        <span class="day-tag tag-practice">Practice</span>
      </div>
      <div class="day-card">
        <div class="day-time">🔥 20 MIN</div>
        <div class="day-title">🧩 Extend & Challenge</div>
        <div class="day-desc">Add a feature to your activity. Handle edge cases. Or solve 1 challenge on Codewars/HackerRank.</div>
        <span class="day-tag tag-challenge">Challenge</span>
      </div>
      <div class="day-card">
        <div class="day-time">🌙 10 MIN</div>
        <div class="day-title">📝 Daily Log</div>
        <div class="day-desc">In learning_log.txt: date, what learned, what confused you, what to explore tomorrow.</div>
        <span class="day-tag tag-review">Journal</span>
      </div>
      <div class="day-card">
        <div class="day-time">🎯 2–4 HRS</div>
        <div class="day-title">🚀 Weekend Project Day</div>
        <div class="day-desc">Build something combining the week's concepts. Ugly is fine. Working > perfect.</div>
        <span class="day-tag tag-project">Project</span>
      </div>
    </div>`;

  // Weekly Rhythm
  html += `
    <div class="divider">
      <div class="line"></div>
      <h2>Weekly Rhythm</h2>
      <div class="line"></div>
    </div>
    <div class="rhythm">`;

  const days = [
    ['Mon', 'Topic 1', 'var(--lime)', '~2h'],
    ['Tue', 'Topic 2', 'var(--lime)', '~2h'],
    ['Wed', 'Practice + Review', 'var(--cyan)', '~2h'],
    ['Thu', 'Topic 3', 'var(--lime)', '~2h'],
    ['Fri', 'Topic 4', 'var(--lime)', '~2h'],
    ['Sat', 'Mini Project', 'var(--violet)', '~3h'],
    ['Sun', 'Rest + Review', 'var(--amber)', '~1h']
  ];

  days.forEach(day => {
    html += `
      <div class="rhythm-day">
        <div class="d">${day[0]}</div>
        <div class="a" style="color:${day[2]}">${day[1]}</div>
        <div class="h">${day[3]}</div>
      </div>`;
  });

  html += `</div>`;

  return html;
}


// ================================================
// RENDER: RULES
// ================================================
function renderRules() {
  const rules = [
    ['⌨️', 'limeD', 'Type Every Single Line', 'Never copy-paste code. Typing builds muscle memory and forces your brain to process syntax character by character.'],
    ['🔥', 'cyanD', 'Code Every Single Day', '20 min minimum, no exceptions. Missing one day makes it easy to miss two. Protect your streak.'],
    ['🧪', 'violetD', 'Break Things on Purpose', 'After code works, deliberately break it. Remove a colon, change a variable. Understanding errors = superpower.'],
    ['🚫', 'amberD', 'No Tutorial Hell', '30% watching, 70% coding. After a tutorial, close it and rebuild from memory. Struggling IS learning.'],
    ['🗣️', 'roseD', 'Explain It Out Loud', "If you can't explain a concept simply, you don't understand it. Teach an imaginary student."],
    ['🔄', 'emeraldD', 'Spaced Repetition', 'Every Sunday revisit an old topic. Rebuild something from 2 weeks ago. Review beats cramming.'],
    ['🐛', 'skyD', 'Debug 15 Min Before Googling', 'Read the error message carefully. Check each line. Build debugging instinct no tutorial can teach.'],
    ['🏗️', 'limeD', 'Build, Don\'t Just Solve', 'A crappy working project teaches more than 100 perfect exercises. Ship something ugly.'],
    ['📊', 'cyanD', 'Track Everything', 'Log daily. Track streak. Check progress. Seeing your own growth is the most powerful motivator.'],
    ['🧘', 'violetD', 'Embrace Confusion', "Feeling confused = you're at the edge of knowledge. That's exactly where learning happens. Sit with it."]
  ];

  let html = `
    <div class="divider" style="margin-top:12px">
      <div class="line"></div>
      <h2>The Golden Rules</h2>
      <div class="line"></div>
    </div>
    <p style="color:var(--txt2);font-size:.84rem;margin-bottom:16px;line-height:1.55">
      Non-negotiable principles. Follow these every day.
    </p>
    <div class="rules-grid">`;

  rules.forEach(rule => {
    html += `
      <div class="rule-card">
        <div class="rule-icon" style="background:var(--${rule[1]})">${rule[0]}</div>
        <div>
          <div class="rule-title">${rule[2]}</div>
          <div class="rule-desc">${rule[3]}</div>
        </div>
      </div>`;
  });

  html += `</div>`;

  return html;
}


// ================================================
// RENDER: RESOURCES
// ================================================
function renderResources() {
  const resources = [
    ['🎥 Bro Code — Full Python Course', '12-hour YouTube course. Perfect beginner pace. Follow along in VSCode.', 'Video'],
    ['🎥 Corey Schafer — Python Tutorials', 'Topic-by-topic deep dives. Great when you need more detail on a specific concept.', 'Video'],
    ['📘 Automate the Boring Stuff', 'Free online book by Al Sweigart. Practical real-world Python from day one.', 'Book'],
    ['📘 Python Crash Course', 'Structured textbook building concept by concept. Excellent exercises.', 'Book'],
    ['🏋️ Codewars', 'Coding challenges by difficulty (8kyu=easiest). Start after Week 3. Do 2-3 daily.', 'Practice'],
    ['🏋️ HackerRank Python', 'Structured challenges matching your roadmap. Free certification on completion.', 'Practice'],
    ['🏋️ LeetCode (Easy)', 'Start from Month 5. Easy problems only. Great for algorithm and interview prep.', 'Practice'],
    ['🎮 Python Tutor', 'Paste code, watch step-by-step execution. See variables change in real time. Essential.', 'Tool'],
    ['📖 Python Official Docs', "Don't read cover to cover. Use as reference for functions, modules, and syntax.", 'Docs'],
    ['💬 r/learnpython', 'Friendly beginner community. Ask questions, share wins, find study buddies.', 'Community'],
    ['🤖 Claude (that\'s me!)', 'Ask me to explain, debug, generate problems, or review your code. Available 24/7.', 'AI'],
    ['🔗 Real Python', 'High-quality articles and tutorials. Search any topic for more depth beyond videos.', 'Articles']
  ];

  let html = `
    <div class="divider" style="margin-top:12px">
      <div class="line"></div>
      <h2>Resources</h2>
      <div class="line"></div>
    </div>
    <p style="color:var(--txt2);font-size:.84rem;margin-bottom:16px;line-height:1.55">
      Pick one from each category and stick with it.
    </p>
    <div class="res-grid">`;

  resources.forEach(res => {
    html += `
      <div class="res-card">
        <h4>${res[0]}</h4>
        <p>${res[1]}</p>
        <span class="res-type">${res[2]}</span>
      </div>`;
  });

  html += `</div>`;

  return html;
}


// ================================================
// MAIN RENDER FUNCTION
// ================================================
function render() {
  const app = document.getElementById('app');

  let html = '';

  // Each page wrapped in a div
  html += `<div class="pg ${currentPage === 'dashboard' ? 'on' : ''}">${renderDashboard()}</div>`;
  html += `<div class="pg ${currentPage === 'roadmap' ? 'on' : ''}">${renderRoadmap()}</div>`;
  html += `<div class="pg ${currentPage === 'activities' ? 'on' : ''}">${renderActivities()}</div>`;
  html += `<div class="pg ${currentPage === 'daily' ? 'on' : ''}">${renderDaily()}</div>`;
  html += `<div class="pg ${currentPage === 'rules' ? 'on' : ''}">${renderRules()}</div>`;
  html += `<div class="pg ${currentPage === 'resources' ? 'on' : ''}">${renderResources()}</div>`;

  app.innerHTML = html;
}

// ================================================
// INITIAL RENDER
// ================================================
render();
