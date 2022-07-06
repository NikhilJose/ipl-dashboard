FROM node:alpine
WORKDIR /workspace
COPY ./src/frontend/package.json /workspace
COPY src /workspace/src/
RUN echo "$PWD"
RUN ls
RUN npm run build

FROM maven:3.6.1-jdk-8-slim AS MAVEN_BUILD
WORKDIR /build
COPY pom.xml /build/
COPY src /build/src/
RUN echo "$PWD"
RUN ls
RUN mvn clean install

FROM openjdk:8-alpine
WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/*.jar /app/application.jar
ENTRYPOINT ["java","-jar","application.jar"]
