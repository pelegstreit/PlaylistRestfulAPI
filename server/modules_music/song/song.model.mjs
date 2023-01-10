import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const SongSchema = new Schema ({
name:{type: String, required: true},
// album:[{type: Schema.Types.ObjectId, ref: 'album'}],
album: {type: String},
length: {type: String, required: true},
playlist:[{type: Schema.Types.ObjectId, ref: 'platList'}],
artist:{type: Schema.Types.ObjectId, ref: 'artist'},
lyrics: {type: String, required: true},
},{timestamps:true});

export default model ('song', SongSchema) 
