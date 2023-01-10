import album_model from "./album.model.mjs"
import artist_model from "../artist/artist.model.mjs"
import songs_model from "../song/song.model.mjs"

export const create_album = async (data, artistID) =>{
    const album = await album_model.create(data);
    let artist = await  artist_model.findById(artistID);
    artist.album.push(album);
    await artist.save;
    return album;
}

export const read_all = async () =>{
    const albums = await album_model.find()
    return albums;
}

export const read_byID = async (album_id) =>{
    const album = await album_model.findById(album_id);
    return album;
}

export const update_byID = async (data, album_id) =>{
    const album = await album_model.findByIdAndRemove(album_id, data);
    let artist = await  artist_model.findById(artistID);
    artist.album.push(album);
    await artist.save;
    return album;
}

export const delete_byID = async (album_id) =>{
    const album = await album_model.findByIdAndDelete(album_id);
    return album;
}