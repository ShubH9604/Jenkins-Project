pipeline {
  agent any

  environment {
    RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
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