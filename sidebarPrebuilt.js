module.exports = {
  guidePrebuiltVideoCalling: [
    {
      type: "category",
      label: "Quick Start",
      items: [
        "guide/prebuilt-video-and-audio-calling/getting-started",
        "guide/prebuilt-video-and-audio-calling/signup-and-create-api",
        {
          type: "category",
          label: "Client Setup",
          items: [
            "guide/prebuilt-video-and-audio-calling/using-script",
            "guide/prebuilt-video-and-audio-calling/using-npm",
          ],
          collapsed: true,
        },
        "guide/prebuilt-video-and-audio-calling/quick-start",
        "guide/prebuilt-video-and-audio-calling/dynamic-meeting-link",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Basic Features",
      items: [
        "guide/prebuilt-video-and-audio-calling/features/join-screen",
        "guide/prebuilt-video-and-audio-calling/features/camera-controls",
        "guide/prebuilt-video-and-audio-calling/features/mic-controls",
        "guide/prebuilt-video-and-audio-calling/features/redirect-on-leave",
        "guide/prebuilt-video-and-audio-calling/features/screenshare",
        "guide/prebuilt-video-and-audio-calling/features/send-messages",
        "guide/prebuilt-video-and-audio-calling/features/pin-participants",
        "guide/prebuilt-video-and-audio-calling/features/remove-participant",
        "guide/prebuilt-video-and-audio-calling/features/end-meeting",
        "guide/prebuilt-video-and-audio-calling/features/left-screen",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Advanced Features",
      items: [
        "guide/prebuilt-video-and-audio-calling/features/record-meeting",
        "guide/prebuilt-video-and-audio-calling/features/go-live-social-media",
        "guide/prebuilt-video-and-audio-calling/features/go-live-hls",
        "guide/prebuilt-video-and-audio-calling/features/virtual-background",
        "guide/prebuilt-video-and-audio-calling/features/noise-removal",
        "guide/prebuilt-video-and-audio-calling/features/live-poll",
        "guide/prebuilt-video-and-audio-calling/features/theme",
        "guide/prebuilt-video-and-audio-calling/features/customize-branding",
        "guide/prebuilt-video-and-audio-calling/features/customize-permissions",
        "guide/prebuilt-video-and-audio-calling/features/whitelist-domain",
        "guide/prebuilt-video-and-audio-calling/features/whiteboard",
        "guide/prebuilt-video-and-audio-calling/features/debug-mode",
        "guide/prebuilt-video-and-audio-calling/features/waiting-screen",
      ],
      collapsed: true,
    },
  ],
  apiSidebar: [
    {
      type: "doc",
      id: "api/sdk-reference/setup",
    },
    {
      type: "doc",
      id: "api/sdk-reference/video-sdk-meeting",
    },
  ],
};
