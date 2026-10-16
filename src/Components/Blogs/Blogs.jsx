import React from "react";
import blogCSS from './../Blogs/Blogs.module.css';

function Blog() {
    return (
        <>
            <div className={blogCSS.blog_wrapper} id="blog">
                <h1 className="title">Our Resent Blogs</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, incidunt. Dolor, dolores!</p>

                <div className={blogCSS.cards}>
                    <div className={blogCSS.card}>
                        <div className={blogCSS.title}>
                            Tutorial
                        </div>

                        <div className={blogCSS.content_wrapper}>
                            <div className={blogCSS.content}>
                                <span><i className="ri-calendar-line"></i> oct 1 , 2023</span>
                                <span><i className="ri-message-line"></i> Comments(0)</span>
                            </div>
                        </div>
                    </div>
                    <div className={blogCSS.card}>
                        <div className={blogCSS.title}>
                            Tutorial
                        </div>

                        <div className={blogCSS.content_wrapper}>
                            <div className={blogCSS.content}>
                                <span><i className="ri-calendar-line"></i> fab 1 , 2024</span>
                                <span><i className="ri-message-line"></i> Comments(0)</span>
                            </div>
                        </div>
                    </div>
                    <div className={blogCSS.card}>
                        <div className={blogCSS.title}>
                            Tutorial
                        </div>

                        <div className={blogCSS.content_wrapper}>
                            <div className={blogCSS.content}>
                                <span><i className="ri-calendar-line"></i> March 24 , 2024</span>
                                <span><i className="ri-message-line"></i> Comments(1)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;