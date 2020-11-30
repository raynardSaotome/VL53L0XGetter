window.onload = () => {
  var dist = document.getElementById("dist");

  const vl = new VL53L0XGetter(true);
  //  vl.init();

  //  vl.distanceMonitor(dist.innerHTML);

  vl.start(dist);
};
