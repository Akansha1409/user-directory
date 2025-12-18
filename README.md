# User Directory Application

A responsive frontend application built with React and Tailwind CSS that allows users to view, search, and add users using the JSONPlaceholder API.

## Features Implemented
- **Fetch Users:** Loads data from `jsonplaceholder.typicode.com`.
- **Search:** Real-time filtering by Name or Email.
- **Details View:** Modal popup with address and company details.
- **Add User:** Form with validation (Email regex, required fields).
- **Persistence:** Newly added users are saved to LocalStorage.
- **Sorting:** Toggle between A-Z and Z-A.
- **Responsive:** Layout adapts to mobile and desktop.

## Setup & Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local development server.

## Assumptions
- The "Add User" feature is frontend-only.
- New users are stored in `localStorage` to persist across refreshes since the API does not actually save them.
