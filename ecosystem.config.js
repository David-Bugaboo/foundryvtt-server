module.exports = {
  apps: [
    {
      name: "foundry",
      script: "./main.js",
      env: {
        HOME: process.env.HOME,
      }
    }
  ]
}

