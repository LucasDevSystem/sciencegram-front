import * as React from "react";
import PostCard from "./PostCard";

export default function Feed({ feedData = [], onNavigate }) {
  return (
    <div

    >
      {feedData.map((postData, index) => {
        return (
          <div key={index}>
            <PostCard postData={postData} onNavigate={onNavigate} />
          </div>
        );
      })}
    </div>
  );
}
