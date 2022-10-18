## August 3, 2022
Today we worked on:
* Creating unit test.  I tried to create an unit test for Django backend.  First, I tried to create an unit test for JWT token authenticated view but was unsuccessful.  Then I was able to create an unit test for the sign up page.  We also worked on changing Favorite button on CategoryList.  I learned that I can have two onClick function for the button based on boolean condition.  Mary shared the screen to fix the CORS error.  We found out that what we believed to be CORS error was actually the Type Error that originated from businesses.py.   

## August 2, 2022
Today we worked on:
* The favorite page to list favorite businesses for user based on the each city.  At first, we were not sure how to do it, but Arthur had an idea to create a function to sort businesses with empty object.  We were able to create an object that has cities as keys and list of businesses as values.  Then we mapped the object in the return to list the favorites per each city.  In the evening, I tried to come up with better Bootstrap design for the cards.  I aligned the text in the card and the container and moved the position of favorite heart button to the right.  We still need improvement in CSS and Bootstrap to have more user friendly website.     

## August 1, 2022
Today we worked on:
* Adding heart button to function "add to favorites."  After a few hiccups, we found out that body should be JSON.stringify(content) when we are fetching to get the favorites.  After add to favorite function worked, we also worked on delete favorite.  It was easier than add to favorite function, but it took awhile to figure out to setFavorites to remove the deleted favorite item.  We were able to setFavorites using filter to not show the deleted item.    

## July 28, 2022
Today we worked on:
* Favorite page.  We rebuilt the backend, so that favorite page is specific to the logged in user.  We used jwt.io to decode the token to visualize how the payload data looked like.  We still need to work on the favorite button to add and remove the business from the favorite page. 
  
## July 27, 2022
Today we worked on:
* Category list page.  We had the difficult time with displaying the card for each category with the horizontal scroll.  It was first making the whole page to scroll horizontally.  At the end, we figured out how to add horizontal scroll bar for each category. 
  
## July 26, 2022
Today we worked on:
* Mapping the list of categories on the category list.  We had hard time with mapping the object in JSX.  When we set the state for 'businesses,' each category was the key and the list of businesses was the value of the object.  After a long time of trial and error, I was able map the list of businesses under each category.  I learned that importance of manipulating the data structure for developer to display the data as planned.  

## July 25, 2022
Today we worked:
* individual project.  I tried to continue from yesterday's fetching multiple data with useEffect.  Although I had the same code as Mary from yesterday, I was getting errors when fetching the data.  I think it was due to async/await, because we were doing fetches with one fetch dependent on the other.  With Zynh's help, we replaced async/await function with regular function.  I learned to do use Promise.all for fetching multiple urls.    

## July 22, 2022
Today we worked on:
* Fetching multiple data with useEffect.  We wanted to fetch to get the category list then use each category to fetch to get the businesses.  After we struggled with writing async/await functions to fetch, we had SEIR's help to write the function using loops.  I learned that state could be set while pushing the new data to the state.  We tried both setArray(...oldArray,newValue) and setArray(oldArray =>[oldArray, newValue]).  Both worked.  

## July 21, 2022
Today we worked on:
* Deciding on a logo in the morning.  We used third party website to design the logo and added the logo to the navbar and title.  After lunch, we worked together to finalize the list of API endpoint needed and added fastapi functions.  We added functions to return list of ranked cities by category given list of categories and cities, list of ranked categories given city, list of ranked businesses given category and list, business detail given business id.  We also set the parameters of category search function to include only 'shopping', 'nightlife', 'hotelstravel', 'arts', 'active'.  

## July 20, 2022
Today we worked on:
* Have city search and category list page to work.  We used useNavigate to load another page when we searched for the city on the Main page.  I was able to get the list of categories after fetching to categories url, but I still can't figure out how to do another fetch to list the businesses.  We also looked into Bootstrap card design to display the businesses. 

## July 19, 2022
Today we worked on:
* Authentication using DJWTO.  We had difficulty with 403 forbidden error.  Later, we found out that we didn't need to create url for login page in the backend, because DJWTO does it for us when we include in the project URL.  We saw that when it authenticated the user, it created a token.  Then we were able to nullify token when user logs out.  

## July 18, 2022
Today I worked on:
* Fetching to fastAPI using useEffect.  I was able to fetch and get data of list and count of categories.  I had difficulty with figuring out URL to fetch using ${process.env.REACT_APP_API_YELP}.  It worked after rebuilding the docker. 


## July 15, 2022
Today we worked on:
* Frontend portion of sign up, login, and logout. We successfully made login page that creates a session when user logs in.  But we were not sure of how to create sign up that uses a session (cookie).  We decided to use JWT for authentication and rebuilt the frontend portion. 

## July 14, 2022
Today we worked on:
* Setting up signup in the backend.  We tried to set up a custom user model using AbstractUser in Django.  However, we had a hard time making migrations.  We reverted back to the Django generic user model after realizing that it has all the functionalities that we need.  We created a signup.html template that can be accessed on localhost:8001 (Django port).  Mary created signup.js using React yesterday.  I'm still searching for ways to integrate Django and React authentication while keeping it secure.
* We decided to go with postgres for databases after talking with SEIR who advised that postgres integrates well with Django.  She showed me how to access pgadmin, so that I can see schema and tables of the models.      

## July 13, 2022
Today we worked on:
* Having autocomplete to work in the search bar to show list of cities while Arthur was sharing his screen.  
* I spent the afternoon researching on how to work with Django, React, and JWT for the authentication.  Although I haven't accomplished much on authentication, I learned that session and token can be used for authentication.  When client sends Http post to login with credential, server validates credentials.  If correct, it sends the http response with session cookie.  Then client authenticates HTTP request with session cookie to server, then server validates session ID from the cookie against session in memory.  Then HTTP response with 200 status is sent to client from server.  

## July 12, 2022
Today we worked on: 
* Creating acls.py and businesses.py to have fastapi endpoints and routes.  We tested them out on localhost:8000/#docs to ensure that we were getting 200 responses.  We still need to go through the backend to make sure we have all we need for the user and favorites.  We decided to remove the businesses microservice since we will be using fastapi for Yelp.  



