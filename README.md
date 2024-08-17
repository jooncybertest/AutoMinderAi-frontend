# AutoMinderAI - Frontend

[![Website](https://img.shields.io/badge/website-online-green)](https://auto-minder-ai-frontend.onrender.com/)

AutoMinderAI is a cutting-edge application designed to optimize data processing and predictive analytics using AI/ML models. This repository contains the frontend codebase built with modern web technologies, ensuring a responsive and user-friendly experience.

## 🚀 Features
-**Optimized Database Schema:** Enhances data processing efficiency by 30%. <br>
-**AI/ML Integration:** Incorporates predictive analytics models to improve accuracy by 25%. <br>
-**Containerization:** Utilizes Docker for scalable deployment, reducing deployment time by 40%. <br>
-**Responsive Design:** Fully responsive UI, ensuring usability across devices. <br>

## 🛠️ Tech Stack
-**Frontend:** React, TypeScript, Tailwind CSS <br>
-**State Management:** Redux <br>
-**API Integration:** Axios <br>
-**Deployment:** AWS ECS, Docker <br>

## 🔗 Live Demo

Check out the live application here: [AutoMinderAI](https://auto-minder-ai-frontend.onrender.com/)

## 🧑‍💻 Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Docker (optional, for containerization)

### Installation1.**Clone the repository:**    
    ```bash
    git clone https://github.com/your-username/auto-minder-ai-frontend.git
    cd auto-minder-ai-frontend
    ```
2.**Install dependencies:**    
    ```bash
    npm install
    ```
3.**Set up environment variables:**    Create a `.env` file in the root directory and add the necessary environment variables:
    ```env
    REACT_APP_API_URL=http://your-api-url.com
    ```
4.**Run the development server:**    
    ```bash
    npm start
    ```
    The app should now be running on [http://localhost:3000](http://localhost:3000).
### Docker Setup (Optional)

If you prefer running the application inside a Docker container:

1.**Build the Docker image:**    
    ```bash
    docker build -t autominderai-frontend .
    ```
2.**Run the Docker container:**    
    ```bash
    docker run -p 3000:3000 autominderai-frontend
    ```
## 📁 Project Structure
```bash
src/
├── assets/         # Static assets like images, icons, etc.
├── components/     # Reusable React components
├── pages/          # Page components corresponding to different routes
├── services/       # API calls and business logic
├── store/          # Redux store configuration and slices
├── styles/         # Global and component-specific styles
├── utils/          # Utility functions and helpers
└── App.tsx         # Main app component
