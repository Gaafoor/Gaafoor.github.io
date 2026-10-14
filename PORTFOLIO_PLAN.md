# Portfolio Website Plan — Mostafa Ahmed (Built From Scratch)

## 1. Goal

A personal robotics portfolio aimed at **PhD supervisors, thesis hosts and robotics R&D recruiters**.

The **landing page is a first impression**, not a full CV. It should answer four things in one screen-and-a-half:

- who I am
- what I study
- what I can do
- what I am looking for (PhD in robotics / master thesis, 2027)

Everything else lives on its **own page**. No sections are combined.

## 2. Information Architecture

Landing page = summary. Detail pages = evidence.

| Page | URL | What it contains |
| --- | --- | --- |
| Home | `/` | Intro, education snapshot, skills snapshot, PhD ask, featured-project teaser, contact shortcut |
| About | `/about/` | Longer personal story, research interests, current location, languages |
| Education | `/education/` | One page per degree: courses, key subjects, transcripts/PDFs, grades, universities |
| Experience | `/experience/` | One entry per role: photos, what I did, GitHub, supervisor/reference contact |
| Projects | `/projects/` | Filterable grid of all projects |
| Project detail | `/projects/<slug>/` | Full story, media, results, links |
| Publications | `/publications/` | Theses, papers, under-review work, PDFs/links |
| Awards | `/awards/` | Competitions and prizes, with context and proof links |
| Skills | `/skills/` | Full grouped skill list with brief context of where each was used |
| Contact | `/contact/` | Email, LinkedIn, GitHub, location, how to reach me |
| CV | `/cv.pdf` | Public CV download (no phone number) |

Navbar: **About · Education · Experience · Projects · Publications · Awards · Skills · Contact** + **CV**.

On mobile, collapse into a menu. Awards can stay in the menu even if it is a short page; it is still its own section.

## 3. Landing Page (`/`)

Keep it short. Each block is a **summary card** with a "See details →" link to its page.

### 3.1 Hero / Intro
- Photo, name, role: Robotics M.Sc. student — Erasmus Mundus IFRoS (Girona · Budapest · Zagreb)
- 3–4 sentence first-person intro (not CV bullets)
- Status line: **Looking for a PhD in robotics (and master thesis opportunities) starting 2027**
- Buttons: Contact · Download CV · View Projects
- Links: Email, GitHub, LinkedIn
- Optional: light robotics visual (point cloud / occupancy grid). Disabled if the visitor prefers reduced motion.

### 3.2 Education snapshot
Two compact cards only:

- M.Sc. Intelligent Field Robotic Systems — UdG, ELTE, UniZG (2025–present)
- B.Sc. Mechatronics & Robotics Engineering — E-JUST (2020–2025), CGPA 3.35/4.00

Link: **Education →** (`/education/`)

### 3.3 Skills snapshot
Grouped chips, 4–5 groups, not the full list. Link: **Skills →** (`/skills/`)

### 3.4 Featured work teaser
3–4 project cards with one result line each (e.g. Minesweepers 2nd place, SfM 22.1 px → 0.47 px). This is only a preview so a supervisor can click deeper. Link: **All projects →**

### 3.5 Contact shortcut
Email + "I am looking for a robotics PhD / thesis host." Link: **Contact →**

**Not on the landing page as full sections:** experience details, transcripts, publications list, awards list, course lists, supervisor contacts, photo galleries.

## 4. Detail Pages (no combining)

### 4.1 About (`/about/`)
- Longer story: automotive / racing → perception, SLAM, manipulation, space robotics
- Research interests as separate chips
- Languages, current city (Girona, Spain)
- No phone number or street address

### 4.2 Education (`/education/`)
One block per degree. Do not mix with work experience.

For each degree:
- University, dates, degree title, grade
- Short description of the programme
- **Selected subjects** with a one-line note (e.g. Multiview Geometry, Sensor Fusion, ADAS, Planning)
- **Transcript / diploma PDF** download (or embedded viewer)
- Thesis title if any
- Link to related projects

M.Sc. IFRoS should show the three universities clearly (UdG, ELTE, UniZG) and which semester / campus.

B.Sc. E-JUST should show CGPA and the graduation thesis.

### 4.3 Experience (`/experience/`)
One block per role. Do not mix with education.

For each role:
- Title, organisation, location, dates
- 3–5 outcome-first bullets
- **Photos** from that workplace / lab / team (only if I am allowed to publish them)
- **GitHub** if the work is public
- **Supervisor / manager contact** if they have agreed to be a reference (name, role, email)
- Related projects

Planned entries:
- Space Robotics & GNC Intern — CATEC
- Research Assistant — E-JUST Control Lab
- Team Leader — E-JUST Racing Team
- Electrical Automation Intern — Nestlé
- Mechatronics Design Intern — BMC Almasrya

**Privacy rule:** do not put a supervisor’s email on the public site unless they have explicitly agreed. If not, write "Reference available on request" and keep the email for applications only.

### 4.4 Projects (`/projects/` + detail pages)
Filter buttons: **All · Perception & 3D · SLAM & Navigation · Manipulation · Space · Automotive & Embedded**

| Project | Tags | Featured teaser on home |
| --- | --- | --- |
| Silvanus Autonomous Trash Collection — ELTE (AgileX Scout 2.0 + xArm6 6-DOF, RGB-D) | Manipulation, Perception & 3D | Yes |
| Underwater SfM & Factor-Graph Reconstruction | Perception & 3D | Yes |
| Graph-SLAM & Kinodynamic Exploration — TurtleBot 4 | SLAM & Navigation | Yes |
| Vehicle-Manipulator System — TurtleBot + SwiftPro | Manipulation | Optional |
| Space Robotics SIL & Contact Dynamics — CATEC | Space, Manipulation | Yes |
| Minesweepers — 2nd place global | Manipulation, SLAM & Navigation | Yes |
| AUTOSAR FOTA + LKA Steering — Valeo Best Project Award | Automotive & Embedded | No |
| E-JUST Racing EV / Shell Eco-marathon Autonomous | Automotive & Embedded | No |
| Industrial Manipulation — UR3e, Stäubli TX60/TS60 | Manipulation | No |
| Microscopy Hackathon — U-Net atomic defect analysis | Perception & 3D | No |

Each project page: **Problem → Approach → Result → Media → What I learned**. Award badges live on the relevant project card as well as on the Awards page.

### 4.5 Publications (`/publications/`)
Own page. Not mixed with awards.

- Enhancing AUTOSAR-Based FOTA … steering system (2025, bachelor thesis)
- Automating Hot-Rolling … (2024)
- Implementing PID Controller on a Hand Follower Robot (2023)
- Sensor-cost comparative study (under review)

Each item: citation, abstract/summary, PDF/link, related project.

### 4.6 Awards (`/awards/`)
Own page. Not mixed with publications.

- Valeo Best Project Award — AUTOSAR FOTA (2024)
- 2nd place global — Minesweepers (2023)
- 1st place global — ASME Lunar Lander XR Challenge (2023)
- 6th place — EVER endurance (team leader)

Each item: year, what it was for, proof link, related project.

### 4.7 Skills (`/skills/`)
Own page with more context than the homepage chips.

Groups:
- Robotics (ROS 2, Gazebo, MuJoCo, Isaac Sim, RViz, SLAM, motion planning)
- Perception & 3D (OpenCV, YOLO, COLMAP, Open3D, GTSAM, PyTorch)
- Control (task-priority control, inverse kinematics, PID, LQR)
- Programming (Python, C++, Linux, Git)
- Automotive & Embedded (AUTOSAR, CAN, UDS, STM32, FreeRTOS, MATLAB/Simulink)

Optional: one line under each group pointing to the project/experience where it was used. No fake 1–5 skill bars.

### 4.8 Contact (`/contact/`)
- Short message: looking for a robotics PhD / thesis
- Email, LinkedIn, GitHub
- Location: Girona, Spain
- No phone number, no street address
- Optional: form later; start with mailto only

## 5. Technology

| Decision | Recommendation | Reason |
| --- | --- | --- |
| Framework | **Astro** | Static HTML, Markdown content, full design control |
| Styling | CSS variables, no Tailwind | Easy to restyle later |
| Content | One Markdown/data file per education, experience, project, publication, award | Adding a course or photo does not require layout changes |
| Hosting | GitHub Pages | Free, deploys on push |
| URL | `https://gaafoor.github.io/` | Cleanest free URL |

**Local requirements:** Node.js 20+ and Git. Node is not installed system-wide yet.

## 6. Design Direction

| Element | Proposal |
| --- | --- |
| Mood | Clean technical / engineering notebook |
| Theme | Light and dark, follow system by default |
| Accent | Teal/cyan (can change) |
| Fonts | One sans-serif + one monospace for tags/numbers |
| Layout | Landing is sparse. Detail pages can be longer and media-rich. |
| Quality | Fast, accessible contrast, Open Graph preview, sitemap |

## 7. Folder Structure

```
mostafa-portfolio/
├── src/
│   ├── content/
│   │   ├── education/         # one file per degree
│   │   ├── experience/        # one file per role
│   │   ├── projects/          # one file per project + images
│   │   ├── publications/
│   │   └── awards/
│   ├── data/profile.ts        # name, intro, skills, links, PhD ask
│   ├── components/
│   ├── layouts/
│   ├── pages/                 # index, about, education, experience, ...
│   └── styles/global.css
├── public/                    # cv.pdf, transcripts, photos, favicon
├── .github/workflows/deploy.yml
└── README.md
```

The downloaded HugoBlox template can be deleted after the new site is live.

## 8. Inputs Needed

- [ ] Profile photo
- [ ] Transcripts / diplomas to host (B.Sc., M.Sc. current transcript if available)
- [ ] Course lists / subjects I want shown for each degree
- [ ] Workplace / lab / team photos per experience (and permission to publish)
- [ ] Supervisor names and whether their email may be public
- [ ] GitHub links per project and per internship
- [ ] What can be shown from **CATEC** and **ELTE Silvanus**
- [ ] Which CV version goes public
- [ ] Final project list
- [ ] Accent color / hero visual preference

## 9. Execution Phases

1. Setup: install Node.js, create the Astro project, confirm GitHub Pages deploy.
2. Skeleton: layout, navbar, footer, theme toggle.
3. Landing page: intro, education snapshot, skills snapshot, PhD ask, project teaser.
4. Detail pages: Education, Experience, Projects, Publications, Awards, Skills, About, Contact.
5. Media: transcripts, photos, videos, GitHub links.
6. Launch: review, push, verify live site, delete the old template folder.
