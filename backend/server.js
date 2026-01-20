const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow cross-origin from frontend
app.use(express.json());

// Create logs folder if not exists (for volume demo)
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Endpoint demo: Return Git + Docker info and log request
app.get('/api/demo', (req, res) => {
  const logMessage = `Request at ${new Date().toISOString()}: ${req.ip}\n`;
  fs.appendFileSync(path.join(logsDir, 'access.log'), logMessage);

  res.json({
    git: {
      title: 'Advanced Git Workflow',
      detail: 'Use branch protection on GitHub, code review in PR, and squash merge for clean history'
    },
    docker: {
      title: 'Advanced Docker',
      detail: 'Use multi-stage build, healthcheck in Dockerfile, and orchestration with Compose/Swarm'
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
