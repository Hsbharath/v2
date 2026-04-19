// Keyword-matched Q&A about Bharath
// Each entry: { keywords: [...], answer: "..." }
// The matcher scores by how many keywords appear in the user's message

export const QA = [
  // Identity
  {
    keywords: ['who', 'are', 'you', 'bharath', 'introduce', 'yourself', 'about'],
    answer: "I'm Bharath Hunkunda Sreenivasa — a full stack developer with 9+ years of experience building web applications. I'm currently based in Seattle, WA and available for freelance work.",
  },
  {
    keywords: ['name', 'full name', 'called'],
    answer: "My full name is Bharath Hunkunda Sreenivasa. Most people just call me Bharath.",
  },
  {
    keywords: ['location', 'where', 'live', 'based', 'city', 'seattle'],
    answer: "I'm currently based in Seattle, WA. Before Seattle I lived in Cleveland, OH and Kent, OH. Originally from Bengaluru, India.",
  },
  {
    keywords: ['from', 'origin', 'india', 'bengaluru', 'bangalore'],
    answer: "I'm originally from Bengaluru (Bangalore), India — specifically from KGF (Kolar Gold Fields). I came to the US for my Master's at Kent State University.",
  },
  {
    keywords: ['available', 'hire', 'freelance', 'work', 'contract'],
    answer: "Yes! I've been freelancing since March 2025 and I'm actively available for freelance and contract work. Feel free to reach out via the Contact section.",
  },

  // Experience & career
  {
    keywords: ['experience', 'years', 'how long', 'career', 'worked'],
    answer: "I have 9+ years of professional experience in web development — spanning front-end, back-end, and full stack roles across 3 companies plus freelance.",
  },
  {
    keywords: ['tranzonic', 'company', 'companies', 'employer', 'employers'],
    answer: "I worked at The Tranzonic Companies in Cleveland, OH from 2016 to 2023 as a Web Developer. That was my longest stint — 7 years building and maintaining their web platforms.",
  },
  {
    keywords: ['dell', 'international', 'services'],
    answer: "I worked at Dell International Services in Bengaluru, India from 2013 to 2014 as a Software Engineer II. I was part of a team engineering web applications.",
  },
  {
    keywords: ['easymate', 'easy mate', 'first job', 'first company'],
    answer: "My first professional role was at Easy Mate Technologies in Bengaluru, India from 2011 to 2013 as a Network Analyst. That's where I got my start.",
  },
  {
    keywords: ['current', 'now', 'presently', 'doing', 'job'],
    answer: "Currently I'm freelancing as a Full Stack Developer from Seattle, WA — building web apps and helping clients with front-end, back-end, and architecture.",
  },

  // Skills & tech
  {
    keywords: ['skills', 'tech', 'stack', 'technologies', 'tools'],
    answer: "My core stack: React, Angular, TypeScript, JavaScript on the front-end. Node.js, Express on the back-end. Databases: MongoDB, MSSQL, MySQL, PostgreSQL. Cloud: Azure, AWS, Docker.",
  },
  {
    keywords: ['react', 'reactjs', 'frontend', 'front-end', 'ui'],
    answer: "React is my primary front-end framework — I've used it extensively for 6+ years. I also have strong Angular experience (including AngularJS and NgRx).",
  },
  {
    keywords: ['angular', 'angularjs', 'ngrx'],
    answer: "I have deep Angular experience — from AngularJS to modern Angular with NgRx for state management. I used Angular heavily at The Tranzonic Companies.",
  },
  {
    keywords: ['typescript', 'ts'],
    answer: "TypeScript is my default for any serious project — I've been using it for 5+ years across both Angular and React projects.",
  },
  {
    keywords: ['node', 'nodejs', 'backend', 'back-end', 'server', 'express'],
    answer: "I'm comfortable building back-end services with Node.js and Express — REST APIs, middleware, auth flows, database integration.",
  },
  {
    keywords: ['database', 'sql', 'mongodb', 'mssql', 'mysql', 'postgres', 'postgresql'],
    answer: "I've worked with both SQL and NoSQL databases — MSSQL (extensively at Tranzonic), MongoDB, MySQL, PostgreSQL, and Redis.",
  },
  {
    keywords: ['azure', 'aws', 'cloud', 'devops', 'docker'],
    answer: "I have hands-on Azure experience from my time at Tranzonic — pipelines, hosting, deployments. Also comfortable with Docker and AWS for containerized deployments.",
  },
  {
    keywords: ['css', 'tailwind', 'bootstrap', 'style', 'styling', 'design'],
    answer: "I work confidently with CSS, Tailwind, Bootstrap, and Bulma. I enjoy building clean, responsive UIs and have a good eye for design.",
  },
  {
    keywords: ['graphql'],
    answer: "I have experience with GraphQL for API design — building schemas, resolvers, and consuming GraphQL APIs from React clients.",
  },
  {
    keywords: ['redux', 'state', 'management'],
    answer: "I've used Redux with React and NgRx with Angular for complex state management — including async thunks, selectors, and effects.",
  },
  {
    keywords: ['test', 'testing', 'jest', 'jasmine', 'unit test'],
    answer: "I write unit tests with Jest (for React) and Jasmine (for Angular). Test-driven development and maintaining coverage was standard at Tranzonic.",
  },
  {
    keywords: ['next', 'nextjs', 'next.js'],
    answer: "This portfolio itself is built with Next.js 14! I use it for production apps — SSR, SSG, API routes, and the App Router.",
  },
  {
    keywords: ['powerbi', 'power bi', 'analytics', 'reporting', 'data'],
    answer: "I've built and maintained Power BI dashboards — primarily for business reporting and sales analytics at The Tranzonic Companies.",
  },

  // Education
  {
    keywords: ['education', 'degree', 'study', 'studied', 'university', 'college'],
    answer: "I have two degrees: a Master of Science from Kent State University (2015, School of Digital Sciences) and a Bachelor of Engineering from Dr. T. Thimmaiah Institute of Technology in India (2011).",
  },
  {
    keywords: ['masters', "master's", 'ms', 'kent state', 'ksu'],
    answer: "I completed my Master of Science in Computer and Information Science at Kent State University, Kent, Ohio in Spring 2015.",
  },
  {
    keywords: ['bachelors', "bachelor's", 'be', 'engineering', 'thimmaiah', 'kgf', 'india degree'],
    answer: "I completed my Bachelor of Engineering in Information Science at Dr. T. Thimmaiah Institute of Technology in KGF, Karnataka, India — graduating in 2011.",
  },

  // Personal
  {
    keywords: ['hobby', 'hobbies', 'interest', 'interests', 'outside', 'fun'],
    answer: "Outside of code I enjoy exploring new tech stacks, contributing to projects, and keeping up with AI and web trends. Living in Seattle, I also love the outdoors.",
  },
  {
    keywords: ['why', 'developer', 'passion', 'love', 'enjoy'],
    answer: "I got into development because I love building things that people actually use. There's something satisfying about solving a real problem with clean code.",
  },
  {
    keywords: ['seattle', 'wa', 'washington', 'moved', 'relocate'],
    answer: "I recently relocated to Seattle, WA. It's a great city for tech — and the Pacific Northwest vibe is hard to beat.",
  },
  {
    keywords: ['kent', 'ohio', 'cleveland', 'midwest'],
    answer: "I spent several years in Ohio — first in Kent for my Master's, then in Cleveland for 7 years at The Tranzonic Companies.",
  },

  // Contact & hiring
  {
    keywords: ['contact', 'email', 'reach', 'connect', 'message', 'touch'],
    answer: "You can reach me at hsbharath01@gmail.com or bharathh.868@gmail.com. My phone is +1 (234) 281-5147. Also on LinkedIn as /bharathhunkundasreenivasa.",
  },
  {
    keywords: ['linkedin', 'social', 'profile', 'github'],
    answer: "You can find me on LinkedIn at linkedin.com/in/bharathhunkundasreenivasa. I'm also on Reddit as /learning-goodlife.",
  },
  {
    keywords: ['rate', 'cost', 'price', 'charge', 'hourly'],
    answer: "For freelance work, my rates depend on the project scope. Best to reach out directly — use the Contact section or email bharathh.868@gmail.com.",
  },
  {
    keywords: ['resume', 'cv', 'portfolio'],
    answer: "You're looking at my portfolio right now! For a formal resume, please reach out via the Contact section or email me directly.",
  },

  // Project types
  {
    keywords: ['project', 'projects', 'built', 'work on', 'examples'],
    answer: "I've built e-commerce platforms, business dashboards, internal tools, SharePoint solutions, and data reporting systems. I work on both greenfield projects and legacy code modernization.",
  },
  {
    keywords: ['sharepoint'],
    answer: "I have SharePoint development experience — building custom solutions, web parts, and integrations as part of my work at The Tranzonic Companies.",
  },
  {
    keywords: ['agile', 'scrum', 'methodology', 'team', 'collaborate'],
    answer: "I've worked in Agile/Scrum teams — sprint planning, standups, retrospectives. Comfortable collaborating cross-functionally with product managers, designers, and QA.",
  },
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'future'],
    answer: "AI engineering is where I'm heading next — hence 'AI Engineer (Future)' on the bio. I'm actively exploring LLM integrations, AI-assisted tooling, and intelligent UI patterns.",
  },

  // Fallback
  {
    keywords: [],
    answer: "I'm not sure about that one. Try asking about Bharath's skills, experience, education, location, or how to contact him!",
  },
];

export function getBotResponse(input) {
  const lower = input.toLowerCase();
  let bestScore = 0;
  let bestAnswer = QA[QA.length - 1].answer; // fallback

  for (const entry of QA) {
    if (entry.keywords.length === 0) continue;
    const score = entry.keywords.filter(kw => lower.includes(kw)).length;
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  return bestAnswer;
}
