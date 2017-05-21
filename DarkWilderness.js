function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if (desiredHeight <= upSpeed) return 1;
  return Math.ceil((desiredHeight - downSpeed)/(upSpeed - downSpeed));
}
