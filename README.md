# Module 11 - UFO Analysis

## Overview 

#### The UFO Analysis was to create a user-friendly data base that users could interactively search for UFO sighting information. Sorting the data in JavaScript files and creating/formatting the website's tables and search criteria using HTML.


## Results
#### For the challenge of this module we added more search criteria, allowing the user to search not only by Date, but also by City, State, Country, and Shape. 
![stacked_launch_outcomes](https://github.com/charlieburd/ufos/blob/main/resources/search_filters.png)

#### An additional change we made was getting rid of the button we had previously create during the Module. Instead we wrote in a line of code the allowed the website to listen to the user and automatically display results after a search criteria was entered `d3.selectAll("input").on("change", updateFilters);` I find this feature can be annoying on big site that have many lots of information to display, like when shopping for a TV on Walmart, because website refreshes before all the filter criteria have been entered. However, because Dana's UFO website is only displaying 7 columns of text, it improves the usability.
![stacked_launch_outcomes](https://github.com/charlieburd/ufos/blob/main/resources/update_filters.png)
#

 

## Summary

#### A drawback that I can see happening is the user not realizing that their search has already been processed, without a button. They may try hitting enter or reloading the website in an attempt to display the results they are searching for. Also, if you only fill out some of the search fields, the placeholders in the empty fields remain. Which could confuse the user for what is actually being searched for.

#### Something I would like to add is a Comments search box. I think this could be done quite easily by having the code scroll through the comments and displaying any results that had matching keywords. I would also like to add a feature that would erase the placeholders once any of the fields have begun to be filled out. That would get rid of the drawback I had mentioned above.
