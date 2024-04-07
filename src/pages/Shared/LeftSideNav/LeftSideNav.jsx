import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="p-2">
            <h2 className="text-2xl font-bold">All Category</h2>

            <div className="mt-4 text-center text-gray font-bold text-2xl mb-6 bg-blue-950 py-2">
                National News
            </div>
            <div className="px-4 space-y-6">
                {categories.map(category => (
                    <NavLink className="block" key={category.id} to={`/category/${category.id}`}> {category.name}  
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default LeftSideNav;
