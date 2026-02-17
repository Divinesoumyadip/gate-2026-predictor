"use client";
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BRANCHES, calculateAIR } from '../lib/predict';

export default function ClonePage() {
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

    const geometry = new THREE.IcosahedronGeometry(0.5, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00F5FF, wireframe: true });
    const nodes = [];
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
    return () => { 
      if (mountRef.current) mountRef.current.innerHTML = "";
      renderer.dispose(); 
    };
  }, []);

  const handlePredict = () => {
    const rank = calculateAIR(selB, 'general', marks);
    setResult({ rank, percentile: 99.2, score: 760 });
    setView('res');
  };

  return (
    <main className="min-h-screen bg-[#020408] text-white overflow-hidden relative font-sans">
      <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none opacity-50" />
      
      <nav className="fixed top-0 w-full p-8 z-50 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter uppercase italic">GATE<span className="text-cyan-400">26</span></div>
        <div className="px-4 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-[10px] tracking-widest text-cyan-400 uppercase">Rank Predictor</div>
      </nav>

      {view === 'land' && (
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6">
          <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter leading-none italic uppercase">
            Predict Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">GATE Rank</span>
          </h1>
          <button onClick={() => setView('dash')} className="px-12 py-6 bg-cyan-500 text-black rounded-2xl font-black text-xl shadow-[0_0_40px_rgba(0,245,255,0.4)]">Predict My Rank →</button>
        </section>
      )}

      {view === 'dash' && (
        <section className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-xl bg-[#080C14]/90 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
            {step === 0 && (
              <div>
                <h2 className="text-3xl font-black mb-8 italic">Select <span className="text-cyan-400">Branch</span></h2>
                <div className="grid grid-cols-2 gap-3">
                  {BRANCHES.map(b => (
                    <button key={b.k} onClick={() => {setSelB(b.k); setStep(1);}} className={`p-4 rounded-2xl border transition-all ${selB === b.k ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/5 bg-white/5'}`}>
                      <div className="text-2xl mb-1">{b.c}</div>
                      <div className="font-bold text-xs">{b.n}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="text-center">
                <h2 className="text-3xl font-black mb-8 italic text-purple-400">Your Marks</h2>
                <input type="number" value={marks} onChange={(e) => setMarks(Number(e.target.value))} className="w-full bg-transparent border-b-2 border-purple-500 text-7xl text-center py-4 outline-none mb-12 font-light" />
                <button onClick={handlePredict} className="w-full bg-purple-600 py-5 rounded-2xl font-black text-xl">Analyze Rank</button>
              </div>
            )}
          </div>
        </section>
      )}

      {view === 'res' && result && (
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
          <div className="bg-[#080C14]/95 backdrop-blur-3xl border border-cyan-500/20 p-16 rounded-[3rem] text-center">
            <p className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">Estimated AIR</p>
            <h1 className="text-9xl font-black mb-6 tracking-tighter">#{result.rank}</h1>
            <button onClick={() => {setView('land'); setStep(0);}} className="mt-12 text-gray-500 hover:text-white transition-colors">← Back to Start</button>
          </div>
        </section>
      )}
    </main>
  );
}
