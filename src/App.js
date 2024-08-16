import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import ReviewPage from './pages/ReviewPage';
import WishlistPage from './pages/WishlistPage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

function App() {
    return (
        <Router>
            <Header />
            <main className="container my-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<BookPage />} />
                    <Route path="/reviews" element={<ReviewPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
