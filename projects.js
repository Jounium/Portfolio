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
    title: 'ProdTrack Touch',
    description: 'A production tracking PCB combining RFID identification and a touchscreen for recording production events, capturing operator input, and monitoring progress in real time.',
    tags: ['PCB Design', 'RFID', 'Touchscreen', 'Production Tracking'],
    model: 'Models/Project-1.glb',
    photos: [
    'https://raw.githubusercontent.com/Jounium/ProdTrach_Touch/main/Photos/ProdTrack_Touch-01.png',
    'https://raw.githubusercontent.com/Jounium/ProdTrach_Touch/main/Photos/ProdTrack_Touch-02.png',
    'https://raw.githubusercontent.com/Jounium/ProdTrach_Touch/main/Photos/ProdTrack_Touch-03.png',
    'https://raw.githubusercontent.com/Jounium/ProdTrach_Touch/main/Photos/ProdTrack_Touch-PCB-Layout.png'
   ],  
    buttons: [
      { label: 'Show more details', url: ghp(1) },
      // { label: 'Project files', url: gh('project-1') },
      // { label: 'Schematic',     url: 'files/project-1-schematic.pdf' },
    ],
  },
{
  title: 'FlashBridge',
  description: 'A USB-to-UART programmer supporting 3.3 V and 5 V logic, with automatic reset and manual boot/reset controls. Centralizing programming circuitry reduces component count and manufacturing cost on compatible target boards.',
  tags: ['USB-to-UART', '3.3V / 5V Logic', 'Auto Reset', 'MCU Programming'],
  model: 'Models/project-5.step.gz',   // wla ''
    photos: [
    'https://raw.githubusercontent.com/Jounium/FlashBridge/main/Photos/FlashBridge-01.png',
    'https://raw.githubusercontent.com/Jounium/FlashBridge/main/Photos/FlashBridge-02.png',
    'https://raw.githubusercontent.com/Jounium/FlashBridge/main/Photos/FlashBridge-03.png',
    'https://raw.githubusercontent.com/Jounium/FlashBridge/main/Photos/FlashBridge-PCB-Layout.png'
   ],  
  buttons: [{ label: 'Show more details', url: ghp(5) }],
},
  {
    title: 'ProdTrack Node',
    description: 'A compact production tracking PCB with LED indicators and connectors for an external RFID reader and button, supporting real-time event capture and flexible workstation integration.',
    tags: ['PCB Design', 'RFID', 'LED Indicators', 'Production Tracking'],
    model: 'Models/Project-2.gz',        // example: 'models/project-2.step.gz'
    photos: [
  'https://raw.githubusercontent.com/Jounium/ProdTrach_Node/main/Photos/ProdTrack_Node-01.png',
  'https://raw.githubusercontent.com/Jounium/ProdTrach_Node/main/Photos/ProdTrack_Node-02.png',
  'https://raw.githubusercontent.com/Jounium/ProdTrach_Node/main/Photos/ProdTrack_Node-03.png',
  'https://raw.githubusercontent.com/Jounium/ProdTrach_Node/main/Photos/ProdTrack_Node-PCB-Layout.png'
  ],        // example: ['photos/project-2-a.jpg', 'photos/project-2-b.jpg']
    buttons: [
      { label: 'Show more details', url: ghp(2) },
    ],
  },
  {
    title: 'ProdTrack Pilot',
    description: 'A small-batch RFID, LED, and button prototype built for firmware development and testing alongside ProdTrack Node manufacturing, shortening delivery time and enabling deployment alongside the final boards.',
    tags: ['Prototyping', 'RFID', 'Firmware Testing', 'Production Tracking'],
    model: 'Models/Project-3.gz',        // example: 'models/project-3.step.gz'
    photos: [
  'https://raw.githubusercontent.com/Jounium/ProdTrach_Pilote/main/Photos/ProdTrack_Pilote-01.png',
  'https://raw.githubusercontent.com/Jounium/ProdTrach_Pilote/main/Photos/ProdTrack_Pilote-02.png',
  'https://raw.githubusercontent.com/Jounium/ProdTrach_Pilote/main/Photos/ProdTrack_Pilote-03.png',
  'https://raw.githubusercontent.com/Jounium/ProdTrach_Pilote/main/Photos/ProdTrack_Pilote-PCB-Layout.png'
  ],     
    buttons: [
      { label: 'Show more details', url: ghp(3) },
    ],
  },
];
