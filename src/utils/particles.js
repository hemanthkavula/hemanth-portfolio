export const initParticles = (canvas, prefersReducedMotion) => {
  if (!canvas || prefersReducedMotion) return () => {};
  const ctx = canvas.getContext("2d");
  const particleCount = 28;
  let animationFrame;

  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  };

  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * canvas.offsetWidth,
    y: Math.random() * canvas.offsetHeight,
    radius: 1 + Math.random() * 2.4,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    alpha: 0.2 + Math.random() * 0.25,
  }));

  const render = () => {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
      ctx.beginPath();
      ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    animationFrame = requestAnimationFrame(render);
  };

  resize();
  render();
  window.addEventListener("resize", resize);

  return () => {
    window.removeEventListener("resize", resize);
    cancelAnimationFrame(animationFrame);
  };
};
