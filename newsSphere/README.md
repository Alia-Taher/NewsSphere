# NewsSphere 

## Project Overview
NewsSphere is a dynamic, modern web application that aggregates news from various categories, providing users with a comprehensive and personalized news reading experience.

## Features
- Multiple news categories (Business, Entertainment, General, Health, Science, Sports, Technology)
- Responsive design
- Infinite scrolling for news articles
- Article filtering


## Technologies Used
- React
- Vite
- News API
- Context API for state management


## Project Structure
```
news-sphere/
│
├── public/
│   └── news.svg
│
├── src/
│   ├── assets/
│   │   ├── logo.png
│   ├── 
|       components/
│   │   ├── ArticleDisplay.jsx
│   │   ├── Categories.jsx
│   │   ├── Footer.jsx
│   │   ├── HomeNavbar.jsx
│   │   ├── Navbar.jsx
│   │   ├── NavLinks.jsx
│   |   ├── NewsByCategory.jsx
│   │   └── NewsDisplay.jsx
│   │   └── NewsFragment.jsx
│   │   └── SideBarNews.jsx
│   │   └── SlideShow.jsx
│   
|
│   ├── context/
│   │   ├── NewsContext.js
│   │   └── NewsProvider.jsx
│
│   ├── pages/
│   │   ├── Article.jsx
│   │   ├── ByCategory.jsx
│   │   └── Home.jsx
│
│   ├── styles/
│   │   └── index.css
│
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── README.md
```