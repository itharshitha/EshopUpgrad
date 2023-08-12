# upGrad-Eshop-Application
Final project containing Backend Starter Code and Frontend Assignment using ReactJS

## Users for evaluation/testing
- Admin User :
```bash
  Username: admin@gmail.com
  Password: Qwerty@123
```
- Regular User : Create user via normal flow

## Backend Code Updation
Although in Evaluation Rubrics, it is instructed not to change it, but Backend code was missing following things:
- Attributes that were required to run the Frontend like UserId, UserName and Roles were not returned in response while signing in via API "/api/auth/signin"
- Attributes like DateCreated and LastUpdated were not being saved in DB which were required to run the sorting of products when Newest is selected in dropdown.
- There was no way to create admin user at the start of the server, so for the sake of completeness, i have created admin user after all roles have been created.

To accomodate above changes, during live class "Assignment Walkthrough - React JS Project", our instructor asked us to make necessary changes in backend code with ourselves, and then proceed with the assignment.

## Folder Locations
- Backend Starter Code is located in [Backend_Starter_Code](https://github.com/meetsandesh/upGrad-Eshop-Application/tree/main/Backend_Starter_Code) folder
- Assignment Solution is located in [Assignment_Solution_Frontend_Code](https://github.com/meetsandesh/upGrad-Eshop-Application/tree/main/Assignment_Solution_Frontend_Code/ecommerce-upgrad-frontend) folder