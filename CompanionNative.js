import { I18n } from 'i18n-js';

const translations = {
    "en": {
        "loginScreen": {
            "title": "Welcome to",
            "onboardingCarousel": [
            {
                "title": "Notifications",
                "description": "Receive the latest notifications directly to your mobile device to stay updated on important deadlines, submitted cases, when registration opens, and more!. We will inform you about everything so you don't miss anything."
            },
            {
                "title": "Services",
                "description": "If you are experiencing an issue, you can create, update, and review submitted cases. You also have easy access to services like official transcript requests, enrollment verification, applying for graduation, and registering for upcoming terms."
            },
            {
                "title": "AI Assistance",
                "description": "Access AI Assistance designed especially for you!. This assistance can help you frequently with asked questions, specific course inquiries, and improve your English. You can find this resource in the 'AI Assistans' app."
            }
            ],
            "buttons": [
            {
                "label": "Sign In"
            },
            {
                "label": "Not a Student"
            }
            ],
            "termsText1": "By downloading, accessing, or using Companion, you agree to these ",
            "termsText2": "Terms of Use",
            "termsText3": ". Please read them carefully before using the app.",
        },
        "notStudentScreen": {
            "banner": "BYU-Pathway Worldwide provides access to spiritually based degrees completely online at an affordable price.",
            "ourStudents&Alumni": {
            "title": "Our Students & Alumni",
            "testimonialsCarousel": [
            {
                "text": "There is never a perfect time to finish your degree. There will always be things that make it hard, but you can do hard things. I learned exactly what I needed to learn and it not only helped me academically, it helped me in my life!."
            },
            {
                "text": "I decided to try my best to pave the way for my dream of earning a degree by enrolling at BYU-Pathway Worldwide courses."
            },
            {
                "text": "As a non-latter-day Saint, joining BYU-Pathway bought me initial apprehension. However, I was immediately greeted with open arms by the missionaries and my classmates."
            }
                ]
            },
            "degreesInformation": {
            "title": "Degrees Information",
            "card": {
                "title": "Want a Better Job Before You Graduate?",
                "description": "Earn a Job-Ready Certificate While Earning a Bachelor's Degree.",
                "button": "View Degrees"
            }
            },
            "moreInformationSection": {
            "title": "More Information",
            "cards": [
                {
                "applyPCToday": "Apply to Pathway Connect Today",
                "description": "Start Your Journey",
                "buttonLabel": "Apply Now"
                },
                {
                "learnMore": "Learn More About Pathway Connect",
                "buttonLabel": "Request Info"
                },
                {
                "help": "Need Help? Our AI Assistant Has Answers",
                "buttonLabel": "AI Assistant"
                }
            ],
            "finalButton": "Go to Login"
            }
        },
        "authenthicationLoadingPage": {
            "title": "Processing Authentication..."
        },
        "authScreen": {
            "runningInProductionMode": "Running in Production mode - using real authentication",
            "errorAddingStudentGUID": "Error adding studentGUID to request:",
            "loadingStudentExperience": "Loading Student Experience..."
        },
        "menuScreen": {
            "greeting": "Hello 👋🏻, {studentName}",
            "appsSection": {
                "title": "Apps",
                "appsCarousel": [
                    { "aiAssistance": "AI Assistance" },
                    { "academicCenter": "Academic Center" },
                    { "network": "Network" },
                    { "jobs": "Jobs" },
                    { "ec3": "EC3" },
                    { "openAllApps": "Open All Apps" }
                ]
            },
            "notificationsSection": {
                "title": "Latest Notifications",
                "viewAllButton": "View All Notifications"
            },
            "academicProgressSection": {
                "title": "My Academic Progress",
                "programsCarousel":[
                    {
                    "subject": "Religion",
                    "institution": "BYU-Idaho",
                    "credits": {
                        "label": "Credits",
                        "Value": "8"
                    },
                    "progressBar": {
                        "percentage": 60,
                        "label": "% Completed"
                        }
                    }
                ]
            }
        },
        "academicProgress": {
            "loadingEnrollmentData": "Loading enrollment data...",
            "errorLoadingEnrollmentData": "Error loading enrollment data",
            "noEnrollmentFound": "No enrollment found for this program",
            "myAcademicProgress": "My Academic Progress",
            "gpaLabel": "GPA:",
            "gpaNotAvailable": "N/A",
            "disclaimer": "* The information displayed here is only an interpretation of your Degree Progress Audit and does not constitute your official academic record. If you have questions or need clarification, please contact your mentor or schedule a meeting with an Academic Advisor.",
            "goBack": "Go Back",
            "completed": "Completed",
            "credits": "Credits"
        },
        "notificationsScreen": {
            "noNotificationsTitle": "No Notifications Available",
            "noNotificationsMessage": "There are no items available at this time."
        },
        "aiAssistanceScreen": {
            "title": "Companion Assistant",
            "infoPopup": {
                "message": "This artificial intelligence (AI) chatbot is powered by generative AI technology that refers to the BYU-Pathway website and Support Knowledge Base website. This chatbot can analyze questions, search the mentioned websites, and summarize potentially relevant information. Generative AI is not always correct. Please personally confirm the answer provided by this chatbot by reading the sections it identifies in the mentioned websites. Use of this chatbot is anonymous. Do not enter any personal information. By using this chatbot, you agree that anything you enter can be saved and reviewed by Church personnel to improve this chatbot and make it more accurate",
                "button": "Acknowledge"
            },
            "assistantSelection": {
                "loading": "Loading Assistant...",
                "hello": "Hello Companion!"
            },
            "typeBoxMessage" : "Type a message...",
            "assistantSwitcher": {
                "title" :"AI Assistats",
                "options": [
                    { "label": "Companion Assistant" },
                    { "label": "Course Assistant" }
                ]
            }
        },
        "appsMenuScreen": {
            "title": "Apps",
            "appsGrid": [
                { "AcademicCenter": "Academic Center" },
                { "Tickets": "Tickets" },
                { "Network": "Network" },
                { "Registration": "Registration" },
                { "Jobs": "Jobs" }
                ]
        },
        "academicCenterScreen": {
            "recommendedActions": {
            "title": "Recommended Actions",
            "carousel": [
                {
                "ResultHolds": {
                    "title": "Result Holds",
                    "description": "Account Holds require you to follow specific steps to register for and complete course.",
                    "button": "Take Action"
                }
                },
                {
                "EcclesiasticalEndorsement": {
                    "title": "Ecclesiastical Endorsement",
                    "description": "It is time to renew your Ecclesiastical Endorsement.",
                    "button": "Take Action"
                }
                },
                {
                "HerbertJGrantScholarship": {
                    "title": "Herbert J. Grant Scholarship",
                    "description": "Apply to HJG Scholarship by March 21.",
                    "button": "Take Action"
                }
                },
                {
                "YouDidIt": {
                    "title": "🏆 You did it",
                    "description": "Great job! You completed all the recommended actions."
                }
                }
            ]
            },
            "services": {
            "title": "Services",
            "carousel": [
                { "enrollmentVerification": "Enrollment Verification" },
                { "officialTransferRequest": "Official Transfer Request" },
                { "academicAcception": "Academic Acception" },
                { "graduationApplication": "Graduation Application" },
                { "allServices": "All Services" }
            ]
            },
            "academicProgress": {
            "title": "Academic Progress",
            "noEnrollmentDataAvailable": "No enrollment data available",
            "noEnrollmentsAvailable": "No enrollments available",
            "loadingEnrollmentData": "Loading enrollment data...",
            "carousel": [
                {
                "program": {
                "courseTitle": "Software Development",
                "institution": "BYU-Idaho",
                "credits": "credits",
                "progressBar": {
                    "percentage": 75,
                    "label": "Completed"
                },
                "c1": "C1: Technical Support Engineer",
                "c2": "C2: It Fundamentals",
                "c3": "C3: System Administration",
                "GPA": "GPA: 3.871",
                "button": "Details"
                }
                }
            ]
            },
            "courseRegistration": {
                "title": "Course Registration",
                "carousel": [
                    {
                    "term": "2025 Term 2",
                    "status": "Registered",
                    "courses": [
                        { "code": "COMM122", "name": "Interpersonal Communications" },
                        { "code": "IT350", "name": "Network Configuration and Design" },
                        { "code": "R1KY301", "name": "Power Platform" }
                    ],
                    "button": "Details"
                    },
                    {
                    "term": "2025 Term 3",
                    "status": "Not Registered",
                    "courses": [
                        { "code": "COMM122", "name": "Interpersonal Communications" },
                        { "code": "IT350", "name": "Network Configuration and Design" },
                        { "code": "R1KY301", "name": "Power Platform" }
                    ],
                    "button": "Details"
                    }
                ]
            },
            "courseAccess": {
            "title": "Course Access",
            "goToClass":{
                "title": "Go to Class",
                "description": "Open your Canvas Dashboard to continue with your assigments."
            }
            }
        },
        "hjgSection1Screen": {
            "header": {
                "title": "Heber J. Grant Application"
            },
            "descriptionHJG": {
                "title": "Heber J. Grant Scholarship",
                "description": "BYU-Pathway Worldwide offers a needs based scholarship named after Heber J. Grant, a former president of The Church of Jesus Christ of Latter-day Saints. To be eligible to receive this scholarship, you must complete this informational module.",
                "moduleSections": {
                    "title": "This module contains five sections:",
                    "items": [
                    "1. Survey",
                    "2. Persistence & Tenacity",
                    "3. Love of Learning",
                    "4. Self-Reliance",
                    "5. Stewardship & Replenishment"
                    ]
                },
                "timeEstimate": "You should anticipate this module taking about 45 to 60 minutes to complete. If you do not have that much time, please wait to start the module at another time.",
                "resourceBenefitText": "Not only will this resource help BYU-Pathway evaluate your financial needs, it will also help cultivate the characteristics needed for your continued success as a BYU-Pathway student. Thank you."
            },
            "bioSection": {
                "title": "Who is Heber J. Grant?",
                "content": "Heber J. Grant was the seventh president of The Church of Jesus Christ of Latter-day Saints. Born in Salt Lake City in 1856, Grant was raised by his mother, Rachel Ridgway Ivins Grant, after his father, Jedediah Grant (a counselor to Brigham Young) died when Heber was only a few days old. Heber was called as a stake president at age 23 and ordained an Apostle two years later. One of the most dramatic incidents in his apostolic service came in 1893, when he sought divine aid to secure loans to save the Church. Grant's efforts protected the Church from financial collapse during a nationwide economic crisis. The characteristics and life of Heber J. Grant embody principles of self-reliance and persistence that will resonate and be a strength to many BYU-Pathway students around the world."
            },
            "form": {
                "sectionTitle": "Section 1: Heber J. Grant Scholarship Survey",
                "sectionDescription": "First, to help us better understand your current needs and situation, please answer following questions:",
                "questions": {
                "parentsUniversityDegree": {
                    "question": "Have either of your parents obtained a university degree?",
                    "options": [
                    "Yes",
                    "No",
                    "I don't know"
                    ]
                },
                "singleParent": {
                    "question": "Are you a single parent?",
                    "options": [
                    "Yes",
                    "No"
                    ]
                },
                "reliableHousing": {
                    "question": "Do you have reliable housing?",
                    "options": [
                        "No, I do not have reliable housing and I worry about where I will be living on a monthly basis",
                        "No, I struggle to make monthly housing payments which sometimes puts my housing situation at-risk",
                        "Yes, I have reliable housing but making monthly payments is challenging for me",
                        "Yes, I have reliable housing",
                    ]
                },
                "struggleMeals": {
                    "question": "Do you struggle to have enough food for yourself and your family to eat three meals per day?",
                    "options": [
                    "Yes",
                    "No",
                    "Sometimes"
                    ]
                },
                "accessDevice": {
                    "question": "Do you have access to a device (computer, phone, or tablet) to complete your coursework?",
                    "options": [
                        "No, I need to purchase one and I am not sure how I will afford one",
                        "No, I need to purchase one, but I have a plan to do so",
                        "Yes, I have one but it is not very reliable",
                        "Yes, I have one that will work for academic coursework",
                    ]
                },
                "reliableInternet": {
                    "question": "Do you have access to reliable internet?",
                    "options": [
                        "No, and I am not sure how I will pay for access",
                        "No, but I have a plan to gain access",
                        "Yes, I have access, but I struggle to afford it",
                        "Yes, I have access to daily reliable internet",
                    ]
                },
                "tuitionAffordability": {
                    "question": "Is your tuition affordable for you and your family?",
                    "options": [
                        "No, and I am not sure how I will afford it",
                        "No, but I am working on a plan",
                        "Yes, but I am concerned about ongoing payments",
                        "Yes, I could make a one-time or monthly payments",
                    ]
                },
                "circumstancesAffectingPayment": {
                    "question": "Are there any other circumstances that affect your ability to pay for your education?",
                    "options": [
                        "No",
                        "Yes",
                        "Maybe",
                        "Additional information you would like to share",
                    ]
                },
                "additionalInformation": {
                    "label": "",
                    "placeholder": "Type Here",
                    "description": "(This field appears if 'Additional Information' is selected for the previous question)"
                }
                }
            },
            "nextButton": "Next",
            "saveProgressButton": "Save Progress",
            "alert": "All fields are required",
            "message": "Progress saved.",
            "required": "This field is required"
        },
        "hjgSection2Screen": {
            "header": {
                "title": "Heber J. Grant Application",
                "buttons": [
                { "label": "Save and Exit" },
                { "label": "Leave Without Saving" }
                ]
            },
            "description": {
                "title": "Section 2: Persistence & Tenacity",
                "description": "Poverty defined Heber's growing years, but not negatively. Having little money was a challenge that never deterred him. Wanting to learn to pitch a baseball but not having enough money for a ball, Heber earned the money by shining boots for his mother's boarders. Later he longed to attend the Salt Lake Theatre; instead of feeling sorry that he had no money to buy tickets, he obtained a job as a water carrier for theater patrons and was thus allowed to watch the plays.\n\nAs Heber grew older, his persistence and fortitude were put to good use in business ventures. Offered an appointment to the United States Naval Academy, he opted to stay near his mother and to become a businessman instead. After finishing his schooling at age 16, Heber got a job as a bank clerk and learned bookkeeping. His honesty, ability to work hard, and great desire to learn soon opened up many opportunities. By the time he was 20 years old, he had been made the assistant cashier of Zion's Savings Bank and Trust Company, and he had purchased an insurance agency. The poverty of Heber's youth made him compassionate and prepared him to lead the Church through the aftermath of World War I, the Great Depression, and World War II.",
                "video": {
                "text": "Watch the following video:",
                "transcriptLinkText": "If you would like to read a transcript of this video instead click here"
                }
            },
            "form": {
                "questions": {
                "usedMoneyFor": {
                    "question": "How have you used money or resources to overcome challenges related to your education?",
                    "options": [
                    "Purchased study materials",
                    "Paid for transportation",
                    "Covered living expenses",
                    "Invested in a device for coursework",
                    "Other (please specify)"
                    ]
                },
                "scriptureReview": {
                    "text": "Please choose one of the following scriptures to review:",
                    "links": [
                    "Mosiah 2:14",
                    "Mosiah 27:5",
                    "Doctrine & Covenants 42:42",
                    "Moses 4:25",
                    "Joseph Smith - History 1:55"
                    ]
                },
                "scriptureSelected": {
                    "question": "Which scripture(s) did you select? What are some specific ways work helps us become more self-reliant?",
                    "placeholder": "Type Here"
                }
                }
            },
            "previousButton": "Previous",
            "nextButton": "Next",
            "saveProgressButton": "Save Progress",
            "savedAlertMessage": "Progress saved.",
            "fieldsRequired": "All fields are required",
            "required": "This field is required"
        },
        "hjgSection3Screen": {
            "header": {
                "title": "Heber J. Grant Application",
            },
            "section": {
                "title": "Section 3: Love of Learning",
                "description": "In 1901, Heber J. Grant was called to open and preside over the Japanese Mission. There, Elder Grant dedicated the land for the preaching and reception of the gospel. But the mission did not immediately flourish, partly because of the cultural differences and communication barriers. That did not stop Elder Grant. He worked diligently to learn the new language and to learn of the new culture he was immersed in. Despite the limited missionary success there at the time, Elder Grant oversaw the first translation of the Book of Mormon into Japanese. Of his missionary efforts, President Grant later taught: \"I want you young people to know that in all my labors I got nearer to the Lord, and accomplished more and had more joy while in the mission field than ever before or ever since. Man is that he might have joy, and the joy that I had in the mission field was superior to any I had ever experienced elsewhere.\"\n\nPresident Grant loved to give away books to all those around him; he knew that learning was one of the most important things you could do to further yourself, and he felt a true sense of peace giving away books that had taught him in the past. He gave away thousands of them, most of which he personally inscribed. In giving so many gifts he sometimes lost track of what he had done. \"I once gave a man a book,\" he said, \"and he thanked me very kindly for it, and said, 'Brother Grant, I thoroughly appreciate this book. It is the third copy you have given me of it.'\" After that experience, President Grant kept an index of the books he had given."
            },
            "form": {
                "questions": {
                "question1": {
                    "question": "How did Heber J. Grant earn money to buy a baseball?",
                    "options": [
                    "By shining boots for his mother's boarders",
                    "By carrying water for theater patrons",
                    "By working as a bank clerk",
                    "By selling insurance"
                    ]
                }
                }
            },
            "previousButton": "Previous",
            "nextButton": "Next",
            "saveProgressButton": "Save Progress",
            "progressSavedMessage": "Progress saved.",
            "requiredFieldsAlert":"All fields are required",
            "required": "Please select an answer."
        },
        "hjgSection4Screen": {
            "header": {
                "title": "Heber J. Grant Application"
            },
            "section": {
                "title": "Section 4: Self Reliance",
                "description": "In 1936, seven years into the Great Depression, the United States had yet to emerge from the huge losses and downward trends that began with the stock market crash in 1929. When President Heber J. Grant spoke of the welfare system in 1936, he envisioned that \"no new Church machinery\" would be required but that \"stake and ward organizations, the priesthood quorums, the Relief Society, and the various auxiliary organizations [would] render the maximum service [they] could furnish in the interest of the general welfare of the Church.\" The Lord had already established the organization needed to bless the poor and needy—priesthood quorums were in place, Relief Societies were organized, and the priesthood of God was on the earth.\n\nSince the welfare program was introduced in 1936, members of the Church have labored together to relieve the suffering of those who stand in need. Economic downturns, natural disasters, unemployment, sickness and disability, or times of loss have all required the direction of the priesthood to ensure that needs are met and that individuals and families are blessed. Over the years millions of members have willingly given of their time and talents to bless others.\n\nSince the creation of the Bishop's Storehouse, many United States presidents and other leaders from around the world have come to visit the renowned storehouse and to learn more of how they can implement similar welfare ideologies as did President Heber J. Grant. \"The aim of the Church is to help the people help themselves. Work is to be re-enthroned as the ruling principle of the lives of our Church membership\" (Heber J.\nGrant, in Conference Report, Oct. 1936, 3).",
            },
            "form": {
                "questions": {
                "question1": {
                    "question": "What was the purpose of the welfare program introduced by President Heber J. Grant?",
                    "options": [
                    "To provide government assistance to the unemployed",
                    "To help Church members help themselves and relieve suffering",
                    "To establish new Church machinery for financial aid",
                    "To gather resources for future investments"
                    ]
                }
                }
            },
            "previousButton": "Previous",
            "nextButton": "Next",
            "saveProgressButton": "Save Progress",
            "progressSavedMessage": "Progress saved.",
            "requiredFieldsAlert": "All fields are required",
            "required": "Please select an answer."
        },
        "hjgSection5Screen": {
            "header": {
            "title": "Heber J. Grant Application",
            },
            "section": {
            "title": "Section 5: Stewardship & Replenishment"
            },
            "form": {
            "questions": {
                "lowTuition": {
                "question": "BYU-Pathway's low tuition is made possible both by support from The Church of Jesus Christ of Latter-day Saints and from philanthropic donors. If you would like to thank the individuals who have donated money to lower your tuition costs, what would you say to them? (Your comment may be shared with current and future donors.)",
                "placeholder": "Type Here"
                }
            }
            },
            "previousButton": "Previous",
            "submitButton": "Submit",
            "saveProgressButton": "Save Progress",
            "progressSavedMessage": "Progress saved.",
            "requiredFieldsAlert": "All fields are required",
            "required": "This field is required",
            "thankYouMessage":"Please enter your thank you message.",
            "submissionAlerts": {
            "successMessage": "Your request has been successfully submitted.",
            "errorMessage": "Not found",
            "loadingDescription": "Submitting Heber J. Grant Application..."
            }
        },
        "enrollmentVerificationScreen": {
            "title": "Enrollment Verification",
            "description": "This form allows students to request official enrollment verification to provide to a third party as proof of their enrollment at BYU Pathway Worldwide.",
            "other": "For details about your enrollment courses, please visit your student portal. On the homepage, navigate to Classes, tile for app to the date enrollment information.",
            "form": {
                "question1": {
                    "question": "Which institution would you like your enrollment verification for?*",
                    "description": "Enrollment Verifications are specific to enrollment.",
                    "options": [
                        "BYU-Idaho",
                        "Ensign College",
                        "BYU Pathway"
                    ]
                },
                "question2": { 
                    "question": "What would you like to include on your enrollment verification?",
                    "description": "All verifications will list your full name and your student ID. Choose what else you'd like to provide below.",
                    "options": [
                        "Enrollment status",
                        "Date of birth",
                        "Address",
                        "Social security number",
                        "Declared programs",
                        "Grade point average (GPA)",
                        "Earned credentials, certificates and degrees",
                        "Withdrawal date, if applicable",
                        "Academic standing",
                        "Tuition cost per credit hour"
                    ]
                },
                "question3": {
                    "question": "Would you like to include details about your currently enrolled courses?",
                    "description": "The following information will be provided for any courses you are currently enrolling. Course code, section, title, credits and instructor name.",
                    "options": [
                        "Just include information about my current courses",
                        "No, do not include information about my current courses"
                    ]
                },
                "question4": {
                    "question": "What would you like to include on your enrollment verification?",
                    "description": "All verification will list your full name and your student ID. Choose what else you'd like to provide below.",
                    "options": [
                        "Provide current term summary",
                        "Provide future term summary"
                    ]
                },
                "question5": {
                    "question": "Which reason best describes why you need an enrollment verification?",
                    "options": [
                        "Provide to employer",
                        "Housing request",
                        "Scholarship / Financial aid",
                        "Other"
                    ]
                },
                "Button": "Submit"
            }
        },
        "officialTranscriptScreen": {
            "title": "Official transcript",
            "firstScreen": {
                "description": "An Official Transcript is a copy of your permanent academic record issued by Student Record & Resgitration and is typically sent to third parties, e.g., (colleges, graduate programs companies).*",
                "unofficialTranscript":"An Unofficial Transcript is only avalible through your student account and is typically for personal use.",
                "note":"* Please contact your recipient regarding which transcript type they will accpt and meets their requirements.",
                "button": "Continue"
            },
            "secondScreen": {
                "title": "Official transcript Request Policy",
                "policyDetails": {
                "p1": "BYU-Pathway Worldwide will cover the cost of the first two official transcript requests for each institution:",
                "listItems": [
                    "BYU-Pathway Worldwide",
                    "BYU-Idaho",
                    "Ensign College"
                ],
                "p2": "Additional official transcript requests may be subject to a fee. Students are encouraged to plan accordingly.",
                "p3": "Students may view their unofficial transcripts at no cost through their student portal."
                },
                "form": {
                "question1": {
                    "question": "From which institution are you requesting your transcript?",
                    "answers": [
                    "Select item",
                    "BYU-Pathway Worldwide",
                    "BYU-Idaho",
                    "Ensign College"
                    ]
                },
                "question2": {
                    "question": "*Name of institution, group, or person receiving this transcript:",
                    "answerBox": "Type Here"
                },
                "question3": {
                    "question": "*Enter the email of the recipient that should receive your official transcript",
                    "answerBox": "Type Here"
                }
                },
                "errorAlert": {
                "title": "Error!",
                "description": "Not found",
                "button": "Go back"
                },
                "validation": {
                "requiredField": "This field is required",
                "invalidEmail": "Invalid email"
                },
                "alertMessages": {
                "requestSuccess": "Your request has been successfully submitted.",
                "networkError": "Network error",
                "submittingRequest": "Submitting transcript request..."
                },
                "userDataError": "Error loading user data",
                "continueButton": "Continue"
            }
        },
        "AcademicExceptionsScreen": {
            "title": "Academic Exceptions",
            "disclaimer": {
                "title":"Disclaimer:",
                "disclaimer":"Submitting this request does not guarantee approval. Approval or denial of this petition may affect your tuition, academic status international status, etc. It is your responsibility to explore and understand these impacts. Decisions by the committee are permanent and final."
            },
            "form": {
            "question1": {
                "question": "What academic exception would you like to escalate?",
                "answers": [
                    "Select item",
                    "Withdraw/Drop",
                    "Other"
                ]
            },
            "withdrawDrop": {
                "question": "Select the term from which you would like to submit the exception",
                "answers": [
                    "Select item",
                    "One Option"
                ],
                "options": {
                "withdraw": "Withdraw",
                    "drop": "Drop"
                }
            },
            "Other": {
                "question": "Please explain what is your academic exception petition.*",
                "typingBox": "Type here"
            },
            "button": "Continue",
            "noCoursesFound": "No courses found",
            "selectCourses": "Select the courses you would like to send the exception for. *",
            "whatToRequest": "What would you like to request? *",
            "lastDateParticipation": "What was your approximate last date of participation in the course(s)? *",
            "reasonForNotDropping": "What prevented you from logging into the registration portal and dropping your course(s) before the drop deadline? *",
            "furtherInfoNotDropping": "Please provide any further information (include specific dates of events where possible) of why you did not drop your course(s) before the deadline. *",
            "whyDropAccurate": "Why would a drop be a more accurate reflection of your experience in the course? *",
            "reasonForNotWithdrawing": "What prevented you from logging into the registration portal and withdrawing from your course(s) before the withdrawal deadline? *",
            "furtherInfoNotWithdrawing": "Please provide any further information (include specific dates of events where possible) of why you did not withdraw from your course(s) before the deadline. *",
            "whyWAccurate": "Why would a \"W\" grade [or a drop] be a more accurate reflection of your experience in this/these course(s)? *",
            "impactOfDenial": "If your petition is denied what does this mean for you going forward? *",
            "circumstancesPartialWithdrawal": "What were the circumstances that led you to needing to petition for some, but not all of your classes this semester? *"
            },
            "successAlert": {
                "Title": "Success!",
                "message": "You request has been successfully submitted.",
                "button": "Go back"
            },
            "courseWithdrawalRequest": {
                "title": "Course Withdrawal Request:",
                "description1": "The drop date will be backdated to the Withdraw Course Deadline and the student will receive a \"W\" grade on their transcript.",
                "description2": "A \"W\" grade does not affect GPA, but indicates that the student started the course and later withdrew."
            },
            "courseDropRequest": {
                "title": "Course Drop Request:",
                "description": "The drop date will be backdated to the Drop/Auto-Drop Deadline (day 8 of the semester), the course grade will be removed from the record."
            },
            "common": {
                "required": "This field is required",
                "atLeastOne": "Please select at least one course",
                "validDate": "Insert a valid date",
                "userDataError": "Error loading user data",
                "errorLoading": "Error loading Academic Exceptions",
                "submitting": "Submitting academic exception request...",
                "notFound": "Not found",
                "networkError": "Network error",
                "typeHere": "Type here"
            }
        },
        "graduationApplicationScreen": {
            "title": "Graduation Application",
            "description": "This application is for English Connect, Pathway Connect, and all Certificates & Degrees offered through BYU-Pathway Worldwide in partnership with BYU-Idaho and Ensign College.",
            "form": {
            "secondaryDescription": "You will need to fill out a separate graduation application for each credential you are applying for.",
            "termSemesterQuestion": {
                "question": "In which term or semester did/will you complete the requirements for the credential you are applying for?",
                "options": {
                "default": "Select a term / semester",
                "placeholder": "",
                "option1": "2025 - Term 2",
                "option2": "2025 - Term 3"
                }
            },
            "credentialRequiredQuestion": {
                "question": "What credential are you completing requirements for?",
                "options": [
                        "Select credential",
                        "Pathway Connect Completion Certificate",
                        "English Connect Completion Certificate",
                        "Certificate",
                        "Associate's Degree",
                        "Bachelor's Degree"
                    ]
            },
            "certificateInstitutionQuestion": {
                "question": "Which institution will you be receiving your diploma from? *",
                "options": {
                "default": "Select one",
                "BYU-Idaho": "BYU-Idaho",
                "Ensign College": "Ensign College"
                }
            },
            "certificateNameLabel": "What is the name of the certificate you are applying for? *",
            "certificateNamePlaceholder": "",
            "declaredMajorLabel": "What is your currently declared major? *",
            "declaredMajorPlaceholder": "",
            "catalogYearLabel": "What is your current catalog year? *",
            "catalogYearPlaceholder": "",
            "commencementDeadlineMessage": "The deadline has passed to have your name included in the program for the upcoming in-person commencement on {formattedDeadline}. Students are still welcome to purchase a cap and gown and attend the in-person commencement event, but will not have their name in the program."
            },
            "requiredFieldsNote": "Fields marked with * are required.",
            "submitButton": "Submit",
            "validation": {
            "required": "This field is required"
            },
            "loading": {
            "initialLoading": "Loading user data",
            "submitLoading": "Submitting graduation application..."
            },
            "alert": {
            "notFound": "Not found",
            "networkError": "Network error",
            "successMessage": "Your request has been successfully submitted."
            },
            "errorState": {
            "userDataError": "Error loading user data"
            }
        },
        "submittedRequestsScreen": {
            "filter": {
            "label": "Filter by:",
            "options": [
                "All Requests",
                "Open Requests",
                "Closed Requests"
            ],
            "emptyOptions": [
                "No requests found.",
                "No open requests found.",
                "No closed requests found."
            ]
            },
            "goBack": "Go Back",
            "statusLabels": {
            "active": "Active",
            "hold": "Hold",
            "closed": "Closed"
            },
            "loadingData": "Loading...",
            "errorLoadingUserData": "Error loading user data",
            "errorFetchingRequests": "Error: ",
            "emptyListDescription": "No {filter} available."
        },
        "submittedRequestsDetailsScreen": {
            "loadingData": "Loading...",
            "errorLoadingUserData": "Error loading user data",
            "requestDetailsHeader": "Request Details",
            "titleLabel": "Title:",
            "dateCreatedLabel": "Date Created:",
            "requestNumberLabel": "Request number:",
            "statusLabels": {
                "active": "Active",
                "hold": "Hold",
                "closed": "Closed"
            },
            "alertMessages": {
                "commentSuccess": "Your comment has been successfully submitted.",
                "reopenSuccess": "Your request has been successfully reopened.",
                "notFound": "Not found",
                "networkError": "Network error",
                "loadingDetails": "Loading request details..."
            },
            "commentButtonText": "Comment",
            "reopenButtonText": "Reopen",
            "goBackButtonText": "Go Back"
        },
        "servicesScreen": {
            "title": "Services",
            "servicesOptions": [
                {
                    "officialTranscript": "Official Transcript",
                    "description": "Request and receive official transcripts for academic and professional purposes."
                },
                {
                    "academicExceptions": "Academic Exceptions",
                    "description": "Submit and Review Requests for an Exception to Academic Policies"
                },
                {
                    "enrollmentVerification": "Enrollment Verification",
                    "description": "Obtain Official Proof of Enrollment for Employment, Scholarship, or Other Verifications"
                },
                {
                    "graduationApplication": "Graduation Application",
                    "description": "Apply for Graduation and Ensure You Meet All Requirements"
                },
                {
                    "registration": "Registration",
                    "description": "Register for a Course, Manage Your Class Schedule, and Access Important Enrollment Deadlines"
                },
                {
                    "submitRequest": "Submit Requests",
                    "description": "Lorem Ipsum Dolor sit amet, consectetur adipiscing elit. Curabitur risus lacus"
                }
            ]
        },
        "ticketsScreen": {
            "title": "Tickets",
            "ticketsOptions": [
                {
                    "openTickets": "Open Tickets",
                    "description": "Track Ongoing tickets in progress"
                },
                {
                    "closedTickets": "Closed Tickets",
                    "description": "View tickets that have been resolved"
                },
                {
                    "submitNewTicket": "Submit New Ticket",
                    "description": "Create and submit a new request"
                },
                {
                    "contactUs": "Contact Us",
                    "description": "Call our support line for assistance"
                }
            ]
        },
        "casesProvider": {
            "loadingState": "Loading...",
            "errorState": "Error: {errorMessage}",
            "userDataError": "Error loading user data",
            "caseStates": {
            "0": "Active",
            "1": "Resolved",
            "2": "Cancelled"
            },
            "caseStatuses": {
            "1": "In progress",
            "2": "Hold",
            "5": "Resolved",
            "6": "Cancelled",
            "2000": "Combined"
            },
            "openTicketsTitle": "Open Tickets",
            "closedTicketsTitle": "Closed Tickets",
            "noOpenTicketsAvailable": "No open tickets available",
            "noClosedTicketsAvailable": "No closed tickets available",
            "status": "Status:",
            "ticketDetails": {
            "title": "Ticket Details",
            "fields": {
                "titleLabel": "Title:",
                "dateCreatedLabel": "Date Created:",
                "ticketNumberLabel": "Ticket number:"
            }
            }
        },
        "openCaseDetailScreen": {
            "alerts": {
            "commentSuccess": "Your comment has been successfully submitted.",
            "notFound": "Not found",
            "networkError": "Network error"
            },
            "loading": {
            "main": "Loading..."
            },
            "buttons": {
            "comment": "Comment"
            }
        },
        "closedCaseDetailScreen": {
            "reopenCase": {
            "comments": "Reopen ticket",
            "successMessage": "Your case has been successfully reopened."
            },
            "alerts": {
            "notFound": "Not found",
            "networkError": "Network error"
            },
            "loading": {
            "description": "Loading case details..."
            },
            "buttons": {
            "reopen": "Reopen"
            }
        },
        "contactUsPopUp": {
            "helpMessage": "Need help? —You can call us at",
            "phoneNumber": "+1 (801) 655-6424",
            "hours": "Mon–Fri, 9 AM to 5 PM (local time)",
            "callButton": "Call +1 (801)-655-6424"
        },
        "submitNewTicketScreen": {
            "title": "Submit a New Ticket",
            "form": {
            "mainTopic": {
                "label": "Main Topic",
                "options": [
                "Select an item",
                "Canvas – Course Issue",
                "Canvas – Login Issue",
                "Canvas Access",
                "EnglishConnect Module – Login Issue",
                "EnglishConnect",
                "EnglishConnect Module – Course Issue",
                "Finance – Payment Issue",
                "Finance – Heber J. Grant Discount",
                "Gathering Questions",
                "Hold – Finance",
                "Hold – Gathering",
                "Hold - Ecclesiastical Endorsement",
                "Meet with an Academic Advisor",
                "Mentoring",
                "Microsoft Office – Login Issue",
                "Missionary Support",
                "Student Portal – Login Issue",
                "Student Wellness",
                "Transfer Evaluation",
                "Work Study",
                "Other"
                ]
            },
            "detailedDescription": {
                "label": "Detailed Description",
                "placeholder": "Type Here"
            },
            "preferredContactMethod": {
                "label": "Preferred Contact Method",
                "options": [
                "Select an item",
                "Email",
                "Phone"
                ]
            },
            "contactInfo": {
                "label": "Contact Info",
                "placeholder": "Type Here"
            },
            "screenshotUpload": {
                "label": "Submit a Screenshot with Your Ticket",
                "buttonText": "Attach File",
                "description": "This file must be a file of type PNG-JPG-JPEG."
            }
            },
            "submitButton": "Submit",
            "submissionLoading": "Submitting your ticket...",
            "submissionSuccessMessage": "Your ticket has been successfully submitted. Thank you!",
            "submissionErrorMessage": "There was an issue submitting your ticket. Please try again later."
        },
        "contactUsScreen": {
            "text": "Need help? -You can call us at 1-801-655-6424.\nMon–Fri, 9am to 5pm (local time).",
            "callButton": {
                "label": "Call +1 (801)-655-6424"
            }
        },
        "networkScreen": {
            "title": "Network",
            "networkOptions": [
                {
                    "mentorInformation": "Mentor Information",
                    "description": "Access details about mentors and how to connect with them."
                },
                {
                    "gatheringInformation": "Gathering Information",
                    "description": "Find details about upcoming gatherings, locations, and schedules."
                },
                {
                    "contactUs": "Contact Us",
                    "description": "Call our support line for assistance."
                }
            ]
        },
        "mentorInformationScreen": {
            "title": "Mentor Information",
            "description": "BYU Pathway Mentors are a resource to students through their education journey, offering strategies for success, important reminders, connecting students to support resources, and providing encouragement to help students achieve their goals.",
            "noMentorMessage": "No Mentor Information available at this time.",
            "loading": "Loading mentor information"
        },
        "mentorDisplay": {
            "yourMentorInformation": "Your Mentor Information",
            "name": "Name:",
            "email": "Email:",
            "phone": "Phone:",
            "notAvailable": "Not available",
            "requestAMentor": "Request a Mentor",
            "mentorConcernForm": "Mentor Concern Form"
        },
        "requestMentor": {
            "headerTitle": "Request a Mentor",
            "pageTitle": "Request a Mentor",
            "detailsLabel": "Please describe in detail why you would like to request a mentor.",
            "detailsPlaceholder": "Type here",
            "submitButton": "Submit",
            "requiredField": "This field is required",
            "successMessage": "Mentor assigned successfully",
            "errorMessage": "Failed to assign mentor",
            "loadingDescription": "Submitting Request..."
        },
        "mentorConcern": {
            "headerTitle": "Mentor Concern Form",
            "generalCategoryQuestion": "Please select a general category *",
            "generalCategoryOptions": {
            "default": "Select an item",
            "option1": "The Mentor has not responded and 24 hours have passed.",
            "option2": "The Mentor did not provide needed answers or information.",
            "option3": "I would like the contact information for my Mentor.",
            "option4": "I am not assigned a Mentor and am currently enrolled."
            },
            "detailsLabel": "Please add any additional details about the experience with the Mentor.",
            "detailsPlaceholder": "Type here",
            "contactMethodQuestion": "Preferred Contact Method *",
            "contactMethodOptions": {
            "default": "Select an item",
            "option1": "Email",
            "option2": "Phone"
            },
            "contactInfoLabel": "Contact Info",
            "contactInfoPlaceholder": "Type here",
            "requiredFieldsNote": "Fields marked with * are required",
            "submitButton": "Submit",
            "validationRequired": "This field is required",
            "successMessage": "Your form has been successfully submitted. Thank you!",
            "errorMessage": "We couldn't process your concern at this time. Please try submitting it again in a few minutes."
        },
        "gatheringInformationScreen": {
            "title": "Gathering Information",
            "noGatheringsMessage": "You are not currently involved in any gathering.",
            "loadingDescription": "Loading gathering information...",
            "pathwayConnectTitle": "PathwayConnect Gathering Information",
            "englishConnectTitle": "EnglishConnect Gathering Information",
            "noGathering": "You are not currently enrolled in any gatherings."
        },
        "jobsScreen": {
            "title": "Jobs",
            "options": [
                {
                "jobsAvailable": "Jobs Available",
                "description": "Explore entry-level job opportunities that match your skills and career goals."
                },
                {
                "jobsAppliedTo": "Jobs Applied To",
                "description": "Track the status of your job application and stay updated on potential opportunities."
                },
                {
                "jobProfile": "Job Profile",
                "description": "Create and manage your job profile to showcase your skill and experience."
                }
            ]
        },
        "jobsAvailableScreen": {
            "title": "Job Opportunities",
            "noJobsAvailableMessage": "No jobs available at the moment. Please check back later!",
            "browseJobsButton": "Browse All Jobs",
            "searchPlaceholder": "Search for jobs...",
            "filterButton": "Filter",
            "errorLoadingJobs": "Error loading Job Opportunities",
            "processingRequest": "Processing request",
            "jobDetails": "Job Details",
            "company": "Company:",
            "title": "Title:",
            "dateCreated": "Date Created:",
            "description": "Description",
            "addResumePrompt": "Add your resume here: (in PDF) *",
            "resumeRequired": "Resume is required.",
            "noResumeSelected": "No resume file has been selected.",
            "updateJobApplication": "Update Job Application",
            "notFound": "Not found",
            "applicationUpdatedSuccessfully": "Your job application has been successfully updated.",
            "submissionFailed": "Submission failed: ",
            "unknownError": "Unknown error",
            "networkError": "Network error. Please check your internet connection.",
            "removingApplication": "Removing job application",
            "removeApplication": "Remove Application",
            "applicationRemovedSuccessfully": "Your job application has been successfully removed.",
            "removalFailed": "Removal failed: ",
            "loadingLanguage": "Loading language...",
            "applyingToJobOpportunity": "Applying to job opportunity...",
            "applyForThisJob": "Apply for this Job",
            "applicationSubmittedSuccessfully": "Your job application has been successfully submitted."
        },
        "jobsAppliedToScreen": {
            "noJobsAvailableMessage": "No jobs available at the moment. Please check back later!",
            "errorLoadingJobs": "Error loading Job Opportunities",
            "processingRequest": "Processing request",
            "jobDetails": "Job Details",
            "company": "Company:",
            "title": "Title:",
            "dateCreated": "Date Created:",
            "description": "Description",
            "addResumePrompt": "Add your resume here: (in PDF) *",
            "resumeRequired": "Resume is required.",
            "noResumeSelected": "No resume file has been selected.",
            "updateJobApplication": "Update Job Application",
            "notFound": "Not found",
            "applicationUpdatedSuccessfully": "Your job application has been successfully updated.",
            "submissionFailed": "Submission failed: ",
            "unknownError": "Unknown error",
            "networkError": "Network error. Please check your internet connection.",
            "removingApplication": "Removing job application",
            "removeApplication": "Remove Application",
            "applicationRemovedSuccessfully": "Your job application has been successfully removed.",
            "removalFailed": "Removal failed: "
        },
        "jobProfileNavScreen": {
            "title": "Job Profile",
            "submitProfile": "Submit Profile",
            "complete": "Complete",
            "sections": [
                {
                "section1": "Section 1",
                "description": "Share your job status, give sharing permissions, and list your work history."
                },
                {
                "section2": "Section 2",
                "description": "Share how we can reach to you your work preference, language skills, education, and access to technology."
                },
                {
                "section3": "Section 3",
                "description": "You will be directed to convenient web app to complete a quick internet speed test and typing speed test."
                }
            ],
            "footerText": "Please, complete your profile.",
            "errorLoadingJobs": "Error loading Job Opportunities"
        },
        "jobProfileSection1Screen": {
            "title": "Job Profile - Section 1",
            "introduction": "Welcome to Jobs Profile. This tool helps us gather key information to support your career goals. Please fill it out honestly and completely so we can best understand your goals. If you need a break, click Save Progress to return and continue later.",
            "missingFields": "There are missing or invalid fields:",
            "requiredEmploymentHistory": "Employment History can't be empty",
            "form": {
                "termsOfUse": {
                    "title": "Terms of Use",
                    "questions": [
                        {
                        "question1": "Are you seeking a better job?",
                        "options": [
                            "Select an item",
                            "Yes",
                            "No"
                            ]
                        },
                        {
                        "question2": "Do we have your permission to share your information with other departments in the Church of Jesus Christ of Latter-day Saints?",
                        "options": [
                            "Select an item",
                            "Yes",
                            "No"
                            ]   
                        },
                        {
                        "question3": "Do we have your permission to share your information with third party hiring firms and other employers?",
                        "options": [
                            "Select an item",
                            "Yes",
                            "No"
                            ]
                        }
                    ],
                    "infoButton": {
                        "label": "Click here for details on what information may be shared",
                        "popup": {
                            "content": [
                                "The answers you provide in this survey.",
                                "Your contact information including name, address, phone number, email, etc.",
                                "Any credentials you have earned, including a Pathway Connect Completion Certificate and/or any online certificates and degrees you have completed or are currently working toward. This could also include any relevant coursework.",
                                "Information related to marketable skills and language abilities."
                            ],
                            "closeButton": "Close"
                        }
                    }
                },
                "employmentHistory": {
                    "title": "Employment History",
                    "description": "Please share with us your employment history starting one year before you started BYU Pathway Worldwide.",
                    "buttons": {
                        "add": {
                            "label": "Add +",
                            "labelBack": "Go Back",
                        },
                        "reviewSavedItems": {
                            "label": "Review Saved Items",
                            "count": 0
                        }
                    }
                },
                "employmentItemDetails": {
                    "titleLabels": {
                    "title": "Title:",
                    "companyName": "Company Name:",
                    "type": "Type:",
                    "startDate": "Start Date:",
                    "endDate": "End Date:",
                    "monthlyEarnings": "Monthly Earnings:",
                    "hoursPerWeek": "Hours Per Week:",
                    "reasonForLeaving": "Reason for Leaving:"
                    },
                    "pickerOptions": {
                    "type": {
                        "selectOne": "Select one",
                        "remote": "Remote",
                        "local": "Local",
                        "entrepreneurship": "Entrepreneurship"
                    },
                    "hoursPerWeek": {
                        "selectOne": "Select one"
                    },
                    "leavingReason": {
                        "selectOne": "Select one",
                        "betterJobOpportunity": "Better Job Opportunity",
                        "internalPromotion": "Internal Promotion",
                        "termination": "Termination",
                        "resignation": "Resignation",
                        "relocation": "Relocation",
                        "careerChange": "Career Change",
                        "education": "Education",
                        "other": "Other"
                    }
                    },
                    "currentlyWorking": "Currently working at this role",
                    "buttons": {
                    "goBack": "Go Back",
                    "removeJobHistory": "Remove job history"
                    },
                    "alert": {
                    "confirmDeleteTitle": "Confirm Delete",
                    "confirmDeleteMessage": "Are you sure you want to delete this job history?",
                    "cancelButton": "Cancel",
                    "deleteButton": "Delete",
                    "deleteFailedMessage": "Failed to delete item."
                    },
                    "loading": "Loading..."
                },
                "addEmployment": {
                    "addEmploymentTitle": "Add Employment",
                    "titleLabel": "Title: *",
                    "companyNameLabel": "Company Name: *",
                    "typeLabel": "Type: *",
                    "startDateLabel": "Start Date: *",
                    "endDateLabel": "End Date: *",
                    "workingAtThisRoleLabel": "I'm currently working in this role",
                    "monthlyEarningsLabel": "Monthly Earnings in Local Currency: *",
                    "hoursPerWeekLabel": "Hours Per Week: *",
                    "leavingReasonLabel": "Reason for Leaving: *",
                    "addButton": "Add",
                    "notfound": "Not found",
                    "sendDataToLocalStorage": "Send data to local storage",

                    "typeOptions": {
                        "selectOne": "Select one",
                        "remote": "Remote",
                        "local": "Local",
                        "entrepreneurship": "Entrepreneurship"
                    },
                    "hoursPerWeekOptions": {
                        "selectOne": "Select one",
                        "range1_9": "1-9",
                        "range10_19": "10-19",
                        "range20_29": "20-29",
                        "range30_39": "30-39",
                        "range40_plus": "40+"
                    },
                    "leavingReasonOptions": {
                        "selectOne": "Select one",
                        "betterJobOpportunity": "Better Job Opportunity",
                        "internalPromotion": "Internal Promotion",
                        "termination": "Termination",
                        "resignation": "Resignation",
                        "relocation": "Relocation",
                        "careerChange": "Career Change",
                        "education": "Education",
                        "other": "Other"
                    },

                    "validation": {
                        "titleRequired": "Title is required",
                        "companyNameRequired": "Company Name is required",
                        "typeRequired": "Type is required",
                        "startDateRequired": "Start Date is required",
                        "endDateRequired": "End Date is required",
                        "monthlyEarningsRequired": "Monthly Earnings is required",
                        "hoursPerWeekRequired": "Hours Per Week is required",
                        "leavingReasonRequired": "Reason for Leaving is required"
                    }
                }
            },
            "requiredDataChurch": "Share data with the church field is required",
            "requiredDataThirdParty": "Share data with third parties field is required",
            "requiredSeekingBetterJob": "Seeking a better job field is required",
            "submitButton": "Complete Module",
        },
        "jobProfileSection2Screen": {
            "title": "Job Profile - Section 2",
            "form": {
            "contactInformation": {
                "title": "Contact Information",
                "questions": [
                {
                    "question": "What is the best way to contact you?",
                    "options": [
                    "Select an item",
                    "Whatsapp",
                    "Email"
                    ]
                },
                {
                    "question": "What language do you speak? Select all that apply.",
                    "input": {
                    "placeholder": "Add language"
                    }
                }
                ],
                "whatsapp_label": "Enter your WhatsApp (Make sure to add your country code): *",
                "whatsapp_placeholder": "Enter your WhatsApp number",
                "email_label": "Enter your Email: *",
                "email_placeholder": "Enter your Email"
            },
            "jobPreferences": {
                "title": "Job Preferences",
                "questions": [
                {
                    "question": "What type of job are you looking for? Select all that apply.",
                    "options": [
                    "Remote",
                    "In-person (Local)"
                    ]
                },
                {
                    "question": "How many hours are you available to work per week? Select all that apply.",
                    "options": [
                    "Full time (up to 40 hours per week)",
                    "Part time (up to 20 hours per week)"
                    ]
                },
                {
                    "question": "What industries are you interested in? Select all that apply.",
                    "options": [
                    "Accounting/Finance",
                    "Health Care",
                    "Technology",
                    "Artificial Intelligence",
                    "Marketing"
                    ]
                },
                {
                    "question": "Please indicate how much money you usually earn in one month in your local currency.",
                    "inputs": {
                    "salaryAmountPlaceholder": "Salary amount",
                    "currencyPlaceholder": "Currency"
                    }
                }
                ]
            },
            "educationHistory": {
                "title": "Education History",
                "description": "Please describe any higher education you completed prior to BYU Pathway, including degrees, diplomas, or certificates from other colleges or universities. Do not include BYU Pathway, BYU-Idaho, or Ensign College certificates or degrees.",
                "buttons": {
                "add": "Add",
                "reviewSavedItems": "Review Saved Items"
                }
            },
            "addEducationHistory": {
                "title": "Add Education",
                "labels": {
                "collegeName": "College/University Name: *",
                "country": "Country: *",
                "degreeType": "Degree Type: *",
                "dateAwarded": "Date Awarded: *",
                "degreeName": "Degree Name: *"
                },
                "placeholders": {
                "selectOne": "Select one"
                },
                "degreeTypes": {
                "certificate": "Certificate",
                "associate": "Associate",
                "bachelor": "Bachelor",
                "master": "Master",
                "doctorate": "Doctorate"
                },
                "validation": {
                "collegeNameRequired": "College/University Name is required",
                "countryRequired": "Country is required",
                "degreeTypeRequired": "Degree Type is required",
                "dateAwardedRequired": "Date Awarded is required",
                "degreeNameRequired": "Degree Name is required"
                },
                "buttons": {
                "add": "Add"
                }
            },
            "previousEducationList": {
                "title": "Previous Education",
                "footer": {
                "itemCountSingular": "item",
                "itemCountPlural": "items",
                "goBackButton": "Go Back"
                }
            },
            "educationItemDetails": {
                "titleLabels": {
                "collegeName": "College/University Name:",
                "country": "Country:",
                "degreeType": "Degree Type:",
                "dateAwarded": "Date Awarded:",
                "degreeName": "Degree Name:"
                },
                "buttons": {
                "goBack": "Go Back",
                "removeEducation": "Remove education"
                },
                "alert": {
                "confirmDeleteTitle": "Confirm Delete",
                "confirmDeleteMessage": "Are you sure you want to delete this previous education?",
                "cancelButton": "Cancel",
                "deleteButton": "Delete",
                "deleteFailedMessage": "Failed to delete item."
                },
                "loading": "Loading..."
            },
            "technologyAndAccessibility": {
                "title": "Technology and Accessibility",
                "questions": [
                {
                    "question": "What electronic devices do you have access to? Select all that apply.",
                    "options": [
                    "Computer (Personal)",
                    "Computer (Shared or Public)",
                    "Smartphone (Personal)",
                    "Smartphone (Shared or Public)",
                    "Tablet (Personal)",
                    "Tablet (Shared or Public)"
                    ]
                },
                {
                    "question": "On average, how many times a week do you experience power outage?",
                    "options": [
                    "0",
                    "1–2",
                    "3–5",
                    "5–10",
                    "10+"
                    ],
                    "placeholder": "Power Outages"
                }
                ]
            },
            "profileQuestions": {
                "title": "Profile Questions",
                "description": "Answer the following questions as truly as possible, two minutes max.",
                "questions": [
                {
                    "question": "Describe an experience where you used your leadership skills. What was the situation? What did you do? What was the result?"
                },
                {
                    "question": "Your team member let you borrow something. While using it, you accidentally broke it. Leave a voicemail for your team member to explain the problem and recommend a solution."
                }
                ]
            }
            },
            "alerts": {
            "missingOrInvalidFields": "There are missing or invalid fields:",
            "audioResponseRequired": "Audio response is required."
            },
            "completeModuleButton": "Complete Module",
            "validationMessages": {
                "contactWayRequired": "Contact way is required",
                "whatsappRequired": "WhatsApp number is required when contact way is WhatsApp",
                "invalidEmail": "Invalid email",
                "emailRequired": "Email is required when contact way is Email",
                "salaryAmountRequired": "Salary amount is required",
                "salaryCurrencyRequired": "Salary currency field is required",
                "languagesArrayRequired": "At least one language is required",
                "jobTypeArrayRequired": "At least one job type is required",
                "availabilityHoursArrayRequired": "Select at least one option of availability hours",
                "industryInterestArrayRequired": "Select at least one industry interest",
                "electronicDevicesArrayRequired": "At least one electronic device is required"
            }
        },
        "jobProfileSection3Screen": {
            "title": "External Test",
            "description": "Please complete the following tests. (Copy the URLs and paste them into your desktop browser.)",
            "links": [
            {
                "label": "Internet Speed Test",
                "urlPlaceholder": "Link to Internet Speed Test"
            },
            {
                "label": "Typing Speed Test",
                "urlPlaceholder": "Link to Typing Speed Test"
            }
            ],
            "checkbox": {
                "label": "I have completed the test"
            },
            "button": {
                "label": "Go Back"
            },
            "successPopup": {
                "title": "Success!",
                "message": "External test marked as completed"
            },
            "incompleteTestsMessage": "Incomplete, please ensure all required external tests are completed.",
            "failedCompletionStatus": "Failed to get completion status.",
            "failedToCheckCompletion": "Failed to check completion. Please try again later.",
            "checking": "Checking...",
            "internetDownloadSpeed": "Internet Download Speed",
            "internetUploadSpeed": "Internet Upload Speed",
            "typingAccuracy": "Typing Accuracy",
            "typingSpeed": "Typing Speed"
        },
        "feedbackScreen": {
            "title": "Submit Feedback",
            "FeedbackOptions": [
                {
                    "submitfeedback": "Submit Feedback",
                    "description": "Share your thoughts or suggestions to help us improve the app"
                },
                {
                    "reportanissue": "Report an Issue",
                    "description": "Let us know about any technical problems or bugs you've encountered"
                },
                {
                    "contactUs": "Contact Us",
                    "description": "Call our support line for assistance."
                }
            ]
        },
        "reportIssue": {
            "title": "Report an Issue",
            "validation": {
            "issueTypeRequired": "This field is required",
            "commentsRequired": "This field is required"
            },
            "pickerOptions": {
            "selectItem": "Select an item",
            "mentor": "Mentor",
            "registrationForm": "Registration Form"
            },
            "issueTypeQuestion": "Where in the app did you experience this issue?",
            "commentsLabel": "Please describe in detail the issue you are experiencing",
            "commentsPlaceholder": "Type here",
            "submitButton": "Submit"
        },
        "submitFeedbackScreen": {
            "title": "Feedback",
            "screenTitle": "Submit Feedback",
            "question": "How satisfied are you with the Companion experience?",
            "ratingNumbers": ["1", "2", "3", "4", "5"],
            "form": {
            "comments": {
                "label": "Comments",
                "placeholder": "Type here"
            }
            },
            "submitButton": "Submit",
            "submissionLoading": "Submitting your feedback...",
            "submissionSuccessMessage": "Your feedback has been successfully submitted. Thank you!",
            "submissionErrorMessage": "There was an issue submitting your feedback. Please try again later."
        },
        "common": {
            "thisFieldIsRequired": "This field is required",
            "loadingData": "Loading..."
        },
        "settingsScreen": {
            "title": "Settings",
            "profileOption": {
                "title": "Profile",
                "description": "View and update your personal details, preferences, and account settings." 
            },
            "pushNotificationsOption": {
                "title": "Push Notifications",
                "description": "Manage your notifications preferences to stay informed about important updates."
            },
            "signOutOption": {
                "title": "Sign Out",
                "description": "Log out of your account and end your current session."
            },
            "aboutOption": {
                "title": "About",
                "description": "Learn more about Companion, and its features."
            }
        },
        "profileScreen": {
            "title": "Profile",
            "fields": {
            "preferredName": "Preferred Name",
            "pathwayEmail": "BYU-Pathway Email",
            "studentID": "Student ID",
            "preferredContact": "Preferred Method of Contact",
            "whatsappNumber": "WhatsApp Number",
            "preferredLanguage": "Preferred Language",
            "updateButton": "Update",
            "emailAddress": "Email Address",
            "phoneNumber": "Phone Number",
            "countryCodeDefault": "Code",
            "phoneNumberPlaceholder": "23822318"
            },
            "alertMessages": {
            "updateSuccess": "Profile updated successfully!",
            "updateError": "Failed to update profile. Please try again.",
            "updatingProfile": "Updating profile..."
            },
            "validation": {
            "thisFieldIsRequired": "This field is required"
            }
        },
        "aboutScreen": {
            "title": "About",
            "sections": {
                "about": "About",
                "getHelp": "Get help",
                "legal": "Legal"
            },
            "items": {
                "version": "Version",
                "build": "Build",
                "sendCrashReports": "Send crash reports",
                "submitTicket": "Submit a Ticket",
                "suggestions": "Suggestions",
                "termsOfService": "Terms of Service",
                "privacyPolicy": "Privacy Policy"
            },
            "footer": "Copyright © 2025 Companion"
        },
        "signOutScreen": {
            "title": "Confirm Sign Out",
            "message": "Signing Out...",
            "feedback": "Rate your experience:",
            "buttons": {
                "cancel": "Cancel",
                "confirm": "Confirm"
            }
        },
        "common": {
            "comentsTitle": "Comments",
            "reopenRequest": "To reopen this request, please add your reason in the comments section below",
            "statusLabel": "Status:",
            "resolvedLabel": "Resolved:",
            "lastModifiedLabel": "Last Modified:",
            "seeTimeline": "See Timeline",
            "descriptionTitle": "Description",
            "thisFieldIsRequired": "This field is required",
            "detailedDescriptionLabel": "Detailed Description",
            "typeHerePlaceholder": "Type here",
            "screenshotLabel": "Submit a screenshot with your ticket",
            "screenshotHint": "This file must be a file of type: png, jpg, jpeg.",
            "permissionRequiredTitle": "Permission required",
            "galleryAccessMessage": "Gallery access is required to select an image.",
            "invalidFileTypeTitle": "Invalid file type",
            "invalidFileTypeMessage": "Please select a file type: {allowedTypes}.",
            "errorProcessingImageTitle": "Error",
            "errorProcessingImageMessage": "The image could not be processed.",
            "processingStatus": "Processing...",
            "attachFileButton": "Attach file",
            "selectedImageLabel": "Selected image",
            "changeImageButton": "Change image"
        },
        "notStudentWelcome": {
            "welcomeTitle": "Welcome to the combined application for BYU-Pathway Worldwide and EnglishConnect 3!",
            "churchAccountTitle": "Church Account",
            "churchAccountP1": "You will need a Church account to log in and apply.",
            "churchAccountBullet1": "If you are not a member of The Church of Jesus Christ of Latter-day Saints, please “Create a new Account” on the first sign-in page and follow the instructions.",
            "churchAccountBullet2": "If you have a Church account but do not remember your login information, click “I forgot your username or password” and follow the instructions. Please do not create a new account.",
            "applyButton": "Apply Now",
            "programSelectionTitle": "Program Selection",
            "programSelectionP1": "We will use the information in your application to recommend which program you should start with. You will make that final selection at the end of the application.",
            "currentStudentsTitle": "Current Students",
            "currentStudentsP1": "If you are currently enrolled in BYU-Pathway or EnglishConnect 3, please DO NOT apply. Log in to your student portal at portal.byupathway.edu to clear holds and register for courses."
        },
        "notStudentTermsConditions": {
            "previousPageButton": "Previous Page",
            "acknowledgementP1": "By checking the box below, I acknowledge and agree to the terms and conditions described herein, and I have read the Privacy Notice – BYU-Pathway Worldwide (Updated 2024-03-01) in addition to the Legal Disclosures and Select Institutional Policies that pertain to the institution where I have submitted or may submit an application (links above).",
            "iAcknowledgeTermsAndConditions": "I acknowledge *",
            "saveAndContinueButton": "Save and Continue",
            "questionIsMember": "Are you a current or former member of The Church of Jesus Christ of Latter-day Saints?",
            "questionPresentReligion": "What is your present religion, if any?",
            "loadingMessage": "Loading...",
            "errorMessagePrefix": "Error: ",
            "pickerSelectAnItem": "Select an item",
            "pickerOptionYes": "Yes",
            "pickerOptionNo": "No",
            "pickerOptionCatholic": "Catholic",
            "pickerOptionNoReligion": "No Religion",
            "validationRequired": "This field is required",
            "validationReligionRequired": "This field is required when you are not a member.",
            "validationAcknowledgeTerms": "You must acknowledge the terms and conditions."
        },
        "notStudentTermsConditions2NoMRN": {
            "termsAndConditionsTitle": "Terms and Conditions",
            "noMRNAttachedTitle": "NO MEMBERSHIP RECORD NUMBER (MRN) ATTACHED",
            "mrnExplanation": "All members of The Church of Jesus Christ of Latter-Day Saints are required to have a membership record number (MRN) associated with their Church account to participate in the programs offered through BYU-Pathway Worldwide. The account you’re currently logged in with doesn’t have an MRN attached. See below for troubleshooting options:",
            "optionOneTitle": "Option one:",
            "optionOneDescription": "If a different Church account is associated with your MRN, sign in using that account.",
            "optionOneBullet": "If you do not remember the username or password for that account, go through the steps found on the ",
            "accountRecoveryLink": "account recovery page",
            "optionOneBulletPart2": ". Do NOT create a new account.",
            "optionTwoTitle": "Option two:",
            "optionTwoDescription": "Add your MRN to your current account.",
            "optionTwoStep1": "1. Sign out of the application.",
            "optionTwoStep2": "2. Go to your ",
            "churchAccountSettingsLink": "Church account membership settings",
            "optionTwoStep3": "3. Add your MRN. You can find your MRN by:",
            "optionTwoStep3a": "a. Checking your temple recommend.",
            "optionTwoStep3b": "b. Contacting your ward or branch clerk.",
            "optionTwoStep4": "4. Sign back into the application.",
            "optionThreeTitle": "Option three:",
            "optionThreeDescription": "If neither of the options above work, contact ",
            "byuPathwaySupportLink": "BYU-Pathway Support",
            "formerMembershipTitle": "Former Membership",
            "formerMembershipP1": "Individuals who currently have formal membership restrictions or have had a voluntary or involuntary withdrawal of membership from The Church of Jesus Christ of Latter-day Saints are not eligible to participate in programs offered through BYU-Pathway Worldwide until reinstated to full fellowship in the Church. Applicants are encouraged to meet with their ecclesiastical leader to discuss the next steps for reinstatement to unrestricted membership status. For additional information or clarification, please contact BYU-Pathway Support."
        },
        "notStudentMemberWelcome": {
            "welcomeGreeting": "Welcome Jhon Doe!",
            "welcomeMessage": "Welcome to BYU-Pathway Worldwide! Please check if your name and email are correct:",
            "yourNameLabel": "Your Name:",
            "yourName": "Jhon Doe",
            "yourEmailLabel": "Your Email:",
            "yourEmail": "jhondoe@gmail.com",
            "signOutMessage": "If this is not you, sign out and log in again with your Church Account.",
            "contactSupport": "Contact BYU-Pathway Support if you need help.",
            "startApplicationButton": "Start Application"
        },
        "notStudentInformation": {
            "requestStudentInfoTitle": "Request Student Information",
            "saveAndContinueButton": "Save and Continue",
            "loadingMessage": "Loading...",
            "errorMessagePrefix": "Error: ",
            "receiveTextMessagesQuestion": "Would you like to receive text messages?",
            "receiveTextMessagesOptionDoNotAllow": "Do not allow",
            "receiveTextMessagesOptionAllow": "Allow",
            "primaryLanguageSelectOption": "Select a language",
            "validationFirstNameRequired": "First name is required",
            "validationLastNameRequired": "Last name is required",
            "validationDateOfBirthRequired": "Date of birth is required",
            "validationSexRequired": "Sex is required",
            "validationMaritalStatusRequired": "Marital status is required",
            "validationPrimaryLanguageRequired": "Primary language is required",
            "validationCountryRegionRequired": "Country/Region is required",
            "validationZipInvalid": "Invalid ZIP",
            "validationZipRequired": "ZIP is required",
            "validationAddressLine1Required": "Address Line 1 is required",
            "validationCityRequired": "City is required",
            "validationEmailInvalid": "Invalid email address",
            "validationEmailRequired": "Email is required",
            "validationMobilePhoneInvalid": "Invalid phone number",
            "validationMobilePhoneRequired": "Mobile Phone is required",
            "validationHomePhoneInvalid": "Invalid phone number",
            "validationPreferredPhoneRequired": "Preferred Phone is required",
            "validationReceiveTextMessagesRequired": "Please select an option for text messages",
            "validationWhatsAppNumberInvalid": "Invalid phone number"
        },
        "studentInfoSection": {
            "firstNameLabel": "First/Given Name(s)*",
            "lastNameLabel": "Last/Surname*",
            "suffixLabel": "Suffix",
            "dateOfBirthQuestion": "Date of birth*",
            "sexQuestion": "Sex*",
            "maritalStatusQuestion": "Marital Status*",
            "primaryLanguageQuestion": "What is your Primary Language?*"
        },
        "currentAddressSection": {
            "currentAddressTitle": "Current Address",
            "currentAddressDescription": "This is the address of where you will be living while participating in BYU-Pathway Worldwide.",
            "countryRegionQuestion": "Country/Region *",
            "zipLabel": "ZIP*",
            "stateProvinceLabel": "State/Province",
            "addressLine1Label": "Address Line 1 *",
            "cityLabel": "City *"
        },
        "contactInfoSection": {
            "contactInfoTitle": "Contact Information",
            "emailLabel": "Email *",
            "mobilePhoneLabel": "Mobile Phone *",
            "homePhoneLabel": "Home Phone",
            "preferredPhoneQuestion": "Preferred Phone *",
            "textMessageDescription": "BYU-Pathway uses text messaging to send enrollment reminders and important notifications. If you don't want to receive text messages, you can opt out below.",
            "otherContactInfoTitle": "Other Contact Information",
            "whatsAppNumberLabel": "WhatsApp Number",
            "facebookMessengerLabel": "Facebook Messenger"
        },
        "citizenshipInformation": {
            "requestStudentInfoTitle": "Request Student Information",
            "saveAndContinueButton": "Save and Continue",
            "citizenshipInfoTitle": "Citizenship Information",
            "ssn": "Please provide your Social Security number (SSN). If you choose not to provide your SSN on this page, you will need to complete additional steps to receive tax forms.",
            "hispanicLatino": "Do you consider yourself Hispanic/Latino?",
            "racialCategoriesArray": "Select one or more of the following racial categories to describe yourself",
            "haveUsCitizenshipQuestion": "Do you have citizenship in the U.S.?*",
            "completedHighSchool": "Have you completed high school/secondary education? *",
            "highestEducationQuestion": "What is your highest level of education?*",
            "attendedUsUniversitiesQuestion": "Have you attended any one or more United States universities/colleges (not including PathwayConnect) after you graduated from high school?*",
            "earnCreditUsUniversityQuestion": "Did you complete one or more 3+ credit courses with a grade of 'C' or higher at a United States university/college after you graduated from high school? *",
            "selectSchool": "Select a school you have attended and completed at least one 3+ credit course.*",
            "selectSchoolTitle": "Select your school:",
            "selectSchoolNote1": "At this point in the application, you only need to select 1 school, even if you have attended multiple universities/colleges.",
            "selectSchoolNote2": "For the purposes of this application, we only accept U.S. regionally accredited universities/colleges. If your university/college is not listed, change your response to the question \"Have you attended one or more United States universities/colleges after you graduated from high school?\" to \"No\".",
            "selectSchoolNote3": "If your university/college was U.S. regionally accredited, but is not listed and has since changed its name, choose the most recent name of the school. Example: For Ricks College, select Brigham Young University-Idaho.",
            "afterAdmittance": "After admittance to BYU-Pathway, you can submit official transcripts to transfer any previous university/college credits to satisfy program requirements. Some students may be required to submit transcripts for verification purposes",
            "parentsBachelor": "Did either of your parents earn a bachelor's degree or equivalent?*",
            "unresolvedLegalRestrictionsQuestion": "Do you have any unresolved legal restrictions, obligations, or fines for a crime you have been convicted of, pleaded guilty to, or were found responsible for (other than a minor traffic violation)? *",
            "noteForUnresolvedLegalRestrictions": "These include, but are not limited to: current incarceration, probation, parole, listed on a sex-offender registry, court fees, community service, or other legal fines.",
            "noteBachelor": "By clicking Save and Continue, you confirm that your responses are true and accurate to the best of your knowledge. Providing false information may result in the cancellation of your admission and the loss of any credit earned through BYU-Pathway Worldwide programs.",
            "loadingMessage": "Loading...",
            "errorMessagePrefix": "Error: ",
            "pickerOptions": {
            "usCitizen": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "hispanicLatino": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "highestEducation": [
                { "name": "Select a level", "value": "" },
                { "name": "High School/Secondary Education", "value": "HighSchool" },
                { "name": "Some College or University", "value": "SomeCollege" },
                { "name": "Bachelor's Degree", "value": "Bachelors" },
                { "name": "Master's Degree", "value": "Masters" },
                { "name": "Doctorate/Professional Degree", "value": "Doctorate" }
            ],
            "completedHighSchool": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "attendedUsUniversities": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "earnCreditUsUniversity": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "selectSchool": [
                { "name": "Select an option", "value": "" },
                { "name": "Test", "value": "test" }
            ],
            "parentsBachelor": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "unresolvedLegalRestrictions": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "convictedTrafficViolation": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ]
            },
            "validationCitizenshipStatusRequired": "Citizenship status is required",
            "validationCompletedHighSchoolRequired": "Please indicate if you have completed the high school/secondary",
            "validationHighestEducationRequired": "Highest level of education is required",
            "validationAttendedUsUniversitiesRequired": "Please indicate if you have attended any U.S. universities/colleges.",
            "validationEarnCreditUsUniversityRequired": "Please indicate if you completed any credit courses in a U.S. program.",
            "validationParentsBachelorRequired": "Please indicate if either of your parents earned a bachelor's degree or equivalent.",
            "validationUnresolvedLegalRestrictionsRequired": "Please select an option regarding unresolved legal restrictions, obligations, or fines.",
            "validationAnticipatedLegalizationDateRequired": "Please provide the anticipated legalization date."
        },
        "citizenshipInfoSection": {
            "biographicInformationTitle": "Biographic Information",
            "socialSecurityNumberLabel": "Social Security Number",
            "backgroundInformationTitle": "Background Information",
            "anticipatedLegalizationDateQuestion": "What is the anticipated legalization date for any of these restrictions, obligations, or liens?*",
            "racialCategories": [
            { "code": "111110000", "name": "American Indian or Alaska Native" },
            { "code": "111110001", "name": "Asian" },
            { "code": "111110002", "name": "Black or African American" },
            { "code": "111110003", "name": "Native Hawaiian or Other Pacific Islander" },
            { "code": "111110004", "name": "White" }
            ]
        },
        "englishLanguageAssessment": {
            "elaTitle": "English Language Assessment (ELA)",
            "paragraph1": "A certain level of English proficiency is needed to succeed in BYU-Pathway Worldwide. The PathwayConnect journey often begins with EnglishConnect, a program developed to assist learners with developing their English proficiency in an environment of fellowship and faith.",
            "paragraph2": "In the following assessments (Writing and Reading), you will demonstrate your current English level so you can enroll in the program that will be most beneficial for you.",
            "certificationIntro": "When you save and continue this page, you certify:",
            "certificationBullet1": "You will not use outside help of any kind to answer the questions.",
            "certificationBullet2": "Your results represent your personal best effort.",
            "buttonText": "Save and Continue"
        },
        "englishWritingTest": {
            "title": "English Writing Test",
            "directions": "Directions:",
            "bullet1": "This test will measure your English Writing ability according to the ACTFL Proficiency Guidelines.",
            "bullet2": "Do not use dictionaries, electronic devices, or any other helps.",
            "bullet3": "There are 2 questions on this test.",
            "bullet4": "The timer for each item is displayed in the top-right of the screen.",
            "bullet5": "The next page will display a practice question for you to become familiar with the format of the test questions",
            "buttonText": "Start Test"
        },
        "englishWritingTestScreen": {
            "loadingTestData": "Loading test data...",
            "submitTestButton": "Submit Test",
            "continueButton": "Continue",
            "resetButton": "Reset",
            "successMessage": "Your writing assessment is complete. It will be graded soon. ",
            "errorMessage": "There was an error saving your test. Please try again.",
            "alertCloseContinue": "Continue",
            "alertCloseOK": "OK",
            "submittingTestDescription": "Submitting writing test...",
            "readingAssessmentPrompt": "Now, please complete your reading assessment",
            "readingAssessmentLinkText": "here",
            "leftTestMessage": "You left the test. All unsaved progress has been lost and the test has been reset.",
            "passageValidationRequired": "Passage {number} answer is required.",
            "passageValidationMinLength": "Please write at least 4-5 sentences for Passage {number}."
        },
        "decisionInformation": {
            "title": "Decision Information",
            "description1": "Thank you for your interest in BYU-Pathway Worldwide. Based on the information you provided, you may be eligible to participate in one or more of the online programs serviced by BYU-Pathway. Please continue this application to decide the best program for you.",
            "description2": "Thank you for your interest in BYU-Pathway Worldwide. Unfortunately, because BYU-Pathway is not approved to admit students in your country, you are not eligible at this time. BYU-Pathway is working to be able to offer online education in new countries, so we encourage you too apply again if your country is approved in the future.",
            "saveAndContinueButton": "Save and Continue"
        },
        "programSelectionScreen": {
            "title": "Program Selection Page",
            "description": "In the menu below, you will see the BYU-Pathway programs you are eligible to start with. These might include EnglishConnect 3, PathwayConnect, and/or Certificates and Degrees. If you don’t see the program you want, it means you’re not eligible for it right now, but you might become eligible after completing other programs. You can click on a program to see a summary and important details, like where to find information about tuition costs.",
            "saveAndContinueButton": "Save and Continue",
            "selectProgramPlaceholder": "Select a program",
            "validationProgramRequired": "Please select a program.",
            "loadingMessage": "Loading...",
            "errorMessage": "Error: ",
            "pickerOptions": {
            "program": [
                {
                "name": "Select a program",
                "value": ""
                },
                {
                "name": "English Connect 3 (Academic English)",
                "value": "englishConnect3"
                },
                {
                "name": "Pathway Connect (Recommended)",
                "value": "pathwayConnect"
                },
                {
                "name": "Certificates and Degrees (Advanced)",
                "value": "certificatesDegrees"
                }
            ]
            }
        },
        "programDetailsCertDegreeScreen": {
            "headerTitle": "Non Student-Settings",
            "programTitle": "CERTIFICATES & DEGREES PROGRAM SUMMARY",
            "programDescription": "BYU-Pathway Worldwide provides access to online certificates and degrees in association with BYU-Idaho and Ensign College. While the recommended start to a degree usually begins with PathwayConnect, participants may choose to apply directly to the online certificates and degrees program if they meet the minimum educational background requirements. Tuition is significantly reduced for the entire degree program for those who start with PathwayConnect.",
            "requirementsTitle": "CERTIFICATES & DEGREES PROGRAM REQUIREMENTS",
            "instituteGathering": "Weekly gathering attendance for Institute credit, as may be required.",
            "technologyAccessTitle": "Technology Access",
            "technologyAccessPoint1": "Success with online coursework depends on students having access to reliable internet, electricity, and a device with minimum computing power. Before enrolling in a program, you should affirm that the following conditions are met:",
            "technologyAccessPoint2": "You need to have regular access to high-speed internet with adequate data.",
            "technologyAccessPoint3": "You will need to have regular access to a device that meets the minimum device profile designated for your academic pursuits. For more information on the ",
            "technologyAccessPoint31": " web page.",
            "technologyRequirementsLinkText": "BYU-Pathway Technology Requirements",
            "technologyRequirementsLinkUrl": "https://www.byupathway.edu/technology-requirements",
            "tuitionTitle": "Tuition",
            "tuitionPoint1": "Tuition is due on the fourth Monday of each term (day 22). You will receive a 5% late fee charge for all outstanding balance after this date.",
            "tuitionPoint2": "Students who do not complete BYU-Pathway Worldwide’s PathwayConnect pay the online standard tuition rate (Advanced Path). Visit ",
            "tuitionScholarshipsLinkText": "https://www.byupathway.edu/tuition",
            "tuitionPoint21": " for more information.",
            "tuitionScholarshipsLinkUrl": "https://www.byupathway.edu/tuition",
            "tuitionDiscountsPoint": "Visit the ",
            "tuitionDiscountsLinkText": "Tuition Discounts",
            "tuitionDiscountsLinkUrl": "https://www.byupathway.edu/tuition-discounts",
            "tuitionDiscountsPoint2": " page for information regarding guaranteed scholarships and other possible discounts.",
            "disabilityServicesTitle": "Disability Services",
            "disabilityServicesPoint1": "Pursuant to Section 504 of the Rehabilitation Act of 1973, BYU-Pathway, BYU–Idaho, and Ensign College (collectively the Institutions) do not discriminate against online degree students with disabilities and provides reasonable accommodations to otherwise qualified individuals.",
            "disabilityServicesPoint2": "Online Degree Students can request accessibility accommodations through their student portal.",
            "saveAndContinueButton": "Save and Continue"
        },
        "englishConnectDetailsScreen": {
            "headerTitle": "Non Student-Settings",
            "programTitle": "ENGLISHCONNECT 3 PROGRAM SUMMARY",
            "programDescription": "Learners use the EnglishConnect 3 course to prepare for PathwayConnect and other academic opportunities. In EnglishConnect 3, learners improve their ability to read, write, listen, and speak in English. They can repeat EnglishConnect 3 as many times as needed to accomplish their goals.",
            "requirementsTitle": "ENGLISHCONNECT 3 PROGRAM REQUIREMENTS",
            "gatheringsTitle": "Gatherings",
            "gatheringsPoint": "Weekly EnglishConnect 3 gathering attendance is required (either in-person or virtually). Gathering attendance makes up a significant part of a student’s overall course progress.",
            "technologyAccessTitle": "Technology Access",
            "technologyAccessPoint1": "Success with online coursework depends on students having access to reliable internet, electricity, and a device with minimum computing power. Before enrolling in a program, you should affirm that the following conditions are met:",
            "technologyAccessPoint2": "You need to have regular access to high-speed internet with adequate data.",
            "technologyAccessPoint3": "You need to be able to record clear audio for your speaking assignments.",
            "technologyAccessPoint4": "You need to have regular access to a device that meets the minimum device profile designated for your selected academic program, as explained on the ",
            "technologyRequirementsLinkText": "BYU-Pathway Technology Requirements",
            "technologyRequirementsLinkUrl": "https://www.byupathway.edu/technology-requirements",
            "technologyAccessPoint4_after": " web page. (EnglishConnect 3 follows the same technology requirements as PathwayConnect.)",
            "tuitionTitle": "Tuition",
            "tuitionPoint1": "Tuition is due on the fourth Monday of each term (day 22). You will receive a 5% late fee charge for all outstanding balance after this date.",
            "tuitionPoint2": "To see specific tuition costs for your country, visit the ",
            "englishConnectTuitionLinkText": "EnglishConnect 3 webpage",
            "englishConnectTuitionLinkUrl": "https://www.englishconnect.org/",
            "tuitionPoint2_after": ". If you do not live in the United States, click on 'United States' and choose your location.",
            "disabilityServicesTitle": "Disability Services",
            "disabilityServicesPoint1": "While BYU-Pathway is not legally required to provide access and accommodations to EnglishConnect, PathwayConnect, or Institute students with disabilities, it endeavors to provide reasonable assistance to students who need it. Such assistance is provided voluntarily and at BYU-Pathway's sole discretion. The voluntary assistance students receive may differ from accommodations provided by other institutions.",
            "disabilityServicesPoint2": "EnglishConnect 3 participants can request assistance for disabilities through their student portal.",
            "saveAndContinueButton": "Save and Continue"
        },
        "pathwayConnectDetailsScreen": {
            "headerTitle": "Non Student-Settings",
            "programTitle": "PATHWAYCONNECT PROGRAM SUMMARY",
            "programDescription": "PathwayConnect is the recommended start to every degree. Offered at a significantly reduced cost, PathwayConnect can be completed in as little as 6 months and includes foundational academic and religion courses that are typically counted towards the completion of a degree. Students who start with PathwayConnect often see increased success in completing a degree online.",
            "requirementsTitle": "PATHWAYCONNECT PROGRAM REQUIREMENTS",
            "gatheringsTitle": "Gatherings",
            "gatheringsPoint1": "Weekly PathwayConnect gathering attendance is required (either in-person or virtually). Gathering attendance makes up a significant part of a student’s overall course grade.",
            "gatheringsPoint2": "Weekly gathering attendance for Institute courses is also required.",
            "technologyAccessTitle": "Technology Access",
            "technologyAccessPoint1": "Success with online coursework depends on students having access to reliable internet, electricity, and a device with minimum computing power. Before enrolling in a program, you should affirm that the following conditions are met:",
            "technologyAccessPoint2": "You need to have regular access to high-speed internet with adequate data.",
            "technologyAccessPoint3": "You need to have regular access to a device that meets the minimum device profile designated for your selected academic program, as explained on the ",
            "technologyRequirementsLinkText": "BYU-Pathway Technology Requirements",
            "technologyRequirementsLinkUrl": "https://www.byupathway.edu/technology-requirements",
            "technologyAccessPoint3_after": " web page.",
            "tuitionTitle": "Tuition",
            "tuitionPoint1": "Tuition is due on the fourth Monday of each term (day 22). You will receive a 5% late fee charge for all outstanding balance after this date.",
            "tuitionPoint2": "Use the ",
            "pathwayConnectTuitionLinkText": "PathwayConnect Tuition Page",
            "pathwayConnectTuitionLinkUrl": "https://www.byupathway.edu/tuition",
            "tuitionPoint2_after": " to see specific tuition costs for your country.",
            "tuitionPoint3": "Visit the ",
            "tuitionDiscountsLinkText": "Tuition Discounts",
            "tuitionDiscountsLinkUrl": "https://www.byupathway.edu/tuition-discounts",
            "tuitionPoint3_after": " page for information regarding guaranteed scholarships and other possible discounts.",
            "disabilityServicesTitle": "Disability Services",
            "disabilityServicesPoint1": "While BYU-Pathway is not legally required to provide access and accommodations to EnglishConnect, PathwayConnect, or Institute students with disabilities, it endeavors to provide reasonable assistance to students who need it. Such assistance is provided voluntarily and at BYU-Pathway's sole discretion. The voluntary assistance students receive may differ from accommodations provided by other institutions.",
            "disabilityServicesPoint2": "PathwayConnect and Institute students can request assistance for disabilities through their student portal.",
            "saveAndContinueButton": "Save and Continue"
        },
        "cesAcknowledgementScreen": {
            "headerTitle": "Non Student-Settings",
            "acknowledgementTitle": "CES Acknowledgement",
            "acknowledgementDescription": "The Church Educational System (CES) is sponsored by The Church of Jesus Christ of Latter-day Saints (Church) and directed by the Church Board of Education/Boards of Trustees, with the mission to develop disciples of Jesus Christ who are leaders in their homes, the Church, and their communities.",
            "honorCodeTitle": "CES Honor Code",
            "honorCodeDescription": "The CES Honor Code helps to accomplish the CES mission to build disciples of Jesus Christ. As faculty, administration, staff, and students voluntarily commit to conduct their lives in accordance with the principles of the gospel of Jesus Christ, they strive to maintain the highest standards in their personal conduct regarding honor, integrity, morality, and consideration of others. By accepting appointment, continuing in employment, being admitted, or continuing enrollment, each member of the campus communities personally commits to observe the CES Honor Code approved by the Board of Trustees:",
            "honorCodePoint1": "Maintain an Ecclesiastical Endorsement, including striving to deepen faith and maintain gospel standards.",
            "honorCodePoint2": "Be honest.",
            "honorCodePoint3": "Live a chaste and virtuous life, including abstaining from sexual relations outside marriage between a man and a woman. Living a chaste and virtuous life also includes abstaining from same-sex romantic behavior.",
            "honorCodePoint4": "Abstain from alcoholic beverages, tobacco, tea, coffee, vaping, marijuana, and other substance abuse.",
            "honorCodePoint5": "Participate regularly in Church services.",
            "honorCodePoint6": "Respect others, including the avoidance of profane and vulgar language.",
            "honorCodePoint7": "Obey the law and follow campus policies, including the CES Dress and Grooming standards.",
            "honorCodePoint8": "Encourage others in their commitment to comply with the Honor Code and Dress and Grooming standards.",
            "dressGroomingPrinciplesTitle": "CES Dress and Grooming Principles and Expectations",
            "dressGroomingPrinciplesDescription": "CES Dress and Grooming Principles and Expectations CES Dress and Grooming Principles and Expectations are part of the CES Honor Code and part of each student’s, employee’s, and volunteer’s commitment.",
            "dressGroomingPrinciplesDescription2": "When considering Honor Code and dress and grooming decisions, the teachings of the prophets and apostles, as well as Church instruction, such as “For the Strength of Youth: A Guide for Making Choices” can be helpful.",
            "dressGroomingPrinciplesListTitle": "CES Dress and Grooming Principles",
            "dressGroomingPrinciplesPoint1": "Each student, employee, and volunteer commits to:",
            "dressGroomingPrinciplesPoint2": "Represent the Savior Jesus Christ, the Church, and the Church Educational System.",
            "dressGroomingPrinciplesPoint3": "Preserve an inspiring environment, without distraction or disruption, where covenants are kept in a spirit of unity so the Holy Ghost can teach truth.",
            "dressGroomingPrinciplesPoint4": "Promote modesty, cleanliness, neatness, and restraint in dress and grooming.",
            "dressGroomingPrinciplesPoint5": "Maintain an elevated standard distinctive to educational institutions of the Church of Jesus Christ.",
            "dressGroomingExpectationsNote": "Dress and grooming expectations as in the examples below should align with these principles. However, application of these principles is not limited to the expectations listed. Members of the university community are expected to apply these principles to dress and grooming questions as they arise.",
            "byuPathwayNote": "BYU–Pathway Worldwide and Seminaries and Institutes of Religion match local Church dress and grooming standards as appropriate for local activities.",
            "readMoreLinkText": "You can read more about the Honor Code ",
            "readMoreLinkText2": "here.",
            "readMoreLinkUrl": "https://www.byupathway.edu/honor-code",
            "iAcknowledgeCES": "I acknowledge and agree that I have read and will abide by the CES Honor Code and CES requirements. *",
            "saveAndContinueButton": "SUBMIT YOUR APPLICATION",
            "validationAcknowledgementRequired": "You must acknowledge to submit.",
            "loadingMessage": "Loading...",
            "errorMessage": "Error: "
        },
        "applicationDashboardScreen": {
            "applicationRegistration": "BYU-Pathway Worldwide Application",
            "dateStarted": "08-06-2025",
            "dateSubmitted": "08-06-2025",
            "program1": "PathwayConnect (Recommended)",
            "program2": "Based on the information you have provided, you qualify for EnglishConnect 3. This course will help you improve your English skills to prepare for future employment and education opportunities through BYU-Pathway Worldwide. Learn how to join today at ",
            "program3": "Based on the information you have provided, you qualify for EnglishConnect 1 or 2. These courses will help you improve your English skills to prepare for future employment and education opportunities through BYU-Pathway Worldwide. Learn how to join today at ",
            "program4": "Based on the information you have provided, you qualify for Certificates and Degrees.",
            "statusSubmitted": "Submitted",
            "statusApproved": "Approved",
            "studentEmail": "student@byupathway.edu",
            "englishConnectURL": "https://www.englishconnect.org",
            "title": "Application Dashboard",
            "nextStepsTitle": "Next Steps",
            "pathwayConnectNextStep1": "1. Register on {PC} course.",
            "pathwayConnectNextStep2": "2. Select your gathering time.",
            "pathwayConnectNextStep3": "3. Go to login and start your student experience.",
            "continueButton": "Continue",
            "certificatesDegreesNextStep": "Use your institutional email to login: ",
            "goToLoginButton": "Go to Login"
        }
    },
    "sp": {
        "loginScreen": {
            "title": "Welcome to",
            "onboardingCarousel": [
            {
                "title": "Notifications",
                "description": "Receive the latest notifications directly to your mobile device to stay updated on important deadlines, submitted cases, when registration opens, and more!. We will inform you about everything so you don't miss anything."
            },
            {
                "title": "Services",
                "description": "If you are experiencing an issue, you can create, update, and review submitted cases. You also have easy access to services like official transcript requests, enrollment verification, applying for graduation, and registering for upcoming terms."
            },
            {
                "title": "AI Assistance",
                "description": "Access AI Assistance designed especially for you!. This assistance can help you frequently with asked questions, specific course inquiries, and improve your English. You can find this resource in the 'AI Assistans' app."
            }
            ],
            "buttons": [
            {
                "label": "Sign In"
            },
            {
                "label": "Not a Student"
            }
            ],
            "termsText1": "By downloading, accessing, or using Companion, you agree to these ",
            "termsText2": "Terms of Use",
            "termsText3": ". Please read them carefully before using the app.",
        },
        "notStudentScreen": {
            "banner": "BYU-Pathway Worldwide provides access to spiritually based degrees completely online at an affordable price.",
            "ourStudents&Alumni": {
            "title": "Our Students & Alumni",
            "testimonialsCarousel": [
            {
                "text": "There is never a perfect time to finish your degree. There will always be things that make it hard, but you can do hard things. I learned exactly what I needed to learn and it not only helped me academically, it helped me in my life!."
            },
            {
                "text": "I decided to try my best to pave the way for my dream of earning a degree by enrolling at BYU-Pathway Worldwide courses."
            },
            {
                "text": "As a non-latter-day Saint, joining BYU-Pathway bought me initial apprehension. However, I was immediately greeted with open arms by the missionaries and my classmates."
            }
                ]
            },
            "degreesInformation": {
            "title": "Degrees Information",
            "card": {
                "title": "Want a Better Job Before You Graduate?",
                "description": "Earn a Job-Ready Certificate While Earning a Bachelor's Degree.",
                "button": "View Degrees"
            }
            },
            "moreInformationSection": {
            "title": "More Information",
            "cards": [
                {
                "applyPCToday": "Apply to Pathway Connect Today",
                "description": "Start Your Journey",
                "buttonLabel": "Apply Now"
                },
                {
                "learnMore": "Learn More About Pathway Connect",
                "buttonLabel": "Request Info"
                },
                {
                "help": "Need Help? Our AI Assistant Has Answers",
                "buttonLabel": "AI Assistant"
                }
            ],
            "finalButton": "Go to Login"
            }
        },
        "authenthicationLoadingPage": {
            "title": "Processing Authentication..."
        },
        "authScreen": {
            "runningInProductionMode": "Running in Production mode - using real authentication",
            "errorAddingStudentGUID": "Error adding studentGUID to request:",
            "loadingStudentExperience": "Loading Student Experience..."
        },
        "menuScreen": {
            "greeting": "Hello 👋🏻, {studentName}",
            "appsSection": {
                "title": "Apps",
                "appsCarousel": [
                    { "aiAssistance": "AI Assistance" },
                    { "academicCenter": "Academic Center" },
                    { "network": "Network" },
                    { "jobs": "Jobs" },
                    { "ec3": "EC3" },
                    { "openAllApps": "Open All Apps" }
                ]
            },
            "notificationsSection": {
                "title": "Latest Notifications",
                "viewAllButton": "View All Notifications"
            },
            "academicProgressSection": {
                "title": "My Academic Progress",
                "programsCarousel":[
                    {
                    "subject": "Religion",
                    "institution": "BYU-Idaho",
                    "credits": {
                        "label": "Credits",
                        "Value": "8"
                    },
                    "progressBar": {
                        "percentage": 60,
                        "label": "% Completed"
                        }
                    }
                ]
            }
        },
        "academicProgress": {
            "loadingEnrollmentData": "Loading enrollment data...",
            "errorLoadingEnrollmentData": "Error loading enrollment data",
            "noEnrollmentFound": "No enrollment found for this program",
            "myAcademicProgress": "My Academic Progress",
            "gpaLabel": "GPA:",
            "gpaNotAvailable": "N/A",
            "disclaimer": "* The information displayed here is only an interpretation of your Degree Progress Audit and does not constitute your official academic record. If you have questions or need clarification, please contact your mentor or schedule a meeting with an Academic Advisor.",
            "goBack": "Go Back",
            "completed": "Completed",
            "credits": "Credits"
        },
        "notificationsScreen": {
            "noNotificationsTitle": "No Notifications Available",
            "noNotificationsMessage": "There are no items available at this time."
        },
        "aiAssistanceScreen": {
            "title": "Companion Assistant",
            "infoPopup": {
                "message": "This artificial intelligence (AI) chatbot is powered by generative AI technology that refers to the BYU-Pathway website and Support Knowledge Base website. This chatbot can analyze questions, search the mentioned websites, and summarize potentially relevant information. Generative AI is not always correct. Please personally confirm the answer provided by this chatbot by reading the sections it identifies in the mentioned websites. Use of this chatbot is anonymous. Do not enter any personal information. By using this chatbot, you agree that anything you enter can be saved and reviewed by Church personnel to improve this chatbot and make it more accurate",
                "button": "Acknowledge"
            },
            "assistantSelection": {
                "loading": "Loading Assistant...",
                "hello": "Hello Companion!"
            },
            "typeBoxMessage" : "Type a message...",
            "assistantSwitcher": {
                "title" :"AI Assistats",
                "options": [
                    { "label": "Companion Assistant" },
                    { "label": "Course Assistant" }
                ]
            }
        },
        "appsMenuScreen": {
            "title": "Apps",
            "appsGrid": [
                { "AcademicCenter": "Academic Center" },
                { "Tickets": "Tickets" },
                { "Network": "Network" },
                { "Registration": "Registration" },
                { "Jobs": "Jobs" }
                ]
        },
        "academicCenterScreen": {
            "recommendedActions": {
            "title": "Recommended Actions",
            "noEnrollmentDataAvailable": "No enrollment data available",
            "noEnrollmentsAvailable": "No enrollments available",
            "loadingEnrollmentData": "Loading enrollment data...",
            "carousel": [
                {
                "ResultHolds": {
                    "title": "Result Holds",
                    "description": "Account Holds require you to follow specific steps to register for and complete course.",
                    "button": "Take Action"
                }
                },
                {
                "EcclesiasticalEndorsement": {
                    "title": "Ecclesiastical Endorsement",
                    "description": "It is time to renew your Ecclesiastical Endorsement.",
                    "button": "Take Action"
                }
                },
                {
                "HerbertJGrantScholarship": {
                    "title": "Herbert J. Grant Scholarship",
                    "description": "Apply to HJG Scholarship by March 21.",
                    "button": "Take Action"
                }
                },
                {
                "YouDidIt": {
                    "title": "🏆 You did it",
                    "description": "Great job! You completed all the recommended actions."
                }
                }
            ]
            },
            "services": {
            "title": "Services",
            "carousel": [
                { "enrollmentVerification": "Enrollment Verification" },
                { "officialTransferRequest": "Official Transfer Request" },
                { "academicAcception": "Academic Acception" },
                { "graduationApplication": "Graduation Application" },
                { "allServices": "All Services" }
            ]
            },
            "academicProgress": {
                "title": "Academic Progress",
                "noEnrollmentDataAvailable": "No enrollment data available",
                "noEnrollmentsAvailable": "No enrollments available",
                "loadingEnrollmentData": "Loading enrollment data...",
                "carousel": [
                    {
                    "program": {
                    "courseTitle": "Software Development",
                    "institution": "BYU-Idaho",
                    "credits": "credits",
                    "progressBar": {
                        "percentage": 75,
                        "label": "Completed"
                    },
                    "c1": "C1: Technical Support Engineer",
                    "c2": "C2: It Fundamentals",
                    "c3": "C3: System Administration",
                    "GPA": "GPA: 3.871",
                    "button": "Details"
                    }
                    }
                ]
            },
            "courseRegistration": {
                "title": "Course Registration",
                "carousel": [
                    {
                    "term": "2025 Term 2",
                    "status": "Registered",
                    "courses": [
                        { "code": "COMM122", "name": "Interpersonal Communications" },
                        { "code": "IT350", "name": "Network Configuration and Design" },
                        { "code": "R1KY301", "name": "Power Platform" }
                    ],
                    "button": "Details"
                    },
                    {
                    "term": "2025 Term 3",
                    "status": "Not Registered",
                    "courses": [
                        { "code": "COMM122", "name": "Interpersonal Communications" },
                        { "code": "IT350", "name": "Network Configuration and Design" },
                        { "code": "R1KY301", "name": "Power Platform" }
                    ],
                    "button": "Details"
                    }
                ]
            },
            "courseAccess": {
            "title": "Course Access",
            "goToClass":{
                "title": "Go to Class",
                "description": "Open your Canvas Dashboard to continue with your assigments."
            }
            }
        },
        "hjgSection1Screen": {
            "header": {
                "title": "Heber J. Grant Application"
            },
            "descriptionHJG": {
                "title": "Heber J. Grant Scholarship",
                "description": "BYU-Pathway Worldwide offers a needs based scholarship named after Heber J. Grant, a former president of The Church of Jesus Christ of Latter-day Saints. To be eligible to receive this scholarship, you must complete this informational module.",
                "moduleSections": {
                    "title": "This module contains five sections:",
                    "items": [
                    "1. Survey",
                    "2. Persistence & Tenacity",
                    "3. Love of Learning",
                    "4. Self-Reliance",
                    "5. Stewardship & Replenishment"
                    ]
                },
                "timeEstimate": "You should anticipate this module taking about 45 to 60 minutes to complete. If you do not have that much time, please wait to start the module at another time. Not only will this resource help BYU-Pathway evaluate your financial needs, it will also help cultivate the characteristics needed for your continued success as a BYU-Pathway student. Thank you.",
                "resourceBenefitText": "Not only will this resource help BYU-Pathway evaluate your financial needs, it will also help cultivate the characteristics needed for your continued success as a BYU-Pathway student. Thank you."
            },
            "bioSection": {
                "title": "Who is Heber J. Grant?",
                "content": "Heber J. Grant was the seventh president of The Church of Jesus Christ of Latter-day Saints. Born in Salt Lake City in 1856, Grant was raised by his mother, Rachel Ridgway Ivins Grant, after his father, Jedediah Grant (a counselor to Brigham Young) died when Heber was only a few days old. Heber was called as a stake president at age 23 and ordained an Apostle two years later. One of the most dramatic incidents in his apostolic service came in 1893, when he sought divine aid to secure loans to save the Church. Grant's efforts protected the Church from financial collapse during a nationwide economic crisis. The characteristics and life of Heber J. Grant embody principles of self-reliance and persistence that will resonate and be a strength to many BYU-Pathway students around the world."
            },
            "form": {
                "sectionTitle": "Section 1: Heber J. Grant Scholarship Survey",
                "sectionDescription": "First, to help us better understand your current needs and situation, please answer following questions:",
                "questions": {
                "parentsUniversityDegree": {
                    "question": "Have either of your parents obtained a university degree?",
                    "options": [
                    "Yes",
                    "No",
                    "I don't know"
                    ]
                },
                "singleParent": {
                    "question": "Are you a single parent?",
                    "options": [
                    "Yes",
                    "No"
                    ]
                },
                
                "reliableHousing": {
                    "question": "Do you have reliable housing?",
                    "options": [
                        "No, I do not have reliable housing and I worry about where I will be living on a monthly basis",
                        "No, I struggle to make monthly housing payments which sometimes puts my housing situation at-risk",
                        "Yes, I have reliable housing but making monthly payments is challenging for me",
                        "Yes, I have reliable housing",
                    ]
                },
                "struggleMeals": {
                    "question": "Do you struggle to have enough food for yourself and your family to eat three meals per day?",
                    "options": [
                    "Yes",
                    "No",
                    "Sometimes"
                    ]
                },
                "accessDevice": {
                    "question": "Do you have access to a device (computer, phone, or tablet) to complete your coursework?",
                    "options": [
                        "No, I need to purchase one and I am not sure how I will afford one",
                        "No, I need to purchase one, but I have a plan to do so",
                        "Yes, I have one but it is not very reliable",
                        "Yes, I have one that will work for academic coursework",
                    ]
                },
                "reliableInternet": {
                    "question": "Do you have access to reliable internet?",
                    "options": [
                        "No, and I am not sure how I will pay for access",
                        "No, but I have a plan to gain access",
                        "Yes, I have access, but I struggle to afford it",
                        "Yes, I have access to daily reliable internet",
                    ]
                },
                "tuitionAffordability": {
                    "question": "Is your tuition affordable for you and your family?",
                    "options": [
                        "No, and I am not sure how I will afford it",
                        "No, but I am working on a plan",
                        "Yes, but I am concerned about ongoing payments",
                        "Yes, I could make a one-time or monthly payments",
                    ]
                },
                "circumstancesAffectingPayment": {
                    "question": "Are there any other circumstances that affect your ability to pay for your education?",
                    "options": [
                        "No",
                        "Yes",
                        "Maybe",
                        "Additional information you would like to share",
                    ]
                },
                "additionalInformation": {
                    "label": "",
                    "placeholder": "Type Here",
                    "description": "(This field appears if 'Additional Information' is selected for the previous question)"
                }
                }
            },
            "nextButton": "Next",
            "saveProgressButton": "Save Progress",
            "alert": "All fields are required",
            "message": "Progress saved.",
            "required": "This field is required"
        },
        "hjgSection2Screen": {
            "header": {
                "title": "Heber J. Grant Application",
                "buttons": [
                { "label": "Save and Exit" },
                { "label": "Leave Without Saving" }
                ]
            },
            "description": {
                "title": "Section 2: Persistence & Tenacity",
                "description": "Poverty defined Heber's growing years, but not negatively. Having little money was a challenge that never deterred him. Wanting to learn to pitch a baseball but not having enough money for a ball, Heber earned the money by shining boots for his mother's boarders. Later he longed to attend the Salt Lake Theatre; instead of feeling sorry that he had no money to buy tickets, he obtained a job as a water carrier for theater patrons and was thus allowed to watch the plays.\n\nAs Heber grew older, his persistence and fortitude were put to good use in business ventures. Offered an appointment to the United States Naval Academy, he opted to stay near his mother and to become a businessman instead. After finishing his schooling at age 16, Heber got a job as a bank clerk and learned bookkeeping. His honesty, ability to work hard, and great desire to learn soon opened up many opportunities. By the time he was 20 years old, he had been made the assistant cashier of Zion's Savings Bank and Trust Company, and he had purchased an insurance agency. The poverty of Heber's youth made him compassionate and prepared him to lead the Church through the aftermath of World War I, the Great Depression, and World War II.",
                "video": {
                "text": "Watch the following video:",
                "transcriptLinkText": "If you would like to read a transcript of this video instead click here"
                }
            },
            "form": {
                "questions": {
                "usedMoneyFor": {
                    "question": "How have you used money or resources to overcome challenges related to your education?",
                    "options": [
                    "Purchased study materials",
                    "Paid for transportation",
                    "Covered living expenses",
                    "Invested in a device for coursework",
                    "Other (please specify)"
                    ]
                },
                "scriptureReview": {
                    "text": "Please choose one of the following scriptures to review:",
                    "links": [
                    "Mosiah 2:14",
                    "Mosiah 27:5",
                    "Doctrine & Covenants 42:42",
                    "Moses 4:25",
                    "Joseph Smith - History 1:55"
                    ]
                },
                "scriptureSelected": {
                    "question": "Which scripture(s) did you select? What are some specific ways work helps us become more self-reliant?",
                    "placeholder": "Type Here"
                }
                }
            },
            "previousButton": "Previous",
            "nextButton": "Next",
            "saveProgressButton": "Save Progress",
            "savedAlertMessage": "Progress saved.",
            "fieldsRequired": "All fields are required",
            "required": "This field is required"
        },
        "hjgSection3Screen": {
            "header": {
                "title": "Heber J. Grant Application",
            },
            "section": {
                "title": "Section 3: Love of Learning",
                "description": "In 1901, Heber J. Grant was called to open and preside over the Japanese Mission. There, Elder Grant dedicated the land for the preaching and reception of the gospel. But the mission did not immediately flourish, partly because of the cultural differences and communication barriers. That did not stop Elder Grant. He worked diligently to learn the new language and to learn of the new culture he was immersed in. Despite the limited missionary success there at the time, Elder Grant oversaw the first translation of the Book of Mormon into Japanese. Of his missionary efforts, President Grant later taught: \"I want you young people to know that in all my labors I got nearer to the Lord, and accomplished more and had more joy while in the mission field than ever before or ever since. Man is that he might have joy, and the joy that I had in the mission field was superior to any I had ever experienced elsewhere.\"\n\nPresident Grant loved to give away books to all those around him; he knew that learning was one of the most important things you could do to further yourself, and he felt a true sense of peace giving away books that had taught him in the past. He gave away thousands of them, most of which he personally inscribed. In giving so many gifts he sometimes lost track of what he had done. \"I once gave a man a book,\" he said, \"and he thanked me very kindly for it, and said, 'Brother Grant, I thoroughly appreciate this book. It is the third copy you have given me of it.'\" After that experience, President Grant kept an index of the books he had given."
            },
            "form": {
                "questions": {
                "question1": {
                    "question": "How did Heber J. Grant earn money to buy a baseball?",
                    "options": [
                    "By shining boots for his mother's boarders",
                    "By carrying water for theater patrons",
                    "By working as a bank clerk",
                    "By selling insurance"
                    ]
                }
                }
            },
            "previousButton": "Previous",
            "nextButton": "Next",
            "saveProgressButton": "Save Progress",
            "progressSavedMessage": "Progress saved.",
            "requiredFieldsAlert":"All fields are required",
            "required": "Please select an answer."
        },
        "hjgSection4Screen": {
            "header": {
                "title": "Heber J. Grant Application"
            },
            "section": {
                "title": "Section 4: Self Reliance",
                "description": "In 1936, seven years into the Great Depression, the United States had yet to emerge from the huge losses and downward trends that began with the stock market crash in 1929. When President Heber J. Grant spoke of the welfare system in 1936, he envisioned that \"no new Church machinery\" would be required but that \"stake and ward organizations, the priesthood quorums, the Relief Society, and the various auxiliary organizations [would] render the maximum service [they] could furnish in the interest of the general welfare of the Church.\" The Lord had already established the organization needed to bless the poor and needy—priesthood quorums were in place, Relief Societies were organized, and the priesthood of God was on the earth.\n\nSince the welfare program was introduced in 1936, members of the Church have labored together to relieve the suffering of those who stand in need. Economic downturns, natural disasters, unemployment, sickness and disability, or times of loss have all required the direction of the priesthood to ensure that needs are met and that individuals and families are blessed. Over the years millions of members have willingly given of their time and talents to bless others.\n\nSince the creation of the Bishop's Storehouse, many United States presidents and other leaders from around the world have come to visit the renowned storehouse and to learn more of how they can implement similar welfare ideologies as did President Heber J. Grant. \"The aim of the Church is to help the people help themselves. Work is to be re-enthroned as the ruling principle of the lives of our Church membership\" (Heber J.\nGrant, in Conference Report, Oct. 1936, 3).",
            },
            "form": {
                "questions": {
                "question1": {
                    "question": "What was the purpose of the welfare program introduced by President Heber J. Grant?",
                    "options": [
                    "To provide government assistance to the unemployed",
                    "To help Church members help themselves and relieve suffering",
                    "To establish new Church machinery for financial aid",
                    "To gather resources for future investments"
                    ]
                }
                }
            },
            "previousButton": "Previous",
            "nextButton": "Next",
            "saveProgressButton": "Save Progress",
            "progressSavedMessage": "Progress saved.",
            "requiredFieldsAlert": "All fields are required",
            "required": "Please select an answer."
        },
        "hjgSection5Screen": {
            "header": {
            "title": "Heber J. Grant Application",
            },
            "section": {
            "title": "Section 5: Stewardship & Replenishment"
            },
            "form": {
            "questions": {
                "lowTuition": {
                "question": "BYU-Pathway's low tuition is made possible both by support from The Church of Jesus Christ of Latter-day Saints and from philanthropic donors. If you would like to thank the individuals who have donated money to lower your tuition costs, what would you say to them? (Your comment may be shared with current and future donors.)",
                "placeholder": "Type Here"
                }
            }
            },
            "previousButton": "Previous",
            "submitButton": "Submit",
            "saveProgressButton": "Save Progress",
            "progressSavedMessage": "Progress saved.",
            "requiredFieldsAlert": "All fields are required",
            "required": "This field is required",
            "thankYouMessage":"Please enter your thank you message.",
            "submissionAlerts": {
            "successMessage": "Your request has been successfully submitted.",
            "errorMessage": "Not found",
            "loadingDescription": "Submitting Heber J. Grant Application..."
            }
        },
        "enrollmentVerificationScreen": {
            "title": "Enrollment Verification",
            "description": "This form allows students to request official enrollment verification to provide to a third party as proof of their enrollment at BYU Pathway Worldwide.",
            "other": "For details about your enrollment courses, please visit your student portal. On the homepage, navigate to Classes, tile for app to the date enrollment information.",
            "form": {
                "question1": {
                    "question": "Which institution would you like your enrollment verification for?*",
                    "description": "Enrollment Verifications are specific to enrollment.",
                    "options": [
                        "BYU-Idaho",
                        "Ensign College",
                        "BYU Pathway"
                    ]
                },
                "question2": { 
                    "question": "What would you like to include on your enrollment verification?",
                    "description": "All verifications will list your full name and your student ID. Choose what else you'd like to provide below.",
                    "options": [
                        "Enrollment status",
                        "Date of birth",
                        "Address",
                        "Social security number",
                        "Declared programs",
                        "Grade point average (GPA)",
                        "Earned credentials, certificates and degrees",
                        "Withdrawal date, if applicable",
                        "Academic standing",
                        "Tuition cost per credit hour"
                    ]
                },
                "question3": {
                    "question": "Would you like to include details about your currently enrolled courses?",
                    "description": "The following information will be provided for any courses you are currently enrolling. Course code, section, title, credits and instructor name.",
                    "options": [
                        "Just include information about my current courses",
                        "No, do not include information about my current courses"
                    ]
                },
                "question4": {
                    "question": "What would you like to include on your enrollment verification?",
                    "description": "All verification will list your full name and your student ID. Choose what else you'd like to provide below.",
                    "options": [
                        "Provide current term summary",
                        "Provide future term summary"
                    ]
                },
                "question5": {
                    "question": "Which reason best describes why you need an enrollment verification?",
                    "options": [
                        "Provide to employer",
                        "Housing request",
                        "Scholarship / Financial aid",
                        "Other"
                    ]
                },
                "Button": "Submit"
            }
        },
        "officialTranscriptScreen": {
            "title": "Official transcript",
            "firstScreen": {
                "description": "An Official Transcript is a copy of your permanent academic record issued by Student Record & Resgitration and is typically sent to third parties, e.g., (colleges, graduate programs companies).*",
                "unofficialTranscript":"An Unofficial Transcript is only avalible through your student account and is typically for personal use.",
                "note":"* Please contact your recipient regarding which transcript type they will accpt and meets their requirements.",
                "button": "Continue"
            },
            "secondScreen": {
                "title": "Official transcript Request Policy",
                "policyDetails": {
                "p1": "BYU-Pathway Worldwide will cover the cost of the first two official transcript requests for each institution:",
                "listItems": [
                    "BYU-Pathway Worldwide",
                    "BYU-Idaho",
                    "Ensign College"
                ],
                "p2": "Additional official transcript requests may be subject to a fee. Students are encouraged to plan accordingly.",
                "p3": "Students may view their unofficial transcripts at no cost through their student portal."
                },
                "form": {
                "question1": {
                    "question": "From which institution are you requesting your transcript?",
                    "answers": [
                    "Select item",
                    "BYU-Pathway Worldwide",
                    "BYU-Idaho",
                    "Ensign College"
                    ]
                },
                "question2": {
                    "question": "*Name of institution, group, or person receiving this transcript:",
                    "answerBox": "Type Here"
                },
                "question3": {
                    "question": "*Enter the email of the recipient that should receive your official transcript",
                    "answerBox": "Type Here"
                }
                },
                "errorAlert": {
                "title": "Error!",
                "description": "Not found",
                "button": "Go back"
                },
                "validation": {
                "requiredField": "This field is required",
                "invalidEmail": "Invalid email"
                },
                "alertMessages": {
                "requestSuccess": "Your request has been successfully submitted.",
                "networkError": "Network error",
                "submittingRequest": "Submitting transcript request..."
                },
                "userDataError": "Error loading user data",
                "continueButton": "Continue"
            }
        },
        "AcademicExceptionsScreen": {
            "title": "Academic Exceptions",
            "disclaimer": {
                "title":"Disclaimer:",
                "disclaimer":"Submitting this request does not guarantee approval. Approval or denial of this petition may affect your tuition, academic status international status, etc. It is your responsibility to explore and understand these impacts. Decisions by the committee are permanent and final."
            },
            "form": {
                "question1": {
                    "question": "What academic exception would you like to escalate?",
                    "answers": [
                        "Select item",
                        "Withdraw/Drop",
                        "Other"
                    ]
                },
                "withdrawDrop": {
                    "question": "Select the term from which you would like to submit the exception",
                    "answers": [
                        "Select item",
                        "One Option"
                    ],
                    "options": {
                    "withdraw": "Withdraw",
                        "drop": "Drop"
                    }
                },
                "Other": {
                    "question": "Please explain what is your academic exception petition.*",
                    "typingBox": "Type here"
                },
                "button": "Continue",
                "noCoursesFound": "No courses found",
                "selectCourses": "Select the courses you would like to send the exception for. *",
                "whatToRequest": "What would you like to request? *",
                "lastDateParticipation": "What was your approximate last date of participation in the course(s)? *",
                "reasonForNotDropping": "What prevented you from logging into the registration portal and dropping your course(s) before the drop deadline? *",
                "furtherInfoNotDropping": "Please provide any further information (include specific dates of events where possible) of why you did not drop your course(s) before the deadline. *",
                "whyDropAccurate": "Why would a drop be a more accurate reflection of your experience in the course? *",
                "reasonForNotWithdrawing": "What prevented you from logging into the registration portal and withdrawing from your course(s) before the withdrawal deadline? *",
                "furtherInfoNotWithdrawing": "Please provide any further information (include specific dates of events where possible) of why you did not withdraw from your course(s) before the deadline. *",
                "whyWAccurate": "Why would a \"W\" grade [or a drop] be a more accurate reflection of your experience in this/these course(s)? *",
                "impactOfDenial": "If your petition is denied what does this mean for you going forward? *",
                "circumstancesPartialWithdrawal": "What were the circumstances that led you to needing to petition for some, but not all of your classes this semester? *"
            },
            "successAlert": {
                "Title": "Success!",
                "message": "You request has been successfully submitted.",
                "button": "Go back"
            },
            "courseWithdrawalRequest": {
                "title": "Course Withdrawal Request:",
                "description1": "The drop date will be backdated to the Withdraw Course Deadline and the student will receive a \"W\" grade on their transcript.",
                "description2": "A \"W\" grade does not affect GPA, but indicates that the student started the course and later withdrew."
            },
            "courseDropRequest": {
                "title": "Course Drop Request:",
                "description": "The drop date will be backdated to the Drop/Auto-Drop Deadline (day 8 of the semester), the course grade will be removed from the record."
            },
            "common": {
                "required": "This field is required",
                "atLeastOne": "Please select at least one course",
                "validDate": "Insert a valid date",
                "userDataError": "Error loading user data",
                "errorLoading": "Error loading Academic Exceptions",
                "submitting": "Submitting academic exception request...",
                "notFound": "Not found",
                "networkError": "Network error",
                "typeHere": "Type here"
            }
        },
        "graduationApplicationScreen": {
            "title": "Graduation Application",
            "description": "This application is for English Connect, Pathway Connect, and all Certificates & Degrees offered through BYU-Pathway Worldwide in partnership with BYU-Idaho and Ensign College.",
            "form": {
            "secondaryDescription": "You will need to fill out a separate graduation application for each credential you are applying for.",
            "termSemesterQuestion": {
                "question": "In which term or semester did/will you complete the requirements for the credential you are applying for?",
                "options": {
                "default": "Select a term / semester",
                "placeholder": "",
                "option1": "2025 - Term 2",
                "option2": "2025 - Term 3"
                }
            },
            "credentialRequiredQuestion": {
                "question": "What credential are you completing requirements for?",
                "options": [
                        "Select credential",
                        "Pathway Connect Completion Certificate",
                        "English Connect Completion Certificate",
                        "Certificate",
                        "Associate's Degree",
                        "Bachelor's Degree"
                    ]
            },
            "certificateInstitutionQuestion": {
                "question": "Which institution will you be receiving your diploma from? *",
                "options": {
                "default": "Select one",
                "BYU-Idaho": "BYU-Idaho",
                "Ensign College": "Ensign College"
                }
            },
            "certificateNameLabel": "What is the name of the certificate you are applying for? *",
            "certificateNamePlaceholder": "",
            "declaredMajorLabel": "What is your currently declared major? *",
            "declaredMajorPlaceholder": "",
            "catalogYearLabel": "What is your current catalog year? *",
            "catalogYearPlaceholder": "",
            "commencementDeadlineMessage": "The deadline has passed to have your name included in the program for the upcoming in-person commencement on {formattedDeadline}. Students are still welcome to purchase a cap and gown and attend the in-person commencement event, but will not have their name in the program."
            },
            "requiredFieldsNote": "Fields marked with * are required.",
            "submitButton": "Submit",
            "validation": {
            "required": "This field is required"
            },
            "loading": {
            "initialLoading": "Loading user data",
            "submitLoading": "Submitting graduation application..."
            },
            "alert": {
            "notFound": "Not found",
            "networkError": "Network error",
            "successMessage": "Your request has been successfully submitted."
            },
            "errorState": {
            "userDataError": "Error loading user data"
            }
        },
        "submittedRequestsScreen": {
            "filter": {
            "label": "Filter by:",
            "options": [
                "All Requests",
                "Open Requests",
                "Closed Requests"
            ],
            "emptyOptions": [
                "No requests found.",
                "No open requests found.",
                "No closed requests found."
            ]
            },
            "goBack": "Go Back",
            "statusLabels": {
            "active": "Active",
            "hold": "Hold",
            "closed": "Closed"
            },
            "loadingData": "Loading...",
            "errorLoadingUserData": "Error loading user data",
            "errorFetchingRequests": "Error: ",
            "emptyListDescription": "No {filter} available."
        },
        "submittedRequestsDetailsScreen": {
            "loadingData": "Loading...",
            "errorLoadingUserData": "Error loading user data",
            "requestDetailsHeader": "Request Details",
            "titleLabel": "Title:",
            "dateCreatedLabel": "Date Created:",
            "requestNumberLabel": "Request number:",
            "statusLabels": {
            "active": "Active",
            "hold": "Hold",
            "closed": "Closed"
            },
            "alertMessages": {
            "commentSuccess": "Your comment has been successfully submitted.",
            "reopenSuccess": "Your request has been successfully reopened.",
            "notFound": "Not found",
            "networkError": "Network error",
            "loadingDetails": "Loading request details..."
            },
            "commentButtonText": "Comment",
            "reopenButtonText": "Reopen",
            "goBackButtonText": "Go Back"
        },
        "servicesScreen": {
            "title": "Services",
            "servicesOptions": [
                {
                    "officialTranscript": "Official Transcript",
                    "description": "Request and receive official transcripts for academic and professional purposes."
                },
                {
                    "academicExceptions": "Academic Exceptions",
                    "description": "Submit and Review Requests for an Exception to Academic Policies"
                },
                {
                    "enrollmentVerification": "Enrollment Verification",
                    "description": "Obtain Official Proof of Enrollment for Employment, Scholarship, or Other Verifications"
                },
                {
                    "graduationApplication": "Graduation Application",
                    "description": "Apply for Graduation and Ensure You Meet All Requirements"
                },
                {
                    "registration": "Registration",
                    "description": "Register for a Course, Manage Your Class Schedule, and Access Important Enrollment Deadlines"
                },
                {
                    "submitRequest": "Submit Requests",
                    "description": "Lorem Ipsum Dolor sit amet, consectetur adipiscing elit. Curabitur risus lacus"
                }
            ]
        },
        "ticketsScreen": {
            "title": "Tickets",
            "ticketsOptions": [
                {
                    "openTickets": "Open Tickets",
                    "description": "Track Ongoing tickets in progress"
                },
                {
                    "closedTickets": "Closed Tickets",
                    "description": "View tickets that have been resolved"
                },
                {
                    "submitNewTicket": "Submit New Ticket",
                    "description": "Create and submit a new request"
                },
                {
                    "contactUs": "Contact Us",
                    "description": "Call our support line for assistance"
                }
            ]
        },
        "casesProvider": {
            "loadingState": "Loading...",
            "errorState": "Error: {errorMessage}",
            "userDataError": "Error loading user data",
            "caseStates": {
            "0": "Active",
            "1": "Resolved",
            "2": "Cancelled"
            },
            "caseStatuses": {
            "1": "In progress",
            "2": "Hold",
            "5": "Resolved",
            "6": "Cancelled",
            "2000": "Combined"
            },
            "openTicketsTitle": "Open Tickets",
            "closedTicketsTitle": "Closed Tickets",
            "noOpenTicketsAvailable": "No open tickets available",
            "noClosedTicketsAvailable": "No closed tickets available",
            "status": "Status:",
            "ticketDetails": {
            "title": "Ticket Details",
            "fields": {
                "titleLabel": "Title:",
                "dateCreatedLabel": "Date Created:",
                "ticketNumberLabel": "Ticket number:"
            }
            }
        },
        "openCaseDetailScreen": {
            "alerts": {
            "commentSuccess": "Your comment has been successfully submitted.",
            "notFound": "Not found",
            "networkError": "Network error"
            },
            "loading": {
            "main": "Loading..."
            },
            "buttons": {
            "comment": "Comment"
            }
        },
        "closedCaseDetailScreen": {
            "reopenCase": {
            "comments": "Reopen ticket",
            "successMessage": "Your case has been successfully reopened."
            },
            "alerts": {
            "notFound": "Not found",
            "networkError": "Network error"
            },
            "loading": {
            "description": "Loading case details..."
            },
            "buttons": {
            "reopen": "Reopen"
            }
        },
        "contactUsPopUp": {
            "helpMessage": "Need help? —You can call us at",
            "phoneNumber": "+1 (801) 655-6424",
            "hours": "Mon–Fri, 9 AM to 5 PM (local time)",
            "callButton": "Call +1 (801)-655-6424"
        },
        "submitNewTicketScreen": {
            "title": "Submit a New Ticket",
            "form": {
            "mainTopic": {
                "label": "Main Topic",
                "options": [
                "Select an item",
                "Canvas – Course Issue",
                "Canvas – Login Issue",
                "Canvas Access",
                "EnglishConnect Module – Login Issue",
                "EnglishConnect",
                "EnglishConnect Module – Course Issue",
                "Finance – Payment Issue",
                "Finance – Heber J. Grant Discount",
                "Gathering Questions",
                "Hold – Finance",
                "Hold – Gathering",
                "Hold - Ecclesiastical Endorsement",
                "Meet with an Academic Advisor",
                "Mentoring",
                "Microsoft Office – Login Issue",
                "Missionary Support",
                "Student Portal – Login Issue",
                "Student Wellness",
                "Transfer Evaluation",
                "Work Study",
                "Other"
                ]
            },
            "detailedDescription": {
                "label": "Detailed Description",
                "placeholder": "Type Here"
            },
            "preferredContactMethod": {
                "label": "Preferred Contact Method",
                "options": [
                "Select an item",
                "Email",
                "Phone"
                ]
            },
            "contactInfo": {
                "label": "Contact Info",
                "placeholder": "Type Here"
            },
            "screenshotUpload": {
                "label": "Submit a Screenshot with Your Ticket",
                "buttonText": "Attach File",
                "description": "This file must be a file of type PNG-JPG-JPEG."
            }
            },
            "submitButton": "Submit",
            "submissionLoading": "Submitting your ticket...",
            "submissionSuccessMessage": "Your ticket has been successfully submitted. Thank you!",
            "submissionErrorMessage": "There was an issue submitting your ticket. Please try again later."
        },
        "contactUsScreen": {
            "text": "Need help? -You can call us at 1-801-655-6424.\nMon–Fri, 9am to 5pm (local time).",
            "callButton": {
                "label": "Call +1 (801)-655-6424"
            }
        },
        "networkScreen": {
            "title": "Network",
            "networkOptions": [
                {
                    "mentorInformation": "Mentor Information",
                    "description": "Access details about mentors and how to connect with them."
                },
                {
                    "gatheringInformation": "Gathering Information",
                    "description": "Find details about upcoming gatherings, locations, and schedules."
                },
                {
                    "contactUs": "Contact Us",
                    "description": "Call our support line for assistance."
                }
            ]
        },
        "mentorInformationScreen": {
            "title": "Mentor Information",
            "description": "BYU Pathway Mentors are a resource to students through their education journey, offering strategies for success, important reminders, connecting students to support resources, and providing encouragement to help students achieve their goals.",
            "noMentorMessage": "No Mentor Information available at this time.",
            "loading": "Loading mentor information"
        },
        "mentorDisplay": {
            "yourMentorInformation": "Your Mentor Information",
            "name": "Name:",
            "email": "Email:",
            "phone": "Phone:",
            "notAvailable": "Not available",
            "requestAMentor": "Request a Mentor",
            "mentorConcernForm": "Mentor Concern Form"
        },
        "requestMentor": {
            "headerTitle": "Request a Mentor",
            "pageTitle": "Request a Mentor",
            "detailsLabel": "Please describe in detail why you would like to request a mentor.",
            "detailsPlaceholder": "Type here",
            "submitButton": "Submit",
            "requiredField": "This field is required",
            "successMessage": "Mentor assigned successfully",
            "errorMessage": "Failed to assign mentor",
            "loadingDescription": "Submitting Request..."
        },
        "mentorConcern": {
            "headerTitle": "Mentor Concern Form",
            "generalCategoryQuestion": "Please select a general category *",
            "generalCategoryOptions": {
            "default": "Select an item",
            "option1": "The Mentor has not responded and 24 hours have passed.",
            "option2": "The Mentor did not provide needed answers or information.",
            "option3": "I would like the contact information for my Mentor.",
            "option4": "I am not assigned a Mentor and am currently enrolled."
            },
            "detailsLabel": "Please add any additional details about the experience with the Mentor.",
            "detailsPlaceholder": "Type here",
            "contactMethodQuestion": "Preferred Contact Method *",
            "contactMethodOptions": {
            "default": "Select an item",
            "option1": "Email",
            "option2": "Phone"
            },
            "contactInfoLabel": "Contact Info",
            "contactInfoPlaceholder": "Type here",
            "requiredFieldsNote": "Fields marked with * are required",
            "submitButton": "Submit",
            "validationRequired": "This field is required",
            "successMessage": "Your form has been successfully submitted. Thank you!",
            "errorMessage": "We couldn't process your concern at this time. Please try submitting it again in a few minutes."
        },
        "gatheringInformationScreen": {
            "title": "Gathering Information",
            "noGatheringsMessage": "You are not currently involved in any gathering.",
            "loadingDescription": "Loading gathering information...",
            "pathwayConnectTitle": "PathwayConnect Gathering Information",
            "englishConnectTitle": "EnglishConnect Gathering Information",
            "noGathering": "You are not currently enrolled in any gatherings."
        },
        "jobsScreen": {
            "title": "Jobs",
            "options": [
                {
                "jobsAvailable": "Jobs Available",
                "description": "Explore entry-level job opportunities that match your skills and career goals."
                },
                {
                "jobsAppliedTo": "Jobs Applied To",
                "description": "Track the status of your job application and stay updated on potential opportunities."
                },
                {
                "jobProfile": "Job Profile",
                "description": "Create and manage your job profile to showcase your skill and experience."
                }
            ]
        },
        "jobsAvailableScreen": {
            "title": "Job Opportunities",
            "noJobsAvailableMessage": "No jobs available at the moment. Please check back later!",
            "browseJobsButton": "Browse All Jobs",
            "searchPlaceholder": "Search for jobs...",
            "filterButton": "Filter",
            "errorLoadingJobs": "Error loading Job Opportunities",
            "processingRequest": "Processing request",
            "jobDetails": "Job Details",
            "company": "Company:",
            "title": "Title:",
            "dateCreated": "Date Created:",
            "description": "Description",
            "addResumePrompt": "Add your resume here: (in PDF) *",
            "resumeRequired": "Resume is required.",
            "noResumeSelected": "No resume file has been selected.",
            "updateJobApplication": "Update Job Application",
            "notFound": "Not found",
            "applicationUpdatedSuccessfully": "Your job application has been successfully updated.",
            "submissionFailed": "Submission failed: ",
            "unknownError": "Unknown error",
            "networkError": "Network error. Please check your internet connection.",
            "removingApplication": "Removing job application",
            "removeApplication": "Remove Application",
            "applicationRemovedSuccessfully": "Your job application has been successfully removed.",
            "removalFailed": "Removal failed: ",
            "loadingLanguage": "Loading language...",
            "applyingToJobOpportunity": "Applying to job opportunity...",
            "applyForThisJob": "Apply for this Job",
            "applicationSubmittedSuccessfully": "Your job application has been successfully submitted."
        },
        "jobsAppliedToScreen": {
            "noJobsAvailableMessage": "No jobs available at the moment. Please check back later!",
            "errorLoadingJobs": "Error loading Job Opportunities",
            "processingRequest": "Processing request",
            "jobDetails": "Job Details",
            "company": "Company:",
            "title": "Title:",
            "dateCreated": "Date Created:",
            "description": "Description",
            "addResumePrompt": "Add your resume here: (in PDF) *",
            "resumeRequired": "Resume is required.",
            "noResumeSelected": "No resume file has been selected.",
            "updateJobApplication": "Update Job Application",
            "notFound": "Not found",
            "applicationUpdatedSuccessfully": "Your job application has been successfully updated.",
            "submissionFailed": "Submission failed: ",
            "unknownError": "Unknown error",
            "networkError": "Network error. Please check your internet connection.",
            "removingApplication": "Removing job application",
            "removeApplication": "Remove Application",
            "applicationRemovedSuccessfully": "Your job application has been successfully removed.",
            "removalFailed": "Removal failed: "
        },
        "jobProfileNavScreen": {
            "title": "Job Profile",
            "submitProfile": "Submit Profile",
            "complete": "Complete",
            "sections": [
                {
                "section1": "Section 1",
                "description": "Share your job status, give sharing permissions, and list your work history."
                },
                {
                "section2": "Section 2",
                "description": "Share how we can reach to you your work preference, language skills, education, and access to technology."
                },
                {
                "section3": "Section 3",
                "description": "You will be directed to convenient web app to complete a quick internet speed test and typing speed test."
                }
            ],
            "footerText": "Please, complete your profile.",
            "errorLoadingJobs": "Error loading Job Opportunities"
        },
        "jobProfileSection1Screen": {
            "title": "Job Profile - Section 1",
            "introduction": "Welcome to Jobs Profile. This tool helps us gather key information to support your career goals. Please fill it out honestly and completely so we can best understand your goals. If you need a break, click Save Progress to return and continue later.",
            "missingFields": "There are missing or invalid fields:",
            "requiredEmploymentHistory": "Employment History can't be empty",
            "form": {
                "termsOfUse": {
                    "title": "Terms of Use",
                    "questions": [
                        {
                        "question1": "Are you seeking a better job?",
                        "options": [
                            "Select an item",
                            "Yes",
                            "No"
                            ]
                        },
                        {
                        "question2": "Do we have your permission to share your information with other departments in the Church of Jesus Christ of Latter-day Saints?",
                        "options": [
                            "Select an item",
                            "Yes",
                            "No"
                            ]   
                        },
                        {
                        "question3": "Do we have your permission to share your information with third party hiring firms and other employers?",
                        "options": [
                            "Select an item",
                            "Yes",
                            "No"
                            ]
                        }
                    ],
                    "infoButton": {
                        "label": "Click here for details on what information may be shared",
                        "popup": {
                            "content": [
                                "The answers you provide in this survey.",
                                "Your contact information including name, address, phone number, email, etc.",
                                "Any credentials you have earned, including a Pathway Connect Completion Certificate and/or any online certificates and degrees you have completed or are currently working toward. This could also include any relevant coursework.",
                                "Information related to marketable skills and language abilities."
                            ],
                            "closeButton": "Close"
                        }
                    }
                },
                "employmentHistory": {
                    "title": "Employment History",
                    "description": "Please share with us your employment history starting one year before you started BYU Pathway Worldwide.",
                    "buttons": {
                        "add": {
                            "label": "Add +",
                            "labelBack": "Go Back",
                        },
                        "reviewSavedItems": {
                        "label": "Review Saved Items",
                        "count": 0
                        }
                    }
                },
                "employmentItemDetails": {
                    "titleLabels": {
                    "title": "Title:",
                    "companyName": "Company Name:",
                    "type": "Type:",
                    "startDate": "Start Date:",
                    "endDate": "End Date:",
                    "monthlyEarnings": "Monthly Earnings:",
                    "hoursPerWeek": "Hours Per Week:",
                    "reasonForLeaving": "Reason for Leaving:"
                    },
                    "pickerOptions": {
                    "type": {
                        "selectOne": "Select one",
                        "remote": "Remote",
                        "local": "Local",
                        "entrepreneurship": "Entrepreneurship"
                    },
                    "hoursPerWeek": {
                        "selectOne": "Select one"
                    },
                    "leavingReason": {
                        "selectOne": "Select one",
                        "betterJobOpportunity": "Better Job Opportunity",
                        "internalPromotion": "Internal Promotion",
                        "termination": "Termination",
                        "resignation": "Resignation",
                        "relocation": "Relocation",
                        "careerChange": "Career Change",
                        "education": "Education",
                        "other": "Other"
                    }
                    },
                    "currentlyWorking": "Currently working at this role",
                    "buttons": {
                    "goBack": "Go Back",
                    "removeJobHistory": "Remove job history"
                    },
                    "alert": {
                    "confirmDeleteTitle": "Confirm Delete",
                    "confirmDeleteMessage": "Are you sure you want to delete this job history?",
                    "cancelButton": "Cancel",
                    "deleteButton": "Delete",
                    "deleteFailedMessage": "Failed to delete item."
                    },
                    "loading": "Loading..."
                },
                "addEmployment": {
                    "addEmploymentTitle": "Add Employment",
                    "titleLabel": "Title: *",
                    "companyNameLabel": "Company Name: *",
                    "typeLabel": "Type: *",
                    "startDateLabel": "Start Date: *",
                    "endDateLabel": "End Date: *",
                    "workingAtThisRoleLabel": "I'm currently working in this role",
                    "monthlyEarningsLabel": "Monthly Earnings in Local Currency: *",
                    "hoursPerWeekLabel": "Hours Per Week: *",
                    "leavingReasonLabel": "Reason for Leaving: *",
                    "addButton": "Add",
                    "notfound": "Not found",
                    "sendDataToLocalStorage": "Send data to local storage",

                    "typeOptions": {
                        "selectOne": "Select one",
                        "remote": "Remote",
                        "local": "Local",
                        "entrepreneurship": "Entrepreneurship"
                    },
                    "hoursPerWeekOptions": {
                        "selectOne": "Select one",
                        "range1_9": "1-9",
                        "range10_19": "10-19",
                        "range20_29": "20-29",
                        "range30_39": "30-39",
                        "range40_plus": "40+"
                    },
                    "leavingReasonOptions": {
                        "selectOne": "Select one",
                        "betterJobOpportunity": "Better Job Opportunity",
                        "internalPromotion": "Internal Promotion",
                        "termination": "Termination",
                        "resignation": "Resignation",
                        "relocation": "Relocation",
                        "careerChange": "Career Change",
                        "education": "Education",
                        "other": "Other"
                    },

                    "validation": {
                        "titleRequired": "Title is required",
                        "companyNameRequired": "Company Name is required",
                        "typeRequired": "Type is required",
                        "startDateRequired": "Start Date is required",
                        "endDateRequired": "End Date is required",
                        "monthlyEarningsRequired": "Monthly Earnings is required",
                        "hoursPerWeekRequired": "Hours Per Week is required",
                        "leavingReasonRequired": "Reason for Leaving is required"
                    }
                }
            },
            "requiredDataChurch": "Share data with the church field is required",
            "requiredDataThirdParty": "Share data with third parties field is required",
            "requiredSeekingBetterJob": "Seeking a better job field is required",
            "submitButton": "Complete Module"
        },
        "jobProfileSection2Screen": {
            "title": "Job Profile - Section 2",
            "form": {
            "contactInformation": {
                "title": "Contact Information",
                "questions": [
                {
                    "question": "What is the best way to contact you?",
                    "options": [
                    "Select an item",
                    "Whatsapp",
                    "Email"
                    ]
                },
                {
                    "question": "What language do you speak? Select all that apply.",
                    "input": {
                    "placeholder": "Add language"
                    }
                }
                ],
                "whatsapp_label": "Enter your WhatsApp (Make sure to add your country code): *",
                "whatsapp_placeholder": "Enter your WhatsApp number",
                "email_label": "Enter your Email: *",
                "email_placeholder": "Enter your Email"
            },
            "jobPreferences": {
                "title": "Job Preferences",
                "questions": [
                {
                    "question": "What type of job are you looking for? Select all that apply.",
                    "options": [
                    "Remote",
                    "In-person (Local)"
                    ]
                },
                {
                    "question": "How many hours are you available to work per week? Select all that apply.",
                    "options": [
                    "Full time (up to 40 hours per week)",
                    "Part time (up to 20 hours per week)"
                    ]
                },
                {
                    "question": "What industries are you interested in? Select all that apply.",
                    "options": [
                    "Accounting/Finance",
                    "Health Care",
                    "Technology",
                    "Artificial Intelligence",
                    "Marketing"
                    ]
                },
                {
                    "question": "Please indicate how much money you usually earn in one month in your local currency.",
                    "inputs": {
                    "salaryAmountPlaceholder": "Salary amount",
                    "currencyPlaceholder": "Currency"
                    }
                }
                ]
            },
            "educationHistory": {
                "title": "Education History",
                "description": "Please describe any higher education you completed prior to BYU Pathway, including degrees, diplomas, or certificates from other colleges or universities. Do not include BYU Pathway, BYU-Idaho, or Ensign College certificates or degrees.",
                "buttons": {
                "add": "Add",
                "reviewSavedItems": "Review Saved Items"
                }
            },
            "addEducationHistory": {
                "title": "Add Education",
                "labels": {
                "collegeName": "College/University Name: *",
                "country": "Country: *",
                "degreeType": "Degree Type: *",
                "dateAwarded": "Date Awarded: *",
                "degreeName": "Degree Name: *"
                },
                "placeholders": {
                "selectOne": "Select one"
                },
                "degreeTypes": {
                "certificate": "Certificate",
                "associate": "Associate",
                "bachelor": "Bachelor",
                "master": "Master",
                "doctorate": "Doctorate"
                },
                "validation": {
                "collegeNameRequired": "College/University Name is required",
                "countryRequired": "Country is required",
                "degreeTypeRequired": "Degree Type is required",
                "dateAwardedRequired": "Date Awarded is required",
                "degreeNameRequired": "Degree Name is required"
                },
                "buttons": {
                "add": "Add"
                }
            },
            "previousEducationList": {
                "title": "Previous Education",
                "footer": {
                "itemCountSingular": "item",
                "itemCountPlural": "items",
                "goBackButton": "Go Back"
                }
            },
            "educationItemDetails": {
                "titleLabels": {
                "collegeName": "College/University Name:",
                "country": "Country:",
                "degreeType": "Degree Type:",
                "dateAwarded": "Date Awarded:",
                "degreeName": "Degree Name:"
                },
                "buttons": {
                "goBack": "Go Back",
                "removeEducation": "Remove education"
                },
                "alert": {
                "confirmDeleteTitle": "Confirm Delete",
                "confirmDeleteMessage": "Are you sure you want to delete this previous education?",
                "cancelButton": "Cancel",
                "deleteButton": "Delete",
                "deleteFailedMessage": "Failed to delete item."
                },
                "loading": "Loading..."
            },
            "technologyAndAccessibility": {
                "title": "Technology and Accessibility",
                "questions": [
                {
                    "question": "What electronic devices do you have access to? Select all that apply.",
                    "options": [
                    "Computer (Personal)",
                    "Computer (Shared or Public)",
                    "Smartphone (Personal)",
                    "Smartphone (Shared or Public)",
                    "Tablet (Personal)",
                    "Tablet (Shared or Public)"
                    ]
                },
                {
                    "question": "On average, how many times a week do you experience power outage?",
                    "options": [
                    "0",
                    "1–2",
                    "3–5",
                    "5–10",
                    "10+"
                    ],
                    "placeholder": "Power Outages"
                }
                ]
            },
            "profileQuestions": {
                "title": "Profile Questions",
                "description": "Answer the following questions as truly as possible, two minutes max.",
                "questions": [
                {
                    "question": "Describe an experience where you used your leadership skills. What was the situation? What did you do? What was the result?"
                },
                {
                    "question": "Your team member let you borrow something. While using it, you accidentally broke it. Leave a voicemail for your team member to explain the problem and recommend a solution."
                }
                ]
            }
            },
            "alerts": {
            "missingOrInvalidFields": "There are missing or invalid fields:",
            "audioResponseRequired": "Audio response is required."
            },
            "completeModuleButton": "Complete Module",
            "validationMessages": {
                "contactWayRequired": "Contact way is required",
                "whatsappRequired": "WhatsApp number is required when contact way is WhatsApp",
                "invalidEmail": "Invalid email",
                "emailRequired": "Email is required when contact way is Email",
                "salaryAmountRequired": "Salary amount is required",
                "salaryCurrencyRequired": "Salary currency field is required",
                "languagesArrayRequired": "At least one language is required",
                "jobTypeArrayRequired": "At least one job type is required",
                "availabilityHoursArrayRequired": "Select at least one option of availability hours",
                "industryInterestArrayRequired": "Select at least one industry interest",
                "electronicDevicesArrayRequired": "At least one electronic device is required"
            }
        },
        "jobProfileSection3Screen": {
            "title": "External Test",
            "description": "Please complete the following tests. (Copy the URLs and paste them into your desktop browser.)",
            "links": [
            {
                "label": "Internet Speed Test",
                "urlPlaceholder": "Link to Internet Speed Test"
            },
            {
                "label": "Typing Speed Test",
                "urlPlaceholder": "Link to Typing Speed Test"
            }
            ],
            "checkbox": {
                "label": "I have completed the test"
            },
            "button": {
                "label": "Go Back"
            },
            "successPopup": {
                "title": "Success!",
                "message": "External test marked as completed"
            },
            "incompleteTestsMessage": "Incomplete, please ensure all required external tests are completed.",
            "failedCompletionStatus": "Failed to get completion status.",
            "failedToCheckCompletion": "Failed to check completion. Please try again later.",
            "checking": "Checking...",
            "internetDownloadSpeed": "Internet Download Speed",
            "internetUploadSpeed": "Internet Upload Speed",
            "typingAccuracy": "Typing Accuracy",
            "typingSpeed": "Typing Speed"
        },
        "feedbackScreen": {
            "title": "Submit Feedback",
            "FeedbackOptions": [
                {
                    "submitfeedback": "Submit Feedback",
                    "description": "Share your thoughts or suggestions to help us improve the app"
                },
                {
                    "reportanissue": "Report an Issue",
                    "description": "Let us know about any technical problems or bugs you've encountered"
                },
                {
                    "contactUs": "Contact Us",
                    "description": "Call our support line for assistance."
                }
            ]
        },
        "reportIssue": {
            "title": "Report an Issue",
            "validation": {
            "issueTypeRequired": "This field is required",
            "commentsRequired": "This field is required"
            },
            "pickerOptions": {
            "selectItem": "Select an item",
            "mentor": "Mentor",
            "registrationForm": "Registration Form"
            },
            "issueTypeQuestion": "Where in the app did you experience this issue?",
            "commentsLabel": "Please describe in detail the issue you are experiencing",
            "commentsPlaceholder": "Type here",
            "submitButton": "Submit"
        },
        "submitFeedbackScreen": {
            "title": "Feedback",
            "screenTitle": "Submit Feedback",
            "question": "How satisfied are you with the Companion experience?",
            "ratingNumbers": ["1", "2", "3", "4", "5"],
            "form": {
            "comments": {
                "label": "Comments",
                "placeholder": "Type here"
            }
            },
            "submitButton": "Submit",
            "submissionLoading": "Submitting your feedback...",
            "submissionSuccessMessage": "Your feedback has been successfully submitted. Thank you!",
            "submissionErrorMessage": "There was an issue submitting your feedback. Please try again later."
        },
        "common": {
            "thisFieldIsRequired": "This field is required",
            "loadingData": "Loading..."
        },
        "settingsScreen": {
            "title": "Settings",
            "profileOption": {
                "title": "Profile",
                "description": "View and update your personal details, preferences, and account settings." 
            },
            "pushNotificationsOption": {
                "title": "Push Notifications",
                "description": "Manage your notifications preferences to stay informed about important updates."
            },
            "signOutOption": {
                "title": "Sign Out",
                "description": "Log out of your account and end your current session."
            },
            "aboutOption": {
                "title": "About",
                "description": "Learn more about Companion, and its features."
            }
        },
        "profileScreen": {
            "title": "Profile",
            "fields": {
            "preferredName": "Preferred Name",
            "pathwayEmail": "BYU-Pathway Email",
            "studentID": "Student ID",
            "preferredContact": "Preferred Method of Contact",
            "whatsappNumber": "WhatsApp Number",
            "preferredLanguage": "Preferred Language",
            "updateButton": "Update",
            "emailAddress": "Email Address",
            "phoneNumber": "Phone Number",
            "countryCodeDefault": "Code",
            "phoneNumberPlaceholder": "23822318"
            },
            "alertMessages": {
            "updateSuccess": "Profile updated successfully!",
            "updateError": "Failed to update profile. Please try again.",
            "updatingProfile": "Updating profile..."
            },
            "validation": {
            "thisFieldIsRequired": "This field is required"
            }
        },
        "aboutScreen": {
            "title": "About",
            "sections": {
                "about": "About",
                "getHelp": "Get help",
                "legal": "Legal"
            },
            "items": {
                "version": "Version",
                "build": "Build",
                "sendCrashReports": "Send crash reports",
                "submitTicket": "Submit a Ticket",
                "suggestions": "Suggestions",
                "termsOfService": "Terms of Service",
                "privacyPolicy": "Privacy Policy"
            },
            "footer": "Copyright © 2025 Companion"
        },
        "signOutScreen": {
            "title": "Confirm Sign Out",
            "message": "Signing Out...",
            "feedback": "Rate your experience:",
            "buttons": {
                "cancel": "Cancel",
                "confirm": "Confirm"
            }
        },
        "common": {
            "comentsTitle": "Comments",
            "reopenRequest": "To reopen this request, please add your reason in the comments section below",
            "statusLabel": "Status:",
            "resolvedLabel": "Resolved:",
            "lastModifiedLabel": "Last Modified:",
            "seeTimeline": "See Timeline",
            "descriptionTitle": "Description",
            "thisFieldIsRequired": "This field is required",
            "detailedDescriptionLabel": "Detailed Description",
            "typeHerePlaceholder": "Type here",
            "screenshotLabel": "Submit a screenshot with your ticket",
            "screenshotHint": "This file must be a file of type: png, jpg, jpeg.",
            "permissionRequiredTitle": "Permission required",
            "galleryAccessMessage": "Gallery access is required to select an image.",
            "invalidFileTypeTitle": "Invalid file type",
            "invalidFileTypeMessage": "Please select a file type: {allowedTypes}.",
            "errorProcessingImageTitle": "Error",
            "errorProcessingImageMessage": "The image could not be processed.",
            "processingStatus": "Processing...",
            "attachFileButton": "Attach file",
            "selectedImageLabel": "Selected image",
            "changeImageButton": "Change image"
        },
        "notStudentWelcome": {
            "welcomeTitle": "Welcome to the combined application for BYU-Pathway Worldwide and EnglishConnect 3!",
            "churchAccountTitle": "Church Account",
            "churchAccountP1": "You will need a Church account to log in and apply.",
            "churchAccountBullet1": "If you are not a member of The Church of Jesus Christ of Latter-day Saints, please “Create a new Account” on the first sign-in page and follow the instructions.",
            "churchAccountBullet2": "If you have a Church account but do not remember your login information, click “I forgot your username or password” and follow the instructions. Please do not create a new account.",
            "applyButton": "Apply Now",
            "programSelectionTitle": "Program Selection",
            "programSelectionP1": "We will use the information in your application to recommend which program you should start with. You will make that final selection at the end of the application.",
            "currentStudentsTitle": "Current Students",
            "currentStudentsP1": "If you are currently enrolled in BYU-Pathway or EnglishConnect 3, please DO NOT apply. Log in to your student portal at portal.byupathway.edu to clear holds and register for courses."
        },
        "notStudentTermsConditions": {
            "previousPageButton": "Previous Page",
            "acknowledgementP1": "By checking the box below, I acknowledge and agree to the terms and conditions described herein, and I have read the Privacy Notice – BYU-Pathway Worldwide (Updated 2024-03-01) in addition to the Legal Disclosures and Select Institutional Policies that pertain to the institution where I have submitted or may submit an application (links above).",
            "iAcknowledgeTermsAndConditions": "I acknowledge *",
            "saveAndContinueButton": "Save and Continue",
            "questionIsMember": "Are you a current or former member of The Church of Jesus Christ of Latter-day Saints?",
            "questionPresentReligion": "What is your present religion, if any?",
            "loadingMessage": "Loading...",
            "errorMessagePrefix": "Error: ",
            "pickerSelectAnItem": "Select an item",
            "pickerOptionYes": "Yes",
            "pickerOptionNo": "No",
            "pickerOptionCatholic": "Catholic",
            "pickerOptionNoReligion": "No Religion",
            "validationRequired": "This field is required",
            "validationReligionRequired": "This field is required when you are not a member.",
            "validationAcknowledgeTerms": "You must acknowledge the terms and conditions."
        },
        "notStudentTermsConditions2NoMRN": {
            "termsAndConditionsTitle": "Terms and Conditions",
            "noMRNAttachedTitle": "NO MEMBERSHIP RECORD NUMBER (MRN) ATTACHED",
            "mrnExplanation": "All members of The Church of Jesus Christ of Latter-Day Saints are required to have a membership record number (MRN) associated with their Church account to participate in the programs offered through BYU-Pathway Worldwide. The account you’re currently logged in with doesn’t have an MRN attached. See below for troubleshooting options:",
            "optionOneTitle": "Option one:",
            "optionOneDescription": "If a different Church account is associated with your MRN, sign in using that account.",
            "optionOneBullet": "If you do not remember the username or password for that account, go through the steps found on the ",
            "accountRecoveryLink": "account recovery page",
            "optionOneBulletPart2": ". Do NOT create a new account.",
            "optionTwoTitle": "Option two:",
            "optionTwoDescription": "Add your MRN to your current account.",
            "optionTwoStep1": "1. Sign out of the application.",
            "optionTwoStep2": "2. Go to your ",
            "churchAccountSettingsLink": "Church account membership settings",
            "optionTwoStep3": "3. Add your MRN. You can find your MRN by:",
            "optionTwoStep3a": "a. Checking your temple recommend.",
            "optionTwoStep3b": "b. Contacting your ward or branch clerk.",
            "optionTwoStep4": "4. Sign back into the application.",
            "optionThreeTitle": "Option three:",
            "optionThreeDescription": "If neither of the options above work, contact ",
            "byuPathwaySupportLink": "BYU-Pathway Support",
            "formerMembershipTitle": "Former Membership",
            "formerMembershipP1": "Individuals who currently have formal membership restrictions or have had a voluntary or involuntary withdrawal of membership from The Church of Jesus Christ of Latter-day Saints are not eligible to participate in programs offered through BYU-Pathway Worldwide until reinstated to full fellowship in the Church. Applicants are encouraged to meet with their ecclesiastical leader to discuss the next steps for reinstatement to unrestricted membership status. For additional information or clarification, please contact BYU-Pathway Support."
        },
        "notStudentMemberWelcome": {
            "welcomeGreeting": "Welcome Jhon Doe!",
            "welcomeMessage": "Welcome to BYU-Pathway Worldwide! Please check if your name and email are correct:",
            "yourNameLabel": "Your Name:",
            "yourName": "Jhon Doe",
            "yourEmailLabel": "Your Email:",
            "yourEmail": "jhondoe@gmail.com",
            "signOutMessage": "If this is not you, sign out and log in again with your Church Account.",
            "contactSupport": "Contact BYU-Pathway Support if you need help.",
            "startApplicationButton": "Start Application"
        },
        "notStudentInformation": {
            "requestStudentInfoTitle": "Request Student Information",
            "saveAndContinueButton": "Save and Continue",
            "loadingMessage": "Loading...",
            "errorMessagePrefix": "Error: ",
            "receiveTextMessagesQuestion": "Would you like to receive text messages?",
            "receiveTextMessagesOptionDoNotAllow": "Do not allow",
            "receiveTextMessagesOptionAllow": "Allow",
            "primaryLanguageSelectOption": "Select a language",
            "validationFirstNameRequired": "First name is required",
            "validationLastNameRequired": "Last name is required",
            "validationDateOfBirthRequired": "Date of birth is required",
            "validationSexRequired": "Sex is required",
            "validationMaritalStatusRequired": "Marital status is required",
            "validationPrimaryLanguageRequired": "Primary language is required",
            "validationCountryRegionRequired": "Country/Region is required",
            "validationZipInvalid": "Invalid ZIP",
            "validationZipRequired": "ZIP is required",
            "validationAddressLine1Required": "Address Line 1 is required",
            "validationCityRequired": "City is required",
            "validationEmailInvalid": "Invalid email address",
            "validationEmailRequired": "Email is required",
            "validationMobilePhoneInvalid": "Invalid phone number",
            "validationMobilePhoneRequired": "Mobile Phone is required",
            "validationHomePhoneInvalid": "Invalid phone number",
            "validationPreferredPhoneRequired": "Preferred Phone is required",
            "validationReceiveTextMessagesRequired": "Please select an option for text messages",
            "validationWhatsAppNumberInvalid": "Invalid phone number"
        },
        "studentInfoSection": {
            "firstNameLabel": "First/Given Name(s)*",
            "lastNameLabel": "Last/Surname*",
            "suffixLabel": "Suffix",
            "dateOfBirthQuestion": "Date of birth*",
            "sexQuestion": "Sex*",
            "maritalStatusQuestion": "Marital Status*",
            "primaryLanguageQuestion": "What is your Primary Language?*"
        },
        "currentAddressSection": {
            "currentAddressTitle": "Current Address",
            "currentAddressDescription": "This is the address of where you will be living while participating in BYU-Pathway Worldwide.",
            "countryRegionQuestion": "Country/Region *",
            "zipLabel": "ZIP*",
            "stateProvinceLabel": "State/Province",
            "addressLine1Label": "Address Line 1 *",
            "cityLabel": "City *"
        },
        "contactInfoSection": {
            "contactInfoTitle": "Contact Information",
            "emailLabel": "Email *",
            "mobilePhoneLabel": "Mobile Phone *",
            "homePhoneLabel": "Home Phone",
            "preferredPhoneQuestion": "Preferred Phone *",
            "textMessageDescription": "BYU-Pathway uses text messaging to send enrollment reminders and important notifications. If you don't want to receive text messages, you can opt out below.",
            "otherContactInfoTitle": "Other Contact Information",
            "whatsAppNumberLabel": "WhatsApp Number",
            "facebookMessengerLabel": "Facebook Messenger"
        },
        "citizenshipInformation": {
            "requestStudentInfoTitle": "Request Student Information",
            "saveAndContinueButton": "Save and Continue",
            "citizenshipInfoTitle": "Citizenship Information",
            "ssn": "Please provide your Social Security number (SSN). If you choose not to provide your SSN on this page, you will need to complete additional steps to receive tax forms.",
            "hispanicLatino": "Do you consider yourself Hispanic/Latino?",
            "racialCategoriesArray": "Select one or more of the following racial categories to describe yourself",
            "haveUsCitizenshipQuestion": "Do you have citizenship in the U.S.?*",
            "completedHighSchool": "Have you completed high school/secondary education? *",
            "highestEducationQuestion": "What is your highest level of education?*",
            "attendedUsUniversitiesQuestion": "Have you attended any one or more United States universities/colleges (not including PathwayConnect) after you graduated from high school?*",
            "earnCreditUsUniversityQuestion": "Did you complete one or more 3+ credit courses with a grade of 'C' or higher at a United States university/college after you graduated from high school? *",
            "selectSchool": "Select a school you have attended and completed at least one 3+ credit course.*",
            "selectSchoolTitle": "Select your school:",
            "selectSchoolNote1": "At this point in the application, you only need to select 1 school, even if you have attended multiple universities/colleges.",
            "selectSchoolNote2": "For the purposes of this application, we only accept U.S. regionally accredited universities/colleges. If your university/college is not listed, change your response to the question \"Have you attended one or more United States universities/colleges after you graduated from high school?\" to \"No\".",
            "selectSchoolNote3": "If your university/college was U.S. regionally accredited, but is not listed and has since changed its name, choose the most recent name of the school. Example: For Ricks College, select Brigham Young University-Idaho.",
            "afterAdmittance": "After admittance to BYU-Pathway, you can submit official transcripts to transfer any previous university/college credits to satisfy program requirements. Some students may be required to submit transcripts for verification purposes",
            "parentsBachelor": "Did either of your parents earn a bachelor's degree or equivalent?*",
            "unresolvedLegalRestrictionsQuestion": "Do you have any unresolved legal restrictions, obligations, or fines for a crime you have been convicted of, pleaded guilty to, or were found responsible for (other than a minor traffic violation)? *",
            "noteForUnresolvedLegalRestrictions": "These include, but are not limited to: current incarceration, probation, parole, listed on a sex-offender registry, court fees, community service, or other legal fines.",
            "noteBachelor": "By clicking Save and Continue, you confirm that your responses are true and accurate to the best of your knowledge. Providing false information may result in the cancellation of your admission and the loss of any credit earned through BYU-Pathway Worldwide programs.",
            "loadingMessage": "Loading...",
            "errorMessagePrefix": "Error: ",
            "pickerOptions": {
            "usCitizen": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "hispanicLatino": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "highestEducation": [
                { "name": "Select a level", "value": "" },
                { "name": "High School/Secondary Education", "value": "HighSchool" },
                { "name": "Some College or University", "value": "SomeCollege" },
                { "name": "Bachelor's Degree", "value": "Bachelors" },
                { "name": "Master's Degree", "value": "Masters" },
                { "name": "Doctorate/Professional Degree", "value": "Doctorate" }
            ],
            "completedHighSchool": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "attendedUsUniversities": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "earnCreditUsUniversity": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "selectSchool": [
                { "name": "Select an option", "value": "" },
                { "name": "Test", "value": "test" }
            ],
            "parentsBachelor": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "unresolvedLegalRestrictions": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ],
            "convictedTrafficViolation": [
                { "name": "Select an option", "value": "" },
                { "name": "Yes", "value": "Yes" },
                { "name": "No", "value": "No" }
            ]
            },
            "validationCitizenshipStatusRequired": "Citizenship status is required",
            "validationCompletedHighSchoolRequired": "Please indicate if you have completed the high school/secondary",
            "validationHighestEducationRequired": "Highest level of education is required",
            "validationAttendedUsUniversitiesRequired": "Please indicate if you have attended any U.S. universities/colleges.",
            "validationEarnCreditUsUniversityRequired": "Please indicate if you completed any credit courses in a U.S. program.",
            "validationParentsBachelorRequired": "Please indicate if either of your parents earned a bachelor's degree or equivalent.",
            "validationUnresolvedLegalRestrictionsRequired": "Please select an option regarding unresolved legal restrictions, obligations, or fines.",
            "validationAnticipatedLegalizationDateRequired": "Please provide the anticipated legalization date."
        },
        "citizenshipInfoSection": {
            "biographicInformationTitle": "Biographic Information",
            "socialSecurityNumberLabel": "Social Security Number",
            "backgroundInformationTitle": "Background Information",
            "anticipatedLegalizationDateQuestion": "What is the anticipated legalization date for any of these restrictions, obligations, or liens?*",
            "racialCategories": [
            { "code": "111110000", "name": "American Indian or Alaska Native" },
            { "code": "111110001", "name": "Asian" },
            { "code": "111110002", "name": "Black or African American" },
            { "code": "111110003", "name": "Native Hawaiian or Other Pacific Islander" },
            { "code": "111110004", "name": "White" }
            ]
        },
        "englishLanguageAssessment": {
            "elaTitle": "English Language Assessment (ELA)",
            "paragraph1": "A certain level of English proficiency is needed to succeed in BYU-Pathway Worldwide. The PathwayConnect journey often begins with EnglishConnect, a program developed to assist learners with developing their English proficiency in an environment of fellowship and faith.",
            "paragraph2": "In the following assessments (Writing and Reading), you will demonstrate your current English level so you can enroll in the program that will be most beneficial for you.",
            "certificationIntro": "When you save and continue this page, you certify:",
            "certificationBullet1": "You will not use outside help of any kind to answer the questions.",
            "certificationBullet2": "Your results represent your personal best effort.",
            "buttonText": "Save and Continue"
        },
        "englishWritingTest": {
            "title": "English Writing Test",
            "directions": "Directions:",
            "bullet1": "This test will measure your English Writing ability according to the ACTFL Proficiency Guidelines.",
            "bullet2": "Do not use dictionaries, electronic devices, or any other helps.",
            "bullet3": "There are 2 questions on this test.",
            "bullet4": "The timer for each item is displayed in the top-right of the screen.",
            "bullet5": "The next page will display a practice question for you to become familiar with the format of the test questions",
            "buttonText": "Start Test"
        },
        "englishWritingTestScreen": {
            "loadingTestData": "Loading test data...",
            "submitTestButton": "Submit Test",
            "continueButton": "Continue",
            "resetButton": "Reset",
            "successMessage": "Your writing assessment is complete. It will be graded soon. ",
            "errorMessage": "There was an error saving your test. Please try again.",
            "alertCloseContinue": "Continue",
            "alertCloseOK": "OK",
            "submittingTestDescription": "Submitting writing test...",
            "readingAssessmentPrompt": "Now, please complete your reading assessment",
            "readingAssessmentLinkText": "here",
            "leftTestMessage": "You left the test. All unsaved progress has been lost and the test has been reset.",
            "passageValidationRequired": "Passage {number} answer is required.",
            "passageValidationMinLength": "Please write at least 4-5 sentences for Passage {number}."
        },
        "decisionInformation": {
            "title": "Decision Information",
            "description1": "Thank you for your interest in BYU-Pathway Worldwide. Based on the information you provided, you may be eligible to participate in one or more of the online programs serviced by BYU-Pathway. Please continue this application to decide the best program for you.",
            "description2": "Thank you for your interest in BYU-Pathway Worldwide. Unfortunately, because BYU-Pathway is not approved to admit students in your country, you are not eligible at this time. BYU-Pathway is working to be able to offer online education in new countries, so we encourage you too apply again if your country is approved in the future.",
            "saveAndContinueButton": "Save and Continue"
        },
        "programSelectionScreen": {
            "title": "Program Selection Page",
            "description": "In the menu below, you will see the BYU-Pathway programs you are eligible to start with. These might include EnglishConnect 3, PathwayConnect, and/or Certificates and Degrees. If you don’t see the program you want, it means you’re not eligible for it right now, but you might become eligible after completing other programs. You can click on a program to see a summary and important details, like where to find information about tuition costs.",
            "saveAndContinueButton": "Save and Continue",
            "selectProgramPlaceholder": "Select a program",
            "validationProgramRequired": "Please select a program.",
            "loadingMessage": "Loading...",
            "errorMessage": "Error: ",
            "pickerOptions": {
            "program": [
                {
                "name": "Select a program",
                "value": ""
                },
                {
                "name": "English Connect 3 (Academic English)",
                "value": "englishConnect3"
                },
                {
                "name": "Pathway Connect (Recommended)",
                "value": "pathwayConnect"
                },
                {
                "name": "Certificates and Degrees (Advanced)",
                "value": "certificatesDegrees"
                }
            ]
            }
        },
        "programDetailsCertDegreeScreen": {
            "headerTitle": "Non Student-Settings",
            "programTitle": "CERTIFICATES & DEGREES PROGRAM SUMMARY",
            "programDescription": "BYU-Pathway Worldwide provides access to online certificates and degrees in association with BYU-Idaho and Ensign College. While the recommended start to a degree usually begins with PathwayConnect, participants may choose to apply directly to the online certificates and degrees program if they meet the minimum educational background requirements. Tuition is significantly reduced for the entire degree program for those who start with PathwayConnect.",
            "requirementsTitle": "CERTIFICATES & DEGREES PROGRAM REQUIREMENTS",
            "instituteGathering": "Weekly gathering attendance for Institute credit, as may be required.",
            "technologyAccessTitle": "Technology Access",
            "technologyAccessPoint1": "Success with online coursework depends on students having access to reliable internet, electricity, and a device with minimum computing power. Before enrolling in a program, you should affirm that the following conditions are met:",
            "technologyAccessPoint2": "You need to have regular access to high-speed internet with adequate data.",
            "technologyAccessPoint3": "You will need to have regular access to a device that meets the minimum device profile designated for your academic pursuits. For more information on the ",
            "technologyAccessPoint31": " web page.",
            "technologyRequirementsLinkText": "BYU-Pathway Technology Requirements",
            "technologyRequirementsLinkUrl": "https://www.byupathway.edu/technology-requirements",
            "tuitionTitle": "Tuition",
            "tuitionPoint1": "Tuition is due on the fourth Monday of each term (day 22). You will receive a 5% late fee charge for all outstanding balance after this date.",
            "tuitionPoint2": "Students who do not complete BYU-Pathway Worldwide’s PathwayConnect pay the online standard tuition rate (Advanced Path). Visit ",
            "tuitionScholarshipsLinkText": "https://www.byupathway.edu/tuition",
            "tuitionPoint21": " for more information.",
            "tuitionScholarshipsLinkUrl": "https://www.byupathway.edu/tuition",
            "tuitionDiscountsPoint": "Visit the ",
            "tuitionDiscountsLinkText": "Tuition Discounts",
            "tuitionDiscountsLinkUrl": "https://www.byupathway.edu/tuition-discounts",
            "tuitionDiscountsPoint2": " page for information regarding guaranteed scholarships and other possible discounts.",
            "disabilityServicesTitle": "Disability Services",
            "disabilityServicesPoint1": "Pursuant to Section 504 of the Rehabilitation Act of 1973, BYU-Pathway, BYU–Idaho, and Ensign College (collectively the Institutions) do not discriminate against online degree students with disabilities and provides reasonable accommodations to otherwise qualified individuals.",
            "disabilityServicesPoint2": "Online Degree Students can request accessibility accommodations through their student portal.",
            "saveAndContinueButton": "Save and Continue"
        },
        "englishConnectDetailsScreen": {
            "headerTitle": "Non Student-Settings",
            "programTitle": "ENGLISHCONNECT 3 PROGRAM SUMMARY",
            "programDescription": "Learners use the EnglishConnect 3 course to prepare for PathwayConnect and other academic opportunities. In EnglishConnect 3, learners improve their ability to read, write, listen, and speak in English. They can repeat EnglishConnect 3 as many times as needed to accomplish their goals.",
            "requirementsTitle": "ENGLISHCONNECT 3 PROGRAM REQUIREMENTS",
            "gatheringsTitle": "Gatherings",
            "gatheringsPoint": "Weekly EnglishConnect 3 gathering attendance is required (either in-person or virtually). Gathering attendance makes up a significant part of a student’s overall course progress.",
            "technologyAccessTitle": "Technology Access",
            "technologyAccessPoint1": "Success with online coursework depends on students having access to reliable internet, electricity, and a device with minimum computing power. Before enrolling in a program, you should affirm that the following conditions are met:",
            "technologyAccessPoint2": "You need to have regular access to high-speed internet with adequate data.",
            "technologyAccessPoint3": "You need to be able to record clear audio for your speaking assignments.",
            "technologyAccessPoint4": "You need to have regular access to a device that meets the minimum device profile designated for your selected academic program, as explained on the ",
            "technologyRequirementsLinkText": "BYU-Pathway Technology Requirements",
            "technologyRequirementsLinkUrl": "https://www.byupathway.edu/technology-requirements",
            "technologyAccessPoint4_after": " web page. (EnglishConnect 3 follows the same technology requirements as PathwayConnect.)",
            "tuitionTitle": "Tuition",
            "tuitionPoint1": "Tuition is due on the fourth Monday of each term (day 22). You will receive a 5% late fee charge for all outstanding balance after this date.",
            "tuitionPoint2": "To see specific tuition costs for your country, visit the ",
            "englishConnectTuitionLinkText": "EnglishConnect 3 webpage",
            "englishConnectTuitionLinkUrl": "https://www.englishconnect.org/",
            "tuitionPoint2_after": ". If you do not live in the United States, click on 'United States' and choose your location.",
            "disabilityServicesTitle": "Disability Services",
            "disabilityServicesPoint1": "While BYU-Pathway is not legally required to provide access and accommodations to EnglishConnect, PathwayConnect, or Institute students with disabilities, it endeavors to provide reasonable assistance to students who need it. Such assistance is provided voluntarily and at BYU-Pathway's sole discretion. The voluntary assistance students receive may differ from accommodations provided by other institutions.",
            "disabilityServicesPoint2": "EnglishConnect 3 participants can request assistance for disabilities through their student portal.",
            "saveAndContinueButton": "Save and Continue"
        },
        "pathwayConnectDetailsScreen": {
            "headerTitle": "Non Student-Settings",
            "programTitle": "PATHWAYCONNECT PROGRAM SUMMARY",
            "programDescription": "PathwayConnect is the recommended start to every degree. Offered at a significantly reduced cost, PathwayConnect can be completed in as little as 6 months and includes foundational academic and religion courses that are typically counted towards the completion of a degree. Students who start with PathwayConnect often see increased success in completing a degree online.",
            "requirementsTitle": "PATHWAYCONNECT PROGRAM REQUIREMENTS",
            "gatheringsTitle": "Gatherings",
            "gatheringsPoint1": "Weekly PathwayConnect gathering attendance is required (either in-person or virtually). Gathering attendance makes up a significant part of a student’s overall course grade.",
            "gatheringsPoint2": "Weekly gathering attendance for Institute courses is also required.",
            "technologyAccessTitle": "Technology Access",
            "technologyAccessPoint1": "Success with online coursework depends on students having access to reliable internet, electricity, and a device with minimum computing power. Before enrolling in a program, you should affirm that the following conditions are met:",
            "technologyAccessPoint2": "You need to have regular access to high-speed internet with adequate data.",
            "technologyAccessPoint3": "You need to have regular access to a device that meets the minimum device profile designated for your selected academic program, as explained on the ",
            "technologyRequirementsLinkText": "BYU-Pathway Technology Requirements",
            "technologyRequirementsLinkUrl": "https://www.byupathway.edu/technology-requirements",
            "technologyAccessPoint3_after": " web page.",
            "tuitionTitle": "Tuition",
            "tuitionPoint1": "Tuition is due on the fourth Monday of each term (day 22). You will receive a 5% late fee charge for all outstanding balance after this date.",
            "tuitionPoint2": "Use the ",
            "pathwayConnectTuitionLinkText": "PathwayConnect Tuition Page",
            "pathwayConnectTuitionLinkUrl": "https://www.byupathway.edu/tuition",
            "tuitionPoint2_after": " to see specific tuition costs for your country.",
            "tuitionPoint3": "Visit the ",
            "tuitionDiscountsLinkText": "Tuition Discounts",
            "tuitionDiscountsLinkUrl": "https://www.byupathway.edu/tuition-discounts",
            "tuitionPoint3_after": " page for information regarding guaranteed scholarships and other possible discounts.",
            "disabilityServicesTitle": "Disability Services",
            "disabilityServicesPoint1": "While BYU-Pathway is not legally required to provide access and accommodations to EnglishConnect, PathwayConnect, or Institute students with disabilities, it endeavors to provide reasonable assistance to students who need it. Such assistance is provided voluntarily and at BYU-Pathway's sole discretion. The voluntary assistance students receive may differ from accommodations provided by other institutions.",
            "disabilityServicesPoint2": "PathwayConnect and Institute students can request assistance for disabilities through their student portal.",
            "saveAndContinueButton": "Save and Continue"
        },
        "cesAcknowledgementScreen": {
            "headerTitle": "Non Student-Settings",
            "acknowledgementTitle": "CES Acknowledgement",
            "acknowledgementDescription": "The Church Educational System (CES) is sponsored by The Church of Jesus Christ of Latter-day Saints (Church) and directed by the Church Board of Education/Boards of Trustees, with the mission to develop disciples of Jesus Christ who are leaders in their homes, the Church, and their communities.",
            "honorCodeTitle": "CES Honor Code",
            "honorCodeDescription": "The CES Honor Code helps to accomplish the CES mission to build disciples of Jesus Christ. As faculty, administration, staff, and students voluntarily commit to conduct their lives in accordance with the principles of the gospel of Jesus Christ, they strive to maintain the highest standards in their personal conduct regarding honor, integrity, morality, and consideration of others. By accepting appointment, continuing in employment, being admitted, or continuing enrollment, each member of the campus communities personally commits to observe the CES Honor Code approved by the Board of Trustees:",
            "honorCodePoint1": "Maintain an Ecclesiastical Endorsement, including striving to deepen faith and maintain gospel standards.",
            "honorCodePoint2": "Be honest.",
            "honorCodePoint3": "Live a chaste and virtuous life, including abstaining from sexual relations outside marriage between a man and a woman. Living a chaste and virtuous life also includes abstaining from same-sex romantic behavior.",
            "honorCodePoint4": "Abstain from alcoholic beverages, tobacco, tea, coffee, vaping, marijuana, and other substance abuse.",
            "honorCodePoint5": "Participate regularly in Church services.",
            "honorCodePoint6": "Respect others, including the avoidance of profane and vulgar language.",
            "honorCodePoint7": "Obey the law and follow campus policies, including the CES Dress and Grooming standards.",
            "honorCodePoint8": "Encourage others in their commitment to comply with the Honor Code and Dress and Grooming standards.",
            "dressGroomingPrinciplesTitle": "CES Dress and Grooming Principles and Expectations",
            "dressGroomingPrinciplesDescription": "CES Dress and Grooming Principles and Expectations CES Dress and Grooming Principles and Expectations are part of the CES Honor Code and part of each student’s, employee’s, and volunteer’s commitment.",
            "dressGroomingPrinciplesDescription2": "When considering Honor Code and dress and grooming decisions, the teachings of the prophets and apostles, as well as Church instruction, such as “For the Strength of Youth: A Guide for Making Choices” can be helpful.",
            "dressGroomingPrinciplesListTitle": "CES Dress and Grooming Principles",
            "dressGroomingPrinciplesPoint1": "Each student, employee, and volunteer commits to:",
            "dressGroomingPrinciplesPoint2": "Represent the Savior Jesus Christ, the Church, and the Church Educational System.",
            "dressGroomingPrinciplesPoint3": "Preserve an inspiring environment, without distraction or disruption, where covenants are kept in a spirit of unity so the Holy Ghost can teach truth.",
            "dressGroomingPrinciplesPoint4": "Promote modesty, cleanliness, neatness, and restraint in dress and grooming.",
            "dressGroomingPrinciplesPoint5": "Maintain an elevated standard distinctive to educational institutions of the Church of Jesus Christ.",
            "dressGroomingExpectationsNote": "Dress and grooming expectations as in the examples below should align with these principles. However, application of these principles is not limited to the expectations listed. Members of the university community are expected to apply these principles to dress and grooming questions as they arise.",
            "byuPathwayNote": "BYU–Pathway Worldwide and Seminaries and Institutes of Religion match local Church dress and grooming standards as appropriate for local activities.",
            "readMoreLinkText": "You can read more about the Honor Code ",
            "readMoreLinkText2": "here.",
            "readMoreLinkUrl": "https://www.byupathway.edu/honor-code",
            "iAcknowledgeCES": "I acknowledge and agree that I have read and will abide by the CES Honor Code and CES requirements. *",
            "saveAndContinueButton": "SUBMIT YOUR APPLICATION",
            "validationAcknowledgementRequired": "You must acknowledge to submit.",
            "loadingMessage": "Loading...",
            "errorMessage": "Error: "
        },
        "applicationDashboardScreen": {
            "applicationRegistration": "BYU-Pathway Worldwide Application",
            "dateStarted": "08-06-2025",
            "dateSubmitted": "08-06-2025",
            "program1": "PathwayConnect (Recommended)",
            "program2": "Based on the information you have provided, you qualify for EnglishConnect 3. This course will help you improve your English skills to prepare for future employment and education opportunities through BYU-Pathway Worldwide. Learn how to join today at ",
            "program3": "Based on the information you have provided, you qualify for EnglishConnect 1 or 2. These courses will help you improve your English skills to prepare for future employment and education opportunities through BYU-Pathway Worldwide. Learn how to join today at ",
            "program4": "Based on the information you have provided, you qualify for Certificates and Degrees.",
            "statusSubmitted": "Submitted",
            "statusApproved": "Approved",
            "studentEmail": "student@byupathway.edu",
            "englishConnectURL": "https://www.englishconnect.org",
            "title": "Application Dashboard",
            "nextStepsTitle": "Next Steps",
            "pathwayConnectNextStep1": "1. Register on {PC} course.",
            "pathwayConnectNextStep2": "2. Select your gathering time.",
            "pathwayConnectNextStep3": "3. Go to login and start your student experience.",
            "continueButton": "Continue",
            "certificatesDegreesNextStep": "Use your institutional email to login: ",
            "goToLoginButton": "Go to Login"
        }
    },
    "pt": {
            "loginScreen": {
                "title": "Bem-vindo ao ",
                "onboardingCarousel": [
                {
                    "title": "Notificações",
                    "description": "Receba as últimas notificações diretamente no seu dispositivo móvel para se manter atualizado sobre prazos importantes, casos enviados, quando as inscrições abrem e muito mais! Vamos mantê-lo informado sobre tudo para que você não perca nada."
                },
                {
                    "title": "Serviços",
                    "description": "Se você estiver enfrentando um problema, pode criar, atualizar e revisar casos enviados. Você também tem acesso fácil a serviços como solicitações de histórico escolar oficial, verificação de matrícula, solicitação de graduação e registro para os próximos períodos."
                },
                {
                    "title": "Assistência de IA",
                    "description": "Acesse a Assistência de IA projetada especialmente para você!Essa assistência pode ajudá-lo com perguntas frequentes, dúvidas específicas sobre cursos e também a melhorar seu inglês. Você pode encontrar este recurso no aplicativo 'Assistentes de IA'."
                }
                ],
                "buttons": [
                {
                    "label": "Entrar"
                },
                {
                    "label": "Não sou estudante"
                }
                ],
                "termsText1": "Ao baixar, acessar ou usar o Companion, você concorda com estes ",
                "termsText2": "Termos de Uso",
                "termsText3": ". Por favor, leia-os cuidadosamente antes de usar o aplicativo."
            },
            "notStudentScreen": {
                "banner": "BYU-Pathway Worldwide oferece acesso a diplomas fundamentados em princípios espirituais, completamente online e com preços acessíveis.",
                "ourStudents&Alumni": {
                "title": "Nossos Alunos e Ex-Alunos",
                "testimonialsCarousel": [
                {
                    "text": "Nunca há um momento perfeito para terminar seu diploma. Sempre haverá coisas que tornarão isso difícil, mas você pode fazer coisas difíceis. Aprendi exatamente o que precisava aprender e isso não só me ajudou academicamente, mas também na minha vida!"
                },
                {
                    "text": "Decidi me esforçar ao máximo para trilhar o caminho em direção ao meu sonho de obter um diploma, matriculando-me nos cursos da BYU-Pathway Worldwide."
                },
                {
                    "text": "Como não sou membro de A Igreja de Jesus Cristo dos Santos dos Últimos Dias, ingressar na BYU-Pathway me causou apreensão inicial. No entanto, fui recebido imediatamente de braços abertos pelos missionários e meus colegas de classe."
                }
                    ]
                },
                "degreesInformation": {
                "title": "Informações sobre Diplomas",
                "card": {
                    "title": "Quer um emprego melhor antes de se formar?",
                    "description": "Obtenha um Certificado Profissional enquanto Conquista um Bacharelado.",
                    "button": "Ver Diplomas"
                }
                },
                "moreInformationSection": {
                "title": "Mais Informações",
                "cards": [
                    {
                    "applyPCToday": "Inscreva-se no PathwayConnect Hoje",
                    "description": "Comece Sua Jornada",
                    "buttonLabel": "Inscreva-se Agora"
                    },
                    {
                    "learnMore": "Saiba Mais sobre o PathwayConnect",
                    "buttonLabel": "Solicitar Informações"
                    },
                    {
                    "help": "Precisa de Ajuda? Nosso Assistente de IA Tem Respostas",
                    "buttonLabel": "Assistente de IA"
                    }
                ],
                "finalButton": "Ir para o Login"
                }
        },
        "authenthicationLoadingPage": {
            "title": "Processando Autenticação..."
        },
        "authScreen": {
            "loadingStudentExperience": "Carregando Experiência do Aluno..."
        },
        "menuScreen": {
            "greeting": "Olá 👋🏻, {studentName}",
            "appsSection": {
                "title": "Aplicativos",
                "appsCarousel": [
                    { "aiAssistance": "Assistência de IA" },
                    { "academicCenter": "Centro Acadêmico" },
                    { "network": "Rede" },
                    { "jobs": "Empregos" },
                    { "ec3": "EC3" },
                    { "openAllApps": "Abrir Todos os Aplicativos" }
                ]
            },
            "notificationsSection": {
                "title": "Últimas Notificações",
                "viewAllButton": "Ver Todas as Notificações"
            },
            "academicProgressSection": {
                "title": "Meu Progresso Acadêmico",
                "programsCarousel":[
                    {
                    "subject": "Religião",
                    "institution": "BYU-Idaho",
                    "credits": {
                        "label": "Créditos",
                        "Value": "8"
                    },
                    "progressBar": {
                        "percentage": 60,
                        "label": "% Concluído"
                        }
                    }
                ]
            }
        },
        "academicProgress": {
            "loadingEnrollmentData": "A carregar dados de inscrição...",
            "errorLoadingEnrollmentData": "Erro ao carregar dados de inscrição",
            "noEnrollmentFound": "Nenhuma inscrição encontrada para este programa",
            "myAcademicProgress": "Meu Progresso Acadêmico",
            "gpaLabel": "GPA:",
            "gpaNotAvailable": "N/D",
            "disclaimer": "* As informações aqui apresentadas são apenas uma interpretação da sua Auditoria de Progresso de Curso e não constituem o seu registo académico oficial. Se tiver dúvidas ou precisar de esclarecimentos, por favor contacte o seu mentor ou agende uma reunião com um Conselheiro Académico.",
            "goBack": "Voltar",
            "completed": "Concluído",
            "credits": "Créditos"
        },
        "notificationsScreen": {
            "noNotificationsTitle": "Nenhuma Notificação Disponível",
            "noNotificationsMessage": "Não há itens disponíveis no momento."
        },
        "aiAssistanceScreen": {
            "title": "Assistente Companion",
            "infoPopup": {
                "message": "Este chatbot de inteligência artificial (IA) é alimentado por tecnologia de IA generativa que faz referência ao site da BYU-Pathway e ao site da Base de Conhecimento de Suporte. Este chatbot pode analisar perguntas, pesquisar os sites mencionados e resumir informações potencialmente relevantes. A IA generativa nem sempre está correta. Por favor, confirme pessoalmente a resposta fornecida por este chatbot lendo as seções que ele identifica nos sites mencionados. O uso deste chatbot é anônimo. Não insira nenhuma informação pessoal. Ao usar este chatbot, você concorda que tudo o que você inserir pode ser salvo e revisado pela equipe da Igreja para melhorar este chatbot e torná-lo mais preciso.",
                "button": "Reconhecer"
            },
            "assistantSelection": {
                "loading": "Carregando Assistente...",
                "hello": "Olá Companion!"
            },
            "typeBoxMessage" : "Digite uma mensagem...",
            "assistantSwitcher": {
                "title" :"Assistentes de IA",
                "options": [
                    { "label": "Assistente Companion" },
                    { "label": "Assistente de Curso" }
                ]
            }
        },
        "appsMenuScreen": {
            "title": "Aplicativos",
            "appsGrid": [
                { "AcademicCenter": "Centro Acadêmico" },
                { "Tickets": "Tickets" },
                { "Network": "Rede" },
                { "Registration": "Matrícula" },
                { "Jobs": "Vagas de Emprego" }
                ]
        },
        "academicCenterScreen": {
            "recommendedActions": {
            "title": "Ações Recomendadas",
            "carousel": [
                {
                "ResultHolds": {
                    "title": "Retenções de Resultado",
                    "description": "As Retenções de Conta exigem que você siga etapas específicas para se registrar e concluir o curso.",
                    "button": "Agir"
                }
                },
                {
                "EcclesiasticalEndorsement": {
                    "title": "Endosso Eclesiástico",
                    "description": "É hora de renovar seu Endosso Eclesiástico.",
                    "button": "Agir"
                }
                },
                {
                "HerbertJGrantScholarship": {
                    "title": "Bolsa de Estudo Herbert J. Grant",
                    "description": "Inscreva-se na Bolsa HJG até 21 de março.",
                    "button": "Agir"
                }
                },
                {
                "YouDidIt": {
                    "title": "🏆 Você conseguiu!",
                    "description": "Ótimo trabalho! Você concluiu todas as ações recomendadas."
                }
                }
            ]
            },
            "services": {
                "title": "Serviços",
                "carousel": [
                    { "enrollmentVerification": "Verificação de Matrícula" },
                    { "officialTransferRequest": "Solicitação de Transferência Oficial" },
                    { "academicAcception": "Aceitação Acadêmica" },
                    { "graduationApplication": "Solicitação de Colação de Grau" },
                    { "allServices": "Todos os Serviços" }
                ]
            },
            "academicProgress": {
                "title": "Progresso Acadêmico",
                "noEnrollmentDataAvailable": "Nenhum dado de matrícula disponível",
                "noEnrollmentsAvailable": "Nenhuma matrícula disponível",
                "loadingEnrollmentData": "Carregando dados de matrícula...",
                "carousel": [
                    {
                    "program": {
                            "courseTitle": "Desenvolvimento de Software",
                            "institution": "BYU-Idaho",
                            "credits": "créditos",
                            "progressBar": {
                                "percentage": 75,
                                "label": "Concluído"
                            },
                            "c1": "C1: Technical Support Engineer",
                            "c2": "C2: It Fundamentals",
                            "c3": "C3: System Administration",
                            "GPA": "GPA: 3.871",
                            "button": "Detalhes"
                        }
                    }
                ]
            },
            "courseRegistration": {
                "title": "Matrícula no Curso",
                "carousel": [
                    {
                    "term": "Período 2 de 2025",
                    "status": "Matriculado",
                    "courses": [
                        { "code": "COMM122", "name": "Interpersonal Communications" },
                        { "code": "IT350", "name": "Network Configuration and Design" },
                        { "code": "R1KY301", "name": "Power Platform" }
                    ],
                    "button": "Detalhes"
                    },
                    {
                    "term": "Período 3 de 2025",
                    "status": "Não Matriculado",
                    "courses": [
                        { "code": "COMM122", "name": "Interpersonal Communications" },
                        { "code": "IT350", "name": "Network Configuration and Design" },
                        { "code": "R1KY301", "name": "Power Platform" }
                    ],
                    "button": "Detalhes"
                    }
                ]
            },
            "courseAccess": {
                "title": "Acesso ao Curso",
                "goToClass":{
                    "title": "Ir para a Aula",
                    "description": "Abra seu Painel do Canvas para continuar com suas tarefas."
                }
            }
         },
          "hjgSection1Screen": {
            "header": {
                "title": "Inscrição para a Bolsa Heber J. Grant"
            },
            "descriptionHJG": {
                "title": "Bolsa de Estudo Heber J. Grant",
                "description": "BYU-Pathway Worldwide oferece uma bolsa de estudo baseada em necessidades, em homenagem a Heber J. Grant, um ex-presidente de A Igreja de Jesus Cristo dos Santos dos Últimos Dias. Para ser elegível para receber esta bolsa, você deve completar este módulo informativo.",
                "moduleSections": {
                    "title": "Este módulo contém cinco seções:",
                    "items": [
                            "1. Pesquisa",
                            "2. Persistência e Tenacidade",
                            "3. Amor pelo Aprendizado",
                            "4. Autossuficiência",
                            "5. Mordomia e Reabastecimento"
                        ]
                },
                "timeEstimate": "Este módulo deve levar cerca de 45 a 60 minutos para ser concluído. Se você não tiver tanto tempo, por favor, espere para iniciar o módulo em outro momento.",
                "resourceBenefitText": "Este recurso não só ajudará a BYU-Pathway a avaliar suas necessidades financeiras, mas também ajudará a cultivar as características necessárias para o seu sucesso contínuo como estudante da BYU-Pathway. Obrigado."
            },
            "bioSection": {
                "title": "Quem é Heber J. Grant?",
                "content": "Heber J. Grant foi o sétimo presidente de A Igreja de Jesus Cristo dos Santos dos Últimos Dias. Nascido em Salt Lake City em 1856, Grant foi criado por sua mãe, Rachel Ridgway Ivins Grant, depois que seu pai, Jedediah Grant (um conselheiro de Brigham Young) faleceu quando Heber tinha apenas alguns dias de idade. Heber foi chamado como presidente de estaca aos 23 anos e ordenado Apóstolo dois anos depois. Um dos incidentes mais dramáticos em seu serviço apostólico ocorreu em 1893, quando ele buscou auxílio divino para garantir empréstimos para salvar a Igreja. Os esforços de Grant protegeram a Igreja do colapso financeiro durante uma crise econômica nacional. As características e a vida de Heber J. Grant incorporam princípios de autossuficiência e persistência que ressoarão e serão uma força para muitos estudantes da BYU-Pathway em todo o mundo."
            },
            "form": {
                "sectionTitle": "Seção 1: Pesquisa da Bolsa Heber J. Grant",
                "sectionDescription": "Primeiro, para nos ajudar a entender melhor suas necessidades e situação atuais, responda às seguintes perguntas:",
                "questions": {
                    "parentsUniversityDegree": {
                        "question": "Algum de seus pais obteve um diploma universitário?",
                        "options": [
                        "Sim",
                        "Não",
                        "Não sei"
                        ]
                    },
                    "singleParent": {
                        "question": "Você é pai/mãe solteiro(a)?",
                        "options": [
                            "Sim",
                            "Não"
                        ]
                    },
                    "reliableHousing": {
                    "question": "Você tem moradia estavel?",
                    "options": [
                        "Não, não tenho moradia estavel e me preocupo onde estarei morando mensalmente",
                        "Não, luto para fazer pagamentos mensais de moradia, o que às vezes coloca minha situação de moradia em risco",
                        "Sim, tenho moradia estavel, mas fazer pagamentos mensais é um desafio para mim",
                        "Sim, tenho moradia estavel"
                    ]
                    },
                    "struggleMeals": {
                        "question": "Você tem dificuldade para ter comida suficiente para você e sua família fazerem três refeições por dia?",
                        "options": [
                            "Sim",
                            "Não",
                            "Às vezes"
                        ]
                    },
                    "accessDevice": {
                        "question": "Você tem acesso a um dispositivo (computador, telefone ou tablet) para completar seu curso?",
                        "options": [
                            "Não, preciso comprar um e não tenho certeza de como poderei pagar um",
                            "Não, preciso comprar um, mas tenho um plano para fazê-lo",
                            "Sim, tenho um, mas não é muito confiável",
                            "Sim, tenho um que funcionará para trabalhos acadêmicos"
                        ]
                    },
                    "reliableInternet": {
                        "question": "Você tem acesso a internet estavel?",
                        "options": [
                            "Não, e não tenho certeza de como pagarei pelo acesso",
                            "Não, mas tenho um plano para obter acesso",
                            "Sim, tenho acesso, mas luto para pagar por ele",
                            "Sim, tenho acesso a internet diária estavel"
                        ]
                    },
                    "tuitionAffordability": {
                        "question": "Sua mensalidade é acessível para você e sua família?",
                        "options": [
                            "Não, e não tenho certeza de como poderei pagar",
                            "Não, mas estou trabalhando em um plano",
                            "Sim, mas estou preocupado com os pagamentos contínuos",
                            "Sim, eu poderia fazer pagamentos únicos ou mensais"
                        ]
                    },
                    "circumstancesAffectingPayment": {
                        "question": "Existem outras circunstâncias que afetam sua capacidade de pagar sua educação?",
                        "options": [
                            "Não",
                            "Sim",
                            "Talvez",
                            "Informações adicionais que você gostaria de compartilhar"
                        ]
                    },
                    "additionalInformation": {
                        "label": "",
                        "placeholder": "Digite Aqui",
                        "description": "(Este campo aparece se 'Informações Adicionais' for selecionado para a pergunta anterior)"
                    }
                }
            },
            "nextButton": "Próximo",
            "saveProgressButton": "Salvar Progresso",
            "alert": "Todos os campos são obrigatórios",
            "message": "Progresso salvo.",
            "required": "Este campo é obrigatório."
        },
        "hjgSection2Screen": {
            "header": {
                "title": "Inscrição para a Bolsa Heber J. Grant",
                "buttons": [
                    { "label": "Salvar e Sair" },
                    { "label": "Sair Sem Salvar" }
                ]
            },
            "description": {
                "title": "Seção 2: Persistência e Tenacidade",
                "description": "A pobreza definiu os anos de crescimento de Heber, mas não de forma negativa. Ter pouco dinheiro era um desafio que nunca o deteve. Querendo aprender a arremessar uma bola de beisebol, mas não tendo dinheiro suficiente para uma bola, Heber ganhou o dinheiro engraxando botas para os inquilinos de sua mãe. Mais tarde, ele desejava ir ao Teatro Salt Lake; em vez de sentir pena por não ter dinheiro para comprar ingressos, ele conseguiu um emprego como carregador de água para os frequentadores do teatro e, assim, foi autorizado a assistir às peças.\n\nÀ medida que Heber crescia, sua persistência e fortaleza foram bem utilizadas em empreendimentos comerciais. Tendo recebido uma nomeação para a Academia Naval dos Estados Unidos, ele optou por permanecer perto de sua mãe e se tornar um empresário. Depois de terminar seus estudos aos 16 anos, Heber conseguiu um emprego como balconista de banco e aprendeu contabilidade. Sua honestidade, capacidade de trabalhar duro e grande desejo de aprender logo abriram muitas oportunidades. Aos 20 anos, ele havia sido nomeado assistente de caixa do Zion's Savings Bank and Trust Company e havia comprado uma agência de seguros. A pobreza da juventude de Heber o tornou compassivo e o preparou para liderar a Igreja após a Primeira Guerra Mundial, a Grande Depressão e a Segunda Guerra Mundial.",
                "video": {
                    "text": "Assista ao seguinte vídeo:",
                    "transcriptLinkText": "Se você preferir ler uma transcrição deste vídeo, clique aqui"
                }
            },
            "form": {
                "questions": {
                    "usedMoneyFor": {
                        "question": "Como você usou dinheiro ou recursos para superar desafios relacionados à sua educação?",
                        "options": [
                            "Comprou materiais de estudo",
                            "Pagou pelo transporte",
                            "Cobriu despesas de moradia",
                            "Investiu em um dispositivo para o curso",
                            "Outro (especifique)"
                        ]
                    },
                    "scriptureReview": {
                        "text": "Por favor, escolha uma das seguintes escrituras para revisar:",
                        "links": [
                            "Mosias 2:14",
                            "Mosias 27:5",
                            "Doutrina e Convênios 42:42",
                            "Moisés 4:25",
                            "Joseph Smith - História 1:55"
                        ]
                    },
                    "scriptureSelected": {
                        "question": "Qual(is) escritura(s) você selecionou? De que maneiras específicas o trabalho nos ajuda a nos tornar mais autossuficientes?",
                        "placeholder": "Digite Aqui"
                    }
                }
            },
            "previousButton": "Anterior",
            "nextButton": "Próximo",
            "saveProgressButton": "Salvar Progresso",
            "savedAlertMessage": "Progresso salvo.",
            "fieldsRequired": "Todos os campos são obrigatórios",
            "required": "Este campo é obrigatório."
        },
        "hjgSection3Screen": {
           "header": {
               "title": "Inscrição para a Bolsa Heber J. Grant"
           },
           "section": {
               "title": "Seção 3: Amor pelo Aprendizado",
               "description": "Em 1901, Heber J. Grant foi chamado para abrir e presidir a Missão Japonesa. Lá, Élder Grant dedicou a terra para a pregação e recepção do evangelho. Mas a missão não floresceu imediatamente, em parte devido às diferenças culturais e barreiras de comunicação. Isso não deteve o Élder Grant. Ele trabalhou diligentemente para aprender a nova língua e a nova cultura em que estava imerso. Apesar do sucesso missionário limitado na época, o Élder Grant supervisionou a primeira tradução do Livro de Mórmon para o japonês. Sobre seus esforços missionários, o Presidente Grant ensinou mais tarde: \"Quero que vocês, jovens, saibam que em todos os meus trabalhos me aproximei mais do Senhor, e realizei mais e tive mais alegria no campo missionário do que nunca antes ou depois. O homem existe para ter alegria, e a alegria que tive no campo missionário foi superior a qualquer outra que já havia experimentado em outro lugar.\"\n\nO Presidente Grant adorava dar livros a todos ao seu redor; ele sabia que aprender era uma das coisas mais importantes que se podia fazer para progredir, e sentia uma verdadeira sensação de paz ao dar livros que o haviam ensinado no passado. Ele distribuiu milhares deles, a maioria dos quais ele pessoalmente dedicou. Ao dar tantos presentes, às vezes perdia a noção do que havia feito. \"Uma vez dei um livro a um homem\", disse ele, \"e ele me agradeceu muito gentilmente, e disse: 'Irmão Grant, aprecio muito este livro. É a terceira cópia que você me dá dele.'\" Após essa experiência, o Presidente Grant manteve um índice dos livros que havia dado."
           },
           "form": {
               "questions": {
               "question1": {
                   "question": "Como Heber J. Grant ganhou dinheiro para comprar uma bola de beisebol?",
                   "options": [
                    "Engraxando botas para os inquilinos de sua mãe",
                    "Carregando água para os frequentadores do teatro",
                    "Trabalhando como balconista de banco",
                    "Vendendo seguros"
                   ]
               }
               }
           },
           "previousButton": "Anterior",
           "nextButton": "Próximo",
           "saveProgressButton": "Salvar Progresso",
           "progressSavedMessage": "Progresso salvo.",
           "requiredFieldsAlert":"Todos os campos são obrigatórios",
           "required": "Por favor, selecione uma resposta."
        },
        "hjgSection4Screen": {
           "header": {
               "title": "Inscrição para a Bolsa Heber J. Grant"
           },
           "section": {
               "title": "Seção 4: Autossuficiência",
               "description": "Em 1936, sete anos após o início da Grande Depressão, os Estados Unidos ainda não haviam emergido das enormes perdas e tendências de queda que começaram com a quebra da bolsa de valores em 1929. Quando o Presidente Heber J. Grant falou sobre o sistema de bem-estar em 1936, ele imaginou que \"nenhuma nova máquina da Igreja\" seria necessária, mas que \"organizações de estaca e ala, os quóruns do sacerdócio, a Sociedade de Socorro e as várias organizações auxiliares [prestariam] o serviço máximo [que poderiam] em interesse do bem-estar geral da Igreja.\" O Senhor já havia estabelecido a organização necessária para abençoar os pobres e necessitados — os quóruns do sacerdócio estavam em vigor, as Sociedades de Socorro estavam organizadas e o sacerdócio de Deus estava na terra.\n\nDesde que o programa de bem-estar foi introduzido em 1936, os membros da Igreja têm trabalhado juntos para aliviar o sofrimento daqueles que necessitam. Crises econômicas, desastres naturais, desemprego, doenças e deficiências, ou tempos de perda, tudo exigiu a direção do sacerdócio para garantir que as necessidades fossem atendidas e que indivíduos e famílias fossem abençoados. Ao longo dos anos, milhões de membros têm doado voluntariamente seu tempo e talentos para abençoar outras pessoas.\n\nDesde a criação do Armazém do Bispo, muitos presidentes dos Estados Unidos e outros líderes de todo o mundo visitaram o renomado armazém para aprender mais sobre como eles podem implementar ideologias de bem-estar semelhantes às do Presidente Heber J. Grant. \"O objetivo da Igreja é ajudar as pessoas a se ajudarem. O trabalho deve ser re-entronizado como o princípio regente da vida de nossos membros da Igreja\" (Heber J. Grant, em Conference Report, out. de 1936, 3)."
           },
           "form": {
               "questions": {
               "question1": {
                   "question": "Qual era o propósito do programa de bem-estar introduzido pelo Presidente Heber J. Grant?",
                   "options": [
                    "Fornecer assistência governamental aos desempregados",
                    "Ajudar os membros da Igreja a se ajudarem e aliviar o sofrimento",
                    "Estabelecer nova máquina da Igreja para auxílio financeiro",
                    "Reunir recursos para investimentos futuros"
                   ]
               }
               }
           },
           "previousButton": "Anterior",
           "nextButton": "Próximo",
           "saveProgressButton": "Salvar Progresso",
           "progressSavedMessage": "Progresso salvo.",
           "requiredFieldsAlert": "Todos os campos são obrigatórios",
           "required": "Por favor, selecione uma resposta."
        },
        "hjgSection5Screen": {
           "header": {
                "title": "Inscrição para a Bolsa Heber J. Grant"
           },
           "section": {
                "title": "Seção 5: Mordomia e Reabastecimento"
           },
           "form": {
           "questions": {
               "lowTuition": {
               "question": "A baixa mensalidade da BYU-Pathway é possível tanto pelo apoio de A Igreja de Jesus Cristo dos Santos dos Últimos Dias quanto por doadores filantrópicos. Se você gostaria de agradecer aos indivíduos que doaram dinheiro para reduzir seus custos de mensalidade, o que você diria a eles? (Seu comentário pode ser compartilhado com doadores atuais e futuros.)",
               "placeholder": "Digite Aqui"
               }
           }
           },
           "previousButton": "Anterior",
           "submitButton": "Enviar",
           "saveProgressButton": "Salvar Progresso",
           "progressSavedMessage": "Progresso salvo.",
           "requiredFieldsAlert": "Todos os campos são obrigatórios",
           "required": "Este campo é obrigatório.",
           "thankYouMessage":"Por favor, insira sua mensagem de agradecimento.",
           "submissionAlerts": {
                "successMessage": "Sua solicitação foi enviada com sucesso.",
                "errorMessage": "Não encontrado",
                "loadingDescription": "Enviando Inscrição para a Bolsa Heber J. Grant..."
           }
        },
        "enrollmentVerificationScreen": {
          "title": "Verificação de Matrícula",
          "description": "Este formulário permite que os alunos solicitem uma verificação oficial de matrícula para fornecer a terceiros como comprovante de sua matrícula na BYU-Pathway Worldwide.",
          "other": "Para detalhes sobre seus cursos de matrícula, visite seu portal do aluno. Na página inicial, navegue até Aulas, bloco para informações de matrícula atualizadas do aplicativo.",
          "form": {
              "question1": {
                  "question": "Para qual instituição você gostaria de sua verificação de matrícula?*",
                  "description": "As verificações de matrícula são específicas para a matrícula.",
                  "options": [
                    "BYU-Idaho",
                    "Ensign College",
                    "BYU Pathway"
                  ]
              },
              "question2": {
                  "question": "O que você gostaria de incluir em sua verificação de matrícula?",
                  "description": "Todas as verificações listarão seu nome completo e seu ID de estudante. Escolha o que mais você gostaria de fornecer abaixo.",
                  "options": [
                    "Status de matrícula",
                    "Data de nascimento",
                    "Endereço",
                    "Número de seguro social",
                    "Programas declarados",
                    "Média de notas (GPA)",
                    "Credenciais, certificados e diplomas obtidos",
                    "Data de desligamento, se aplicável",
                    "Situação acadêmica",
                    "Custo da mensalidade por hora de crédito"
                  ]
              },
              "question3": {
                  "question": "Gostaria de incluir detalhes sobre seus cursos atualmente matriculados?",
                  "description": "As seguintes informações serão fornecidas para quaisquer cursos em que você esteja atualmente matriculado: código do curso, seção, título, créditos e nome do instrutor.",
                  "options": [
                    "Apenas incluir informações sobre meus cursos atuais",
                    "Não, não incluir informações sobre meus cursos atuais"
                  ]
              },
              "question4": {
                  "question": "O que você gostaria de incluir em sua verificação de matrícula?",
                  "description": "Todas as verificações listarão seu nome completo e seu ID de estudante. Escolha o que mais você gostaria de fornecer abaixo.",
                  "options": [
                    "Fornecer resumo do período atual",
                    "Fornecer resumo do período futuro"
                  ]
              },
              "question5": {
                  "question": "Qual razão melhor descreve por que você precisa de uma verificação de matrícula?",
                  "options": [
                    "Fornecer ao empregador",
                    "Solicitação de moradia",
                    "Bolsa de estudo / Ajuda financeira",
                    "Outro"
                  ]
              },
              "Button": "Enviar"
          }
        },
        "officialTranscriptScreen": {
          "title": "Histórico Escolar Oficial",
          "firstScreen": {
                "description": "Um Histórico Escolar Oficial é uma cópia do seu registro acadêmico permanente emitido pelo Registro Acadêmico e é tipicamente enviado a terceiros, por exemplo, (faculdades, programas de pós-graduação, empresas).",
                "unofficialTranscript": "Um Histórico Escolar Não Oficial está disponível apenas através da sua conta de estudante e é tipicamente para uso pessoal.",
                "note": "* Por favor, entre em contato com o destinatário para saber qual tipo de histórico escolar eles aceitarão e atende aos seus requisitos.",
                "button": "Continuar"
            },
            "secondScreen": {
                "title": "Política de Solicitação de Histórico Escolar Oficial",
                "policyDetails": {
                "p1": "A BYU-Pathway Worldwide cobrirá o custo das duas primeiras solicitações de histórico escolar oficial para cada instituição:",
                "listItems": [
                    "BYU-Pathway Worldwide",
                    "BYU-Idaho",
                    "Ensign College"
                ],
                "p2": "Solicitações adicionais de histórico escolar oficial podem estar sujeitas a uma taxa. Os alunos são incentivados a planejar de acordo.",
                "p3": "Os alunos podem visualizar seus históricos escolares não oficiais sem custo através de seu portal do aluno."
                },
                "form": {
                "question1": {
                    "question": "De qual instituição você está solicitando seu histórico escolar?",
                    "answers": [
                    "Selecionar item",
                    "BYU-Pathway Worldwide",
                    "BYU-Idaho",
                    "Ensign College"
                    ]
                },
                "question2": {
                    "question": "*Nome da instituição, grupo ou pessoa que receberá este histórico escolar:",
                    "answerBox": "Digite aqui"
                },
                "question3": {
                    "question": "*Digite o e-mail do destinatário que deve receber seu histórico escolar oficial:",
                    "answerBox": "Digite aqui"
                }
                },
                "errorAlert": {
                "title": "Erro!",
                "description": "Não encontrado",
                "button": "Voltar"
                },
                "validation": {
                "requiredField": "Este campo é obrigatório",
                "invalidEmail": "E-mail inválido"
                },
                "alertMessages": {
                "requestSuccess": "Sua solicitação foi enviada com sucesso.",
                "networkError": "Erro de rede",
                "submittingRequest": "Enviando solicitação de histórico escolar..."
                },
                "userDataError": "Erro ao carregar dados do usuário",
                "continueButton": "Continuar"
            }
        },
        "AcademicExceptionsScreen": {
            "title": "Exceções Acadêmicas",
            "disclaimer": {
            "title": "Aviso Legal:",
            "disclaimer": "A submissão deste pedido não garante aprovação. A aprovação ou negação desta petição pode afetar sua mensalidade, status acadêmico, status internacional, etc. É sua responsabilidade explorar e entender esses impactos. As decisões do comitê são permanentes e finais."
            },
            "form": {
            "question1": {
                "question": "Qual exceção acadêmica você gostaria de escalar?",
                "answers": [
                "Selecionar item",
                "Retirada/Cancelamento",
                "Outro"
                ]
            },
            "withdrawDrop": {
                "question": "Selecione o termo para o qual você gostaria de submeter a exceção",
                "answers": [
                "Selecionar item",
                "Uma Opção"
                ],
                "options": {
                "withdraw": "Retirada",
                "drop": "Cancelamento"
                }
            },
            "Other": {
                "question": "Por favor, explique qual é a sua petição de exceção acadêmica.*",
                "typingBox": "Digite aqui"
            },
            "button": "Continuar",
            "noCoursesFound": "Nenhum curso encontrado",
            "selectCourses": "Selecione os cursos para os quais você gostaria de enviar a exceção. *",
            "whatToRequest": "O que você gostaria de solicitar? *",
            "lastDateParticipation": "Qual foi a sua última data aproximada de participação no(s) curso(s)? *",
            "reasonForNotDropping": "O que o impediu de entrar no portal de registro e cancelar seu(s) curso(s) antes do prazo de cancelamento? *",
            "furtherInfoNotDropping": "Forneça mais informações (inclua datas específicas de eventos, se possível) sobre por que você não cancelou seu(s) curso(s) antes do prazo. *",
            "whyDropAccurate": "Por que um cancelamento seria um reflexo mais preciso de sua experiência no curso? *",
            "reasonForNotWithdrawing": "O que o impediu de entrar no portal de registro e se retirar do(s) seu(s) curso(s) antes do prazo de retirada? *",
            "furtherInfoNotWithdrawing": "Forneça mais informações (inclua datas específicas de eventos, se possível) sobre por que você não se retirou do(s) seu(s) curso(s) antes do prazo. *",
            "whyWAccurate": "Por que uma nota \"W\" [ou um cancelamento] seria um reflexo mais preciso de sua experiência neste(s) curso(s)? *",
            "impactOfDenial": "Se sua petição for negada, o que isso significa para você daqui para frente? *",
            "circumstancesPartialWithdrawal": "Quais foram as circunstâncias que o levaram a precisar peticionar para algumas, mas não todas as suas aulas neste semestre? *"
            },
            "successAlert": {
                "Title": "Sucesso!",
                "message": "Sua solicitação foi enviada com sucesso.",
                "button": "Voltar"
            },
            "courseWithdrawalRequest": {
                "title": "Solicitação de Retirada de Curso:",
                "description1": "A data de cancelamento será retroativa ao Prazo de Retirada de Curso e o aluno receberá uma nota \"W\" em seu histórico.",
                "description2": "Uma nota \"W\" não afeta o GPA, mas indica que o aluno iniciou o curso e posteriormente se retirou."
            },
            "courseDropRequest": {
                "title": "Solicitação de Cancelamento de Curso:",
                "description": "A data de cancelamento será retroativa ao Prazo de Cancelamento/Cancelamento Automático (dia 8 do semestre), a nota do curso será removida do registro."
            },
            "common": {
                "required": "Este campo é obrigatório",
                "atLeastOne": "Por favor, selecione pelo menos um curso",
                "validDate": "Insira uma data válida",
                "userDataError": "Erro ao carregar dados do usuário",
                "errorLoading": "Erro ao carregar Exceções Acadêmicas",
                "submitting": "Enviando solicitação de exceção acadêmica...",
                "notFound": "Não encontrado",
                "networkError": "Erro de rede",
                "typeHere": "Digite aqui"
            }
        },
        "graduationApplicationScreen": {
            "title": "Solicitação de Graduação",
            "description": "Esta solicitação é para EnglishConnect, PathwayConnect e todos os Certificados e Diplomas oferecidos através da BYU-Pathway Worldwide em parceria com a BYU-Idaho e a Ensign College.",
            "form": {
            "secondaryDescription": "Você precisará preencher um formulário de inscrição para formatura separado para cada credencial para a qual está se candidatando.",
            "termSemesterQuestion": {
                "question": "Em qual período ou semestre você concluiu/irá concluir os requisitos para as credenciais para as quais está se candidatando?",
                "options": {
                "default": "Selecione um termo / semestre",
                "placeholder": "",
                "option1": "2025 - Período 2",
                "option2": "2025 - Período 3"
                }
            },
            "credentialRequiredQuestion": {
                "question": "Para quais credenciais você está concluindo os requisitos?",
                "options": [
                    "Selecionar credencial",
                    "Certificado de Conclusão do Pathway Connect",
                    "Certificado de Conclusão do English Connect",
                    "Certificado",
                    "Diploma de Associado",
                    "Bacharelado"
                ]
            },
            "certificateInstitutionQuestion": {
                "question": "De qual instituição você receberá seu diploma? *",
                "options": {
                "default": "Selecione um",
                "BYU-Idaho": "BYU-Idaho",
                "Ensign College": "Ensign College"
                }
            },
            "certificateNameLabel": "Qual é o nome do certificado para o qual você está se candidatando? *",
            "certificateNamePlaceholder": "",
            "declaredMajorLabel": "Qual é o seu curso principal atualmente declarado? *",
            "declaredMajorPlaceholder": "",
            "catalogYearLabel": "Qual é o seu ano de catálogo atual? *",
            "catalogYearPlaceholder": "",
            "commencementDeadlineMessage": "O prazo para ter seu nome incluído no programa para a próxima cerimônia de formatura presencial em {formattedDeadline} já passou. Os alunos ainda podem comprar um capelo e beca e participar do evento de formatura presencial, mas não terão seus nomes no programa."
            },
            "requiredFieldsNote": "Campos marcados com * são obrigatórios.",
            "submitButton": "Enviar",
            "validation": {
            "required": "Este campo é obrigatório"
            },
            "loading": {
            "initialLoading": "Carregando dados do usuário",
            "submitLoading": "Enviando inscrição para formatura..."
            },
            "alert": {
            "notFound": "Não encontrado",
            "networkError": "Erro de rede",
            "successMessage": "Sua solicitação foi enviada com sucesso."
            },
            "errorState": {
            "userDataError": "Erro ao carregar dados do usuário"
            }
        },
        "submittedRequestsScreen": {
            "filter": {
            "label": "Filtrar por:",
            "options": [
                "Todas as Solicitações",
                "Solicitações Abertas",
                "Solicitações Fechadas"
            ],
            "emptyOptions": [
                "Nenhuma solicitação encontrada.",
                "Nenhuma solicitação aberta encontrada.",
                "Nenhuma solicitação fechada encontrada."
            ]
            },
            "goBack": "Voltar",
            "statusLabels": {
            "active": "Ativo",
            "hold": "Em Espera",
            "closed": "Fechado"
            },
            "loadingData": "Carregando...",
            "errorLoadingUserData": "Erro ao carregar dados do usuário",
            "errorFetchingRequests": "Erro: ",
            "emptyListDescription": "Nenhuma {filter} disponível."
        },
        "submittedRequestsDetailsScreen": {
            "loadingData": "Carregando...",
            "errorLoadingUserData": "Erro ao carregar dados do usuário",
            "requestDetailsHeader": "Detalhes da Solicitação",
            "titleLabel": "Título:",
            "dateCreatedLabel": "Data de Criação:",
            "requestNumberLabel": "Número da solicitação:",
            "statusLabels": {
                "active": "Ativo",
                "hold": "Em Espera",
                "closed": "Fechado"
            },
            "alertMessages": {
                "commentSuccess": "Seu comentário foi enviado com sucesso.",
                "reopenSuccess": "Sua solicitação foi reaberta com sucesso.",
                "notFound": "Não encontrado",
                "networkError": "Erro de rede",
                "loadingDetails": "Carregando detalhes da solicitação..."
            },
            "commentButtonText": "Comentar",
            "reopenButtonText": "Reabrir",
            "goBackButtonText": "Voltar"
        },
        "servicesScreen": {
            "title": "Serviços",
            "servicesOptions": [
                {
                    "officialTranscript": "Histórico Escolar Oficial",
                    "description": "Solicite e receba históricos escolares oficiais para fins acadêmicos e profissionais."
                },
                {
                    "academicExceptions": "Exceções Acadêmicas",
                    "description": "Envie e Revise Solicitações de Exceção às Políticas Acadêmicas"
                },
                {
                    "enrollmentVerification": "Verificação de Matrícula",
                    "description": "Obtenha Comprovante Oficial de Matrícula para Emprego, Bolsa de Estudo ou Outras Verificações"
                },
                {
                    "graduationApplication": "Solicitação de Graduação",
                    "description": "Solicite a Graduação e Garanta que Você Atenda a Todos os Requisitos"
                },
                {
                    "registration": "Matrícula",
                    "description": "Matricule-se em um Curso, Gerencie sua Grade de Aulas e Acesse Prazos Importantes de Matrícula"
                },
                {
                    "submitRequest": "Enviar Solicitações",
                    "description": "Check the status of your Academic Services requests: All, Open, or Closed."
                }
            ]
        },
        "ticketsScreen": {
            "title": "Tickets",
            "ticketsOptions": [
                {
                    "openTickets": "Tickets Abertos",
                    "description": "Acompanhe tickets em andamento"
                },
                {
                    "closedTickets": "Tickets Fechados",
                    "description": "Visualize tickets que foram resolvidos"
                },
                {
                    "submitNewTicket": "Enviar Novo Ticket",
                    "description": "Crie e envie uma nova solicitação"
                },
                {
                    "contactUs": "Entre em Contato",
                    "description": "Ligue para nossa linha de suporte para assistência"
                }
            ]
        },
        "casesProvider": {
            "loadingState": "Carregando...",
            "errorState": "Erro: {errorMessage}",
            "userDataError": "Erro ao carregar dados do usuário",
            "caseStates": {
            "0": "Ativo",
            "1": "Resolvido",
            "2": "Cancelado"
            },
            "caseStatuses": {
            "1": "Em andamento",
            "2": "Em espera",
            "5": "Resolvido",
            "6": "Cancelado",
            "2000": "Combinado"
            },
            "openTicketsTitle": "Tickets Abertos",
            "closedTicketsTitle": "Tickets Fechados",
            "noOpenTicketsAvailable": "Nenhum ticket aberto disponível",
            "noClosedTicketsAvailable": "Nenhum ticket fechado disponível",
            "status": "Status:",
            "ticketDetails": {
            "title": "Detalhes do Ticket",
            "fields": {
                "titleLabel": "Título:",
                "dateCreatedLabel": "Data de Criação:",
                "ticketNumberLabel": "Número do Ticket:"
            }
            }
        },
        "openCaseDetailScreen": {
            "alerts": {
            "commentSuccess": "Seu comentário foi enviado com sucesso.",
            "notFound": "Não encontrado",
            "networkError": "Erro de rede"
            },
            "loading": {
            "main": "Carregando..."
            },
            "buttons": {
            "comment": "Comentar"
            }
        },
        "closedCaseDetailScreen": {
            "reopenCase": {
            "comments": "Reabrir ticket",
            "successMessage": "Seu caso foi reaberto com sucesso."
            },
            "alerts": {
            "notFound": "Não encontrado",
            "networkError": "Erro de rede"
            },
            "loading": {
            "description": "Carregando detalhes do caso..."
            },
            "buttons": {
            "reopen": "Reabrir"
            }
        },
        "contactUsPopUp": {
            "helpMessage": "Precisa de ajuda? — Você pode nos ligar para",
            "phoneNumber": "+1 (801) 655-6424",
            "hours": "Seg–Sex, 9h às 17h (horário local)",
            "callButton": "Ligar para +1 (801)-655-6424"
        },
        "submitNewTicketScreen": {
            "title": "Enviar um Novo Ticket",
            "form": {
            "mainTopic": {
                "label": "Tópico Principal",
                "options": [
                "Selecione um item",
                "Canvas – Problema no Curso",
                "Canvas – Problema de Login",
                "Acesso ao Canvas",
                "Módulo EnglishConnect – Problema de Login",
                "EnglishConnect",
                "Módulo EnglishConnect – Problema no Curso",
                "Finanças – Problema de Pagamento",
                "Finanças – Desconto Heber J. Grant",
                "Dúvida sobre Reuniões-Financeiro",
                "Retenção-Reunião",
                "Retenção - Endosso Eclesiástica",
                "Reunião com um Orientador Acadêmico",
                "Orientação",
                "Microsoft Office – Problema de Login",
                "Suporte Missionário",
                "Portal do Estudante – Problema de Login",
                "Bem-estar do Estudante",
                "Avaliação de Transferência",
                "Estágio/Trabalho",
                "Outros"
                ]
            },
            "detailedDescription": {
                "label": "Descrição Detalhada",
                "placeholder": "Digite aqui"
            },
            "preferredContactMethod": {
                "label": "Método de Contato Preferido",
                "options": [
                "Selecione um item",
                "Email",
                "Telefone"
                ]
            },
            "contactInfo": {
                "label": "Informações de Contato",
                "placeholder": "Digite aqui"
            },
            "screenshotUpload": {
                "label": "Envie uma captura de tela com seu ticket",
                "buttonText": "Anexar Arquivo",
                "description": "Este arquivo deve ser do tipo PNG-JPG-JPEG."
            }
            },
            "submitButton": "Enviar",
            "submissionLoading": "Enviando seu ticket...",
            "submissionSuccessMessage": "Seu ticket foi enviado com sucesso. Obrigado!",
            "submissionErrorMessage": "Ocorreu um problema ao enviar seu ticket. Por favor, tente novamente mais tarde."
        },
        "contactUsScreen": {
            "text": "Precisa de ajuda? - Você pode nos ligar no número 1-801-655-6424.\nSeg-Sex, das 9h às 17h (horário local).",
            "callButton": {
                "label": "Ligar para +1 (801)-655-6424"
            }
        },
        "networkScreen": {
            "title": "Rede",
            "networkOptions": [
                {
                    "mentorInformation": "Informações do Mentor",
                    "description": "Acesse detalhes sobre mentores e como se conectar com eles."
                },
                {
                    "gatheringInformation": "Informações de Reunião",
                    "description": "Encontre detalhes sobre as próximas reuniões, locais e horários."
                },
                {
                    "contactUs": "Entre em Contato",
                    "description": "Ligue para nossa linha de suporte para assistência."
                }
            ]
        },
        "mentorInformationScreen": {
            "title": "Informações do Mentor",
            "description": "Os Mentores da BYU Pathway são um recurso para os alunos em sua jornada educacional, oferecendo estratégias para o sucesso, lembretes importantes, conectando os alunos a recursos de apoio e fornecendo encorajamento para ajudar os alunos a alcançar seus objetivos.",
            "noMentorMessage": "Nenhuma informação de mentor disponível no momento.",
            "loading": "Aguardando informações do mentor"
        },
        "mentorDisplay": {
            "yourMentorInformation": "Informações do seu Mentor",
            "name": "Nome:",
            "email": "E-mail:",
            "phone": "Telefone:",
            "notAvailable": "Não disponível",
            "requestAMentor": "Solicitar um Mentor",
            "mentorConcernForm": "Formulário de Preocupação com o Mentor"
        },
        "requestMentor": {
            "headerTitle": "Solicitar um Mentor",
            "pageTitle": "Solicitar um Mentor",
            "detailsLabel": "Por favor, descreva em detalhe por que você gostaria de solicitar um mentor.",
            "detailsPlaceholder": "Digite aqui",
            "submitButton": "Enviar",
            "requiredField": "Este campo é obrigatório",
            "successMessage": "Mentor atribuído com sucesso",
            "errorMessage": "Falha ao atribuir mentor",
            "loadingDescription": "Enviando Solicitação..."
        },
        "mentorConcern": {
            "headerTitle": "Formulário de Preocupação com o Mentor",
            "generalCategoryQuestion": "Por favor, selecione uma categoria geral *",
            "generalCategoryOptions": {
            "default": "Selecione um item",
            "option1": "O Mentor não respondeu e 24 horas se passaram.",
            "option2": "O Mentor não forneceu as respostas ou informações necessárias.",
            "option3": "Gostaria de obter as informações de contato do meu Mentor.",
            "option4": "Não me foi atribuído um Mentor e estou atualmente matriculado(a)."
            },
            "detailsLabel": "Por favor, adicione quaisquer detalhes adicionais sobre a experiência com o Mentor.",
            "detailsPlaceholder": "Digite aqui",
            "contactMethodQuestion": "Método de Contato Preferido *",
            "contactMethodOptions": {
            "default": "Selecione um item",
            "option1": "Email",
            "option2": "Telefone"
            },
            "contactInfoLabel": "Informações de Contato",
            "contactInfoPlaceholder": "Digite aqui",
            "requiredFieldsNote": "Campos marcados com * são obrigatórios",
            "submitButton": "Enviar",
            "validationRequired": "Este campo é obrigatório",
            "successMessage": "Seu formulário foi enviado com sucesso. Obrigado!",
            "errorMessage": "Não foi possível processar sua preocupação neste momento. Por favor, tente enviar novamente em alguns minutos."
        },
        "gatheringInformationScreen": {
            "title": "Informações da Reunião",
            "noGatheringsMessage": "Você não está atualmente envolvido em nenhuma reunião.",
            "loadingDescription": "Carregando informações da reunião...",
            "pathwayConnectTitle": "Informações da Reunião do PathwayConnect",
            "englishConnectTitle": "Informações da Reunião do EnglishConnect",
            "noGathering": "Você não está atualmente matriculado(a) em nenhuma reunião"
        },
        "jobsScreen": {
            "title": "Vagas de Emprego",
            "options": [
                {
                "jobsAvailable": "Vagas Disponíveis",
                "description": "Explore oportunidades de emprego de nível inicial que correspondam às suas habilidades e objetivos de carreira."
                },
                {
                "jobsAppliedTo": "Vagas Candidatadas",
                "description": "Acompanhe o status de sua candidatura a empregos e mantenha-se atualizado sobre possíveis oportunidades."
                },
                {
                "jobProfile": "Perfil de Emprego",
                "description": "Crie e gerencie seu perfil de emprego para mostrar suas habilidades e experiência."
                }
            ]
        },
        "jobsAvailableScreen": {
            "title": "Oportunidades de Emprego",
            "noJobsAvailableMessage": "Vazio",
            "browseJobsButton": "Procurar Todas as Vagas",
            "searchPlaceholder": "Buscar vagas...",
            "filterButton": "Filtrar",
            "errorLoadingJobs": "Erro ao carregar Oportunidades de Emprego",
            "processingRequest": "Processando solicitação",
            "jobDetails": "Detalhes da Vaga",
            "company": "Empresa:",
            "title": "Cargo:",
            "dateCreated": "Data de Criação:",
            "description": "Descrição",
            "addResumePrompt": "Adicione seu currículo aqui: (em PDF) *",
            "resumeRequired": "Currículo é obrigatório.",
            "noResumeSelected": "Nenhum arquivo de currículo foi selecionado.",
            "updateJobApplication": "Atualizar Inscrição de Vaga",
            "notFound": "Não encontrado",
            "applicationUpdatedSuccessfully": "Sua inscrição de vaga foi atualizada com sucesso.",
            "submissionFailed": "Falha no envio: ",
            "unknownError": "Erro desconhecido",
            "networkError": "Erro de rede. Por favor, verifique sua conexão com a internet.",
            "removingApplication": "Removendo inscrição de vaga",
            "removeApplication": "Remover Inscrição",
            "applicationRemovedSuccessfully": "Sua inscrição de vaga foi removida com sucesso.",
            "removalFailed": "Falha na remoção: ",
            "loadingLanguage": "Carregando idioma...",
            "applyingToJobOpportunity": "Candidatando-se à vaga de emprego...",
            "applyForThisJob": "Candidatar-se a esta Vaga",
            "applicationSubmittedSuccessfully": "Sua candidatura de emprego foi enviada com sucesso."
        },
        "jobsAppliedToScreen": {
            "noJobsAvailableMessage": "Vazio",
            "errorLoadingJobs": "Erro ao carregar Oportunidades de Emprego",
            "processingRequest": "Processando solicitação",
            "jobDetails": "Detalhes da Vaga",
            "company": "Empresa:",
            "title": "Cargo:",
            "dateCreated": "Data de Criação:",
            "description": "Descrição",
            "addResumePrompt": "Adicione seu currículo aqui: (em PDF) *",
            "resumeRequired": "Currículo é obrigatório.",
            "noResumeSelected": "Nenhum arquivo de currículo foi selecionado.",
            "updateJobApplication": "Atualizar Inscrição de Vaga",
            "notFound": "Não encontrado",
            "applicationUpdatedSuccessfully": "Sua inscrição de vaga foi atualizada com sucesso.",
            "submissionFailed": "Falha no envio: ",
            "unknownError": "Erro desconhecido",
            "networkError": "Erro de rede. Por favor, verifique sua conexão com a internet.",
            "removingApplication": "Removendo inscrição de vaga",
            "removeApplication": "Remover Inscrição",
            "applicationRemovedSuccessfully": "Sua inscrição de vaga foi removida com sucesso.",
            "removalFailed": "Falha na remoção: "
        },
        "jobProfileNavScreen": {
            "title": "Perfil de Emprego",
            "submitProfile": "Enviar Perfil",
            "complete": "Concluído",
            "sections": [
                {
                "section1": "Seção 1",
                "description": "Compartilhe seu status de emprego, conceda permissões de compartilhamento e liste seu histórico de trabalho."
                },
                {
                "section2": "Seção 2",
                "description": "Compartilhe como podemos contatá-lo, suas preferências de trabalho, habilidades linguísticas, educação e acesso à tecnologia."
                },
                {
                "section3": "Seção 3",
                "description": "Você será direcionado para um aplicativo da web conveniente para concluir um teste rápido de velocidade da internet e um teste de velocidade de digitação."
                }
            ],
            "footerText": "Por favor, complete seu perfil.",
            "errorLoadingJobs": "Erro ao carregar Oportunidades de Emprego"
        },
        "jobProfileSection1Screen": {
            "title": "Perfil Profissional - Seção 1",
            "introduction": "Bem-vindo ao Perfil de Empregos. Esta ferramenta nos ajuda a coletar informações essenciais para apoiar seus objetivos de carreira. Por favor, preencha-o com honestidade e completamente para que possamos entender melhor seus objetivos. Se precisar de uma pausa, clique em Salvar Progresso para retornar e continuar mais tarde.",
            "missingFields": "There are missing or invalid fields:",
            "requiredEmploymentHistory": "Histórico de Emprego não pode estar vazio",
            "form": {
                "termsOfUse": {
                    "title": "Termos de Uso",
                    "questions": [
                        {
                        "question1": "Você está procurando um emprego melhor?",
                        "options": [
                            "Selecionar um item",
                            "Sim",
                            "Não"
                            ]
                        },
                        {
                        "question2": "Temos sua permissão para compartilhar suas informações com outros departamentos da Igreja de Jesus Cristo dos Santos dos Últimos Dias?",
                        "options": [
                            "Selecionar um item",
                            "Sim",
                            "Não"
                            ]  
                        },
                        {
                        "question3": "Temos sua permissão para compartilhar suas informações com empresas de recrutamento terceirizadas e outros empregadores?",
                        "options": [
                            "Selecionar um item",
                            "Sim",
                            "Não"
                            ]
                        }
                    ],
                    "infoButton": {
                        "label": "Clique aqui para detalhes sobre quais informações podem ser compartilhadas",
                        "popup": {
                            "content": [
                                "As respostas que você fornece nesta pesquisa.",
                                "Suas informações de contato, incluindo nome, endereço, número de telefone, e-mail, etc.",
                                "Quaisquer credenciais que você tenha obtido, incluindo um Certificado de Conclusão do Pathway Connect e/ou quaisquer certificados e diplomas online que você tenha concluído ou esteja cursando atualmente. Isso também pode incluir qualquer curso relevante.",
                                "Informações relacionadas a habilidades comercializáveis e habilidades linguísticas."
                            ],
                            "closeButton": "Fechar"
                        }
                    }
                },
                "employmentHistory": {
                    "title": "Histórico de Emprego",
                    "description": "Por favor, compartilhe conosco seu histórico de emprego começando um ano antes de você iniciar a BYU Pathway Worldwide.",
                    "buttons": {
                        "add": {
                            "label": "Adicionar +",
                            "labelBack": "Voltar",
                        },
                        "reviewSavedItems": {
                            "label": "Revisar Itens Salvos",
                            "count": 0
                        }
                    }
                },
                "employmentItemDetails": {
                    "titleLabels": {
                    "title": "Título:",
                    "companyName": "Nome da Empresa:",
                    "type": "Tipo:",
                    "startDate": "Data de Início:",
                    "endDate": "Data de Término:",
                    "monthlyEarnings": "Ganhos Mensais:",
                    "hoursPerWeek": "Horas por Semana:",
                    "reasonForLeaving": "Razão da Saída:"
                    },
                    "pickerOptions": {
                    "type": {
                        "selectOne": "Selecione um",
                        "remote": "Remoto",
                        "local": "Local",
                        "entrepreneurship": "Empreendedorismo"
                    },
                    "hoursPerWeek": {
                        "selectOne": "Selecione um"
                    },
                    "leavingReason": {
                        "selectOne": "Selecione um",
                        "betterJobOpportunity": "Melhor Oportunidade de Emprego",
                        "internalPromotion": "Promoção Interna",
                        "termination": "Rescisão",
                        "resignation": "Demissão",
                        "relocation": "Mudança de Localidade",
                        "careerChange": "Mudança de Carreira",
                        "education": "Educação",
                        "other": "Outro"
                    }
                    },
                    "currentlyWorking": "Atualmente trabalhando nesta função",
                    "buttons": {
                    "goBack": "Voltar",
                    "removeJobHistory": "Remover histórico"
                    },
                    "alert": {
                    "confirmDeleteTitle": "Confirmar Exclusão",
                    "confirmDeleteMessage": "Tem certeza de que deseja excluir este histórico de trabalho?",
                    "cancelButton": "Cancelar",
                    "deleteButton": "Excluir",
                    "deleteFailedMessage": "Falha ao excluir o item."
                    },
                    "loading": "Carregando..."
                },
               "addEmployment": {
                    "addEmploymentTitle": "Adicionar Emprego",
                    "titleLabel": "Cargo: *",
                    "companyNameLabel": "Nome da Empresa: *",
                    "typeLabel": "Tipo: *",
                    "startDateLabel": "Data de Início: *",
                    "endDateLabel": "Data de Término: *",
                    "workingAtThisRoleLabel": "Atualmente trabalho neste cargo",
                    "monthlyEarningsLabel": "Ganhos Mensais em Moeda Local: *",
                    "hoursPerWeekLabel": "Horas por Semana: *",
                    "leavingReasonLabel": "Motivo da Saída: *",
                    "addButton": "Adicionar",
                    "notfound": "Não encontrado",
                    "sendDataToLocalStorage": "Enviar dados para o armazenamento local",
                    "loadingLanguage": "Carregando idioma...",

                    "typeOptions": {
                        "selectOne": "Selecione um",
                        "remote": "Remoto",
                        "local": "Local",
                        "entrepreneurship": "Empreendedorismo"
                    },
                    "hoursPerWeekOptions": {
                        "selectOne": "Selecione um",
                        "range1_9": "1-9",
                        "range10_19": "10-19",
                        "range20_29": "20-29",
                        "range30_39": "30-39",
                        "range40_plus": "40+"
                    },
                    "leavingReasonOptions": {
                        "selectOne": "Selecione um",
                        "betterJobOpportunity": "Melhor Oportunidade de Emprego",
                        "internalPromotion": "Promoção Interna",
                        "termination": "Rescisão",
                        "resignation": "Demissão Voluntária",
                        "relocation": "Mudança de Local",
                        "careerChange": "Mudança de Carreira",
                        "education": "Educação",
                        "other": "Outro"
                    },

                    "validation": {
                        "titleRequired": "O campo Cargo é obrigatório",
                        "companyNameRequired": "O campo Nome da Empresa é obrigatório",
                        "typeRequired": "O campo Tipo é obrigatório",
                        "startDateRequired": "O campo Data de Início é obrigatório",
                        "endDateRequired": "O campo Data de Término é obrigatório",
                        "monthlyEarningsRequired": "O campo Ganhos Mensais é obrigatório",
                        "hoursPerWeekRequired": "O campo Horas por Semana é obrigatório",
                        "leavingReasonRequired": "O campo Motivo da Saída é obrigatório"
                    }
                }
            },
            "requiredDataChurch": "O campo 'Compartilhar dados com a igreja' é obrigatório.",
            "requiredDataThirdParty": "O campo 'Compartilhar dados com terceiros' é obrigatório.",
            "requiredSeekingBetterJob": "O campo 'Você está procurando um emprego melhor?' é obrigatório.",
            "submitButton": "Concluir Módulo"
        },
        "jobProfileSection2Screen": {
            "title": "Perfil Profissional - Seção 2",
            "form": {
            "contactInformation": {
                "title": "Informações de Contato",
                "questions": [
                {
                    "question": "Qual a melhor forma de contatá-lo?",
                    "options": [
                    "Selecionar um item",
                    "Whatsapp",
                    "Email"
                    ]
                },
                {
                    "question": "Qual idioma você fala? Selecione todos os que se aplicam.",
                    "input": {
                    "placeholder": "Adicionar idioma"
                    }
                }
                ],
                "whatsapp_label": "Digite seu WhatsApp (Certifique-se de adicionar o código do país): *",
                "whatsapp_placeholder": "Digite seu número de WhatsApp",
                "email_label": "Digite seu Email: *",
                "email_placeholder": "Digite seu Email"
            },
            "jobPreferences": {
                "title": "Preferências de Emprego",
                "questions": [
                {
                    "question": "Que tipo de trabalho você está procurando? Selecione todos os que se aplicam.",
                    "options": [
                    "Remoto",
                    "Presencial (Local)"
                    ]
                },
                {
                    "question": "Quantas horas você está disponível para trabalhar por semana? Selecione todos os que se aplicam.",
                    "options": [
                    "Tempo integral (até 40 horas por semana)",
                    "Meio período (até 20 horas por semana)"
                    ]
                },
                {
                    "question": "Em quais setores você está interessado? Selecione todos os que se aplicam.",
                    "options": [
                    "Contabilidade/Finanças",
                    "Saúde",
                    "Tecnologia",
                    "Inteligência Artificial",
                    "Marketing"
                    ]
                },
                {
                    "question": "Por favor, indique quanto dinheiro você geralmente ganha em um mês em sua moeda local.",
                    "inputs": {
                    "salaryAmountPlaceholder": "Valor do salário",
                    "currencyPlaceholder": "Moeda"
                    }
                }
                ]
            },
            "educationHistory": {
                "title": "Histórico Educacional",
                "description": "Por favor, descreva qualquer educação superior que você concluiu antes do BYU Pathway, incluindo graus, diplomas ou certificados de outras faculdades ou universidades. Não inclua certificados ou graus do BYU Pathway, BYU-Idaho ou Ensign College.",
                "buttons": {
                "add": "Adicionar",
                "reviewSavedItems": "Revisar Itens Salvos"
                }
            },
            "addEducationHistory": {
                "title": "Adicionar Educação",
                "labels": {
                "collegeName": "Nome da Faculdade/Universidade: *",
                "country": "País: *",
                "degreeType": "Tipo de Título: *",
                "dateAwarded": "Data de Concessão: *",
                "degreeName": "Nome do Título: *"
                },
                "placeholders": {
                "selectOne": "Selecione um"
                },
                "degreeTypes": {
                "certificate": "Certificado",
                "associate": "Associado",
                "bachelor": "Bacharelado",
                "master": "Mestrado",
                "doctorate": "Doutorado"
                },
                "validation": {
                "collegeNameRequired": "O nome da Faculdade/Universidade é obrigatório",
                "countryRequired": "O país é obrigatório",
                "degreeTypeRequired": "O tipo de título é obrigatório",
                "dateAwardedRequired": "A data de concessão é obrigatória",
                "degreeNameRequired": "O nome do título é obrigatório"
                },
                "buttons": {
                "add": "Adicionar"
                }
            },
            "previousEducationList": {
                "title": "Formação Anterior",
                "footer": {
                "itemCountSingular": "item",
                "itemCountPlural": "itens",
                "goBackButton": "Voltar"
                }
            },
            "educationItemDetails": {
                "titleLabels": {
                "collegeName": "Nome da Faculdade/Universidade:",
                "country": "País:",
                "degreeType": "Tipo de Título:",
                "dateAwarded": "Data de Concessão:",
                "degreeName": "Nome do Título:"
                },
                "buttons": {
                "goBack": "Voltar",
                "removeEducation": "Remover formação"
                },
                "alert": {
                "confirmDeleteTitle": "Confirmar Exclusão",
                "confirmDeleteMessage": "Tem certeza de que deseja excluir esta formação anterior?",
                "cancelButton": "Cancelar",
                "deleteButton": "Excluir",
                "deleteFailedMessage": "Falha ao excluir o item."
                },
                "loading": "Carregando..."
            },
            "technologyAndAccessibility": {
                "title": "Tecnologia e Acessibilidade",
                "questions": [
                {
                    "question": "A quais dispositivos eletrônicos você tem acesso? Selecione todos os que se aplicam.",
                    "options": [
                    "Computador (Pessoal)",
                    "Computador (Compartilhado ou Público)",
                    "Smartphone (Pessoal)",
                    "Smartphone (Compartilhado ou Público)",
                    "Tablet (Pessoal)",
                    "Tablet (Compartilhado ou Público)"
                    ]
                },
                {
                    "question": "Em média, quantas vezes por semana você fica sem energia?",
                    "options": [
                    "0",
                    "1–2",
                    "3–5",
                    "5–10",
                    "10+"
                    ],
                    "placeholder": "Quedas de energia"
                }
                ]
            },
            "profileQuestions": {
                "title": "Perguntas do Perfil",
                "description": "Responda às seguintes perguntas da forma mais verdadeira possível, máximo de dois minutos.",
                "questions": [
                {
                    "question": "Descreva uma experiência em que você usou suas habilidades de liderança. Qual era a situação? O que você fez? Qual foi o resultado?"
                },
                {
                    "question": "Um membro da sua equipe te emprestou algo. Enquanto o usava, você acidentalmente o quebrou. Deixe uma mensagem de voz para o membro da sua equipe para explicar o problema e recomendar uma solução."
                }
                ]
            }
            },
            "alerts": {
            "missingOrInvalidFields": "Existem campos ausentes ou inválidos:",
            "audioResponseRequired": "A resposta de áudio é obrigatória."
            },
            "completeModuleButton": "Concluir Módulo",
            "validationMessages": {
                "contactWayRequired": "Contact way is required",
                "whatsappRequired": "WhatsApp number is required when contact way is WhatsApp",
                "invalidEmail": "Invalid email",
                "emailRequired": "Email is required when contact way is Email",
                "salaryAmountRequired": "Salary amount is required",
                "salaryCurrencyRequired": "Salary currency field is required",
                "languagesArrayRequired": "At least one language is required",
                "jobTypeArrayRequired": "At least one job type is required",
                "availabilityHoursArrayRequired": "Select at least one option of availability hours",
                "industryInterestArrayRequired": "Select at least one industry interest",
                "electronicDevicesArrayRequired": "At least one electronic device is required"
            }
        },
        "jobProfileSection3Screen": {
            "title": "Teste Externo",
            "description": "Por favor, complete os seguintes testes. (Copie os URLs e cole-os no navegador do seu computador de mesa.)",
            "links": [
            {
                "label": "Teste de Velocidade da Internet",
                "urlPlaceholder": "Link para Teste de Velocidade da Internet"
            },
            {
                "label": "Teste de Digitação",
                "urlPlaceholder": "Link para Teste de Digitação"
            }
            ],
            "checkbox": {
            "label": "Concluí o teste"
            },
            "button": {
            "label": "Voltar"
            },
            "successPopup": {
            "title": "Sucesso!",
            "message": "Teste externo marcado como concluído"
            },
            "incompleteTestsMessage": "Incompleto, por favor, certifique-se de que todos os testes externos necessários estejam concluídos.",
            "failedCompletionStatus": "Falha ao obter o status de conclusão.",
            "failedToCheckCompletion": "Falha ao verificar a conclusão. Por favor, tente novamente mais tarde.",
            "checking": "Verificando...",
            "internetDownloadSpeed": "Velocidade de Download da Internet",
            "internetUploadSpeed": "Velocidade de Upload da Internet",
            "typingAccuracy": "Precisão de Digitação",
            "typingSpeed": "Velocidade de Digitação"
        },
        "feedbackScreen": {
            "title": "Enviar Feedback",
            "FeedbackOptions": [
                {
                    "submitfeedback": "Enviar Feedback",
                    "description": "Compartilhe seus pensamentos ou sugestões para nos ajudar a melhorar o aplicativo"
                },
                {
                    "reportanissue": "Reportar um Problema",
                    "description": "Informe-nos sobre quaisquer problemas técnicos ou bugs que você encontrou"
                },
                {
                    "contactUs": "Entre em Contato",
                    "description": "Ligue para nossa linha de suporte para assistência."
                }
            ]
        },
        "reportIssue": {
            "title": "Reportar um Problema",
            "validation": {
            "issueTypeRequired": "Este campo é obrigatório",
            "commentsRequired": "Este campo é obrigatório"
            },
            "pickerOptions": {
            "selectItem": "Selecione um item",
            "mentor": "Mentor",
            "registrationForm": "Formulário de Registo"
            },
            "issueTypeQuestion": "Onde na aplicação você encontrou este problema?",
            "commentsLabel": "Por favor, descreva em detalhe o problema que está a experienciar",
            "commentsPlaceholder": "Digite aqui",
            "submitButton": "Enviar"
        },
        "submitFeedbackScreen": {
            "title": "Feedback",
            "screenTitle": "Enviar Feedback",
            "question": "Quão satisfeito você está com a experiência do Companion?",
            "ratingNumbers": ["1", "2", "3", "4", "5"],
            "form": {
            "comments": {
                "label": "Comentários",
                "placeholder": "Digite aqui"
            }
            },
            "submitButton": "Enviar",
            "submissionLoading": "Enviando seu feedback...",
            "submissionSuccessMessage": "Seu feedback foi enviado com sucesso. Obrigado!",
            "submissionErrorMessage": "Ocorreu um problema ao enviar seu feedback. Por favor, tente novamente mais tarde.",
            "common": {
                "thisFieldIsRequired": "Este campo é obrigatório",
                "loadingData": "Carregando..."
            }
        },
        "settingsScreen": {
            "title": "Configurações",
            "profileOption": {
                "title": "Perfil",
                "description": "Visualize e atualize seus dados pessoais, preferências e configurações de conta."
            },
            "pushNotificationsOption": {
                "title": "Notificações Push",
                "description": "Gerencie suas preferências de notificação para se manter informado sobre atualizações importantes."
            },
            "signOutOption": {
                "title": "Sair",
                "description": "Desconecte-se da sua conta e encerre sua sessão atual."
            },
            "aboutOption": {
                "title": "Sobre",
                "description": "Saiba mais sobre o Companion e seus recursos."
            }
        },
        "profileScreen": {
            "title": "Perfil",
            "fields": {
            "preferredName": "Nome Preferido",
            "pathwayEmail": "Email BYU-Pathway",
            "studentID": "ID de Estudante",
            "preferredContact": "Método de Contato Preferido",
            "whatsappNumber": "Número de WhatsApp",
            "preferredLanguage": "Idioma Preferido",
            "updateButton": "Atualizar",
            "emailAddress": "Endereço de Email",
            "phoneNumber": "Número de Telefone",
            "countryCodeDefault": "Código",
            "phoneNumberPlaceholder": "23822318"
            },
            "alertMessages": {
            "updateSuccess": "Perfil atualizado com sucesso!",
            "updateError": "Falha ao atualizar o perfil. Por favor, tente novamente.",
            "updatingProfile": "Atualizando perfil..."
            },
            "validation": {
            "thisFieldIsRequired": "Este campo é obrigatório"
            }
        },
        "aboutScreen": {
            "title": "Sobre",
            "sections": {
                "about": "Sobre",
                "getHelp": "Obter ajuda",
                "legal": "Legal"
            },
            "items": {
                "version": "Versão",
                "build": "Compilação",
                "sendCrashReports": "Enviar relatórios de erro",
                "submitTicket": "Enviar um tíquete",
                "suggestions": "Sugestões",
                "termsOfService": "Termos de Serviço",
                "privacyPolicy": "Política de Privacidade"
            },
            "footer": "Copyright © 2025 Companion"
        },
        "signOutScreen": {
            "title": "Confirmar Saída",
            "message": "Saindo...",
            "feedback": "Avalie sua experiência:",
            "buttons": {
                "cancel": "Cancelar",
                "confirm": "Confirmar"
            }
        },
        "common": {
            "comentsTitle": "Comentários",
            "reopenRequest": "Para reabrir esta solicitação, por favor adicione sua razão na seção de comentários abaixo",
            "statusLabel": "Status:",
            "resolvedLabel": "Resolvido:",
            "lastModifiedLabel": "Última Modificação:",
            "seeTimeline": "Ver Cronograma",
            "descriptionTitle": "Descrição",
            "thisFieldIsRequired": "Este campo é obrigatório",
            "detailedDescriptionLabel": "Descrição Detalhada",
            "typeHerePlaceholder": "Digite aqui",
            "screenshotLabel": "Envie uma captura de tela com sua solicitação",
            "screenshotHint": "Este arquivo deve ser do tipo: png, jpg, jpeg.",
            "permissionRequiredTitle": "Permissão necessária",
            "galleryAccessMessage": "O acesso à galeria é necessário para selecionar uma imagem.",
            "invalidFileTypeTitle": "Tipo de arquivo inválido",
            "invalidFileTypeMessage": "Por favor, selecione um arquivo do tipo: {allowedTypes}.",
            "errorProcessingImageTitle": "Erro",
            "errorProcessingImageMessage": "A imagem não pôde ser processada.",
            "processingStatus": "Processando...",
            "attachFileButton": "Anexar arquivo",
            "selectedImageLabel": "Imagem selecionada",
            "changeImageButton": "Alterar imagem"
        },
        "notStudentWelcome": {
            "welcomeTitle": "Bem-vindo ao aplicativo combinado para BYU-Pathway Worldwide e EnglishConnect 3!",
            "churchAccountTitle": "Conta da Igreja",
            "churchAccountP1": "Você precisará de uma Conta da Igreja para fazer login e se inscrever.",
            "churchAccountBullet1": "Se você não é membro de A Igreja de Jesus Cristo dos Santos dos Últimos Dias, por favor, “Crie uma nova conta” na primeira página de login e siga as instruções.",
            "churchAccountBullet2": "Se você tem uma Conta da Igreja, mas não se lembra de suas informações de login, clique em “Esqueci meu nome de usuário ou senha” e siga as instruções. Por favor, não crie uma nova conta.",
            "applyButton": "Aplicar Agora",
            "programSelectionTitle": "Seleção de Programa",
            "programSelectionP1": "Usaremos as informações em sua inscrição para recomendar o programa com o qual você deve começar. Você fará essa seleção final no final da inscrição.",
            "currentStudentsTitle": "Alunos Atuais",
            "currentStudentsP1": "Se você está atualmente matriculado no BYU-Pathway ou EnglishConnect 3, por favor, NÃO se inscreva. Faça login no seu portal do aluno em portal.byupathway.edu para limpar impedimentos e se registrar para os cursos."
        },
        "notStudentTermsConditions": {
            "previousPageButton": "Página Anterior",
            "acknowledgementP1": "Ao marcar a caixa abaixo, eu reconheço e concordo com os termos e condições aqui descritos, e li o Aviso de Privacidade – BYU-Pathway Worldwide (Atualizado em 01/03/2024), além das Divulgações Legais e Políticas Institucionais Selecionadas que pertencem à instituição onde enviei ou posso enviar uma inscrição (links acima).",
            "iAcknowledgeTermsAndConditions": "Eu reconheço *",
            "saveAndContinueButton": "Salvar e Continuar",
            "questionIsMember": "Você é um membro atual ou ex-membro de A Igreja de Jesus Cristo dos Santos dos Últimos Dias?",
            "questionPresentReligion": "Qual é a sua religião atual, se houver?",
            "loadingMessage": "Carregando...",
            "errorMessagePrefix": "Erro: ",
            "pickerSelectAnItem": "Selecione um item",
            "pickerOptionYes": "Sim",
            "pickerOptionNo": "Não",
            "pickerOptionCatholic": "Católico",
            "pickerOptionNoReligion": "Nenhuma Religião",
            "validationRequired": "Este campo é obrigatório",
            "validationReligionRequired": "Este campo é obrigatório quando você não é membro.",
            "validationAcknowledgeTerms": "Você deve reconhecer os termos e condições."
        },
        "notStudentTermsConditions2NoMRN": {
            "termsAndConditionsTitle": "Termos e Condições",
            "noMRNAttachedTitle": "NENHUM NÚMERO DE REGISTRO DE MEMBRO (MRN) ANEXADO",
            "mrnExplanation": "Todos os membros de A Igreja de Jesus Cristo dos Santos dos Últimos Dias são obrigados a ter um número de registro de membro (MRN) associado à sua Conta da Igreja para participar dos programas oferecidos através do BYU-Pathway Worldwide. A conta com a qual você está logado atualmente não tem um MRN anexado. Veja abaixo as opções de solução de problemas:",
            "optionOneTitle": "Opção um:",
            "optionOneDescription": "Se uma Conta da Igreja diferente estiver associada ao seu MRN, faça login usando essa conta.",
            "optionOneBullet": "Se você não se lembra do nome de usuário ou senha dessa conta, siga as etapas encontradas na ",
            "accountRecoveryLink": "página de recuperação de conta",
            "optionOneBulletPart2": ". NÃO crie uma nova conta.",
            "optionTwoTitle": "Opção dois:",
            "optionTwoDescription": "Adicione seu MRN à sua conta atual.",
            "optionTwoStep1": "1. Saia do aplicativo.",
            "optionTwoStep2": "2. Vá para as suas ",
            "churchAccountSettingsLink": "configurações de membro da Conta da Igreja",
            "optionTwoStep3": "3. Adicione seu MRN. Você pode encontrar seu MRN ao:",
            "optionTwoStep3a": "a. Verificar sua recomendação para o templo.",
            "optionTwoStep3b": "b. Entrar em contato com o secretário de sua ala ou ramo.",
            "optionTwoStep4": "4. Faça login novamente no aplicativo.",
            "optionThreeTitle": "Opção três:",
            "optionThreeDescription": "Se nenhuma das opções acima funcionar, entre em contato com o ",
            "byuPathwaySupportLink": "Suporte do BYU-Pathway",
            "formerMembershipTitle": "Antiga Filiação",
            "formerMembershipP1": "Indivíduos que atualmente têm restrições formais de filiação ou tiveram uma retirada voluntária ou involuntária de filiação de A Igreja de Jesus Cristo dos Santos dos Últimos Dias não são elegíveis para participar de programas oferecidos através do BYU-Pathway Worldwide até que sejam reintegrados à plena comunhão na Igreja. Os candidatos são encorajados a se reunir com seu líder eclesiástico para discutir os próximos passos para a reintegração ao status de membro irrestrito. Para informações adicionais ou esclarecimentos, entre em contato com o Suporte do BYU-Pathway."
        },
        "notStudentMemberWelcome": {
            "welcomeGreeting": "Bem-vindo(a), Jhon Doe!",
            "welcomeMessage": "Bem-vindo(a) ao BYU-Pathway Worldwide! Por favor, verifique se seu nome e e-mail estão corretos:",
            "yourNameLabel": "Seu Nome:",
            "yourName": "Jhon Doe",
            "yourEmailLabel": "Seu E-mail:",
            "yourEmail": "jhondoe@gmail.com",
            "signOutMessage": "Se este não for você, saia e faça login novamente com sua Conta da Igreja.",
            "contactSupport": "Entre em contato com o Suporte do BYU-Pathway se precisar de ajuda.",
            "startApplicationButton": "Iniciar Candidatura"
        },
        "notStudentInformation": {
            "requestStudentInfoTitle": "Solicitar Informações do Aluno",
            "saveAndContinueButton": "Salvar e Continuar",
            "loadingMessage": "Carregando...",
            "errorMessagePrefix": "Erro: ",
            "receiveTextMessagesQuestion": "Gostaria de receber mensagens de texto?",
            "receiveTextMessagesOptionDoNotAllow": "Não permitir",
            "receiveTextMessagesOptionAllow": "Permitir",
            "primaryLanguageSelectOption": "Selecione um idioma",
            "validationFirstNameRequired": "O nome é obrigatório",
            "validationLastNameRequired": "O sobrenome é obrigatório",
            "validationDateOfBirthRequired": "A data de nascimento é obrigatória",
            "validationSexRequired": "O sexo é obrigatório",
            "validationMaritalStatusRequired": "O estado civil é obrigatório",
            "validationPrimaryLanguageRequired": "O idioma principal é obrigatório",
            "validationCountryRegionRequired": "País/Região é obrigatório",
            "validationZipInvalid": "CEP inválido",
            "validationZipRequired": "O CEP é obrigatório",
            "validationAddressLine1Required": "O endereço (Linha 1) é obrigatório",
            "validationCityRequired": "A cidade é obrigatória",
            "validationEmailInvalid": "Endereço de e-mail inválido",
            "validationEmailRequired": "O e-mail é obrigatório",
            "validationMobilePhoneInvalid": "Número de telefone inválido",
            "validationMobilePhoneRequired": "O telefone celular é obrigatório",
            "validationHomePhoneInvalid": "Número de telefone inválido",
            "validationPreferredPhoneRequired": "O telefone preferencial é obrigatório",
            "validationReceiveTextMessagesRequired": "Por favor, selecione uma opção para mensagens de texto",
            "validationWhatsAppNumberInvalid": "Número de telefone inválido"
        },
        "studentInfoSection": {
            "firstNameLabel": "Nome(s)*",
            "lastNameLabel": "Sobrenome*",
            "suffixLabel": "Sufixo",
            "dateOfBirthQuestion": "Data de nascimento*",
            "sexQuestion": "Sexo*",
            "maritalStatusQuestion": "Estado civil*",
            "primaryLanguageQuestion": "Qual é o seu idioma principal?*"
        },
        "currentAddressSection": {
            "currentAddressTitle": "Endereço Atual",
            "currentAddressDescription": "Este é o endereço de onde você estará morando enquanto participa do BYU-Pathway Worldwide.",
            "countryRegionQuestion": "País/Região *",
            "zipLabel": "CEP*",
            "stateProvinceLabel": "Estado/Província",
            "addressLine1Label": "Endereço (Linha 1) *",
            "cityLabel": "Cidade *"
        },
        "contactInfoSection": {
            "contactInfoTitle": "Informações de Contato",
            "emailLabel": "E-mail *",
            "mobilePhoneLabel": "Telefone Celular *",
            "homePhoneLabel": "Telefone Residencial",
            "preferredPhoneQuestion": "Telefone Preferencial *",
            "textMessageDescription": "BYU-Pathway usa mensagens de texto para enviar lembretes de matrícula e notificações importantes. Se você não deseja receber mensagens de texto, pode desativá-las abaixo.",
            "otherContactInfoTitle": "Outras Informações de Contato",
            "whatsAppNumberLabel": "Número do WhatsApp",
            "facebookMessengerLabel": "Facebook Messenger"
        },
        "citizenshipInformation": {
            "requestStudentInfoTitle": "Solicitar Informações do Aluno",
            "saveAndContinueButton": "Salvar e Continuar",
            "citizenshipInfoTitle": "Informações de Cidadania",
            "ssn": "Por favor, forneça seu número de Social Security (SSN). Se você optar por não fornecer seu SSN nesta página, precisará concluir etapas adicionais para receber formulários fiscais.",
            "hispanicLatino": "Você se considera Hispânico/Latino?",
            "racialCategoriesArray": "Selecione uma ou mais das seguintes categorias raciais para se descrever",
            "haveUsCitizenshipQuestion": "Você tem cidadania nos EUA?*",
            "completedHighSchool": "Você concluiu o ensino médio/educação secundária? *",
            "highestEducationQuestion": "Qual é o seu nível mais alto de educação?*",
            "attendedUsUniversitiesQuestion": "Você frequentou uma ou mais universidades/faculdades dos Estados Unidos (não incluindo PathwayConnect) depois de se formar no ensino médio?*",
            "earnCreditUsUniversityQuestion": "Você concluiu um ou mais cursos de 3+ créditos com nota 'C' ou superior em uma universidade/faculdade dos Estados Unidos depois de se formar no ensino médio? *",
            "selectSchool": "Selecione uma escola que você frequentou e concluiu pelo menos um curso de 3+ créditos.*",
            "selectSchoolTitle": "Selecione sua escola:",
            "selectSchoolNote1": "Neste ponto do aplicativo, você só precisa selecionar 1 escola, mesmo que tenha frequentado várias universidades/faculdades.",
            "selectSchoolNote2": "Para os propósitos desta aplicação, aceitamos apenas universidades/faculdades credenciadas regionalmente nos EUA. Se sua universidade/faculdade não estiver listada, altere sua resposta para a pergunta \"Você frequentou uma ou mais universidades/faculdades dos Estados Unidos depois de se formar no ensino médio?\" para \"Não\".",
            "selectSchoolNote3": "Se sua universidade/faculdade era credenciada regionalmente nos EUA, mas não está listada e desde então mudou seu nome, escolha o nome mais recente da escola. Exemplo: Para Ricks College, selecione Brigham Young University-Idaho.",
            "afterAdmittance": "Após a admissão no BYU-Pathway, você pode enviar históricos escolares oficiais para transferir quaisquer créditos universitários/faculdade anteriores para satisfazer os requisitos do programa. Alguns alunos podem ser obrigados a enviar históricos para fins de verificação.",
            "parentsBachelor": "Algum de seus pais obteve um diploma de bacharel ou equivalente?*",
            "unresolvedLegalRestrictionsQuestion": "Você tem alguma restrição legal, obrigação ou multa não resolvida por um crime pelo qual você foi condenado, se declarou culpado ou foi considerado responsável (exceto uma pequena infração de trânsito)? *",
            "noteForUnresolvedLegalRestrictions": "Isso inclui, mas não se limita a: encarceramento atual, liberdade condicional, liberdade condicional, listado em um registro de agressores sexuais, taxas judiciais, serviço comunitário ou outras multas legais.",
            "noteBachelor": "Ao clicar em Salvar e Continuar, você confirma que suas respostas são verdadeiras e precisas, tanto quanto você sabe. Fornecer informações falsas pode resultar no cancelamento de sua admissão e na perda de quaisquer créditos obtidos por meio dos programas BYU-Pathway Worldwide.",
            "loadingMessage": "Carregando...",
            "errorMessagePrefix": "Erro: ",
            "pickerOptions": {
            "usCitizen": [
                {
                "name": "Selecione uma opção",
                "value": ""
                },
                {
                "name": "Sim",
                "value": "Yes"
                },
                {
                "name": "Não",
                "value": "No"
                }
            ],
            "hispanicLatino": [
                {
                "name": "Selecione uma opção",
                "value": ""
                },
                {
                "name": "Sim",
                "value": "Yes"
                },
                {
                "name": "Não",
                "value": "No"
                }
            ],
            "highestEducation": [
                {
                "name": "Selecione um nível",
                "value": ""
                },
                {
                "name": "Ensino Médio/Educação Secundária",
                "value": "HighSchool"
                },
                {
                "name": "Alguma faculdade ou universidade",
                "value": "SomeCollege"
                },
                {
                "name": "Bacharelado",
                "value": "Bachelors"
                },
                {
                "name": "Mestrado",
                "value": "Masters"
                },
                {
                "name": "Doutorado/Grau Profissional",
                "value": "Doctorate"
                }
            ],
            "completedHighSchool": [
                {
                "name": "Selecione uma opção",
                "value": ""
                },
                {
                "name": "Sim",
                "value": "Yes"
                },
                {
                "name": "Não",
                "value": "No"
                }
            ],
            "attendedUsUniversities": [
                {
                "name": "Selecione uma opção",
                "value": ""
                },
                {
                "name": "Sim",
                "value": "Yes"
                },
                {
                "name": "Não",
                "value": "No"
                }
            ],
            "earnCreditUsUniversity": [
                {
                "name": "Selecione uma opção",
                "value": ""
                },
                {
                "name": "Sim",
                "value": "Yes"
                },
                {
                "name": "Não",
                "value": "No"
                }
            ],
            "selectSchool": [
                {
                "name": "Selecione uma opção",
                "value": ""
                },
                {
                "name": "Teste",
                "value": "test"
                }
            ],
            "parentsBachelor": [
                {
                "name": "Selecione uma opção",
                "value": ""
                },
                {
                "name": "Sim",
                "value": "Yes"
                },
                {
                "name": "Não",
                "value": "No"
                }
            ],
            "unresolvedLegalRestrictions": [
                {
                "name": "Selecione uma opção",
                "value": ""
                },
                {
                "name": "Sim",
                "value": "Yes"
                },
                {
                "name": "Não",
                "value": "No"
                }
            ],
            "convictedTrafficViolation": [
                {
                "name": "Selecione uma opção",
                "value": ""
                },
                {
                "name": "Sim",
                "value": "Yes"
                },
                {
                "name": "Não",
                "value": "No"
                }
            ]
            },
            "validationCitizenshipStatusRequired": "O status de cidadania é obrigatório",
            "validationCompletedHighSchoolRequired": "Por favor, indique se você concluiu o ensino médio/secundário",
            "validationHighestEducationRequired": "O nível mais alto de educação é obrigatório",
            "validationAttendedUsUniversitiesRequired": "Por favor, indique se você frequentou alguma universidade/faculdade dos EUA.",
            "validationEarnCreditUsUniversityRequired": "Por favor, indique se você concluiu algum curso com crédito em um programa dos EUA.",
            "validationParentsBachelorRequired": "Por favor, indique se algum de seus pais obteve um diploma de bacharel ou equivalente.",
            "validationUnresolvedLegalRestrictionsRequired": "Por favor, selecione uma opção sobre restrições legais, obrigações ou multas não resolvidas.",
            "validationAnticipatedLegalizationDateRequired": "Por favor, forneça a data prevista de legalização."
        },
        "citizenshipInfoSection": {
            "biographicInformationTitle": "Informações Biográficas",
            "socialSecurityNumberLabel": "Número do Seguro Social",
            "backgroundInformationTitle": "Informações de Histórico",
            "anticipatedLegalizationDateQuestion": "Qual é a data prevista de legalização para qualquer uma dessas restrições, obrigações ou ônus?*",
            "racialCategories": [
            {
                "code": "111110000",
                "name": "Índio Americano ou Nativo do Alasca"
            },
            {
                "code": "111110001",
                "name": "Asiático"
            },
            {
                "code": "111110002",
                "name": "Preto ou Afro-Americano"
            },
            {
                "code": "111110003",
                "name": "Natali do Havaí ou Outras Ilhas do Pacífico"
            },
            {
                "code": "111110004",
                "name": "Branco"
            }
            ]
        },
        "englishLanguageAssessment": {
            "elaTitle": "Avaliação de Língua Inglesa (ELA)",
            "paragraph1": "Um certo nível de proficiência em inglês é necessário para ter sucesso no BYU-Pathway Worldwide. A jornada do PathwayConnect frequentemente começa com o EnglishConnect, um programa desenvolvido para auxiliar os alunos a desenvolver sua proficiência em inglês em um ambiente de companheirismo e fé.",
            "paragraph2": "Nas seguintes avaliações (Escrita e Leitura), você demonstrará seu nível atual de inglês para que possa se inscrever no programa que será mais benéfico para você.",
            "certificationIntro": "Ao salvar e continuar esta página, você certifica:",
            "certificationBullet1": "Você não usará ajuda externa de qualquer tipo para responder às perguntas.",
            "certificationBullet2": "Seus resultados representam seu melhor esforço pessoal.",
            "buttonText": "Salvar e Continuar"
        },
        "englishWritingTest": {
            "title": "Teste de Escrita em Inglês",
            "directions": "Instruções:",
            "bullet1": "Este teste medirá sua habilidade de escrita em inglês de acordo com as Diretrizes de Proficiência da ACTFL.",
            "bullet2": "Não use dicionários, dispositivos eletrônicos ou qualquer outra ajuda.",
            "bullet3": "Existem 2 perguntas neste teste.",
            "bullet4": "O temporizador para cada item é exibido no canto superior direito da tela.",
            "bullet5": "A próxima página exibirá uma pergunta de prática para você se familiarizar com o formato das perguntas do teste.",
            "buttonText": "Iniciar Teste"
        },
        "englishWritingTestScreen": {
            "loadingTestData": "Carregando dados do teste...",
            "submitTestButton": "Enviar Teste",
            "continueButton": "Continuar",
            "resetButton": "Redefinir",
            "successMessage": "Sua avaliação de escrita está completa. Ela será avaliada em breve. ",
            "errorMessage": "Ocorreu um erro ao salvar seu teste. Por favor, tente novamente.",
            "alertCloseContinue": "Continuar",
            "alertCloseOK": "OK",
            "submittingTestDescription": "Enviando teste de escrita...",
            "readingAssessmentPrompt": "Agora, por favor, complete sua avaliação de leitura",
            "readingAssessmentLinkText": "aqui",
            "leftTestMessage": "Você saiu do teste. Todo o progresso não salvo foi perdido e o teste foi redefinido.",
            "passageValidationRequired": "A resposta da Passagem {number} é obrigatória.",
            "passageValidationMinLength": "Por favor, escreva pelo menos 4-5 frases para a Passagem {number}."
        },
        "decisionInformation": {
            "title": "Informações de Decisão",
            "description1": "Obrigado pelo seu interesse no BYU-Pathway Worldwide. Com base nas informações fornecidas, você pode ser elegível para participar de um ou mais dos programas online atendidos pelo BYU-Pathway. Por favor, continue este aplicativo para decidir o melhor programa para você.",
            "description2": "Obrigado pelo seu interesse no BYU-Pathway Worldwide. Infelizmente, como o BYU-Pathway não está aprovado para admitir alunos em seu país, você não é elegível no momento. O BYU-Pathway está trabalhando para poder oferecer educação online em novos países, por isso o encorajamos a se candidatar novamente se seu país for aprovado no futuro.",
            "saveAndContinueButton": "Salvar e Continuar"
        },
        "programSelectionScreen": {
            "title": "Página de Seleção de Programa",
            "description": "No menu abaixo, você verá os programas BYU-Pathway com os quais você é elegível para começar. Isso pode incluir EnglishConnect 3, PathwayConnect e/ou Certificados e Diplomas. Se você não vir o programa que deseja, isso significa que você não é elegível para ele agora, mas poderá se tornar elegível após a conclusão de outros programas. Você pode clicar em um programa para ver um resumo e detalhes importantes, como onde encontrar informações sobre os custos das mensalidades.",
            "saveAndContinueButton": "Salvar e Continuar",
            "selectProgramPlaceholder": "Selecione um programa",
            "validationProgramRequired": "Por favor, selecione um programa.",
            "loadingMessage": "Carregando...",
            "errorMessage": "Erro: ",
            "pickerOptions": {
            "program": [
                {
                "name": "Selecione um programa",
                "value": ""
                },
                {
                "name": "English Connect 3 (Inglês Acadêmico)",
                "value": "englishConnect3"
                },
                {
                "name": "Pathway Connect (Recomendado)",
                "value": "pathwayConnect"
                },
                {
                "name": "Certificados e Diplomas (Avançado)",
                "value": "certificatesDegrees"
                }
            ]
            }
        },
        "programDetailsCertDegreeScreen": {
            "headerTitle": "Configurações para Não-Estudantes",
            "programTitle": "RESUMO DO PROGRAMA DE CERTIFICADOS E DIPLOMAS",
            "programDescription": "BYU-Pathway Worldwide oferece acesso a certificados e diplomas online em associação com BYU-Idaho e Ensign College. Embora o início recomendado para um diploma geralmente comece com PathwayConnect, os participantes podem optar por se candidatar diretamente ao programa de certificados e diplomas online se atenderem aos requisitos mínimos de formação educacional. A mensalidade é significativamente reduzida para todo o programa de graduação para aqueles que começam com PathwayConnect.",
            "requirementsTitle": "REQUISITOS DO PROGRAMA DE CERTIFICADOS E DIPLOMAS",
            "instituteGathering": "Participação semanal nas reuniões para crédito do Instituto, conforme possa ser exigido.",
            "technologyAccessTitle": "Acesso à Tecnologia",
            "technologyAccessPoint1": "O sucesso com os cursos online depende do acesso dos alunos a internet confiável, eletricidade e um dispositivo com poder de computação mínimo. Antes de se inscrever em um programa, você deve confirmar que as seguintes condições são atendidas:",
            "technologyAccessPoint2": "Você precisa ter acesso regular a internet de alta velocidade com dados adequados.",
            "technologyAccessPoint3": "Você precisará ter acesso regular a um dispositivo que atenda ao perfil mínimo de dispositivo designado para suas atividades acadêmicas. Para mais informações na ",
            "technologyAccessPoint31": " página web.",
            "technologyRequirementsLinkText": "Requisitos de Tecnologia do BYU-Pathway",
            "technologyRequirementsLinkUrl": "https://www.byupathway.edu/technology-requirements",
            "tuitionTitle": "Mensalidade",
            "tuitionPoint1": "A mensalidade vence na quarta segunda-feira de cada período (dia 22). Você receberá uma multa de 5% por atraso para todo saldo pendente após esta data.",
            "tuitionPoint2": "Alunos que não completam o PathwayConnect do BYU-Pathway Worldwide pagam a taxa de mensalidade padrão online (Caminho Avançado). Visite ",
            "tuitionScholarshipsLinkText": "https://www.byupathway.edu/tuition",
            "tuitionPoint21": " para mais informações.",
            "tuitionScholarshipsLinkUrl": "https://www.byupathway.edu/tuition",
            "tuitionDiscountsPoint": "Visite a página de ",
            "tuitionDiscountsLinkText": "Descontos na Mensalidade",
            "tuitionDiscountsLinkUrl": "https://www.byupathway.edu/tuition-discounts",
            "tuitionDiscountsPoint2": " para informações sobre bolsas de estudo garantidas e outros possíveis descontos.",
            "disabilityServicesTitle": "Serviços para Pessoas com Deficiência",
            "disabilityServicesPoint1": "De acordo com a Seção 504 do Rehabilitation Act de 1973, BYU-Pathway, BYU–Idaho e Ensign College (coletivamente as Instituições) não discriminam alunos de graduação online com deficiência e fornecem acomodações razoáveis para indivíduos qualificados.",
            "disabilityServicesPoint2": "Alunos de Graduação Online podem solicitar acomodações de acessibilidade através de seu portal do aluno.",
            "saveAndContinueButton": "Salvar e Continuar"
        },
        "englishConnectDetailsScreen": {
            "headerTitle": "Configurações para Não-Estudantes",
            "programTitle": "RESUMO DO PROGRAMA ENGLISHCONNECT 3",
            "programDescription": "Os alunos usam o curso EnglishConnect 3 para se preparar para o PathwayConnect e outras oportunidades acadêmicas. No EnglishConnect 3, os alunos melhoram sua capacidade de ler, escrever, ouvir e falar em inglês. Eles podem repetir o EnglishConnect 3 quantas vezes forem necessárias para atingir seus objetivos.",
            "requirementsTitle": "REQUISITOS DO PROGRAMA ENGLISHCONNECT 3",
            "gatheringsTitle": "Reuniões",
            "gatheringsPoint": "A participação semanal nas reuniões do EnglishConnect 3 é obrigatória (presencial ou virtualmente). A participação nas reuniões constitui uma parte significativa do progresso geral do curso do aluno.",
            "technologyAccessTitle": "Acesso à Tecnologia",
            "technologyAccessPoint1": "O sucesso com os cursos online depende do acesso dos alunos a internet confiável, eletricidade e um dispositivo com poder de computação mínimo. Antes de se inscrever em um programa, você deve confirmar que as seguintes condições são atendidas:",
            "technologyAccessPoint2": "Você precisa ter acesso regular a internet de alta velocidade com dados adequados.",
            "technologyAccessPoint3": "Você precisa ser capaz de gravar áudio claro para suas tarefas de fala.",
            "technologyAccessPoint4": "Você precisa ter acesso regular a um dispositivo que atenda ao perfil mínimo de dispositivo designado para o seu programa acadêmico selecionado, conforme explicado na ",
            "technologyRequirementsLinkText": "página de Requisitos de Tecnologia do BYU-Pathway",
            "technologyRequirementsLinkUrl": "https://www.byupathway.edu/technology-requirements",
            "technologyAccessPoint4_after": ". (EnglishConnect 3 segue os mesmos requisitos de tecnologia do PathwayConnect.)",
            "tuitionTitle": "Mensalidade",
            "tuitionPoint1": "A mensalidade vence na quarta segunda-feira de cada período (dia 22). Você receberá uma multa de 5% por atraso para todo saldo pendente após esta data.",
            "tuitionPoint2": "Para ver os custos específicos da mensalidade para o seu país, visite a ",
            "englishConnectTuitionLinkText": "página da web do EnglishConnect 3",
            "englishConnectTuitionLinkUrl": "https://www.englishconnect.org/",
            "tuitionPoint2_after": ". Se você não mora nos Estados Unidos, clique em 'United States' e escolha sua localização.",
            "disabilityServicesTitle": "Serviços para Pessoas com Deficiência",
            "disabilityServicesPoint1": "Embora o BYU-Pathway não seja legalmente obrigado a fornecer acesso e acomodações para alunos do EnglishConnect, PathwayConnect ou Instituto com deficiência, ele se esforça para fornecer assistência razoável aos alunos que precisam. Essa assistência é fornecida voluntariamente e a critério exclusivo do BYU-Pathway. A assistência voluntária que os alunos recebem pode diferir das acomodações fornecidas por outras instituições.",
            "disabilityServicesPoint2": "Os participantes do EnglishConnect 3 podem solicitar assistência para deficiências através de seu portal do aluno.",
            "saveAndContinueButton": "Salvar e Continuar"
        },
        "pathwayConnectDetailsScreen": {
            "headerTitle": "Configurações para Não-Estudantes",
            "programTitle": "RESUMO DO PROGRAMA PATHWAYCONNECT",
            "programDescription": "PathwayConnect é o início recomendado para qualquer diploma. Oferecido a um custo significativamente reduzido, o PathwayConnect pode ser concluído em apenas 6 meses e inclui cursos acadêmicos e religiosos fundamentais que são tipicamente contados para a conclusão de um diploma. Alunos que começam com o PathwayConnect geralmente veem um aumento no sucesso na conclusão de um diploma online.",
            "requirementsTitle": "REQUISITOS DO PROGRAMA PATHWAYCONNECT",
            "gatheringsTitle": "Reuniões",
            "gatheringsPoint1": "A participação semanal nas reuniões do PathwayConnect é obrigatória (presencial ou virtualmente). A participação nas reuniões constitui uma parte significativa da nota geral do curso do aluno.",
            "gatheringsPoint2": "A participação semanal nas reuniões dos cursos do Instituto também é obrigatória.",
            "technologyAccessTitle": "Acesso à Tecnologia",
            "technologyAccessPoint1": "O sucesso com os cursos online depende do acesso dos alunos a internet confiável, eletricidade e um dispositivo com poder de computação mínimo. Antes de se inscrever em um programa, você deve confirmar que as seguintes condições são atendidas:",
            "technologyAccessPoint2": "Você precisa ter acesso regular a internet de alta velocidade com dados adequados.",
            "technologyAccessPoint3": "Você precisa ter acesso regular a um dispositivo que atenda ao perfil mínimo de dispositivo designado para o seu programa acadêmico selecionado, conforme explicado na ",
            "technologyRequirementsLinkText": "página de Requisitos de Tecnologia BYU-Pathway",
            "technologyRequirementsLinkUrl": "https://www.byupathway.edu/technology-requirements",
            "technologyAccessPoint3_after": ".",
            "tuitionTitle": "Mensalidade",
            "tuitionPoint1": "A mensalidade vence na quarta segunda-feira de cada período (dia 22). Você receberá uma multa de 5% por atraso para todo saldo pendente após esta data.",
            "tuitionPoint2": "Use a ",
            "pathwayConnectTuitionLinkText": "Página de Mensalidade do PathwayConnect",
            "pathwayConnectTuitionLinkUrl": "https://www.byupathway.edu/tuition",
            "tuitionPoint2_after": " para ver os custos específicos da mensalidade para o seu país.",
            "tuitionPoint3": "Visite a página de ",
            "tuitionDiscountsLinkText": "Descontos na Mensalidade",
            "tuitionDiscountsLinkUrl": "https://www.byupathway.edu/tuition-discounts",
            "tuitionPoint3_after": " para informações sobre bolsas de estudo garantidas e outros possíveis descontos.",
            "disabilityServicesTitle": "Serviços para Pessoas com Deficiência",
            "disabilityServicesPoint1": "Embora o BYU-Pathway não seja legalmente obrigado a fornecer acesso e acomodações para alunos do EnglishConnect, PathwayConnect ou Instituto com deficiência, ele se esforça para fornecer assistência razoável aos alunos que precisam. Essa assistência é fornecida voluntariamente e a critério exclusivo do BYU-Pathway. A assistência voluntária que os alunos recebem pode diferir das acomodações fornecidas por outras instituições.",
            "disabilityServicesPoint2": "Os alunos do PathwayConnect e do Instituto podem solicitar assistência para deficiências através de seu portal do aluno.",
            "saveAndContinueButton": "Salvar e Continuar"
        },
        "cesAcknowledgementScreen": {
            "headerTitle": "Configurações para Não-Estudantes",
            "acknowledgementTitle": "Reconhecimento do CES",
            "acknowledgementDescription": "O Sistema Educacional da Igreja (CES) é patrocinado por A Igreja de Jesus Cristo dos Santos dos Últimos Dias (Igreja) e dirigido pelo Conselho de Educação da Igreja/Conselhos de Curadores, com a missão de desenvolver discípulos de Jesus Cristo que são líderes em seus lares, na Igreja e em suas comunidades.",
            "honorCodeTitle": "Código de Honra do CES",
            "honorCodeDescription": "O Código de Honra do CES ajuda a cumprir a missão do CES de edificar discípulos de Jesus Cristo. Como professores, administração, funcionários e alunos se comprometem voluntariamente a conduzir suas vidas de acordo com os princípios do evangelho de Jesus Cristo, eles se esforçam para manter os mais altos padrões em sua conduta pessoal em relação à honra, integridade, moralidade e consideração pelos outros. Ao aceitar a nomeação, continuar no emprego, ser admitido ou continuar a matrícula, cada membro das comunidades do campus se compromete pessoalmente a observar o Código de Honra do CES aprovado pelo Conselho de Curadores:",
            "honorCodePoint1": "Manter um Endosso Eclesiástico, incluindo esforçar-se para aprofundar a fé e manter os padrões do evangelho.",
            "honorCodePoint2": "Ser honesto.",
            "honorCodePoint3": "Viver uma vida casta e virtuosa, incluindo abster-se de relações sexuais fora do casamento entre um homem e uma mulher. Viver uma vida casta e virtuosa também inclui abster-se de comportamento romântico do mesmo sexo.",
            "honorCodePoint4": "Abster-se de bebidas alcoólicas, tabaco, chá, café, vaping, maconha e outros abusos de substâncias.",
            "honorCodePoint5": "Participar regularmente dos serviços da Igreja.",
            "honorCodePoint6": "Respeitar os outros, incluindo a abstenção de linguagem profana e vulgar.",
            "honorCodePoint7": "Obedecer à lei e seguir as políticas do campus, incluindo os padrões de Vestuário e Aparência do CES.",
            "honorCodePoint8": "Incentivar outros em seu compromisso de cumprir o Código de Honra e os padrões de Vestuário e Aparência.",
            "dressGroomingPrinciplesTitle": "Princípios e Expectativas de Vestuário e Aparência do CES",
            "dressGroomingPrinciplesDescription": "Os Princípios e Expectativas de Vestuário e Aparência do CES fazem parte do Código de Honra do CES e parte do compromisso de cada aluno, funcionário e voluntário.",
            "dressGroomingPrinciplesDescription2": "Ao considerar o Código de Honra e as decisões de vestuário e aparência, os ensinamentos dos profetas e apóstolos, bem como as instruções da Igreja, como “Para o Vigor da Juventude: Um Guia para Fazer Escolhas” podem ser úteis.",
            "dressGroomingPrinciplesListTitle": "Princípios de Vestuário e Aparência do CES",
            "dressGroomingPrinciplesPoint1": "Cada aluno, funcionário e voluntário se compromete a:",
            "dressGroomingPrinciplesPoint2": "Representar o Salvador Jesus Cristo, a Igreja e o Sistema Educacional da Igreja.",
            "dressGroomingPrinciplesPoint3": "Preservar um ambiente inspirador, sem distração ou interrupção, onde os convênios são guardados em espírito de unidade para que o Espírito Santo possa ensinar a verdade.",
            "dressGroomingPrinciplesPoint4": "Promover modéstia, limpeza, asseio e sobriedade no vestuário e na aparência.",
            "dressGroomingPrinciplesPoint5": "Manter um padrão elevado e distintivo das instituições de ensino da Igreja de Jesus Cristo.",
            "dressGroomingExpectationsNote": "As expectativas de vestuário e aparência, como nos exemplos abaixo, devem estar alinhadas com esses princípios. No entanto, a aplicação desses princípios não se limita às expectativas listadas. Os membros da comunidade universitária devem aplicar esses princípios às questões de vestuário e aparência que surgirem.",
            "byuPathwayNote": "BYU–Pathway Worldwide e Seminários e Institutos de Religião correspondem aos padrões locais de vestuário e aparência da Igreja, conforme apropriado para as atividades locais.",
            "readMoreLinkText": "Você pode ler mais sobre o Código de Honra ",
            "readMoreLinkText2": "aqui.",
            "readMoreLinkUrl": "https://www.byupathway.edu/honor-code",
            "iAcknowledgeCES": "Reconheço e concordo que li e cumprirei o Código de Honra do CES e os requisitos do CES. *",
            "saveAndContinueButton": "ENVIAR SUA APLICAÇÃO",
            "validationAcknowledgementRequired": "Você deve reconhecer para enviar.",
            "loadingMessage": "Carregando...",
            "errorMessage": "Erro: "
        },
        "applicationDashboardScreen": {
            "applicationRegistration": "Inscrição no BYU-Pathway Worldwide",
            "dateStarted": "08-06-2025",
            "dateSubmitted": "08-06-2025",
            "program1": "PathwayConnect (Recomendado)",
            "program2": "Com base nas informações fornecidas, você se qualifica para o EnglishConnect 3. Este curso o ajudará a aprimorar suas habilidades em inglês para se preparar para futuras oportunidades de emprego e educação através do BYU-Pathway Worldwide. Saiba como se inscrever hoje em ",
            "program3": "Com base nas informações fornecidas, você se qualifica para o EnglishConnect 1 ou 2. Estes cursos o ajudarão a aprimorar suas habilidades em inglês para se preparar para futuras oportunidades de emprego e educação através do BYU-Pathway Worldwide. Saiba como se inscrever hoje em ",
            "program4": "Com base nas informações fornecidas, você se qualifica para Certificados e Diplomas.",
            "statusSubmitted": "Enviado",
            "statusApproved": "Aprovado",
            "studentEmail": "student@byupathway.edu",
            "englishConnectURL": "https://www.englishconnect.org",
            "title": "Painel de Candidatura",
            "nextStepsTitle": "Próximos Passos",
            "pathwayConnectNextStep1": "1. Registre-se no curso {PC}.",
            "pathwayConnectNextStep2": "2. Selecione seu horário de reunião.",
            "pathwayConnectNextStep3": "3. Faça login e inicie sua experiência de estudante.",
            "continueButton": "Continuar",
            "certificatesDegreesNextStep": "Use seu e-mail institucional para fazer login: ",
            "goToLoginButton": "Ir para o Login"
        }
    }
};

export const langCodeMap = {
  "English": "en",
  "Spanish": "es",
  "Portuguese": "pt",
  "French": "fr"
};

const i18n = new I18n(translations);
i18n.enableFallback = true;

export default i18n;