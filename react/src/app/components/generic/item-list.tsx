import Item from "./item";

export default function ItemList() {
  return (
    <div>
      ItemList
      <Item
        id={1}
        title="talha"
        extra={[
          {
            id: 1,
            username: "big t",
          },
        ]}
      />
    </div>
  );
}
