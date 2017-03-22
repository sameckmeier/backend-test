# README

## Environment
This app is split into a client and server. The server is a Rails v4.2.7 API, while the
client is a React v15.4.2 app that generated with Facebook's create-app generator (https://github.com/facebookincubator/create-react-app).

Make sure you have a recent version of Postgres installed and your DB names reflect those in
server/config/database.yml. Also, ensure that you have a recent version of Node installed.

To start things up, you'll need to cd into both the client and server roots and execute npm install and bundle install, respectively.

Next, cd into the server root and run rake db:migrate db:seed.    

You'll have to open up a separate terminals to boot up postgres, the server, and client. Optionally, you can run the client and server together in a single terminal by cding into the server root and running foreman start.

If anything breaks for you with this set up, please let me know, and I'd be happy to debug!

Additionally, because of time constraints, I was not able to setup my ideal environment. I typically use linters, have comments, and thorough testing (unit and integration). If you'd like to have a look at another repo that reflects all of this, please refer to https://github.com/sameckmeier/hackerati.

Happy Coding! 
