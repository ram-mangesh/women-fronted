# Women's Empowerment Platform

A comprehensive web application designed to empower women by providing essential resources, education, job opportunities, and community support. Built with React, TypeScript, Vite, Tailwind CSS, and Redux Toolkit.

## 🌟 Features

### Core Modules

#### 1. Authentication & User Management
- **Multi-role authentication**: Admin, Mentor, Beneficiary, and Volunteer accounts
- **Secure login/logout**: JWT-based authentication with protected routes
- **Profile management**: User profile editing with role-specific dashboards
- **Session persistence**: Secure token storage with localStorage

#### 2. Dashboard
- **Role-based dashboards**: Customized views for Admin, Mentor, and Beneficiary
- **Real-time statistics**: Cards showing key metrics and KPIs
- **Quick actions**: Shortcut buttons for common tasks
- **Activity feeds**: Recent activities and announcements

#### 3. Education & Learning
- **Course catalog**: Browse and enroll in courses
- **Course categories**: Career development, Financial literacy, Legal awareness, Health & wellness, Skill development
- **Interactive content**: Video lessons, reading materials, quizzes
- **Progress tracking**: Monitor course completion and achievements
- **Certification**: Earn certificates upon course completion

#### 4. Job Portal
- **Job listings**: Browse and apply for opportunities
- **Job categories**: Remote work, Part-time, Full-time, Freelance, Leadership
- **Application management**: Track application status
- **Skill matching**: AI-powered job recommendations
- **Resume builder**: Build and upload resumes

#### 5. Legal Support
- **Legal resources**: Access to laws and regulations
- **Rights information**: Know your rights
- **Legal aid directory**: Find legal professionals
- **Case tracking**: Track legal case progress
- **Document templates**: Download legal document templates

#### 6. Mental Health & Wellness
- **Counseling services**: Access to mental health professionals
- **Self-help resources**: Articles and exercises
- **Meditation guides**: Guided meditation sessions
- **Mood tracking**: Monitor mental well-being
- **Crisis support**: Emergency contact information

#### 7. Community & Networking
- **Discussion forums**: Community discussions
- **Mentorship matching**: Connect with mentors
- **Event management**: Events and workshops
- **Success stories**: Share and inspire

#### 8. Health & Medical
- **Health resources**: Medical information
- **Doctor directory**: Find healthcare providers
- **Appointment booking**: Schedule appointments
- **Health records**: Access medical history

#### 9. Financial Literacy
- **Financial education**: Budgeting, saving, investing
- **Schemes & grants**: Government and NGO schemes
- **Microfinance**: Access to financial services
- **Business planning**: Entrepreneurship resources

#### 10. Safety & Emergency
- **Emergency contacts**: Quick access to helplines
- **Safety tips**: Personal safety education
- **Incident reporting**: Report incidents
- **Safe locations**: Find safe spaces

#### 11. Analytics & Reporting
- **Dashboard analytics**: Platform usage statistics
- **Impact metrics**: Measuring empowerment outcomes
- **Demographic insights**: User demographics
- **Trend analysis**: Growth and engagement trends

#### 12. Admin Panel
- **User management**: Manage users and roles
- **Content management**: Manage content and resources
- **System configuration**: Platform settings
- **Audit logs**: Track system activities

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router v6** - Client-side routing
- **Recharts** - Data visualization
- **React Icons** - Icon library
- **React Hot Toast** - Notifications
- **Zod** - Schema validation

### Architecture
- **Component-based architecture** - Reusable components
- **Custom hooks** - Reusable logic
- **Context API** - Theme and auth context
- **Lazy loading** - Performance optimization
- **Code splitting** - Optimized bundle size

## 📁 Project Structure

```
women-empowerment-platform/
├── src/
│   ├── api/                    # API services
│   │   └── client.ts          # Axios instance with interceptors
│   ├── components/            # Reusable UI components
│   │   ├── common/            # Shared components (Button, Input, Modal, etc.)
│   │   ├── layout/            # Layout components (Header, Sidebar, Footer)
│   │   └── dashboard/         # Dashboard-specific components
│   ├── config/               # Configuration files
│   │   └── index.ts         # App constants, routes, messages
│   ├── pages/               # Page components
│   │   ├── auth/            # Authentication pages
│   │   ├── dashboard/       # Dashboard pages
│   │   ├── courses/         # Education module
│   │   ├── jobs/            # Job portal
│   │   ├── legal/           # Legal support
│   │   ├── health/          # Mental & physical health
│   │   ├── community/       # Community features
│   │   ├── financial/       # Financial literacy
│   │   ├── safety/          # Safety & emergency
│   │   ├── analytics/       # Analytics dashboard
│   │   └── admin/           # Admin panel
│   ├── services/            # Business logic services
│   │   ├── authService.ts   # Authentication service
│   │   ├── courseService.ts # Course management
│   │   ├── jobService.ts    # Job portal service
│   │   └── ...
│   ├── store/               # Redux store
│   │   ├── store.ts         # Redux store configuration
│   │   └── slices/          # Redux slices
│   │       ├── authSlice.ts # Auth state
│   │       ├── courseSlice.ts # Course state
│   │       ├── jobSlice.ts  # Job state
│   │       └── ...
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm 9+
- Git (optional, for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd women-empowerment-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_APP_NAME=Women's Empowerment Platform
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `http://localhost:5000/api` |
| `VITE_APP_NAME` | Application name | `Women's Empowerment Platform` |

### Tailwind CSS Customization

Customize the design in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          // ... customize your palette
        }
      }
    }
  }
}
```

## 📚 API Documentation

### Authentication Endpoints

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": "1",
      "name": "John Doe",
      "email": "user@example.com",
      "role": "beneficiary"
    }
  }
}
```

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123",
  "role": "beneficiary"
}
```

### Course Endpoints

#### Get All Courses
```http
GET /api/courses
```

#### Get Course by ID
```http
GET /api/courses/:id
```

#### Create Course (Admin)
```http
POST /api/courses
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Web Development",
  "description": "Learn web development",
  "category": "career"
}
```

### Job Endpoints

#### Get All Jobs
```http
GET /api/jobs
```

#### Apply for Job
```http
POST /api/jobs/:id/apply
Authorization: Bearer <token>
Content-Type: application/json

{
  "resume": "resume-url"
}
```

> **Note:** This is a demo with mock data. Replace the API service with your actual backend endpoints.

## 🎨 Component Library

### Common Components

#### Button
```tsx
import { Button } from '@/components/common/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

#### Input
```tsx
import { Input } from '@/components/common/Input';

<Input
  label="Email"
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error="Email is required"
/>
```

#### Modal
```tsx
import { Modal } from '@/components/common/Modal';

<Modal isOpen={isOpen} onClose={handleClose} title="Modal Title">
  <p>Modal content</p>
</Modal>
```

#### Card
```tsx
import { Card } from '@/components/common/Card';

<Card hover shadow>
  <Card.Header>Card Title</Card.Header>
  <Card.Body>Card content goes here</Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

## 📊 State Management

### Redux Store Structure

```typescript
interface AppState {
  auth: {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
  };
  courses: {
    courses: Course[];
    currentCourse: Course | null;
    loading: boolean;
    error: string | null;
  };
  jobs: {
    jobs: Job[];
    applications: JobApplication[];
    loading: boolean;
    error: string | null;
  };
  // ... other slices
}
```

### Using Redux in Components

```tsx
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchCourses } from '@/store/slices/courseSlice';

function CourseList() {
  const dispatch = useDispatch<AppDispatch>();
  const { courses, loading } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {courses.map(course => (
        <Card key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </Card>
      ))}
    </div>
  );
}
```

## 🎯 Key Features Implementation

### Protected Routes

```tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}
```

### Authentication Hook

```tsx
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { logout, selectUser, selectIsAuthenticated } from '@/store/slices/authSlice';

function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => selectUser(state));
  const isAuthenticated = useSelector((state: RootState) => selectIsAuthenticated(state));

  const handleLogout = () => {
    dispatch(logout());
  };

  return { user, isAuthenticated, handleLogout };
}
```

## 📱 Responsive Design

The platform is fully responsive and works on:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

Tailwind CSS breakpoints are used for responsive styling:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### Component Tests
```bash
npm run test:components
```

### E2E Tests
```bash
npm run test:e2e
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel deploy
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install -g gh-pages
# Add to package.json:
# "homepage": "https://username.github.io/women-empowerment-platform",
# "scripts": {
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
# }
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- Developers: [Your Team Name]
- Designers: [Your Design Team]
- Contributors: [List of Contributors]

## 📞 Support

For support, email support@womensplatform.org or join our Slack channel.

## 🙏 Acknowledgments

- All the women and organizations working towards women's empowerment
- Open-source community and their amazing tools
- Contributors and volunteers

---

**Built with ❤️ for Women's Empowerment**