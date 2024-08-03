import React from "react";
import { CharacterProps } from "../types/types";
import CharacterCart from "../components/character-card";

const getCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  return res.json();
};

export default async function Page() {
  const data = await getCharacters();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
        <h1 className="text-white text-3xl sm:text-4xl">All Character</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {data.results.map((character: CharacterProps) => (
            <CharacterCart key={character.id} {...character} />
          ))}
        </div>
      </div>
    </div>
  );
}
