const {Router}= require('express');
const router= Router();
const {home, newNote, allNotes, deleteNote,updateNote, findByID}= require('../controllers/functions');

router.get('/', home);
router.get('/api/all-notes/find/:_id', findByID)
router.post('/api/new-note', newNote);
router.get('/api/all-notes', allNotes);
router.delete('/api/all-notes/delete/:_id', deleteNote);
router.put('/api/update/:_id',updateNote);

module.exports=router;