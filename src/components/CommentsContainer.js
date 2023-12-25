import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Dhoni",
    text: "CSK is the team based from Chennai, TamilNadu",
    replies: [],
  },
  {
    name: "Kohli",
    text: "RCB is the team from Bangalore, Karnataka",
    replies: [
      {
        name: "DeVilliers",
        text: "RCB is the team captained by King Kohli",
        replies: [
          {
            name: "Durban",
            text: "Durban Knights is another team that Devillers is part of.",
            replies: [],
          },
        ],
      },
      {
        name: "Maxwell",
        text: "RCB is the team which I am part of.",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit",
    text: "MI is the team which is based on Mumbai.",
    replies: [
      {
        name: "Surya",
        text: "MI is a team which is captained by the hitman Rohit Sharma.",
        replies: [],
      },
      {
        name: "Bumrah",
        text: "MI is one team one emotion.",
        replies: [],
      },
    ],
  },
];

export const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
