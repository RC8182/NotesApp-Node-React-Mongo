const {Router}= require('express');
const router= Router();
const {home, newNote, allNotes, deleteNote,updateNote}= require('../controllers/functions');

router.get('/', home);
router.post('/api/new-note', newNote);
router.get('/api/all-notes', allNotes);
router.delete('/api/all-notes/delete/:_id', deleteNote);
router.put('/api/update/:_id',updateNote);

module.exports=router;