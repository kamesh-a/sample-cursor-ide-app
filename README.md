# Sample Serve API

A simple HTTP server built with Node.js that provides an endpoint returning the current date and a request counter. This project is containerized using Docker and can be deployed to Kubernetes using ArgoCD.

## Features

- Simple HTTP server running on port 3000
- Returns current date in ISO format and request counter
- Docker containerization
- Kubernetes deployment configuration
- NGINX Gateway integration
- Automated testing with Jest
- CI/CD pipeline with GitHub Actions

## Prerequisites

- Node.js 20.x or later
- Docker
- Kubernetes cluster (for deployment)
- ArgoCD (for GitOps deployment)

## Installation

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sample-serve-docker.git
   cd sample-serve-docker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will start on `http://127.0.0.1:3000`

### Docker Installation

1. Build the Docker image:
   ```bash
   docker build -t sample-serve .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 sample-serve
   ```

## API Endpoints

### GET /

Returns the current date in ISO format and a counter that increments with each request.

**Request:**
```bash
curl http://localhost:3000/
```

**Response:**
```json
{
  "date": "2024-03-21T10:30:45.123Z",
  "counter": 1
}
```

**Response Headers:**
```
Content-Type: application/json
```

The response includes:
- `date`: Current date and time in ISO 8601 format
- `counter`: Number that increments with each request

## Testing

Run the test suite:
```bash
npm test
```

The tests verify:
- Server responds with correct status code (200)
- Content-Type header is set correctly (application/json)
- Response contains valid date and counter properties
- Date is in ISO format
- Counter is a number

## Kubernetes Deployment

The application is configured for deployment to Kubernetes using ArgoCD. The deployment includes:

- Deployment with 2 replicas
- Service configuration
- Pod Disruption Budget
- NGINX Gateway integration
- HTTPRoute configuration

### Deployment Steps

1. Ensure ArgoCD is installed in your cluster
2. Create the ArgoCD application:
   ```bash
   kubectl apply -f gitops/argocd/application.yaml
   ```

3. The application will be automatically deployed to the cluster

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:
- Builds the Docker image
- Runs tests
- Pushes the image to GitHub Container Registry
- Creates tags for different deployment scenarios

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
