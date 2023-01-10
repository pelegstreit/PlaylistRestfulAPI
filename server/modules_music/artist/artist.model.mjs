import mongoose from 'mongoose'
import { SongSchema } from '../song/song.model.mjs';
import {AlbumSchema} from '../album/album.model.mjs'
const { Schema, model } = mongoose

export const ArtistSchema = new Schema({
    fullName  : { type : String, required : true },
    // album   : [ AlbumSchema ],
    album: { type : String },
    genre       : { type : String, required : true },
    songs     : [ SongSchema ],
}, {timestamps:true});
  
export default model('artist',ArtistSchema);