"use client";

import { useRef, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

// Helper function to draw bars with rounded tops
function roundedTopRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
    ctx.beginPath();
    ctx.moveTo(x, y + height);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height);
    ctx.closePath();
    ctx.fill();
}

function VisualizerBars({ analyser, isPlaying }: { analyser: AnalyserNode | null, isPlaying: boolean }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const canvasCtx = canvas.getContext('2d');
        if (!canvasCtx) return;

        let animationFrameId: number;

        const render = () => {
            if (analyser && isPlaying) {
                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                analyser.getByteFrequencyData(dataArray);

                canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

                const barWidth = 3;
                const barGap = 2;
                const cornerRadius = 1.5;
                let x = 0;

                                const primaryColor = getComputedStyle(canvas).getPropertyValue('--primary');
                canvasCtx.fillStyle = `hsl(${primaryColor.trim()})`; // Use primary color from theme

                const numBars = Math.floor(canvas.width / (barWidth + barGap));

                for (let i = 0; i < numBars; i++) {
                    const dataIndex = Math.floor(i * (bufferLength / numBars));
                    const barHeight = (dataArray[dataIndex] / 255) * canvas.height;
                    if (barHeight > 0) {
                        roundedTopRect(canvasCtx, x, canvas.height - barHeight, barWidth, barHeight, cornerRadius);
                    }
                    x += barWidth + barGap;
                }
            } else {
                canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            }
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [analyser, isPlaying]);

    return <canvas ref={canvasRef} width="150" height="44" />;
}

export function Visualizer({ analyser, isPlaying, onClick }: { analyser: AnalyserNode | null, isPlaying: boolean, onClick: () => void }) {
    return (
        <div onClick={onClick} className="visualizer-container">
            <div className="music-player-button">
                                {isPlaying ? <Moon size={24} fill="currentColor" /> : <Sun size={24} fill="currentColor" />}
            </div>
            <div className="visualizer-canvas">
                <VisualizerBars analyser={analyser} isPlaying={isPlaying} />
            </div>
        </div>
    );
}
