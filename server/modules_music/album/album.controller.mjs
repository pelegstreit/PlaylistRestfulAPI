import express from "express"
import raw from "../../middleware/route.async.wrapper.mjs"
import * as album_service from "./album.service.mjs"

const router = express.Router()
router.use(express.json())


 // CREATE new 
 router.post("/", raw( async (req, res) => {
    const user = await album_service.create_album(req.body);
    res.status(200).json(user);
}) );

 // READ ALL
 router.get("/", raw( async (req, res) => {
    const users = await album_service.read_all();
    res.status(200).json(users);
}) );

// READ album by id
router.get("/:id", raw( async (req, res) => {
    const user = await album_service.read_byID(req.params.id);
    res.status(200).json(users);
}) );

// UPDATE album by id
router.get("/:id", raw( async (req, res) => {
    const user = await album_service.update_byID(req.body, req.params.id);
    res.status(200).json(users);
}) );


// DELETE album by id
router.get("/:id", raw( async (req, res) => {
    const user = await album_service.delete_byID(req.params.id);
    res.status(200).json(users);
}) );




export default router;

