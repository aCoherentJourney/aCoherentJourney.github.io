console.log("Hello from app.js")


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('start', './docs/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
