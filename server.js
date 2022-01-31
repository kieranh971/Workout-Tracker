const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// (require(".routes/api-routes.js"))(app);
// (require(".routes/html-routes.js"))(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})