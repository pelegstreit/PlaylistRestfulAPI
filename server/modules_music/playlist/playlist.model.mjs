import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const PlaylistSchema = new Schema ({
name:{type: String, required: true},
numberOfSongs: {type: Number, required: true},
song:[{type: Schema.Types.ObjectId, ref:'song'}], 
},{timestamps:true});

export default model ('playList', PlaylistSchema) 
