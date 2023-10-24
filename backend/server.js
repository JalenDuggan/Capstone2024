const bcrypt = require('bcrypt');
const cors = require("cors");


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const users = require('./routes/users');
require('dotenv').config();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/api/users', usersRouter(dbHelpers));

const {Configuration, OpenAIApi} = require('openai-edge')
const { OpenAIStream, StreamingTextResponse } = require('ai')

const config = new Configuration({
  apiKey: OPENAI_KEY
})

const openai = new OpenAIApi(config);

// AI request
app.post('/api/chat', async (req, res) => {
  try {
    //1. destucture the res.body
    const { messages } = req.body;

    //2. check if user doesnt exist (if not throw error)
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages
    })

    const stream = OpenAIStream(response);

    // new StreamingTextResponse(stream);


    res.json(new StreamingTextResponse(stream));

  } catch (error) {
    console.error(error);
  }
});

const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});


