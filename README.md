## Project Description:
This Real-Time Chat Application is a feature-rich communication platform designed to facilitate seamless and dynamic conversations. With a focus on user interaction, this application incorporates private and group chat functionalities, as well as real-time online status indicators, creating a comprehensive and engaging communication experience.
## Tech Stack
#### Client: ReactJS

#### Server: NodeJS and express
Build a scalable, realtime chat app with Node JS, React JS, and ChatEngine.io

The client-side of the application is built using ReatJS components for building interactive and dynamic web pages.Bootstrap is used for styling and responsive design.

The server-side of the application is built using NodeJS which is a javascript runtime environment for running JavaScript programs and is used to build server-side applications.
ExpressJS is used to handle a variety of different HTTP demands.

 We are storing all our chat data on ChatEngine.io which has APIs and Socket channels for hosting chats.

## Key Features:

1. User Authentication:
 * Implements secure user authentication to ensure private and authenticated access.
 * Users can create accounts, log in securely, and personalize their profiles.
2. Private Chats:
 * Users can initiate private one-on-one conversations for confidential and personalized communication.
 * End-to-end encryption ensures the security and privacy of private messages.
3. Group Chats:
 * Facilitates collaboration and team communication through group chat functionality.
 * Users can create, join, and manage group chats for specific projects or interests.
4. Real-Time Online Status:
 * Provides real-time indicators to showcase the online/offline status of users.
 * Enhances user connectivity by allowing them to see when others are available for communication.
5. Emoji and Multimedia Support:
 * Enhance user expression by incorporating emojis and multimedia features such as image and file sharing.
6. Message Persistence:
 * Messages are stored securely, providing users with chat history across sessions.
 * Supports the retrieval of past messages for a comprehensive chat log.
7. Chat Deletion:
 * Users can selectively delete private or group chat histories.

## Screencaps

### Login Page
![image](https://github.com/Jyothirmai-123/Realtime-Chat-Application/assets/113755812/2f11e9fe-52d5-47c7-9d53-93f4fc6db386)

### Chats page
#### Searching of users
![image](https://github.com/Jyothirmai-123/Realtime-Chat-Application/assets/113755812/ffe9574a-0a6a-40ce-a4bc-facfdeec9b89)

#### After adding a new user
![image](https://github.com/Jyothirmai-123/Realtime-Chat-Application/assets/113755812/2d5499cc-91f1-4b43-b0c0-cc2929b990dd)

#### 1 to 1 private chat
![image](https://github.com/Jyothirmai-123/Realtime-Chat-Application/assets/113755812/52b3570b-e971-4556-81b7-b5be0af41f00)

#### Group chat
![image](https://github.com/Jyothirmai-123/Realtime-Chat-Application/assets/113755812/cc14e6cf-a8d4-4a39-9a26-d85eefa191e3)

#### 2 users chatting simultaneously
![image](https://github.com/Jyothirmai-123/Realtime-Chat-Application/assets/113755812/35930d96-5839-4dbe-b723-ddd45110cbbf)
   
##  Connecting Node JS to ChatEngine.io
* ChatEngine.io provides full-stack chat tools - which makes adding chat into Node apps easy.
* To leverage this tool, we’ll create a Chat Engine project, and store our users in this project. All users in our Chat Engine project can chat with one another through their APIs / platform.
* Let’s create a Chat Engine project for our users and connect our Node JS server to it!
* Go to ChatEngine.io, sign up, and create your first project. Once this is done, you’ll see a Project ID and a Private Key.
* The Project ID is an API key which connects your API calls to your project
* The Private Key gives you permission to create and destroy users on your project
  * Note: Copy them both because we use them in the coding part and make sure to replace my private key and project ID with your Private Key and project ID. So we can create users on your project.
* At /authenticate function in index.js
  * We use the “Get or Create User” call to fetch or create this user - depending on if they already exists.


## How to Run??
1. Install NodeJS
2. Go to the project folder directory and open the terminal (preferably gitbash).
3. Type "npm install" in your terminal to install the required npm dependencies and libraries
* In the backend/ directory,
    * npm init ( Hit enter for every step )
    * npm install express cors axios
    * npm install --save-dev nodemon      
* In the Chat_App/ directory,  
    * npm create vite@latest
        * Project name: frontend
        * Select a framework: › React
        * Select a variant: › JavaScript
* In the frontend/ directory,
   * npm install ( to install all dependencies)
   * npm install axios
   * npm install react-chat-engine-pretty
4. To access the project,
   1. In the backend directory(cd backend), run "npm run start" to start the Node.js server, ensuring no errors in the terminal.
   2. Open a new terminal, navigate to the frontend directory(cd frontend), and run "npm run dev" to launch the React application.
Note: Make sure that both the frontend and backend are running simultaneously for accessing the project.
5. Finally, you can click on follow link to access your project runs in the browser. Manually, you can access the project at http://localhost:5173/ for frontend development.
   

