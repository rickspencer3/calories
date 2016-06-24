Demonstration code for Bitnami Express Development Container. 

```$ git clone https://github.com/rickspencer3/calories
$ docker-compose up```
the app should be running soon on port 3000

```//load test data into the database
$ docker exec calories_calorieapp_1 node config/mongodb.js
//try the api
http://<ipaddress>:3000/api/foods
http://<ipaddress>:3000/api/foods?search=fish
http://<ipaddress>:3000/api/foods/0```

