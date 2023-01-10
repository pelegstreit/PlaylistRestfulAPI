import artist_model from "./artist.model.mjs"
import song_model from "../song/song.model.mjs"

// CREATE new artist
export const create_artist = async (payload) =>{
    const artist = await artist_model.create(payload);
    return artist;
}

 // READ ALL
export const read_all = async () =>{
    const artists = await artist_model.find()
    return artists;
}

// READ artist by id
export const read_byID = async (artist_id) =>{
    const artist = await artist_model.findById(artist_id);
    return artist;
}

// UPDATE artist by id
export const update_byID = async (payload, artist_id, songs) =>{
    const artist = await artist_model.findByIdAndRemove(artist_id, payload);
    for (let songID of songs){
        let song= await song_model.findById(songID);
        song.artist = artist;
        await song.save;
    }
    return artist;
}

// DELETE artist by id
export const delete_byID = async (artist_id, songs) =>{
    const artist = await artist_model.findByIdAndDelete(artist_id);
    for (let songID of songs){
        let song= await song_model.findById(songID);
        song.artist = 'UNKNOWN';
        await song.save;
    }

    return artist;
}