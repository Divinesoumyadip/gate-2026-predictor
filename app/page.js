"use client";
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BRANCHES, CATS, calculateAIR } from '@/lib/predict';

export default function ClonePage() {
  const [view, setView] = useState('land'); // land, dash, res
  const [step, setStep] = useState(0);
  const [selB, setSelB] = useState('CSE');
  const [selC, setSelC] = useState('general');
  const [marks, setMarks] = useState(50);
  const [result, setResult] = useState<any>(null);
  const mountRef = useRef<HTMLDivElement>(null);

  // --- 3D ENGINE CLONE ---
  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    camera.position.z = 12;

    // Nodes and Gears
    const geometry = new THREE.IcosahedronGeometry(0.5, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00F5FF, wireframe: true });
    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < 7; i++) {
      const node = new THREE.Mesh(geometry, material);
      node.position.set((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, -2);
      scene.add(node);
      nodes.push(node);
    }
    
    const light = new THREE.PointLight(0x00F5FF, 5, 50);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.1));

    const animate = () => {
      requestAnimationFrame(animate);
      nodes.forEach(n => { n.rotation.x += 0.01; n.rotation.y += 0.01; });
      renderer.render(scene, camera);
    };
    animate();
    return () => { renderer.dispose(); };
  }, []);

  const handlePredict = () => {
    const rank = calculateAIR(selB, selC, marks);
    setResult({ rank, percentile: 99.2, score: 760 });
    setView('res');
  };

  return (
    <main className="min-h-screen bg-[#020408] text-white overflow-hidden relative font-sans">
      <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none opacity-50" />
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full p-8 z-50 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter uppercase italic">GATE<span className="text-cyan-400">26</span></div>
        <div className="px-4 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-[10px] tracking-widest text-cyan-400 uppercase">Rank Predictor</div>
      </nav>

      {/* LANDING PAGE */}
      {view === 'land' && (
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6 animate-in fade-in duration-1000">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> AI-Powered Analytics
          </div>
          <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter leading-none italic uppercase">
            Predict Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">GATE Rank</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-12">Know your All India Rank, Percentile, and PSU Eligibility before the results are out.</p>
          <button onClick={() => setView('dash')} className="px-12 py-6 bg-cyan-500 text-black rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,245,255,0.4)]">Predict My Rank </button>
        </section>
      )}

      {/* DASHBOARD / STEPPER */}
      {view === 'dash' && (
        <section className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-xl bg-[#080C14]/90 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
            {step === 0 && (
              <div className="animate-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-black mb-2 italic">Select <span className="text-cyan-400">Branch</span></h2>
                <p className="text-gray-500 text-sm mb-8">Choose your primary GATE paper</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {BRANCHES.map(b => (
                    <button key={b.k} onClick={() => {setSelB(b.k); setStep(1);}} className={`p-4 rounded-2xl border transition-all text-center ${selB === b.k ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/5 bg-white/5'}`}>
                      <div className="text-2xl mb-1">{b.c}</div>
                      <div className="font-bold text-xs">{b.n}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="animate-in slide-in-from-right-4 duration-500">
                <h2 className="text-3xl font-black mb-8 italic text-purple-400">Your Marks</h2>
                <input type="number" value={marks} onChange={(e) => setMarks(Number(e.target.value))} className="w-full bg-transparent border-b-2 border-purple-500 text-7xl text-center py-4 outline-none mb-12 font-light" />
                <button onClick={handlePredict} className="w-full bg-purple-600 py-5 rounded-2xl font-black text-xl hover:bg-purple-500 transition-all">Analyze Rank</button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* RESULTS PAGE */}
      {view === 'res' && result && (
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 animate-in zoom-in duration-700">
          <div className="bg-[#080C14]/95 backdrop-blur-3xl border border-cyan-500/20 p-16 rounded-[3rem] text-center shadow-[0_0_60px_rgba(0,245,255,0.15)]">
            <p className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">Estimated AIR</p>
            <h1 className="text-9xl font-black mb-6 tracking-tighter drop-shadow-[0_0_30px_rgba(0,245,255,0.4)]">#{result.rank}</h1>
            <div className="flex gap-4 justify-center">
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Percentile</p>
                <p className="text-2xl font-bold">{result.percentile}%</p>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Score</p>
                <p className="text-2xl font-bold">{result.score}</p>
              </div>
            </div>
            <button onClick={() => {setView('land'); setStep(0);}} className="mt-12 text-gray-500 hover:text-white transition-colors"> Back to Start</button>
          </div>
        </section>
      )}
    </main>
  );
}
