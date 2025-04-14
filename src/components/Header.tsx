
import React from 'react';
import { Music, Film, Heart, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex flex-col items-center py-8 md:py-12">
      <div className="flex items-center gap-2 mb-2">
        <Music className="h-8 w-8 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Cine<span className="text-primary">Tune</span>
        </h1>
      </div>
      <p className="text-muted-foreground text-center max-w-[600px] mx-auto">
        Where music and mood define the movie
      </p>
      <div className="flex flex-wrap justify-center items-center gap-2 mt-4 text-muted-foreground">
        <Music className="h-4 w-4" />
        <span>Musical Tone</span>
        <span className="mx-2">•</span>
        <Heart className="h-4 w-4" />
        <span>Emotional Speech</span>
        <span className="mx-2">•</span>
        <Zap className="h-4 w-4" />
        <span>Cinematic Rhythm</span>
      </div>
    </header>
  );
};

export default Header;
