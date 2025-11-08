const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SNUC Pro Portal</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: #0d0d0d;
      color: #eaeaea;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      overflow: hidden;
      position: relative;
    }

    /* Soft gradient glow background */
    .glow {
      position: absolute;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
      filter: blur(80px);
      top: -100px;
      left: -150px;
      animation: float 10s ease-in-out infinite alternate;
    }

    .glow2 {
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%);
      filter: blur(100px);
      bottom: -120px;
      right: -100px;
      animation: float 12s ease-in-out infinite alternate-reverse;
    }

    @keyframes float {
      0% { transform: translate(0, 0); }
      100% { transform: translate(40px, -40px); }
    }

    .container {
      position: relative;
      z-index: 2;
      width: 90%;
      max-width: 850px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 3rem;
      backdrop-filter: blur(10px);
      box-shadow: 0 0 40px rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;
    }

    .container:hover {
      box-shadow: 0 0 60px rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
    }

    h1 {
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(90deg, #ffffff, #aaaaaa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      margin-bottom: 1rem;
      letter-spacing: -0.5px;
    }

    .subtitle {
      text-align: center;
      color: #bbb;
      font-size: 1.15rem;
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }

    .location {
      text-align: center;
      background: rgba(255,255,255,0.05);
      border-radius: 50px;
      display: inline-block;
      padding: 0.75rem 1.5rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      margin-bottom: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .location::before {
      content: '📍';
      margin-right: 0.5rem;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1.5rem;
      margin-top: 2.5rem;
    }

    .stat-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      padding: 1.5rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      background: rgba(255,255,255,0.07);
      transform: translateY(-4px);
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
    }

    .stat-label {
      font-size: 0.85rem;
      color: #888;
      text-transform: uppercase;
      margin-top: 0.4rem;
    }

    .cta-button {
      display: inline-block;
      margin: 2rem auto 0;
      background: linear-gradient(135deg, #fff, #c0c0c0);
      color: #000;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
      text-align: center;
    }

    .cta-button:hover {
      background: #fff;
      transform: translateY(-3px);
      box-shadow: 0 0 25px rgba(255,255,255,0.1);
    }

    .footer {
      text-align: center;
      margin-top: 2.5rem;
      color: #777;
      font-size: 0.95rem;
    }

    .signature {
      display: block;
      margin-top: 0.75rem;
      font-weight: 700;
      background: linear-gradient(90deg, #ffffff, #888888);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 0.5px;
      font-size: 1.05rem;
    }

    @media (max-width: 768px) {
      h1 { font-size: 2.3rem; }
      .container { padding: 2rem; }
      .stats { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="glow"></div>
  <div class="glow2"></div>

  <div class="container">
    <div class="location">Chennai, India</div>
    <h1>Welcome to the SNUC Pro Portal</h1>
    <p class="subtitle">A refined digital space crafted for precision, strategy, and mastery.  
      Stay ahead — every millisecond matters in the art of trading.</p>

    <div style="text-align:center;">
      <a href="/health" class="cta-button">Check System Health</a>
    </div>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-value">99.99%</div>
        <div class="stat-label">Uptime</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">&lt;40ms</div>
        <div class="stat-label">Latency</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">24/7</div>
        <div class="stat-label">Live Access</div>
      </div>
    </div>

    <div class="footer">
      “Discipline outlasts luck. Precision beats emotion.”  
      <span class="signature">— Shajan S, SNUC Pro Trader</span>
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
  console.log(\`🖤 SNUC Pro Portal running elegantly on port \${PORT}\`);
});
