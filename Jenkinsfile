pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/mohammedafshan73-oss/git-car.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    cp -r git-car/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
