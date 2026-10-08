pipeline {
    agent any

    /*
     * NOTE: If you are using Jenkins NodeJS Plugin, you can uncomment
     * the tools section below with your configured NodeJS installation name:
     *
     * tools {
     *     nodejs 'NodeJS'
     * }
     */

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Syntax Validation') {
            steps {
                echo 'Validating JavaScript files syntax...'
                script {
                    if (isUnix()) {
                        sh 'node -c app.js build.js'
                    } else {
                        bat 'node -c app.js build.js'
                    }
                }
            }
        }

        stage('Build & Verify') {
            steps {
                echo 'Executing application build script...'
                script {
                    if (isUnix()) {
                        sh 'npm run build'
                    } else {
                        bat 'npm run build'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Build and verification succeeded!'
        }
        failure {
            echo 'Build failed. Check Jenkins console output for details.'
        }
    }
}
