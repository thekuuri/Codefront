
import React from 'react';
import Navbar from '../components/Navbar';
import Newspaper from '../components/Newspaper';

const NewspaperPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="pt-24 lg:pt-32">
                <Newspaper />
            </div>
        </div>
    );
};

export default NewspaperPage;
