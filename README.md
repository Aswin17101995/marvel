# Super Hero APP using Marvel Developer Api

Using marvel developer api .. created small app to list the heros on search
and we can fav our hero and it will store inside the local storage 
when fav html page is loaded it ftech the fav ids of super hero from local Storage

it has 3 html pages and each html pages will have corresponding JS file and CSS file

index.html
In this page it has search bar using search bar we can search any of our superhero and it will show the list in separate div element
While every keep us it's call an API to fix a data from Marvel developer API and show its the results.
After the result is arrived these data are converted to div element. These elements have add event listener for on click on two types of buttons one is for title and ones for favourite each of this parent element have the ID Stored . 
Using this id we can fetch the data from marvel API. Or we can use this ID to store in a local storage when we click on favourite icon

fav.html
In this file the favourite ideas are stored in the local storage or fetched from the local storage and then API call is made for each and every ID and it displays the corresponding image and name of the superhero

superHero.html
While clicking the title on the index page be passing ID of the superhero to the URL query so that we can fetch the data from and marvel API using that ID . Once we got the data we can process and show the corresponding information of the superhero.
