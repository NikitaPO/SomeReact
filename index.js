async function app() {
  let { hi, bye } = await import("./hiBye.js");
  hi();
}

export { app };
