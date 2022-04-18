import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header >Difference between authorization and authentication</Accordion.Header>
                <Accordion.Body>
                    Authentication means to confirm your own identity, while authorization means to grant access to the system. In simple terms, authentication verifies who you are, while authorization verifies what you have access to. 1/Authentication for User identity is confirmed . 2/ Authentication User and user server is verified 3/ Authentication Login details, usernames, passwords, OTPs required . And 1/ Authorization Here, the user is given permission to access the system . 2/ Authorization Here it is validated if the user is allowed to access via some defined rules. 3/ Authorization Checks the security level and privilege of the user, thus determining what the user can or cannot have access to etc
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    Firebase is Google's app development platform. It will help you to build, improve, and grow your application in a smooth and standardized way . The platform works well for mobile and web applications, and it is designed to increase the general productivity of creating digital products. The core features of Firebase include NoSQL databases, real-time queries, scalable hosting, file storage, REST APIs, authentication, and analytics. thats way we are using fairbase and many rejone . Firebase Alternatives have many many best Alternatives 1/ Back4App 2/ Parse 3/AWS Amplify 4/Backendless etc fairbase Alternatives
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                <Accordion.Body>
                    Firebase is Google's mobile application development platform that helps you build, improve, and grow your app . Easily integrate Firebase into your team's favorite tools. Trusted by the largest apps. Firebase helps teams from startups to global enterprises build and  run successful apps. Monitor App Performance. anyway ! I count 17 individual products in the Firebase suite. 1/Auth 2/Cloud Function 3/Cloud FiresStore 4/Cloud Storage 5/Hosting, 6/Real Time DataBase, 7/Analytis etc . fairbase provide almost 16+ serives.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;