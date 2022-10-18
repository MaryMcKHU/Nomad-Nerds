## August 4, 2022
* Today, we worked together as a team to make styling choices and apply those choices for the main page, loading spinner, managing edge cases, etc. The aesthetics of our site improved significantly today! In the evening, I worked on styling the business cards by removing extra words and adding stars for rating number because I realized less words on a card looks much better.


## August 3, 2022
* Today, we worked mostly on styling the site as a team and writing unit tests. We ran into a 429 error (too many fetch requests per second -- limited by Yelp), which we haven't actually addressed yet. We also ran into some type errors and key errors, which required us to revamp our businesses.py page to a lot of .get() vs [] for accessing values in a dictionary.


## August 2, 2022
* Today, we worked as a group to get our favorites page to categorize businesses by location, which required some thinking about mapping through complex objects and arrays once again. We're still having issues with CORS policy errors on the favorites page. Typically, the favorites page works fine after we change the headers for a few calls and then it throws CORS errors for seemingly no reason, so we still need to figure that out. After that, we worked on styling the main page by choosing different, larger images for the carousel, which we still need to work on tomorrow. We figured out how to get the text in the exact location that we want it and determined how to move the search bars onto the images in the carousel. All of that pretty much took up the entire day. In the evening, I tried to figure out how to toggle between an empty heart and full heart for when the "add to favorites" heart button gets clicked by a user, but ultimately wasn't able to figure it out and am concerned about the number of fetches we do to our Yelp API. I also did a little styling of the cards displayed on the category list page.


## August 1, 2022
* Today, we worked as a group on getting the "add to favorites" button to function. We were having difficulty with figuring out the correct data structure to use and then also realized that we needed JSON.stringify in order for the information to be readable on the back-end. We then worked on the delete button functionality for the Favorites page, which required us modifying the url to include a string of the business id, as well as passing business_id into our user_favorites function. Next, we tried working on listing the user's favorited businesses by location (city and state). During this time, we started noticing that no favorited businesses were loading on the page and realized that we had maxed out the allowed fetches from the Yelp API.


## July 28, 2022
* Today, we worked on the favorites back-end to ensure that it was set up correctly. We tested whether it was functioning with our localhost admin as well as localhost:8001/user/favorites, which created a list of business id's. We struggled with CORS errors on the front end, getting a 403 Forbidden Error stating “Cookie \“jwt_access_token\” cannot be empty.” I realized in the evening that we needed to add "credentials": "include" to our header and that fixed the issue. In the evening, I created the Favorites page, which currently just consists of the user's favorited businesses in card format with business details. The next step will be to add a delete button to each card so the user can delete favorites that they change their mind about. We also still need to get the "add to favorites" button functioning on the category list page.


## July 27, 2022
* Today, we worked as a group to get the category list page completed with most of the effort going towards figuring out how to get the category titles with capitalization and spaces to show in addition to how to get each category and its businesses within a container with a horizontal scrollbar. These efforts took up much of the project time and we worked together to accomplish them. We then moved on to trying to figure out our user's favorites page with not much success.


## July 26, 2022
* Today, the group worked together on trying to complete the category list page. We decided that both search result pages should have the same format. We struggled to get the businesses listed for category list, as it requires one map function nested inside another map function but is also an object with a key of categories and values of another object with the key being "businesses" and the value being an array of business objects. It felt like a lot to wrap our minds around at the time, but Emma was able to get the nested map function to work soon after class was over today.


## July 25, 2022
* Today, I missed out on the group project time due to a family emergency.


## July 22, 2022
* Today, we had very limited time to work on the project because of mandatory fun. Emma and I worked on getting the category list functions to work. We got some help from Zynh to apply 2 use effects within the same component, but this seems to be causing errors because of both categories and businesses loading asynchronously.


## July 21, 2022
* Today, before lunch we had very limited time so we decided on a logo. After lunch, the team worked together on adding fastapi functions (get_business_list and get_business_info) and determining what each function that was previously written was doing. We then tried to determine how we would map through filtered categories and list relevant businesses, but are still struggling with figuring out how to do this. Later this evening, I worked on created business cards by just mapping through unfiltered business data provided by searching for a specific city, state just to get an idea of what that would look like. I decided to add more information than our group initially decided on because sometimes having more information about a business (like address and price range) can be nice. We'll have to re-address the listing of top categories and businesses based on those categories in the upcoming days.


## July 20, 2022
* This morning, I worked on getting the navbar to show only relevant links based on whether a user is logged in or not. I spent the rest of the morning and early afternoon initially trying to figure out how our user favorites page would work but realized I cannot do that until after we've created the activity categories and locations pages. When I realized this, I started to pair-program with Emma to work on functionality of the "city" search and list pages.


## July 19, 2022
* Our whole team worked together today on getting the user authorization to function. We went step-by-step through the cookbook and even then, spent the entire day debugging. We finally got the login and logout functionality to work and our sign up page is partially working (not getting errors at least). We realized a few things along the way. One main realization was that when using djwto, the login and logout pages are somewhat predefined, so it isn't necessary to create specific URL paths within the user app for login and logout. We also realized that we weren't consistent with what we were using as "User" model, which led to errors with user sign up. Hopefully now that we have authentication mostly debugged, we can solely focus on the functionality and appearance of the application.


## July 18, 2022
* This morning, I was at a doctor's appointment throughout our entire project time, so I unfortunately did not get to contribute to any work. 
* In the afternoon, I implemented a carousel of multiple images for our main page and styled it so the images fade and are sized accordingly. I also went back to the back-end user functionality and believe the login form is now functioning after rebuilding the docker containers and making migrations. Our sign up form is not currently functioning, however, so I'm trying to debug that.


## July 15, 2022
* We spent a significant portion of today trying to get the user authentication functionality working, with initially using "session" and then switching to "jwt" and we still haven't gotten it to fully work, which has been frustrating. We created the signup and login forms using the both "session" and then "jwt," which we can hopefully get to work on Monday. I added a footer and then played around with some formatting of the main page and forms to improve the appearance of the site, but it still needs a lot of work. We discussed using a carousel of 3 location photos as a wrapper/background image for the main page.


## July 14, 2022
* Our group decided to change from MongoDB to PostgreSQL for databases in order to have a more seamless transition from Django to React. This involved changing a significant amount of code in our docker-compose.yaml file and we then rebuilt. Prior to that, Emma, Caleb, and I were stuck on getting the user model to function with Emma sharing her screen. We ended up having to revert back to a previous git commit in order to reverse changes that were made. In the afternoon, we worked on once again trying to get the User info to function properly. I realized after class that we may have an issue with our user/favorites url path since the favorites are directly dependent on specific users and that a user is already logged in, so we'll have to address that tomorrow.


## July 13, 2022
* Our group worked together in the morning on finding an API to autocomplete when
we type in our main page's search bar - with Arthur sharing his screen
* In the afternoon, I worked on creating some front-end files (App.js, Nav.js, MainPage.js, and SignupForm.js). I ran into a little hiccup when I installed react-router to the root directory and realized (with the SEIR's help) that node_modules needed to be in ghi directory but also that our group needed to add node_modules to our .gitignore file in order to avoid pushing mass amounts of information to git after any changes are made to node_modules. After that, I was having trouble pulling information from our users' favorites, which resulted in a 500 error and I still need to figure that out. I ended the day by creating a basic sign-up form for us to work off of in the upcoming days.


## July 12, 2022 
* Our group worked together with Arthur screen sharing
* We realized that we didn't actually need any models besides Favorite and User and decided that we most likely won't need the Business microservice since we can pull all business, location, and category data from the Yelp API instead
* We worked on creating FastAPI routes and testing them out using the Yelp API
* We still need to figure out how to sort the data that we get back regarding categories and count since we're currently returning an unsorted list and we're hoping to rank the categories by count