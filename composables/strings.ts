/**
 * Centralized UI strings for easy translation and consistency.
 * Structure: strings.section.key
 * 
 * To add a new language:
 * 1. Create strings.es.ts (or other language code)
 * 2. Export same structure with translated values
 * 3. Import and switch based on locale
 */

export const strings = {
    // Navigation
    nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
    },

    // Home page - Hero section
    hero: {
        greeting: "Hi, I'm Janina",
        headline: 'Frontend Developer · Building products that users love',
        description: 'I transform complex requirements into clean, accessible, and performant interfaces. Specialized in Vue 2/3, TypeScript, and Nuxt, with real production experience in insurtech, edtech, and personal SaaS projects.',
        cta: {
            projects: 'See Projects',
            contact: "Let's Talk"
        }
    },

    // Home page - What I Do section
    whatIDo: {
        title: 'What I Do',
        cards: [
            {
                icon: '🎨',
                title: 'UI Development',
                description: 'Building intuitive, accessible interfaces with Vue, Vuetify, and modern component patterns.'
            },
            {
                icon: '⚡',
                title: 'Performance',
                description: 'Optimizing applications for speed with Nuxt 3, lazy loading, and efficient state management.'
            },
            {
                icon: '🔄',
                title: 'Legacy Migration',
                description: 'Modernizing legacy code to Vue 3 + TypeScript while maintaining business continuity.'
            },
            {
                icon: '🛠️',
                title: 'Full-Stack Basics',
                description: 'Integrating APIs, working with Supabase/PHP backends, and deploying to Vercel.'
            }
        ]
    },

    // Home page - Featured Projects section
    featuredProjects: {
        title: 'Featured Projects',
        viewAll: 'View All Projects →'
    },

    // Home page - Tech Stack section
    techStack: {
        title: 'Tech Stack',
        items: [
            { label: 'Frontend', value: 'Vue 2/3 • Nuxt 3 • TypeScript' },
            { label: 'Styling', value: 'SCSS • Vuetify • CSS3' },
            { label: 'State', value: 'Pinia • Composition API' },
            { label: 'Backend', value: 'Supabase • PHP/Laravel • REST APIs' },
            { label: 'Tools', value: 'Git • Figma • Jira • Vitest' }
        ]
    },

    // Home page - CTA section
    cta: {
        title: 'Ready to Start Your Project?',
        description: "Let's collaborate and build something great together.",
        button: 'Contact Me'
    },

    // About page
    about: {
        title: 'About Me',
        intro: "I'm a frontend developer with hands-on experience building product interfaces and migrating legacy systems. I enjoy turning complex requirements into clear, accessible, and fast UIs using Vue 2/3, TypeScript, and Nuxt.",
        skillsTitle: 'Technical Skills',
        experienceTitle: 'Experience',
        howIWorkTitle: 'How I Work',
        howIWorkIntro: 'Clean code, clear communication, and user focus. I rely on:',
        howIWorkList: [
            'Component architecture with Composition API',
            'Strict typing with TypeScript',
            'Accessible, thoughtful UI/UX',
            'Continuous QA and reliability',
            'Team collaboration and product mindset'
        ],
        beyondWorkTitle: 'Beyond Work',
        beyondWork: [
            "🌍 I love immersive travel, local city events, 📚 reading, and 🎬 cinema (Tim Burton and Christopher Nolan fan; favorite movie: V for Vendetta — and during the holidays I still enjoy the classic cheesy ones).",
            "💙 Ravenclaw spirit, curious and adventurous. I prefer ♟️ board games, enjoy chess, and creating a home around my people.",
            "🤝 I thrive in teams and also value focused solo time. If I were an animal: a 🐬 dolphin — sometimes a 🐼 panda.",
            "🏡 I care about aesthetics, interior design, and keeping things clean and organized."
        ]
    },

    // Skills groups
    skills: {
        frontend: {
            title: 'Frontend',
            items: ['Vue 2/3 & Nuxt', 'TypeScript', 'Pinia, Vue Router, Vuetify', 'SCSS & CSS']
        },
        tools: {
            title: 'Tools & QA',
            items: ['Scrum with Jira', 'Functional QA and incident reporting', 'Git & version control', 'Figma & interface design']
        },
        services: {
            title: 'Services',
            items: ['API integrations', 'Service creation from scratch', 'Debugging & performance with DevTools', 'Best practices for performance']
        }
    },

    // Experience
    experience: [
        {
            company: 'eBroker Insurance Technology',
            role: 'Frontend Developer',
            period: 'April 2023 – February 2025',
            meta: 'Insurtech · Merlin multi-quoting platform',
            description: 'Worked in a Scrum team maintaining and enhancing a high-complexity insurance pricing tool. Implemented business logic and UI with Vue 2 and TypeScript. Developed frontend unit tests and collaborated closely with backend teams.'
        },
        {
            company: 'CheckPon',
            role: 'Product Developer & UI Designer',
            period: 'September 2025 – December 2025',
            meta: 'Part-time collaboration · Startup',
            description: 'Designed user interfaces and navigation flows for an image verification platform. Collaborated with development team on technical feasibility and created the design system and visual identity.'
        },
        {
            company: 'EvolMind',
            role: 'Frontend Developer',
            period: 'February 2025 – Present',
            meta: 'EdTech · Educational web platform',
            description: 'Developing and maintaining a production educational platform using Vue 3 and TypeScript. Migrating legacy code to modern frontend architecture. Optimizing frontend components for performance and scalability.'
        }
    ],

    // Projects page
    projects: {
        title: 'Projects',
        description: 'Personal projects built to learn, showcase skills, and explore in-demand technologies. Each one solves a real problem and demonstrates clean code, thoughtful UX, and modern best practices.',
        viewLive: 'View live →',
        viewDetails: 'View details →',
        highlightsLabel: 'Highlights'
    },

    // Contact page
    contact: {
        title: 'Get In Touch',
        description: "I'm always interested in hearing about new projects and opportunities. Feel free to reach out!",
        form: {
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'your@email.com',
            subject: 'Subject',
            subjectPlaceholder: 'Project inquiry',
            message: 'Message',
            messagePlaceholder: 'Tell me about your project...',
            submit: 'Send Message',
            submitting: 'Sending...',
            success: "Thank you! I'll get back to you soon.",
            error: 'Something went wrong. Please try again.'
        },
        otherWays: 'Other Ways to Connect',
        methods: {
            email: { label: 'Email', value: 'jdorobantu@gmail.com' },
            linkedin: { label: 'LinkedIn', value: 'LinkedIn Profile' },
            github: { label: 'GitHub', value: 'My Projects' },
            whatsapp: { label: 'WhatsApp', value: '+34 628 946 280' }
        }
    },

    // Welcome dialog
    welcome: {
        title: 'Hey there! 👋',
        body: [
            "I'm so glad you stopped by! This is my little corner of the web where I share my projects, ideas, and passion for frontend development.",
            "Feel free to explore, and if you have any questions or just want to chat about code, design, or anything else, **don't hesitate to reach out**. 😊",
            "Enjoy the journey!"
        ],
        cta: "Let's go"
    },

    // Footer
    footer: {
        copyright: '© 2026 Janina Dorobantu. All rights reserved.'
    }
};

export type Strings = typeof strings;
