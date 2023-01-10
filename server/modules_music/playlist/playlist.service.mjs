import playlist_model from "./playlist.model.mjs"
import song_model from "../song/song.model.mjs"


 // CREATE new playlist
export const create_playlist = async (data,songs) =>{
    const playlist = await playlist_model.create(data);
    for (let songID of songs){
        let song= await song_model.findById(songID);
        song.playlist.push = playlist;
        await song.save;
    }
    return playlist;
}

 // READ ALL
export const read_all = async () =>{
    const playlists = await playlist_model.find()
    return playlists;
}

// READ playlist by id
export const read_byID = async (playlist_id) =>{
    const playlist = await playlist_model.findById(playlist_id);
    return playlist;
}

// UPDATE playlist by id
export const update_byID = async (data, playlist_id, songs) =>{
    const playlist = await playlist_model.findByIdAndUpdate(playlist_id, data);
    for (let songID of songs){
        let song= await song_model.findById(songID);
        const filtered_playlist_of_songs = song.playlist.filter((p)=> p._id !== playlist._id);
        filtered_playlist_of_songs.playlist.push = playlist;
        song.playlist =  filtered_playlist_of_songs;
        await song.save;
    }
    return playlist;
}

// DELETE playlist by id
export const delete_byID = async (playlist_id, songs) =>{
    const playlist = await playlist_model.findByIdAndRemove(playlist_id);
    for (let songID of songs){
        let song= await song_model.findById(songID);
        const filtered_playlist_of_songs = song.playlist.filter((p)=> p._id !== playlist._id);
        song.playlist =  filtered_playlist_of_songs;
        await song.save;
    }
    return playlist;
}