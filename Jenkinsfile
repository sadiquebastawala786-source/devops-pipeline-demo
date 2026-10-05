pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Test') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                bat '"C:\\Users\\sadique\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" build -t devops-pipeline-demo:1.0 .'
            }
        }
    }
}