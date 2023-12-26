# 209231102321023-05

## Book Record Managment System
    >> Server 
        >> Storing Book Data
        >> User Registration
        >> Subscription

# Routes and Endpoints

## /users
GET: Get all list of users
POST: Create a new user

## /users/{id}
GET: Get a user by their ID
PUT: Update a user by ID
DELETE: Delete a user by ID (Check if he/she still have an issued book) && (is there any fine to be collected from him/her)


# Subscription Types:
    >> 3 months (Basic Subscription)
    >> 6 months (Standard Subscription)
    >> 12 months (Premium Subscription)


## /users/subscription-details/{id}
GET: Get user subscription details
    >> Date of subscription
    >> Valid Till
    >> Fine if any

## /books
GET: Get all books
POST: Create/Add a new book

## /books/{id}
GET: Get a book by ID
PUT: Update a book by its ID

## /books/issued
GET: Get all issued books

## /books/issued/withFine
GET: Get all issued books with fine

# Fine Calculation
    >> If the user has an issued book and the issued book is to be retuned at 01/01/2024
    If he missed the date of reneval/return, then he needs to pay a penalty of Rs. 100/-

    >> If the user has an issued book and the issued book is to be retuned at 01/01/2024
    If he missed the date of reneval/return, and his subscription also expires,then he needs to pay a penalty of Rs. 200/-    


### Commands:    
>> npm init
>> npm i express
>> npm i nodemon --save dev

### Run cmd
npm run dev


MVC Architecture:
M: Model (Tells us structure of MongoDb Collection)
V: View (UI)
C: Controller (Brai/Logic of a router)