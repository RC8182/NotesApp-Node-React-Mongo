const {Router}= require('express');
const router= Router();
const {home, newNote, allNotes, deleteNote,}= require('../controllers/functions');

router.get('/', home);
router.post('/api/new-note', newNote);
router.get('/api/all-notes', allNotes)
router.delete('/api/all-notes/delete/:_id', deleteNote)

module.exports=router;