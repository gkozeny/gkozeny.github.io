var skills = [
  { id: 1, skill: "C#", render: false }, 
  { id: 2, skill: "VB.NET", render: false }, 
  { id: 3, skill: "PHP", render: false },
  { id: 5, skill: "COBOL", render: false },
  { id: 6, skill: "ASP.NET Core", render: false }, 
  { id: 7, skill: ".NET Core WebAPI", render: false }, 
  { id: 8, skill: "Angular 2", render: false }, 
  { id: 9, skill: "jQuery", render: false }, 
  { id: 10, skill: "DB2", render: false },
  { id: 11, skill: "MySQL", render: false }, 
  { id: 12, skill: "MS Azure", render: false },
  { id: 13, skill: "Visual Studio", render: false },
  { id: 14, skill: "JavaScript", render: false },
  { id: 15, skill: "MS Excel", render: false },
  { id: 16, skill: "MS Excel Add-In", render: false },
  { id: 17, skill: "SVN SCM", render: false },
  { id: 18, skill: "Git SCM", render: false },
  { id: 20, skill: "EF Core", render: false },
  { id: 21, skill: "HTML", render: false },
  { id: 22, skill: "CSS", render: false },
  { id: 23, skill: "Vue.js", render: false },
  { id: 24, skill: "VSTO Outlook Add-In", render: false },
  { id: 25, skill: "Winforms", render: false },
  { id: 26, skill: "WCF", render: false },
  { id: 27, skill: ".NET Console App", render: false },
  { id: 28, skill: ".NET LINQ", render: false },
  { id: 29, skill: "JIRA", render: false },
  { id: 30, skill: "Infragistics/UltraGrid", render: false },
  { id: 31, skill: "SQL Server", render: false },
  { id: 32, skill: "D3.js", render: false },
  { id: 33, skill: "SSRS", render: false },
  { id: 34, skill: "SQLite", render: false },
  { id: 35, skill: "Nuxt.js", render: false },
  { id: 36, skill: "Firebase - Firestore", render: false },
  { id: 37, skill: "Firebase - Storage", render: false },
  { id: 38, skill: "Firebase - Auth", render: false },
  { id: 39, skill: "Bulma.css", render: false },
  { id: 40, skill: "Handlebars.js", render: false },
	{ id: 41, skill: "React.js", render: false },
	{ id: 42, skill: "Next.js", render: false},
	{ id: 43, skill: "Bootstrap", render: false },
	{ id: 44, skill: "GraphQL", render: false },
	{ id: 45, skill: "Unity 2D", render: false }
];

var projects = [
	{
    name: "Raw Material Bulk Editor",
    descriptions: [
      `Designed and implemented an app to bulk edit raw material attributes.`
    ],
    skills: [ 1, 7, 13, 14, 21, 22, 29, 31, 32 ],
    url: null
  },
	{
    name: "Style Attributes",
    descriptions: [
      `Modified existing app / backend API with new pattern to support quickly creating and managing new attribute tags 
			for styles. Implemented these attributes (API + front end) using the new pattern.`
    ],
    skills: [ 1, 7, 13, 14, 21, 22, 29, 31, 44 ],
    url: null
  },
	{
    name: "Artwork Management",
    descriptions: [
      `Designed and implemented an app to manage personalized orders. Included integration with
			 eCommerce site, and order confirmation email enhancements.`
    ],
    skills: [ 1, 7, 13, 14, 21, 22, 28, 29, 31, 32, 43 ],
    url: null
  },
	{
    name: "Coffee Shop",
    descriptions: [
      `Browse coffee products, pick quantity, add to cart, checkout. Created using React / Next.js and Bootstrap 5.`
    ],
    skills: [ 14, 41, 42, 43 ],
    url: null
  },
  {
    name: "Bulk Proto Notes",
    descriptions: [
      `Implemented an app to edit style proto notes in bulk.`
    ],
    skills: [ 1, 6, 7, 13, 14, 21, 22, 29, 31, 32 ],
    url: null
  },
  {
    name: "House BOM",
    descriptions: [
      `Migrated House BOM functionality from legacy ASP.NET web page to consolidate with the new BOM application.`
    ],
    skills: [ 9, 13, 14, 21, 22, 29, 40 ],
    url: null
  },
  {
    name: "Thullo",
    descriptions: [
      `A base implementation Trello clone based on linked challenge from devchallenges.io.`
    ],
    skills: [ 14, 23, 35, 36, 37, 38, 39 ],
    url: 'https://thullo-9ff89.firebaseapp.com/'
  },
  {
    name: "Bulk Size Assignment",
    descriptions: [
      `Implemented an app to add sizes to styles, in bulk.`
    ],
    skills: [ 1, 6, 7, 13, 14, 21, 22, 29, 31, 32 ],
    url: null
  },
  {
    name: "LBI to SSRS",
    descriptions: [
      `Converted a variety of legacy reports to SSRS in csv, xlsx, and pdf formats. Set up email subscriptions.`
    ],
    skills: [ 13, 31, 33 ],
    url: null
  },
  {
    name: "Bulk Color Assignment",
    descriptions: [
      `Designed and implemented an app to add colors to styles, in bulk.`
    ],
    skills: [ 1, 6, 7, 13, 14, 21, 22, 29, 31, 32 ],
    url: null
  },
  {
    name: "Questionnaire Generator",
    descriptions: [
      `Created an application with login authentication (.NET CORE Web API / Identity) and Angular reactive forms to build out 
      custom questionnaire forms.`
    ],
    skills: [ 1, 7, 8, 28, 34 ],
    url: null
  },
  {
    name: "Legal Matter Point",
    descriptions: [
      `Designed and implemented a law firm matter management system. Some key features: suite of reports, 
      merge docs, fully customizable questionnaire forms, export/import capabilities, client credit card payments, 
      mail merge (via the Outlook Add-In), and role based/2-factor authentication and authorization system.`,
      `The app is hosted on Microsoft Azure, I configured Azure resources: App Service, Storage Account, SendGrid, 
      and MySQL Database.`
    ],
    skills: [ 1, 6, 7, 9, 11, 12, 13, 14, 15, 18, 20, 21, 22, 23, 24, 28 ],
    url: null
  },
  {
    name: "Tax Accrual System",
    descriptions: [
      `Designed and implemented a system to manage real estate taxes. It includes a user interface and a 
      console app to process user-entered data, generate and email reports, and create journal entries.`
    ],
    skills: [ 1, 10, 25, 26, 27, 28, 30 ],
    url: null
  },
  {
    name: "Intercompany Journal Entries",
    descriptions: [
      `Designed and implemented a system to create source/destination company journal entries. These entries can be
      grouped into buckets. User-level security is tied to each bucket. Supports export/import functionality for
      batches of entries. In addition, supporting documents (pdf, docx, txt, xlsx) can be attached to entries.`
    ],
    skills: [ 1, 2, 10, 25, 26, 28, 30 ],
    url: null
  },
  {
    name: "Non-Domicile Fuel Reclass",
    descriptions: [
      `Designed and implemented a system to automate a manual monthly process involving updating tax rates and 
      performing calculations to create journal entries. The old process was being managed in a series of 
      Excel spreadsheets.`
    ],
    skills: [ 2, 10, 25, 26, 28, 30 ],
    url: null
  },
  {
    name: "Shared Services System",
    descriptions: [
      `Wrote several console apps that run on a scheduled (monthly) basis, and an associated WCF service to manage  
      database updates for the core system data. Each of the console apps processes a specific 'measure type', and 
      loads the data set by calling the WCF service.`
    ],
    skills: [ 1, 10, 26, 27, 28 ],
    url: null
  },
  {
    name: "Full Time Equivalent (FTE)",
    descriptions: [
      `Wrote an app to aggregate and manage employee headcount information based on business rules. The UI for 
      this app resembles a spreadsheet, and supports export/import functionality for batches of data.`
    ],
    skills: [ 1, 2, 10, 25, 26, 28, 30 ],
    url: null
  },
  {
    name: "GlsLookup",
    descriptions: [ 
      `Created a Microsoft Excel Add-In (xll) with custom User Defined Functions (UDF's) that accept arguments, and
      returns summarized data based on those arguments. This Add-In calls off to a WCF service, 
      executes SQL to retrieve data, and returns the results.`, 
      `I implemented several performance enhancing techniques to support spreadsheets with 1000's of instances 
      of these formulas in use without grinding to a halt. These techniques include: async execution of long 
      running tasks, batch requests (So the WCF backend does not get hit 1000's of times every 
      time the spreadsheet recalculates), DB2 temp tables to JOIN on (to execute the SQL once for all parameter 
      combinations), and .NET Dictionary's to efficiently process the returned results.`
    ],
    skills: [ 10, 16, 26 ],
    url: null
  },
  {
    name: "Healthcare Summary",
    descriptions: [ 
      `Wrote an app to manage healthcare data and generate journal entries. Requirements included supporting a 
      variety of business rules and automating dynamic calculations. The old process was being managed in a 
      series of Excel spreadsheets.`
    ],
    skills: [ 1, 2, 10, 25, 26, 28, 30 ],
    url: null
  },
  {
    name: "Recruitment HQ",
    descriptions: [ `Wrote an app to manage job candidates.` ],
    skills: [ 1, 10, 25, 26, 28, 30 ],
    url: null
  }
];

var trainingCourses = [
	{ 
    url: "https://www.udemy.com/share/101WYy2@Pm5jV0tjc1AOc0BGC3V/fj5uSldh/", 
    description: "Complete C# Unity Game Developer 2D" 
  },
  { 
    url: "https://www.youtube.com/watch?v=mTz0GXj8NN0&t=6s", 
    description: "Next.js Crash Course 2021" 
  },
  { 
    url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=241s", 
    description: "React.js Crash Course 2021" 
  },
  { 
    url: "https://www.udemy.com/course/data-warehouse-fundamentals-for-beginners/", 
    description: "Data Warehouse Fundamentals for Beginners" 
  },
  { 
    url: "https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/", 
    description: "Nuxt.js - Vue.js on Steroids" 
  },
  { 
    url: "https://app.pluralsight.com/library/courses/mocking-moq-xunit/table-of-contents", 
    description: "Mocking with Moq and xUnit" 
  },
  { 
    url: "https://app.pluralsight.com/library/courses/csharp-test-driven-development/table-of-contents", 
    description: "Test Driven Development in C#" 
  },
  { 
    url: "https://app.pluralsight.com/library/courses/dotnet-core-testing-code-xunit-dotnet-getting-started/table-of-contents", 
    description: "Testing .NET Code with xUnit.net: Getting Started" 
  },
  { 
    url: "https://app.pluralsight.com/library/courses/refactoring-csharp-developers/table-of-contents", 
    description: "Refactoring for C# Developers" 
  },
  { 
    url: "https://app.pluralsight.com/library/courses/csharp-applying-functional-principles/table-of-contents", 
    description: "Applying Functional Principles in C#" 
  },
  { 
    url: "https://www.pluralsight.com/courses/openid-and-oauth2-securing-angular-apps", 
    description: "Securing Angular Apps with OpenID Connect and OAuth 2" 
  },
  { 
    url: "https://www.pluralsight.com/courses/angular-2-reactive-forms", 
    description: "Angular Reactive Forms" 
  },
  { 
    url: "https://www.pluralsight.com/courses/angular-routing", 
    description: "Angular Routing" 
  },
  { 
    url: "https://www.pluralsight.com/courses/angular-forms", 
    description: "Angular Forms" 
  },
  { 
    url: "https://www.pluralsight.com/courses/angular-2-getting-started-update", 
    description: "Angular: Getting Started" 
  },
  { 
    url: "https://www.pluralsight.com/courses/ng-big-picture", 
    description: "Angular: The Big Picture" 
  },
  { 
    url: "https://www.pluralsight.com/courses/asp-dot-net-core-restful-api-building", 
    description: "Building a RESTful API with ASP.NET Core" 
  },
  { 
    url: "https://www.pluralsight.com/courses/designing-restful-web-apis", 
    description: "Designing RESTful Web APIs" 
  },
  { 
    url: "https://www.pluralsight.com/courses/nunit-3-dotnet-testing-introduction", 
    description: "Introduction to .NET Testing with NUnit 3" 
  },
  { 
    url: "https://www.pluralsight.com/courses/xhttp-fund", 
    description: "HTTP Fundamentals" 
  },
  { 
    url: "https://www.pluralsight.com/courses/aspdotnet-core-signalr-getting-started", 
    description: "Getting Started with ASP.NET Core SingleR" 
  },
  { 
    url: "https://www.pluralsight.com/courses/asp-dot-net-core-security-understanding", 
    description: "Understanding ASP.NET Core Security" 
  },
  { 
    url: "https://www.pluralsight.com/courses/aspdotnet-core-mvc-enterprise-application", 
    description: "Building an Enterprise Application with ASP.NET Core MVC" 
  },
  { 
    url: "https://www.pluralsight.com/courses/building-first-aspdotnet-core-2-mvc-application", 
    description: "Building Your First ASP.NET Core 2 MVC Application" 
  },
  { 
    url: "https://www.pluralsight.com/courses/aspdotnet-core-tag-helpers", 
    description: "ASP.NET Core Tag Helpers and View Components" 
  },
  { 
    url: "https://www.pluralsight.com/courses/aspdotnet-core-dependency-injection", 
    description: "Dependency Injection in ASP.NET Core" 
  },
  { 
    url: "https://www.pluralsight.com/courses/vuejs-getting-started", 
    description: "Vue.js: Getting Started" 
  },
  { 
    url: "https://www.pluralsight.com/courses/vuejs-big-picture", 
    description: "Vue.js: Big Picture" 
  },
  { 
    url: "https://www.udemy.com/share/101WMMBEMbd1pbQnQ=/", 
    description: "Build an app with ASPNET Core and Angular from scratch" 
  },
  { 
    url: "https://www.udemy.com/share/101WASBEMbd1pbQnQ=/", 
    description: "Vue JS 2 - The Complete Guide" 
  },
  { 
    url: "https://www.udemy.com/share/101MQ5BEMbd1pbQnQ=/", 
    description: "PHP for Beginners" 
  },
  { 
    url: "https://www.udemy.com/share/102hbmBEMbd1pbQnQ=/", 
    description: "Write PHP Like a Pro: Build a PHP MVC Framework From Scratch" 
  },
  { 
    url: "https://www.udemy.com/share/102sx2BEMbd1pbQnQ=/", 
    description: "PHP Security" 
  },
  { 
    url: "https://www.udemy.com/share/102sx6BEMbd1pbQnQ=/", 
    description: "Sending email with PHP: from Basic to Advanced" 
  },
  { 
    url: "https://www.udemy.com/share/102sxeBEMbd1pbQnQ=/", 
    description: "Login and Registration from Scratch with PHP and MySQL" 
  },
  { 
    url: "https://www.udemy.com/share/102sx0BEMbd1pbQnQ=/", 
    description: "Set up a localhost Web Server for Faster Website Development" 
  }
]
