
# Discord Clone

create an end-to-end fullstack and real-time discord clone, all with servers, channels, video calls, audio calls, editing and deleting messages as well as member roles.

## Key Features

- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete & Edit messages in real time for all users
- Create Text, Audio and Video call Channels
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages in batches of 10 (@tanstack/query)
- Server creation and customization
- Beautiful UI using TailwindCSS and ShadcnUI
- Full responsivity and mobile UI
- Light / Dark mode
- Websocket fallback: Polling with alerts
- ORM using Prisma
- MySQL database using Planetscale
- Authentication with Clerk

## TODO

- [x] Environment setup
- [x] Folders setup
- [x] Authentication
- [x] Dark & Light Theme
- [x] Prisma and PlanetScale setup
- [x] Initial Model UI
- [x] UploadThing setup
- [x] Server creation API
- [x] Navigation sidebar
- [x] Create Server Model
- [x] Server sidebar
- [x] Invitations
- [x] Server setting
- [x] Manage Members
- [x] Channel creation
- [x] Delete & Leave server
- [x] Search Server Model
- [ ] Server channel list
- [ ] Edit channels
- [ ] Channel ID page
- [ ] Chat Header
- [ ] Prisma Schema completion
- [ ] Conversations Setup
- [ ] Socket IO setup
- [ ] Messages API
- [ ] Message Attachment
- [ ] Emoji bar
- [ ] Chat components
  - [ ] Input
  - [ ] Messages
  - [ ] Item
- [ ] Delete Message
- [ ] Chat hook
  - [ ] Socket
  - [ ] Scroll
- [ ] Direct Messages
- [ ] Video calls