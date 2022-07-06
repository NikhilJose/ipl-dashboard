FROM maven:3.6.1-jdk-8-slim
RUN mvn clean install

FROM openjdk:8-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} application.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","/application.jar"]
