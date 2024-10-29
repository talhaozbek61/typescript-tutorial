type User = {
  id: number;
  username: string;
};

type ItemProps<T extends User> = {
  id: number;
  title: string;
  extra: T[];
};

export default function Item(
  props: ItemProps<{ id: number; username: string }>
) {
  return <div>Item</div>;
}
