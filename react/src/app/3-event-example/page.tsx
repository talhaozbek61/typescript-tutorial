"use client";
export default function Page() {
  // For Search
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} Deleted`);
  };
  return (
    <div className="mx-auto max-w-7xl py-8 px-6">
      <h1 className="text-3xl">Event Examples</h1>
      <p className="text-sm text-gray-400">Check the console for action</p>
      {/* Search */}
      <form className="mt-8 sm:flex sm:items-center">
        <div className="w-full sm:max-w-md">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search Something"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 outline-none sm:ml-3 sm:mt-0 sm:w-auto"
        >
          Search
        </button>
      </form>

      {/* Paragraph */}
      <form className="flex flex-col w-full mt-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          doloribus quod iste totam incidunt quia, consequuntur omnis ea,
          exercitationem fugit sit rem enim aperiam a quisquam sequi. Neque,
          dolorem praesentium.
        </p>
        <button
          className="mt-4 px-6 py-2.5 bg-gray-300 rounded-full max-w-sm"
          onClick={(e) => handleDelete(e, 1)}
          id="firstP"
        >
          Delete
        </button>
      </form>
      <form className="flex flex-col w-full mt-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          doloribus quod iste totam incidunt quia, consequuntur omnis ea,
          exercitationem fugit sit rem enim aperiam a quisquam sequi. Neque,
          dolorem praesentium.
        </p>
        <button
          className="mt-4 px-6 py-2.5 bg-gray-300 rounded-full max-w-sm"
          onClick={(e) => handleDelete(e, 2)}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
