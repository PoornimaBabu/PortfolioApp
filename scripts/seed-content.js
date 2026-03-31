
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const SiteContentSchema = new mongoose.Schema({
    profile: {
        name: { type: String, required: true, default: 'Poornima' },
        tagline: { type: String, default: 'Senior Software Engineer' },
        resumeLink: { type: String, default: 'https://tr.ee/_3C6JlMK_X' },
        socials: { type: Map, of: String },
    },
    sections: [
        {
            id: { type: String, required: true },
            type: { type: String, enum: ['text', 'projects', 'timeline', 'list'], required: true },
            title: { type: String, required: true },
            data: { type: mongoose.Schema.Types.Mixed, default: {} },
        },
    ],
}, { timestamps: true });

const SiteContent = mongoose.models.SiteContent || mongoose.model('SiteContent', SiteContentSchema, 'site_content');

const projects = [
  {
    id: '1',
    title: 'MissionSquare Retirement Platform',
    description: 'High-performance retirement planning dashboards serving 50K+ monthly users.',
    longDescription: 'Built scalable React/TypeScript dashboards for retirement planning workflows, integrating REST APIs and ensuring 90%+ unit test coverage using React Testing Library and Vitest. Optimized Core Web Vitals to achieve 95%+ Lighthouse scores.',
    challenge: 'Customer-facing dashboards required performance optimization and reusable UI architecture to support growing user traffic and complex financial workflows.',
    solution: 'Designed reusable component libraries, implemented vendor bundle optimization and chunk splitting, and improved asset delivery across modules.',
    impact: 'Improved performance metrics across key customer journeys and supported a production system serving 50K+ monthly active users.',
    technologies: ['React', 'TypeScript', 'Vitest', 'React Testing Library', 'REST APIs', 'Webpack'],
    category: 'work',
    featured: true
  },
  {
    id: '2',
    title: 'Deall Admin',
    description: 'Operational analytics dashboard tracking KPIs across 100+ vendors.',
    longDescription: 'Developed admin dashboards tracking 15+ financial KPIs across vendors to help operations teams proactively monitor settlements and risks.',
    challenge: 'Operations teams lacked visibility into vendor-level financial metrics, making proactive decision-making difficult.',
    solution: 'Built React dashboards with TypeScript integrating backend services and analytics modules for vendor monitoring.',
    impact: 'Enabled real-time tracking across 100+ vendors and improved financial risk visibility for business stakeholders.',
    technologies: ['React', 'TypeScript', 'Redux', 'REST APIs'],
    category: 'work',
    featured: true
  },
  {
    id: '3',
    title: 'Performance Optimization for Fintech Platform',
    description: 'Scaled platform from 1K to 100K+ users with improved load performance.',
    longDescription: 'Reduced load time by 20% using lazy loading, vendor chunking, and bundle optimization with Webpack Bundle Analyzer.',
    challenge: 'Growing user base caused performance bottlenecks affecting customer experience.',
    solution: 'Introduced bundle splitting strategies and optimized dependency loading using Webpack analysis.',
    impact: 'Successfully supported scaling from 1K to 100K+ users with improved responsiveness.',
    technologies: ['React', 'Webpack', 'JavaScript', 'Performance Optimization'],
    category: 'work',
    featured: true
  },
  {
    id: '4',
    title: 'Automated Report Generation System',
    description: 'Spring Boot reporting modules reducing manual admin work from hours to minutes.',
    longDescription: 'Developed 6+ automated reporting modules using Java Spring Boot for operational analytics and settlement tracking.',
    challenge: 'Manual report compilation slowed operational workflows.',
    solution: 'Designed backend reporting services that automated data aggregation and report generation.',
    impact: 'Reduced reporting time drastically and improved operational efficiency.',
    technologies: ['Java', 'Spring Boot', 'REST APIs'],
    category: 'work',
    featured: true
  },
  {
    id: '5',
    title: 'Spreadsheet-style Approval Workflow UI',
    description: 'Dynamic validation workflow for large medical datasets.',
    longDescription: 'Built spreadsheet-like approval workflows using Material UI with cell-level validation and optimized rendering for large datasets.',
    challenge: 'Medical device datasets required complex validation logic with high performance.',
    solution: 'Implemented dynamic validation layers with optimized React rendering strategies.',
    impact: 'Improved approval workflow efficiency and reduced manual validation overhead.',
    technologies: ['React', 'Material UI', 'JavaScript'],
    category: 'work',
    featured: true
  },
  {
    id: '6',
    title: 'AI Movie Suggestion Agent',
    description: 'Context-aware AI movie recommender using LangChain and Anthropic API.',
    longDescription: 'Built an AI-powered recommendation agent that suggests movies based on mood and preferences using engineered prompts and LangChain workflows.',
    challenge: 'Traditional recommendation systems fail to capture emotional context.',
    solution: 'Implemented prompt-engineered conversational recommendations using LLM APIs.',
    impact: 'Delivered personalized context-aware suggestions improving recommendation relevance.',
    technologies: ['LangChain', 'Anthropic API', 'Python', 'LLM'],
    category: 'personal',
    featured: true
  }
];

const resumeData = {
    personalInfo: {
        name: 'Poornima Babu',
        title: 'Lead Technical Consultant | React • TypeScript • Frontend Architecture • Performance Optimization',
        email: 'poornibn24@gmail.com',
        phone: '+91 84381 79697',
        location: 'Chennai, India',
        summary: `I am a Senior Software Engineer with 8+ years of experience building scalable web applications using React and TypeScript across fintech, enterprise platforms, and analytics dashboards.

            MISSION:
            To design performant, accessible, and scalable frontend systems that power real-world financial and enterprise workflows.

            CAPABILITIES:
            • Frontend Architecture (React + TypeScript)
            • Performance Optimization & Core Web Vitals
            • Scalable Dashboard Systems (50K+ users)
            • Full-stack Feature Development (Spring Boot + REST APIs)

            LOOKING FOR:
            Senior / Lead Frontend Engineering roles where I can contribute to building high-impact user-facing platforms at scale.`
    },

    experience: [
        {
            id: '1',
            title: 'Lead Technical Consultant',
            company: 'Perficient',
            location: 'India',
            startDate: '2025-05',
            endDate: 'Present',
            description: [
                'Built reusable React/TypeScript components powering retirement planning dashboards serving 50K+ monthly active users.',
                'Achieved 95%+ Lighthouse performance scores by improving Core Web Vitals (LCP, CLS, INP) through chunk splitting and bundle optimization.',
                'Implemented automated testing workflows with React Testing Library and Vitest ensuring 90%+ test coverage.',
                'Integrated REST APIs for transaction workflows, portfolio tracking, and financial account modules.',
                'Strengthened CI/CD quality pipelines with ESLint and automated checks to streamline code reviews.'
            ],
            technologies: ['React', 'TypeScript', 'Vitest', 'React Testing Library', 'REST APIs', 'Webpack']
        },

        {
            id: '2',
            title: 'Software Development Engineer III',
            company: 'Rootquotient',
            location: 'India',
            startDate: '2023-02',
            endDate: '2025-03',
            description: [
                'Scaled a fintech platform from 1K to 100K+ users by reducing load time 20% using lazy loading and vendor bundle optimization.',
                'Developed admin dashboards tracking 15+ KPIs across 100+ vendors to support operational risk monitoring.',
                'Engineered responsive landing pages with Arabic RTL localization and WCAG accessibility compliance.',
                'Built 6+ automated report-generation modules using Java Spring Boot reducing manual reporting effort from hours to minutes.',
                'Architected AWS infrastructure using Route53, CloudFront, EC2, and S3 ensuring 99.9% uptime.',
                'Led cross-functional team of 12 engineers delivering 95% on-time production releases across multiple applications.'
            ],
            technologies: ['React', 'TypeScript', 'Spring Boot', 'AWS', 'Webpack', 'Accessibility', 'i18n']
        },

        {
            id: '3',
            title: 'Senior Developer',
            company: 'HCLTech',
            location: 'India',
            startDate: '2021-09',
            endDate: '2023-02',
            description: [
                'Built spreadsheet-style approval workflows using Material UI with dynamic validation for large medical datasets.',
                'Optimized rendering performance across complex enterprise UI screens handling large data tables.',
                'Implemented guided onboarding tours improving user satisfaction scores from 80% to 92%.',
                'Led Windows Server production deployment and cross-functional UAT ensuring zero post-go-live downtime.'
            ],
            technologies: ['React', 'Material UI', 'JavaScript', 'Enterprise UI Systems']
        },

        {
            id: '4',
            title: 'Senior Software Engineer',
            company: 'Sopra Steria',
            location: 'India',
            startDate: '2017-11',
            endDate: '2021-09',
            description: [
                'Developed a voice-controlled smart mirror prototype using speech recognition and NLP for supermarket product discovery.',
                'Built a conversational chatbot integrating Node.js with SAP systems reducing manual test-data preparation effort by 60%.',
                'Worked on enterprise automation workflows interacting with legacy mainframe environments.'
            ],
            technologies: ['Node.js', 'NLP', 'SAP AI', 'Speech Recognition']
        }
    ],

    education: [
        {
            id: '1',
            degree: 'Bachelor of Engineering – Computer Science',
            institution: 'Dhirajlal Gandhi College of Technology',
            location: 'Salem, India',
            graduationDate: 'May 2017'
        }
    ],

    skills: [
        {
            category: 'Frontend',
            skills: [
                'React',
                'TypeScript',
                'JavaScript (ES6+)',
                'Redux',
                'Context API',
                'HTML5',
                'CSS3',
                'Material UI'
            ]
        },
        {
            category: 'Backend',
            skills: [
                'Java',
                'Spring Boot',
                'REST API Design'
            ]
        },
        {
            category: 'Testing & Performance',
            skills: [
                'React Testing Library',
                'Vitest',
                'Webpack Bundle Analyzer',
                'Core Web Vitals Optimization'
            ]
        },
        {
            category: 'Cloud & DevOps',
            skills: [
                'AWS (S3, CloudFront, Route53)',
                'Docker',
                'CI/CD',
                'Git'
            ]
        },
        {
            category: 'Core Engineering',
            skills: [
                'Data Structures',
                'Algorithms',
                'System Design',
                'Agile/Scrum'
            ]
        }
    ]
};

async function seed() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const content = {
            profile: {
                name: resumeData.personalInfo.name,
                tagline: resumeData.personalInfo.title,
                resumeLink: 'https://tr.ee/_3C6JlMK_X',
                socials: {
                    email: resumeData.personalInfo.email,
                    linkedin: 'https://www.linkedin.com/in/poornima-babu/',
                    github: 'https://github.com/PoornimaBabu'
                }
            },
            sections: [
                {
                    id: 'stats',
                    type: 'text',
                    title: 'Statistics',
                    data: {
                        items: [
                            { label: 'Experience', value: '8+ Years' },
                            { label: 'Projects', value: `${projects.length}+` },
                        ]
                    }
                },
                {
                    id: 'projects',
                    type: 'projects',
                    title: 'Featured Work',
                    data: {
                        items: projects
                    }
                },
                {
                    id: 'experience',
                    type: 'timeline',
                    title: 'Experience',
                    data: {
                        items: resumeData.experience
                    }
                },
                {
                    id: 'education',
                    type: 'timeline',
                    title: 'Education',
                    data: {
                        items: resumeData.education
                    }
                },
                {
                    id: 'skills',
                    type: 'list',
                    title: 'Skills',
                    data: {
                        items: resumeData.skills
                    }
                },
                {
                    id: 'about',
                    type: 'text',
                    title: 'About Me',
                    data: {
                        content: resumeData.personalInfo.summary
                    }
                }
            ]
        };

        await SiteContent.findOneAndUpdate(
            {},
            content,
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        console.log('Content seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding content:', error);
        process.exit(1);
    }
}

seed();
