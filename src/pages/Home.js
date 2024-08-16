import React, { useState } from 'react';

function SignInForm({ email, setEmail, password, setPassword }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign In:', { email, password });
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
    );
}

function HomeAndAdminDashboard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='grd'>
        <div className="container-fluid">
            {/* Home Section */}
            <div className='rao'>
            <div className="home-section">
                <h1>Welcome to the Digital Library</h1>
                <p>Explore our collection of books and enhance your reading experience.</p>
            </div>

            {/* Admin Dashboard Section */}
            <div className="admin-dashboard-section">
                <h2>Dashboard</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="dashboard-card">
                            <h3>Admin Dashboard</h3>
                            <img
                                src="https://www.prathaminstitute.org/wp-content/uploads/2023/11/Lecturer-student-relationship.jpg"
                                alt="Admin Dashboard"
                                className="dashboard-image"
                            />
                            <h2>Welcome, Admin!!</h2>
                            <p>Here you can manage books, view community feedback, and more.</p>
                            <SignInForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="dashboard-card">
                            <h3>Student Dashboard</h3>
                            <img
                                src="https://img.freepik.com/premium-photo/embracing-diversity-african-student-leads-collaborative-learning-session-with-multiethnic-classmat_983420-272927.jpg"
                                alt="Student Dashboard"
                                className="dashboard-image"
                            />
                            <h2>Welcome, Students!!</h2>
                            <p>Here you can view your recommended books, recent activities, and more.</p>
                            <SignInForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default HomeAndAdminDashboard;
