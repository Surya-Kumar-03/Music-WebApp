const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json())
const { default: mongoose } = require("mongoose");

app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => {
    console.log("DB Connected");
  })
  .on("error", (error) => console.log(error));

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  likedSongs: {
    type: [String],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  genre: {
    type: String,
    required: true,
  },
});


app.post("/user/signin", async (req, res) => {
  const { uid, username, email } = req.body;
  try {
    const user = await User.findOne({ uid });
    if (!user) {
      user = await User.create({ uid, username, email });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put("/users/:uid/likedSongs", async (req, res) => {
  const { uid } = req.params;
  const { songId } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { uid },
      { $addToSet: { likedSongs: songId } },
      { new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
app.get("/", (req, res) => {
  res.send("Hi, I am running!");
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server Up and Running!");
});

const Song = mongoose.model("Song", songSchema);

app.post("/upload/song", async (req, res) => {
  try {
    const {
      name,
      artist,
      album,
      thumbnail,
      duration,
      date,
      clicks,
      likes,
      genre,
    } = req.body;
    
    const song = new Song({
      name,
      artist,
      album,
      thumbnail,
      duration,
      date,
      clicks,
      likes,
      genre,
    });
    
    await song.save();
    
    res.status(201).json(song);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.get('/songs/metal', async (req, res) => {
  try {
    const songs = await Song.find({ genre: 'metal' });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/songs/electric', async (req, res) => {
  try {
    const songs = await Song.find({ genre: 'electric' });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/songs/romantic', async (req, res) => {
  try {
    const songs = await Song.find({ genre: 'romantic' });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/songs/rap', async (req, res) => {
  try {
    const songs = await Song.find({ genre: 'rap' });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get('/allsongs', async (req, res) => {
  try {
    const songs = await Song.find();
    const genres = {};
    songs.forEach(song => {
      if (genres[song.genre]) {
        genres[song.genre].push({
          title: song.title,
          poster: song.thumbnail,
          link: song.link,
          type: song.type
        });
      } else {
        genres[song.genre] = [{
          title: song.title,
          poster: song.thumbnail,
          link: song.link,
          type: song.type
        }];
      }
    });
    const response = [];
    for (let genre in genres) {
      response.push({
        genre: genre,
        music: genres[genre]
      });
    }
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
