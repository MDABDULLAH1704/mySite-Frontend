import React, { useState, useEffect } from 'react'
import './HomeSection.css'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos'
import 'aos/dist/aos.css'


const HomeSection = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);


    const [text, setText] = useState("")

    // handleOnChange function
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    // handleUpperCase function
    const handleUpperCase = () => {
        // toast('Converting UpperCase!', {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        setText(text.toUpperCase());
    }

    // handleLowerCase function
    const handleLowerCase = () => {
        // toast('Converting LowerCase!', {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        setText(text.toLowerCase());
    }

    // handleCapitalize function (made this function using Regular Expression)
    const handleCapitalize = () => {
        // toast('Converting Capitalize!', {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        let newText = text.replace(/\b\w/g, (char) => (char.toUpperCase()));
        setText(newText)
    }

    // handleClearText function
    const handleClearText = () => {
        alert("Clearing Text!");
        // toast('Clearing Text!', {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        let text = "";
        setText(text)
    }

    // handleRemoveExtraSpace function
    const handleRemoveExtraSpace = () => {
        // toast('Removing Extra Space!', {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        let newText = text.replace(/\s+/g, " ");
        setText(newText);
    }

    // copyText Function
    const handleCopyText = () => {
        // toast('Copied Text!', {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        navigator.clipboard.writeText(text).then(() => {
            console.log("Copy text")
            setText(text); // Assuming you want to update the state with the original text
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }


    return (
        <>
            {/* <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            /> */}
            {/* Same as */}
            {/* <ToastContainer /> */}


            <div className='container'>
                <h1 className='container-h1' data-aos="fade-down">Text Analysis And Convertor</h1>

                <div className='subContainer'>
                    <h2 className='subContainer-h2' data-aos="fade-right">Enter Your Text Here:</h2>
                    <textarea value={text} onChange={handleOnChange} className='subContainer-textarea' data-aos="fade-right"></textarea>

                    <button onClick={handleUpperCase} className='subContainer-btn' data-aos="fade-left">Convert UpperCase</button>
                    <button onClick={handleLowerCase} className='subContainer-btn' data-aos="fade-left">Convert LowerCase</button>
                    <button onClick={handleCapitalize} className='subContainer-btn' data-aos="fade-left">Convert Capitalize</button>
                    <button onClick={handleClearText} className='subContainer-btn clearText' data-aos="fade-left">Clear Text</button>
                    <button onClick={handleCopyText} className='subContainer-btn copyText' data-aos="fade-left">Copy Text</button>
                    <button onClick={handleRemoveExtraSpace} className='subContainer-btn' data-aos="fade-left">Remove Extra Space</button>
                </div>
            </div>
        </>
    )
}

export default HomeSection
