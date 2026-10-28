// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faMessage, faGraduationCap, faCalendarCheck, faPeopleGroup, faComputer, faDatabase, faMobileScreenButton, faCode, faMagnifyingGlass, faBug, faCheck, faCircleCheck, faScrewdriverWrench, faEye, faRotate, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const experiences = [
    {
        slug: "vice-president",
        category: "LEADERSHIP",
        period: "2025/26",
        title: "VICE PRESIDENT",
        department : "CICOT / NACOS",
        organization: "Crescent University, Abeokuta.",
        location: "Ogun, Nigeria",

        icon: faUser,

        description:
            "Supported departmental leadership, represented student interests, and helped coordinate academic activities and student initiatives.",

        details: {
            overview:
                "Elected Vice President of the Computer Science department after a departmental election and screening process, representing a student body of 600+ students.",

            responsibilities: [
                {
                    title: "STUDENT REPRESENTATION",
                    text: "Represented the interests and concerns of 600+ Computer Science students.",
                    img: <FontAwesomeIcon icon={faUser} />
                },
                {
                    title: "COMMUNICATION",
                    text: "Served as a communication link between students, lecturers, and departmental staff.",
                    img: <FontAwesomeIcon icon={faComments} />
                },
                {
                    title: "STUDENT FEEDBACK",
                    text: "Relayed student concerns and feedback to the appropriate staff members.",
                    img: <FontAwesomeIcon icon={faMessage} />
                },
                {
                    title: "ACADEMIC SUPPORT",
                    text: "Supported students with academic-related concerns and departmental matters.",
                    img: <FontAwesomeIcon icon={faGraduationCap} />
                },
                {
                    title: "EVENT PLANNING",
                    text: "Assisted with planning departmental events and obtaining the necessary approvals.",
                    img: <FontAwesomeIcon icon={faCalendarCheck} />
                },
                {
                    title: "EVENT COORDINATION",
                    text: "Helped coordinate seminars, hackathons, movie nights, sports activities, and departmental dinners.",
                    img: <FontAwesomeIcon icon={faPeopleGroup} />
                }
            ],

            activities: [
                {
                    text: "Academic support and student representation",
                    img: <FontAwesomeIcon icon={faGraduationCap} />
                },
                {
                    text: "Departmental seminars",
                    img: <FontAwesomeIcon icon={faComments} />
                },
                {
                    text: "Hackathons",
                    img: <FontAwesomeIcon icon={faCode} />
                },
                {
                    text: "Movie nights",
                    img: <FontAwesomeIcon icon={faFilm} />
                },
                {
                    text: "Sports activities",
                    img: <FontAwesomeIcon icon={faPeopleGroup} />
                },
                {
                    text: "Departmental dinner",
                    img: <FontAwesomeIcon icon={faCalendarCheck} />
                }
            ],

            impact:
                "The experience increased my involvement in departmental activities and gave me the opportunity to work directly with students, staff, and other student leaders. Event participation and turnout improved across activities, with students giving positive feedback about the experience and the work of the leadership team.",

            takeaway:
                "The role strengthened my communication, coordination, leadership, and problem-solving skills while teaching me how to balance different student needs and work with staff to turn ideas into approved and organized activities.",

            images: [
                `${import.meta.env.BASE_URL}images/experience/vp-1.jpg`,
                `${import.meta.env.BASE_URL}images/experience/vp-2.jpg`,
                `${import.meta.env.BASE_URL}images/experience/vp-3.jpg`
            ]
        }
    },

    {
        slug: "it-intern",
        category: "INTERNSHIP",
        period: "JULY–OCT 2025",
        title: "IT INTERN",
        organization: "Adron Homes & Properties Ltd.",
        location: "Lagos, Nigeria",

        icon: faLaptopCode,

        description:
            "Gained practical experience in IT operations and software development while supporting day-to-day technical needs and digital systems.",

        details: {
            overview:
                "Worked within the company's IT environment, gaining practical exposure to technical support, hardware and software setup, networking, website development, databases, and digital product testing.",

            responsibilities: [
                {
                    title: "SYSTEM & SOFTWARE SETUP",
                    text: "Set up computer systems which involved installing and configuring software on company systems.",
                    img: <FontAwesomeIcon icon={faComputer} />
                },
                {
                    title: "IT SUPPORT",
                    text: "Supported other departments with day-to-day IT-related problems which involved Network troubleshooting and Hardware maintenance.",
                    img: <FontAwesomeIcon icon={faScrewdriverWrench} />
                },
                {
                    title: "DATABASE WORK",
                    text: "Worked on database-related tasks which involved migrating and maintaining the company's database systems to the new platforms.",
                    img: <FontAwesomeIcon icon={faDatabase} />
                },
                {
                    title: "WEBSITE & MOBILE APP TESTING",
                    text: "Tested the company's new website and mobile application, and reported observations from the user perspective.",
                    img: <FontAwesomeIcon icon={faMobileScreenButton} />
                },
                {
                    title: "DEVELOPER COLLABORATION",
                    text: "Worked with developers from another company during website-related activities.",
                    img: <FontAwesomeIcon icon={faCode} />
                }
            ],

            workflow: [
                {
                    text: "Receive or identify a technical issue",
                    img: <FontAwesomeIcon icon={faMagnifyingGlass} />
                },
                {
                    text: "Investigate the problem",
                    img: <FontAwesomeIcon icon={faBug} />
                },
                {
                    text: "Work with IT staff or independently on a solution",
                    img: <FontAwesomeIcon icon={faScrewdriverWrench} />
                },
                {
                    text: "Test the solution",
                    img: <FontAwesomeIcon icon={faCheck} />
                },
                {
                    text: "Confirm that the system works as expected",
                    img: <FontAwesomeIcon icon={faCircleCheck} />
                }
            ],

            technical:
                "The internship exposed me to practical IT operations beyond software development, including system setup, software installation, networking, hardware support, website and database work, and user-focused software testing.",

            impact:
                "The experience helped bridge the gap between academic knowledge and real workplace IT operations. It also gave me a better understanding of how technical teams support the wider organization and how software is evaluated from an actual user's perspective.",

            takeaway:
                "I developed stronger troubleshooting, communication, teamwork, and independent problem-solving skills while gaining a broader understanding of the relationship between IT operations and software development.",

            images: [
                `${import.meta.env.BASE_URL}images/experience/it-1.jpg`,
                `${import.meta.env.BASE_URL}images/experience/it-2.jpg`,
                `${import.meta.env.BASE_URL}images/experience/it-3.jpg`
            ]
        }
    },

    {
        slug: "frontend-intern",
        category: "INTERNSHIP",
        period: "JULY–OCT 2025",
        title: "FRONTEND INTERN",
        organization: "Qace Groups",
        location: "Lagos, Nigeria",

        icon: faCode,

        description:
            "Worked on frontend development, recreating web interfaces from design references and refining them through testing and feedback.",

        details: {
            overview:
                "Worked primarily on recreating website interfaces from screenshots and reference designs, with a strong focus on accurately translating visual layouts into functional webpages.",

            // responsibilities: [
            //     {
            //         title: "INTERFACE RECREATION",
            //         text: "Recreated website landing pages from provided screenshots and visual references.",
            //         img: <FontAwesomeIcon icon={faPenRuler} />
            //     },
            //     {
            //         title: "PAGE DEVELOPMENT",
            //         text: "Built page structures using HTML and CSS.",
            //         img: <FontAwesomeIcon icon={faCode} />
            //     },
            //     {
            //         title: "CSS FRAMEWORKS",
            //         text: "Used Bootstrap and Tailwind CSS to develop and style interfaces.",
            //         img: <FontAwesomeIcon icon={faLaptopCode} />
            //     },
            //     {
            //         title: "BROWSER TESTING",
            //         text: "Tested completed pages using Chrome Developer Tools and Inspector.",
            //         img: <FontAwesomeIcon icon={faMagnifyingGlass} />
            //     },
            //     {
            //         title: "REFERENCE COMPARISON",
            //         text: "Compared implementations against the original reference designs.",
            //         img: <FontAwesomeIcon icon={faEye} />
            //     },
            //     {
            //         title: "TEAM REVIEWS",
            //         text: "Participated in review meetings with supervisors and developers.",
            //         img: <FontAwesomeIcon icon={faComments} />
            //     },
            //     {
            //         title: "ITERATION",
            //         text: "Applied feedback to improve layout, spacing, responsiveness, and visual accuracy.",
            //         img: <FontAwesomeIcon icon={faRotate} />
            //     },
            //     {
            //         title: "DEPLOYMENT",
            //         text: "Deployed completed work through GitHub.",
            //         img: <FontAwesomeIcon icon={faRocket} />
            //     }
            // ],

            workflow: [
                {
                    text: "Receive reference design",
                    img: <FontAwesomeIcon icon={faEye} />
                },
                {
                    text: "Analyze the layout and visual structure",
                    img: <FontAwesomeIcon icon={faMagnifyingGlass} />
                },
                {
                    text: "Build the page with specified stack",
                    img: <FontAwesomeIcon icon={faCode} />
                },
                {
                    text: "Test the implementation using Chrome Inspector",
                    img: <FontAwesomeIcon icon={faLaptopCode} />
                },
                {
                    text: "Review the result against the original reference",
                    img: <FontAwesomeIcon icon={faCheck} />
                },
                {
                    text: "Receive feedback from supervisor",
                    img: <FontAwesomeIcon icon={faComments} />
                },
                {
                    text: "Refine the implementation",
                    img: <FontAwesomeIcon icon={faRotate} />
                }
            ],

            tools: [
                "HTML",
                "CSS",
                "Bootstrap",
                "Tailwind CSS",
                "GitHub",
                "Chrome Developer Tools"
            ],

            impact:
                "The internship gave me practical experience turning visual references into working interfaces and taught me to pay closer attention to spacing, alignment, responsiveness, and other details that affect how closely a webpage matches its intended design.",

            takeaway:
                "I became more comfortable working from existing designs, receiving technical feedback, iterating on my work, and using browser developer tools to identify and improve frontend issues.",

            images: [
                "/images/experience/frontend-1.jpg",
                "/images/experience/frontend-2.jpg",
                "/images/experience/frontend-3.jpg"
            ]
        }
    }
];

const projects = [
    {
        title: "COUNTERFEIT PHARMACEUTICAL DETECTION SYSTEM",
        slug: "counterfeit-pharm-app",
        category: ["FULL-STACK","MACHINE LEARNING"],

        tech: [
            "React",
            "Node.js",
            "Express.js",
            "FastAPI",
            "XGBoost",
            "SQLite"
        ],

        github: "https://github.com/Amdalat/fyp_cppds",
        demo: "https://fyp-cppds-frontend.onrender.com/",

        description:
            "A web-based intelligent system for verifying registered pharmaceutical products and classifying potentially counterfeit products using machine learning.",

        introImage: `${import.meta.env.BASE_URL}images/cppds_help.png`,

        overview: {
            title: "THE PROBLEM",
            text:
                "Counterfeit pharmaceutical products remain difficult to identify through simple visual inspection. This project explores how digital product verification and machine learning can be combined into a single web-based system."
        },

        features: [
            {
                title: "DRUG VERIFICATION",
                text: "Checks submitted pharmaceutical information against registered product records."
            },
            {
                title: "ML CLASSIFICATION",
                text: "Uses an XGBoost model to classify pharmaceutical products as genuine or potentially counterfeit."
            },
            {
                title: "DATABASE",
                text: "Maintains registered pharmaceutical product information for verification."
            },
            {
                title: "WEB INTERFACE",
                text: "Provides a user-facing interface for submitting product information and viewing verification results."
            }
        ],

        architecture: [
            {
                title: "FRONTEND",
                text: "React + Vite"
            },
            {
                title: "BACKEND",
                text: "Node.js + Express.js"
            },
            {
                title: "DATABASE",
                text: "SQLite"
            },
            {
                title: "ML SERVICE",
                text: "FastAPI + XGBoost"
            }
        ],

        process: [
            {
                title: "User Input",
                text: "User submits pharmaceutical product information."
            },
            {
                title: "Database Check",
                text: "The system checks available product records."
            },
            {
                title: "ML Model Prediction",
                text: "Relevant information is passed to the machine-learning service."
            },
            {
                title: "Results",
                text: "The model produces a classification result."
            }
        ],

        metrics: [
            {
                title: "XGBOOST ACCURACY",
                text: "95.88%"
            },
            {
                title: "XGBOOST F1 SCORE",
                text: "91.8%"
            },
            {
                title: "RANDOM FOREST ACCURACY",
                text: "95.08%"
            },
            {
                title: "DATASET RECORDS",
                text: "20,000"
            }
        ],

        screenshots: [            
            `${import.meta.env.BASE_URL}images/cppds_err_mess.png`,
            `${import.meta.env.BASE_URL}images/cppds_db_true.png`,
            `${import.meta.env.BASE_URL}images/cppds_db_false.png`,
            `${import.meta.env.BASE_URL}images/cppds_ml_true.png`,
            `${import.meta.env.BASE_URL}images/cppds_ml_false.png`,
            `${import.meta.env.BASE_URL}images/cppds_help.png`,
        ],

        challenges: [
            "Connecting the web application with a separate machine-learning service.",
            "Preparing the synthetic dataset for model training.",
            "Designing a verification flow that combines database lookup and ML classification.",
            "Integrating the different parts of the system into a single application."
        ]
    },

    {
        title: "BOOK MANAGEMENT SYSTEM",
        slug: "book-management-system",
        category: ["FULL-STACK"],

        tech: [
            "React",
            "Bootstrap",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose"
        ],

        github: "https://github.com/Amdalat/book_mgmt_sys",
        demo: "https://book-mgmt-sys-4doq.onrender.com",

        description:
            "A web-based book management system that allows users to browse books, request access, and manage their personal libraries.",

        introImage: `${import.meta.env.BASE_URL}images/bookms_home.png`,

        overview: {
            title: "THE PROBLEM",
            text:
                "Managing book access requires more than simply displaying available books. This project provides a system where users can request access to books and manage their personal libraries through an authenticated account."
        },

        features: [
            {
                title: "USER AUTHENTICATION",
                text: "Allows users to sign in to their accounts using token-based authentication."
            },
            {
                title: "BOOK MANAGEMENT",
                text: "Supports book uploads and the management of book information."
            },
            {
                title: "ACCESS REQUESTS",
                text: "Allows users to request access to books rather than accessing them automatically."
            },
            {
                title: "PERSONAL LIBRARY",
                text: "Provides users with a library for managing books associated with their accounts."
            }
        ],

        architecture: [
            {
                title: "FRONTEND",
                text: "React + Vite"
            },
            {
                title: "BACKEND",
                text: "Node.js + Express.js"
            },
            {
                title: "DATABASE",
                text: "MongoDB + Mongoose"
            },
            {
                title: "AUTHENTICATION",
                text: "JWT + HTTP cookies"
            }
        ],

        process: [
            {
                title: "User Sign-In",
                text: "User authenticates to access their account."
            },
            {
                title: "Browse Books",
                text: "User explores the available books."
            },
            {
                title: "Access Request",
                text: "User submits a request for access to a selected book."
            },
            {
                title: "Library Management",
                text: "The system manages books associated with the user's library."
            }
        ],

        screenshots: [
            `${import.meta.env.BASE_URL}images/bookms_book.png`,
            `${import.meta.env.BASE_URL}images/bookms_author_requests.png`,
            `${import.meta.env.BASE_URL}images/bookms_user_requests.png`,
            `${import.meta.env.BASE_URL}images/bookms_signin.png`,
            `${import.meta.env.BASE_URL}images/bookms_newbook.png`,
            `${import.meta.env.BASE_URL}images/bookms_uploads.png`,
        ],

        challenges: [
            "Implementing cookie-based authentication between the React frontend and Express backend.",
            "Managing relationships between users, books, and library records.",
            "Handling book access requests and request status updates.",
            "Supporting book uploads and file handling."
        ]
    },

    {
        title: "COMPANY ARCHIVE MANAGEMENT SYSTEM",
        slug: "company-archive-system",
        category: ["FULL-STACK"],

        tech: [
            "React",
            "Tailwind css",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose"
        ],

        github: "https://github.com/Amdalat/companyArchiveProj",
        demo: "https://comparchiveamd.onrender.com",

        description:
            "A company-based management system that allows administrators to register and manage user details while enabling individual users to sign in to their accounts.",

        introImage: `${import.meta.env.BASE_URL}images/archiveamd_admin_dash.png`,

        overview: {
            title: "THE PROBLEM",
            text:
                "Companies need a structured way to manage user information and provide account access to their staff. This project focuses on company administrators managing user details while allowing registered users to sign in independently."
        },

        features: [
            {
                title: "COMPANY ADMINISTRATION",
                text: "Provides administrative functionality for managing users within a company."
            },
            {
                title: "USER MANAGEMENT",
                text: "Allows company administrators to add and manage user details."
            },
            {
                title: "USER AUTHENTICATION",
                text: "Allows registered users to sign in to their accounts."
            },
            {
                title: "COMPANY-BASED ACCESS",
                text: "Structures user management around individual companies and their administrators."
            }
        ],

        architecture: [
            {
                title: "FRONTEND",
                text: "React + Vite"
            },
            {
                title: "BACKEND",
                text: "Node.js + Express.js"
            },
            {
                title: "DATABASE",
                text: "MongoDB + Mongoose"
            },
            {
                title: "AUTHENTICATION",
                text: "JWT + HTTP cookies"
            }
        ],

        process: [
            {
                title: "Administrator Sign-In",
                text: "Company administrator signs in to manage company users."
            },
            {
                title: "Add User",
                text: "Administrator enters and saves a user's details."
            },
            {
                title: "Manage Users",
                text: "Administrator manages user information within the company."
            },
            {
                title: "User Sign-In",
                text: "Registered users sign in using their own accounts."
            }
        ],

        screenshots: [
            `${import.meta.env.BASE_URL}images/archiveamd_login.png`,
            `${import.meta.env.BASE_URL}images/archiveamd_staff_dash.png`,
            `${import.meta.env.BASE_URL}images/archiveamd_employees.png`,
            `${import.meta.env.BASE_URL}images/archiveamd_settings.png`,
            `${import.meta.env.BASE_URL}images/archiveamd_profile.png`,
        ],

        challenges: [
            "Structuring user management around individual companies.",
            "Separating administrator capabilities from regular user access.",
            "Managing user authentication and account information.",
            "Designing a scalable foundation for future archive functionality."
        ]
    },

    // {
    //     title: "LARAVEL WEB APPLICATION",
    //     slug: "laravel-web-app",
    //     category: ["BACKEND", "FULL-STACK"],

    //     tech: [
    //         "PHP",
    //         "Laravel",
    //         "MySQL",
    //         "Blade"
    //     ],

    //     github: "https://github.com/Amdalat/siliconnLaravel",
    //     demo: "",

    //     description:
    //         "A Laravel-based web application built to explore server-side development, application structure, database interaction and backend functionality.",

    //     introImage: "",

    //     overview: {
    //         title: "THE PROJECT",
    //         text:
    //             "A backend-focused web application built with Laravel to gain practical experience with server-side development, routing, database interaction and application structure."
    //     },

    //     features: [
    //         {
    //             title: "ROUTING",
    //             text: "Handles application requests through Laravel routes."
    //         },
    //         {
    //             title: "SERVER-SIDE LOGIC",
    //             text: "Implements application functionality using PHP and Laravel."
    //         },
    //         {
    //             title: "DATABASE",
    //             text: "Works with persistent application data through Laravel's database tools."
    //         },
    //         {
    //             title: "APPLICATION STRUCTURE",
    //             text: "Uses Laravel's structured approach to organizing application components."
    //         }
    //     ],

    //     architecture: [
    //         {
    //             title: "FRAMEWORK",
    //             text: "Laravel"
    //         },
    //         {
    //             title: "LANGUAGE",
    //             text: "PHP"
    //         },
    //         {
    //             title: "DATABASE",
    //             text: "MySQL"
    //         }
    //     ],

    //     process: [
    //         {
    //             text: "Client sends a request."
    //         },
    //         {
    //             text: "Laravel routes the request."
    //         },
    //         {
    //             text: "Application logic processes the request."
    //         },
    //         {
    //             text: "The application returns the appropriate response."
    //         }
    //     ],

    //     screenshots: [],

    //     challenges: [
    //         "Understanding Laravel's application structure.",
    //         "Working with server-side routing and application logic.",
    //         "Connecting application functionality with persistent data."
    //     ]
    // },

    // {
    //     title: "NODE.JS BACKEND APPLICATION",
    //     slug: "nodejs-backend-app",
    //     category: ["BACKEND", "REST API"],

    //     tech: [
    //         "Node.js",
    //         "Express.js",
    //         "REST API",
    //         "MongoDB"
    //     ],

    //     github: "https://github.com/Amdalat/horizonnodeass2",
    //     demo: "",

    //     description:
    //         "A backend application built with Node.js and Express.js, focusing on REST API development, structured application architecture and backend functionality.",

    //     introImage: "",

    //     overview: {
    //         title: "THE PROJECT",
    //         text:
    //             "A backend-focused application created to practise building REST APIs with Node.js and Express.js while working with controllers, models, middleware and routes."
    //     },

    //     features: [
    //         {
    //             title: "REST API",
    //             text: "Provides structured API endpoints for interacting with application data."
    //         },
    //         {
    //             title: "ROUTING",
    //             text: "Organizes API endpoints using Express.js routes."
    //         },
    //         {
    //             title: "CONTROLLERS",
    //             text: "Separates application logic from route definitions."
    //         },
    //         {
    //             title: "MIDDLEWARE",
    //             text: "Uses middleware to handle requests and application-level functionality."
    //         }
    //     ],

    //     architecture: [
    //         {
    //             title: "RUNTIME",
    //             text: "Node.js"
    //         },
    //         {
    //             title: "FRAMEWORK",
    //             text: "Express.js"
    //         },
    //         {
    //             title: "API",
    //             text: "REST"
    //         },
    //         {
    //             title: "DATABASE",
    //             text: "MongoDB"
    //         }
    //     ],

    //     process: [
    //         {
    //             text: "Client sends an HTTP request."
    //         },
    //         {
    //             text: "Express route receives the request."
    //         },
    //         {
    //             text: "Controller processes the request."
    //         },
    //         {
    //             text: "The API returns a structured response."
    //         }
    //     ],

    //     screenshots: [],

    //     challenges: [
    //         "Structuring a backend application into separate components.",
    //         "Understanding how controllers, routes and middleware work together.",
    //         "Designing and testing REST API endpoints."
    //     ]
    // },

    {
        title: "WEATHER APPLICATION",
        slug: "weather-app",
        category: ["FRONTEND", "API"],

        tech: [
            "React",
            "JavaScript",
            "REST API"
        ],

        github: "https://github.com/Amdalat/weatherAppWApiReact",
        demo: "",

        description:
            "A React weather application that consumes an external API and presents retrieved weather information through a simple interactive interface.",

        introImage: `${import.meta.env.BASE_URL}images/weather_api.png`,

        overview: {
            title: "THE PROJECT",
            text:
                "A frontend project focused on working with external APIs, handling asynchronous requests and displaying dynamic data within a React interface."
        },

        features: [
            {
                title: "API INTEGRATION",
                text: "Fetches weather information from an external weather API."
            },
            {
                title: "DYNAMIC DATA",
                text: "Updates the interface based on the retrieved weather information."
            },
            {
                title: "REACT",
                text: "Uses React components and state to manage the application."
            },
            {
                title: "USER INPUT",
                text: "Allows users to request weather information for a location."
            }
        ],

        process: [
            {
                text: "User enters a location."
            },
            {
                text: "The application sends a request to the weather API."
            },
            {
                text: "The API returns weather data."
            },
            {
                text: "React displays the retrieved information."
            }
        ],

        architecture: [
            {
                title: "FRONTEND",
                text: "React"
            },
            {
                title: "LANGUAGE",
                text: "JavaScript"
            },
            {
                title: "DATA",
                text: "REST API"
            }
        ],

        screenshots: [],

        challenges: [
            "Working with asynchronous API requests.",
            "Handling API responses and dynamic data.",
            "Connecting user input to external API requests."
        ]
    }
];

export {projects, experiences};