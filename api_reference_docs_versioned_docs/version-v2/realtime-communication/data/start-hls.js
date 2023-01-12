const startHLSstream = {
  title: "Start HLS Stream",
  description: "Allows you to start an HLS livestream for a room with configuration options.",
  headers: [
    {
      key: "Authorization",
      value: "$YOUR_TOKEN",
    },
    {
      key: "Content-Type",
      value: "application/json",
    },
  ],
  methodType: "POST",
  postParameters: [
    {
      key: "roomId",
      value: "xyz",
      description: "The ID of the room.",
      required: true,
    },
    {
      key: "templateUrl",
      value:
        "https://www.example.com/?token=tooken&meetingId=74v5-v21l-n1ey&participantId=RECORDER_ID",
      description:
        "[Customize Layout of Meeting HLS](/docs/tutorials/customized-layout).",
      required: false,
    },
    {
      key: "config",
      value: "configObj",
      description: `
- orientation - hls stream orientation will be set to "landscape" by default, if you pass portrait orientation then it will stream hls in portrait mode.
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _\`max 25\`_
  - **orientation**: _"landscape"_ | _"portrait"_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
  - **mode**: _"video-and-audio"_ | _"audio"_
  - **quality**: _"low"_ | _"med"_ | _"high"_
`,
      required: false,
    },
  ],
  queryParameters: [],
  parameters: [],
  apiEndpoint: "https://api.videosdk.live/v2/hls/start",
  response: {
    downstreamUrl:
      "https://cdn.videosdk.live/meetings-hls/2e200932-e00f-4e5f-b35d-73d3079e6bf5/index.m3u8",
  },
};

export { startHLSstream };
