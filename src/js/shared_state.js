export default {
  selectedColor: "#000",
  ctx: null,
  canvas: null,
  zoomContainer: null,
  max_span_x: 200,
  max_span_y: 200,
  min_span_x: -200,
  min_span_y: -200,
  current_span_x: 0,
  current_span_y: 0,
  span_container: document.getElementById("zoom_container"),
  canvas: document.getElementById("canvas"),
  coordinates_display: document.getElementById("coordinates_display"),
  color_selector_container: document.getElementById("color_selector_container"),
  color_selector_box: document.getElementById("color_selector_box"),

  setSelectedColor(color) {

    this.selectedColor = color;

  },

  setCtx(ctx) {

    this.ctx = ctx;

  },

  setCanvas(canvas) {

    this.canvas = canvas;

  },

  setZoomContainer(container) {

    this.zoomContainer = container;

  },

  setMaxSpanX(span) {this.max_span_x = span},
  setMaxSpanY(span) {this.max_span_y = span},
  setMinSpanX(span) {this.min_span_x = span},
  setMinSpanY(span) {this.min_span_y = span},
  setCurrentSpanX(span) {this.current_span_x = span},
  setCurrentSpanY(span) {this.current_span_y = span},

  updateSpanContainer() {
    this.span_container.style.transform = `translate(${this.current_span_x}px, ${this.current_span_y}px)`;
  }
}