import React, { useEffect } from 'react'
import HomeSection from '../components/homeSection/HomeSection'

const Home = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('MySite - Home');
    }, []);


    return (
        <div>
            <HomeSection />
        </div>
    )
}

export default Home
