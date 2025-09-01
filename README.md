# Event Scheduler API

Welcome to the Event Scheduler API! This project aims to provide a robust backend solution for creating, managing, and scheduling events in a seamless way. With features like user authentication, real-time notifications, and calendar integrations, this API is designed to enhance event management processes.

## Features
- **User Authentication:** Secure login and registration system to handle user accounts.
- **Event Management:** Create, update, and delete events with ease.
- **Notifications:** Send reminders and updates to users to keep them informed about upcoming events.
- **Calendar Integration:** Sync events with Google Calendar and Outlook.
- **Search & Filter:** Easily search events by date, category, and user.

## Getting Started
To get a local copy up and running follow these simple steps:

1. Clone the repo: `git clone https://github.com/yourusername/event-scheduler-api`
2. Install dependencies: `npm install`
3. Set up environment variables in a `.env` file.
4. Start the server: `npm start`

## API Endpoints
- `POST /api/v1/auth/register`: Register a new user.
- `POST /api/v1/auth/login`: Login an existing user.
- `GET /api/v1/events`: Retrieve all events.
- `POST /api/v1/events`: Create a new event.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Nodemailer for sending notifications

## Contributing
Contributions are what make the open-source community such a fantastic place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Feel free to check the open issues.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
