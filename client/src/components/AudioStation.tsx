import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface AudioStationProps {
  id: number;
  title: string;
  audioUrl: string;
}

export function AudioStation({ id, title, audioUrl, children }: AudioStationProps & { children?: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Card className="bg-[#f0bd66] border-[#b08865] shadow-md">
        <CardContent className="p-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Cerchio numero 48px - Più respiro intorno */}
            <div className="bg-white text-[#366d4a] w-[48px] h-[48px] rounded-full flex items-center justify-center text-lg font-black shadow-sm flex-shrink-0 border-2 border-[#366d4a]/5">
              {id}
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="font-black text-[13px] text-[#366d4a] leading-none uppercase tracking-tight">{title}</h4>
              <p className="text-[9px] uppercase tracking-[0.1em] text-[#366d4a]/60 font-black leading-none mt-1.5">Audio-Racconto di HighLamber</p>
            </div>
          </div>
          
          {/* Pulsante Play 48px - Più respiro intorno */}
          <Button 
            size="icon" 
            onClick={togglePlay}
            className="rounded-full w-[48px] h-[48px] bg-[#366d4a] hover:bg-[#2d5a3d] text-white shadow-md flex-shrink-0 transition-transform active:scale-95"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </Button>

          <audio 
            ref={audioRef} 
            src={audioUrl} 
            onEnded={() => setIsPlaying(false)}
            className="hidden" 
          />
        </CardContent>
      </Card>
      {children}
    </div>
  );
}
