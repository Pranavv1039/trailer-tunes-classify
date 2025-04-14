
import React, { useState } from 'react';
import { Upload, FileAudio, Play, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface AudioUploaderProps {
  onAudioSelected: (audioFile: File) => void;
  onDemoSelected: () => void;
}

const AudioUploader = ({ onAudioSelected, onDemoSelected }: AudioUploaderProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check if the file is an audio file
      if (!file.type.startsWith('audio/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio file (MP3, WAV, etc.)",
          variant: "destructive"
        });
        return;
      }
      
      setSelectedFile(file);
      onAudioSelected(file);
      
      toast({
        title: "Audio uploaded",
        description: `${file.name} has been selected for analysis`,
      });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDemoClick = () => {
    setSelectedFile(null);
    onDemoSelected();
    
    toast({
      title: "Demo mode activated",
      description: "Using sample trailer audio for analysis",
    });
  };

  return (
    <Card className="w-full border-dashed border-2 bg-card/50">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-4">
          <input
            type="file"
            accept="audio/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          
          <div className="rounded-full bg-muted p-3">
            {selectedFile ? (
              <CheckCircle className="h-8 w-8 text-primary" />
            ) : (
              <FileAudio className="h-8 w-8 text-primary" />
            )}
          </div>
          
          {selectedFile ? (
            <div className="text-center">
              <p className="font-medium mb-1">{selectedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="font-medium mb-1">Upload trailer audio</p>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop or select an audio file
              </p>
            </div>
          )}
          
          <div className="flex gap-3">
            <Button onClick={handleUploadClick} className="gap-2">
              <Upload className="h-4 w-4" />
              {selectedFile ? "Change file" : "Select file"}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleDemoClick}
              className="gap-2"
            >
              <Play className="h-4 w-4" />
              Try demo
            </Button>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
            <Info className="h-3.5 w-3.5" />
            <span>Supports MP3, WAV, OGG (max 10MB)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioUploader;
