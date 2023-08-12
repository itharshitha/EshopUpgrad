# upGrad-Eshop-Application
Final project containing Backend Starter Code and Frontend Assignment using ReactJS
## Folder Locations
- Backend Starter Code is located in [Backend_Starter_Code](https://github.com/meetsandesh/upGrad-Eshop-Application/tree/main/Backend_Starter_Code) folder


## Backend Code Updation
Backend code was missing following things:
- Attributes that were required to run the Frontend like UserId, UserName and Roles were not returned in response while signing in via API "/api/auth/signin"
- Attributes like DateCreated and LastUpdated were not being saved in DB which were required to run the sorting of products when Newest is selected in dropdown.

To accomodate above changes, during live class "Assignment Walkthrough - React JS Project", our instructor asked us to make necessary changes in backend code with ourselves, and then proceed with the assignment.