import React from 'react';
import { EnigmaCard } from '@/components/EnigmaCard';
import { AudioStation } from '@/components/AudioStation';
import { FinalSafe } from '@/components/FinalSafe';
import { Button } from '@/components/ui/button';
import { Map as MapIcon, Compass, Info, ExternalLink } from 'lucide-react';

export default function Home() {
  // Enigmi con URL audio corretti e unici (Voce del Nonno)
  const enigmas = [
    { 
      id: 1, 
      title: "LE ALI DEL RICORDO", 
      question: "Dove un monumento racconta storie di coraggio e libertà c’è un rapace che osserva tutti dall’alto. Il suo nome cela il numero che cercate: contate le sue lettere.", 
      answer: "6", 
      curiosityAudioUrl: "https://media.easy-peasy.ai/tts/0b50ecfe-ef84-489e-9bf0-d9b08842145d/e2e7f1c2-e65b-48d0-aa8c-35fb83afa487.mp3" 
    },
    { 
      id: 2, 
      title: "IL MISTERO DEGLI ANTICHI NUMERI", 
      question: "Esegui il calcolo: (Numero dei SANTI in facciata × ANNO ristrutturazione sulla pietra) - Numero COLONNE centrali nella cripta.", 
      answer: "3782", 
      curiosityAudioUrl: "https://media.easy-peasy.ai/tts/0b50ecfe-ef84-489e-9bf0-d9b08842145d/b55e2491-bbe5-4c0f-a972-555927a6ff9a.mp3" 
    },
    { 
      id: 3, 
      title: "IL SEGRETO DEL BATTISTERO", 
      question: "Qual è la differenza tra il numero dei lati del battistero contati fuori e quelli che vedi all’interno?", 
      answer: "1", 
      curiosityAudioUrl: "https://media.easy-peasy.ai/tts/0b50ecfe-ef84-489e-9bf0-d9b08842145d/99b5e681-7cc0-47c2-b74c-f2e065ae0c52.mp3" 
    },
    { 
      id: 4, 
      title: "LE STATUE DI VILLA STANGA", 
      question: "Scrutando dai due lati del cancello, contate quante statue vedete (attenzione, non è il 7).", 
      answer: "9", 
      curiosityAudioUrl: "https://media.easy-peasy.ai/tts/0b50ecfe-ef84-489e-9bf0-d9b08842145d/cb25e22d-9daa-43b9-8a92-8bb71711a459.mp3" 
    },
    { 
      id: 5, 
      title: "L’INCISIONE DEL CIPPO DI PIETRA", 
      question: "Trova il numero di chilometri che mancano a Vergo sul cippo e moltiplicalo per cento.", 
      answer: "145", 
      curiosityAudioUrl: "https://media.easy-peasy.ai/tts/0b50ecfe-ef84-489e-9bf0-d9b08842145d/6b5bb5c7-69fb-437b-91f1-fb2159bfa626.mp3" 
    },
    { 
      id: 6, 
      title: "LA FILASTROCCA DEL PONTE", 
      question: "Conta le campate del vecchio ponte di Realdino (senza diventare ansioso!).", 
      answer: "2", 
      curiosityAudioUrl: "https://media.easy-peasy.ai/tts/0b50ecfe-ef84-489e-9bf0-d9b08842145d/3943b91b-9d4c-43c5-aff7-f5299cc7708f.mp3" 
    },
    { 
      id: 7, 
      title: "IL NUMERO DEI MOSTRI DEI GORGHI", 
      question: "Secondo le storie leggendarie, quante erano in tutto le sorelle-mostro (Gorgoni), Medusa compresa?", 
      answer: "3", 
      curiosityAudioUrl: "https://media.easy-peasy.ai/tts/0b50ecfe-ef84-489e-9bf0-d9b08842145d/e0926b3e-f866-4788-b1a3-228ecc3704c4.mp3" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Header with Background Image */}
      <header className="relative h-[450px] flex items-center justify-center overflow-hidden border-b-8 border-[#f0bd66]">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://media.easy-peasy.ai/0b50ecfe-ef84-489e-9bf0-d9b08842145d/67d657dc-aa69-498b-b5f2-6f32965a193b.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#366d4a]/30" />
        </div>
        
        <div className="relative z-10 text-center space-y-2 px-4">
          <div className="flex justify-center mb-4">
             <div className="bg-[#f0bd66] p-4 rounded-full shadow-2xl">
               <Compass className="w-12 h-12 md:w-16 md:h-16 text-[#366d4a]" />
             </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-normal text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Il Codice Segreto
            <br />
            <span className="text-[#f0bd66]">dei Numeri Dimenticati</span>
          </h1>
          <div className="inline-block bg-[#366d4a]/80 backdrop-blur-sm px-6 py-2 rounded-full border-4 border-[#f0bd66] mt-6 shadow-lg">
            <p 
              translate="no" 
              className="notranslate text-sm md:text-lg text-[#f0bd66] font-black uppercase tracking-[0.3em]"
            >
              LandGame Machine
            </p>
          </div>

          <p className="text-white font-bold text-lg md:text-xl max-w-xs md:max-w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mt-4 mx-auto text-center leading-relaxed italic">
            Percorso digitale, Enigmi e Risposte,
            <br />
            Racconti e Cassaforte. Tutto qui.
          </p>
        </div>
      </header>

      <main className="flex-1 container py-8 space-y-12">
        
        {/* Map Section */}
        <section id="map" className="space-y-4">
          <div className="flex flex-col items-center text-center mb-6 px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              <MapIcon className="text-[#366d4a] w-16 h-16 md:w-10 md:h-10 shrink-0" />
              <h2 className="text-2xl md:text-3xl font-black text-[#366d4a] tracking-tight text-center">Il Percorso della Tua Avventura</h2>
            </div>
            <p className="text-[#366d4a] font-bold text-lg md:text-xl mt-3 italic w-full text-center">
              — Partenza: Agliate, Via Pascoli
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button 
              asChild
              className="w-[310px] sm:w-auto bg-[#366d4a] hover:bg-[#2d5a3d] text-[#f0bd66] font-black uppercase tracking-tighter px-6 py-6 rounded-2xl shadow-lg transition-transform active:scale-95 text-xs md:text-sm"
            >
              <a href="/docs/Enigmi_HighLamber.pdf" target="_blank" download className="flex items-center justify-center w-full">
                Scarica Enigmi (PDF)
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="w-[310px] sm:w-auto border-2 border-[#366d4a] text-[#366d4a] hover:bg-[#366d4a] hover:text-[#f0bd66] font-black uppercase tracking-tighter px-6 py-6 rounded-2xl shadow-lg transition-transform active:scale-95 text-xs md:text-sm"
            >
              <a href="/docs/Mappa_Agliate.jpg" target="_blank" download className="flex items-center justify-center w-full text-center">
                Scarica Mappa Cartacea
              </a>
            </Button>
          </div>
          <div className="aspect-[3/4] md:aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl bg-muted flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1VRrs8g23v0sg2GXAlKhZfkrbMy3Wwsk" 
              width="100%" 
              height="100%" 
              className="border-none"
              title="Mappa del Percorso"
            ></iframe>
          </div>
        </section>

        {/* Personaggio: Mago Agliate - Distanze calibrate a 45px sopra e sotto */}
        <div className="flex justify-center mt-[45px] pb-0">
          <img 
            src="/uploads/mago_agliate.png" 
            alt="Mago Agliate" 
            className="w-52 md:w-80 h-auto drop-shadow-2xl scale-110"
          />
        </div>

        {/* Enigmas Section */}
        <section id="enigmas" className="space-y-8 mt-[45px]">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center justify-center gap-3 w-full">
              <Info className="text-[#366d4a] w-8 h-8 md:w-10 md:h-10" />
              <h2 translate="no" className="text-2xl md:text-3xl font-black text-[#366d4a] tracking-tight notranslate">Gli Enigmi del Giro</h2>
            </div>
            <p className="text-[#b08865] font-bold italic text-sm md:text-base mt-4 px-4 text-center w-full">
              Dopo tre tentativi apparirà un tasto per la soluzione
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enigmas.map((enigma) => (
              <EnigmaCard 
                key={enigma.id} 
                id={enigma.id}
                title={enigma.title}
                question={enigma.question} 
                correctAnswer={enigma.answer}
                curiosityAudioUrl={enigma.curiosityAudioUrl} 
              />
            ))}
          </div>
        </section>



        {/* Challenge Finale: La Cassaforte */}
        <FinalSafe correctSum={3948} />

      </main>

      <footer className="bg-[#b08865] text-white py-12 px-4 mt-0 relative z-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl">Lambrada / LandGame Lamber Ediziun / Format</h3>
            <p className="text-sm opacity-80">LandGame, il Territorio è un Gioco</p>
          </div>
          
          <Button asChild className="bg-[#366d4a] hover:bg-[#2d5a3d] text-white border-2 border-[#f0bd66] shadow-xl font-black uppercase tracking-widest">
            <a href="https://www.landgame.eu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              SCOPRI I LANDGAME <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <p className="text-xs opacity-50">
            &copy; 2026 Lambrada / LandGame Lamber Ediziun. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}
