const colors = ["#F59C28", "#8E33FF", "#00B8D9", "#22C55E", "#FFAB00", "black"];
export const randomColors = colors[Math.floor(Math.random() * colors.length)];
export const randomColor = "black";

export const boldText = (text: string) => (
  <span style={{ fontWeight: 700, color: randomColor }}>{text}</span>
);
