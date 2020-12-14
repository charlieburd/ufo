# Module 11 - UFO Analysis

## Overview of UFO Analysis


#### The UFO Analysis was to create a user friendly data base that users could interactively search for UFO sighting information. Sorting the data in Javascript files and creating/formatting the website's tables and search criteria using HTML.


## UFO Analysis Results
#### For the challenge of this module we added more search criteria, allowing the user to search not only by Date, but also City, State, Country and Shape. 
![stacked_launch_outcomes](https://github.com/charlieburd/ufos/blob/main/resources/search_filters.png)

#### Another additional change we made was getting ride of the button we had perviously create during the Module. Instead we wrote in a line of code the allowed the website to listen to the user and automattically display results after a search criteria was added `d3.selectAll("input").on("change", updateFilters);` I find this feature can be annoying of big site that have many filters and lots of results to display. Like when shopping for a TV, the website refreshes before you can put in all the criteria you want. However because Dana's UFO website is only displaying 7 keys, and all of them text, it is not overwhelmed with information and it improves the usablitity.
![stacked_launch_outcomes](https://github.com/charlieburd/ufos/blob/main/resources/update_filters.png)
#

 

## UFO Analysis Summary

#### A drawback that I can see happening is the user not realizing that their search has already been processed. They may try hitting enter or reloading the website in an attempt to display the results they have search for. Also, if you only fill out some of the search fields the placeholders in the empty fields remain, which could confuse the user for what is actaully being searched for.

#### Two things I would like to add is a Comments search box. I think this could be done quiet easily by writing a line of code that would scroll through the comments and displaying any results that had matching keywords. I would also like to add a feature that would erase the placeholders once any of the fields have begun to have text edited in them. That would get rid of the drawback I had mentioned above.
