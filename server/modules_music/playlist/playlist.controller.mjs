import express from "express"
import raw from "../../middleware/route.async.wrapper.mjs"
import * as playlist_service from "./playlist.service.mjs"

const router = express.Router()
router.use(express.json())


 // CREATE new playlist
 router.post("/", raw( async (req, res) => {
    const playlist = await playlist_service.create_playlist(req.body,req.body.song);
    res.status(200).json(playlist);
}) );

 // READ ALL
 router.get("/", raw( async (req, res) => {
    const playlists = await playlist_service.read_all();
    res.status(200).json(playlists);
}) );

// READ playlist by id
router.get("/:id", raw( async (req, res) => {
    const playlist = await playlist_service.read_byID(req.params.id);
    res.status(200).json(playlist);
}) );

// UPDATE playlist by id
router.get("/:id", raw( async (req, res) => {
    const playlist = await playlist_service.update_byID(req.body, req.params.id,req.body.song);
    res.status(200).json(playlist);
}) );


// DELETE playlist by id
router.get("/:id", raw( async (req, res) => {
    const playlist = await playlist_service.delete_byID(req.params.id, req.body.song);
    res.status(200).json(playlist);
}) );




export default router;

