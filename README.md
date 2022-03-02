# Enfocado
![pomo](https://user-images.githubusercontent.com/68618256/156303377-ef0eaddd-0cc8-4d4b-88dd-84cbdfeadeb9.png)

### Set Up
1. Create a new DB called [ capstone ] in postgres and connect to it. 

    a. \c capstone

### Requirements
- [X] You must create 2 apps: Everyone must build and deploy an Angular frontend that communicates with a Springboot backend API.
- [X] Be a complete product.
- [X] Implement thoughtful user stories
- Be deployed online We recommend Heroku or AWS.    

## Elevator Pitch
- Program that helps individuals w/ concentration issues focus working on a task utilizing the Pomodoro Technique

## What did I learn from the previous project?
https://ecomputernotes.com/software-engineering/project-planning
Before starting a software project, it is essential to determine the tasks to be performed and properly manage allocation of tasks among individuals involved in the software development. Hence, planning is important as it results in effective software development.


# The original Plan
- This project involves creating a REST API for a task database that allows users to create new tasks via an Angular.js frontend
- I want it to have authorization/authentication
- I want to have fun with this project - Try not to be so serious.
- Maybe user signs up and then can press button with plays music that will help them concentrate on a task. 
- How am I going to play music? Possibly through Youtube?
- I'll probably need to look into the Youtube API
- So far I have two models
- Users and tasks
- Users can leave comments about current song playing
- I'm going to make the comments live
- How many Pomodoros did it take you to complete your task? 
- When a Task a created a timer is also created

![capstone_wireframe](https://user-images.githubusercontent.com/68618256/156301966-b11336f6-9b05-4d43-993f-4e68050d9d60.png)

# TODO
02/23/22
- X Build backend 
- X Build user model
- X Create DB
- X Connect backend to DB

02/24/22
- X Build task class
- X Connect task class to DB
- X Create task repo/controller
- X Create Angular frontend
- X Create frontend repo in Github

02/25/22
- X Build user class
- X Connect user class to DB
- X Create user repo/controller
- X Successfully call API from frontend 

02/26/22
- X Create functionality to create a task on frontend
- X Build out timer 

02/27/22
- X Refactor Timer
- X Register functionality working on both frontend and backend

02/28/22
- X Complete login functionality - frontend
- X Display User tasks
- Maybe task has a one to one relationship to a POMODORO class?
- I can ask user “how many times did you use the pomodoro on this task?

03/01/22
- Fix frontend routing
- Style application with Bootstrap


03/02/22
- Add tests to program


| Request Type | URL| Functionality | 
|--|--|--|
| GET | /categories/getCategories | Get all Categories |
| POST | /categories/addCategory | Add a Category |
| POST | /categories/addResourceToCategory | Add a Resource to a Category |
| DELETE | /categories//categories/{categoryId}/resources/{resourceId}/remove | Remove a Resource from a Category |
| GET | /categories/getCategory/id | Get a Category |
| PUT | /categories/editCategory/id | Edit a Category |
| DELETE | /categories/deleteCategory/id | Remove a Category |
| GET | /resources/getResources | Get all Resources |
| POST | /resources/addResource | Add a Resource |
| GET | /resources/getResource/id | Get a Resource |
| PUT | /resources/editResource/id | Edit a Resource |
| DELETE | /resources/deleteResource/id | Remove a Resource |
| GET | /users/getUsers | Get all Users |
| POST | /users/saveUser | Add a User |
| POST | /users/role/addToUser | Add a Role to User |
| POST | /users/role/save | Add a Role |

# Project Challenges

1. Adding authentication/authorization - Initially, one of my goals, was to add these functionalities using JWT tokens. When I would look for a user in the DB I would get an error that stated the object I was trying to view was null. I did research on Google/StackOverFlow and then asked my classmates on Slack. I was steered in the right direction and attempted to implement UserDetails and UserDetailsService but it was still not working. I decided I would not implement JWT tokens and would instead build out the interface for an admin user. 
3. Not a fan of Postman interface - I ended up using Swagger UI

# DEPENDENCIES USED
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    
    <dependency>
        <groupId>org.postgresql</groupId>
        <artifactId>postgresql</artifactId>
        <scope>runtime</scope>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
        <optional>true</optional>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>RELEASE</version>
        <scope>compile</scope>
    </dependency>
    
    <dependency>
       <groupId>org.projectlombok</groupId>
       <artifactId>lombok</artifactId>
       <scope>provided</scope>
    </dependency>

## System Tools Used

|  |  |
| --- | :--- |
| Spring Boot | Angular |
| Apache Maven | Bootstrap |
| Postman | Postgres |
| Lucid App |

## Resources
- https://www.youtube.com/watch?v=Gx4iBLKLVHk&t=8615s
- https://disabilitycreditcanada.com/10-best-assistive-technologies-add-adhd/
- https://francescocirillo.com/pages/pomodoro-technique
- https://pomofocus.io/app
- https://www.youtube.com/watch?v=8ZPsZBcue50
- https://www.youtube.com/watch?v=Gx4iBLKLVHk&t=620s
- https://mvnrepository.com/search?q=spring+web
- https://javascript.plainenglish.io/implement-a-countdown-timer-with-rxjs-in-angular-3852f21a4ea0
- https://www.youtube.com/watch?v=FMGQsW_B9Rs
- https://www.youtube.com/watch?v=SD36PYWEwaI&t=249s
- https://howtocreateapps.com/angular-tutorial-json/https://coolors.co/palette/00296b-003f88-00509d-fdc500-ffd500
- https://coolors.co/palette/f6bd60-f7ede2-f5cac3-84a59d-f28482
- https://www.youtube.com/watch?v=eMJ5spB3P1c&t=65s
- https://www.youtube.com/watch?v=7DzdebaSgxg&t=7s
- https://www.smashingmagazine.com/2019/02/angular-application-bootstrap/


