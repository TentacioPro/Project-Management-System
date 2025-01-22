# Project Management System 🚀

This is a project management system built using the MERN stack (MongoDB, Express, React, Node.js). 🛠️

---

## Project Structure 📂

### Backend 🗄️
backend/
├── .env 🗒️
├── models/ 📁
│ └── Task.js 🗒️
├── package.json 🗒️
├── routes/ 📁
│ └── tasks.js 🗒️
└── server.js 🗒️


### Frontend 🌐
frontend/
├── .gitignore 🗒️
├── package.json 🗒️
├── public/ 📁
│ ├── index.html 🗒️
│ ├── manifest.json 🗒️
│ └── robots.txt 🗒️
├── README.md 🗒️
└── src/ 📁
├── App.css 🗒️
├── App.js 🗒️
├── App.test.js 🗒️
├── components/ 📁
│ ├── Dashboard.js 🗒️
│ ├── TaskCard.js 🗒️
│ └── TaskForm.js 🗒️
├── index.css 🗒️
├── index.js 🗒️
├── pages/ 📁
│ └── Login.js 🗒️
├── reportWebVitals.js 🗒️
└── setupTests.js 🗒️

---

## Getting Started 🚀

### **Backend** 💻

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:  
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:  
    ```env
    PORT=5000
    MONGO_URI=mongodb://127.0.0.1:27017/
    ```

4. Start the backend server:  
    ```sh
    npm start
    ```

---

### **Frontend** 🌐

1. Navigate to the `frontend` directory:  
    ```sh
    cd frontend
    ```

2. Install the dependencies:  
    ```sh
    npm install
    ```

3. Start the frontend development server:  
    ```sh
    npm start
    ```

---

## Available Scripts 📜

### **Backend** ⚙️
- `npm start`: Starts the backend server.

### **Frontend** 🛠️
- `npm start`: Starts the frontend development server.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run eject`: Ejects the Create React App configuration.

---

## API Documentation 📖

### **Endpoints**

#### 🟢 `GET /tasks`
Fetch all tasks.

#### 🔵 `POST /tasks`
Create a new task.

#### 🟡 `PATCH /tasks/:id`
Update the status of a task.

#### 🔴 `DELETE /tasks/:id`
Delete a task.

---

## Contributing 🤝

Contributions are welcome! Feel free to open an issue or submit a pull request.  
Make sure to follow the project's [Code of Conduct](https://example.com/code-of-conduct) when contributing.

---

## License 📄

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  

---
