const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Nathaniel Gregorio</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

          body {
            margin: 0;
            padding: 0;
            font-family: "Poppins", sans-serif;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #0f0f0f, #3a0ca3, #7209b7, #4361ee);
            background-size: 300% 300%;
            animation: bgAnimation 12s ease infinite;
            color: white;
            text-align: center;
            overflow: hidden;
          }

          @keyframes bgAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .container {
            padding: 40px 70px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 25px;
            backdrop-filter: blur(25px);
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.22);
            animation: float 4s ease-in-out infinite;
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          h1 {
            font-size: 45px;
            font-weight: 700;
            margin: 20px 0 5px 0;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          }

          h2 {
            margin-top: 0;
            font-size: 24px;
            opacity: 0.9;
          }

          .glow {
            color: #f72585;
            text-shadow: 0 0 15px #f72585, 0 0 35px #f72585;
          }

          .pfp {
            width: 170px;
            height: 170px;
            border-radius: 50%;
            margin-bottom: 15px;
            border: 5px solid #ffffff33;
            box-shadow: 0 0 20px #f72585, 0 0 40px #7209b7;
            animation: glowPulse 3s infinite ease-in-out;
            object-fit: cover;
          }

          @keyframes glowPulse {
            0% { box-shadow: 0 0 15px #f72585; }
            50% { box-shadow: 0 0 40px #f72585; }
            100% { box-shadow: 0 0 15px #f72585; }
          }

          #quote {
            font-size: 20px;
            margin-top: 20px;
            height: 40px;
            font-style: italic;
            white-space: nowrap;
            overflow: hidden;
            border-right: 3px solid #fff;
            width: 0;
            animation: typing 4s steps(40) forwards, blink 0.7s infinite;
          }

          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink {
            50% { border-color: transparent; }
          }

          .btns {
            margin-top: 30px;
          }
          .btn {
            padding: 12px 25px;
            margin: 10px;
            border-radius: 12px;
            background: #f72585;
            color: white;
            border: none;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 0 0 15px #f72585;
          }
          .btn:hover {
            background: #ff2faa;
            transform: scale(1.08);
            box-shadow: 0 0 25px #ff2faa;
          }

        </style>
      </head>

      <body>

        <audio autoplay loop>
          <source src="https://www.dropbox.com/scl/fi/yqwaxqf1srajykqz9n0s8/chill-music.mp3?dl=1" type="audio/mp3">
        </audio>

        <div class="container">

          <img class="pfp" src="/mnt/data/338b7631-13b2-42b4-bd53-0134ed9d56c4.png" alt="Profile Picture">

          <h1 class="glow">NATHANIEL F. GREGORIO</h1>
          <h2>Section: BSIT BA – 4102</h2>

          <div id="quote"></div>

          <div class="btns">
            <button class="btn" onclick="alert('Stay Hustling!🔥')">Click Me!</button>
            <button class="btn" onclick="location.href='https://facebook.com'">My Facebook</button>
          </div>

        </div>

        <script>
          const text = "Success hits different when you're silent, consistent, and unstoppable.";
          let i = 0;
          function typeWriter() {
            if (i < text.length) {
              document.getElementById("quote").innerHTML += text.charAt(i);
              i++;
              setTimeout(typeWriter, 40);
            }
          }
          typeWriter();
        </script>

      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port \${PORT}`);
});
