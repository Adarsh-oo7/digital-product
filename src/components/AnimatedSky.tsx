'use client'

import React, { useEffect, useRef } from 'react'

const AnimatedSky: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number | null = null

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const stars: { x: number; y: number; radius: number; color: string; twinkle: number; twinkleSpeed: number }[] = []
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number }[] = []
    let nebulaOffset = 0

    for (let i = 0; i < 400; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 80%)`,
        twinkle: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01
      })
    }

    // Key change: Check ctx inside each draw function
    function drawStar(x: number, y: number, radius: number, color: string, opacity: number) {
      if (!ctx) return; // Crucial null check

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.globalAlpha = opacity
      ctx.fill()
      ctx.globalAlpha = 1
    }

    function drawShootingStar(x: number, y: number, length: number, opacity: number) {
      if (!ctx) return; // Crucial null check

      const angle = Math.atan2(10, length)
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + length * Math.cos(angle), y + length * Math.sin(angle))
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.lineWidth = 2
      ctx.stroke()
    }

    function drawNebula(offset: number) {
        if (!ctx || !canvas) return; // Check BOTH ctx and canvas
    
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const maxRadius = Math.max(centerX, centerY); // Use the larger of width/2 or height/2
    
        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, maxRadius // Use maxRadius here
        );
    
        gradient.addColorStop(0, 'rgba(100, 0, 100, 0.05)');
        gradient.addColorStop(0.5, 'rgba(50, 0, 100, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 50, 0)');
    
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          ctx.ellipse(
            centerX + Math.cos(offset / 100 + i) * 100,
            centerY + Math.sin(offset / 100 + i) * 100,
            100 + Math.sin(offset / 50 + i) * 50,
            50 + Math.cos(offset / 50 + i) * 25,
            0, 0, Math.PI * 2
          );
        }
        ctx.fillStyle = 'rgba(100, 0, 100, 0.05)';
        ctx.fill();
      }

      function animate() {
        if (!ctx || !canvas) return; // Check BOTH ctx and canvas
      
        const width = canvas.width;  // Store width and height locally
        const height = canvas.height; // This is the key change
      
        ctx.clearRect(0, 0, width, height); // Use the local variables
        ctx.fillStyle = '#0c0c1d';
        ctx.fillRect(0, 0, width, height);
      
        drawNebula(nebulaOffset);
        nebulaOffset += 0.5;
      
        stars.forEach(star => {
          star.twinkle += star.twinkleSpeed;
          if (star.twinkle > 1 || star.twinkle < 0) star.twinkleSpeed *= -1;
          const opacity = 0.5 + Math.sin(star.twinkle * Math.PI) * 0.5;
          drawStar(star.x, star.y, star.radius, star.color, opacity);
        });
      
        shootingStars.forEach((star, index) => {
          drawShootingStar(star.x, star.y, star.length, star.opacity);
          star.x += star.speed;
          star.y += star.speed / 2;
          star.opacity -= 0.02;
      
          if (star.opacity <= 0) {
            shootingStars.splice(index, 1);
          }
        });
      
        if (shootingStars.length < 10 && Math.random() < 0.02) {
          shootingStars.push({
            x: Math.random() * width, // Use local width
            y: 0,
            length: Math.random() * 80 + 20,
            speed: Math.random() * 15 + 8,
            opacity: 1
          });
        }
      
        animationFrameId = requestAnimationFrame(animate);
      }

    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

export default AnimatedSky