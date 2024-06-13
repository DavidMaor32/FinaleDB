const app = require("./app");
const mongoose = require("mongoose");
const init = require("./init");

require('dotenv').config();
const run = async () => {
    try {
        const port = process.env.PORT || 3000;
        await mongoose.connect(process.env.DATABASE_URL);

        // let bucket;
        // (() => {
        //         mongoose.connection.on("connected", () => {
        //             bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        //             bucketName: "filesBucket",
        //             });
        //         });
        // })();

        app.listen(port, () => console.log(`Listening on port: ${port}`));
        init();
    }
    catch (err) {
        console.error(`FAILED TO START: ${err}`);
        process.exit(1);
    }
}

run();

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0);
});

