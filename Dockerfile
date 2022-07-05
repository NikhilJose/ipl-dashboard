FROM node:alpine
WORKDIR /workspace
COPY ./src/frontend/package.json /workspace
COPY . .
RUN npm run build

FROM openjdk:8-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} application.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","/application.jar"]
