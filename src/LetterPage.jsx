import React, { useEffect, useRef } from 'react';
import logo from '/assets/logo.png';

export default function LetterPage() {
  const canvasRef = useRef(null);

  // Optional Canvas fallback - uncomment if CSS mask doesn't work
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cfg = {
      cell: 100,
      thickness: 2,
      color: 'rgba(200,210,220,1)'
    };

    function resize() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = cfg.thickness;
      ctx.strokeStyle = cfg.color;
      
      const step = cfg.cell;
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      for (let x = -step * 2; x < w + step * 2; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, -1000);
        ctx.lineTo(x + h + 2000, h + 1000);
        ctx.stroke();
      }
      
      for (let x = -step * 2; x < w + step * 2; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, h + 1000);
        ctx.lineTo(x - h - 2000, -1000);
        ctx.stroke();
      }

      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(0.4, 'rgba(0,0,0,0.75)');
      g.addColorStop(0.75, 'rgba(0,0,0,0.95)');
      
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="letter-page">
      {/* CSS Grid Overlay */}
      <div className="grid-overlay grid-medium" aria-hidden="true"></div>

      {/* Canvas fallback */}
      <canvas 
        ref={canvasRef} 
        className="grid-canvas"
        aria-hidden="true"
      />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="letter-container">
        <div className="content-wrapper">
          <div className="logo-wrapper">
            <img src={logo} alt="Keep Knockin' Logo" className="logo" />
          </div>

          <main id="main-content" className="content">
            <h1 className="main-title">Keep Knockin' – Till the Right Door Opens</h1>

            <p>
              Imagine a world where finding the right job doesn't feel like an endless loop of applications, 
              ghosted emails, and form-filling fatigue. A world where candidates, campuses, and recruiters 
              connect in one place: fast, relevant, and human.
            </p>

            <p>
              No more waiting months for campus placements.<br />
              No more recruiters buried under irrelevant applications.<br />
              No more lost opportunities because of college labels. Just pure skill.
            </p>

            <p className="tagline">
              We're making Gen Z hiring easier, faster, and a lot more fun.
            </p>

            <h2>We're Rebuilding How Hiring Works</h2>
            
            <p>
              Keep Knockin' brings candidates, campuses, and recruiters together to reshape how on-campus 
              and off-campus hiring happens.
            </p>

            <div className="audience-section">
              <h3>🚀 For Candidates</h3>
              <p>
                Find internships and jobs that truly fit you.
              </p>
              <p>
                Get feedback, prep sessions, and join a community that helps you grow, not just apply.
              </p>
              <p>
                <a href="https://chat.whatsapp.com/your-link" className="cta-link">
                  Join our WhatsApp community →
                </a>
              </p>
            </div>

            <div className="audience-section">
              <h3>🏫 For Campuses</h3>
              <p>
                Help your students get noticed by top brands, whether you're a Tier 1 college or a small 
                campus with big dreams.
              </p>
              <p>
                Bring national recruiters straight to your placement drives.
              </p>
              <p>
                ✉️ <a href="mailto:mehul.gulati@keepknockin.in">mehul.gulati@keepknockin.in</a>
              </p>
            </div>

            <div className="audience-section">
              <h3>💼 For Recruiters</h3>
              <p>
                Close roles in under 72 hours with access to 1 million+ active, pre-screened candidates.
              </p>
              <p>
                Cut your hiring costs by over 50% without losing quality.
              </p>
              <p>
                ✉️ <a href="mailto:rahuldhand@keepknockin.in">rahuldhand@keepknockin.in</a>
              </p>
            </div>

            <div className="divider">--------</div>

            <h2 className="closing-title">The Future of Hiring Isn't Coming. We're Building It.</h2>
            
            <p>
              We're not just another job board.
            </p>
            <p>
              We're a movement making hiring smarter, faster, and more human for people who value speed, 
              relevance, and experience.
            </p>
            <p className="final-tagline">
              <strong>Keep Knockin' till the right door opens.</strong>
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
