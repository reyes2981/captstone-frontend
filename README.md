# springtech-java-project-2

### Set Up
1. Create a new DB called [ capstone ] in postgres and connect to it. 

    a. \c capstone

### Option1

Be deployed online We recommend Heroku or AWS.


- [X] You must create 2 apps: Everyone must build and deploy an Angular frontend that communicates with a Springboot backend API.
- [X] Be a complete product.
- [X] Implement thoughtful user stories
- [X] Be deployed online We recommend Heroku or AWS.    


ELEVATOR PITCH:
PROGRAM THAT HELPS INDIVIDUALS W/ CONCENTRATION ISSUES FOCUS WHILE WORKING ON A TASK UTILIZING THE POMODORO TECHNIQUE

WHAT DID I LEARN FROM MY LAST PROJECT?
https://ecomputernotes.com/software-engineering/project-planning
Before starting a software project, it is essential to determine the tasks to be performed and properly manage allocation of tasks among individuals involved in the software development. Hence, planning is important as it results in effective software development.


# The original Plan

PROJECT IDEA
- This project involved creating a REST API for a task database that allows users to create new tasks via an Angular.js frontend
- I WANT IT TO HAVE AUTHENTICATION/AUTHORIZATION 
- I WANT TO HAVE FUN WITH THIS PROJECT - TRY NOT TO BE SO SERIOUS 
- Maybe user signs up and then can press button with plays music that will help them concentrate on a task. 
- How am I going to play the music? Possibly through Youtube?
- I'll probably need to look into the Youtube API
- SO FAR I HAVE TWO MODELS
- USERS AND TASKS
- USERS CAN LEAVE COMMENTS ABOUT CURRENT SONG PLAYING 
- IM GOING TO MAKE THE COMMENTS LIVE 
- How many Pomodoros did it take you to complete your task? 
- When a Task a created a timer is also created

![capstone_wireframe](https://user-images.githubusercontent.com/68618256/156301966-b11336f6-9b05-4d43-993f-4e68050d9d60.png)

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
            <artifactId>spring-boot-starter-web</artifactId>
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
            <artifactId>spring-boot-starter-security</artifactId>
            <version>2.6.3</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
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
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.22</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>com.auth0</groupId>
            <artifactId>java-jwt</artifactId>
            <version>3.18.3</version>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.22</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-boot-starter</artifactId>
            <version>3.0.0</version>
        </dependency>

## System Tools Used

|  |  |
| --- | :--- |
| Spring Boot | IntelliJ IDEA/Java 11 and 17 |
| Apache Maven | Google |
| Swagger UI | Postgres |
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


