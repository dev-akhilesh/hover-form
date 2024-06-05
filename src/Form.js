import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [hoverMessage, setHoverMessage] = useState('Hover over the form to see the message.');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleMouseEnter = () => {
        setHoverMessage('You are inside the form!');
    };

    const handleMouseLeave = () => {
        setHoverMessage('You are outside the form.');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Name: ${formData.name}, Email: ${formData.email}`);
        console.log(`Name: ${formData.name}, Email: ${formData.email}`);

    };

    return (
        <div>
            <form
                className="form-container"
                onSubmit={handleSubmit}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>{hoverMessage}</p>
        </div>
    );
}

export default Form;
