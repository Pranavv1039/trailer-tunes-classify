
import React from 'react';
import { Music, Film, Wand2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex flex-col items-center py-8 md:py-12">
      <div className="flex items-center gap-2 mb-2">
        <Film className="h-8 w-8 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          TrailerTunes<span className="text-primary">Classify</span>
        </h1>
      </div>
      <p className="text-muted-foreground text-center max-w-[600px] mx-auto">
        Extract music type and speech emotion from movie trailers to predict genres
      </p>
      <div className="flex items-center gap-2 mt-4 text-muted-foreground">
        <Music className="h-4 w-4" />
        <span>Music Analysis</span>
        <span className="mx-2">•</span>
        <Wand2 className="h-4 w-4" />
        <span>Genre Prediction</span>
      </div>
    </header>
  );
};

export default Header;
