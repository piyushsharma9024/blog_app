import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const [blogs, setBlogs] = useState([]);
    const category = props.match.params.id
    useEffect(() => {
        setBlogs(category)
        axios.post(`http://localhost:8000/api/blog/category`,{category} , {
            "headers":{
                "Content-Type": "application/json",
            },
        })
            .then(res => {
                setBlogs(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
        },[category] );

    return (
        <div className="container mt-3">
            <h3 className='display-4'>{blogs} Category</h3>
        </div>
    );
};

export default Category;