## August 4th, 2022

* Today I spent a fair bit of time finding new pictures to add to the carousel that had a height of 1000 and a very long width of ~3000. I spent most of my remaining time working on creating my unit test. I decided to make a unit test for one of our FastAPI calls. This was tricky because in this call, we call another function which made a call to a third party API. This was an issue because I can not pass through the API key when making a test, so I wasn't quite sure what to do. After some googling, I learned about mocks and stubs and fakes and spies, all of which are different ways to allow tests to run without requiring other features of the app. I used a mock, which basically says, when this inner function is called, just return this result, don't actually call that function. Now my test is working. 

## August 3rd, 2022

* Today I have been working on some edge case errors with the city list page. There are two extra utilities I wanted to add. First, I decided to add a notice that appears from when the page has loaded but the data is still being retrieved, so instead of showing nothing, a loading message appears. Second, there are some combinations of categories and cities which end up showing no data. Either the cities the user selected do not have any data on yelp, and therefore give no info, or the selected cities have no businesses that match the given category. In either of these cases, I have the page show a message alerting the user that their search has no matches. Additionally, today while testing, our group was eating API calls. In order to fix this, we decided to each create our own yelp account so we can have 4 api keys, so when we are troubleshooting, we can use our own api keys and are much more likely to not run out.

## August 2nd, 2022

* Today we mostly worked on visual aspects on the front end. We decided to make the carousel, which was just the top portion of the page, to stretch down and cover most of the page. This also requires us to move our search bars up into the carousel, which requires giving them a negative margin. Additionally, the category search has two search bars, so we decided to have the search bars next to each other. Currently the bars are slightly overlapping, which is something I plan to fix tomorrow. We also gave a background to the list of selected cities, and making is slightly opaque. Additionally, we wanted to make the carousel not compress or stretch the images, so we are now using large images and hiding the images overflow, this way the image doesn't get morphed. 


## August 1st, 2022

* Today we worked on the add and delete buttons for the favorites. The add button is on the city list and category list pages, and we need to create an instance of a favorite when pressed, storing just the business ID in the backend. The delete favorite button will be shown in the favorites page. The favorites page gets all the instances of favorites for the current user and makes api calls to yelp's api using the business IDs, and then listed the business info. On each business card is a delete button that removes that instance of favorite. Towards the end of the day, we were running into tons of cors errors, and couldn't figure out what the issue was. Eventually and went and checked out our Yelp api account and realized that we had run out of api calls for the day. 

## July 28th, 2022

* Today as a group we worked on the favorites section of our back-end. We tested to make sure we could add a favorite in both the back end on the admin site, as well as the front-end on our localhost webpage. Most of our troubleshooting revolved around cors errors, and we tried various combinations of headers to include in our fetch to remove this error. As it turns out, we needed to include credentials to fix the issue. 


## July 27th, 2022

* Today I worked on the cities list page, and implemented a configuration similar to the one we are implementing on the categories list page. Mostly worked on little details and looks.

## July 26th, 2022

* Today as a group we worked on the category list page. We decided that instead of having three layers of pages, we would only have two, so that that category list page and city list page would include a list of lists. Because of this, I will no longer be needing the Flickr api images for city's (rip).

## July 25th, 2022

* Today I was trying to figure out how to use Flickr's API to pull an image for each city in the citylist.js file. The idea would be to pull a picture of buildings of the entered city, and use that as a card for the city. I finally figured out how to properly set up the fetch request to get the information for the picture. Once I have the info for the picture, I can construct the url for the image.

## July 22nd, 2022

* Today I worked on the citylist.js file, which will be a list of ranked cities, ranked by the occurrence of the chosen category. I am able to import the list of ranked cities and the count of buisnesses for each. In order to do this, when calling the function in citylist, I have to pass in the state as an argument and then retrieve it using location. 

## July 21st, 2022

* Today I fixed some issues from yesterday. Now, the list of cities is always below the list of suggested cities from the search bar. I had to add some padding to the search bar to implement this. Additionally, I added a cool feature that makes the list of selected cities a scrollable list. I had to set a max length for the list and set overflow to scrollable.

## July 20th, 2022

* Today I added the list of cities which shows the current list of selected cities. I had to add the list of cities to the state. Additionally, I added a button to remove any individual city from the list, which changes the state of the page. However, the list of cities is in the way of the suggestions from the auto complete, and the list goes on too long if too many cities are added. This is an issue I need to fix.

## July 19th, 2022

* Today the group and I all walked through the authorization feature of the app. After following Curtis's cookbook and hours of troubleshooting with the instructors and seirs, we have finally made some notable progress.

## July 15th, 2022

* Today the group worked on authentication. We had an initial setup, but decided to switch to djwto, but still are having issues. I also have finished the first search bar which searches autocomplete with city names. 

## July 14th, 2022

* Today I worked on creating a search bar which auto completes with suggestions for city locations.

* In order to do this, I first had to find a database which stores city information. I found a free downloadable CSV file of 40k locations. I then converted this file to json and moved it into our GHI folder.

* Now that I have the data, I found a program which implements the auto-complete/suggest functionality for a search bar. This program requires React to be 17.x, whereas wwe are using 18.2.0, so I had to add a line to our run.sh folder to install this program without its peer-dependencies so that no errors are raised.


## July 13th, 2022

* Today I worked on getting the required data from the Yelp API

* The team and I created the functionality for pulling data from the yelp api. I was screen sharing and coding with the rest of the team helping me determine what to do.

* Later in the evening I created the third method required to get the needed information from the yelp API. I still don't know the more efficient way to implement it, because currently each call takes about 30 seconds to load and makes ~200 calls to the API, eating into our 5000 daily limit. 

* Even later in the evening, I built another api-yelp method which, given text, will return a list of category suggestions. This will be implemented in our front-end search bar.




