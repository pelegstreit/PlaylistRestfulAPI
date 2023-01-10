import express from 'express'
import morgan from 'morgan'
import log from '@ajar/marker'
import cors from 'cors'

import {connect_db} from './db/mongoose.connection.mjs'
import {error_handler,not_found} from './middleware/errors.handler.mjs'

import artist_controller from './modules_music/artist/artist.controller.mjs'
import playlist_controller from './modules_music/playlist/playlist.controller.mjs'
import songs_controller from './modules_music/song/song.controller.mjs'
import album_controller from './modules_music/album/album.controller.mjs'

const { PORT,HOST, DB_URI } = process.env;

const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'))

// routing
app.use('/spotify/artist', artist_controller);
app.use('/spotify/playlist', playlist_controller);
app.use('/spotify/songs', songs_controller);
app.use('/spotify/album', album_controller);


// central error handling
app.use(error_handler);
app.use('*', not_found);

//start the express api server
(async ()=> {
  await connect_db(DB_URI);  
  await app.listen(PORT,HOST);
  log.magenta(`spotify is live on`,` ✨ ⚡  http://${HOST}:${PORT} ✨ ⚡`);  
})().catch(log.error)