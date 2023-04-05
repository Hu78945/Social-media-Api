# Social Media API

It is a simple and small API that works like the most of the social media applications. It has follwoing features.

- Login
- Sign Up
- Create a Post
- Update a Post
- Delete a Post
- Like a Post
- Dislike a Post
- Follow a user
- Unfollow a user

# Tech Stack Used

In creation of this API. I have used the follwoing technologies and languages.

- Express Js
- Mongoose
- JWT (Json Web Token)
- Node Js
- MongoDB

# Starting the Project

You can start the project by the follwoing command.<br>
**npm start**

# Post Routes

    In the Post routes we have a bunch of methods from which we can interact the post model in our database.

**/api/posts/** <br>
**Method: post** <br>
You can create your post.

---

**/api/posts/:id** <br>
**Method: put** <br>
You can update your post.

---

**/api/posts/:id** <br>
**Method: delete** <br>
You can delete your post.

---

**/api/posts/:id/like** <br>
**Method: post** <br>
You can like/Dislike a post.

---

**/api/posts/:id** <br>
**Method: get** <br>
You can get the post with specif id.

---

**/api/posts/timeline/all** <br>
**Method: Post** <br>
Get all of the Post at your Timeline.

---

# User Routes

**/api/user/:id** <br>
**Method: put** <br>
Update the user.

---

**/api/user/:id** <br>
**Method: delete** <br>
Delete the user.

---

**/api/user/:id/follow** <br>
**Method: get** <br>
Follow a user with the specified ID.

---

**/api/user/:id/unfollow** <br>
**Method: put** <br>
Unfollow the user with the specifedd ID.

---

# Authetication

    For Authentication I have used JWT so when the user logs In he is given a JWT Token for 30 Minute and with each request to the sever the JWT Token is renewed if the token is about to expire.
