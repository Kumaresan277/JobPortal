## 💼 Job Portal Application
 - A Full-Stack Job Portal Application designed to streamline job postings and applications. This platform supports Admin and User roles with secure authentication and a clean UI.
--- 
### 🚀 Features
#### 👤 Admin
- ✅ Post new job listings
- ✅ Delete existing job postings
  
 #### 🙋‍♂️ Users
- ✅ Register & Login with secure JWT Authentication
- ✅ View available jobs
- ✅ Apply for jobs
- ✅ View application status (optional, if implemented)

---

### 🛠️ Tech Stack
- Layer	Technology
- Frontend	React.js + Vite + Tailwind CSS
- Backend	Spring Boot with JWT Authentication
- Database	MySQL

---

### 📦 Setup & Installation
#### 🔹 Backend (Spring Boot)

#### 1) Clone the repository
- git clone https://github.com/your-username/job-portal-backend.git
- cd job-portal-backend
- 
#### 2) Configure application.properties with your MySQL credentials:
- spring.datasource.url=jdbc:mysql://localhost:3306/your_database
- spring.datasource.username=your_username
- spring.datasource.password=your_password
- jwt.secret=your_secret_key

#### 3) Run the application:
- ./mvnw spring-boot:run

---

### 🔹 Frontend (React + Vite)
- git clone https://github.com/your-username/job-portal-frontend.git
- cd job-portal-frontend
  
#### 1)Install dependencies
- npm install

#### 2) Create a .env file and add:
- VITE_API_URL=http://localhost:8080/api

#### 3) Run the application
- npm run dev

---
  
### 🔮 Future Enhancements
- Role-based access control for multiple admin levels
- Job search with filters (location, experience, salary)
- Email notifications for application status
- Pagination for job listings
- Profile section for users to update resumes
--- 

### 👨‍🎓 Author
- Kumaresan D
