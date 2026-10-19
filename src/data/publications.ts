import { paperCopyright } from "./copyright";

export { paperCopyright };

/** arXiv preprints shown first on /publications/ */
export const arxivPreprints = [
  {
    title:
      "Enhancing AUTOSAR-Based Firmware Over-the-Air Updates in the Automotive Industry with a Practical Implementation on a Steering System",
    year: "2025",
    venue: "Bachelor's graduation thesis, E-JUST",
    authors: "Mostafa A. Mostafa, Mohamed K. Mohamed Elsayed, Radwa W. Ezzat Abdelmohsen",
    status: "arXiv preprint · 2503.05839",
    link: "https://arxiv.org/abs/2503.05839",
    code: "https://github.com/Gaafoor/FOTA-and-Remote-Diagnostics",
  },
  {
    title:
      "Automating Hot-Rolling: Designing an Integrated Mechatronics System for Enhanced Efficiency in Sheet Metal Production",
    year: "2025",
    venue: "arXiv preprint",
    authors:
      "Mostafa Ahmed, Mohamed Khaled, Abdelrahman Ali, Amr Mostafa, Mariam Mohamed, Omar Ahmed, Osama Khalil",
    status: "arXiv preprint · 2503.05798",
    link: "https://arxiv.org/abs/2503.05798",
  },
  {
    title: "Implementing PID Controller on a Hand Follower Robot Using Numerical Methods",
    year: "2025",
    venue: "arXiv preprint",
    authors:
      "Mostafa A. Mostafa, Abdallah A. Mohamed, Ahmed H. Aborehab, Mohamed A. Shabaan, Mohamed K. Mohamed, Mostafa O. Mohamed, Tarek M. Shohdy",
    status: "arXiv preprint · 2503.02673",
    link: "https://arxiv.org/abs/2503.02673",
  },
];

/** Course reports and other research writing not yet published as formal papers */
export const researchWork = [
  {
    title: "Covariance-Triggered Graph SLAM with NDT Constraints and iSAM2 Optimization",
    year: "2026",
    venue: "Hands-on Localization, IFRoS / University of Girona",
    authors: "Houssam Korib, Umut Caliskan, Mostafa Ahmed",
    status: "Course report · research work (not peer-reviewed publication)",
    link: "/media/papers/graph-slam-ndt-isam2.pdf",
    copyright: true,
    keywords: "Graph SLAM, NDT, iSAM2, GTSAM, covariance-triggered keyframes, TurtleBot 4",
  },
  {
    title: "Exploration with Kinodynamic Planning",
    year: "2026",
    venue: "Hands-on Planning, IFRoS / University of Girona. Supervised by Prof. Narcis Palomeras",
    authors: "Houssam Korib, Umut Calsikan, Mostafa Ahmed",
    status: "Course report · research work (not peer-reviewed publication)",
    link: "/media/papers/kinodynamic-exploration.pdf",
    copyright: true,
    keywords: "kinodynamic RRT, frontier exploration, pure pursuit, SLAM Toolbox",
  },
  {
    title: "Development and Implementation of a Kinematic Control System for a Mobile Manipulator",
    year: "2026",
    venue: "Hands-on Intervention, IFRoS / University of Girona",
    authors: "Course report (TurtleBot 2 + uArm Swift Pro)",
    status: "Course report · research work (not peer-reviewed publication)",
    link: "/media/papers/mobile-manipulator-kinematics.pdf",
    copyright: true,
    keywords: "mobile manipulator, task-priority control, ArUco, inverse kinematics",
  },
  {
    title: "Structure-from-Motion for an Underwater Vehicle",
    year: "2026",
    venue: "Hands-on Perception, IFRoS / University of Girona",
    authors: "U. Caliskan, H. Korib, M. Ahmed",
    status: "Course report · research work (not peer-reviewed publication)",
    link: "/media/perception/stonefish/report.pdf",
    copyright: true,
    keywords: "SfM, COLMAP, GTSAM, underwater mapping, Multi-View Stereo",
  },
  {
    title: "Comparative study on sensor costs",
    year: "2025",
    venue: "Co-authored during E-JUST Control Lab research assistantship",
    authors: "Mostafa A. Mostafa, et al.",
    status: "Under review",
    link: "",
  },
];

/** @deprecated kept for any leftover imports */
export const publications = [...arxivPreprints, ...researchWork];
