const express = require("express");
const cors = require("cors");
const { tikdown } = require("nayan-media-downloader");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const fetchVideoData = async (url) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(
    `https://snapdouyin.app/wp-json/aio-dl/video-data/?url=${url}`,
    options
  );
  return response.json();
};

const formatResponse = (downloadURL, data) => {
  const {
    view: likes = null,
    play: plays = null,
    comment = null,
    share = null,
    download: downloadCount = null,
    duration: durationInSeconds = null,
    title = null,
    author = {},
  } = downloadURL.data;

  const {
    id = null,
    unique_id: uniqueId = null,
    nickname = null,
    avatar = null,
  } = author;

  return {
    status: true,
    developer: "API BY MAHMOUD SAYED || https://github.com/Mahmovdsayed",
    metadata: {
      likes,
      plays,
      comment,
      share,
      downloadCount,
      durationInSeconds,
      title,
      thumbnail: data.thumbnail || null,
      url: data.url || null,
    },
    author: {
      id,
      unique_id: uniqueId,
      nickname,
      avatar,
      profileURL: uniqueId ? `https://www.tiktok.com/@${uniqueId}` : null,
    },
    download: data.medias,
  };
};

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    error:
      "GET /download This endpoint retrieves download URLs for a TikTok video.",
  });
});

app.get("/download", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ status: false, error: "URL is required" });
  }

  try {
    const videoData = await fetchVideoData(url);
    const downloadURL = await tikdown(url);

    const response = formatResponse(downloadURL, videoData);
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: "Failed to download video",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
