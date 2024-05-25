require('./route')
const getMessages = require("../controllers/Messages").getMessages;

const Authenticate = require("../middlewares/Authenticate");

router.get("/user/:userId", Authenticate, getMessages);

module.exports = router;
