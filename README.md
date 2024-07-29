# TikTok Media Downloader API

This API allows you to download media content from TikTok. You can retrieve video and audio download URLs, along with metadata about the video.

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/Mahmovdsayed/tiktokAPI.git
cd tiktokAPI
npm install
```

# Usage

Starting the Server

To start the server, run:

```bash
npm start
```

The server will be running on port 4000 by default.

# Endpoints

`GET /download`
This endpoint retrieves download URLs for a TikTok video.

Query Parameters:

url (required): The URL of the TikTok video you want to download.

Response:

On success, the response will include:

```json
{
"status": true,
"developer": "API BY MAHMOUD SAYED || https://github.com/Mahmovdsayed",
"metadata": {
"likes": Number,
"plays": Number,
"comment": Number,
"share": Number,
"downloadCount": Number,
"durationInSeconds": Number,
"title": String,
"thumbnail": String,
"url": String
},
"author": {
"id": String,
"unique_id": String,
"nickname": String,
"avatar": String,
"profileURL": String
},
"download": [
{
"url": String,
"quality": "hd",
"extension": "mp4",
"size": Number,
"formattedSize": String,
"videoAvailable": true,
"audioAvailable": true,
"chunked": false,
"cached": false
},
{
"url": String,
"quality": "sd",
"extension": "mp4",
"size": Number,
"formattedSize": String,
"videoAvailable": true,
"audioAvailable": true,
"chunked": false,
"cached": false
},
{
"url": String,
"quality": "watermark",
"extension": "mp4",
"size": Number,
"formattedSize": String,
"videoAvailable": true,
"audioAvailable": true,
"chunked": false,
"cached": false
},
{
"url": String,
"quality": "128kbps",
"extension": "mp3",
"size": Number,
"formattedSize": String,
"videoAvailable": false,
"audioAvailable": true,
"chunked": false,
"cached": false
}
]
}
```

On failure, the response will include:

```json
{
  "status": false,
  "error": "Failed to download video"
}
```
# Example Request

To get the download URLs for a TikTok video:

```bash
curl "http://localhost:4000/download?url=https://www.tiktok.com/@username/video/1234567890"
```

# Error Handling

**Bad Request**: If the `url` query parameter is missing **400**.

**Internal Server Error**: If there is an error processing the request **500**.

# Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

# License

This project is licensed under the MIT License. See the LICENSE file for details.

# Contact

For any inquiries, please contact [me](https://www.instagram.com/mahmoudsaayed).


