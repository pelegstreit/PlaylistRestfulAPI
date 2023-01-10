import express from "express"
import raw from "../../middleware/route.async.wrapper.mjs"
import * as artist_service from "./artist.service.mjs"

const router = express.Router()
router.use(express.json())


 // CREATE new artist
 router.post("/", raw( async (req, res) => {
    const artist = await artist_service.create_artist(req.body);
    res.status(200).json(artist);
}) );

 // READ ALL
 router.get("/", raw( async (req, res) => {
    const artists = await artist_service.read_all();
    res.status(200).json(artists);
}) );

// READ artist by id
router.get("/:id", raw( async (req, res) => {
    const artist = await artist_service.read_byID(req.params.id);
    res.status(200).json(artist);
}) );

// UPDATE artist by id
router.get("/:id", raw( async (req, res) => {
    const artist = await artist_service.update_byID(req.body, req.params.id, req.body.songs);
    res.status(200).json(artist);
}) );


// DELETE artist by id
router.get("/:id", raw( async (req, res) => {
    const artist = await artist_service.delete_byID(req.params.id, req.body.songs);
    res.status(200).json(artist);
}) );




export default router;

