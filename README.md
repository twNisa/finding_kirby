# Finding Kirby
Live: 

#Summary:
This was a project for <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app" target="_blank" rel="noopener noreferrer">The Odin Project's<a> JavaScript BaaS for backend module.
The goal is to create a "Where's Waldo" game that uses Firebase as backend.

I decided to use a Finding Kirby picturebook as base for the project.
Player chooses a level and gets assigned 3 random characters to find. 
Player clicks on the game image for a dropdown menu to appear, select from the dropdown and the game will check if the selection is correct.

Firestore is used as the backend to store game data such as character coordinates on each level, image files, and scores for each level.
Image files used in this project are stored in their native sizes on Firebase storage and retrieved in their native size. Further optimization can be done via Image Processing extension in Firebase to create smaller file size images so thumbnails can use the smaller files. However, because this project is done with Firebase free tier, I can not add extensions to Firebase.

# Technologies
- React
- Javascript
- Firebase
- HTML/CSS
- Styled-components

All copyright as owned by their respective owners, this is only a project for educational purposes.