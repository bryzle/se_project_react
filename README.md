# WTWR (What to Wear?) - Front End

## About the Project
WTWR (What to Wear?) is a full-stack application that helps users make informed clothing choices based on daily weather forecasts. This repository contains the front-end codebase, which provides a responsive and user-friendly interface to display weather data and recommended clothing items.

---

## Features
- **Dynamic Weather Integration**: Fetches and displays real-time weather data through API calls.
- **Clothing Recommendations**: Suggests suitable attire based on current weather conditions.
- **Responsive Design**: Optimized for seamless usability across desktop and mobile devices.
- **User Authentication**: Supports secure login and personalized recommendations.

---

## Links
- **Live Website**: [WTWR Front-End](https://bryzle.github.io/se_project_react)
- **Back-End Repository**: [WTWR Back-End](https://github.com/bryzle/se_project_express)

---

## Technologies Used
- **React**: Front-end library for building the user interface.
- **CSS**: Styling for responsive and visually appealing designs.
- **Fetch API**: For API calls to fetch weather and clothing data.
- **React Router**: Enables navigation between pages.

---

## Installation
### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/bryzle/se_project_react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd se_project_react
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add the back-end API URL:
   ```env
   REACT_APP_API_URL=https://wtwr.brandonlum.com
   ```

5. Start the development server:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

---

## Usage
- **View Weather Forecasts**: Access real-time weather information.
- **Get Clothing Suggestions**: Receive tailored clothing recommendations based on the forecast.
- **Secure Access**: Log in for a personalized experience.

---

## File Structure
```
src/
├── assets/         # Images and icons
├── components/     # Reusable React components
│   ├── Header/     # Navigation header
│   ├── Footer/     # Footer with links
│   ├── Weather/    # Weather display components
│   ├── Clothing/   # Recommended clothing components
├── pages/          # Page-level components
├── utils/          # Utility functions (e.g., API calls)
├── App.js          # Main application file
├── index.css       # Global styles
└── index.js        # Entry point
```

---

## Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeatureName"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request for review.

---
