const projects = [
  {
    name: 'Prototype Deep (Web) Research',
    descriptions: ['Designed and implemented a deep (web) research app that surfaces highly relevant and personalized information based on the users specified interest: Structured Output, Chain of Thought Prompting, Workflow Design Patterns, Tools, Input Guardrails, Prompt Engineering, MCP Server.'],
    skills: ['AI Agents', 'MCP']
  },
  {
    name: 'Prototype Product Recommender',
    descriptions: ['Designed and implemented a chat app to make product recommendations.'],
    skills: ['AI Agents']
  },
  {
    name: 'Structured Data Comparison Tool',
    descriptions: ['Implemented an app that compares unordered, structured data files for differences: JSON, XML.'],
    skills: ['HTML', 'CSS', 'Vue.js']
  },
  {
    name: 'AR Applied Credit Batches',
    descriptions: ['Implemented a batch automation for applied credits.'],
    skills: ['C#', '.NET Core WebAPI', 'SQL Server']
  },
  {
    name: 'Internal Return Authorizations',
    descriptions: ['Implemented a new page for customer return authorizations.'],
    skills: ['C#', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', '.NET LINQ', 'JIRA', 'SQL Server', 'D3.js', 'Bootstrap']
  },
  {
    name: 'eCommerce: Online Invoices',
    descriptions: ['Implemented a page for customers to view printer-friendly invoices.'],
    skills: ['C#', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'SQL Server', 'D3.js', 'Bootstrap']
  },
  {
    name: 'Customization: Handle When ERP Down',
    descriptions: ['Implemented configuration to toggle the customization feature when the ERP is offline.'],
    skills: ['VB.NET', 'SQL Server']
  },
  {
    name: 'Customize: Product Detail Page',
    descriptions: ['Implemented a 3D customization tool on the web. Connected to internal systems for order fulfillment.'],
    skills: ['C#', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'SQL Server', 'D3.js', 'Bootstrap']
  },
  {
    name: 'Customize: 3D Preview App',
    descriptions: ['Implemented a page to preview 3D files before uploading them to the web.'],
    skills: ['C#', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'SQL Server', 'D3.js', 'Bootstrap']
  },
  {
    name: 'Customize: Artwork Management',
    descriptions: ['implemented an app to process and fulfill customize orders.'],
    skills: ['C#', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', '.NET LINQ', 'JIRA', 'SQL Server', 'D3.js', 'Bootstrap']
  },
  {
    name: 'Raw Material Bulk Editor',
    descriptions: ['implemented an app to bulk edit raw material attributes.'],
    skills: ['C#', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'SQL Server', 'D3.js']
  },
  {
    name: 'Style Attributes',
    descriptions: ['Implemented additional attributes to support quickly creating and managing new styles.'],
    skills: ['C#', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'SQL Server', 'GraphQL']
  },
  {
    name: '[Demo] Coffee Shop',
    descriptions: ['Browse coffee products, pick quantity, add to cart, checkout.'],
    skills: ['JavaScript', 'React.js', 'Next.js', 'Bootstrap']
  },
  {
    name: 'Bulk Proto Notes',
    descriptions: ['Implemented an app to bulk edit style proto notes.'],
    skills: ['C#', 'ASP.NET Core', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'SQL Server', 'D3.js']
  },
  {
    name: 'House BOM',
    descriptions: ['Migrated House BOM functionality from the legacy code base to consolidate with the other BOM features.'],
    skills: ['jQuery', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'Handlebars.js']
  },
  {
    name: '[Demo] Thullo',
    descriptions: ['Implemented minimal Trello clone based on challenge @ devchallenges.io.'],
    skills: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Firebase - Firestore', 'Firebase - Storage', 'Firebase - Auth', 'Bulma.css']
  },
  {
    name: 'Bulk Size Assignment',
    descriptions: ['Implemented an app to bulk add sizes to styles.'],
    skills: ['C#', 'ASP.NET Core', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'SQL Server', 'D3.js']
  },
  {
    name: 'LBI to SSRS',
    descriptions: ['Converted dozens of legacy reports from Crystal to SSRS in formats: csv, xlsx, pdf. Set up email subscriptions.'],
    skills: ['Visual Studio', 'SQL Server', 'SSRS']
  },
  {
    name: 'Bulk Color Assignment',
    descriptions: ['Implemented an app to bulk add colors to styles.'],
    skills: ['C#', 'ASP.NET Core', '.NET Core WebAPI', 'Visual Studio', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'SQL Server', 'D3.js']
  },
  {
    name: '[Demo] Questionnaire Generator',
    descriptions: ['Implemented an app with authentication (.NET Core Identity), and Angular reactive forms - to create dynamic questionnaire forms.'],
    skills: ['C#', '.NET Core WebAPI', 'Angular 2', '.NET LINQ', 'SQLite']
  },
  {
    name: 'Legal Matter Point',
    descriptions: ['Implemented a matter management system. Some key features: suite of reports, merge docs, fully customizable questionnaire forms, export/import, credit card payment integration, mail merge, 2-factor authentication.', 'Set up Azure hosting with: App Service, storage Account, sendGrid, MySQL Database.'],
    skills: ['C#', 'ASP.NET Core', '.NET Core WebAPI', 'jQuery', 'MySQL', 'MS Azure', 'Visual Studio', 'JavaScript', 'MS Excel', 'Git SCM', 'EF Core', 'HTML', 'CSS', 'Vue.js', 'VSTO Outlook Add-In', '.NET LINQ']
  },
  {
    name: 'Tax Accrual System',
    descriptions: ['Implemented an app to manage real estate taxes. It includes a UI and console app to process batch data, generate and email reports, and create journal entries.'],
    skills: ['C#', 'DB2', 'Winforms', 'WCF', '.NET Console App', '.NET LINQ', 'Infragistics/UltraGrid']
  },
  {
    name: 'Intercompany Journal Entries',
    descriptions: ['Implemented an app to create intercompany journal entries. Key features: group entries into buckets, User-level security, export/import functionality for batches of entries, attach supporting docs to entries.'],
    skills: ['C#', 'VB.NET', 'DB2', 'Winforms', 'WCF', '.NET LINQ', 'Infragistics/UltraGrid']
  },
  {
    name: 'Non-Domicile Fuel Reclass',
    descriptions: ['Implemented a system to automate a monthly process to update tax rates, and create journal entries. This replaced a manual process using Excel spreadsheets.'],
    skills: ['VB.NET', 'DB2', 'Winforms', 'WCF', '.NET LINQ', 'Infragistics/UltraGrid']
  },
  {
    name: 'Shared Services System',
    descriptions: ['Implemented console apps that run on a schedule. Each one app processes a specific measure type, and updates the database by calling a WCF service endpoint.'],
    skills: ['C#', 'DB2', 'WCF', '.NET Console App', '.NET LINQ']
  },
  {
    name: 'Full Time Equivalent (FTE)',
    descriptions: ['Implemeneted an app to aggregate and manage employee headcount information. Includes batch export/import functionality.'],
    skills: ['C#', 'VB.NET', 'DB2', 'Winforms', 'WCF', '.NET LINQ', 'Infragistics/UltraGrid']
  },
  {
    name: 'GlsLookup',
    descriptions: ['Created a Microsoft Excel Add-In (xll) with User Defined Functions that return summarized accounting data via calls to a WCF service.', 'Used performance enhancing techniques: async execution, batch requests together, DB2 temp tables, .NET in-memory Dictionary data structure.'],
    skills: ['DB2', 'MS Excel Add-In', 'WCF']
  },
  {
    name: 'Healthcare Summary',
    descriptions: ['Implemented an app to manage healthcare data and create journal entries. Replaced a manual process using Excel spreadsheets.'],
    skills: ['C#', 'VB.NET', 'DB2', 'Winforms', 'WCF', '.NET LINQ', 'Infragistics/UltraGrid']
  },
  {
    name: 'Recruitment HQ',
    descriptions: ['Wrote an app to manage job candidates.'],
    skills: ['C#', 'DB2', 'Winforms', 'WCF', '.NET LINQ', 'Infragistics/UltraGrid']
  }
];

const trainingCourses = [
  {
    url: 'https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/',
    description: 'Master AI Agents in 30 days: build 8 real-world projects with OpenAI Agents SDK, CrewAI, LangGraph, AutoGen and MCP'
  },
  {
    url: 'https://www.youtube.com/watch?v=jD7FnbI76Hg',
    description: 'Realtime Chat With Users & Rooms - Socket.io, Node & Express'
  },
  {
    url: 'https://www.youtube.com/watch?v=9Byvwa9yF-I',
    description: 'Intro to Records in C# 9'
  },
  {
    url: 'https://www.youtube.com/watch?v=v52yC9kq0Yg',
    description: 'Intro to Azure Service Bus'
  },
  {
    url: 'https://www.youtube.com/watch?v=DgVjEo3OGBI',
    description: '.NET Microservices – Full Course'
  },
  {
    url: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
    description: 'JavaScript Algorithms and Data Structures Masterclass'
  },
  {
    url: 'https://www.udemy.com/course/unitycourse/',
    description: 'Complete C# Unity Game Developer 2D'
  },
  {
    url: 'https://www.youtube.com/watch?v=mTz0GXj8NN0&t=6s',
    description: 'Next.js Crash Course 2021'
  },
  {
    url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=241s',
    description: 'React.js Crash Course 2021'
  },
  {
    url: 'https://www.udemy.com/course/data-warehouse-fundamentals-for-beginners/',
    description: 'Data Warehouse Fundamentals for Beginners'
  },
  {
    url: 'https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/',
    description: 'Nuxt.js - Vue.js on Steroids'
  },
  {
    url: 'https://www.pluralsight.com/courses/mocking-moq-xunit',
    description: 'Mocking with Moq and xUnit'
  },
  {
    url: 'https://www.pluralsight.com/courses/csharp-test-driven-development',
    description: 'Test Driven Development in C#'
  },
  {
    url: 'https://www.pluralsight.com/courses/dotnet-core-testing-code-xunit-dotnet-getting-started',
    description: 'Testing .NET Code with xUnit.net: Getting Started'
  },
  {
    url: 'https://www.pluralsight.com/courses/refactoring-csharp-developers',
    description: 'Refactoring for C# Developers'
  },
  {
    url: 'https://www.pluralsight.com/courses/csharp-applying-functional-principles',
    description: 'Applying Functional Principles in C#'
  },
  {
    url: 'https://www.pluralsight.com/courses/openid-and-oauth2-securing-angular-apps',
    description: 'Securing Angular Apps with OpenID Connect and OAuth 2'
  },
  {
    url: 'https://www.pluralsight.com/courses/angular-2-reactive-forms',
    description: 'Angular Reactive Forms'
  },
  {
    url: 'https://www.pluralsight.com/courses/angular-routing',
    description: 'Angular Routing'
  },
  {
    url: 'https://www.pluralsight.com/courses/angular-forms',
    description: 'Angular Forms'
  },
  {
    url: 'https://www.pluralsight.com/courses/angular-2-getting-started-update',
    description: 'Angular: Getting Started'
  },
  {
    url: 'https://www.pluralsight.com/courses/ng-big-picture',
    description: 'Angular: The Big Picture'
  },
  {
    url: 'https://www.pluralsight.com/courses/asp-dot-net-core-restful-api-building',
    description: 'Building a RESTful API with ASP.NET Core'
  },
  {
    url: 'https://www.pluralsight.com/courses/designing-restful-web-apis',
    description: 'Designing RESTful Web APIs'
  },
  {
    url: 'https://www.pluralsight.com/courses/nunit-3-dotnet-testing-introduction',
    description: 'Introduction to .NET Testing with NUnit 3'
  },
  {
    url: 'https://www.pluralsight.com/courses/xhttp-fund',
    description: 'HTTP Fundamentals'
  },
  {
    url: 'https://www.pluralsight.com/courses/aspdotnet-core-signalr-getting-started',
    description: 'Getting Started with ASP.NET Core SingleR'
  },
  {
    url: 'https://www.pluralsight.com/courses/asp-dot-net-core-security-understanding',
    description: 'Understanding ASP.NET Core Security'
  },
  {
    url: 'https://www.pluralsight.com/courses/aspdotnet-core-mvc-enterprise-application',
    description: 'Building an Enterprise Application with ASP.NET Core MVC'
  },
  {
    url: 'https://www.pluralsight.com/courses/building-first-aspdotnet-core-2-mvc-application',
    description: 'Building Your First ASP.NET Core 2 MVC Application'
  },
  {
    url: 'https://www.pluralsight.com/courses/aspdotnet-core-tag-helpers',
    description: 'ASP.NET Core Tag Helpers and View Components'
  },
  {
    url: 'https://www.pluralsight.com/courses/aspdotnet-core-dependency-injection',
    description: 'Dependency Injection in ASP.NET Core'
  },
  {
    url: 'https://www.pluralsight.com/courses/vuejs-getting-started',
    description: 'Vue.js: Getting Started'
  },
  {
    url: 'https://www.pluralsight.com/courses/vuejs-big-picture',
    description: 'Vue.js: Big Picture'
  },
  {
    url: 'https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/',
    description: 'Build an app with ASPNET Core and Angular from scratch'
  },
  {
    url: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/',
    description: 'Vue JS 2 - The Complete Guide'
  },
  {
    url: 'https://www.udemy.com/course/php-for-beginners-/',
    description: 'PHP for Beginners'
  },
  {
    url: 'https://www.udemy.com/course/php-mvc-from-scratch/',
    description: 'Write PHP Like a Pro: Build a PHP MVC Framework From Scratch'
  },
  {
    url: 'https://www.udemy.com/course/php-security/',
    description: 'PHP Security'
  },
  {
    url: 'https://www.udemy.com/course/php-email/',
    description: 'Sending email with PHP: from Basic to Advanced'
  },
  {
    url: 'https://www.udemy.com/share/105C7a3@3gBXHVL3vqr5zGwLXMHEyhiowh0mFMMuSmxptCUYgxFIEO66wfuUotcR2CGdW6VZ/',
    description: 'Login and Registration from Scratch with PHP and MySQL'
  },
  {
    url: 'https://www.udemy.com/course/localhost-web-server/',
    description: 'Set up a localhost Web Server for Faster Website Development'
  }
];

function switchTab(tabName) {
  // Hide all sections
  const sections = document.querySelectorAll('.section-content');
  sections.forEach(section => section.classList.remove('active'));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  // Show selected section
  document.getElementById(tabName).classList.add('active');

  // Add active class to clicked button
  event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // Render Projects
  const projectsList = document.getElementById('projects-list');
  projects.forEach(project => {
    const projectEl = document.createElement('div');
    projectEl.className = 'project';

    const nameEl = document.createElement('div');
    nameEl.className = 'project-name';
    nameEl.textContent = project.name;

    const descriptionsEl = document.createElement('div');
    project.descriptions.forEach(desc => {
      const descEl = document.createElement('p');
      descEl.className = 'project-description';
      descEl.textContent = desc;
      descriptionsEl.appendChild(descEl);
    });

    const skillsEl = document.createElement('div');
    skillsEl.className = 'project-skills';
    project.skills.forEach(skillName => {
      const skillTag = document.createElement('span');
      skillTag.className = 'skill-tag';
      skillTag.textContent = skillName;
      skillsEl.appendChild(skillTag);
    });

    projectEl.appendChild(nameEl);
    projectEl.appendChild(descriptionsEl);
    projectEl.appendChild(skillsEl);
    projectsList.appendChild(projectEl);
  });

  // Render Skills
  const skillsList = document.getElementById('skills-list');
  const uniqueSkills = new Set();
  projects.forEach(project => {
    project.skills.forEach(skill => uniqueSkills.add(skill));
  });
  Array.from(uniqueSkills).sort().forEach(skill => {
    const skillEl = document.createElement('span');
    skillEl.className = 'skill-item';
    skillEl.textContent = skill;
    skillsList.appendChild(skillEl);
  });

  // Render Training Courses
  const coursesList = document.getElementById('courses-list');
  trainingCourses.forEach(course => {
    const courseEl = document.createElement('a');
    courseEl.className = 'course-link';
    courseEl.href = course.url;
    courseEl.target = '_blank';
    courseEl.textContent = course.description;
    coursesList.appendChild(courseEl);
  });
});
