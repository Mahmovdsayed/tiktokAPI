const express = require("express");
const cors = require("cors");
const { tikdown } = require("nayan-media-downloader");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/download", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ status: false, error: "URL is required" });
  }

  try {
    let downloadURL = await tikdown(url);
    return res.status(200).json({
      status: true,
      developer: "API BY MAHMOUD SAYED || https://github.com/Mahmovdsayed",
      metadata: {
        likes: downloadURL.data.view,
        plays: downloadURL.data.play,
        comment: downloadURL.data.comment,
        share: downloadURL.data.share,
        downloadCount: downloadURL.data.download,
        durationInSeconds: downloadURL.data.duration,
        title: downloadURL.data.title,
      },
      author: {
        id: downloadURL.data.author.id,
        unique_id: downloadURL.data.author.unique_id,
        nickname: downloadURL.data.author.nickname,
        avatar: downloadURL.data.author.avatar,
      },
      download: {
        videoDownloadURL: downloadURL.data.video,
        audioDownloadURL: downloadURL.data.audio,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      error: "Failed to download video",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
