const svg = document.getElementById("svgCanvas");

let drawing = false;
let path;
let d = "";

svg.addEventListener("mousedown", (e) => {
  drawing = true;

  const pt = getSVGPoint(e);
  d = `M ${pt.x} ${pt.y}`;

  path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("stroke", "blue");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("fill", "none");

  svg.appendChild(path);
});

svg.addEventListener("mousemove", (e) => {
  if (!drawing) return;

  const pt = getSVGPoint(e);
  d += ` L ${pt.x} ${pt.y}`;
  path.setAttribute("d", d);
});

svg.addEventListener("mouseup", () => drawing = false);
svg.addEventListener("mouseleave", () => drawing = false);

function getSVGPoint(event) {
  const pt = svg.createSVGPoint();
  pt.x = event.clientX;
  pt.y = event.clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}
