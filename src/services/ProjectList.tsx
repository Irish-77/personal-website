// {
//     name: '',
//     image: '',
//     skill: '',
//     description: '',
//     repoURL: ''
// }

import PacmanImage from '../assets/projects/project_image_pacman.jpeg';
import PersonalWebsite from '../assets/projects/PersonalWebsite.png';
import ICS from '../assets/projects/ICS.png';
import C2G from '../assets/projects/c2g.png';
import AIC from '../assets/projects/AIC.png';
import ALKA from '../assets/projects/alka.jpeg';
import CoinCounter from '../assets/projects/CoinCounter.png';

export const ProjectList = [
    {
        name: 'Active Lane Keeping Assistant (ALKA)',
        context: 'University',
        image: ALKA,
        skills: 'Computer Vision, Control Theory, Autonomous Driving',
        stack: 'Python, Numpy, OpenCV, Carla, PID-Controller, Matplotlib',
        repoURL: 'https://github.com/C2G-BR/Active-Lane-Keeping-Assistant',
        description: 'The ALKA project deals with the problem of computer-controlled tracking. In the project, PID, P, PD controllers were compared with each other. The track detection was done by different image transformations. The implementation was done with the simulation platform CARLA. Full documentation is available on Github.'        
    },
    {
        name: 'My Personal Website',
        context: 'Personal',
        image: PersonalWebsite,
        skills: 'Frontend, CI/CD Pipeline',
        stack: 'React, Typescript, Github Actions',
        repoURL: 'https://github.com/Irish-77/personal-website',
        description: 'This website serves my public appearance and is supposed to bundle all my projects, ideas.'        
    },
    {
        name: 'Pacman AI',
        context: 'Machine Learning, Data Science',
        image: PacmanImage,
        skills: 'Python, Reinforcment Learning',
        stack: 'PyTorch, TensorBoard, Matplotlib, Numpy',
        repoURL: 'https://github.com/C2G-BR/Pac-Man-AI',
        description: 'This project aim was to create a Pac-Man environment for reinforcement learning and solve this environment by applying Deep Q-Networks. Thereby the environment was developed from scratch and it allows custom maps.'
    },
    {
        name: 'Drone Secruity',
        context: 'University',
        image: AIC,
        skills: 'Arduino, Sensor, Tello Drone, IoT, Object Detection (YOLO)',
        stack: 'Python, Flask, Javascript/HTML, C++',
        repoURL: 'https://github.com/C2G-BR/Drone-Security',
        description: 'AIC Security is a home security system that connects different sensors and systems. As the owner leaves his house, he activates the Guard mode by pressing a button. The motion sensor is then activated. When motion is detected, a drone is launched to take aerial photos. These are transmitted directly to the customer dashboard, where they are streamed live. Using object detection, people are directly marked on the live stream.'
        
    },
    {
        name: 'Coin2Gether',
        context: 'University',
        image: C2G,
        skills: 'Web Development (Full-Stack), Chatbot, Recommder System, Social Networks - Page Rank, Collaborative Filtering, Chatbot',
        stack: 'Python, Flask, Angular 2, PostgresSQL, Numpy, Docker',
        repoURL: 'https://github.com/C2G-BR/Coin2Gether',
        description: "Coin2Gether (C2G) is a social trading platform where crypto enthusiasts can share information about the current trends in cryptocurrencies. It includes features such as a self-written chatbot that is able to carry out the user's commands on the website as well as a recommender system that suggests users to follow based on social networks and similar portfolios. Furthermore, API statistics can be viewed via an admin dashboard."
        
    },
    {
        name: 'Coin Counter',
        context: 'University',
        image: CoinCounter,
        skills: 'API, Object Detection, AI, Data Labeling',
        stack: 'Python, PyTorch, Flask, Flutter',
        repoURL: 'https://github.com/Ronho/coin-counter-2-gether',
        description: 'With Coin Detector App you can take a picture of your Euro coins. The AI trained with custom labeled data calculates the value of the coins and tells you how many coins are in the picture and the cumulative value of these coins. The app is used to take the photo, which is sent to the backend. Then the AI (Faster R-CNN with MobileNet Backbone) calculates the value of the coins. Afterwards, the recognized coins are labeled in the app. Using Ngrok, the home computer can be utilized as a server. The app development was not my area of responsibility.'
        
    },
    {
        name: 'Intelligent Charging Station (ICS)',
        context: 'University',
        image: ICS,
        skills: 'Fullstack, Reinforcement Learning',
        stack: 'Python, Flask, PyTorch, Numpy, Angular 2, Ngrok',
        repoURL: 'https://github.com/C2G-BR/Intelligent-Charging-Station',
        description: 'ICS is a platform designed to provide intelligent charging to charging station operators in order to further minimize grid utilization.  In the process, a custom environment was developed on which an agent was trained using reinforcement learning.   In a comparison, the trained AI outperforms a first-come-first-served algorithm. In addition, the business is offered a front-end interface that provides a visual overview of the charging stations and the charging progression of the connected vehicles.'
    },
]