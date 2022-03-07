# Movie app LeoVegas

# About the app:

1. It has a simple search bar, where a user can search based on their preferences. It will match the title if it is exact the same or by words approximately.
2. Implemented a memoize functionality where we will not make double or many requests if the input is the same. Improves perdormance by not making unecessary requests to the API.
   1. Also added 0.5 seconds delay when searching the movie, to make the request perform better in our app.
3. Added a Favourite and watch later funcionnality where if the user clicks in any of them, then the movie will be added to the corresponding list. It has 3 routes:

   1. "/" => main home page
   2. "/favourites" => where the favourites gets added
   3. "/watch-later" => where the watch later saved movies gets added.
      This is done with react router library.

4. The lists are saved in localStorage since i didnt have a dedicated API for that. ( there are some code about this sadly that could be prevented if API was valid). In the doc there was some but was not free to use :(
5. Added tests. ( Could have added more if necessary )
6. Added a scroll to top functionality.
7. Mobile friendly.
8. Added a reset filter button to reset the searched movies list that is rendered in screen.
9. Added a small popup when we add the movie to watch later list.Popup is

# NOTES:

I didnt know what to do with the movies added in the favourite list and watch later, since it was not specified in the PDF.
Added few extra staff that are mentioned above instead.
I tried to make the app as simple as possible.
