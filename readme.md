# Basic CRUD Operations with Prisma

This is a simple guide to set up a Node.js application with Prisma ORM to perform CRUD (Create, Read, Update, Delete) operations with a database.

## Prerequisites

- Node.js installed on your machine
- NPM package manager
- PostgreSQL database (or any other supported database)
- Basic understanding of Node.js and JavaScript

## Getting Started

1. **Initialize Node.js Project**

   ```bash
   npm init -y
   ```

2. **Install Prisma**

   Initialize Prisma in your project directory:

   ```bash
   npx prisma init
   ```

3. **Set Up Database Connection**

   - Update the `schema.prisma` file with your database connection URL.
   - Example:

     ```prisma
     datasource db {
       provider = "postgresql"
       url      = env("DATABASE_URL")
     }
     ```

4. **Migrate Database**

   Create the initial migration with:

   ```bash
   npx prisma migrate save --name "Initialize database"
   ```

   Apply the migration to the database:

   ```bash
   npx prisma migrate up --experimental
   ```

5. **Generate Prisma Client**

   Generate Prisma Client:

   ```bash
   npx prisma generate
   ```

6. **Environment Variables**

   Create a `.env` file and add your database connection URL:

   ```env
   DATABASE_URL="your_database_url"
   ```

7. **Install Dependencies**

   Install required npm packages:

   ```bash
   npm install
   ```

## Running the Application

- Start your Node.js application:

  ```bash
  npm start
  ```
