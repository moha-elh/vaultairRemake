// Vaultaire homepage — small progressive enhancements. The page works without JS.

(function () {
  "use strict";

  // FAQ: keep only one <details> open at a time.
  document.querySelectorAll("[data-accordion]").forEach(function (group) {
    group.addEventListener("toggle", function (event) {
      var opened = event.target;
      if (!opened.open) return;
      group.querySelectorAll("details[open]").forEach(function (d) {
        if (d !== opened) d.open = false;
      });
    }, true);
  });

  // Phone mockup: iOS-style vault folders (decorative sample data).
  var FOLDERS = [
    ["Secret Cat", 24], ["Ninja Squirrel", 9], ["Spy Donut", 13],
    ["Top Secret Duck", 41], ["Not Memes", 108], ["Classified Snacks", 7],
    ["Covert Llama", 16], ["Banana Protocol", 3], ["Agent Hamster", 32]
  ];
  var FOLDER_SVG =
    '<svg viewBox="0 0 100 80" aria-hidden="true">' +
    '<path class="folder__back" d="M10 2h22c3 0 5 1 7 3l4 4h47a8 8 0 0 1 8 8v53a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8z"/>' +
    '<rect class="folder__front" x="2" y="17" width="96" height="61" rx="8"/>' +
    '<rect x="2" y="66" width="96" height="1.2" fill="#fff" opacity=".3"/>' +
    '<rect x="2" y="70" width="96" height="1.2" fill="#fff" opacity=".22"/>' +
    "</svg>";

  document.querySelectorAll("[data-folders]").forEach(function (grid) {
    grid.innerHTML = FOLDERS.map(function (f) {
      return '<div class="folder">' + FOLDER_SVG +
        '<span class="folder__name">' + f[0] + "</span>" +
        '<span class="folder__count">' + f[1] + " items</span></div>";
    }).join("");
  });

  // "How it works" step I: 5×5 dot grid behind the drawn pattern.
  var NS = "http://www.w3.org/2000/svg";
  document.querySelectorAll("[data-dot-grid]").forEach(function (g) {
    for (var r = 0; r < 5; r++) {
      for (var c = 0; c < 5; c++) {
        var dot = document.createElementNS(NS, "circle");
        dot.setAttribute("cx", 12 + c * 22);
        dot.setAttribute("cy", 12 + r * 22);
        dot.setAttribute("r", 3);
        g.appendChild(dot);
      }
    }
  });
})();
