---
title: Remove participant from the meeting - React Native SDK
hide_title: false
hide_table_of_contents: false
description: Remove a participant or a peer from the meeting while it is still in progress. It helps in meeting moderation.
sidebar_label: Remove Participant
pagination_label: Remove Participant
keywords:
  - remove participant
  - block participant
  - react native
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remove-participant
---

# Remove Participant

Remove participant allows removing participant while session is on-going. This can be helpful when moderation in particular meeting is required. 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```js
const onPress = () => {
  const participants = meeting.participants;

  // Get specific participant instance from the list
  const participant = participants.get("<participant-id>");

  // Remove participant from active session
  // This will emit an event called "onParticipantLeft" to that particular participant
  participant.remove();
};
```

### Events

**onParticipantLeft** - Removing participant will trigger `onParticipantLeft` event.

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-native-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onParticipantLeft: (participant) => {
    // Triggers when a participant is removed or leaves the meeting.
  }
});
```
