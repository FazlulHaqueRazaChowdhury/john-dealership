import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="m-100">
                <div className="text-center">
                    <h1>Welcome to <span className='color-prime '>Blogs</span></h1>
                </div>
                <div className="questions">
                    <h4>1.Difference between Javascript and Node js</h4>
                    <p className='text-justify'>The main difference between these two things are one is is programming language and one is a runtime. So Javascript is the programming language and Node js is a javascript runtime that enable to run javascript on server.Basically Javascript doesn't run on server. But with the Help of Node Js we can run Javascript on Server also. Javascript is used on client side but node js used on server side. There is also a difference. That javascript can run on any engine including V8 engine. But Node js will only run on V8 engine.</p>
                </div>
                <div className="questions">
                    <h4>2.When you should use Node js and when you should use MongoDB?</h4>
                    <p className='text-justify'>MongoDB and Node JS are different things.
                        One is a runtime environment and one is a database. We use database to store the data for a website. Then we use node js to access the database and create server, display those data  using api. So the summary is , MongoDB is used for to store the data and Node JS is to access the data on request and show it. </p>
                </div>
                <div className="questions">
                    <h4>3.Differences between SQL and NoSQL databases.</h4>
                    <p className='text-justify'>

                        One of the main difference betweeen SQL and NoSql is sql is relational database system and nosql is non-relational database system.
                        NoSql have dynamic schema on other hand sql have fixed schema.
                        SQL is used for comples queries and NoSql is suited for complex queries.
                        SQL is vertically scalable. But NoSql is horizontally scalable.

                    </p>
                </div>
                <div className="questions">
                    <h4>4.What is the purpose of Jwt and how does it works?</h4>
                    <p className='text-justify'>

                        JWT is used authorization and security for user data. JWT stands for Json Web Token. Before answering that I have to discuss how jwt works?. So basically jwt create a special token for every user for a limited time. When a user sign in a token is being generated. When ever a user try to see his or her data he or she needs to pass the special token to the server. Then the server verify the user and authorize the user to see it. So with the help of jwt we can secure users data . If we didn't use that then if someone got the api link then anyone can see user data and it will be a risk for the user privacy. And this is also use for authorization.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;