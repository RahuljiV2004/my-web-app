const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
//gopi1
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SNUC Web Portal</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: radial-gradient(circle at top left, #2b1055, #7597de);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      overflow: hidden;
      position: relative;
    }

    /* Neon Orb Backgrounds */
    .orb {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      filter: blur(150px);
      animation: float 10s ease-in-out infinite;
      opacity: 0.7;
    }

    .orb1 {
      top: -50px;
      left: -50px;
      background: #ff6bcb;
      animation-delay: 0s;
    }

    .orb2 {
      bottom: -50px;
      right: -50px;
      background: #47e7b1;
      animation-delay: 2s;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(30px, -30px); }
    }

    .glass-card {
      position: relative;
      z-index: 2;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      padding: 3.5rem;
      text-align: center;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.4s ease;
      max-width: 850px;
      width: 90%;
    }

    .glass-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
    }

    h1 {
      font-size: 3.5rem;
      background: linear-gradient(90deg, #00f5ff, #ff00c3, #ff8c00);
      background-size: 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 5s infinite linear;
      font-weight: 700;
      letter-spacing: -1px;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .subtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      margin-top: 1rem;
      line-height: 1.6;
    }

    .location {
      display: inline-flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.15);
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: 600;
      letter-spacing: 0.5px;
      backdrop-filter: blur(5px);
      margin-bottom: 2rem;
    }

    .location::before {
      content: '📍';
      margin-right: 0.5rem;
    }

    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #00f5ff, #ff00c3);
      color: #fff;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
      margin-top: 2rem;
    }

    .cta-button:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
      filter: brightness(1.2);
    }

    .stats {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 3rem;
      gap: 1.5rem;
    }

    .stat-card {
      background: rgba(255, 255, 255, 0.1);
      padding: 1.5rem 2rem;
      border-radius: 20px;
      text-align: center;
      min-width: 150px;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .stat-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.2);
    }

    .stat-value {
      font-size: 2.2rem;
      font-weight: 700;
      color: #fff;
    }

    .stat-label {
      font-size: 0.9rem;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.75);
      letter-spacing: 1px;
      margin-top: 0.4rem;
    }

    .footer {
      margin-top: 2.5rem;
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .footer .heart {
      color: #ff6b6b;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }

    .signature {
      margin-top: 1rem;
      font-weight: 700;
      font-size: 1.1rem;
      background: linear-gradient(90deg, #ff00c3, #00f5ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 5s infinite linear;
    }

    @media (max-width: 768px) {
      h1 { font-size: 2.5rem; }
      .glass-card { padding: 2rem; }
    }
  </style>
</head>
<body>
  <div class="orb orb1"></div>
  <div class="orb orb2"></div>
  
  <div class="glass-card">
    <div class="location">Chennai, India</div>
    <h1>Hello from SNUC!</h1>
    <p class="subtitle">Welcome to the ultimate Chennai web portal — where performance, elegance, and innovation converge under the guidance of the <strong>Master of Masters</strong>.</p>
    
    <a href="/health" class="cta-button">⚡ System Health</a>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-value">100%</div>
        <div class="stat-label">Divine Uptime</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">&lt;1ms</div>
        <div class="stat-label">Response Time</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">∞</div>
        <div class="stat-label">Greatness Level</div>
      </div>
    </div>

    <div class="footer">
      Made with <span class="heart">❤️</span> by <span class="signature">Raghav G — Master of Masters, SNUC God</span>
    </div>
  </div>
</body>
</html>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy', 
        timestamp: new Date(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

app.listen(PORT, () => {
    console.log(`⚙️ Server running on port ${PORT}`);
});
