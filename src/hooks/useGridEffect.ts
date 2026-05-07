import { useRef, useEffect } from 'react';
import { noise, seedNoise } from '@/lib/noise';

interface GridEffectOptions {
  step?: number;
}

export function useGridEffect(canvasRef: React.RefObject<HTMLCanvasElement | null>, options: GridEffectOptions = {}) {
  const animFrameRef = useRef<number>(0);
  const isRunningRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    seedNoise(Math.random());

    const step = options.step ?? 24;
    let phase = 0;
    let t = 0;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    // Make dimensions even
    width = Math.floor(width / 2) * 2;
    height = Math.floor(height / 2) * 2;
    canvas.width = width;
    canvas.height = height;

    // Precompute grid lines
    const lines: [number, number, number, number][] = [];

    for (let x = 0; x <= width; x += step) {
      for (let y = 0; y <= height; y += step) {
        const cx = x - width / 2;
        const cy = y - height / 2;
        const dist = Math.sqrt(cx * cx + cy * cy);
        const diagonal = (cx - cy) / 10;

        const a1 = noise(cx / 200, cy / 200, phase) * step / 2;
        const a2 = noise(cx / 100 - diagonal, cy / 100 + t, phase + dist / 300) * step;
        const a3 = noise(dist / 300, diagonal / 100, phase + t) * step;
        const a4 = noise(cy / 100, diagonal / 100, phase + t / 2) * step;
        const field = (a1 + a2 + a3 + a4) / 4;

        lines.push([x, y, x + field, y + field]);
      }
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Radial gradient glow
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2,
        Math.min(width, height) * 0.15,
        width / 2, height / 2,
        Math.max(width, height) * 0.75
      );
      gradient.addColorStop(0, 'rgba(107, 123, 62, 0.08)');
      gradient.addColorStop(1, 'rgba(107, 123, 62, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw lines
      ctx.strokeStyle = 'rgba(26, 26, 26, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();

      // Recompute field values with updated phase
      let lineIdx = 0;
      for (let x = 0; x <= width; x += step) {
        for (let y = 0; y <= height; y += step) {
          const cx = x - width / 2;
          const cy = y - height / 2;
          const dist = Math.sqrt(cx * cx + cy * cy);
          const diagonal = (cx - cy) / 10;

          const a1 = noise(cx / 200, cy / 200, phase) * step / 2;
          const a2 = noise(cx / 100 - diagonal, cy / 100 + t, phase + dist / 300) * step;
          const a3 = noise(dist / 300, diagonal / 100, phase + t) * step;
          const a4 = noise(cy / 100, diagonal / 100, phase + t / 2) * step;
          const field = (a1 + a2 + a3 + a4) / 4;

          lines[lineIdx] = [x, y, x + field, y + field];
          lineIdx++;
        }
      }

      for (const line of lines) {
        ctx.moveTo(line[0], line[1]);
        ctx.lineTo(line[2], line[3]);
      }
      ctx.stroke();

      phase += 0.01;

      if (isRunningRef.current) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    const start = () => {
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        animate();
      }
    };

    const stop = () => {
      isRunningRef.current = false;
      cancelAnimationFrame(animFrameRef.current);
    };

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.contentRect;
        let newWidth = Math.floor(rect.width / 2) * 2;
        let newHeight = Math.floor(rect.height / 2) * 2;
        if (newWidth !== width || newHeight !== height) {
          width = newWidth;
          height = newHeight;
          canvas.width = width;
          canvas.height = height;
          // Recompute lines
          lines.length = 0;
          for (let x = 0; x <= width; x += step) {
            for (let y = 0; y <= height; y += step) {
              const cx = x - width / 2;
              const cy = y - height / 2;
              const dist = Math.sqrt(cx * cx + cy * cy);
              const diagonal = (cx - cy) / 10;
              const a1 = noise(cx / 200, cy / 200, phase) * step / 2;
              const a2 = noise(cx / 100 - diagonal, cy / 100 + t, phase + dist / 300) * step;
              const a3 = noise(dist / 300, diagonal / 100, phase + t) * step;
              const a4 = noise(cy / 100, diagonal / 100, phase + t / 2) * step;
              const field = (a1 + a2 + a3 + a4) / 4;
              lines.push([x, y, x + field, y + field]);
            }
          }
        }
      }
    });

    resizeObserver.observe(canvas);

    // Intersection observer
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
          } else {
            stop();
          }
        }
      },
      { threshold: 0.1 }
    );

    intersectionObserver.observe(canvas);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [options.step]);
}
