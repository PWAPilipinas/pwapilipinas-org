exports.talkController = async (req: any, res: any) => {
    const name = req.params.name;
    if (name === 'fugu') {
        res.render('fugu.html');
    } else {
        res.render('404.html');
    }
};