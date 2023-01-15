function setDate(day:number){
  const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
  let days = day
  let date = new Date()
  let requiredDate = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000 ))
  let value = `${requiredDate.getDate()} ${monthNames[requiredDate.getMonth()]} ${requiredDate.getFullYear()}` 
  return  value
}
export const date = ''

export const courses = [
  {
    brochure:'assets/pdf/Python Course--- Bookmyshiksha.pdf',
    duration:2,
    image: "/assets/images/course-images/python.png",
    heading: 'Python training course in Delhi,India',
    subHeading: 'Python course in delhi is the most searched language as well as used by google, microsoft, twitter and the list goes on with wide variety of frameworks for App development & Backend. BookMyShiksha consider python as the next big thing in the coming future.',
    aboutHeading: `Python Classes in Delhi`,
    about: [
      "Greet! You are a complete beginner in programming, right? If this is not the case, we will assume you are interested in learning why Python is useful and how to begin using it. Python is a language that can be quickly learned by programmers with experience in any other language (whatever that language may be). So let’s just jump into the deep meaning of python.",
      "Python is one of the most widely reputed programming languages in the world, python training institute in delhi.BookMyShiksha is the best python training campus in Delhi-NCR that allows learners to build the skills you would require to land your first Python programming job. Learn the intricacies of Machine Learning, Django, Data Science, and the other specialised areas.Understand the mathematics behind Machine Learning which is vital and not covered in most courses. Gain theoretical and practical knowledge to use Python for acing projects. Be in a position to create your own Python apps efficiently by enrolling for the best python institute delhi",
      "To be able to do so, you require a firm foundation in Python programming, and this course is specially designed to equip you with the core skills in a swift manner. Join this course today if you want an incredible boost in your career."],
    aboutSections: [
      {heading:'What is Python?', about: ['Python in simple terms is a computer general-purpose programming language that is used to create websites &amp; software, automate tasks and conduct analysis of the data. A melange of use cases of python has turned it into the most popular programming language. Even in some surveys, expert analysts found that python is the second most famous programming language.','The word python originated from Monty python. Guido van Rossum created python and during this time he was reading scripts from BBC&#39;s Monty pythons flying circus. Thus, he named this language python as  it is pretty mysterious and small. This is how the name python came.']},
      { heading: 'By the end of this course, you will be able to:', about: ['Create, and incorporate your own Python programs through this course at BookMyShiksha. python training in delhi, Add OOP (Python Object-Oriented Programming) skills to your CV.Pre-process data with ease. Well versed in both Python 2, as well as Python 3 softwares.Be excellent at improving our Machine Learning algorithms using some methods like: graph overfitting, graph underfitting, graph visualization, Dataset testing, dataset trainin and dataset spliting. Execute factor and cluster analysis. Perform linear and logistic regressions in Python efficiently. Create your own web applications, games or apply the knowledge in the realm of Data Science. Use flows control in programs. Create generator expressions and functions. Use containers which are a collection of data such as dictionaries and lists. Have impressive knowledge on decorators and on their creation and usage. Or be in a position where you understand how to scale up as a senior software developer.'] },
      {
        heading: 'Who is this course for?', about: [
          "python classes in delhi, This course is for beginners with no prior knowledge about Python but are looking to equip themselves with the most popular programming job in the world.Our students who want to start their career with a solid foundation, Solid techniques, Practical approach and gradually build their skills. For corporate employees who want to scale up their careers and graps better opportunities in career. For engineers and developers who have knowledge of other programming languages but not Python because doesnt have technical background for learning python language. python course near me, Anybody that wants to gain prerequisite knowledge to move into Machine Learning, Data Science or Artificial Intelligence. "
        ]
      },
      {
        heading:'Use cases for Python?',
        about:[
          "Python is a flexible, simple, and stable programming language that can be demanded in job skills; so it has a melange of use cases. Firstly, the versatility of python makes it a commonly used language for developing multiple websites, analyzing data; hence, visualizing it, and so forth. This programming language can be adopted by anyone as it is relatively easy to learn than any other language. Many scientists and accountants use python for carrying out everyday odd jobs such as organizing finance or making an excel sheet.",
          "In the future, too, python will remain the first choice language of many scientists and nonprogrammers to get jobs. Thus, you can check out different python courses from bookmyShiksha.Before are you still not convinced about choosing python as your favorite programming language? Here  are its use cases in detail."
        ]
      },
      {
        heading:'Web development',
        about:[
          "For developing the back end of an application or a website you need to have a strong grasp of python. The backend part is not visible to the users as they can only see the front-end designs. However, developers need to work harder for designing the back-end algorithms. Python helps in sending data to and from servers, communicating with databases, ensuring security, and much more.",
          "In the future, too, python will remain the first choice language of many scientists and nonprogrammers to get jobs. Thus, you can check out different python courses from bookmyShiksha.Before are you still not convinced about choosing python as your favorite programming language? Here  are its use cases in detail.",
          "Web developers, who have better knowledge of python can use it in multiple frameworks of a website.There are multiple jobs for web development where you must be a pro at python."
        ]
      },
      {
        heading:'Software testing',
        about:[
          "Tracking bugs, building control, and carrying out testing or easy when you know python. Web developers can use algorithms to set up automatic testing for new features or products. Even python tools are helpful in software testing."
        ]
      },
      {
        heading:'Data analysis and machine learning',
        about:[
          "AI &amp; Machine learning is the necessity for our lives. Data analysts can easily conduct complex  calculations within a few seconds with the help of python. Furthermore, one can create data          visualization, manipulate and analyze data, build different machine learning algorithms and conduct  data-related tasks with the aid of python."
        ]
      },
      {
        heading:'Normal tasks',
        about:[
          "The only language which is not solely for data scientists and programmers is python. If you learn python today then it might be your expert skill to get heavy professions like social media marketer or a small business owner. For ages, python has simplified our lives by:",
          "• Keeping track of the stock market",
          "• Converting text files to spreadsheets",
          "• Filling out online forms",
          "• Updating the shopping list",
          "• Randomly assigning household work",
          "So these are the use cases of python. The versatility of python will make it the most popular programming language in the world and it will be a mandatory skill for all. Thus, you should learn it today!"
        ]
      },
      {
        heading:'Why Learn Python?',
        about:[
          "In the world of technology, the python language is growing constantly. Today it's among one the most famous programming language.",
          "• The language of python is readable and easy to learn.",
          "• For writing programs in small lines of codes, you need the assistance of python as it can write better than other programming languages.",
          "• The use case of python is in a variety of fields including web development, desktop application,machine learning, and so forth.",
          "• Python can come in handy for multiple applications including data science, web applications, and so forth.",
          "Our modern world is constantly changing and rapidly evolving. Thus, one needs to pace up and comprehend programming languages like python."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Python Developer, Data Analyst, Educator, Product Manager, Financial Advisor, Data Journalist"] },
      { heading: 'Prerequisite knowledge:', about: ["Enthusiasm to learn this superb programming language which is a valuable lifetime skill.There is no prior coding language knowledge required. We will start from the basics. However, you would require a python course fees in delhi, A computer that supports Windows, MacOS, or Linux. A stable internet connection. The setup and installation instructions are included for each operating system. python coaching in delhi, Everything else that is required to learn and start using Python is included in the course. "] },
    ],

    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Python.Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],

    projects: [
      { id: 1, img: "fas fa-dice", name: 'Dice Rolling Simulator -By BookMyShiksha', domainName: 'Front-End+Back-End', about: 'This project is build by our trainers for students in BookMyShiksha, So they understand how the code is implemented and steps before implementing the code by brain storming about the project with students. Once brain storming is done, As trainers already know the project, Since its build by BookMyShiksha team it become easier for students to clear there queries and execute the entire process with ease.This project is not limited within BookMyShiksha our students are allowed to add them in there resume which makes the hiring process easier and faster.' },
      { id: 2, img: "fas fa-envelope-open-text", name: 'Message Encode Decode -By BookMyShiksha', domainName: 'Front-End+Back-End', about: 'This project is build by our trainers for students in BookMyShiksha, So they understand how the code is implemented and steps before implementing the code by brain storming about the project with students. Once brain storming is done, As trainers already know the project, Since its build by BookMyShiksha team it become easier for students to clear there queries and execute the entire process with ease.This project is not limited within BookMyShiksha our students are allowed to add them in there resume which makes the hiring process easier and faster.' },
      { id: 3, img: "fas fa-alarm-clock", name: 'Alarm Clock with GUI -By BookMyShiksha', domainName: 'Front-End', about: 'This project is build by our trainers for students in BookMyShiksha, So they understand how the code is implemented and steps before implementing the code by brain storming about the project with students. Once brain storming is done, As trainers already know the project, Since its build by BookMyShiksha team it become easier for students to clear there queries and execute the entire process with ease.This project is not limited within BookMyShiksha our students are allowed to add them in there resume which makes the hiring process easier and faster.' },
      { id: 4, img: "fas fa-gamepad", name: 'Python Tic Tac Toe Game -By BookMyShiksha', domainName: 'Front-End+Back-End', about: 'This project is build by our trainers for students in BookMyShiksha, So they understand how the code is implemented and steps before implementing the code by brain storming about the project with students. Once brain storming is done, As trainers already know the project, Since its build by BookMyShiksha team it become easier for students to clear there queries and execute the entire process with ease.This project is not limited within BookMyShiksha our students are allowed to add them in there resume which makes the hiring process easier and faster.' },
    ],

    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Python Training',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in programming languages which are recognised by our placement partners.' },
      { point: 'Be mentored by the best professors and tutors in the field of information technology who will offer extended support and are available to address all your queries.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI.' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Python Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' },]
    },
    placementCards: {
      heading: 'Placement Facility During Python Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    relatedCourse:[
      {name:'BMS Degree in Data Science training',img:'assets/images/data-science.svg', duration: '4 Months', startDate:setDate(5), routerLink:'courses/data-science-training-course'},
      {name:'BMS Degree in Machine Learning training',img:'assets/images/machine-learning.png', duration: '6 Months', startDate:setDate(5), routerLink:'courses/machine-learning-training-course'},
      {name:'BMS Degree in Deep Learning training',img:'assets/images/deep-learning.png', duration: '7 Months', startDate:setDate(5), routerLink:'courses/deep-learning-training-course'},
    ],
    relatedLink:{
      name:' Data science',link:'/courses/data-science-training-course'
    }
  },

  {
    brochure:'/assets/pdf/Data_Scientist_Master_Program_Bookmyshiksha.pdf',
    duration:4,
    image: "/assets/images/course-images/DS.png",
    heading: 'Data Science training in Delhi.',
    subHeading: 'DataScience is the future for highend analytics, visualization & Preprocessing. Data Science course in Delhi, BookMyShiksha uses tools like anaconda navigator, IDLE, VS code, Pycharm, Jupyter notebook.Not only these tools are exciting to use but there real world uses in IT industry is inevitable in the coming future. ',
    aboutHeading: 'Data Science training institute in Delhi',
    about: [
      "In our emerging digital world, data has built fuzz in every domain. At every nook and corner, there is a huge and constant flow of information in the form of unstructured data. There is a humungous need to convert this data into actionable insights to make it prominent. The insights created by data science assist industries in identifying better opportunities, improving marketing, increasing operational efficiency and so forth. But before that what does data science actually is?",
      "The course at BookMyShiksha offers the entire toolbox one might require to become a brilliant data scientist. Best data science course in delhi, Learn Python programming with matplotlib, NumPy, Seaborn, pandas, Advanced Statistical Analysis, Machine Learning with scikit-learn, Tableau, and Deep Learning with TensorFlow. Gain knowledge to handle advanced techniques like Dimensionality Reduction. Be able to work on specific categories like Deep Learning, NLP and Reinforcement Learning. Having an understanding of the mathematics behind Machine Learning through the best data science training course in Delhi. Code in Python, and use it for statistical analysis.",
      "Through this course at BookMyShiksha, you will be able to apply the skills you gain in real-life business scenarios."],
    aboutSections: [
      {
        heading:'WHAT IS DATA SCIENCE?',
        about:[
          'Finding valuable information with the assistance of advanced analytical techniques as well as scientific principles is data science. This analysed data is highly crucial for business decision-making, better sales, strategizing future goals and many other uses. Gathering actionable insights from raw data is a herculean task as it involves a variety of concepts including data analysis, data modelling, statistical analysis, machine learning algorithms, processing of data and so forth. Overall, data science is the field where data is gathered and analysed with the assistance of the business.',
          'Data has become a valuable asset in every economy today as it helps in understanding consumer behaviours and hands organisations can take business-related decisions. Turning raw data into meaningful and easy-to-understand insights is the primary goal of a data scientist. Exceptional data scientists can big out meaning full information from raw data.',
          'Data science has different disciplines such as data engineering, predictive analytics, data visualisation, data preparation, statistics, data mining, software programming and much more. Thus, you must include data science training in your list as it will leave an impact full impression on your career.'
        ]
      },
      {
        heading:'USE CASES OF DATA SCIENCE',
        about:['Data scientists are tech experts that are engaged in pattern recognition, categorisation, predictive modelling, sentiment analysis, anomaly detection and the development of technology to help businesses grow and expand. The biggest benefit of being a data scientist is to facilitate better decision-making in organisations as data-driven decisions lead to stronger business performance. The different use cases are as follows:',
        'Spotify uses data science to understand the listeners&#39; behaviour and hands offer them personalized music recommendations. In addition, Spotify made predictions about an award by finding the music users listen to. This all was done with the assistance of data science.',
        'Uber has also taken help from Data science to build a better audience and provide premium services to its users. There is a huge database of drivers and hence it was difficult for uber to suggest the most suitable drivers. However, after data analysis, Uber can easily suggest the best drivers and the time it takes to get to the destination',
        'Amazon shows product recommendations specifically to every customer according to their needs. These personalized recommendations are analysed with the data available in users&#39; purchase history and hence they recommend similar products.',
        'There is a melange of organisations that used data size to make better decisions. The demand for data scientists, too, has been growing rapidly over a few years. Thus, selecting data science will be a great choice.'
      ]
      },
      {
        heading:'',
        about:''
      },
      {
        heading:'',
        about:''
      },
      { heading: 'By the end of this course, you will be able to:', about: ['Have impeccable intuition of numerous Data Science models. Perform linear, and logistic regressions in the Python language. Best institue for data science in delhi, Conduct cluster and factor analysis. Create Machine Learning algorithms in Python, using statsmodels, scikit-learn, and NumPy.. Be great at using Pandas for the analysis of data. Use Matplotlib for plotting Python. Ace the usage of statistical plots by incorporating Seaborn. Use the latest Deep Learning framework like the Google TensorFlow. Deploy random forest and  decision trees to improve the program. Create an army of impactful Machine Learning models and combine them to solve problems in the program. Develop a business intuition whilst solving tasks, or coding with large data. Unfold the intricacies of deep neural networks through the best data science online course in Delhi NCR.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for learners with no prior knowledge about data science. Best data science institute in delhi, For a person that finds coding difficult but wants to learn data science and use it easily for datasets. If you are somebody that has a fair understanding of Data Science but wants to improve your skills and have a firm foundation in this sector, this course is perfect for you. If you are looking to  gain the most coveted set of skills of a Data Scientist, then this course is curated for you. Anybody that wants to gain prerequisite knowledge to kick start their career should join this course at Book My Shiksha."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Data Scientist, Data Analyst, Applications Architect, Machine Learning Engineer, Machine Learning Scientist, Data Science course fees in Delhi, Enterprise Architect, Data Architect, Data Engineer, Infrastructure Architect."] },
      { heading: 'Prerequisite knowledge:', about: ["The thirst to gain knowledge and learn a resourceful data language which is a useful lifetime skill. Best data science institue in delhi, No prior knowledge in programming is required as we begin from the fundamentals of data science. You need a computer that supports Windows, MacOS, or Linux with a stable internet connection. No prior knowledge in programming is required. Any tool that has to be installed will be taught through a step-by-step process."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Data Science Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Data Science Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' },]
    },
    placementCards: {
      heading: 'Placement Facility During Data Science Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. Data science training in delhi, This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.Data Science course fees in delhi.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in DataScience. Data science course in delhi india, Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "far fa-newspaper", name: 'Fake News Detection -By BookMyShiksha', domainName: 'Multimedia' },
      { id: 2, img: "far fa-road", name: 'Detection of Road Lane Lines -By BookMyShiksha', domainName: 'Infrastructure' },
      { id: 3, img: "fas fa-chart-line", name: 'Project on Sentimental Analysis -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 4, img: "fas fa-language", name: 'Project on  Speech Recognition through the Emotions -By BookMyShiksha', domainName: 'Social Media' },
    ],
    relatedLink:{
      name:'Python',link:'/courses/python-training-course'
    }
  },
  {
    brochure:'/assets/pdf/Data_Scientist_Master_Program_Bookmyshiksha.pdf',
    duration:6,
    image: "/assets/images/course-images/ML.png",
    heading: 'Machine Learning Training in Delhi',
    subHeading: 'Machine learning course in Delhi, helps in data analytics and have its framework for prediction & analysis.Machine learning is the key tool which used by google, microsoft, youtube and so on to implement its AI which makes the processing fast. BookMyShiksha believes in the future and plans to work and implement its features in the coming future.',
    aboutHeading: 'Machine Learning Training in Delhi,India',
    about: [
      "Master the art of Machine Learning institue in Delhi, on Python at BookMyShiksha. Learn to use the many Machine Learning models, and tools. Understand how to handle specific topics like Reinforcement Learning, Deep Learning, and NLP. Master advanced techniques like Dimensionality Reduction with the help of the educators at the best Machine Learning Training course in Delhi. Be in a position to choose the right Machine Learning model to address each type of problem.",
      "By enrolling in this course at BookMyShiksha, you will be able to apply the knowledge you gain to scale up in your career.",
      "Machine learning is the most innovative and frequently growing part of our lives. You must be using machine learning forward devices without even notice. The future lies in machine learning algorithms as we are surrounded by technology and technical devices. From pricing in uber to video surveillance we are surrounded by the products of machine learning. And this is why we can claim that the demand for machine learning will grow rapidly in the future. So if you are planning to pursue a bachelor&#39;s in machine learning then it can give you huge success."
    ],
    aboutSections: [
      {
        heading:'ROLES PURSUING BACHELORS&#39; IN MACHINE LEARNING',
        about:[
          'After pursuing a bachelor&#39;s in machine learning you will be surrounded by technical products. Here are some of the roles after the completion of your graduation in machine learning:',
          '• Designing tech system',
          '• Creating machine learning algorithms and libraries',
          '• Data modeling',
          '• Understanding behavioral changes',
          '• Regular data analysis and much more',
          'After completion of your bachelor&#39;s in MI, you will have the above roles. Although there are many other roles that you need to perform these are some most important ones. Machine learning makes you a hot resource for every business. If you are still not convinced about doing bachelors in MI then have a grasp of the perks of machine learning.'
        ],
      },
      {
        heading:'ADVANTAGES OF BACHELORS IN MACHINE LEARNING',
        about:[
          'We live in a world of technology where we are surrounded by machine learning products. And industries too ard looking for machine learning professionals that can help their businesses to grow. There are multiple benefits of pursuing a bachelor&#39;s in machine learning. The Sum of them is as follows:'
        ]
      },
      {
        heading:'Better career growth',
        about:[
          'Once you finish your bachelors in machine learning you automatically get growth and success. Machine learning covers significant verticals including cyber security, image recognition, voice recognition video surveillance, and much more and all these fields open many doors for your career. Thus, you ultimately have a better career and growth after choosing a bachelor&#39;s in machine learning.'
        ]
      },
      {
        heading:'Handsome earnings',
        about:[
          'Machine learning engineers are highly paid by organizations. If you have the right knowledge and skills, many top organizations will reach out to you and will offer you a six-figure salary on any day. Machine learning work professionals work on real-time problems and hence they get highly paid.'
        ]
      },
      {
        heading:'Link with data science',
        about:[
          'Machine learning is similar to the shadow of data science and once you are into the field of data then your career will be on cloud 9 with no doubts. Machine learning and data science are interrelated which is a positive point for people who are pursuing their career in machine learning as they can expand their careers as data scientists too.',
          'Thus, are some of the benefits of pursuing a bachelor&#39;s in machine learning. Not only do you learn about high-end technical solutions but you have an opportunity to make innovations that can take the world to a new step. So choose the right place to pursue your bachelor&#39;s in data science and lead towards a successful career.'
        ]
      },
      { heading: 'By the end of this course, you will be able to:', about: ['Make accurate predictions for businesses. Machine learning courses in Delhi, Conduct powerful analysis that yields great results. Create robust Machine Learning models. Add value to your business, or for your clients.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for beginners with no prior knowledge about Machine Learning course near me, on Python but are looking to equip themselves with a well defined set of skills. Students who have math knowledge and want to start learning Machine Learning. For data analysts who want to excel in the field of Machine Learning. This course is recommended for people who are not satisfied with their jobs and want to become a fantastic Data Scientist. This is for app developers, business leaders and developers, managers, and even consumers (you!). Anybody that wants to gain prerequisite knowledge to move into Machine Learning by learning classical algorithms such as linear regression or logistic regression."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Python Developer, Software Engineer, Data Scientist, Computational Linguist, Designer in Human-Centered Machine Learning, Software Developer."] },
      { heading: 'Prerequisite knowledge:', about: ["Thirst to expand their horizons through BookMyShiksha. Machine learning training in Delhi, A computer that supports Windows, MacOS, or Linux. The setup and installation instructions are included for each operating system. Everything else that is required to start using Machine Learning is included in the course."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Machine learning Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Data Science Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' },]
    },
    placementCards: {
      heading: 'Placement Facility During Machine Learning Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Machine Learning. Machine learning institue in Delhi, Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 6 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 7 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },
    ],
    projects: [
      { id: 1, img: "fal fa-flower-daffodil", name: 'Iris Flowers Classification Project -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-home", name: 'Housing Prices Prediction -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-digital-tachograph", name: 'MNIST Digit Classification -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fab fa-stack-exchange", name: 'Stock Price Prediction -By BookMyShiksha', domainName: 'Back-End' },
    ],
    relatedLink:{
      name:' Artificial intelligence',link:'/courses/artificial-inteligence-training-course'
    }


  },
  {
    brochure:'/assets/pdf/Data_Scientist_Master_Program_Bookmyshiksha.pdf',
    duration:7,
    image: "/assets/images/course-images/DL.png",
    heading: 'Deep Learning Training in Delhi',
    subHeading: 'Deep learning courses in Delhi, works with neural networking and features of machine learning, Deep learning involves lot of statistic analysis and complex calculation.Deep learning is used in various sector such as medical science, robotics and so on. BookMyShiksha have well trained trainers and expertise to help students to understand and be future ready in deep learning.',
    aboutHeading: 'Deep Learning Training in Delhi, India',
    about: [
      "Dive into our Deep Learning course in Delhi, to understand the different layers of Artificial Neural Networks. Once you understand the concept behind it, apply it in real life scenarios that require your expertise. Learn what Convolutional Neural Networks are and how to implement them through the best Deep Learning Training course in the national capital region. Gain knowledge on Recurrent Neural Networks, Self-Organizing Maps, Boltzmann Machines, and AutoEncoders. Furthermore, by enrolling for this course at Book My Shiksha, you will also learn how to implement all of these concepts to excel in your career.",
      "Our course is structured in a very robust manner, Deep learning corse in Delhi, helping learners broaden their horizons by navigating through two volumes that comprise two fundamental branches of Deep Learning. We have an exceptional course structure that will help learners gain the most insight in this field of technology to become experts. In case you have any doubts during the course of the training process."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Deep learning training in Delhi, Be exceptional at incorporating artificial intelligence to your projects and businesses for unprecedented growth like never before. Use Artificial Neural Networks to solve a Customer Churn problem. Work on extensive datasets to build better programs that are complex and offer better solutions. Make use of Convolutional Neural Networks for Image Recognition. Predict prices of stock by applying  Recurrent Neural Networks. Investigate Fraud by incorporating Self-Organizing Maps. Create a Recommender System through the means of a Boltzmann Machine.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for anybody that is interested in the best Deep Learning course in Delhi. It is for people with no prior knowledge about Deep Learning but are looking to understand its intricacies. Deep learning training course in Delhi, People that are looking for an interesting course module that helps them gain data in the most impressive and interactive way. This course is for data analysts who want to scale up in their careers. Students who have math knowledge and want to start learning Deep Learning. Entrepreneurs who want to disrupt the industry by incorporating the most advanced Deep Learning algorithms. Any business owner that wants to leverage Exponential Technology to boost their business."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Deep Learning Engineer, Data Scientist, Computational Linguist, Data Analyst, Software Developer."] },
      { heading: 'Prerequisite knowledge:', about: ["The passion to equip themselves with a coveted set of skills by learning at Book My Shiksha. A computer that supports Windows, MacOS, or Linux. The setup and installation instructions are included for each operating system. Basic knowledge of Python programming is essential."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Deep Learning Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Deep Learning Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' },]
    },
    placementCards: {
      heading: 'Placement Facility During Deep Learning Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'Deep learning courses in Delhi, BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Deep Learning. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 6 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 7 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },
    ],
    projects: [
      { id: 1, img: "fas fa-images", name: 'Image Classification with CIFAR-10 Dataset -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "far fa-grin-beam", name: 'Human Face Detection -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-dog", name: 'Dog’s Breed Identification -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fas fa-traffic-light", name: 'Traffic Sign Classification -By BookMyShiksha', domainName: 'Back-End' },
    ],
    relatedLink:{
      name:'Python',link:'/courses/python-training-course'
    }
  },
  {
    brochure:'/assets/pdf/Data_Scientist_Master_Program_Bookmyshiksha.pdf',
    duration:8,
    image: "/assets/images/course-images/ai.png",
    heading: 'Artificial Intelligence Training in Delhi',
    subHeading: 'Artificial inteligence is used by big brands such as youtube, Artificial intellgence courses in Delhi, augmented reality, virtual reality,robotics and so on. Artificial intelliegnce have reached a new level of achievement where they have already made a humanoid robot, which have been given citizenship also. BookMyShiksha works with the latest trends in machine learning and artificial intelligence field.',
    aboutHeading: 'Artificial Intelligence Training in Delhi, India',
    about: [
      "Artificial intelligence has aced the world of technology. The capacity of machines to operate under any challenge is the study of artificial intelligence. Today machines can recognize and attain precise goals solely with the assistance of artificial intelligence.A large quantity of unstructured information can be analyzed and structured with the assistants of artificial intelligence.",
      "Enroll for the best Artificial Intelligence Training online course in Delhi to gain insights on AI concepts. Artificial intelligence institue in Delhi, Understand the intuition behind the math used in AI solutions. Build, test, train, and deploy different artificial intelligence models to classify data. Gain knowledge on Time series along with simple linear regression. Learn how to incorporate Multiple and Logistic regression. Our modules encourage learners to apply the knowledge they gain from this course in real-life businesses and scenarios to help achieve the best possible outcomes.",
      "At BookMyShiksha, you will learn how Artificial Intelligence is disrupting the way we work, and function. During this course, you can clear the doubts you have with our tutors who are determined to help you get the best out of the training program for you to excel in your career."],
    aboutSections: [
      {
        heading:'WHAT IS ARTIFICIAL INTELLIGENCE?',
        about:[
          'Artificial intelligence has allowed machines to imitate the capabilities of the human mind. AI is growing every day. Today from the development of smart assistants Alexa and Siri to the creation of self-driving cars, AI has come very far. Every tech company in any sector is investing in artificial intelligence due to its smart and beneficial outcomes. In simple terms, artificial intelligence is a range of computer science that has built smart technology and machines that can perform any task that requires human intelligence.',
          'Creating machines that are smarter and more intelligent is what AI is. Artificial intelligence has built its advancements in machine learning and deep learning which are helping many industries now. There are four categories of AI based on their complexity as well as type. The different kinds of artificial intelligence are reactive machines, theory of mind, limited memory &amp; self-awareness.',
          'Artificial intelligence is the future of our digital world tomorrow so why not learn it today? Get artificial intelligence training and take a step towards a better future tomorrow. If you are still not convinced about the importance of artificial intelligence then have a look at its use cases.'
        ]
      },
      {
        heading:'CASES OF ARTIFICIAL INTELLIGENCE',
        about:[
          'Artificial intelligence has many different uses in our digital world today. To be using AI products without even realizing that they are AI-powered. Here are some use cases of AI:'
        ]
      },
      {
        heading:'Web search',
        about:[
          'The huge data available at search engines can co-ordinate with your specific question; have you ever thought about how? Yes, with the help of artificial intelligence search engines can provide you with relevant search results and the answer to your question.'
        ]
      },
      {
        heading:'Smart homes and infrastructure',
        about:[
          'Smart homes are the future of tomorrow and many people have adopted them today. Developers have started creating smart cities with better connectivity and reductions in traffic jams. All this is with the assistance of artificial intelligence.'
        ]
      },
      {
        heading:'Self-driving vehicles',
        about:[
          'Although self-driving vehicles are not in standards right now science has launched many AI-powered safety functions in every car. With the assistance of AI, one can detect dangerous situations and accidents. Google Maps and other navigations are also AI-powered.'
        ]
      },
      {
        heading:'Machine translations',
        about:[
          'AI has built language translation software based on written and spoken texts to improve translations.',
          'There are infinite uses of AI and they are increasing every day. AI has different use cases in every sector today including health, transport, food and farming, and many more. Further, artificial intelligence will be applicable in every firm tomorrow. So start learning it today. Get the best artificial intelligence training.'
        ]
      },
      { heading: 'By the end of this course, you will be able to:', about: ['Have a clear understanding of the theory behind AI. Work on AI projects that involve the application of concepts you learnt in class. Create AI programs that are developed to perform specific tasks in the medical field, electronics, robotics, finance, education, and transportation. and so on. Understand the differences between the rate of learning, batch size, epochs, accuracy, and loss.', 'Artificial Intelligence has drastically transformed the business landscape. Come up with unique artificial intelligence programs by changing a few lines of code. Your potential and imagination is limitless. Add value to the work you do by learning how AI can make your approach unique by joining Book My Shiksha today.'] },
      {
        heading: 'Who is this course for?', about: [
          "Our Artificial Intelligence Training course in Delhi is specifically for students and professionals that have a keen interest in Artificial Intelligence. Ai training in Delhi, It is for Data Analysts that want to scale up in their career. Anybody that wants to equip themselves with skills for a lifetime. This course is for business owners who want to leverage the advancements in artificial intelligence to grow their businesses in multiple folds all whilst reducing costs, maximizing revenue and optimizing their businesses in the best way possible. This is for consultants who have years of experience and possess zero to little knowledge about coding and are looking to leverage artificial intelligence to help businesses grow. Technology enthusiasts who have a penchant for artificial intelligence and want to understand its intricacies through practical experiences."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Business Intelligence Developer, Machine Learning Engineer, AI Engineer, Research Scientist, Robotic Scientist."] },
      { heading: 'Prerequisite knowledge:', about: ["The interest to become better versions of themselves by gaining some highly coveted skills in the field of information technology and deploying these skills to help enhance the lives of themselves and others. Artificial intelligence course near me, Basic knowledge of computer programming is required. A computer that supports Windows, MacOS, or Linux. The setup and installation instructions for softwares are included for each operating system.for this course as we work with advanced programs."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Artificial Intelligence Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class,Institute for artificial intelligence in Delhi, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Artificial Intelligence Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' },]
    },
    placementCards: {
      heading: 'Placement Facility During Artificial Intelligence Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Artificial Intelligence. Artificial Intelligence course in Delhi, Our program required consistent hard work at the same time smart work as time managenment is the key. Ai course in Delhi, We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 6 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 7 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-fingerprint", name: 'Customer Recommendation -By BookMyShiksha', domainName: 'Banking & Finance' },
      { id: 2, img: "fas fa-robot", name: 'Chatbots -By BookMyShiksha', domainName: 'Banking & Finance' },
      { id: 3, img: "far fa-grin-stars", name: 'Facial Emotion Recognition and Detection -By BookMyShiksha', domainName: 'Banking & Finance' },
      { id: 4, img: "fas fa-heartbeat", name: 'Heart Disease Prediction Project -By BookMyShiksha', domainName: 'Banking & Finance' },
    ],
    relatedLink:{
      name:'Machine learning',link:'/courses/machine-learning-training-course'
    }
  },
  {
    brochure:'/assets/pdf/Data_Scientist_Master_Program_Bookmyshiksha.pdf',
    duration:4,
    image: "/assets/images/course-images/diplomaiinds.png",
    heading: 'Diploma in DataScience',
    subHeading: 'BookMyShiksha provide data science diploma for all the students who are aspiring to have a future in Data Science. We as an institute bilieves in education , however most of the companies ask for degree, diploma or masters so BookMyShiksha introduced this diploma after taking an opinion from our students.',
    aboutHeading: 'Diploma in DataScience',
    about: [
      "The Diploma course at BookMyShiksha leads learners to learn the basics of writing and running scripts and to understand complex concepts such as regular expressions, file operations and working with binary data. Enroll for the best Diploma in Data Science in Delhi to gain knowledge on the rapidly booming data science industry. The cross platform training offers learners a better use of tasks on any operating system. Ultimately, learners would be able to cater to different job roles. Join this course today to become a fantastic data scientist.",
      "Ask our tutors the right questions and clear your doubts then and there during the course to become exceptional at what you do. By enrolling for this diploma at BookMyShiksha, you will be able to apply the skills you acquire in real-life business decisions. This diploma course can help you enhance your life by helping you achieve better positions at work or open up a world of opportunities."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Have immense insight on how computer technology has transformed the world with the appreciation of scale. Carry out different tasks in Python. Conduct linear, and logistic regressions in the Python language. Have a thorough understanding of cluster and factor analysis. Use the latest Deep Learning framework tools. Ace essential character functions. Perform mathematical operations along with useful built in functions and conversion built in functions for mathematical functions. Be proficient with logical values and booleans to enhance programs. Have a business intuition whilst executing tasks, or coding with mammoth data. . Master data structures such as matrices, vectors, lists, factors and data frames. Know how to use functional programming and reusing code in programs. Unfold the deep layers of neural networks by joining the best Diploma in Data Science online course in Delhi NCR'] },
      {
        heading: 'Who is this course for?', about: [
          "This diploma is curated for novices with no prior knowledge about data science. If you are looking to become the best Data Scientist with a coveted skillset, then this course is the right one for you. To beginner engineers or data developers who are relatively new to the field and want to become better for attractive job opportunities. If you are a developer that is brilliant at other fields of information technology and want to equip yourself with skills for a lifetime, sign up for this course at Book My Shiksha."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Data Scientist, Enterprise Architect, Data Architect, Data Analyst, Applications Architect, Data Engineer, Machine Learning Engineer, Machine Learning Scientist, Infrastructure Architect."] },
      { heading: 'Prerequisite knowledge:', about: ["Learners should come with a positive mindset and a hunger for knowledge to dive deep into the world of Data Science. A computer that supports Windows, Linux or MacOS is required. An internet connection that is great and stable is essential too. No prior knowledge in programming is required. Everything that you need to know will be taught to you during the course. Any tool that has to be installed will be taught through a step-by-step process."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Diploma in Data Science Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Diploma in Data Science Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' },]
    },
    placementCards: {
      heading: 'Placement Facility During Diploma in Data Science Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Diploma in DataScience. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.', 'We are one of the few institutes which provide diploma in data science. We stand out among other institutes as we work onreal-time projects and databases or Datasets. We have our own certification given by BookMyShiksha further more we also provide certification from various brands suchas Microsoft, Redhat based on the technology student wants to work with.Students work with a minimum of 5-10 projects so as to lay their hands-onpractical exposure, real-world project helps our students to connect with the industry as they understand how an idea can be implemented and converted into something great.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 6 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 8 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-stethoscope", name: 'Detecting Parkinson’s Disease -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-male", name: 'Gender and Age Detection with Data Science -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-users", name: 'Customer Segmentation -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fas fa-traffic-light", name: 'Traffic Signs Recognition -By BookMyShiksha', domainName: 'Back-End' },
    ],
  },
  {
    brochure:'/assets/pdf/Data_Scientist_Master_Program_Bookmyshiksha.pdf',
    duration:5,
    image: "/assets/images/course-images/diplomainml.png",
    heading: 'Diploma in Machine Learning',
    subHeading: 'Machine Learning is the most searched skillset required in IT industry at the moment and will be in the coming decade. BookMyShiksha choose to provide Machine Learning as a diploma as our institiute primarily focus on AI , analytics and so on. According to news AI will generate 133 millions new jobs globally by 2023.',
    aboutHeading: 'Diploma in Machine Learning',
    about: [
      "Learn the art of Machine Learning on Python through the best Diploma in Machine Learning in Delhi. Learners have the opportunity to get an in-depth understanding of various Machine Learning models, and tools. Be in a position to handle specific components such as Reinforcement Learning, NLP, and Deep Learning. Through the best Diploma in Machine Learning, learn advanced techniques such as Dimensionality Reduction with the help of the most experienced educators at Book My Shiksha. Understand how to choose the correct Machine Learning model to address each issue.",
      "By enrolling in the best Diploma in Machine Learning in Delhi, you have the chance to transform your life by excelling in your career. Our educators are determined to be there with you every step of the way to help you excel in this field all whilst clearing your doubts and queries then and there during the course of the online training diploma."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Make robust Machine Learning models.Be excellent at making predictions and forecasting. Make impactful analysis that boost the business. Efficiently use clustering (K-means and hierarchical clustering) in your programs. Have impeccable theoretical and practical knowledge to cater to the needs of your clients. Be proficient at Dimensionality Reduction through the means of PCA, LDA and Kernel PCA. Use model selection and boosting to deploy k-fold cross validation, parameter turning, XGBoost, and grid searching. Predict accurate results for businesses. Execute powerful analysis that yields fantastic results. Add value to your own business, or the businesses of your clients.through the means of resourceful analysis. Make use of hierarchical clustering and K-means to enhance your programs. Become an expert at Dimensionality Reduction by using Kernel PCA, LDA and PCA.'] },
      {
        heading: 'Who is this course for?', about: [
          "This diploma in Delhi is for novices with no prior knowledge about Machine Learning on Python. If you want to equip yourself with a set of skills that’s in demand, this diploma is for you. Learners looking to acquire knowledge to get into Machine Learning by understanding classical algorithms. As a business owner or entrepreneur you can add value to your own business, or if you are an engineer boosting the growth of businesses for your clients this is the course for you."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Python Developer, Software Engineer, Data Scientist, Computational Linguist, Designer in Human-Centered Machine Learning, Software Developer."] },
      { heading: 'Prerequisite knowledge:', about: ["Basic computer and high school mathematical knowledge is required for an efficient learning process. Learners should take up this masters program with a thirst for immense knowledge to understand the magnificent layers of Machine Learning. A computer that runs MacOS, Windows or Linux operating system is required. A stable internet connection that is good is necessary as well. Everything else that you need to know for the diploma program will be covered in the program. Additionally, you will also receive a step-by-step instruction manual to install any software that is needed for the diploma program. High school mathematical knowledge. A computer that supports Windows, MacOS, or Linux. Everything else that is required to start using Machine Learning is included in the course."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Diploma in Machine Learning Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Diploma in Machine Learning Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Diploma in Machine Learning Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Diploma in Machine Learning. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.', 'We are one of the few institutes which provide Diploma iin Machine Learning. We stand out among other institutes as we work onreal-time projects and databases or Datasets. We have our own certification given by BookMyShiksha further more we also provide certification from various brands suchas Microsoft, Redhat based on the technology student wants to work with.Students work with a minimum of 5-10 projects so as to lay their hands-onpractical exposure, real-world project helps our students to connect with the industry as they understand how an idea can be implemented and converted into something great.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 6 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 8 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-ship", name: 'Kaggle Titanic Prediction -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-wine-glass-alt", name: 'Wine Quality Prediction -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-box-open", name: 'TMDB Box Office Prediction -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fas fa-paw", name: 'Wildlife Object Detection System -By BookMyShiksha', domainName: 'Back-End' },
    ],
  },
  {
    brochure:'/assets/pdf/Data_Scientist_Master_Program_Bookmyshiksha.pdf',
    duration:6,
    image: "/assets/images/course-images/masterinds.png",
    heading: 'Master in DataScience',
    subHeading: 'BookMyShiksha build this diploma under the guidance of IT experts who have been in IT field for more than a decade. BookMyShiksha makes education a priority as students are the future of this nation and we as an intitute bilieve that its our obligation to guide them in the right path and make them industry ready. Minimum eligibility criteria to get a seat in our diploma is class 10th and 12th with mathematics.',
    aboutHeading: 'Master in DataScience',
    about: [
      "From laptops to smartphones every device creates hefty and massive data. With the advancement of technology, the need to interpret and analyze data is also growing and hence it is creating a gap that can be filled by masters of data science. Data scientist have emerged humongous over the past few decades as every business want to make data-driven decisions. Thus, pursuing a master&#39;s in data science can lead you to a successful journey ahead. Let us dive into Deep and understand how choosing a master&#39;s in data science can be a perfect choice for your career.",
      "The Master in Data Science program at BookMyShiksha is delivered online. It is conducted by the best data science professionals in the field. This is the best Masters in Data Science as it offers a multidisciplinary curriculum that is managed by experienced faculty from top companies, the flexibility of online learning, and a versatile group of peers. Our educators are determined to clear the doubts and queries of our learners then and there during the course to enhance the overall learning of each student.",
      "This multidisciplinary program draws its structure from computer science, statistics, management, social sciences, and law. Students who join the masters program at Book My Shiksha will use the newest tools and methods of analysis to derive insights from unstructured data that’s complex and address real-world issues."],
    aboutSections: [
      {
        heading:'ROLES AFTER MASTER’S IN DATA SCIENCE',
        about:[
          'A Master&#39;s in data science can be a wonderful choice for people who want to build a great future. But before that, have a grasp of the roles of being a data scientist. Here are some everyday roles after pursuing a master&#39;s in data science:',
          '• Gather the data from various sources',
          '• Organizing the gathered data',
          '• Using different data analysis algorithms to build insights',
          '• Finding different patterns and trends',
          '• Communicating the result to business',
          '• Helping businesses in making data-driven decision',
          '• Providing regular reports about different algorithms',
          'So the above are the roles after completion of a master&#39;s in data science. All in all a master Data scientist caterers to all the needs related to data of a business. Businesses look for skilled data scientists who can provide them with accurate information and for this they provide them handsome amount. Pursuing a master&#39;s in data science will not just give you a great amount but it has multiple benefits too.'
        ]
      },
      {
        heading:'BENEFITS OF MASTERS IN DATA SCIENCE',
        about:[
          'There is a melange of benefits to pursuing a master&#39;s in data science. Here are a few perks of pursuing a master&#39;s in data science:'
        ]
      },
      {
        heading:'More opportunities',
        about:[
          'After completing 5 years in data science you get more career opportunities in the data science profession. Firstly, job opportunities are higher as there is very less competition. Science becomes a field of opportunities and career opportunities keep on growing with the advancement of degrees.'
        ]
      },
      {
        heading:'High-end Knowledge',
        about:[
          'You have high-end technical knowledge after finishing your master&#39;s in data science. This knowledge makes you more hireable in this competitive environment. Data scientists have great knowledge about technology and hence they can survive in any field. According to reports, data scientists are the top-notch growing jobs in the world.'
        ]
      },
      {
        heading:'Evolving nature',
        about:[
          'Technology is always evolving and hence the job of data scientists keeps on evolving. After rolling in a master&#39;s degree in data science, you can learn different skills that can be highly helpful for businesses. The trends of data keep on evolving so the opportunities keep on growing.'
        ]
      },
      { heading: 'By the end of this course, you will be able to:',
        about: [
          'Be proficient at research design. Have a thorough understanding of Data Cleansing, Data Engineering, Mining and Exploring. Furthermore, learners would be able to be experts at Data Visualization. Incorporate the statistics you learn from analysis to improve your own business, or the sales of your clients. Be proficient at Machine Learning and the other intricacies it entails.',
          'Thus, one can say pursuing a master&#39;s in data science will be a great choice if you want to build a strong career. So if you want to build a strong career by acquiring data-related knowledge then pursue a master&#39;s in data science and get ready to be hireable.'
        ] },
      {
        heading: 'Who is this course for?', about: [
          "This program is for undergraduates who are looking for a fantastic Masters program in Data Science. This program is suitable for Freshers, Engineers, Domain Experts, Software & IT Professionals, Marketing & Sales Professionals, Data Professionals. Whether you are new to the field of computer programming or possess some knowledge in the field, this course can be a great starting point for you to grow your skillset or career exponentially. Businessmen who are looking for opportunities to take their businesses to the next level can leverage the advancements in the Data Science industry to boost their revenues."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Business Data Analyst, Data Analyst, Data Architect, Solutions Architect, Data Engineer, Data Scientist, Systems Engineer."] },
      { heading: 'Prerequisite knowledge:', about: ["Bachelor’s Degree with a minimum of 50% or equivalent passing marks. No prior coding experience is necessary. However, basic computer knowledge is essential for a smooth learning process. Learners should come with a mindset to grow and should seek to gain immense knowledge to understand the intricacies of Data Science. A computer that supports Windows, Linux or MacOS is necessary. An internet connection that is stable is important too. Everything that you are required to know for this program will be taught to you during the masters program. Furthermore, you will also receive instructions to install any software that is required for the masters program."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Master in Data Science Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Master in Data Science Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Master in Data Science Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Master in Data Science. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.', 'We are one of the few institutes which provide master in data science. We stand out among other institutes as we work onreal-time projects and databases or Datasets. We have our own certification given by BookMyShiksha further more we also provide certification from various brands suchas Microsoft, Redhat based on the technology student wants to work with.Students work with a minimum of 5-10 projects so as to lay their hands-onpractical exposure, real-world project helps our students to connect with the industry as they understand how an idea can be implemented and converted into something great.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 8 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 9 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-car", name: 'Driver Drowsiness detection -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-users", name: 'Topic modelling using Kmeans clustering to group customer reviews -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-palette", name: 'Color Detection -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fas fa-brain", name: 'Brain Tumor Detection with Data Science -By BookMyShiksha', domainName: 'Back-End' },
    ],
  },
  {
    brochure:'/assets/pdf/Data_Scientist_Master_Program_Bookmyshiksha.pdf',
    duration:8,
    image: "/assets/images/course-images/msinml.png",
    heading: 'Master in Machine Learning',
    subHeading: 'BookMyShiksha as an institute knows that india is moving towards digitization with every aspect of our life being digitize need for Machine learning is increasing every second. BookMyShiksha provide machine learning Master with our experienced industrial trainers in Machine Learning.Machine learning makes prediction and implement automation.',
    aboutHeading: 'Master in Machine Learning',
    about: [
      "If you want your career to reach the zenith of success and help you secure a lucrative six-figure salary then get a master&#39;s in machine learning. A master&#39;s degree in machine learning can make you the choice of many different premium organizations if you required skills. So let&#39;s dive into the benefits of pursuing a master&#39;s degree in machine learning.",
      "Develop an in-depth understanding of the layers of machine learning methods by signing up for the best Masters in Machine Learning in Delhi NCR. Learners would be able to tackle real-world problems by acquiring invaluable practical skills. This curriculum is curated to improve your engineering or data science career by understanding what’s right for you at Book My Shiksha.",
      "Learners will work on projects to apply the skills they have acquired to gain practical knowledge by enrolling for the best Masters in Machine Learning in Delhi. Our educators are some of the most excellent tutors in this field and are always here to help students achieve a great learning experience by clearing all their doubts and queries during the period of course."],
    aboutSections: [
      {
        heading:'JOBS AFTER MASTERS IN MACHINE LEARNING',
        about:['Machine learning is a great career journey if you have a huge interest in automation, data, and algorithms. Here are the different types of jobs that are well paid after pursuing a master&#39;s in machine learning:',
        '• Machine learning engineer',
        '• Data scientist',
        '• Human-centered machine learning designer',
        '• Software Developer',
        'These are some of the well-paid jobs that you easily get after pursuing an integrated course in machine learning. These jobs are only made for high-end knowledgeable students who have a strong hold on technology and machine learning. Machine learning is a fast-growing area and it has grown hastily over the previous few years; thus, it’s use cases have also increased. Let&#39;s learn some of the advantages of pursuing a master&#39;s in machine learning.'
      ]
      },
      {
        heading:'PERKS OF PURSUING A MASTER IN MI',
        about:[
          'Machine learning and its great knowledge can help you in getting a great income if you have relevant skills and a love for technical insights. There are a few of the benefits of pursuing a master&#39;s in machine learning:'
        ]
      },
      {
        heading:'Gain Skills &amp; Knowledge',
        about:[
          'During your course for the master&#39;s in machine learning, you learn about technology and artificial intelligence. Thus, you tend to grow exponentially in the field of machine learning. Also, you will have a secure career in technology as you have great knowledge. Also, this knowledge keeps on increasing with time as the environment keeps on changing with trends.'
        ]
      },
      {
        heading:'Growth',
        about:[
          'Growth is the demand in every sector of a job. Machine learning is at a boom stage and hands you can grow at an excellent speed in the marketplace. Employers are ready to pay handsome figures if you have relevant knowledge. You can witness regular growth after pursuing a master&#39;s in machine learning.'
        ]
      },
      {
        heading:'Great career graph',
        about:[
          'Machine learning is at a great stage and once you complete your master&#39;s you can get an upward career graph that will help you in getting better jobs. Also, top companies will reach out to you if you have massive expertise. You can expand your career in data science too after reaching a certain stage.',
          'So these are some exciting benefits of pursuing a master&#39;s in machine learning. Also, you can step into the field of data science, once you reach a certain stage. If you want to be the choice of employers tomorrow and build a strong career then a master&#39;s in machine learning will be a great choice. Choose the best place to pursue a master&#39;s in machine learning like ours.'
        ]
      },
      { heading: 'By the end of this course, you will be able to:', about: ['Unlock your true potential in the field of Machine Learning. Have a complete understanding of your new skills including deep learning, probabilistic modeling, anomaly detection and unstructured data processing. Propel your career in the path you choose to cater to a larger clientele. Take up bigger projects and be more efficient at what you do by enrolling for the masters program at Book My Shiksha.'] },
      {
        heading: 'Who is this course for?', about: [
          "This program is for undergraduates who are looking to pursue a brilliant Machine Learning Masters program. This course caters to Engineers, Data Professionals, Software and IT Professionals. This course is specially for developers who possess the basic knowledge in this field but are looking to become the best versions of themselves by adding coveted skills to their repertoire."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Data Engineer, Big Data Analyst, Machine Learning Engineer, Data Scientist."] },
      { heading: 'Prerequisite knowledge:', about: ["Bachelor’s Degree with a minimum 50% or equivalent marks graduation. Coding experience is mandatory.Basic computer and high school mathematical knowledge is required for an efficient learning process. It is a must for the learners to have basic coding experience. Every learner that is signing up for this Masters in Machine Learning program with Book My Shiksha should have the hunger to improve their lives and grow by excelling at their careers. Along with that, they must have the determination and will to put in their best efforts to ace this masters program. Besides that, a computer that runs MacOS, Windows or the Linux operating system is necessary. A stable internet connection that is fast is necessary as well. Everything else that a learner is required to be aware of for this masters program will be taught during the training. Additionally, learners will also receive a step-by-step guide to install any software that is necessary for the masters program."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Master in Machine Learning Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Master in Machine Learning Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Master in Machine Learning Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Master in Machine Learning. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.', 'We are one of the few institutes which provide Master in Machine Learning. We stand out among other institutes as we work onreal-time projects and databases or Datasets. We have our own certification given by BookMyShiksha further more we also provide certification from various brands suchas Microsoft, Redhat based on the technology student wants to work with.Students work with a minimum of 5-10 projects so as to lay their hands-onpractical exposure, real-world project helps our students to connect with the industry as they understand how an idea can be implemented and converted into something great.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 8 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 9 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-shopping-basket", name: 'Market Basket Analysis -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-user-secret", name: 'Real-time Spam Detection -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-rupee-sign", name: 'Financial Budget Analysis -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fas fa-smog", name: 'Weather Forecasting -By BookMyShiksha', domainName: 'Back-End' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:2,
    image: "/assets/images/course-images/seo.png",
    heading: 'Search Engine Optimization (SEO)',
    subHeading: 'SEO – Search Engine Optimization help to generate organictraffic on the Website for your products and services. It helps us to rank higher searching results insearch engines like Google Browser, Bookmyshiksha cover SEO from beginner toadvance level and SEO on-page, Off-page help to up website ranking. BookMyShiksha teach youhow to choose and find the most popular and relevant keywordsused in search engine queries, helping search engines find those sites anddisplay them to web users.',
    aboutHeading: 'Search Engine Optimization (SEO)',
    about: [
      "Gain an in-depth knowledge of search engine algorithms and about the role they play with organic search results and websites. To further build on this knowledge, 𝐛𝐞𝐬𝐭 𝐒𝐞𝐚𝐫𝐜𝐡 𝐄𝐧𝐠𝐢𝐧𝐞 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐜𝐨𝐮𝐫𝐬𝐞 𝐢𝐧 𝐃𝐞𝐥𝐡𝐢 through which you will be learning the key aspects to create an efficient SEO strategy, that includes tips and tricks on the selection of keywords and to perform keyword research. Learn about consumer psychology and search behavior to target the right demographic. Learn how to analyse on-page SEO to identify new opportunities to improve the growth of a website’s search optimization.",],
    aboutSections: [
      { heading: 'What will you learn  in this course?', about: ['BookMyShiksha, we’ll focus on site-level optimization, on-page SEO, blogging optimization, and optimization for local searches. You will be able to complete a competitive analysis of a webpage. Learn to develop the perfect approach to achieve a productive relationship that is successful with clients. Learn to enhance relationships with influencers by engaging in collaborations, and analyze different kinds of data to see which performs the best. Present the final recordings and recommendations for SEO to clients.'] },
      {
        heading: 'By the end of this course, you will be able to:', about: [
          '• Optimize the website content for the best search engine rankings.',
          '• Identify the right keywords, and strategies for SEO.',
          '• Build real-world skills to apply in a digital marketing, or content creation careers.',
          '• Analyze and choose the right campaigns for social media marketing, and cater to the appropriate demographic.',
          '• Conduct tests to figure out which types of data performs well with the targeted audience.',
          '• Figure out the accurate methods for mathematical SEO.',
        ]
      },
      { heading: 'Top skills you will acquire:', about: ['Search Engine Optimization (SEO), On-Page and Off-Page Optimization, Search Engine Marketing (SEM), Optimization for local, and international audiences, Social Media and Content Marketing, Align SEO Techniques with business strategies, Marketing Analytics, and Branding'] },
      { heading: 'Who is this course for?', about: ['This course is meant for individuals, new, small businesses, or established business owners that are looking to crack the code to offer exceptional social media marketing strategies.', 'Join the 𝐛𝐞𝐬𝐭 𝐒𝐞𝐚𝐫𝐜𝐡 𝐄𝐧𝐠𝐢𝐧𝐞 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐜𝐨𝐮𝐫𝐬𝐞 𝐢𝐧 𝐃𝐞𝐥𝐡𝐢 to stand out in a sea of applicants.'] },
      { heading: 'Job opportunities after finishing this course:', about: ['Organic Search Engine Optimization, Social Media Analyst, Link Builder, PPC Manager, SEO Guarantee Expert, Offline Marketing and Advertising, Public Relations Manager, Reputation Manager.'] },
      { heading: 'Prerequisite knowledge:', about: ['A basic understanding of the internet, and search engines. Analytical, technical and programming skills are a bonus!'] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Digital Marketing Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Digital Marketing Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Diploma in Digital Marketing Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in SEO. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 6 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 7 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fab fa-google-plus-square", name: 'Social Media Strategies for Online Shopping Cart -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 2, img: "fas fa-user-check", name: 'Customer Satisfaction for a Digital Marketing Agency -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 3, img: "fas fa-coins", name: 'Return on Investment for Various Digital Marketing Strategies -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 4, img: "fab fa-google", name: 'Google Search Engine Marketing Case Study Analysis -By BookMyShiksha', domainName: 'Marketing & Businesss' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:3,
    image: "/assets/images/course-images/rpa.png",
    heading: 'RPA Training',
    subHeading: 'We all know Robotic process automation with the name of (RPA). It’s a software-basedtechnology. RPA is very easy to learn and Robotic Process Automation (RPA)does not require any programming background. BookMyShiksha helps you to choose manyjob roles are available in RPA like RPA Developer, RPA Business Analyst, RPASolutions Senior Developer, RPA Technical Lead, RPA Engineer, and RPAAdministrator. RPA is a very fast-growing platform. With the increasing demandfor automation, RPA professionals  demand is increasing day by day.',
    aboutHeading: 'RPA Training',
    about: [
      "This is the best RPA training and certification course online, and at BookMyShiksha, we utilise the trending RPA development software that companies rely on for Robotic Process Automations. You will be able to learn how RPA works by completing in-depth worksheets, and projects. Gain access to curated syllabi by the top educators in Delhi.",
      "Gain knowledge from our educators who will offer you the best tips, and tricks to enhance your career, only at Book My Shiksha."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Have a clear understanding to use RPA efficiently. Incorporate the different strategies you learn to help clients grow their businesses, or take your business to the next level. Complete a RPA overview from start to finish.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is designed for people that are looking to excel in the software development field. Or if you are somebody that’s looking to add highly valued skills, or you are new to the realm of coding or programming, sign up for this course at Book My Shiksha today."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["RPA Developer, Robotics Analyst, Robotics Engineer, Research Scientist, Data Scientist, Robotic Scientist."] },
      { heading: 'Prerequisite knowledge:', about: ["Learners should possess the will to expand their horizons, and welcome new opportunities post completion of this resourceful course. A computer that supports Windows is essential. All details about RPA will be included in the course."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For RPA Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for RPA Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During RPA Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in RPA. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-user-alt", name: 'Customer onboarding -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-database", name: 'Extracting data from PDFs, scanned documents and other formats -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-file-alt", name: 'Periodic report preparation and dissemination -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "far fa-database", name: 'Data migration and entry -By BookMyShiksha', domainName: 'Back-End' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:3,
    image: "/assets/images/course-images/java.png",
    heading: 'Java Training',
    subHeading: ' Java is the mostglobally demanded language for the past many years. Java language used to create websites, Mobile App Development, IoT Applications games, Cloud-based Applications, Desktop GUI Applications, etc. After compilationJava training with BookMyShiksha you get a job as a Senior Developer, Java Android Developer, Junior Developer, Web Developer& Java EE developer. If we look at salary andcareer objective then Java is on the top list in a programming language. ',
    aboutHeading: 'Java Training',
    about: [
      "Learn to write stand-alone applications by using Java language through BookMyShiksha. Implement the right object-oriented concepts by using superb Java features such as classes, references, and interfaces. This is the best online course for Java training in Delhi. You will learn to create well structured classes that are efficient using packages. Understand how to read and write programs using input and output streams.",
      "Enroll for the best Java training course in the national capital region where our educators will help you excel in your careers."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Have a solid foundation in Java programming. Have an understanding of object-oriented principles and to apply them in Java applications. Write programs that handle and create exceptions too. Incorporate Java Collections Framework to efficiently work with groups of objects. Be well versed in the more advanced features of Java like interfaces, generics, exception handling, and abstract classes.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for anybody that is seeking the knowledge of the Java language to scale up in their careers."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Junior Developer, Senior Developer, Java Web Developer, Java Android Developer, Java EE Developer."] },
      { heading: 'Prerequisite knowledge:', about: ["No prior Java programming knowledge is necessary. Basic computer knowledge is essential."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Java Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Java Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Java Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Java. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 6 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 7 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-rupee-sign", name: 'Currency Converter -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-list-ol", name: 'Number Guessing Game -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-plane", name: 'Airline Reservation System -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fas fa-bolt", name: 'Electricity billing system -By BookMyShiksha', domainName: 'Back-End' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:4,
    image: "/assets/images/course-images/dotnet.png",
    heading: '.Net Training',
    subHeading: '.Net was developed and created by Microsoft.It’s an open-source platform and no need to purchase any kind of license forwork on it. If we go with dot net, we will get a good opportunity in dotnet.There .net developers also get good salaries in India and out of India also. BookMyShiksha uses the most popular tools in our .net curriculum like Microsoft Web Platform Installer,  NuGet, NDepend, ReSharper, .NET Reflector,Visual Studio Gallery, and Web Essentials for Visual Studio, etc.',
    aboutHeading: '.Net Training',
    about: [
      "Learn to write stand-alone applications by using Java language through BookMyShiksha. Implement the right object-oriented concepts by using superb Java features such as classes, references, and interfaces. This is the best online course for Java training in Delhi. You will learn to create well structured classes that are efficient using packages. Understand how to read and write programs using input and output streams.",
    ],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Have a thorough understanding of the fundamental elements of computer programming. Leverage different development techniques to produce a well designed web application that includes the user interface, data access layers, and business logic. Be an expert at writing codes using the C# language by joining this course at Book My Shiksha. Create ASP.NET web applications that make you stand out from the crowd.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for anybody that is interested in learning the .Net language. This course is specially designed for beginner C# programmers. IT, and non IT students can also enroll for this course in Delhi NCR."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Junior Research Fellow (RF), Senior Research Fellow (SRF), Project Associate, Senior Project Associate, Author, Senior Author."] },
      { heading: 'Prerequisite knowledge:', about: ["No prior .Net programming knowledge is necessary. Basic computer knowledge is essential."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For .Net Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for .Net Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Diploma in .Net Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Dot Net. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "far fa-calendar-check", name: 'Appointment Scheduler -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 2, img: "fas fa-taxi", name: 'Cab Management System -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 3, img: "fas fa-bus", name: 'City Bus Management System -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 4, img: "fal fa-road", name: 'Civil Registration System -By BookMyShiksha', domainName: 'Marketing & Businesss' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:2,
    image: "/assets/images/course-images/vba.png",
    heading: 'VBA Training',
    subHeading: 'VBA was developed byMicrosoft. VBA - Visual Basic for Applications is easy to learn. We do notrequire the development background to learn VBA. Anyone can go with VBA. Thereis a large number of opportunities as a VBA developer. VBA is a programminglanguage. you want to switch careers in the IT industry and if you plan towork with MS-office excel programs and want to automate the Excel process so gowith VBA. BookMyShiksha helps you to grow and your career.',
    aboutHeading: 'VBA Training',
    about: [
      "Learn the general syntax rules, the right keywords to use, and to add comments by enrolling for the best VBA training course in Delhi. Understand how to automate tasks, and operations that are performed frequently. Learn what variables are, and how they relate to functions versus subroutines and methods. Our educators at Book My Shiksha are here to guide you every step of the way and help you master the program.",
      "This course is designed to educate beginners who are experimenting with the world of VBA and are looking for practical ways to automate tasks on Microsoft Excel. Enroll today for the best VBA course online in Delhi NCR."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Use intellitext with variables, especially those which are defined constants. Have clarity on what functions are, how to use them, and how to stage a complete scenario. Deeply understand how functions return values. Define the right inputs for functions, and know how to use input and message boxes to interact with users. Create the most suitable array formula. Use errors to further improve your coding. Use names and name objects to control named ranges. Join today at Book My Shiksha to improve and equip yourself with skills for life.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for anybody that is interested in learning the intricacies of VBA. This course is for students, and professionals who are looking to make a mark in their career. IT, and non IT students can also enroll for this course in Delhi."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Data Analysts, Technical Analysts, Business Analysts."] },
      { heading: 'Prerequisite knowledge:', about: ["No prior VBA programming knowledge is necessary. Basic computer, and Microsoft Excel knowledge is essential. A computer with Microsoft Excel is required."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For VBA Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for VBA Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Diploma in VBA Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in VBA. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-calculator", name: 'Calculator using Excel VBA UserForm -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 2, img: "fad fa-database", name: 'Data Entry Userform -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 3, img: "fas fa-folder", name: 'List Folders Subfolders from Dictionary using VBA -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 4, img: "fas fa-file-excel", name: 'TOC creator in Excel Workbook using VBA -By BookMyShiksha', domainName: 'Marketing & Businesss' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:3,
    image: "/assets/images/course-images/php.png",
    heading: 'PHP Training',
    subHeading: 'PHP full form is HypertextPreprocessor. It is used for web development or Webapplication. PHP is also a high & most demanded programming language in theworld. If you have advanced level PHP knowledge so it is very easy to boost yoursalary. BookMyShiksha also provides the best content in PhP training, Nowadays there are so many companies including MNS’s work on PHPProgramming language. TCS, HCL, Infosys, Facebook, Wipro, and Cognizant everyoneknows these companies. These companies also work on PHP.',
    aboutHeading: 'PHP Training',
    about: [
      "The Hyperlink Preprocessor course at BookMyShiksha offers learners a comprehensive guide to learn coding in PHP. Starting with the basics, this course also dives into MySQL Databases for user driven functionality that’s dynamic. Sign up today for the best PHP training course in Delhi. Understand how to work with variable declarations, and data outputs. Play with objects, conditional statements, arrays, functions, form validations, loops, sorting and so much more.",
      "At BookMyShiksha, students would be able to incorporate the sheer power of dynamic page development with the help of MySQL database. Learn how to create tables and user management. Students will also be able to formulate database connections and execute SQL statements from PHP scripts. This is the best PHP online course in Delhi as we always give priority to script security, and efficiency of execution."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Formulate a Content Management System (CMS). Use MySQL Databases efficiently. Have a thorough understanding of Object Oriented Programming (OOP). Launch your applications online. Use forms to submit data. Handle AJAX to submit data without having to refresh the page. Understand the layers of PHP security. Debug your own programs. Use API to get data from a database into a graphic user interface.'] },
      {
        heading: 'Who is this course for?', about: [
          "The PHP course at BookMyShiksha is specially designed for developers that are looking to understand the fundamentals of PHP. Learners that want to integrate MySQL Databases into PHP applications. People that want to code in PHP. Anybody that has an interest in understanding the intricacies of PHP in Delhi NCR."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Command-line Scripting, Database Concepts, Server-side Scripting, Desktop Application Development, Web Development Careers, Compiler Based Applications, Computer Programmer."] },
      { heading: 'Prerequisite knowledge:', about: ["No prior PHP programming knowledge is necessary. Basic computer knowledge is essential."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For PhP Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for PhP Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During PhP Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in PhP. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-tshirt", name: 'Build a Clothes Recommendation System -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 2, img: "fas fa-chalkboard-teacher", name: 'Customer Relationship Management for ISP -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 3, img: "far fa-thumbs-up", name: 'Predict Movie Success through Data Mining -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 4, img: "fas fa-theater-masks", name: 'Fake Review Identification -By BookMyShiksha', domainName: 'Marketing & Businesss' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:3,
    image: "/assets/images/course-images/web.png",
    heading: 'HTML5-CSS3-JS Training',
    subHeading: 'HTML is easyto learn. We don’t need any programming background for HTML but it’s aprogramming language. Industries use HTML to create web pages, Sites, Webapplications. Every small and Big It companies use HTML and very easy to get a job in HTML. If you need practical knowledge in HTML so choose BookMyShiksha.Bookmyshiksha provides certification and internships in all courses.',
    aboutHeading: 'HTML5-CSS3-JS Training',
    about: [
      "Learners will be able to equip themselves with new skills to become a great Web Developer. This course will offer the basic understanding of HTML5, CSS3, and Javascript to combine these skills to build a modern, responsive website that will look fantastic on all screens. This is the best HTML5/CSS3/JS training course in Delhi NCR.",
      "Understand Web Design Guidelines. JavaScript is one of the most vital programming languages, and at Book My Shiksha, you will be able to gain all the knowledge you would require to become a brilliant JavaScript developer."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Complete web development processes from begin to finish. Have a clear understanding about media queries. Make a stunning website with responsive design. Apply web design guidelines to real projects. Get complete coding for a real responsive website only at the best HTML5/CSS3/JS online course in Delhi.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is curated for anyone that wants to understand web design and equip themselves with web development skills. This course is for anybody that wants to learn HTML5, CSS3, and JavaScript from the basic levels."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Javascript UI Developer, Javascript Expert, Remote HTML5 Developer, Javascript Front End Developer."] },
      { heading: 'Prerequisite knowledge:', about: ["No prior HTML5, CSS3, and Javascript programming knowledge is necessary. Basic computer knowledge is essential."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For HTML5-CSS3-JS Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for HTML5-CSS3-JS Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During HTML5-CSS3-JS Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Web development. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 6 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 7 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-sign-in-alt", name: 'Login authentication -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 2, img: "fab fa-product-hunt", name: 'Product landing page -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 3, img: "fas fa-laptop-code", name: 'Build Your Portfolio Website with HTML and CSS -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 4, img: "fas fa-dice-d6", name: 'A Trivia/Quiz Game Using JS (and jQuery) -By BookMyShiksha', domainName: 'Marketing & Businesss' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:3,
    image: "/assets/images/course-images/angular.png",
    heading: 'Angular Training',
    subHeading: 'Angular is one of the best web development frameworks, Top global companies that use angular in current time Gmail, Microsoft Office, Samsung, PayPal, Upwork, etc. Want to go with Web development in your job career so Angular is easy to Learn if you have JavaScript knowledge. BookMyShiksha helps you to learn from scratch.',
    aboutHeading: 'Angular Training',
    about: [
      "Through this course at BookMyShiksha, you will be able to learn the complexities of Angular 13. Learn to develop modern, responsive, and scalable web applications. Get a thorough understanding of the architecture behind an Angular application, and how to apply it. Gain an in-depth understanding of the Angular fundamentals. Be able to create single-page applications with modern JavaScript frameworks by enrolling for the best Angular training course in Delhi.",
      "Through this course at BookMyShiksha, learners can use the Angular CLI and work on projects that will allow you to implement everything that you have learnt."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Work on projects right from Setup to Deployment. Understand Components, Services, Directives, Forms, HTTP Access, Optimisation of Angular App with Modules, and Offline Compilation. Use databinding for your projects. Have a clear understanding of pipes and how to incorporate them. Have an idea of NgRx and complex state management. Use modules in Angular efficiently.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for novices and expert developers that are interested in learning a modern JavaScript framework. The course at Book My Shiksha will enable you to gain a solid foundation of Angular."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Front End Developer, Software Developer, Software Engineer."] },
      { heading: 'Prerequisite knowledge:', about: ["No Angular 1 or Angular 2+ knowledge is needed. Basic JavaScript knowledge is mandatory. However, basic TypeScript, HTML and CSS knowledge is helpful, but not mandatory."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Diploma in Angular Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Angular Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Diploma in Angular Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Angular. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-bone", name: 'Angular Bare Bones Project -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 2, img: "fas fa-money-check-alt", name: 'Room Banking System -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 3, img: "far fa-sticky-note", name: 'Notepad Application -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 4, img: "fal fa-rupee-sign", name: 'Simple Currency Converter -By BookMyShiksha', domainName: 'Marketing & Businesss' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:3,
    image: "/assets/images/course-images/node.png",
    heading: 'Node Training',
    subHeading: '  Learn how to build a superb, real-world application that is complete from start to finish with API and server rendered website. ',
    aboutHeading: 'Node Training',
    about: [
      "With this course at BookMyShiksha, you will learn to master the modern back-end stack entirely. Learn how to build a superb, real-world application that is complete from start to finish with API and server rendered website. Build a RESTful API that is fast, scalable and resourceful. It will include filters, pagination, and sorts. Understand the concept of Node by enrolling for the best Node training course in Delhi.",
      "Furthermore, you will also learn how to work with data in NoSQL databases with geospatial data. Be able to use advanced authorization and authentication techniques including password reset through the best Node online course in Delhi NCR."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Have a clear understanding of the behind the scenes including event loop, streams, blocking vs non-blocking code, modules. Incorporate encryption, sanitisation, and rate limiting in your codes. Deploy final application to production. Download code, video, and design assets for projects at Book My Shiksha.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for people who want to build quick, scalable back-end applications. Take this course if you are a front-end developer that wants to get into back-end development. This course is for you if you are still uncomfortable with coding real-world apps despite taking other courses."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Cloud Software Engineer, Lead Software Engineer, Node Developer, Technical Manager, Technical Manager, Advanced Front End Development, Technology Lead."] },
      { heading: 'Prerequisite knowledge:', about: ["This course requires basic JavaScript knowledge. Hence, it is not for novice web developers. However, no back-end experience is required."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Diploma in Node Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Node Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Node Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Node. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-globe", name: 'Web Security -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-envelope", name: 'Email Sender -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "far fa-address-book", name: 'Books Directory -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fas fa-user-tag", name: 'Portfolio App -By BookMyShiksha', domainName: 'Back-End' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:3,
    image: "/assets/images/course-images/react.png",
    heading: 'React Training',
    subHeading: 'At BookMyShiksha, you will learn the core basics along with the components, props and dynamic data binding. Understand how to work with user events and state to create interactive applications. ',
    aboutHeading: 'React Training',
    about: [
      "Learners can get an introduction to React.js. At BookMyShiksha, you will learn the core basics along with the components, props and dynamic data binding. Understand how to work with user events and state to create interactive applications. Gain knowledge on working with lists, and conditional content. Work with in-built and custom hooks by enrolling for the best React training course in Delhi.",
    ],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Deploy React applications. Check for authentication. Have a clear understanding on debugging React applications. Be proficient at working with fragments and portals through this course at Book My Shiksha. Apply class based and functional components. Use React Hooks efficiently in your career.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for students that are looking to build fast and reactive web applications. Anyone that is looking to learn a widely popular technology that’s used by leading tech giants. People that want to take their web development skills to a higher level and have a future-proof career by signing up for the best React online course in Delhi NCR."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["React Developer, Front End Web Developer, UI Engineer III."] },
      { heading: 'Prerequisite knowledge:', about: ["No prior knowledge in React is not required. JavaScript/HTML/CSS fundamentals are mandatory for this course."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For React Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for React Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During React Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in React. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fab fa-instagram-square", name: 'Social Media App -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-shopping-cart", name: 'e-Commerce App -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-cloud", name: 'Weather App -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fas fa-sms", name: 'Messaging App -By BookMyShiksha', domainName: 'Back-End' },
    ],
  },
  {
    brochure:'/assets/pdf/Python Course--- Bookmyshiksha.pdf',
    duration:3,
    image: "/assets/images/course-images/pythondjango.png",
    heading: 'Python Django Training',
    subHeading: 'Write code in Python and Django efficiently. Test your skills to create products. Have a thorough understanding of the framework that’s required for these programs. Solve questions easily whilst working on a number of projects.',
    aboutHeading: 'Python Django Training',
    about: [
      "Learn the concepts of Python and Django from the best educators in Delhi NCR by enrolling at Book My Shiksha. Students will learn the various theoretical concepts and also apply them in real-time projects. Working on these projects will help you to gain hands-on experience and get you started on your career.",
      "Through the best Python/Django training in Delhi, you will be able to learn the fundamentals, and have a clear understanding of the tools."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Write code in Python and Django efficiently. Test your skills to create products. Have a thorough understanding of the framework that’s required for these programs. Solve questions easily whilst working on a number of projects. Improve your set of skills, and portfolio. Be a master of Create, Retrieve/Read, Update, and Delete (CRUD) which are the core basics of any Django or web development projects. Overcome all the programming related obstacles to excel in your career through Book My Shiksha.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for novices who are curious about web development. This is for Python developers who are interested in learning the intricacies of Django. Students who are looking to turn ideas and visions in their head into real projects by enrolling for the best Python Django online course in Delhi. Web developers who are looking to enrich their skillset and make a difference in their careers."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Python Developer, Data Analyst, Financial Advisor, Educator, Product Manager, Data Journalist."] },
      { heading: 'Prerequisite knowledge:', about: ["A basic idea about HTML, CSS, Python, and Django would be great. A computer that supports Windows, MacOS, or Linux. The setup and installation instructions are included for each operating system. Everything else that is required to start using Python and Django are included in the course."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Python Django Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Python Django Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Python Django Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Python Django. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "far fa-comments", name: 'Django Chat App -By BookMyShiksha', domainName: 'Back-End' },
      { id: 2, img: "fas fa-hospital", name: 'Django Hospital Management System -By BookMyShiksha', domainName: 'Back-End' },
      { id: 3, img: "fas fa-train", name: 'Railway Enquiry System -By BookMyShiksha', domainName: 'Back-End' },
      { id: 4, img: "fas fa-store", name: 'Clothes Online Store with Payment -By BookMyShiksha', domainName: 'Back-End' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:2,
    image: "/assets/images/course-images/mongodb.png",
    heading: 'MongoDB Training',
    subHeading: 'Students will master the fundamentals of MongoDB, including MongoDB’s Document data model, working with CRUD API, importing data into clusters, and Aggregation Framework.',
    aboutHeading: 'MongoDB Training',
    about: [
      "This course will help you understand MongoDB quickly. It will teach you how to leverage the power of this tool for data analytics. Students will master the fundamentals of MongoDB, including MongoDB’s Document data model, working with CRUD API, importing data into clusters, and Aggregation Framework.",
      "MongoDB is a document related data store that is super easy to work with. It scales up well as the application grows. The schemaless nature of the tool allows impressive flexibility and helps in customising the requirements of the application. At Book My Shiksha, we offer the best MongoDB training course in Delhi NCR.  It is one of the finest databases in terms of developer productivity.",
      "It is one of the most important NoSQL databases that are available in the market right now. It is widely popular, and MongoDB developers are very much in demand. Learn the intricacies of this tool through Book My Shiksha. Use MongoDB to its fullest potential for future projects, and clients. Write the best performing queries that are efficient to fetch data in the format that is required. Learn to use all the features of this database program to smartly apply them in your line of work."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Install and use the database program to use locally and in the cloud. Perform create, read, update, delete (CRUD) tasks on the database. Filter data efficiently for work purposes. Work with Mongo Shell, and drivers such as Node.js drivers. Use the right indexes whilst increasing the overall performance. Use the built in "Aggregation Framework". Have a clear understanding of replica sets, and shading. Incorporate the usage of the serverless platform “Stitch” from MongoDB.', "This is the best hands on course for MongoDB training in Delhi. And, at Book My Shiksha, we will encourage learners to work with a vast array of sample data, and use cases. By the end of the course, you will have all the knowledge you need to possess to work with MongoDB in your career.", "Regardless of which programming language you’re comfortable using, our curated course syllabi will help you learn a systematic way of interacting with MongoDB that can be applied to any of the programming languages."] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for developers, data scientists that are planning on working with MongoDB. It is for anybody that is interested in learning the best MongoDB online course in Delhi. It is for beginners, and advanced NoSQL database users who want to explore the core features of this program."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Software developer, MongoDB Developer,programmer, coder, software specialist."] },
      { heading: 'Prerequisite knowledge:', about: ["To enroll in this course at Book My Shiksha, a learner does not have to possess any prior knowledge about MongoDB. A general mobile development or web-development knowledge will be a bonus, but it is not mandatory. You can use any operating system such as Windows, MacOS, or Linux."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For MongoDB',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for MongoDB',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During MongoDB',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in MongoDB. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 2 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },
    ],
    projects: [
      { id: 1, img: "fas fa-tasks", name: 'Content Management System -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 2, img: "fas fa-project-diagram", name: 'Metadata Project -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 3, img: "fas fa-file-invoice", name: 'Finance and Investment Applications -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 4, img: "fas fa-broadcast-tower", name: 'Online Radio Station App -By BookMyShiksha', domainName: 'Marketing & Businesss' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:2,
    image: "/assets/images/course-images/sql.png",
    heading: 'SQL Training',
    subHeading: 'This course covers the basics of SQL to help learners read and write queries for a database. Work with the world’s best recognised tools to excel in this career path.',
    aboutHeading: 'SQL Training',
    about: [
      "This course covers the basics of SQL to help learners read and write queries for a database. Work with the world’s best recognised tools to excel in this career path. Use the most advanced languages out there to understand the SQL syntax. Learners would be able to analyse, understand the different layers of the SQL database.",
      "Enroll for the best SQL training course in Delhi to learn to read and write queries to a database using the most in demand programs- PostgreSQL. By joining this course, you will be able to apply these skills to the other major SQL databases such as Microsoft SQL Server, MySQL, Amazon Redshift, and Oracle amongst others.",
      "Adding SQL skills is one of the best ways to add skills to your repertoire, and at Book My Shiksha, we take this a step forward by curating a course structure that has the best, concise syllabus. Through the best SQL online training certification in Delhi you will be able to swiftly learn and implement the skills to challenges and tests."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ["Work on two of the world’s most recognised SQL tools- PostgreSQL , and PgAdmin. Have a thorough understanding of the SQL syntax. Analyse data using the GROUP BY commands. Run advanced queries with string, and comparison operations. Add logic flow to your SQL queries by using logical operators. Understand SQL JOIN commands. Create tables, and databases along with constraints on different data entries.", "By learning this course at Book My Shiksha, you will be able to set up, control, restore databases efficiently whilst tackling fresh challenges, and tasks that are modeled after real world queries, and situations."] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for anybody that is interested in learning more about SQL, PostgreSQL, or basic data analysis."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Software developer, programmer, coder, software specialist,SQL Developer"] },
      { heading: 'Prerequisite knowledge:', about: ["Learners do not have to possess any prior knowledge about SQL. However, a general mobile development knowledge or web-development understanding will be a bonus, but it is not mandatory. You would be able to use any operating systems such as Windows, MacOS, or Linux."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For SQL.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for SQL Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During SQL',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in SQL. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 2 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },
    ],
    projects: [
      { id: 1, img: "fas fa-database", name: 'Centralized College Database -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 2, img: "fas fa-shopping-bag", name: 'Online Retail Application Database -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 3, img: "fas fa-dolly-flatbed", name: 'Inventory Control Management -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 4, img: "fas fa-cash-register", name: 'Payroll Management System -By BookMyShiksha', domainName: 'Banking and Finance' },
    ],
  },

  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:3,
    image: "/assets/images/course-images/oracle.png",
    heading: 'Oracle Training',
    subHeading: ' The course is intended to become a proficient writer of Oracle SQL codes to create, modify, and edit the databases. ',
    aboutHeading: 'Oracle Training',
    about: [
      "Become a master of Oracle SQL Databases. Master the creation and editing of databases with Oracle SQL. The course is intended to become a proficient writer of Oracle SQL codes to create, modify, and edit the databases. Explore the Oracle database foundations, discover the platform, and try your hand at applying the basics to become a great Oracle master.",
      "By enrolling in the best Oracle training course in Delhi, you will be able to understand Database terminology. Learn to retrieve data from a database by using SQL command (Select). Understand how to filter data based on business requirements using SQL command (Where). Through Book My Shiksha, you will be able to create tables, and modify the structure using Create, and Alter SQL commands. Learn to join data from different tables using SQL joins."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ["After pursuing this course at Book My Shiksha, you can use SQL programs comfortably to make your queries super efficient. Combine data from 2 or more tables by using keywords such as Union, Union All, Intersect, Minus. Enforce constraints on tables using commands like Create and Alter. Create views using the SQL command Create View. Create database objects like Synonyms, and Sequences using SQL Commands. Control access of users by using Grant, Revoke commands. Improve the performance by using the Create Index command. Communicate what you have learnt and implemented to other members of the team, or to colleagues."] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for learners that are not familiar with SQL syntax. It is for students who are looking for a quick refresher course on SQL and other vital database concepts.", "Enroll for the best Oracle course online in Delhi NCR at Book My Shiksha to enrich your career."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Data Administrator, Developer, Implementer, Consultant, Data Scientist/Business Analyst."] },
      { heading: 'Prerequisite knowledge:', about: ["Learners do not have to possess any prior knowledge about Oracle. However, a general programming understanding will be a bonus, but it is not mandatory. You would be able to use any operating systems such as Windows, MacOS, or Linux."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Oracle.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Oracle',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Oracle',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Oracle. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-database", name: 'Generation System Database -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 2, img: "fas fa-calendar-alt", name: 'Club Membership Database System -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 3, img: "fas fa-shopping-basket", name: 'Grocery Stock Management Database -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 4, img: "fas fa-calculator", name: 'Tax Calculation System Database -By BookMyShiksha', domainName: 'Banking and Finance' },
    ],

  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:2,
    image: "/assets/images/course-images/powerbi.png",
    heading: 'PowerBi Training',
    subHeading: ' This course is for learners who are looking to venture into the world of the Power BI Desktop software. It is a free Business Intelligence app from Microsoft that allows you to load, visualize, and transform data.',
    aboutHeading: 'PowerBi Training',
    about: [
      "This course is for learners who are looking to venture into the world of the Power BI Desktop software. It is a free Business Intelligence app from Microsoft that allows you to load, visualize, and transform data. Learn to create reports and dashboards efficiently, and swiftly. Be able to deliver impressive business solutions to transform businesses.",
      "At Book My Shiksha, you will be able to build professional business intelligence reports from scratch. Learn to blend, and transform raw data into great interactive dashboards. Showcase in demand skills with practical experience by joining the best Power BI training course in Delhi NCR. Understand end-to-end business intelligence workflow.",
      "Our educators at Book My Shiksha will teach you how to design, and deliver impeccable end-to-end business intelligence solutions that’s of professional quality. They will share clear explanations, tips, and tricks every step of the way. Learn to follow a steady progression that’s through a systematic Power BI workflow."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ["Differentiate and understand the different types of Power BI data connectors. Understand basic table transformations. Master how to group, and aggregate data. Merge, Modify and Append queries. Have a thorough understanding of the best Power BI practices.", "Through the best Power BI online course in Delhi, you will be able to develop an entire business intelligence tool from scratch using Power BI and have the confidence to apply similar concepts to your future Power BI projects."] },
      {
        heading: 'Who is this course for?', about: [
          "This is for people that are looking for the best Power BI online training in the national capital region to participate in a hands-on, project oriented introduction to the Power BI tool. Excel users, and data analysts looking to develop advanced data modelling, business intelligence skills, and dashboard design. Aspiring data professionals who want to master the best business intelligence that is available right now."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Business Intelligence Analyst, Power BI Data Developer, Senior Software Engineer."] },
      { heading: 'Prerequisite knowledge:', about: ["Learners do not have to possess any prior knowledge about Power BI. However, a general understanding with Power Pivot, Excel Power Query, and DAX will be a bonus, but it is not mandatory. You would be able to use Power BI only on Windows as it is currently unavailable for MacOS/Linux."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For PowerBi.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for PowerBi',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During PowerBi',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in PowerBi. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-chart-line", name: 'Customer Segmentation Dashboard -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 2, img: "fas fa-star-half-alt", name: 'Sales Scorecard Dashboard -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 3, img: "fas fa-chart-pie", name: 'Sales Analysis Dashboard -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 4, img: "fas fa-at", name: 'Email Engagement Analytics Dashboard -By BookMyShiksha', domainName: 'Banking and Finance' },
    ],
  },
  {
    brochure:'/assets/pdf/Tableau Course--- Bookmyshiksha.pdf',
    duration:2,
    image: "/assets/images/course-images/tablue.png",
    heading: 'Tableau Training',
    subHeading: 'Learn how to visualize business data with Tableau. Understand how to create impactful business intelligence reports. This course on Tableau is for newcomers who are looking to dive into the world of data visualisation.',
    aboutHeading: 'Tableau Training',
    about: [
      "Learn how to visualize business data with Tableau. Understand how to create impactful business intelligence reports. This course on Tableau is for newcomers who are looking to dive into the world of data visualisation. You will use the tool’s library of resources to offer best practices for data visualisation, and storytelling. Generate powerful reports and dashboards to improve businesses and increase revenue.",
      "By signing up for the best Tableau training course in Delhi, learners would be able to have an understanding about data visualization through Tableau 2020. Learners can create opportunities for themselves or key decision-makers to explore various data patterns such as sales trends, production bottlenecks, or customer purchase behavior that can enhance their businesses and boost sales.",
      "Through Book My Shiksha, you will be able to learn all the different tools and features in Tableau."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ["Explore, experiment, create, fix, and present all the knowledge you possess for your projects. Whether they are your own projects, or for your clients you would be in a position to excel in your career. Efficiently connect, analyse, blend, calculate and join data in Tableau to a variety of datasets. Visualise data in the form of Charts, Plots, and Maps in a seamless manner. Demonstrate locations using geographic maps. Sort, filter, and group data easily by joining the best Tableau online course in Delhi."] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for people that are looking to learn and understand Tableau from scratch. If you are a novice that’s looking to sharpen your skills, then enroll for this course today at Book My Shiksha. If you are somebody that’s looking to transform businesses by offering better solutions or excel in your career, this course is for you."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Tableau Consultant, Data Analyst, Business Intelligence Analyst, Business Analyst, Business Intelligence Developer, Business Analyst, Business Intelligence Manager"] },
      { heading: 'Prerequisite knowledge:', about: ["Familiarity with Excel is great, but not mandatory. Learners need to have access to a computer using Windows or MacOS. The setup and installation instructions are included for each operating system. Everything else that is required to start using Tableau is included in the course."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Tableau Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Tableau Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Tableau Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Tableau. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
    projects: [
      { id: 1, img: "fas fa-briefcase-medical", name: 'Patient Risk Healthcare Dashboard -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 2, img: "fas fa-mail-bulk", name: 'Marketing Campaign Dashboard -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 3, img: "fas fa-helicopter", name: 'Flight Price Analysis Dashboard -By BookMyShiksha', domainName: 'Banking and Finance' },
      { id: 4, img: "fas fa-chart-bar", name: 'Crime Analysis Dashboard -By BookMyShiksha', domainName: 'Banking and Finance' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:1.5,
    image: "/assets/images/course-images/smo.png",
    heading: 'Social Media Optimization Training',
    subHeading: 'Social Media Marketing – SMO It is a partof the digital market and increases salespart, All types of industries want to increase sales and business which ispossible only with an online platform. With the help of social media, we canconnect a large number of people to make them aware of our services. ChooseBookMyShiksha and work on live projects of SMO.',
    aboutHeading: 'Social Media Optimization Training',
    about: [
      "If you are looking to become an SEO Expert by mastering search engine optimization tools and strategies, then this course is for you. Learn the theory of Google search along with other search engine algorithms. Build practical, real-world skills to apply in projects, or for the businesses of your clients to achieve the best ranking. Optimise the websites for local, and international audiences.",
      "The Social Media Optimization course provides you with the right set of skills to optimize your efforts for social media marketing. Our educators at Book My Shiksha offer the best social media optimization course in the national capital region. You will be able to learn to accurately evaluate and interpret the recordings of various advertising campaigns. Learn how to smartly assess the effectiveness of advertising by using lift studies and optimize the campaigns with split tests. Understand how advertising efficiency is interpreted across devices, and platforms. Learn how to analyse the return of investment of your marketing systems, and master the art of communicating your social media marketing recordings to the rest of the team in the company."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['The tutors at BookMyShiksha will help you become the best versions of yourself, and help you emerge as the leader amongst your colleagues. Post the completion of this course, you will be able to.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for Freshers, Sales Professionals, Traditional Marketers, Brand and Communication Managers, and Entrepreneurs who are interested in analyzing their campaign marketing recordings, and enhancing their campaigns. Learners do require any prior marketing experience but should possess basic internet navigation skills and have a thirst to participate and connect with new people on social media. Having a Facebook or Instagram account makes things easier."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media and Content Marketing, Marketing Analytics, and Branding."] },
      { heading: 'Prerequisite knowledge:', about: ["A basic understanding of the internet, and search engines. Come as you are."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Social Media Optimization Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'BookMyShiksha Corporate Trainers Profile for Socila Media Optimization Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at BookMyShiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Social Media Optimization Training',
      points: [{ point: 'BookMyShiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in SMO. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
  },

  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:1,
    image: "/assets/images/course-images/ppc.png",
    heading: 'Pay-per-click (PPC)',
    subHeading: 'Pay-per-click (PPC) is used to drive traffic to websites. This is an advertising form in which we set abudget for our ads on a given platform like Google, Facebook,Instagram, etc. Bookmyshiksha provides industrial knowledge in every field.Bookmyshiskha best institute n Delhi-NCR. If you want to choose digitalmarketing or an online marketing platform for your career BookMyShiskha is a rightchoice for your career.',
    aboutHeading: 'Pay-per-click (PPC) Training',
    about: [
      "This course will teach you all the basics of Pay-Per-Click advertising right from its definition to the benefits it offers and the relationship it shares with Search Engine Marketing. Students will learn the  different components of PPC such as AD groups, Display Network, common paid search marketing terms, billing models, Ad Auction, Quality Score, organization structure, Keywords, text ads, expanded text ads, targeting, ad extension, a-b testing and so on.",
      "Learn the advertising module that allows you to place ads on an advertisement platform by enrolling for the best Pay-Per-Click course in Delhi NCR. The goal of the ad is to lead the consumer who clicks on an advertiser’s application or website to complete a valuable action such as learning about a product or purchasing it.", "Search engines are the most popular host platforms which allow advertisers to showcase ads that are relevant to what consumers are looking for.", "Learners can create pay-per-click ad campaigns using Google AdWords, Facebook Ad platform, Microsoft Ad Network, Yahoo, and Bing search engines. You will also understand top paid advertising opportunities and where each business fits. Learn the different fundamentals, and terminologies of the PPC advertising world. Learn how to run and manage your own PPC ad campaigns. Write the best ads for your campaigns You will also be able to optimise campaigns in a cost-efficient manner which will increase your overall profit. Smartly utilise professionally proven PPC methods that are proven to work. Post the course, you will be able to amplify the revenue generation and get the most out of your advertising budget."],
    aboutSections: [
      { heading: 'Why should you join this course?', about: ['This course will include the relevant, and reliable information that’s curated specially for learners to get the most knowledge about PPC. Information will be showcased in a slide show format, lectures, and live looks at the AdWords PPC platform to implement demonstration techniques, methodologies discussed, and dive into accounts and ads that use these strategies.', "There are multiple quizzes and cheat sheets to help ensure that you are absorbing the most vital, accurate information to review lessons on your own.", "At Book My Shiksha, we offer placement opportunities for all our students at some of the leading companies in the field."] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for marketing executives that chase leads and sales from their PPC budgets, small business owners that run their own Bing or Google Ad campaigns, companies, and individuals that are just starting to invest in pay per click advertising and need assurance that they are spending their money wisely.", "Our team of educators for the best Pay-Per-Click training in Delhi are here to offer their expertise in the field so that you can generate the maximum revenue."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Search Engine Advertiser, Paid Search (PPC) Account Manager, SEM Executive, Google AdWords Manager, PPC Analyst."] },
      { heading: 'Prerequisite knowledge:', about: ["A basic understanding of the internet, and search engines. Come as you are."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Pay-per-click (PPC)',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'Book My Shiksha Corporate Trainers Profile for Pay-per-click (PPC)',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at Book My Shiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Pay-per-click (PPC)',
      points: [{ point: 'Book My Shiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in PPC. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 3 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },
    ],
    projects: [
      { id: 1, img: "fas fa-poll", name: 'Customer Preferences on Coupon Code Based Promotional Activities -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 2, img: "fas fa-poll", name: 'Report on Tools to Analyze Digital Marketing Competitors -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 3, img: "fas fa-poll", name: 'Analysis of Visual Keyword Tools for Search Engine Marketing -By BookMyShiksha', domainName: 'Marketing & Businesss' },
      { id: 4, img: "fas fa-poll", name: 'Google Search Engine Marketing Case Study Analysis -By BookMyShiksha', domainName: 'Marketing & Businesss' },
    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:1,
    image: "/assets/images/course-images/googleads.png",
    heading: 'Google Ads Certification',
    subHeading: 'Students will work on Google Ads, Google\'s online advertising platform. Learn to drive qualified traffic, or relevant customers to drive sales whilst they are searching for products and services like the ones you or your clients offer on Google.',
    aboutHeading: 'Google Ads Certification Training',
    about: [
      "With this course, students will learn to use Google Search Ads and create brilliant campaigns to target new customers and increase your revenue. Students will work on Google Ads, Google's online advertising platform. Learn to drive qualified traffic, or relevant customers to drive sales whilst they are searching for products and services like the ones you or your clients offer on Google.",
      "Learn the fastest course for your Google Ads Certification which includes AdWords Fundamentals as well as Adwords Search Certifications. By completing the best Google ads certification course in Delhi, you will be able to get an industry-recognised certification from Google. Pave the path to take on a job with an understanding of Google Ads. Learn how to crack the official exam the first time with course material of over 200 sample questions.", "Learn this course to stand out from the rest as a Google Ads marketing specialist. Be equipped with the right set of skills to take your next interview, client or even a job promotion with your Google Ads Certification. Enroll for this Book My Shiksha course if you want to learn a special set of skills that will help you shine in your career."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Crack the formula to run the right Google Ads to optimize your sales or take your client’s business to the next level. Be wise with delegating funds to run ads by targeting the right demographic. Ultimately, reducing your advertising costs, and increasing sales with accurate Google Ads. Gain professional knowledge on the running of ads relevant to your marketing strategies. Be able to communicate the results you find with your team, or clients to analyse the reports and boost profits.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for students that are looking to get started on a digital marketing career. Anybody that wants to crack more interviews or get a promotion by offering in-demand skills. Entrepreneurs who are looking to generate more revenue through online sales. Marketers who want a better strategy for ad budgets and vendors.  Look no further for the best Google ads certification course in the national capital region."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media and Content Marketing, Marketing Analytics, and Branding."] },
      { heading: 'Prerequisite knowledge:', about: ["A basic understanding of the internet, and search engines. There is no need for previous Google AdWords experience."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Google Ads Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'Book My Shiksha Corporate Trainers Profile for Google Ads Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at Book My Shiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Google Ads Training',
      points: [{ point: 'Book My Shiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Google Ads. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:1,
    image: "/assets/images/course-images/facebook.png",
    heading: 'Facebook Ads Certification',
    subHeading: ' Whether you are new to it, launching a new brand or want to improve the social media strategy on a lean budget, you will be able to create impressive Facebook ads. ',
    aboutHeading: 'Facebook Ads Certification Training',
    about: [
      "Students will be able to get a deep understanding of the Facebook Ads Manager. Whether you are new to it, launching a new brand or want to improve the social media strategy on a lean budget, you will be able to create impressive Facebook ads. The goal is to come up with simple yet creative campaigns that work to make a difference in businesses.",
      "Master the Facebook Ads Manager. Learn to connect with a new targeted demographic to lower your Facebook ad costs through our Facebook Ads Certification training in Delhi NCR. Understand how to manage mass posts as swiftly, and efficiently as possible to various social media networks. Implement the right ad campaigns, and learn advanced tracking strategies, tips and tricks through Book My Shiksha. Use advanced features that are available in Facebook Business Manager with ease.", "This course will allow you to learn the newest, and the best possible methods to implement for your clients, or businesses. You will also be able to analyse the right social media pages, and content management that’s necessary for a concise social media plan. Streamline your posting process. Learn the right techniques to optimise your Facebook page, and Facebook Ads by enrolling in the best Facebook ads certification course in Delhi."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Have an in-depth understanding of Facebook Marketing up to an advanced level. Learn about every aspect of Facebook, and Facebook Ads Manager. Optimise your ad campaigns to the fullest extent, and reform your online presence. Achieve increased conversions, and reduce the costs involved for running promotions. Educate your clients and colleagues the importance of investing in ads to help your brand reach a larger audience.', "Join this course now to learn how to take your brand, public figure, service, product, to a different level with the sheer power of Facebook Ads."] },
      {
        heading: 'Who is this course for?', about: [
          "This course is specially curated for advertising managers, online marketers, marketing reps, advertising reps, small business owners, bloggers, influencers, corporations."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Social Media Analyst, Social Media Content Creator, Social Media and Content Marketing, Marketing Analytics, and Branding."] },
      { heading: 'Prerequisite knowledge:', about: ["A basic understanding of computers, the internet and Facebook. Having social media accounts helps understanding concepts better."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Facebook Ads Certification Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'Book My Shiksha Corporate Trainers Profile for Facebook Ads Certification Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at Book My Shiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Facebook Ads Certification Training',
      points: [{ point: 'Book My Shiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Facebook Ads. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },


    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:2,
    image: "/assets/images/course-images/social media.png",
    heading: 'Social Media Promotion',
    subHeading: 'This social media promotion course is to learn to create campaigns, and run ads on social media platforms. Learn the best tips and tricks for the rapidly growing social media market.',
    aboutHeading: 'Social Media Promotion Training',
    about: [
      "This social media promotion course is to learn to create campaigns, and run ads on social media platforms. Learn the best tips and tricks for the rapidly growing social media market. Besides learning the basics, students will also learn how to analyse and improve their social media marketing strategies through this course. Join this course to add a coveted set of skills to your repertoire.",
      "Understand all the intricacies of Social Media Marketing by joining this Social Media Promotion training in Delhi NCR. Learn how to create highly optimised ads, and excellent campaigns on all social media platforms. Master Instagram marketing to the fullest extent to monetise this lucrative platform. Analyse and implement the learnings of curated Twitter Marketing strategies for focused ads. Perfect the art of YouTube marketing along with content creation, video ads, and layout. Optimise LinkedIn profiles to use the platform to grow businesses. Understand the importance of Pinterest pins, and how the marketing strategies change the game for promoting content.", "This course will allow you to increase revenue generation whilst steadily reducing marketing costs. Get better reach, and engagement for every rupee invested by joining Book My Shiksha today."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ["Use every type of social media marketing ads and social media platforms to apply the smartest online marketing strategies for your business or your clients’ business. Rapidly increase the followers, page likes, and engagement. Find new clients that will boost your brand, and income to great heights, all through the use of social marketing."] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for students that are looking for the best social media marketing course in Delhi to get started on a social marketing career. Business owners that are looking to create a strong social media presence. Entrepreneurs who are looking to generate more revenue through online sales. Marketers who want a better strategy for ad budgets and vendors."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Social Media Analyst, Social Media Content Creator, Social Media and Content Marketing, Marketing Analytics, and Branding."] },
      { heading: 'Prerequisite knowledge:', about: ["A basic understanding of computers, the internet and social media platforms. Having different social media accounts will allow you to understand the course better."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Social Media Promotion Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'Book My Shiksha Corporate Trainers Profile for Social Media Promotion Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at Book My Shiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Social Media Promotion Training',
      points: [{ point: 'Book My Shiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in SMP. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },

    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:1,
    image: "/assets/images/course-images/email.png",
    heading: 'Email Marketing',
    subHeading: 'Learn to write effective sales pitches and use our proven templates to grow your network, or business instantly. Email marketing forms the core foundation to generate revenue for various businesses.',
    aboutHeading: 'Email Marketing Training',
    about: [
      "Learn to write effective sales pitches and use our proven templates to grow your network, or business instantly. Email marketing forms the core foundation to generate revenue for various businesses. Studies from numerous online sources have proven that email marketing is one of the best marketing channels that generates the most profit, steeply beating social media and paid advertising, each year.",
      "Learn the basics of email marketing, and list building opportunities at Book My Shiksha. You will learn the different types of services that are involved in this field. Understand what a lead magnet is, and create a brilliant lead magnet by joining the best email marketing certification course in Delhi NCR. Perfect the usage of basic tools such as Microsoft Word, and Quicktime to generate optimised lead magnets."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['Customise lead magnets so that they look fresh, modern and professional. Get a larger group of people to subscribe to email lists. Work with free tools to build an email list. Be able to formulate customisable opt-in boxes, and forms. Turn website traffic into subscribers. You\'ll learn the different types of email marketing services.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for small business owners that are looking to establish a great base to stay in touch with their customers. Social media marketers who help their clients make the best out of their campaigns and generate revenue for their clients. This course is for anybody who wants to build their skills.", "If you are looking to add some niche skills to your repertoire, enroll for this email marketing training in Delhi today.", "At Book My Shiksha, we offer our students placement opportunities at some of the best companies from around the globe."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Email marketer, Social Media and Content Marketing, Social Media Content Creator, Marketing Analytics."] },
      { heading: 'Prerequisite knowledge:', about: ["Learners should have a thirst to grow businesses. Have the basic knowledge of sending emails. Accounts on social media platforms and a great internet connection would be ideal. Learners should be open to spending a few hours of their time to complete assignments to have a fully functioning system that converts visitors into long term subscribers."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Email Marketing Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'Book My Shiksha Corporate Trainers Profile for Email Marketing Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at Book My Shiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Email Marketing Training',
      points: [{ point: 'Book My Shiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Email marketing. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },


    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:4,
    image: "/assets/images/course-images/ev.png",
    heading: 'EV charging',
    subHeading: 'EV technology is the next big thing and it is very hard to find an institute to learn EV among those few institutes. We are one of them. Bookmyshiksha provides practical training in EV.',
    aboutHeading: 'EV Charging Training',
    about: [
      "EV technology is a new born baby in the tech world. Even Though it was just introduced in the market, its growth and applications are growing exponentially every Nano second, if talk about the general advantage of EV charging technology, we already know fossil fuels are non-renewable source of energy so in one way EV technology will help us for sustainable management by manufacturing product that runs with electricity. If you are really interested to learn the art of making EV charging technology our gates are open and the gates are the door to EV technologies and its application.",
      "We have trained experts from EV charging technology who have worked in this industry and now they want to share that knowledge with you. While training we will be working on live projects so students can get a hands on how EV charging technology works. Not only that every week assessment is being done to check whether students understand or have any query regarding the previous session that have been conducted by industry experts."],
    aboutSections: [
      { heading: 'By the end of this course, you will be able to:', about: ['You will be able to work on EV charging programming related work and with our coaching you will be ready to apply for jobs and get placed in various companies using EV technologies.'] },
      {
        heading: 'Who is this course for?', about: [
          "This course is for those who want to learn EV charging technology and have a background in engineering people from backgrounds like: Electrical, mechanical, automobile and electrical vehicle enthusiasts."
        ]
      },
      { heading: 'Job opportunities after finishing this course:', about: ["Automobile Engineer, EV charging Engineer, charging Station engineer, EV charging developer."] },
      { heading: 'Prerequisite knowledge:', about: ["Enthusiasm to learn this superb programming language which is a valuable lifetime skill. There is no prior coding language knowledge required. We will start from the basics. However, you would require a computer that supports Windows, MacOS, or Linux. A stable internet connection. The setup and installation instructions are included for each operating system; everything else that is required to learn and start using EV charging technology is included in the course."] },
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For EV charging Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'Book My Shiksha Corporate Trainers Profile for EV charging Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at Book My Shiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During EV charging Training',
      points: [{ point: 'Book My Shiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in EV charging. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },


    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:4,
    image: "/assets/images/course-images/Azure.png",
    heading: 'Azure',
    subHeading: 'Microsoft Azure additionally recognized as Azure is a cloud computing platform that has helped companies to control cloud services. With more than a hundred services, Azure can help you solve different challenges with its agility and development operations also called DevOps. It supports a variety of clouds and happy beta to bring smart solutions. It runs on both PC as well as Mac. But, what\'s the actual meaning of Azure? Let\'s understand its actual meaning and how its training can help you in the future.',
    aboutHeading: 'Azure Training',
    about: [
      ""
    ],
    aboutSections: [
      { heading: 'WHAT IS AZURE? ', about: ['Azure is an agile cloud computing space to control cloud services. It is an online platform that helps organizations to manage resources. These resources and services include data storing and transforming. What you need is an Internet connection and the ability to connect to the platform in order to get the services, Azure.','Some other details about Azure are: ',
      '• It was launched in 2010 on February 1',
      '• The main competitor of Microsoft Azure is AWS',
      '• It supports different programming languages including Java, JS, Node, and C#',
      '• Azure has the most number of data centers in the world ',
      'Cloud computing will be the future business of tomorrow and Microsoft Azure will be the face of it. It has extra than 200 applications that provide greater than one thousand technical capabilities. It has more than a dozen of perks including speed of service, better flexibility, more security, from disasters, and integrated deliveries. Asure has made services more affordable and hence it is dominating the cloud computing market',
      'But why should you get Azure training for your future? Here are the advantages of choosing Azure training:'
    ] },
      {
        heading: 'ADVANTAGES OF ASURE TRAINING ', about: [
          "Choosing Asure Traning can be a great choice for your future not only because of the better salary but for many other reasons. Here are some of them:"
        ]
      },
      { heading: 'Structured learning', about: ["Azure training is quick as its platform makes the education structure. The Microsoft Azure library is available around the clock and they are easily accessible. Also, it's easy and concise."] },
      { heading: 'Important Asset', about: ["Azure is an important asset for companies as it helps businesses to grow rapidly with a structured cloud network. Microsoft keeps on improving and innovating new tools that bring down the cost and improve the services. Also, it cuts down IT costs and saves time. Thus, Azure training will be a demand of every organization tomorrow. Thus, you should start learning it today from the best place. "] },
      {
        heading:'Better career',
        about:[
          'If you are looking for a career as a cloud professional then Microsoft Azure training can open millions of doors for you. You can choose different roles such as developer, data engineer, AI engineer, cloud administrator, and much more with the certification in Azure.',
          'Get high-quality education in cloud computing and open the doors for your career. Choose Azure and become a choice of top-notch organizations tomorrow.'
        ]
      }
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For Azure Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'Book My Shiksha Corporate Trainers Profile for Azure Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at Book My Shiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During Azure Training',
      points: [{ point: 'Book My Shiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in Azure. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },


    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:4,
    image: "/assets/images/course-images/AWS.png",
    heading: 'AWS Training',
    subHeading: 'In the modern world today where we walk beside technology, organizations need premium cloud skills to transform their businesses. AWS training and certificate give more than 200% return on investment. Thus, many businesses have switched to AWS. AWS provides a large variety of data basis that are built for the purpose of different types of applications. All in all, AWS can help businesses to blow in the dynamic environment. But what is AWS and how AWS training is beneficial? Let us drive into the Deep of an AWS.',
    aboutHeading: 'AWS Training',
    about: [
      ""
    ],
    aboutSections: [
      { heading: 'WHAT IS AWS? ', about: ['AWS or Amazon Web Services is the most comprehensive and largely adopted cloud platform in the world where you can get more than 200 fully features services from Data centers globally. Every organization from small to big, from startups to large enterprise are using AWS to survive in the ultra-competitive world. AWS has more features and services than other cloud providers. It offers infrastructure technology, IoT, data analysis, and much more to businesses. Also, it is the fastest, easiest, and most cost-effective application found yet. Thus, all businesses have included AWS cloud computing in their businesses.',
      'Being the most flexible and secure cloud computing environment, AWS has helped many businesses in their core fields. One can leverage the Ultra-modern technology most innovatively with the assistance of AWS. For the last sixteen years, AWS has been handing over top-rate cloud services to a melange of customers. Thus, nowadays AWS has reached an international level. If you wish to end up a future-ready cloud expert then you must have a sturdy hold on AWS.',
      'If you are not satisfied with getting AWS training; then, let us take a look at the advantages of AWS.',
      '• It was launched in 2010 on February 1',
      '• The main competitor of Microsoft Azure is AWS',
      '• It supports different programming languages including Java, JS, Node, and C#',
      '• Azure has the most number of data centers in the world ',
      'Cloud computing will be the future business of tomorrow and Microsoft Azure will be the face of it. It has extra than 200 applications that provide greater than one thousand technical capabilities. It has more than a dozen of perks including speed of service, better flexibility, more security, from disasters, and integrated deliveries. Asure has made services more affordable and hence it is dominating the cloud computing market',
      'But why should you get Azure training for your future? Here are the advantages of choosing Azure training:'
    ] },
      {
        heading: 'BENEFITS OF AWS', about: [
          "AWS has helped many startups to grow their business and enjoy well-documented services. Here are the benefits of AWS:"
        ]
      },
      { heading: 'Building largest community', about: ["Over the past 16 years, AWS has built the most dynamic community with millions of customers globally. There are more than ten thousand partners that are running every use case on AWS. AWS partner network has thousands of systems integrated with specialized services. Thus, we can say that AWS is building the largest community."] },
      { heading: 'Fastest innovations', about: ["Leverage the benefits of the latest technology with AWS cloud computing. Every day AWS accelerates the pace of innovation to invent completely new technology that can help businesses to grow and expand. Regular innovations keep AWS cloud computing on the top."] },
      {
        heading:'Functionality',
        about:[
          'AWS has greater features and services than any different cloud provider. From emerging technologies to infrastructure technologies, AWS has huge functionality for every service. You can pick the proper tools to get first-class performance as AWS has a broad range of databases. This makes AWS supreme.',
          'There are many other benefits and use cases of AS cloud computing as it is the most refined and cost-effective and secure form of cloud computing. Thus, every business is adopting AWS for reaching the top. And hence, we can say that AWS cloud computing will be the face of cloud computing tomorrow. If you want to become the best cloud computing professional then you must get AWS training from a premium place like ours.'
        ]
      }
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For AWS Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'Book My Shiksha Corporate Trainers Profile for AWS Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at Book My Shiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During AWS Training',
      points: [{ point: 'Book My Shiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in AWS. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },


    ],
  },
  {
    brochure:'/assets/pdf/FileNotFound.pdf',
    duration:4,
    image: "/assets/images/course-images/GCP.png",
    heading: 'GCP Training',
    subHeading: 'Technology has become a crucial part of our everyday life and cloud computing is crucial to evolving the technology. Google cloud platform or GCP is a cloud computing platform that is not only easy asseccible but also a high-tech platform. In addition, it is the most widely adopted cloud computing platform due to a handful of factors including big data, networking and so forth. But what Google cloud platform (GCP) is and why GCP training is beneficial? Let\'s dive into Deep and understand GCP.',
    aboutHeading: 'GCP Training',
    about: [
      ""
    ],
    aboutSections: [
      { heading: 'WHAT IS GCP? ', about: ['Google cloud platform or GCP is a platform identical to other cloud vendors like AWS, Azure and so forth. However, with GCP customers can easily assess computer resources in Google data centers on a pay-per-use basis. GCP provides management to many organization.',
      'One can use GCP when they want to run an application with the assistance of hyper-scale data centers. It helps businesses in reaching users across the globe. Also, it provides sophisticated analytics and massive data storage with cost efficiencies.',
      'Google cloud platform or GCP has become the choice of many organizations due to its competitive pricing. It offers a monthly pricing plan and also has committed discounts. The speed of GCP is so high as the customer network speeds up to 10 TBs. It keeps on innovating different tools that give real-time data processing to organizations. Now Google has also launched new machine learning and artificial intelligence tools. The networking services enable organizations to balance traffic across different resources. With regular innovations and high-end products, GCP has become the choice of many organizations globally.',
      'GCP offers a wide range of services including machine learning, networking, big data, computing & hosting, storage & database, and much more. With its premium services, GCP has become a global backbone network. It has advanced software define networking that delivers scalable, consistent, and fast performance. Thus, GCP has become the choice of many organizations today. So if you are looking for a cloud computing professional career then you must take GCP training. Are you still not convinced about GCP training? Here are the use cases that might help.'
    ] },
      {
        heading: 'GCP USE CASES', about: [
          "There are many ideal use cases of the Google cloud platform. Some of them are as follows: ",
          'For large organizations that require many permissions while working on different projects, GCP\'s wonderful organization hierarchy allows you to set policy at the top level. This feature helps organizations to complete projects without any organizational constraints.',
          'GCP has helped organizations with many benefits with machine learning, big data solutions, and analysis. Businesses can quickly get access to data without spending time integrating huge data. Thus, GCP has many use cases for different organization. ',
          'This is how Google cloud computing or GCP is helping industries to grow with a structured approach; thus, we can say it has a variety of use cases. Being the choice of many organizations, GCP keeps on improving its resources to compete with AWS & Azure. Google cloud computing will be the demand of many organizations. So get GCP training from a top place like ours and start your cloud professional career.'
        ]
      },
     
    ],
    whyUsCards: {
      heading: 'Why You Should Join BookMyShiksha For GCP Training.',
      points: [{ point: 'The syllabus of our training programs are based on the current industry projects in information technology which are recognised by our placement partners.' },
      { point: 'We provide recordings of our online sessions to the learners. So, if a student misses a class, they can utilize these recorded sessions.' },
      { point: 'Be mentored by the best professors and tutors in the field of data analytics who will offer extended support and are available to address all your queries.' },
      { point: 'We offer our students with online videos, e-books, certification handbooks, interview questions, and project source material.' },
      { point: 'Flexible payment options such as cheques, cash, credit card, debit card, net banking, and EMI. ' },]
    },
    trainesrsCards: {
      heading: 'Book My Shiksha Corporate Trainers Profile for GCP Training',
      points: [{ point: 'Our trainers are certified professionals in the field of information technology with over a decade of experience.' },
      { point: 'Our trainers are also working professionals in the data analytics sector so they would be able to offer you hands-on experience by involving you in these live projects.' },
      { point: 'The experts we recruit at Book My Shiksha work with top organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Learners will get ample guidance from our trainers to obtain placements by Internal Hiring Process or Employee Referrals.' },
      { point: 'Our trainers are certified professionals in the field of interactive data visualization with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of digital and direct advertising with over a decade of experience.' },
      { point: 'Our trainers are certified professionals in the field of software development with over a decade of experience.' }, 67]
    },
    placementCards: {
      heading: 'Placement Facility During GCP Training',
      points: [{ point: 'Book My Shiksha is associated with world-class organisations such as Web Clues, Uniq Data Solutions, Almondz, Seaborn Technologies, eInfochips, and Concrete Software Solutions.' },
      { point: 'Our experts from the HR team strive to groom learners to become the best versions of themselves. This will help learners to perform better in their interviews by helping them to focus on their personality, how they can present themselves better, speak confidently in English, and how they can converse with the interviewer and answer their questions in a polished manner.' },
      { point: 'Post 70% completion of the course, our team will set up interview calls and students will be invited for face to face interactions to prepare them for the interviews.' },]
    },
    sections: [
      {
        id: 0, sectionName: 'Course Overview', about: [
          'BookMyShiksha provide well designed and trending topics that are bieng used in IT industry in GCP. Our program required consistent hard work at the same time smart work as time managenment is the key. We provide and give various assignments activities so our students need to be alert and hyper active in order to manage the syllabus. We take two hours class a day and we are available on weekends & weekdays,There is a reason we teach only two hours a day so as to give students time to revise and practice what they have studied.'
        ]
      },
      {
        id: 1, sectionName: 'Course Duration', about: [
          '•𝐖𝐞𝐞𝐤𝐝𝐚𝐲𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 4 months classes (3 days a week, 2 hours per day + 1 Hour practical Approach) ',
          '•𝐖𝐞𝐞𝐤𝐞𝐧𝐝𝐬 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: 5 months classes (2 days a week, 2 hours per day +1 Hour practical Approach) ',
          '•𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩 𝐖𝐞𝐞𝐤𝐞𝐧𝐝 𝐁𝐚𝐭𝐜𝐡𝐞𝐬: Available (Sat & Sun/ Only Sundays + 2 Hours practical Approach) ',
          '•𝐂𝐨𝐮𝐫𝐬𝐞 𝐌𝐨𝐝𝐞: Offline & Online classroom training '
        ]
      },
      {
        id: 2, sectionName: 'Special Features', about: [
          '𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐨𝐮𝐫 𝐮𝐧𝐢𝐪𝐮𝐞 𝐰𝐚𝐲 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐨𝐮𝐫  𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬:',
          '•Mock interview/Industry mentor guidance sessions-5', '•Workshops for building your resume and Linkedin/Github profiles', '•Practical Approach', '•Internel Interviews Session', '•Provide Internship'
        ]
      },


    ],
  },




]
