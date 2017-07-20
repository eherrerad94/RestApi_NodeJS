# Restful API with Node Js and MongoDB


Ejemplo de una restful api service realizado en mongodb.

## Requerimientos

 - Instalar MongoDB, Node JS y npm
 - Iniciar mongodb 

## Instalar las dependencias y correr el servidor.
 
 ```sh
 $ git clone https://github.com/EduardoHD94/RestApi_NodeJS.git
 $ sudo npm install
 $ sudo npm start
 ```
 
 
 ### Important Note:

But Commiting your username and password to your public repo is sometimes very dangerous so never commit them into public repositories, Instead you can use environment variables to store the url (containing username and password) , to do this in your local system

* For Mac/Linux users, you can simply type:

```sh
$ export MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"
```
* For Windows users:
```sh
$ SET MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food
```
* After setting the Environment variables you need to call the Environment Variable into your code. You can do it by typing this
```javascript
var url = process.env.MONGOLAB_URI;
```
* Now your MongoDb url is inserted into your code safely. You can now commit it and deploy it to your heroku.

* If you need more help how to deploy into Heroku you can refer this Wiki69

Final Steps:
** After Deploying your code to your Heroku App, you need to set the environment variable for the Code in heroku.

*** To do this, you need to run the following command from your heroku remote,
```sh
$ heroku config:set MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food
```
Thats it, Your app is now successfully deployed in heroku with mLab DB
