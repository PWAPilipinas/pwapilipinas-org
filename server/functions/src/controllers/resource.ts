import * as admin from 'firebase-admin';

exports.resourceController = async (req: any, res: any) => {
    const db = admin.firestore();
    const documentRef = await db.collection('resources').doc(req.params.name).get();
    if(documentRef.exists) {
        const data = documentRef.data() || {};
        res.redirect(data.url);
    } else {
        res.render('404.html');
    }
};