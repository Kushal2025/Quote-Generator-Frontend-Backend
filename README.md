# Quote Generator - Frontend & Backend

A full-stack web application that generates random quotes dynamically with author information. Built with modern web technologies for optimal performance and user experience.

## 🌟 Features

- Generate random quotes at the click of a button
- Display author information for each quote
- Fully responsive design for mobile and desktop
- Modular backend using MVC pattern for scalability
- Clean, modern user interface
- Easy deployment to cloud platforms

## 🚀 Tech Stack

**Frontend:**
- React with Vite
- Bootstrap & TailwindCSS for styling

**Backend:**
- Node.js & Express
- MongoDB Atlas (Database)
- MVC Architecture Pattern

**Deployment:**
- Backend: Render
- Frontend: Vercel or Netlify

## 📁 Project Structure

```
Quote-Generator-Frontend-Backend/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection setup
│   ├── controllers/
│   │   └── quoteController.js  # API logic for fetching quotes
│   ├── models/
│   │   └── Quote.js           # Mongoose schema for quotes
│   ├── routes/
│   │   └── quoteRoutes.js     # API routes definition
│   ├── server.js              # Main Express server
│   └── package.json           # Backend dependencies
└── frontend/
    ├── src/
    │   ├── App.jsx            # Main React component
    │   ├── main.jsx           # React application entry point
    │   └── assets/            # Images and static assets
    ├── public/                # Public static files
    ├── .env                   # Environment variables
    └── package.json           # Frontend dependencies
```

## 🛠️ Installation & Setup

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kushal2025/Quote-Generator-Frontend-Backend.git
   ```

2. **Navigate to backend folder**
   ```bash
   cd Quote-Generator-Frontend-Backend/backend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create `.env` file and add:**
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Backend will run at:** `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend folder**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file and add:**
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Frontend will run at:** `http://localhost:5173`

## 🚀 Deployment

### Backend Deployment (Render)

1. Deploy backend to **Render**
2. Set environment variable: `MONGO_URI` → Your MongoDB Atlas connection string
3. Ensure backend is publicly accessible via Render's provided URL

### Frontend Deployment (Vercel)

1. Deploy frontend to **Vercel** or **Netlify**
2. Set environment variable: `VITE_API_URL` → Your deployed backend URL
3. **Build command:** `npm run build`
4. **Publish directory:** `dist`

## 📸 Screenshots

*Coming Soon*
- Home Page: Main UI with generate button and quote display
- Quote Example: Sample quote with author information

## 🔮 Future Enhancements

- [ ] Add quote categories (Motivational, Life, Funny, etc.)
- [ ] Implement search functionality for specific quotes
- [ ] User authentication for saving favorite quotes
- [ ] Dark mode toggle
- [ ] Quote history and pagination
- [ ] Social media sharing integration

## 👨‍💻 Author

**Kushal Dutta**
- GitHub: [@Kushal2025](https://github.com/Kushal2025)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/kushal-dutta-640122280/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Kushal2025/Quote-Generator-Frontend-Backend/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

*Built with ❤️ using React, Node.js, and MongoDB*
