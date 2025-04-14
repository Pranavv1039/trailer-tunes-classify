
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { GenrePrediction } from '@/components/GenrePrediction';
import { getMockGenrePredictions, getMockAudioData } from '@/utils/mockData';

interface AudioAnalysisResult {
  audioData: number[] | undefined;
  predictions: GenrePrediction[];
  isAnalyzing: boolean;
  analyzeAudio: (file: File) => void;
  useDemoAudio: () => void;
}

export function useAudioAnalysis(): AudioAnalysisResult {
  const [audioData, setAudioData] = useState<number[] | undefined>(undefined);
  const [predictions, setPredictions] = useState<GenrePrediction[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  // Function to analyze audio file
  const analyzeAudio = async (file: File) => {
    try {
      setIsAnalyzing(true);
      setPredictions([]);
      
      // In a real implementation, we would process the audio file here
      // For now, we'll simulate processing with a delay
      
      // Mock audio processing
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Get mock audio data
      const mockAudioData = getMockAudioData();
      setAudioData(mockAudioData);
      
      // Continue with genre prediction (simulated)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Get random genre predictions based on the file name
      const genreOptions = ['action', 'horror', 'romance', 'random'] as const;
      const randomIndex = Math.floor(Math.random() * genreOptions.length);
      const selectedGenre = genreOptions[randomIndex];
      
      // Get mock genre predictions for randomly selected genre
      const mockPredictions = getMockGenrePredictions(selectedGenre);
      setPredictions(mockPredictions);
      
      // Analysis complete
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis complete",
        description: `Primary genre: ${mockPredictions[0].genre}`,
      });
      
    } catch (error) {
      console.error('Error analyzing audio:', error);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis failed",
        description: "There was an error processing the audio file",
        variant: "destructive",
      });
    }
  };
  
  // Function to use demo audio
  const useDemoAudio = async () => {
    try {
      setIsAnalyzing(true);
      setPredictions([]);
      
      // Simulate loading demo audio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get mock audio data
      const mockAudioData = getMockAudioData();
      setAudioData(mockAudioData);
      
      // Continue with genre prediction (simulated)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Cycle between genre types for the demo
      const genreOptions = ['action', 'horror', 'romance'] as const;
      const randomIndex = Math.floor(Math.random() * genreOptions.length);
      const selectedGenre = genreOptions[randomIndex];
      
      // Get mock genre predictions for a specific genre (rotate between options)
      const mockPredictions = getMockGenrePredictions(selectedGenre);
      setPredictions(mockPredictions);
      
      // Analysis complete
      setIsAnalyzing(false);
      
      toast({
        title: "Demo analysis complete",
        description: `Primary genre: ${mockPredictions[0].genre}`,
      });
      
    } catch (error) {
      console.error('Error in demo analysis:', error);
      setIsAnalyzing(false);
      
      toast({
        title: "Demo analysis failed",
        description: "There was an error in the demo",
        variant: "destructive",
      });
    }
  };

  return {
    audioData,
    predictions,
    isAnalyzing,
    analyzeAudio,
    useDemoAudio
  };
}
