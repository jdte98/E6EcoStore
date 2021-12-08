FROM openjdk:11-jdk-slim
COPY "./target/ekostore-0.0.1-SNAPSHOT.war" "app.war"
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.war"]