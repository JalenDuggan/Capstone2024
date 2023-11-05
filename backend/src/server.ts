import express from "express";
import cors from "cors";
import logger from "morgan";
import winston from "winston";


const app = express();
const port = process.env.PORT || 8080 ; // default port to listen
app.use(logger('dev'));
app.use(express.json());
app.use(cors());

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
    winston.log({
      level: 'info',
      message: 'Hello World!!!'
    });

    winston.info('Hello again distributed logs');
} );

// start the Express server
app.listen( port, () => {
    winston.log({
      level: 'info',
      message: `server started at http://localhost:${ port }`
    });
} );