"use client";
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BRANCHES, calculateAIR } from '../lib/predict';

export default function FinalPage() {
  const [view, setView] = useState('land'); 
  const [step, setStep] = useState(0);
  const [selB, setSelB] = useState('CSE');
  const [marks, setMarks] = useState(50);
  const [result, setResult] = useState(null);
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    camera.position.z = 12;

    const geometry = new THREE.IcosahedronGeometry(1.2, 1);
    // MeshBasicMaterial doesn't need lights to glow - it will be bright cyan guaranteed
    const material = new THREE.MeshBasicMaterial({ color: 0x00F5FF, wireframe: true, transparent: true, opacity: 0.6 });
    const nodes = [];
    
    for (let i = 0; i < 12; i++) {
      const node = new THREE.Mesh(geometry, material);
      node.position.set((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 15, -5);
      scene.add(node);
      nodes.push(node);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      nodes.forEach(n => { n.rotation.x += 0.005; n.rotation.y += 0.005; });
      renderer.render(scene, camera);
    };
    animate();
    
    return () => { 
      if (mountRef.current) mountRef.current.innerHTML = "";
      renderer.dispose(); 
    };
  }, []);

  const handlePredict = () => {
    const rank = calculateAIR(selB, 'general', marks);
    setResult({ rank, percentile: marks >= 50 ? 99.2 : 85.5, score: marks * 10 });
    setView('res');
  };

  return (
    <main className="min-h-screen bg-[#020408] text-white overflow-hidden relative font-sans">
      <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />
      
      <nav className="fixed top-0 w-full p-8 z-50 flex justify-between items-center bg-black/40 backdrop-blur-md">
        <div className="text-2xl font-black tracking-tighter uppercase italic">GATE<span className="text-cyan-400">26</span></div>
        <button onClick={() => setView('dash')} className="bg-cyan-500 text-black px-6 py-2 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all">Predict Now</button>
      </nav>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        {view === 'land' && (
          <div className="text-center max-w-4xl">
            <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter leading-none italic uppercase">
              KNOW YOUR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">GATE RANK</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">AI-driven rank prediction and PSU eligibility — instantly.</p>
            <button onClick={() => {setView('dash'); setStep(0);}} className="px-12 py-6 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl">Start Predicting →</button>
          </div>
        )}

        {view === 'dash' && (
          <div className="w-full max-w-xl bg-gray-900/80 backdrop-blur-3xl border border-white/20 p-10 rounded-[2.5rem] shadow-2xl">
            {step === 0 && (
              <div className="animate-in fade-in zoom-in duration-500">
                <h2 className="text-3xl font-black mb-8 italic">Select <span className="text-cyan-400">Branch</span></h2>
                <div className="grid grid-cols-2 gap-4">
                  {BRANCHES.map(b => (
                    <button key={b.k} onClick={() => {setSelB(b.k); setStep(1);}} 
                      className={`p-6 rounded-2xl border transition-all text-center flex flex-col items-center justify-center ${selB === b.k ? 'border-cyan-500 bg-cyan-500/20' : 'border-white/10 bg-white/5 hover:border-cyan-500/50'}`}>
                      <div className="text-4xl mb-2">{b.c}</div>
                      <div className="font-bold text-sm uppercase">{b.n}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="text-center animate-in fade-in slide-in-from-right-8 duration-500">
                <h2 className="text-3xl font-black mb-8 italic text-purple-400">Your Marks</h2>
                <input type="number" value={marks} onChange={(e) => setMarks(Number(e.target.value))} 
                  className="w-full bg-transparent border-b-4 border-purple-500 text-8xl text-center py-4 outline-none mb-12 font-light" />
                <button onClick={handlePredict} className="w-full bg-purple-600 py-6 rounded-2xl font-black text-2xl hover:bg-purple-500 transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)]">Analyze Rank</button>
              </div>
            )}
          </div>
        )}

        {view === 'res' && result && (
          <div className="bg-gray-900/90 backdrop-blur-3xl border border-cyan-500/30 p-16 rounded-[3rem] text-center shadow-[0_0_50px_rgba(0,245,255,0.2)] animate-in zoom-in duration-500">
            <p className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">Estimated AIR</p>
            <h1 className="text-9xl font-black mb-10 tracking-tighter drop-shadow-[0_0_30px_rgba(0,245,255,0.3)]">#{result.rank}</h1>
            <div className="flex gap-4 justify-center mb-10">
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Percentile</p>
                <p className="text-xl font-bold">{result.percentile}%</p>
              </div>
            </div>
            <button onClick={() => {setView('dash'); setStep(0);}} className="px-8 py-4 font-bold bg-white/10 rounded-2xl hover:bg-white/20 transition-all">← Predict Again</button>
          </div>
        )}
      </div>
    </main>
  );
}
