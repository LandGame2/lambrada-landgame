import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, Unlock, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FinalSafeProps {
  correctSum: number;
}

export function FinalSafe({ correctSum }: FinalSafeProps) {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'wrong' | 'unlocked'>('idle');

  const handleCheck = () => {
    if (parseInt(inputValue) === correctSum) {
      setStatus('unlocked');
      // Audio rimosso come richiesto dall'utente
    } else {
      setStatus('wrong');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <section id="final-challenge" className="space-y-2 mt-16 mb-0 relative">
      <div className="text-center space-y-0">
        <h2 className="text-[28px] sm:text-[64px] font-black text-[#366d4a] uppercase tracking-normal leading-tight">LA CASSAFORTE</h2>
        <p className="text-[#b08865] font-bold text-[14px] sm:text-2xl">Somma tutti i codici trovati per aprire la cassaforte</p>
      </div>

      {/* Container Immagine Cassaforte (Pulita) - Molto più vicina al testo */}
      <div className="relative max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-[#f0bd66] mt-0">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
          style={{ 
            backgroundImage: status === 'unlocked' 
              ? "url('/uploads/diploma_preview.jpg')" 
              : "url('/uploads/Cassaforte1.png')",
            backgroundColor: '#1a1a1a', // Fallback color
            filter: status === 'unlocked' ? 'brightness(1)' : 'brightness(0.9)'
          }}
        />
        
        {/* Overlay con Lucchetto in Basso */}
        <div className="relative z-10 flex items-end justify-center aspect-square p-8">
          <div className={cn(
            "p-5 rounded-full bg-black/40 backdrop-blur-md border-2 border-[#f0bd66] transition-all duration-700",
            status === 'unlocked' ? "scale-110 bg-green-500/80 border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]" : "scale-100",
            status === 'wrong' && "animate-shake border-red-500 bg-red-500/50"
          )}>
            {status === 'unlocked' ? (
              <Unlock className="w-12 h-12 text-white animate-bounce" />
            ) : (
              <Lock className="w-12 h-12 text-[#f0bd66]" />
            )}
          </div>
        </div>
      </div>

      {/* Controlli Esterni (Sotto l'immagine) */}
      <div className="max-w-md mx-auto text-center space-y-6 px-4 relative z-10">
        {status === 'unlocked' ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="space-y-2">
              <h3 className="text-3xl font-black uppercase tracking-widest text-[#366d4a]">COMPLIMENTI!</h3>
              <p className="text-[#b08865] font-bold text-lg">Hai sbloccato il Diploma di HighLamber</p>
            </div>
            <Button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/docs/DIPLOMA_Agliate.pdf';
                link.setAttribute('download', 'DIPLOMA_Agliate.pdf');
                link.setAttribute('target', '_blank');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              size="lg"
              className="w-full bg-[#f0bd66] hover:bg-[#e6b15a] text-[#333] font-black uppercase tracking-widest py-8 text-xl rounded-2xl shadow-xl transition-transform active:scale-95 border-b-4 border-[#d4a04d]"
            >
              SCARICA DIPLOMA
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-[#366d4a] font-bold text-lg">Inserisci la somma totale dei 7 codici:</p>
            <div className="flex flex-col gap-3">
              <Input 
                type="number" 
                placeholder="0000" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-white border-4 border-[#f0bd66] text-[#333] placeholder:text-gray-400 text-center text-3xl font-black h-20 rounded-2xl focus:ring-4 focus:ring-[#f0bd66]/20"
              />
              <Button 
                onClick={handleCheck}
                className="h-20 bg-[#366d4a] hover:bg-[#2d5a3d] text-white font-black uppercase tracking-widest text-2xl rounded-2xl transition-all active:scale-95 shadow-xl border-b-4 border-[#1e3d2a]"
              >
                <span translate="no" className="notranslate">APRI</span>
              </Button>
            </div>
            {status === 'wrong' && (
              <div className="flex items-center justify-center gap-2 text-red-600 font-bold animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5" />
                <span>Codice errato, riprova!</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sherlock Young Image - Staccato dal pulsante APRI e allineato al footer */}
      <div className="flex justify-center mt-8 md:mt-12 overflow-visible pointer-events-none relative z-50">
        <img 
          src="/uploads/sherlock_young.png" 
          alt="Sherlock Young" 
          className="w-72 md:w-96 h-auto drop-shadow-2xl translate-y-6 md:translate-y-10 scale-105 origin-bottom mix-blend-screen"
        />
      </div>
    </section>
  );
}
