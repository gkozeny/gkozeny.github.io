var skills = {
  '1': 'C#', 
  '2': 'VB.NET', 
  '3': 'PHP',
  '5': 'COBOL',
  '6': 'ASP.NET Core', 
  '7': '.NET Core WebAPI', 
  '8': 'Angular 2', 
  '9': 'jQuery', 
  '10': 'DB2',
  '11': 'MySQL', 
  '12': 'MS Azure',
  '13': 'Visual Studio',
  '14': 'JavaScript',
  '15': 'MS Excel',
  '16': 'MS Excel Add-In',
  '17': 'SVN SCM',
  '18': 'Git SCM',
  '20': 'EF Core',
  '21': 'HTML',
  '22': 'CSS',
  '23': 'Vue.js',
  '24': 'VSTO Outlook Add-In',
  '25': 'Winforms',
  '26': 'WCF',
  '27': '.NET Console App',
  '28': '.NET LINQ',
  '29': 'JIRA',
  '30': 'Infragistics/UltraGrid',
  '31': 'SQL Server',
  '32': 'D3.js',
  '33': 'SSRS',
  '34': 'SQLite',
  '35': 'Nuxt.js',
  '36': 'Firebase - Firestore',
  '37': 'Firebase - Storage',
  '38': 'Firebase - Auth',
  '39': 'Bulma.css',
  '40': 'Handlebars.js',
	'41': 'React.js',
	'42': 'Next.js',
	'43': 'Bootstrap',
	'44': 'GraphQL',
	'45': 'Unity 2D',
  '46': 'AI Agents',
  '47': 'MCP'
};

var projects = [
  {
    name: 'Prototype Deep (Web) Research',
    descriptions: [`Designed and implemented a deep (web) research app that surfaces highly relevant and personalized information based on the users specified interest.`],
    skills: [ 46, 47 ]
  },
  {
    name: 'Prototype Product Recommender',
    descriptions: [`Designed and implemented a chat app to make product recommendations.`],
    skills: [ 46 ]
  },
  {
    name: 'Structured Data Comparison Tool',
    descriptions: [`Implemented an app that compares unordered, structured data files for differences: JSON, XML.`],
    skills: [ 21, 22, 23 ]
  },
  {
    name: 'AR Applied Credit Batches',
    descriptions: [`Implemented a batch automation for applied credits.`],
    skills: [ 1, 7, 31 ]
  },
  {
    name: 'Internal Return Authorizations',
    descriptions: [`Implemented a new page for customer return authorizations.`],
    skills: [ 1, 7, 13, 14, 21, 22, 28, 29, 31, 32, 43 ]
  },
  {
    name: 'eCommerce: Online Invoices',
    descriptions: [`Implemented a page for customers to view printer-friendly invoices.`],
    skills: [ 1, 7, 13, 14, 21, 22, 29, 31, 32, 43 ]
  },
  {
    name: 'Customization: Handle When ERP Down',
    descriptions: [`Implemented configuration to toggle the customization feature when the ERP is offline.`],
    skills: [2, 31]
  },
  {
    name: 'Customize: Product Detail Page',
    descriptions: [`Implemented a 3D customization tool on the web. Connected to internal systems for order fulfillment.`],
    skills: [ 1, 7, 13, 14, 21, 22, 29, 31, 32, 43 ]
  },
  {
    name: 'Customize: 3D Preview App',
    descriptions: [`Implemented a page to preview 3D files before uploading them to the web.`],
    skills: [ 1, 7, 13, 14, 21, 22, 29, 31, 32, 43 ]
  },
  {
    name: 'Customize: Artwork Management',
    descriptions: [
      `implemented an app to process and fulfill customize orders.`
    ],
    skills: [ 1, 7, 13, 14, 21, 22, 28, 29, 31, 32, 43 ]
  },
	{
    name: 'Raw Material Bulk Editor',
    descriptions: [
      `implemented an app to bulk edit raw material attributes.`
    ],
    skills: [ 1, 7, 13, 14, 21, 22, 29, 31, 32 ]
  },
	{
    name: 'Style Attributes',
    descriptions: [
      `Implemented additional attributes to support quickly creating and managing new styles.`
    ],
    skills: [ 1, 7, 13, 14, 21, 22, 29, 31, 44 ]
  },
	{
    name: '[Demo] Coffee Shop',
    descriptions: [
      `Browse coffee products, pick quantity, add to cart, checkout.`
    ],
    skills: [ 14, 41, 42, 43 ]
  },
  {
    name: 'Bulk Proto Notes',
    descriptions: [
      `Implemented an app to bulk edit style proto notes.`
    ],
    skills: [ 1, 6, 7, 13, 14, 21, 22, 29, 31, 32 ]
  },
  {
    name: 'House BOM',
    descriptions: [
      `Migrated House BOM functionality from the legacy code base to consolidate with the other BOM features.`
    ],
    skills: [ 9, 13, 14, 21, 22, 29, 40 ]
  },
  {
    name: '[Demo] Thullo',
    descriptions: [
      `Implemented minimal Trello clone based on challenge @ devchallenges.io.`
    ],
    skills: [ 14, 23, 35, 36, 37, 38, 39 ]
  },
  {
    name: 'Bulk Size Assignment',
    descriptions: [
      `Implemented an app to bulk add sizes to styles.`
    ],
    skills: [ 1, 6, 7, 13, 14, 21, 22, 29, 31, 32 ]
  },
  {
    name: 'LBI to SSRS',
    descriptions: [
      `Converted dozens of legacy reports from Crystal to SSRS in formats: csv, xlsx, pdf. Set up email subscriptions.`
    ],
    skills: [ 13, 31, 33 ]
  },
  {
    name: 'Bulk Color Assignment',
    descriptions: [
      `Implemented an app to bulk add colors to styles.`
    ],
    skills: [ 1, 6, 7, 13, 14, 21, 22, 29, 31, 32 ]
  },
  {
    name: '[Demo] Questionnaire Generator',
    descriptions: [
      `Implemented an app with authentication (.NET Core Identity), and Angular reactive forms - to create dynamic questionnaire forms.`
    ],
    skills: [ 1, 7, 8, 28, 34 ]
  },
  {
    name: 'Legal Matter Point',
    descriptions: [
      `Implemented a matter management system. Some key features: suite of reports, merge docs, fully customizable questionnaire forms, 
      export/import, credit card payment integration, mail merge, 2-factor authentication.`,
      `Set up Azure hosting with: App Service, storage Account, sendGrid, MySQL Database.`
    ],
    skills: [ 1, 6, 7, 9, 11, 12, 13, 14, 15, 18, 20, 21, 22, 23, 24, 28 ]
  },
  {
    name: 'Tax Accrual System',
    descriptions: [
      `Implemented an app to manage real estate taxes. It includes a UI and console app to process batch data, 
      generate and email reports, and create journal entries.`
    ],
    skills: [ 1, 10, 25, 26, 27, 28, 30 ]
  },
  {
    name: 'Intercompany Journal Entries',
    descriptions: [
      `Implemented an app to create intercompany journal entries. Key features: group entries into buckets, User-level security, 
      export/import functionality for batches of entries, attach supporting docs to entries.`
    ],
    skills: [ 1, 2, 10, 25, 26, 28, 30 ]
  },
  {
    name: 'Non-Domicile Fuel Reclass',
    descriptions: [
      `Implemented a system to automate a monthly process to update tax rates, and create journal entries. This replaced a manual 
      process using Excel spreadsheets.`
    ],
    skills: [ 2, 10, 25, 26, 28, 30 ]
  },
  {
    name: 'Shared Services System',
    descriptions: [
      `Implemented console apps that run on a schedule. Each one app processes a specific 'measure type', and 
      updates the database by calling a WCF service endpoint.`
    ],
    skills: [ 1, 10, 26, 27, 28 ]
  },
  {
    name: 'Full Time Equivalent (FTE)',
    descriptions: [
      `Implemeneted an app to aggregate and manage employee headcount information. Includes batch export/import functionality.`
    ],
    skills: [ 1, 2, 10, 25, 26, 28, 30 ]
  },
  {
    name: 'GlsLookup',
    descriptions: [ 
      `Created a Microsoft Excel Add-In (xll) with User Defined Functions that return summarized accounting data via calls to a WCF service.`, 
      `Used performance enhancing techniques: async execution, batch requests together, DB2 temp tables, .NET in-memory Dictionary data structure.`
    ],
    skills: [ 10, 16, 26 ]
  },
  {
    name: 'Healthcare Summary',
    descriptions: [ 
      `Implemented an app to manage healthcare data and create journal entries. Replaced a manual process using Excel spreadsheets.`
    ],
    skills: [ 1, 2, 10, 25, 26, 28, 30 ]
  },
  {
    name: 'Recruitment HQ',
    descriptions: [ `Wrote an app to manage job candidates.` ],
    skills: [ 1, 10, 25, 26, 28, 30 ]
  }
];

var trainingCourses = [
  {
    url: 'https://www.udemy.com/share/10dbXB3@esaXrtcqsIRta9_zdcG0qMeYuJl9SR0Yx-BZyGWfXsBIi5wVTcJH9up-hmn8a4fM/',
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
    url: 'https://www.udemy.com/share/102sxeBEMbd1pbQnQ=/', 
    description: 'Login and Registration from Scratch with PHP and MySQL' 
  },
  { 
    url: 'https://www.udemy.com/course/localhost-web-server/', 
    description: 'Set up a localhost Web Server for Faster Website Development' 
  }
]
