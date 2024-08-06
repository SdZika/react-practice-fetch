import React, { FC, useEffect, useState } from "react";

interface MyProps {
    url: string;
    topText?: string;
    bottomText?: string;
    image?: string;
}

export const Meme:FC<MyProps> = ({ url }) => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState<{ url: string }[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setAllMemes(data.data.memes))
      .catch((error) => console.error(error));
  }, [url]);

  const getImage = () => {
    const image = allMemes[Math.floor(Math.random() * allMemes.length)];

    setMeme((previousMeme) => ({ ...previousMeme, image: image.url }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeme((previousMeme) => ({
      ...previousMeme,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Botton Text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button onClick={getImage}>Generate a next Meme</button>
      </div>
      <div>
        <img src={meme.image} alt="meme.image" />
        <h2>{meme.topText}</h2>
        <h2>{meme.bottomText}</h2>
      </div>
    </>
  );
};
