import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnigmaCardProps {
  id: number;
  title: string;
  question: string;
  correctAnswer: string;
  curiosityAudioUrl?: string;
}

export function EnigmaCard({ id, title, question, correctAnswer, curiosityAudioUrl }: EnigmaCardProps) {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [attempts, setAttempts] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const checkAnswer = () => {
    if (answer.trim() === correctAnswer) {
      setStatus('correct');
    } else {
      setStatus('wrong');
      setAttempts(prev => prev + 1);
    }
  };

  const showSolution = () => {
    setAnswer(correctAnswer);
    setStatus('correct');
  };

  return (
    <Card className={cn(
      "transition-all duration-300 border-2",
      status === 'correct' ? "border-green-500 bg-green-50/10" : 
      status === 'wrong' ? "border-red-500 bg-red-50/10" : 
      "border-border"
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          {/* Cerchio Enigma: Ocra con numero Antracite */}
          <div className="bg-[#f0bd66] text-[#333333] w-[48px] h-[48px] rounded-full flex items-center justify-center text-lg font-black shadow-md flex-shrink-0">
            {id}
          </div>
          
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[20px] uppercase tracking-[0.05em] text-[#b08865] font-black leading-none mb-1">Enigma</span>
            <h3 className="text-[20px] md:text-[22px] font-black text-[#366d4a] leading-tight uppercase tracking-[0.025em]">
              {title}
            </h3>
          </div>

          <div className="flex-shrink-0">
            {status === 'correct' && <CheckCircle2 className="text-green-500 w-8 h-8 animate-in zoom-in" />}
            {status === 'wrong' && <XCircle className="text-red-500 w-8 h-8 animate-in shake" />}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground italic">"{question}"</p>
        <div className="flex gap-2">
          <Input 
            type="text" 
            placeholder="Risposta numerica..." 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={status === 'correct'}
            className={cn("flex-1", status === 'correct' && "bg-green-100/50 font-bold text-green-700")}
          />
          
          {status === 'correct' && curiosityAudioUrl ? (
            <Button 
              onClick={() => {
                if (audioRef.current) {
                  if (isPlaying) {
                    audioRef.current.pause();
                  } else {
                    audioRef.current.play();
                  }
                  setIsPlaying(!isPlaying);
                }
              }}
              className="bg-[#b08865] hover:bg-[#a07855] text-white border-2 border-[#366d4a] font-black uppercase tracking-wider rounded-xl shadow-lg transition-all animate-in zoom-in"
            >
              {isPlaying ? "PAUSA" : "CURIOSO?"}
              <audio 
                ref={audioRef} 
                src={curiosityAudioUrl} 
                onEnded={() => setIsPlaying(false)}
              />
            </Button>
          ) : (
            <>
              {attempts >= 3 && status !== 'correct' ? (
                <Button 
                  onClick={showSolution}
                  className="bg-[#f0bd66] hover:bg-[#e6b15a] text-[#333] border-2 border-[#366d4a] font-black uppercase tracking-wider rounded-xl shadow-lg transition-all animate-in zoom-in"
                >
                  Soluzione?
                </Button>
              ) : (
                <Button 
                  onClick={checkAnswer} 
                  variant={status === 'correct' ? "outline" : "default"}
                  disabled={status === 'correct'}
                  className={cn(status === 'correct' && "bg-green-500 text-white hover:bg-green-500 opacity-100")}
                >
                  {status === 'correct' ? "CORRETTO" : "Verifica"}
                </Button>
              )}
            </>
          )}
        </div>
        {status === 'correct' && (
          <p className="text-green-600 text-sm font-medium animate-in fade-in slide-in-from-top-1">
            Ottimo lavoro! {curiosityAudioUrl && "Clicca su \"CURIOSO?\" se vuoi saperne di più."}
          </p>
        )}
        {status === 'wrong' && (
          <p className="text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-1">
            Sbagliato. Riprova!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
