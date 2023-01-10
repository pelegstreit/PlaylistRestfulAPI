import express from "express"
import raw from "../../middleware/route.async.wrapper.mjs"
import * as song_service from "./song.service.mjs"

const router = express.Router()
router.use(express.json())


 // CREATE new song
 router.post("/", raw( async (req, res) => {
    const song = await song_service.create_song(req.body, req.body.artist);
    res.status(200).json(song);
}) );

 // READ ALL
 router.get("/", raw( async (req, res) => {
    const songs = await song_service.read_all();
    res.status(200).json(songs);
}) );

// READ song by id
router.get("/:id", raw( async (req, res) => {
    const song = await song_service.read_byID(req.params.id);
    res.status(200).json(song);
}) );

// UPDATE song by id
router.get("/:id", raw( async (req, res) => {
    const song = await song_service.update_byID(req.body, req.params.id, req.body.artist, req.body.playlist);
    res.status(200).json(song);
}) );


// DELETE song by id
router.get("/:id", raw( async (req, res) => {
    const song = await song_service.delete_byID(req.params.id, req.body.artist, req.body.playlist);
    res.status(200).json(song);
}) );




export default router;

