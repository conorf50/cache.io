## Cache.io
##### Name: Conor Farrell, Student ID: 20071238

#### A simple geocaching application written using the MEAN stack.
##### What is Geocaching?
Geocaching is a game that is played using GPS. The objective is to find 'hidden' items (geocaches) with public GPS co-ordinates
See the following pages for more info: 
https://www.geocaching.com and 
https://en.wikipedia.org/wiki/Geocaching

##### App overview
The app is distributed in the form of a Webstorm project. To start the project, import it into your IDE 
of choice and run it.
~ NOTE: Please ensure that MongoDB is running before you launch the project
 
##### Routes

##### GET /caches
Gets all geocaches
##### GET /caches/:id
Gets one geocache with the specified ID
##### POST /caches
Adds a new cache (ID is automatically generated)
##### DELETE /caches/:id
Deletes a cache woth the specified ID
##### DELETE /caches
Deletes all caches, also terminates the Mongo DB connection - requires app restart

#### Persistence 
The application uses MongoDB for persistence. For ease of handling the mongo database, Mongooose is used
#### Version control
This project is using Git, the repo is here: https://github.com/conorf50/cache.io
#### DX approach
The app is designed to be modular and easily expanded.
#### References
https://stackoverflow.com/questions/28139638/how-can-you-remove-all-documents-from-a-collection-with-mongoose.

