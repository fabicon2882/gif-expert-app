import React, { useState } from 'react';

const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setInputValue('');
        onAddCategory(inputValue.trim());
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

export default AddCategory;
