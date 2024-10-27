# Welcome to Northcoders News Desk.

## Overview:
For my individual project of my software development boot camp I was tasked with creating a full stack CRUD application. The back end isUsers can filter articles by topic, sort them by multiple criteria and comment on news articles.

## Features
CRUD Functionality.
Filter by Topic: Users can filter news articles by specific topics.
Sorting: Articles can be sorted by various criteria (e.g., date, author, popularity) and ordered in ascending or descending order.
Users can comment on articles, upvote and downvote.

## Running the project 
npm run dev

Create .env.development on the route
PGDATABASE=<database_name_here>

## Technologies Used
Frontend: React, HTML, CSS
Backend: Node.js, Express, PostgreSQL


## Usage
To view articles, visit the homepage.
Use the filter dropdown to filter articles by topic.
Use the sorting feature to order articles by different criteria.
Click onto specific articles
Comment, upvote and downvote articles.

## Known Issues
Initial API Request: The initial API request to load the homepage can be slow. 

## API Endpoints
GET /api/articles: Fetch all articles.
GET /api/topics: Fetch all topics.
GET /api/users: Fetch all users.
GET /api/articles/
: Fetch a specific article by its ID.
GET /api/articles/
/comments: Fetch comments for a specific article.
POST /api/articles/
/comments: Add a comment to a specific article.
DELETE /api/comments/
: Delete a comment by its ID.
PATCH /api/articles/
: Update an article (e.g., for upvoting/downvoting or editing content).


## Please find the backend here: 
https://github.com/mollybrace/backend-project
