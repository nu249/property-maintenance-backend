# Property Maintenance Reporting Platform

Backend and database for the Property Maintenance Reporting Platform.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

## Project Structure

- config/ - Database configuration
- controllers/ - Handles API requests and responses
- middleware/ - Error handling middleware
- models/ - MongoDB data models
- routes/ - API routes
- services/ - Business logic and dashboard calculations
- utils/ - Reusable utility functions
## Database Structure

The MongoDB database contains four main collections:

- users - Stores property managers, tenants, and maintenance team users.
- buildings - Stores building information and manager relationships.
- apartments - Stores apartment information and links apartments to buildings and tenants.
- maintenanceRequests - Stores maintenance requests and links them to buildings, apartments, tenants, and maintenance team members.
## Database Relationships

- Each building is linked to a property manager using managerId.
- Each apartment is linked to a building using buildingId.
- An occupied apartment can be linked to a tenant using tenantId.
- Each maintenance request is linked to a building, apartment, and tenant.
- Each maintenance request can be assigned to a maintenance team member using assignedTo.

## Maintenance Request Fields

Each maintenance request contains:

- buildingId
- apartmentId
- apartmentNumber
- tenantId
- assignedTo
- description
- status
- priority
- category
- createdAt
- resolutionDate

## Priority Scoring

Open maintenance requests are scored based on priority:

- Critical = 5 points
- High = 3 points
- Medium = 2 points
- Low = 1 point

The scores are used to identify and rank buildings that need the most attention.

## API Endpoints

### Main APIs

- GET /api/users
- GET /api/buildings
- GET /api/apartments
- GET /api/maintenance-requests

### Dashboard APIs

- GET /api/dashboard/summary
- GET /api/dashboard/recent-requests
- GET /api/dashboard/buildings-needing-attention
- GET /api/dashboard/priority-scores

### Health Check

- GET /health

## How to Run the Project

1. Install the project dependencies:

   npm install

2. Create a .env file and add the required environment variables:

   MONGODB_URI=your_mongodb_connection_string
   PORT=3000

3. Start the server:

   npm start

4. The server will run on port 3000.

## Testing

The APIs were manually tested using Postman.

The following endpoints were tested successfully and returned the expected responses:

- Users API
- Buildings API
- Apartments API
- Maintenance Requests API
- Dashboard Summary API
- Recent Requests API
- Buildings Needing Attention API
- Priority Scores API
- Health Check

Successful API requests returned HTTP status 200 OK.

## Deployment

The backend is deployed online using Render.

Base URL:
https://property-maintenance-backend.onrender.com

CORS is enabled to allow the frontend application to communicate with the backend APIs.

The deployed backend was tested successfully and is connected to MongoDB Atlas.