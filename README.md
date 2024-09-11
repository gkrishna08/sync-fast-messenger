# **Sync Fast Messenger**

A simple React-based messenger application that allows logged in user to chat with each other. This app supports basic messaging features and showcases how to manage chat in a React application.

## Features

- Select a user to start chatting.
- Send and receive messages in real-time.
- Each user can see messages from the selected chat.
- Website can be refreshed by clicking on the logo.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js] (version 14.x or higher)
- [npm]

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone hhttps://github.com/gkrishna08/sync-fast-messenger.git
   cd sync-fast-messenger
   ```

2. **Install Dependencies**

Install the necessary packages using npm
   ```bash
   npm install
   ```

3. **Run the Application**

Start the development server:
   ```bash
   npm run start
   Open your browser and navigate to http://localhost:3000 to view the application.
   ```
# Project Name

## File Structure

Below is the file structure for this project:

```plaintext
src/
├── components/
│   ├── **ChatWindow.jsx** - Displays chat messages.
│   ├── **TextInputBox.jsx** - Input field for sending messages.
│   ├── **ChatUsers.jsx** - Lists all users.
│   ├── **Header.jsx** - Application header with a logo.
│   ├── **UserHeader.jsx** - Displays selected user's profile.
│   └── **App.jsx** - Main application component.
└── **Style.css** - Styles for the application.
