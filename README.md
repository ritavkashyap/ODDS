# ODDS
 Optical Drone Detection System using R-CNN FPN Machine learning model with ReactJS frontend and Django Backend

<h3>Frontend Development:</h3>
The frontend of the application was developed using React, a widely adopted framework known for its component-based architecture and excellent user experience. Material-UI, a popular React UI framework, was leveraged to create a visually appealing and responsive topbar, as well as incorporating various icons throughout the frontend for enhanced aesthetics and user engagement. The modular organization of the frontend code using React components enabled code reusability, maintainability, and a consistent user interface.

<h3>Backend Development:</h3>
For the backend, Django, a powerful and versatile Python web framework, was utilized to build a robust and feature-rich server-side infrastructure. Django's comprehensive ecosystem facilitated rapid development, providing tools for authentication, URL routing, database ORM (Object-Relational Mapping), and more. The default database provided by Django, which is based on SQLite, was used to manage data, ensuring seamless integration with the backend and frontend components.

<h3>Database Management:</h3>
The application's data management was handled using Django's default database, which leverages SQLite as a relational database. The database schema was carefully designed to represent the application's data model effectively. Django's built-in ORM allowed for database operations to be performed using Python code, ensuring data integrity and minimizing the risk of SQL injection vulnerabilities.

<h3>Version Control and Collaboration:</h3>
The development process adhered to version control practices using Git, enabling efficient collaboration among the development team. Regular code reviews and continuous integration practices were implemented to maintain code quality and foster a cohesive development environment. Utilizing branching strategies facilitated concurrent feature development and bug fixing without compromising the stability of the main codebase.


Getting Started
Before running the dashboard, ensure you have the following installed:

Node.js (version >= 12)
npm(Node Package Manager)

<h2>Installation</h2>

Clone the repository from [URL].
<blockquote style='padding:10px;border-radius:10px'>git clone <span style='color:orange'>[repository-url]</span></blockquote>
<br>
For Backend
make a virtual environment.

If your are in linux, open your terminal and run the code
<blockquote style='padding:10px;border-radius:10px'>pip install virtualenv</blockquote>
<br>
<blockquote style='padding:10px;border-radius:10px'>python -m venv <span style='color:green'>venv</span></blockquote>
<br>
<blockquote style='padding:10px;border-radius:10px'>source <span style='color:green'>venv/bin/activate</span></blockquote>
<br>
Now your virtual environment has been activated. 

Run the command below to install the python libraries
<blockquote style='padding:10px;border-radius:10px'>pip install <span style='color:orange'>django opencv-python pillow numpy pandas torch torch-vision matplotlib</span></blockquote>
<br>
<blockquote style='padding:10px;border-radius:10px'>cd <span style='color:green'> .\backendDjango\</span></blockquote>
<br>
<blockquote style='padding:10px;border-radius:10px'>python manage.py runserver</blockquote>
<br>

you'll notice
<blockquote style='padding:10px;border-radius:10px'>Starting development server at http://127.0.0.1:8000/</blockquote>
It means your server is running at this address.
<br>
<br> 
For Frontend open another ternminal

First navigate to the folder

<blockquote  style='padding:10px;border-radius:10px'>cd .\Frontend\ODDS\</blockquote>
<br>
Now you have to install the dependencies
<blockquote  style='padding:10px;border-radius:10px'> npm i </blockquote>
<br>
After that run
<blockquote  style='padding:10px;border-radius:10px'> npm run dev </blockquote>
<br>

You'll notice
<blockquote  style='padding:10px;border-radius:10px'> <span style='color:lightgreen'>➜</span> Local:   <span style='color:skyblue'>http://localhost:5173/</span></blockquote>
<br>

It means your website is running at this address.
 <h2>File Organisation</h2>


 <h3>Frontend</h3>  
<blockquote  style='padding:10px;border-radius:10px'> 
.Frontend\ODDS
<blockquote>
├── node_modules <br>
└── public
	<blockquote>└──ODDS-logo.png</blockquote>
└── src<blockquote>
	└── assets<blockquote>
		└── Full-logo2.png<br>
		└── IP-Camera.jpg</blockquote>
	└── components<blockquote>
		└── CamCard.jsx<br>
		└── CamStatus.jsx<br>
		└── CamTraj.jsx<br>
		└── IndividualCam.jsx<br>
		└── MapDash.jsx<br>
		└── Maps.jsx<br>
		└── MarkerDash.jsx<br>
		└── Sidebar.jsx<br>
		└── Topbar.jsx</blockquote>
	└── pages<blockquote>
		└── AboutUs.jsx<br>
		└── AddNewCamera.jsx<br>
		└── CameraDetails.jsx<br>
		└── CameraStatus.jsx<br>
		└── ContactUs.jsx<br>
		└── Dashboard.jsx<br>
		└── DataVisualization.jsx<br>
		└── Documentation.jsx<br>
		└── DroneMap.jsx<br>
		└── LiveVideoFeed.jsx<br>
		└── Notification.jsx<br>
		└── PreviousData.jsx<br>
		└── PrivacyPolicy.jsx<br>
		└── Profile.jsx<br>
		└── Settings.jsx<br>
		└── TermsAndConditions.jsx<br>
		└── TrajectoryStudy.jsx<br>
		└── VideoFeed.jsx</blockquote>
	└── styles<blockquote>
		└── contact.css</blockquote>
	└── App.css<br>
	└── App.jsx<br>
	└── index.css<br>
	└── main.jsx</blockquote>
└── index.html<br>
└── package.json
</blockquote>
</blockquote>
<h3>Backend</h3>
<blockquote style='padding:10px;border-radius:10px'>
.backendDjango<blockquote>
└── backendDjango<blockquote>
    ├── __pycache__<br>
    ├── __init__.py<br>
    ├── asgi.py<br>
    ├── settings.py<br>
    ├── urls.py<br>
    ├── views.py<br>
    └── wsgi.py</blockquote>
└── cameras<blockquote>
    ├── __pycache__<br>
    ├── migrations<br>
    ├── __init__.py<br>
    ├── 900_dataset_epoch.pt<br>
    ├── admin.py<br>
    ├── alexnet.py<br>
    ├── apps.py<br>
    ├── distanceFromEdgeDev.py<br>
    ├── locationCoordinates.py<br>
    ├── models.py<br>
    ├── serializers.py<br>
    ├── tests.py<br>
    ├── trajectoryInCamera.py<br>
    └── views.py</blockquote>
</blockquote>
