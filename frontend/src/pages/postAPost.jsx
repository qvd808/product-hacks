import React, { useState } from 'react';

function PostAPost() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform any necessary actions with the selected file here
        console.log(selectedFile);
    };

    const [caption, setCaption] = useState('');
    const [location, setLocation] = useState('');

    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div className='flex flex-col'>
            <h1>Upload a File</h1>
            <form className="" onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <input type="text" placeholder="Caption" value={caption} onChange={handleCaptionChange} />
                <input type="text" placeholder="Location" value={location} onChange={handleLocationChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default PostAPost;