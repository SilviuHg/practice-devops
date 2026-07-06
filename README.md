# Multi-Container Web Application with CI/CD and Kubernetes

A lightweight microservices-based web application designed to demonstrate a modern, automated software development lifecycle using containerization and orchestration. 

## Architecture & Tech Stack
- **Frontend:** Vanilla HTML5, CSS3, and JavaScript (Fetch API) hosted inside a lightweight **Nginx** web server.
- **Backend:** A RESTful API built with **Node.js** and **Express.js**, featuring unit testing with **Jest** and **Supertest**.
- **CI/CD Pipeline:** Fully automated workflows using **GitHub Actions**. Frontend and backend changes are isolated, triggering individual builds and pushes to **Docker Hub** only when their respective codebases are modified.
- **Orchestration:** Microservices deployment and networking configured locally on a **Kubernetes** cluster (via Docker Desktop) utilizing declarative manifests (`Deployments` and `NodePort Services`).

## Automated Workflow (CI/CD)
1. **Code Push:** Developer pushes code changes to the GitHub repository.
2. **Path Filtering:** GitHub Actions detects if modifications occurred in `/frontend` or `/backend`.
3. **Continuous Integration:** If backend changes are made, automated unit tests are executed via Jest.
4. **Containerization:** Upon successful validation, a minimal Alpine-based Docker image is built.
5. **Continuous Delivery:** The newly built container image is automatically pushed to Docker Hub with `latest` tags, ready for rolling updates in Kubernetes.

## Local Deployment (Kubernetes)
- It requires a running cluster inside Docker Desktop or WSL.

1. Clone the repository and navigate to the root folder.
2. Apply the Kubernetes manifests:
   ```bash
   kubectl apply -f k8s/
   ```
3. To access the services locally on Windows, forward the ports (requires 2 active terminals):
    **In terminal 1 (Frontend UI):**
    ```bash
    kubectl port-forward service/frontend-service 30002:80
    ```
    **In terminal 2 (Backend API):**
    ```bash
    kubectl port-forward service/backend-service 30001:3000
    ```
