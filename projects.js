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

   FILES (names are case sensitive, no spaces):
   model   : a STEP file. Best is the compressed copy: project-2.step.gz
             (a plain project-2.step also works). Leave '' if no 3D model.
   photos  : list of photos, e.g. ['project-2-a.jpg', 'project-2-b.jpg']
   buttons : buttons shown under the project. The first one is the big
             blue button. Add as many as you like (Schematic, PCB, Code...).
   ===================================================================== */

const GITHUB_USER = 'Jounium';   // <- write your GitHub username here, once
const gh = repo => 'https://github.com/' + GITHUB_USER + '/' + repo;

window.PROJECTS = [
  {
    title: 'Project-1',
    description: 'ProdTrack, an edge AI hardware board designed in KiCad. Drag the 3D model to inspect every side of the board.',
    tags: ['KiCad', 'PCB', 'Edge AI'],
    model: 'AI-BOARD.step.gz',
    photos: [],
    buttons: [
      { label: 'Show more details', url: gh('project-1') },
      // { label: 'Project files', url: gh('project-1') },
      // { label: 'Schematic',     url: 'project-1-schematic.pdf' },
    ],
  },
  {
    title: 'Project-2',
    description: 'Project details coming soon.',
    tags: ['Coming soon'],
    model: '',        // example: 'project-2.step.gz'
    photos: [],       // example: ['project-2-a.jpg', 'project-2-b.jpg']
    buttons: [
      { label: 'Show more details', url: gh('project-2') },
    ],
  },
  {
    title: 'Project-3',
    description: 'Project details coming soon.',
    tags: ['Coming soon'],
    model: '',
    photos: [],
    buttons: [
      { label: 'Show more details', url: gh('project-3') },
    ],
  },
  {
    title: 'Project-4',
    description: 'Project details coming soon.',
    tags: ['Coming soon'],
    model: '',
    photos: [],
    buttons: [
      { label: 'Show more details', url: gh('project-4') },
    ],
  },
];
