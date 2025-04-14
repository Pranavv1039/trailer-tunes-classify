
import React from 'react';
import Header from '@/components/Header';
import AudioUploader from '@/components/AudioUploader';
import WaveformVisualizer from '@/components/WaveformVisualizer';
import GenrePrediction from '@/components/GenrePrediction';
import { useAudioAnalysis } from '@/hooks/useAudioAnalysis';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const { 
    audioData, 
    predictions, 
    isAnalyzing, 
    analyzeAudio, 
    useDemoAudio 
  } = useAudioAnalysis();

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-6 max-w-6xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          <div className="lg:col-span-5 space-y-6">
            <AudioUploader 
              onAudioSelected={analyzeAudio} 
              onDemoSelected={useDemoAudio} 
            />
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-lg blur-xl opacity-20"></div>
              <WaveformVisualizer 
                isAnalyzing={isAnalyzing} 
                audioData={audioData} 
              />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <GenrePrediction 
              predictions={predictions} 
              isLoading={isAnalyzing} 
            />
          </div>
        </div>
        
        <Separator className="my-12 opacity-50" />
        
        <div className="text-center text-sm text-muted-foreground mb-6">
          <p>
            TrailerTunesClassify analyzes movie trailer audio to extract music and speech features for genre prediction.
          </p>
          <p className="mt-1">
            This is a demonstration with simulated data. In a real implementation, it would use AI models for audio processing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
