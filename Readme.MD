# LearnHub - Learning Management System

A complete Learning Management System where students can browse and purchase courses, instructors can create and sell their courses, and administrators can manage the entire platform. Built with modern web technologies for a smooth and responsive experience.

## What is LearnHub?

LearnHub is a full-stack web application that connects students with instructors through an online learning platform. Students can discover courses, make purchases, and track their learning progress. Instructors can create courses, set prices, and manage their content. Administrators have full control over users, courses, and platform analytics.

## Key Features

**For Students:**
- Browse and search through available courses
- Purchase courses (both free and paid)
- Personal dashboard to track learning progress
- Responsive design that works on mobile and desktop

**For Instructors:**
- Create and manage courses with descriptions and thumbnails
- Set custom pricing for courses
- View analytics and track course performance
- Edit or delete existing courses

**For Administrators:**
- Manage all users and instructors
- View platform statistics and analytics
- Monitor all courses and transactions
- Complete system overview

## Technology Stack

**Frontend (What users see):**
- React - For building the user interface
- Tailwind CSS - For styling and responsive design
- Framer Motion - For smooth animations
- React Router - For navigation between pages
- Axios - For communicating with the backend

**Backend (Server side):**
- Node.js with Express - Web server
- TypeScript - For better code quality
- PostgreSQL - Database to store all data
- Prisma - Makes working with the database easier
- JWT - For secure user authentication
- bcrypt - For password security

## Getting Started

### What You Need First

Before you can run this project, make sure you have:
- Node.js installed (version 20.19 or higher)
- PostgreSQL database set up
- A code editor like VS Code

### Step 1: Download the Project

```bash
git clone <your-repository-url>
cd LMS-V2
```

### Step 2: Set Up the Backend

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder with your database connection:

```
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/lms_database"
JWT_SECRET="your-secret-key-for-tokens"
```

Set up the database:

```bash
npx prisma generate
npx prisma migrate deploy
```

Start the backend server:

```bash
npm run dev
```

The backend will run on http://localhost:3000

### Step 3: Set Up the Frontend

Open a new terminal window and navigate to the frontend folder:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run on http://localhost:5173

### Step 4: Open Your Browser

Visit http://localhost:5173 to see your application running!

## How the Application Works

### User Registration and Login
- Users can sign up as either Students or Instructors
- Secure password hashing keeps accounts safe
- JWT tokens manage user sessions

### Course Management
- Instructors create courses with titles, descriptions, and prices
- Courses can be free (price = 0) or paid
- Optional thumbnail images make courses more appealing

### Purchase System
- Students can browse all available courses
- Simple purchase flow for both free and paid courses
- Purchase history is tracked in the database

## Project Structure

```
LMS-V2/
├── backend/                 # Server-side code
│   ├── src/
│   │   ├── controller/     # Handles requests and responses
│   │   ├── middleware/     # Authentication and security
│   │   ├── routes/         # API endpoints
│   │   └── index.ts        # Main server file
│   └── prisma/
│       └── schema.prisma   # Database structure
│
├── frontend/               # Client-side code
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Different pages of the app
│   │   ├── contexts/       # Shared application state
│   │   └── utils/          # Helper functions
│   └── public/             # Static files
```

## API Endpoints

The backend provides these main endpoints:

**User Authentication:**
- `POST /api/v1/user/signup` - Create new account
- `POST /api/v1/user/login` - Sign in to existing account
- `GET /api/v1/user/profile` - Get user information

**Course Management:**
- `GET /api/v1/user/courses` - Get all available courses
- `POST /api/v1/user/purchase` - Purchase a course
- `POST /api/v1/instructor/create` - Create new course (instructors only)
- `PUT /api/v1/instructor/update` - Update existing course
- `DELETE /api/v1/instructor/delete` - Remove a course

**Admin Functions:**
- `GET /api/v1/admin/users` - Get all users
- `GET /api/v1/admin/instructors` - Get all instructors

## Database Structure

The application uses three main database tables:

**Users Table:**
- Stores user information (name, email, password)
- Defines user roles (Student, Instructor, Admin)

**Courses Table:**
- Contains course details (title, description, price)
- Links to the instructor who created it
- Tracks creation and update dates

**Purchases Table:**
- Records when students buy courses
- Links users to their purchased courses
- Stores purchase timestamps

## Common Issues and Solutions

**"Missing script: dev" error:**
Make sure you're in the correct folder (backend or frontend) when running npm commands.

**Database connection errors:**
Check that PostgreSQL is running and your DATABASE_URL in the .env file is correct.

**Port already in use:**
If you get port errors, make sure no other applications are using ports 3000 or 5173.

**Node.js version warning:**
The project works with Node.js 20.12.0 despite the warning. For best results, consider updating to Node.js 20.19+ or 22.12+.

## Making Changes

### Adding New Features
1. For backend changes, modify files in `backend/src/`
2. For frontend changes, modify files in `frontend/src/`
3. The development servers automatically reload when you save changes

### Database Changes
If you need to modify the database structure:
1. Update `backend/prisma/schema.prisma`
2. Run `npx prisma migrate dev --name your-change-name`
3. Run `npx prisma generate` to update the client

## Deployment

### Backend Deployment
1. Build the project: `npm run build`
2. Set up environment variables on your hosting platform
3. Deploy the built files
4. Run database migrations in production

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to a static hosting service
3. Update API URLs if needed


---

Happy coding and learning!