
import React from 'react';
import { Music, Film, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex flex-col items-center py-8 md:py-12">
      <div className="flex items-center gap-2 mb-2">
        <Film className="h-8 w-8 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Cinema<span className="text-primary">Soul</span>
        </h1>
      </div>
      <p className="text-muted-foreground text-center max-w-[600px] mx-auto">
        Discovering the emotional heartbeat of movies through their trailers
      </p>
      <div className="flex items-center gap-2 mt-4 text-muted-foreground">
        <Music className="h-4 w-4" />
        <span>Sonic Analysis</span>
        <span className="mx-2">•</span>
        <Heart className="h-4 w-4" />
        <span>Emotional Mapping</span>
      </div>
    </header>
  );
};

export default Header;
