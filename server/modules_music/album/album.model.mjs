import mongoose from 'mongoose'
import { SongSchema } from '../song/song.model.mjs';

const { Schema, model } = mongoose

export const AlbumSchema = new Schema ({
name:{type: String, required: true},
numberOfSongs: {type: Number, required: true},
song:[ SongSchema ], 
artist:[{type: Schema.Types.ObjectId, ref: 'artist'}],
},{timestamps:true});

export default model ('album', AlbumSchema) 
