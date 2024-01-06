const express = require("express");
const cors = require("cors");

const app = express();
const axios = require("axios");
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name:username },
        { headers: { "private-key": "4e3fd5b1-2d89-4797-97f1-245d297c69f1" }}
    
    );
    return res.status(r.status).json(r.data);
  } catch(e){
    return res.status(r.response.status).json(e.response.data);
  }
});

app.listen(3001);