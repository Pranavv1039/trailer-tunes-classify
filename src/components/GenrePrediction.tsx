import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Info } from 'lucide-react';

export interface GenrePrediction {
  genre: string;
  confidence: number;
  musicFeatures: {
    tempo: string;
    key: string;
    energy: number;
    mood: string;
  };
  speechFeatures: {
    emotions: {
      emotion: string;
      level: number;
    }[];
    characteristics: string[];
  };
}

interface GenrePredictionProps {
  predictions: GenrePrediction[];
  isLoading: boolean;
}

const GenrePrediction = ({ predictions, isLoading }: GenrePredictionProps) => {
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary pulse"></div>
            Predicting genres...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-5 w-1/3 bg-muted rounded animate-pulse"></div>
                <div className="h-3 w-full bg-muted rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (predictions.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Genre Predictions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-muted p-3 mb-4">
              <Info className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-1">No predictions yet</h3>
            <p className="text-muted-foreground max-w-md">
              Upload a trailer audio file or try the demo to see genre predictions based on music and speech analysis
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Sort predictions by confidence
  const sortedPredictions = [...predictions].sort((a, b) => b.confidence - a.confidence);
  const topPrediction = sortedPredictions[0];

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Genre Predictions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Top prediction */}
          <div className="bg-muted/20 rounded-lg p-4 border border-primary/20">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  {topPrediction.genre}
                </h3>
                <p className="text-muted-foreground text-sm">Primary genre prediction</p>
              </div>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm">
                {Math.round(topPrediction.confidence * 100)}% confidence
              </Badge>
            </div>
            
            <Separator className="my-3 bg-muted/50" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Music features */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Music Features</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-background/50 p-2 rounded-md">
                      <div className="text-xs text-muted-foreground">Tempo</div>
                      <div className="font-medium">{topPrediction.musicFeatures.tempo}</div>
                    </div>
                    <div className="bg-background/50 p-2 rounded-md">
                      <div className="text-xs text-muted-foreground">Key</div>
                      <div className="font-medium">{topPrediction.musicFeatures.key}</div>
                    </div>
                  </div>
                  <div className="bg-background/50 p-2 rounded-md">
                    <div className="text-xs text-muted-foreground mb-1">Energy</div>
                    <Progress value={topPrediction.musicFeatures.energy * 100} className="h-1.5" />
                  </div>
                  <div className="bg-background/50 p-2 rounded-md">
                    <div className="text-xs text-muted-foreground">Mood</div>
                    <div className="font-medium">{topPrediction.musicFeatures.mood}</div>
                  </div>
                </div>
              </div>
              
              {/* Speech features */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Speech Emotions</h4>
                <div className="space-y-2">
                  {topPrediction.speechFeatures.emotions.map((emotion, index) => (
                    <div key={index} className="bg-background/50 p-2 rounded-md">
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-xs text-muted-foreground">{emotion.emotion}</div>
                        <div className="text-xs">{Math.round(emotion.level * 100)}%</div>
                      </div>
                      <Progress value={emotion.level * 100} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Other predictions */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Other Possible Genres</h3>
            
            {sortedPredictions.slice(1, 4).map((prediction, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-md bg-muted/10">
                <div className="flex items-center gap-3">
                  <div className="text-lg font-medium">{prediction.genre}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Progress 
                    value={prediction.confidence * 100} 
                    className="w-24 h-1.5"
                  />
                  <span className="text-sm text-muted-foreground w-10 text-right">
                    {Math.round(prediction.confidence * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GenrePrediction;
