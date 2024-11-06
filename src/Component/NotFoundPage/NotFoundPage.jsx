
import React from 'react';
import { Link } from 'react-router-dom';


function NotFoundPage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/"><p className='w-[400px] mx-auto text-3xl rounded-xl bg-[#cb8bff] hover:bg-[#eed8ff]'>Go back to the homepage</p></Link>
        </div>
    );
}


export default NotFoundPage;