const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("Will send all promotions to you.");
})
.post((req, res, next) => {
    res.end("will add the promotion: " + req.body.name
    + " with details: " + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported!");
})
.delete((req, res, next) => {
    res.end("Deleting all promotions.");
});


//including :ids
promoRouter.route("/:promoId")
.get((req, res, next) => {
    res.end("Will send details of promotion: " + 
    req.params.promoId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("post operation not supported!");
})
.put((req, res, next) => {
    res.write("updating the promotion: " + req.params.promoId + "\n");
    res.end("will update the promotion: " + req.body.name 
        + " with details: " + req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting promotion: " + req.params.promoId);
});

module.exports = promoRouter;