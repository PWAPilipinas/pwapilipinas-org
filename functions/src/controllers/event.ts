import * as admin from 'firebase-admin';
import * as stripHtml from 'string-strip-html';
admin.initializeApp();
const db = admin.firestore();

exports.eventController = async (req: any, res: any) => {
    if(req.params.id) {
        const documentRef = await db.collection('events').doc(req.params.id).get();
        if(documentRef.exists) {
            const data = documentRef.data() || {};
            data.id = req.params.id;
            data.descriptionHeader = stripHtml(data.description).result;
            data.month = new Date(data.date.startDate).toLocaleDateString('default', { month: 'long' });
            data.day = new Date(data.date.startDate).toLocaleDateString('default', { day:'numeric' });
            data.startTime = new Date(data.date.startDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            data.endTime = new Date(data.date.endDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            res.render('event.html', data);
        } else {
            res.render('404.html');
        }
    } else {
        res.render('404.html');
    }
};