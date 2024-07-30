import express from "express";
import cors from "cors";
import { downloadVideo } from "tiktok-api-downloader";
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

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
    let response = await downloadVideo(url);
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
