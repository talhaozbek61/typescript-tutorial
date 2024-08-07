import Link from "next/link";
import { CharacterProps } from "../types/types";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function CharacterCart({
  id,
  name,
  status,
  image,
}: CharacterProps) {
  return (
    <article
      key={id}
      className="max-md:mx-auto flex max-w-xl flex-col items-center justify-between ring-1 ring-gray-600 ring-opacity-50 p-3 rounded-lg space-y-2"
    >
      <Image
        src={image}
        width={300}
        height={300}
        alt={`${name} Image`}
        className="size-40 rounded-lg shadow-xl"
      />
      <h3 className="flex items-center gap-x-2 text-sm font-semibold text-zinc-200 hover:text-zinc-400">
        <GoDotFill
          className={`size-2 ${
            status == "Alive"
              ? "fill-green-500"
              : status == "Dead"
              ? "fill-red-500"
              : "fill-gray-500"
          }  animate-ping`}
        />
        <Link href={`character/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
