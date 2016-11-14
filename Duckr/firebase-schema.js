No such thing as a perfect Firebase Schema
- There will be tradeoffs
Keep Shallow
- Avoid at all costs really nested datasets
Repeating Data is OK
- Makes more effective and fast


Home
  All Ducks

Profile
  User Info
  Users Ducks

Replies
  Specific Duck
  Ducks Replies

/users
  uid
    name
    uid
    avatar

/ducks
  duckId
    avatar
    duckId
    name
    text
    timestamp
    uid (of duck author)

/likeCount
  duckId
    0

/usersDucks
  uid
    duckId
      avatar
      duckId
      name
      text
      timestamp
      uid (of duck author)

/replies
  duckId
    replyId
      name
      comment
      uid
      timestamp
      avatar

/usersLikes
  uid
    duckId: true
