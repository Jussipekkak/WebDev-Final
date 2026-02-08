# WebDev-Final

A cleaning service website that includes a booking calendar and a contact form.  
The backend is an Express/MongoDB service that stores bookings and sends notifications via Mailtrap.

Demo video: https://youtu.be/2Hh4z-gHG6I

## Content and structure
- `frontend/`: Vite + React application  
- `backend/`: Express API, MongoDB connection, Mailtrap email notifications  
- `Dockerfile`: Builds the frontend and runs the backend in the same container  

## Requirements
- Node.js >= 18 and npm  
- MongoDB database  
- Mailtrap credentials (or another SMTP service)  

## Running locally
1) Install dependencies:
```bash
cd frontend && npm install
cd ../backend && npm install

2) Set environment variables
# backend/.env
PORT=8080
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>
MAILTRAP_USER=<user>
MAILTRAP_PASS=<pass>

3) Start the service
Start Docker:

docker build -t webdev-final .
docker run -p 8080:8080 webdev-final

OR

cd backend
npm start

cd frontend
npm run dev
