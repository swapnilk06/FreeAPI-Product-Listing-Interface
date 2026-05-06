# FreeAPI-Product-Listing-Interface

# 🛍️ Chai & Code: Storefront UI

A premium, highly responsive product listing application built with **React 19** and **Vite 8**. This project fetches dynamic product data from the FreeAPI endpoint and presents it in a sleek, dark-mode **glassmorphism** interface inspired by the warm, saffron tones of the *Chai aur Code* community.

## Key Features

*   **Asynchronous Data Fetching:** Utilizes `Promise.all()` to concurrently fetch 12 random products from FreeAPI for a seamless catalog generation.
*   **Premium Glassmorphism UI:** Features a custom CSS architecture with frosted acrylic cards, deep roasted background gradients, and vibrant saffron accents.
*   **Animated Skeleton Loaders:** Provides a smooth, enterprise-grade user experience by displaying animated skeleton cards while API requests are resolving.
*   **Dynamic State Management:** Efficiently handles loading states, data mapping, and network errors using React's `useState` and `useEffect` hooks.
*   **Fully Responsive:** The CSS Grid layout effortlessly adapts to mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

*   **Frontend Framework:** React 19
*   **Build Tool:** Vite 8
*   **Styling:** Custom Vanilla CSS (CSS Variables, Flexbox, CSS Grid, Backdrop Filters)
*   **API Data:** FreeAPI (Random Products Endpoint)

## 🚀 Quick Start Guide

To get this project up and running on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository or download the project files.
2. Open the project folder in your terminal.
3. Install the required dependencies:
   ```bash
   npm install

	 API Integration
This project is powered by the public Random Products endpoint from FreeAPI.

Endpoint:
GET [https://api.freeapi.app/api/v1/public/randomproducts/product/random](https://api.freeapi.app/api/v1/public/randomproducts/product/random)

Because this endpoint returns a single random product, the application uses Promise.all() to fire 12 concurrent requests to populate the initial grid. Clicking "Load New Catalog" triggers a fresh batch of requests to refresh the storefront.

### Project Strucutre 
```
Product_Listing/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── App.css             # Glassmorphism styling, animations, and responsive breakpoints
│   ├── App.jsx             # Core application logic, API fetching, and UI mapping
│   └── main.jsx            # React root injection
├── index.html              # Main HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite bundler configuration
```