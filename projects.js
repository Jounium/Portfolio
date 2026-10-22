/* =====================================================================
   projects.js  =  THE ONLY FILE YOU EDIT TO ADD OR CHANGE PROJECTS

   - Visitors can only READ this file. Only YOU can change it,
     from your own GitHub account. There is no upload anywhere on the site.
   - You never need to touch index.html (the design).

   HOW TO ADD A NEW PROJECT
   1. Upload its files to GitHub (3D model, photos, PDFs) next to index.html.
   2. Copy one whole block { ... }, below, paste it just before the final ];
      and change the text and the file names. Keep the comma after each block.
   3. Commit. The new project appears on the site 1 or 2 minutes later.

   FOLDERS next to index.html (names are case sensitive, no spaces):
     models/  the 3D files, compressed:  models/project-2.step.gz
              (a plain .step also works, but .gz is 6x smaller)
     photos/  the pictures:              photos/project-2-a.jpg
     files/   PDFs for the buttons:      files/project-2-schematic.pdf
   The path written below must match the real file name EXACTLY.

   "Show more details" opens your GitHub PROJECT page: ghp(1) = the project
   whose address ends with /projects/1. Check the number in your browser
   address bar when you open the project on GitHub. The project must be PUBLIC.

   model   : path of the 3D file. Leave '' if the project has no 3D model.
   photos  : list of pictures. Leave [] if none.
   buttons : buttons shown under the project. The first one is the big
             blue button. Add as many as you like (Schematic, Code...).
   ===================================================================== */

const GITHUB_USER = 'Jounium';                 // your GitHub username
const gh  = repo => 'https://github.com/' + GITHUB_USER + '/' + repo;                 // a repository
const ghp = num  => 'https://github.com/users/' + GITHUB_USER + '/projects/' + num;  // a GitHub PROJECT (the Projects tab)

window.PROJECTS = [
  {
    title: 'Project-1',
    description: 'AI-BOARD, an edge AI hardware board designed in KiCad. Drag the 3D model to inspect every side of the board.',
    tags: ['KiCad', 'PCB', 'Edge AI'],
    model: 'Models/Project-1.gz',
    photos: ['Photos/Project-1-01.png',
             'Photos/Project-1-03.png',
             'Photos/Project-1-02.png',
             'Photos/Project-1-04.png',
            ],
    buttons: [
      { label: 'Show more details', url: ghp(1) },
      // { label: 'Project files', url: gh('project-1') },
      // { label: 'Schematic',     url: 'files/project-1-schematic.pdf' },
    ],
  },
  {
    title: 'Project-2',
    description: 'Project details coming soon.',
    tags: ['Coming soon'],
    model: 'Models/Project-2.gz',        // example: 'models/project-2.step.gz'
    photos: [],       // example: ['photos/project-2-a.jpg', 'photos/project-2-b.jpg']
    buttons: [
      { label: 'Show more details', url: ghp(2) },
    ],
  },
  {
    title: 'Project-3',
    description: 'Project details coming soon.',
    tags: ['Coming soon'],
    model: 'Models/Project-3.gz',        // example: 'models/project-3.step.gz'
    photos: [],       // example: ['photos/project-3-a.jpg']
    buttons: [
      { label: 'Show more details', url: ghp(3) },
    ],
  },
  {
    title: 'Project-4',
    description: 'Project details coming soon.',
    tags: ['Coming soon'],
    model: 'Models/Project-4.gz',        // example: 'models/project-4.step.gz'
    photos: [],       // example: ['photos/project-4-a.jpg']
    buttons: [
      { label: 'Show more details', url: ghp(4) },
    ],
  },
 {
  title: 'Project-5',
  description: '...',
  tags: ['PCB'],
  model: 'Models/project-5.step.gz',   // wla ''
  photos: [],
  buttons: [{ label: 'Show more details', url: ghp(5) }],
},
];
