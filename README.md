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
"likes": 83931,
"plays": 782216,
"comment": 278,
"share": 2555,
"downloadCount": 7536,
"durationInSeconds": 27,
"title": "(333) #fypシ #viral #foryou #tiktokmusic #fyp #موسيقي_علي_تيك_توك #fypシ゚viral ",
"thumbnail": "https://p16-sign-sg.tiktokcdn.com/aweme/300x400/tos-alisg-p-0037/oQJ50KAmiAMKm2yoBYI4Z3jiEADBL5uEPXI4E.jpeg?lk3s=d05b14bd&nonce=40699&refresh_token=cb2a9539bbb6d19505dc5aca805c2be5&x-expires=1722315600&x-signature=zYL9c2tkqU%2Fle5oQsUndTHHJIfk%3D&s=AWEME_DETAIL&se=false&sh=&sc=cover&l=20240729051143C74131B5C0E5DCED721C&shp=d05b14bd&shcp=-",
"url": "https://www.tiktok.com/@_tommyygun/video/7388591340956749064"
},
"author": {
"id": "6575129531849228294",
"unique_id": "_tommyygun",
"nickname": "العرباوي 🥷",
"avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/43a1293794baa88c1ff395312102bd7d~c5_300x300.jpeg?lk3s=45126217&nonce=91291&refresh_token=3b7f545f3a3f471c6d00e3b9270288c2&x-expires=1722315600&x-signature=slyTHSGoM7k3lEfxc407f%2FbMFeY%3D&shp=45126217&shcp=-",
"profileURL": "https://www.tiktok.com/@_tommyygun"
},
"download": [
{
"url": "https://v16m-default.akamaized.net/507e0c5141117f755f21c57b1d2efa9c/66a7790b/video/tos/alisg/tos-alisg-pv-0037c001/owKPXC0CIBEoJ3M7iEYAAyZjBEEA2AumiiAAm/?a=0&bti=bGRuZHxvMXIxcm53Zm1cYF9ebWFzaHFmOg%3D%3D&ch=0&cr=0&dr=0&er=0&cd=0%7C0%7C0%7C0&cv=1&br=9954&bt=4977&ds=4&ft=aEKpCqT0m7jPD12MQgu73wUK9AyKMeF~O5&mime_type=video_mp4&qs=13&rc=M3FsZ2w5cmRydDMzODczNEBpM3FsZ2w5cmRydDMzODczNEBuYWRrMmQ0bDFgLS1kMWBzYSNuYWRrMmQ0bDFgLS1kMWBzcw%3D%3D&vvpl=1&l=202407290511433172054BA33AD1F1807E&btag=e00048000&cc=3",
"quality": "hd",
"extension": "mp4",
"size": 17443384,
"formattedSize": "16.64 MB",
"videoAvailable": true,
"audioAvailable": true,
"chunked": false,
"cached": false
},
{
"url": "https://v16m-default.akamaized.net/e6925b1559c7fae47d97790bb5e6db59/66a7790b/video/tos/alisg/tos-alisg-pve-0037c001/oYYBDNofKJimFBAlQwLoRjvDgEzEc6gsdJi4If/?a=0&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1190&bt=595&cs=0&ds=6&ft=XE5bCqT0m7jPD12MQgu73wUK9AyKMeF~O5&mime_type=video_mp4&qs=4&rc=ZTs3aTpmNWU7Ozk8NTVnPEBpM3FsZ2w5cmRydDMzODczNEBhM18yLjE1XzIxMF8xMF5iYSNuYWRrMmQ0bDFgLS1kMWBzcw%3D%3D&vvpl=1&l=20240729051143C74131B5C0E5DCED721C&btag=e00088000",
"quality": "sd",
"extension": "mp4",
"size": 2082893,
"formattedSize": "1.99 MB",
"videoAvailable": true,
"audioAvailable": true,
"chunked": false,
"cached": false
},
{
"url": "https://v16m-default.akamaized.net/f82db5fca2c13998d4ca855069a650eb/66a7790b/video/tos/alisg/tos-alisg-pve-0037c001/o8sYTAN0YcgOJEImMiFfBBgevG4bwoQdRHDlEo/?a=0&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2224&bt=1112&cs=0&ds=3&ft=XE5bCqT0m7jPD12MQgu73wUK9AyKMeF~O5&mime_type=video_mp4&qs=0&rc=NWY4ZjlmM2Q6ZmY0ZWdmZUBpM3FsZ2w5cmRydDMzODczNEBgMGEwMTBhXzExMDQwXy81YSNuYWRrMmQ0bDFgLS1kMWBzcw%3D%3D&vvpl=1&l=20240729051143C74131B5C0E5DCED721C&btag=e00088000",
"quality": "watermark",
"extension": "mp4",
"size": 3892456,
"formattedSize": "3.71 MB",
"videoAvailable": true,
"audioAvailable": true,
"chunked": false,
"cached": false
},
{
"url": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7388591376214412048.mp3",
"quality": "128kbps",
"extension": "mp3",
"size": 438563,
"formattedSize": "428.28 KB",
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


