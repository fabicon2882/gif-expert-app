import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const handleAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <div>GifExpertApp</div>
            <AddCategory onAddCategory={(value) => handleAddCategory(value)} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};

export default GifExpertApp;
