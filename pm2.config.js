module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm",
      args: "run serve",
      cwd: "/home/bitnami/app/frontend",
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000, // Replace with the desired port for your frontend
      },
    },
  ],
};
