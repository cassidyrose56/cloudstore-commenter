# Cloudstore Commenting Project

**Commenting system built with React, styled using SASS, and compiled using Webpack**

I was asked to create a commenting system where users can add top-level comments, reply to existing comments, and delete comments along with their children. The MainThread component serves as the main container, managing the overall state of the comments. The CommentItem component represents an individual comment and handles actions like replying and deleting. The InputBox component provides the input functionality for adding new comments or replies.

The commenting system uses a Map data structure to store the comments, with each comment having an id, userId, message, parent, and children properties. The parent property indicates the ID of the parent comment, allowing for the creation of a nested comment structure. The children property is also a Map that stores the IDs of the child comments.

![Demonstration of Project](/assets/CommentDemo.gif)

## Installation

1. Clone the repository: 
```sh
 git clone https://github.com/cassidyrose56/cloudstore-technical.git
   ```
2. Navigate to the project directory: `cd [project directory]`
Replace `[project directory]` with the actual path to the directory where you cloned or downloaded the project. For example:
    - `cd cloudstore-technical`
    - `cd ~/Projects/cloudstore-technical`
    - `cd C:\Users\YourName\Projects\cloudstore-technical`
3. Install dependencies: `pnpm install`
4. Run the website locally: `pnpm dev`

## Contact

- Email: cassidyrose56@gmail.com
- LinkedIn: https://www.linkedin.com/in/cassidy-r-johnson/
