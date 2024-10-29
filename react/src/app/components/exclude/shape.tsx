type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShapeType = Exclude<ShapeType, "square">;

type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "green";

type ItemProps = {
  // color: `${ThemeType}-${ColorType}`
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-blue">;
};
export default function Shape(props: ItemProps) {
  const shape: ShapeType = "square";
  const twoDShape: TwoDShapeType = "triangle";

  return <div>Shape</div>;
}
