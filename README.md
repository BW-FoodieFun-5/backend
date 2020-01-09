# backend

Deployed to Heroku at:
https://foodie-fun-chards.herokuapp.com

Authorization endpoints:

To register: https://foodie-fun-chards.herokuapp.com/api/auth/register

To login: https://foodie-fun-chards.herokuapp.com/api/auth/login

Endpoint to retrieve a list of all users:
https://foodie-fun-chards.herokuapp.com/api/users

Restaurant Endpoints:

To add a new restaurant (POST): https://foodie-fun-chards.herokuapp.com/api/restaurants

To edit a restaurant (PUT): https://foodie-fun-chards.herokuapp.com/api/restaurants/:id

To delete a restaurant (DEL): https://foodie-fun-chards.herokuapp.com/api/restaurants/:id

To retrieve a list of all restaurants (GET): https://foodie-fun-chards.herokuapp.com/api/restaurants

-When adding a new restaurant the name field must be unique. All input fields are required, but need only contain a string.

Menu Item Endpoints:

To add a new menu item (POST): https://foodie-fun-chards.herokuapp.com/api/menu

To edit a menu item (PUT): https://foodie-fun-chards.herokuapp.com/api/menu/:id

To delete a menu item (DEL): https://foodie-fun-chards.herokuapp.com/api/menu/:id

To retrieve a list of all menu items (GET): https://foodie-fun-chards.herokuapp.com/api/menu

-"restaurants_id" field must contain the id of the restaurant that you want to attach the menu item to. An error will occur if there is no restaurant with that particular id. No fields for the menu items are unique, but all are required to contain a string.