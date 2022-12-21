import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    // let content =blog.Descri.content;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={`${blog.image}`} alt={`${blog.Title}`}className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-center">{blog.Title}</h2>
                {/* <p>{Object.values(content)[0]}</p> */}
                <div className="card-actions">
                    <button className="btn btn-primary"><Link to={`/home/${blog._id}`}>Read More</Link></button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;