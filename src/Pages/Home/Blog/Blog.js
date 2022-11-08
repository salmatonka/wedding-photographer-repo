import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		
		<div className="space-y-4">
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Question-1: Difference between SQL and NoSQL?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><code>Answer:</code> 

                <code>SQL: </code>
                1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS),
                2.These databases have fixed or static or predefined schema,
                3.These databases are not suited for hierarchical data storage,
                4.These databases are best suited for complex queries
                5.Vertically Scalable,Follows ACID property,
                6.Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc;
                <code>NoSQL: </code>

                1.Non-relational or distributed database system,
                2.They have dynamic schema,
                3.These databases are best suited for hierarchical data storage.
                4.These databases are not so good for complex queries,Horizontally scalable,
                5.Follows CAP(consistency, availability, partition tolerance),
                6.Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc

                 </p>
			</details>
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Question-2: What is JWT, and how does it work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><code>Answer:</code> 
                 JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
			</details>
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Question-3: What is the difference between javascript and NodeJS?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><code>Answer:</code>
                <code>Javascript: </code>
                1.Javascript is a programming language that is used for writing scripts on the website.
                2.Javascript can only be run in the browsers.
                3.It is basically used on the client-side.
                4.Javascript is capable enough to add HTML and play with the DOM.
                5.Some of the javascript frameworks are RamdaJS, TypedJS, etc. 
                
                <code>NodeJS: </code>

                1.NodeJS is a Javascript runtime environment.
                2.We can run Javascript outside the browser with the help of NodeJS.
                3.It is mostly used on the server-side.
                4.Nodejs does not have capability to add HTML tags.
                5.Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. 
               
</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Question-4: How does NodeJS handle multiple requests at the same time?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><code>Answer:</code> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. </p>
			</details>
		</div>
	</div>
</section>
    );
};

export default Blog;