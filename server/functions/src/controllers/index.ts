const { eventController } = require('./event');
const { resourceController } = require('./resource');
const { talkController } = require('./talk');

exports.controllers = {
    eventController,
    resourceController,
    talkController
};