
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2, Music, MessageSquareText } from 'lucide-react';

interface WaveformVisualizerProps {
  isAnalyzing: boolean;
  audioData?: number[];
}

const WaveformVisualizer = ({ isAnalyzing, audioData = [] }: WaveformVisualizerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (isAnalyzing) {
      // Draw animated loading waveform
      renderLoadingWaveform(ctx, canvas.width, canvas.height);
    } else if (audioData.length > 0) {
      // Draw actual waveform based on audio data
      renderAudioWaveform(ctx, canvas.width, canvas.height, audioData);
    } else {
      // Draw placeholder waveform
      renderPlaceholderWaveform(ctx, canvas.width, canvas.height);
    }
    
    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isAnalyzing, audioData]);
  
  const renderLoadingWaveform = (
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number
  ) => {
    ctx.clearRect(0, 0, width, height);
    
    const centerY = height / 2;
    const now = Date.now() / 1000;
    const barWidth = width / 100;
    const barSpacing = 2;
    
    ctx.fillStyle = 'hsl(var(--primary) / 0.6)';
    
    // Draw animated bars
    for (let i = 0; i < width; i += barWidth + barSpacing) {
      // Create a wave pattern that moves with time
      const amplitude = Math.sin(i / 50 + now * 3) * 20 + 10;
      // Add some random variation
      const randomHeight = amplitude * (0.8 + Math.random() * 0.4);
      
      ctx.fillRect(
        i, 
        centerY - randomHeight / 2, 
        barWidth, 
        randomHeight
      );
    }
    
    // Request next animation frame
    requestAnimationFrame(() => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) renderLoadingWaveform(ctx, width, height);
      }
    });
  };
  
  const renderAudioWaveform = (
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number,
    audioData: number[]
  ) => {
    ctx.clearRect(0, 0, width, height);
    
    const centerY = height / 2;
    const barWidth = Math.max(1, width / audioData.length);
    
    ctx.fillStyle = 'hsl(var(--primary))';
    
    // Draw waveform bars
    for (let i = 0; i < audioData.length; i++) {
      const x = i * barWidth;
      const barHeight = Math.max(2, audioData[i] * height / 2);
      
      ctx.fillRect(
        x, 
        centerY - barHeight / 2, 
        barWidth - 1, 
        barHeight
      );
    }
  };
  
  const renderPlaceholderWaveform = (
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number
  ) => {
    ctx.clearRect(0, 0, width, height);
    
    const centerY = height / 2;
    const barWidth = width / 100;
    const barSpacing = 2;
    
    ctx.fillStyle = 'hsl(var(--muted) / 0.5)';
    
    // Draw static placeholder bars
    for (let i = 0; i < width; i += barWidth + barSpacing) {
      // Create a small static wave pattern
      const barHeight = Math.sin(i / 20) * 10 + 5;
      
      ctx.fillRect(
        i, 
        centerY - barHeight / 2, 
        barWidth, 
        barHeight
      );
    }
  };

  return (
    <Card className="w-full h-[180px] bg-card/60 relative overflow-hidden">
      <CardContent className="p-0 h-full">
        <div className="audio-wave h-full w-full">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full"
          />
          
          {/* Overlay icons */}
          <div className="absolute top-4 right-4 flex gap-3">
            <div className="bg-background/80 rounded-full p-1.5 backdrop-blur-sm">
              <Volume2 className="h-4 w-4 text-secondary" />
            </div>
            <div className="bg-background/80 rounded-full p-1.5 backdrop-blur-sm">
              <Music className="h-4 w-4 text-primary" />
            </div>
            <div className="bg-background/80 rounded-full p-1.5 backdrop-blur-sm">
              <MessageSquareText className="h-4 w-4 text-accent" />
            </div>
          </div>
          
          {isAnalyzing && (
            <div className="absolute bottom-4 left-4 bg-background/80 text-xs px-2 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary pulse"></div>
              <span>Analyzing audio...</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WaveformVisualizer;
