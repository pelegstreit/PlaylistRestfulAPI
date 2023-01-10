import song_model from "./song.model.mjs"
import artist_model from "../artist/artist.model.mjs"
import playlist_model from "../playlist/playlist.model.mjs"

 // CREATE new song
export const create_song = async (payload, artistID) =>{
    const song = await song_model.create(payload);
    let artist = await artist_model.findById(artistID);
    artist.song.push(song);
    await artist.save;
    return song;
}

 // READ ALL
export const read_all = async () =>{
    const songs = await song_model.find()
    return songs;
}

// READ song by id
export const read_byID = async (song_id) =>{
    const song = await song_model.findById(song_id);
    return song;
}
// UPDATE song by id
export const update_byID = async (payload, song_id, artistID,playlists) =>{
    const song = await song_model.findByIdAndUpdate(song_id, payload);
    let artist = await artist_model.findById(artistID);
    const filtered_songs_by_artist = artist.songs.filter((s)=> s._id !== song._id);
    filtered_songs_by_artist.push(song)
    artist.songs =  filtered_songs_by_artist;
    await artist.save;
    for (let playlistID of playlists){
        let playlist= await playlist_model.findById(playlistID);
        const filtered_songs_of_playlist = playlist.song.filter((s)=> s._id !== song._id);
        filtered_songs_of_playlist.push = song;
        playlist.song = filtered_songs_of_playlist;
        await playlist.save;
    }
    return song;
}

// DELETE song by id
export const delete_byID = async (song_id,artistID,playlists) =>{
    const song = await song_model.findByIdAndRemove(song_id);
    let artist = await artist_model.findById(artistID);
    const filtered_songs_by_artist = artist.songs.filter((s)=> s._id !== song._id);
    artist.songs =  filtered_songs_by_artist;
    await artist.save;
    for (let playlistID of playlists){
        let playlist= await playlist_model.findById(playlistID);
        const filtered_songs_of_playlist = playlist.song.filter((s)=> s._id !== song._id);
        playlist.song = filtered_songs_of_playlist;
        await playlist.save;
    }
    return song;
}