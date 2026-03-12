# Node-Devops-Project
## Containerizing a Node.js Application with Docker Compose


This project demonstrates how to containerize a Node.js backend application and run it using Docker Compose along with MongoDB and Redis services.

The application exposes a simple REST API and connects to MongoDB for data storage and Redis for caching. All services are orchestrated using Docker Compose.

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Redis
* Docker
* Docker Compose
* AWS EC2
* GitHub

---

## Project Structure

```
Node-Devops-Project
│
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .env
└── README.md
```

---

## Application Endpoints

| Endpoint  | Method | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| `/`       | GET    | Returns message confirming the application is running |
| `/health` | GET    | Returns health status of the application              |

---

## Environment Variables

The application uses environment variables for configuration.

Example `.env` file:

```
PORT=8090
MONGO_URI=mongodb://mongo:27017/devopsdb
REDIS_HOST=redis
REDIS_PORT=6379
```

---

## Docker Setup

### Dockerfile

The Dockerfile builds the Node.js application image using the official Node.js base image.

Steps performed in the Dockerfile:

1. Use Node.js base image
2. Create application working directory
3. Install dependencies
4. Copy application source code
5. Expose port 8090
6. Start the application

---

## Docker Compose Services

The project uses three services defined in `docker-compose.yml`.

### 1. Application Service

* Runs the Node.js application
* Port mapping: **8090:8090**
* Loads environment variables from `.env`

### 2. MongoDB Service

* Uses official MongoDB image
* Data persistence enabled using Docker volumes

### 3. Redis Service

* Uses official Redis image
* Runs on default Redis port **6379**

---

## Service Architecture

```
User Request
     │
     ▼
Node.js Application (Port 8090)
     │
 ┌───┴────────┐
 ▼            ▼
Redis       MongoDB
(Cache)     (Database)
```

All services communicate through the Docker Compose network.

---

## Running the Project

### 1. Clone the Repository

```
git clone https://github.com/sivanarasimhulu21/Node-Devops-Project.git
```

```
cd Node-Devops-Project
```

---

### 2. Run the Containers

```
docker-compose up --build
```

This command will:

* Build the Node.js Docker image
* Start MongoDB container
* Start Redis container
* Start the Node.js application container

---

## Access the Application

Open in browser:

```
http://localhost:8090
```

Health check endpoint:

```
http://localhost:8090/health
```

---

## Data Persistence

MongoDB uses Docker volumes to ensure that data remains even after containers are stopped or restarted.

---

## Deployment

This project can be deployed on:

* Local machine using Docker
* AWS EC2 instance using Docker and Docker Compose

---

GitHub:
https://github.com/sivanarasimhulu21
