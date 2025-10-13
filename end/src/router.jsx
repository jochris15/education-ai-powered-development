import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ErrorPage } from "./pages/ErrorPage";

// Data loaders
async function homeLoader() {
    // Simulate API call for hero data
    return {
        hero: {
            name: "JOHN DOE",
            title: "FULL STACK DEVELOPER",
            description: "CRAFTING DIGITAL EXPERIENCES WITH BOLD DESIGN & CLEAN CODE. I BUILD WEBSITES THAT DON'T JUST WORK – THEY MAKE A STATEMENT.",
            stats: {
                projects: "50+",
                experience: "3+",
                satisfaction: "100%",
                availability: "24/7"
            }
        }
    };
}

async function aboutLoader() {
    return {
        profile: {
            name: "JOHN DOE",
            role: "FULL STACK DEVELOPER",
            bio: "I SPECIALIZE IN CREATING BOLD, FUNCTIONAL, AND USER-FRIENDLY DIGITAL EXPERIENCES. MY WORK IS DRIVEN BY A LOVE FOR CLEAN CODE AND INNOVATIVE DESIGN.",
            approach: [
                "PIXEL-PERFECT DESIGNS",
                "PERFORMANCE-FIRST DEVELOPMENT",
                "USER-CENTERED SOLUTIONS",
                "CONTINUOUS LEARNING"
            ]
        },
        stats: [
            { number: '50+', label: 'PROJECTS COMPLETED' },
            { number: '3+', label: 'YEARS EXPERIENCE' },
            { number: '100%', label: 'CLIENT SATISFACTION' },
            { number: '24/7', label: 'AVAILABILITY' }
        ]
    };
}

async function projectsLoader() {
    return {
        projects: [
            {
                id: 1,
                title: 'E-COMMERCE PLATFORM',
                description: 'FULL-STACK ONLINE STORE WITH PAYMENT INTEGRATION',
                tech: ['REACT', 'NODE.JS', 'MONGODB'],
                color: 'bg-red-500',
                textColor: 'text-white',
                featured: true,
                details: 'A comprehensive e-commerce solution built with modern technologies, featuring real-time inventory management, secure payment processing, and an admin dashboard.'
            },
            {
                id: 2,
                title: 'TASK MANAGEMENT APP',
                description: 'COLLABORATIVE PRODUCTIVITY TOOL WITH REAL-TIME UPDATES',
                tech: ['VUE.JS', 'EXPRESS', 'SOCKET.IO'],
                color: 'bg-blue-500',
                textColor: 'text-white',
                featured: false,
                details: 'A team collaboration platform with real-time messaging, task assignment, progress tracking, and file sharing capabilities.'
            },
            {
                id: 3,
                title: 'SOCIAL MEDIA DASHBOARD',
                description: 'ANALYTICS PLATFORM FOR SOCIAL MEDIA MANAGEMENT',
                tech: ['REACT', 'PYTHON', 'POSTGRESQL'],
                color: 'bg-green-400',
                textColor: 'text-black',
                featured: true,
                details: 'An analytics dashboard that aggregates data from multiple social media platforms, providing insights and automated reporting.'
            },
            {
                id: 4,
                title: 'PORTFOLIO WEBSITE',
                description: 'CREATIVE PORTFOLIO WITH INTERACTIVE ANIMATIONS',
                tech: ['NEXT.JS', 'FRAMER MOTION', 'TAILWIND'],
                color: 'bg-yellow-400',
                textColor: 'text-black',
                featured: false,
                details: 'A stunning portfolio website featuring smooth animations, optimized performance, and a content management system.'
            },
            {
                id: 5,
                title: 'CRYPTO TRACKER',
                description: 'REAL-TIME CRYPTOCURRENCY PRICE MONITORING',
                tech: ['REACT', 'WEBSOCKETS', 'CHARTS.JS'],
                color: 'bg-purple-500',
                textColor: 'text-white',
                featured: true,
                details: 'A real-time cryptocurrency tracking application with portfolio management, price alerts, and technical analysis tools.'
            },
            {
                id: 6,
                title: 'WEATHER APP',
                description: 'BEAUTIFUL WEATHER FORECAST WITH LOCATION SERVICES',
                tech: ['VANILLA JS', 'API INTEGRATION', 'PWA'],
                color: 'bg-pink-500',
                textColor: 'text-white',
                featured: false,
                details: 'A progressive web app providing detailed weather forecasts, interactive maps, and location-based notifications.'
            }
        ]
    };
}

async function projectDetailLoader({ params }) {
    const projectsData = await projectsLoader();
    const project = projectsData.projects.find(p => p.id === parseInt(params.projectId));

    if (!project) {
        throw new Response("Project Not Found", { status: 404 });
    }

    return { project };
}

async function skillsLoader() {
    return {
        skillCategories: [
            {
                title: 'FRONTEND',
                color: 'bg-red-500',
                textColor: 'text-white',
                skills: [
                    { name: 'REACT', level: 95 },
                    { name: 'JAVASCRIPT', level: 90 },
                    { name: 'TYPESCRIPT', level: 85 },
                    { name: 'HTML/CSS', level: 95 },
                    { name: 'TAILWIND CSS', level: 90 },
                    { name: 'VUE.JS', level: 80 }
                ]
            },
            {
                title: 'BACKEND',
                color: 'bg-green-400',
                textColor: 'text-black',
                skills: [
                    { name: 'NODE.JS', level: 90 },
                    { name: 'PYTHON', level: 85 },
                    { name: 'EXPRESS.JS', level: 88 },
                    { name: 'MONGODB', level: 82 },
                    { name: 'POSTGRESQL', level: 80 },
                    { name: 'REST APIs', level: 92 }
                ]
            },
            {
                title: 'TOOLS & OTHERS',
                color: 'bg-purple-500',
                textColor: 'text-white',
                skills: [
                    { name: 'GIT', level: 95 },
                    { name: 'DOCKER', level: 75 },
                    { name: 'AWS', level: 70 },
                    { name: 'FIGMA', level: 85 },
                    { name: 'WEBPACK', level: 80 },
                    { name: 'JEST', level: 78 }
                ]
            }
        ],
        achievements: [
            { title: 'CERTIFIED REACT DEVELOPER', icon: '🏆' },
            { title: 'AWS SOLUTIONS ARCHITECT', icon: '☁️' },
            { title: 'GOOGLE ANALYTICS CERTIFIED', icon: '📊' },
            { title: 'SCRUM MASTER CERTIFIED', icon: '🚀' }
        ]
    };
}

async function contactLoader() {
    return {
        contactInfo: [
            {
                label: 'EMAIL',
                value: 'john.doe@email.com',
                icon: '📧',
                color: 'bg-red-500'
            },
            {
                label: 'PHONE',
                value: '+1 (555) 123-4567',
                icon: '📱',
                color: 'bg-green-400'
            },
            {
                label: 'LOCATION',
                value: 'New York, USA',
                icon: '📍',
                color: 'bg-blue-500'
            },
            {
                label: 'RESPONSE TIME',
                value: '< 24 Hours',
                icon: '⚡',
                color: 'bg-purple-500'
            }
        ]
    };
}

// Contact form action
async function contactAction({ request }) {
    const formData = await request.formData();
    const contactData = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    };

    // Simulate API call
    console.log("Contact form submitted:", contactData);

    // Return success response
    return {
        success: true,
        message: "MESSAGE SENT! I'LL GET BACK TO YOU SOON!"
    };
}

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route
                index
                element={<HomePage />}
                loader={homeLoader}
            />
            <Route
                path="about"
                element={<AboutPage />}
                loader={aboutLoader}
            />
            <Route
                path="projects"
                element={<ProjectsPage />}
                loader={projectsLoader}
            />
            <Route
                path="projects/:projectId"
                element={<ProjectDetailPage />}
                loader={projectDetailLoader}
            />
            <Route
                path="skills"
                element={<SkillsPage />}
                loader={skillsLoader}
            />
            <Route
                path="contact"
                element={<ContactPage />}
                loader={contactLoader}
                action={contactAction}
            />
        </Route>
    )
);