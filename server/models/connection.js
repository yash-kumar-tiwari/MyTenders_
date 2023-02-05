import mongoose from "mongoose";

const url = "mongodb://localhost:27017/register_user_ReactJS_async_await";

mongoose.connect(url);

console.log("Connection Established Successfully with Database...")