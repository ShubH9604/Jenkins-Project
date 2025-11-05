# 🚀 Message App – CI/CD with Jenkins & Render

This project demonstrates a complete **CI/CD pipeline** using **Jenkins** to automatically build, test, and deploy a Node.js application to **Render** on every code push.

---

## 📌 Project Overview

This is a simple Node.js Message App that reads a message from a `message.txt` file and displays it on the webpage. The CI/CD workflow ensures:

✅ Automatic build & test on every push  
✅ Auto deployment to Render using Deploy Hook  
✅ Jenkins Pipeline integrated with GitHub  

---

## 🏗️ Tech Stack

| Component | Technology |
|----------|-------------|
| Backend | Node.js |
| CI/CD | Jenkins (Pipeline Script) |
| Version Control | Git & GitHub |
| Deployment | Render |

---

## 🔄 CI/CD Pipeline Flow

1. **Developer updates code** and pushes to GitHub  
2. **Jenkins detects GitHub commit** and runs pipeline  
3. Jenkins stages:  
   - Checkout Code  
   - Install Dependencies  
   - Run Tests  
   - Deploy to Render using Deploy Hook  
4. **Render deploys latest build**  

---

## 🧩 Jenkins Pipeline Stages

| Stage | Description |
|--------|----------------|
| Checkout | Pulls latest code from GitHub |
| Install Dependencies | Runs `npm install` |
| Run Tests | Executes unit tests using `npm test` |
| Trigger Render Deployment | Deploys app to Render via Deploy Hook |

---

### ✅ Jenkinsfile Used

```groovy
pipeline {
  agent any

  environment {
    RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
    PATH = "/opt/homebrew/bin:${env.PATH}"
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Trigger Render Deployment') {
      steps {
        sh "curl -X POST ${RENDER_DEPLOY_HOOK}"
      }
    }
  }

  post {
    success {
      echo '✅ Pipeline completed successfully!'
    }
    failure {
      echo '❌ Pipeline failed.'
    }
  }
}
