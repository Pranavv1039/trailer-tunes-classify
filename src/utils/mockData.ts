
import { GenrePrediction } from '@/components/GenrePrediction';

// Mock audio data for visualization
export const getMockAudioData = (): number[] => {
  const audioData: number[] = [];
  
  // Generate 100 data points
  for (let i = 0; i < 100; i++) {
    // Create a more interesting pattern with some variations
    const baseValue = Math.sin(i / 10) * 0.5 + 0.5; // Base sine wave (0-1)
    const variation1 = Math.sin(i / 5) * 0.2; // First variation
    const variation2 = Math.sin(i / 20) * 0.3; // Second variation
    
    // Add some randomness
    const noise = Math.random() * 0.2;
    
    // Combine all components and ensure value is between 0.1 and 1
    let value = baseValue + variation1 + variation2 + noise;
    value = Math.max(0.1, Math.min(value, 1));
    
    audioData.push(value);
  }
  
  return audioData;
};

// Mock genre predictions
export const getMockGenrePredictions = (type: 'action' | 'horror' | 'romance' | 'random' = 'random'): GenrePrediction[] => {
  switch (type) {
    case 'action':
      return [
        {
          genre: 'Action',
          confidence: 0.87,
          musicFeatures: {
            tempo: 'Fast (140+ BPM)',
            key: 'D Minor',
            energy: 0.92,
            mood: 'Intense, Dramatic'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Tension', level: 0.81 },
              { emotion: 'Determination', level: 0.74 },
              { emotion: 'Urgency', level: 0.68 }
            ],
            characteristics: ['Forceful', 'Commanding', 'Dynamic']
          }
        },
        {
          genre: 'Thriller',
          confidence: 0.63,
          musicFeatures: {
            tempo: 'Medium (110-130 BPM)',
            key: 'C Minor',
            energy: 0.76,
            mood: 'Suspenseful'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Anxiety', level: 0.62 },
              { emotion: 'Intensity', level: 0.58 },
              { emotion: 'Fear', level: 0.45 }
            ],
            characteristics: ['Tense', 'Dramatic', 'Urgent']
          }
        },
        {
          genre: 'Science Fiction',
          confidence: 0.48,
          musicFeatures: {
            tempo: 'Variable (90-140 BPM)',
            key: 'B Minor',
            energy: 0.72,
            mood: 'Mysterious, Epic'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Wonder', level: 0.51 },
              { emotion: 'Fear', level: 0.43 },
              { emotion: 'Determination', level: 0.39 }
            ],
            characteristics: ['Futuristic', 'Dramatic', 'Ethereal']
          }
        },
        {
          genre: 'Adventure',
          confidence: 0.34,
          musicFeatures: {
            tempo: 'Medium-Fast (120-140 BPM)',
            key: 'E Minor',
            energy: 0.81,
            mood: 'Heroic, Exciting'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Excitement', level: 0.46 },
              { emotion: 'Determination', level: 0.44 },
              { emotion: 'Courage', level: 0.41 }
            ],
            characteristics: ['Bold', 'Inspirational', 'Dynamic']
          }
        }
      ];
      
    case 'horror':
      return [
        {
          genre: 'Horror',
          confidence: 0.91,
          musicFeatures: {
            tempo: 'Slow to Medium (60-100 BPM)',
            key: 'F# Minor',
            energy: 0.78,
            mood: 'Eerie, Unsettling'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Fear', level: 0.89 },
              { emotion: 'Distress', level: 0.75 },
              { emotion: 'Anxiety', level: 0.72 }
            ],
            characteristics: ['Whispering', 'Trembling', 'Screaming']
          }
        },
        {
          genre: 'Thriller',
          confidence: 0.64,
          musicFeatures: {
            tempo: 'Variable (80-120 BPM)',
            key: 'C Minor',
            energy: 0.68,
            mood: 'Tense, Suspenseful'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Tension', level: 0.69 },
              { emotion: 'Suspicion', level: 0.61 },
              { emotion: 'Urgency', level: 0.54 }
            ],
            characteristics: ['Intense', 'Controlled', 'Urgent']
          }
        },
        {
          genre: 'Mystery',
          confidence: 0.41,
          musicFeatures: {
            tempo: 'Slow (60-90 BPM)',
            key: 'G Minor',
            energy: 0.52,
            mood: 'Mysterious, Foreboding'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Curiosity', level: 0.48 },
              { emotion: 'Apprehension', level: 0.45 },
              { emotion: 'Confusion', level: 0.38 }
            ],
            characteristics: ['Questioning', 'Cautious', 'Thoughtful']
          }
        },
        {
          genre: 'Supernatural',
          confidence: 0.32,
          musicFeatures: {
            tempo: 'Varied (70-110 BPM)',
            key: 'D Minor',
            energy: 0.64,
            mood: 'Otherworldly, Unsettling'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Awe', level: 0.41 },
              { emotion: 'Fear', level: 0.37 },
              { emotion: 'Disbelief', level: 0.34 }
            ],
            characteristics: ['Ethereal', 'Mystical', 'Ominous']
          }
        }
      ];
      
    case 'romance':
      return [
        {
          genre: 'Romance',
          confidence: 0.84,
          musicFeatures: {
            tempo: 'Medium (90-110 BPM)',
            key: 'A Major',
            energy: 0.56,
            mood: 'Emotional, Tender'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Affection', level: 0.82 },
              { emotion: 'Warmth', level: 0.71 },
              { emotion: 'Vulnerability', level: 0.65 }
            ],
            characteristics: ['Intimate', 'Gentle', 'Passionate']
          }
        },
        {
          genre: 'Drama',
          confidence: 0.58,
          musicFeatures: {
            tempo: 'Varied (80-120 BPM)',
            key: 'G Major',
            energy: 0.61,
            mood: 'Emotional, Reflective'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Sadness', level: 0.62 },
              { emotion: 'Hope', level: 0.54 },
              { emotion: 'Longing', level: 0.48 }
            ],
            characteristics: ['Emotional', 'Nuanced', 'Expressive']
          }
        },
        {
          genre: 'Comedy',
          confidence: 0.37,
          musicFeatures: {
            tempo: 'Medium-Fast (100-130 BPM)',
            key: 'C Major',
            energy: 0.68,
            mood: 'Light, Playful'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Joy', level: 0.45 },
              { emotion: 'Amusement', level: 0.42 },
              { emotion: 'Excitement', level: 0.38 }
            ],
            characteristics: ['Humorous', 'Light', 'Witty']
          }
        },
        {
          genre: 'Musical',
          confidence: 0.24,
          musicFeatures: {
            tempo: 'Variable (90-140 BPM)',
            key: 'D Major',
            energy: 0.73,
            mood: 'Uplifting, Emotional'
          },
          speechFeatures: {
            emotions: [
              { emotion: 'Excitement', level: 0.36 },
              { emotion: 'Joy', level: 0.32 },
              { emotion: 'Passion', level: 0.28 }
            ],
            characteristics: ['Melodic', 'Expressive', 'Dynamic']
          }
        }
      ];
      
    case 'random':
    default:
      // Generate a random set of predictions
      const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Thriller', 'Romance', 'Science Fiction', 'Adventure'];
      const randomIndex = Math.floor(Math.random() * genres.length);
      
      // Recursively call with a specific type based on random genre
      switch (genres[randomIndex]) {
        case 'Action':
          return getMockGenrePredictions('action');
        case 'Horror':
          return getMockGenrePredictions('horror');
        case 'Romance':
          return getMockGenrePredictions('romance');
        default:
          return getMockGenrePredictions('action');
      }
  }
};
