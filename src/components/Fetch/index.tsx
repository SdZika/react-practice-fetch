import React, { useState } from "react";

export const MyFetch = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=uZjJbk2dG1bH0sJKMLY3ZU7rAn0mr2KU&s=cats",
    { mode: "cors" },
  )
    .then((response) => response.json())

    .then((response) => {
      setImageUrl(response.data.images.original.url);
    });

  return (
    <div>
      {imageURL && (
        <>
          <h1>An image</h1>
          <img src={imageUrl} alt="placeholder text" />
        </>
      )}
    </div>
  );
};
