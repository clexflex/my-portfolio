import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

const RoseDayGreeting = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [loveIntensity, setLoveIntensity] = useState(0);
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [audio, setAudio] = useState(null);
  const [musicPlaying, setMusicPlaying] = useState(false); // Track if music is playing

  const { 
    Heart, 
    Flower, 
    Sparkles, 
    Gift, 
    Music, 
    Star, 
    Cherry,
    MessageCircleHeart
  } = LucideIcons;

  const Rose = Flower;

  // Handle play audio when user clicks the start button
  const startAudio = () => {
    const audioInstance = new Audio('/music.mp3');
    audioInstance.loop = true;
    audioInstance.play().catch(error => console.log("Error playing audio:", error));
    setAudio(audioInstance);
    setMusicPlaying(true); // Update state to indicate audio is playing
  };

  // Update love intensity meter
  useEffect(() => {
    const intensityTimer = setInterval(() => {
      setLoveIntensity(prev => 
        prev < 100 ? prev + 10 : 100
      );
    }, 500);

    return () => clearInterval(intensityTimer);
  }, []);

  const romanticQuotes = [
    "I know it is thore late ",
    "And i am sorry too abhi ke liye",
    "but i wanted to make something for you",
    "You mean the world to me",
    "You are my sunshine ☀️",
    "My Onlyy sunshine ☀️",
    "and i love you so so somuch babe",
    "i love you a lot <3",
    "MAIN HOON",
    "MAIN HOON, HAMESHAAA"
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0); // Track the current quote

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => 
        prevIndex < romanticQuotes.length - 1 ? prevIndex + 1 : prevIndex // Keep in order
      );
    }, 3000); // Display a new quote every 3 seconds

    return () => clearInterval(quoteTimer);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-02-22T23:30:00');
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setTimer({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to generate random colors
  const generateRandomColor = () => {
    const randomColor = () => Math.floor(Math.random() * 256);
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  };

  // Change the background color on click
  const changeBackgroundColor = () => {
    const newColor = generateRandomColor();
    document.body.style.background = newColor;
  };

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-pink-100 to-red-200 flex flex-col items-center justify-center overflow-hidden p-4"
      onClick={changeBackgroundColor} // Trigger color change on click
    >
      {/* Button to start the audio */}
      {!musicPlaying && (
        <button 
          onClick={startAudio} 
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all mb-4"
        >
          Play Music 🎶
        </button>
      )}

      {/* Magical Floating Elements */}
      {isAnimating && (
        <>
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {i % 3 === 0 ? (
                <Heart 
                  className="text-pink-500 opacity-50 animate-bounce" 
                  size={Math.random() * 40 + 20} 
                  fill="#FF69B4"
                />
              ) : i % 3 === 1 ? (
                <Cherry 
                  className="text-red-400 opacity-40 animate-float" 
                  size={Math.random() * 30 + 20} 
                  fill="#FF6B6B"
                />
              ) : (
                <Flower 
                  className="text-pink-400 opacity-30 animate-spin" 
                  size={Math.random() * 35 + 25} 
                  fill="#FFB6C1"
                />
              )}
            </div>
          ))}
        </>
      )}

      {/* Main Greeting Card */}
      <div className="z-10 bg-white rounded-3xl shadow-2xl p-8 text-center max-w-md w-full mx-4 transform transition-all hover:scale-105 relative">
        <div className="absolute top-4 right-4">
          <MessageCircleHeart 
            className="text-red-500 animate-pulse" 
            size={40} 
          />
        </div>

        <div className="mb-6 flex justify-center items-center space-x-4">
          <Rose 
            className="text-red-500 animate-pulse" 
            size={100} 
            strokeWidth={1.5}
          />
          <Gift 
            className="text-pink-500 animate-bounce" 
            size={60} 
          />
        </div>

        <h1 className="text-4xl font-bold text-pink-700 mb-4 animate-in slide-in-from-top">
          Happy Rose Day, Ayushi! 💕
        </h1>

        <div className="mb-6 relative">
          <p className="text-lg text-pink-600 italic transition-all duration-700 ease-in-out">
            "{romanticQuotes[currentQuoteIndex]}" {/* Show quotes in order */}
          </p>
          <Sparkles 
            className="absolute -top-2 -left-4 text-yellow-400" 
            size={20} 
          />
          <Sparkles 
            className="absolute -bottom-2 -right-4 text-pink-400" 
            size={20} 
          />
        </div>

        {/* Countdown Timer */}
        <div className="mb-6 text-lg text-pink-600 font-semibold">
          <h2 className="animate-pulse">Bas aarha aapse milne...... 💕</h2>
          <div className="flex justify-center space-x-4 mt-2 text-sm font-bold">
            <span>{timer.days} Days</span>
            <span>{timer.hours} Hours</span>
            <span>{timer.minutes} Minutes</span>
            <span>{timer.seconds} Seconds</span>
          </div>
        </div>

        {/* Love Intensity Meter */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star className="text-yellow-500" />
            <span className="text-red-500 font-semibold">Love Intensity:</span>
            <Star className="text-yellow-500" />
          </div>
          <div className="w-full bg-red-200 rounded-full h-4 mb-2">
            <div 
              className="bg-red-500 h-4 rounded-full transition-all duration-30000 ease-out" 
              style={{width: `${loveIntensity}%`}}
            ></div>
          </div>
          <p className="text-sm text-pink-600">
            {loveIntensity}% Pure Love 💖
          </p>
        </div>

        {/* Musical Love Note */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Music className="text-pink-500 animate-spin" size={24} />
          <span className="text-red-500 font-medium">
            A melody of love just for you
          </span>
          <Music className="text-pink-500 animate-spin" size={24} />
        </div>

        {/* Interactive Elements */}
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => alert('I am coming to you jaldi hi babiee Ayushi! tab tak.. 🤗')}
            className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all"
          >
            Hug🤗
          </button>
          <button 
            onClick={() => alert('A virtual kiss just for you babyyyyy! 💋')}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all"
          >
            wanna kiss? 🥹😚
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoseDayGreeting;
