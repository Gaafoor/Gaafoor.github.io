export const skillGroups = [
  {
    name: "Robotics",
    items: ["ROS 2", "RViz", "SLAM", "Gazebo", "MuJoCo", "NVIDIA Isaac Sim", "Basilisk", "Motion planning"],
    usedIn: "TurtleBot Graph-SLAM, Silvanus, CATEC SIL, Minesweepers",
  },
  {
    name: "Perception & 3D",
    items: ["OpenCV", "YOLO", "ArUco", "COLMAP", "Open3D", "GTSAM", "PyTorch"],
    usedIn: "Underwater SfM, ArUco pick-and-place, microscopy hackathon",
  },
  {
    name: "Learning & Optimization",
    items: [
      "Reinforcement Learning",
      "Model Predictive Control (MPC)",
      "Trajectory optimization (acados)",
      "BSK-RL",
    ],
    usedIn: "CATEC (BSK-RL, MPC and acados in Basilisk), IFRoS RL coursework and labs",
  },
  {
    name: "Control",
    items: ["Task-priority control", "Inverse kinematics", "PID", "LQR", "Resolved-rate control"],
    usedIn: "Vehicle-manipulator system, industrial arms, self-balancing robot",
  },
  {
    name: "Programming",
    items: ["Python", "C/C++", "Linux", "Git", "NumPy"],
    usedIn: "Most research and course projects",
  },
  {
    name: "Automotive & Embedded",
    items: ["AUTOSAR", "CAN", "UDS ISO14229", "STM32", "FreeRTOS", "MATLAB/Simulink"],
    usedIn: "Valeo FOTA award project, racing team, Nestlé internship",
  },
];
