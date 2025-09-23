import React, { useState, useEffect, useRef } from "react";
import terrainGif from '../assets/projects/terrain.mp4'
import terrain2Gif from '../assets/projects/terrain2.mp4'
import terrain3Gif from '../assets/projects/terrain3.mp4'
import terrain4Gif from '../assets/projects/terrain4.mp4'

import terrainPng from '../assets/projects/terrain.png'
import terrain2Png from '../assets/projects/terrain2.png'
import terrain3Png from '../assets/projects/terrain3.png'
import terrain4Png from '../assets/projects/terrain4.png'

import eyespyGif from '../assets/projects/eyespy.mp4'
import eyespy2 from '../assets/projects/eyespy2.png'
import eyespy3 from '../assets/projects/eyespy3.mp4'
import eyespy3Png from '../assets/projects/eyespy3.png'

import eyespyPng from '../assets/projects/eyespy.png'

import popnik from '../assets/projects/popnik.mp4'
import popnik2 from '../assets/projects/popnik2.mp4'

import popnikPng from '../assets/projects/popnik.png'
import popnik2Png from '../assets/projects/popnik2.png'

import pawnrace from '../assets/projects/pawnrace.mp4'
import pawnrace2 from '../assets/projects/pawnrace2.mp4'
import pawnrace3 from '../assets/projects/pawnrace3.mp4'

import pawnracePng from '../assets/projects/pawnrace.png'
import pawnrace2Png from '../assets/projects/pawnrace2.png'
import pawnrace3Png from '../assets/projects/pawnrace3.png'

import musicify from '../assets/projects/musicify.mp4'
import musicify2 from '../assets/projects/musicify2.mp4'

import musicifyPng from '../assets/projects/musicify.png'
import musicify2Png from '../assets/projects/musicify2.png'

import projectile from '../assets/projects/projectile.mp4'
import projectile2 from '../assets/projects/projectile2.mp4'
import projectile3 from '../assets/projects/projectile3.mp4'

import projectilePng from '../assets/projects/projectile.png'
import projectile2Png from '../assets/projects/projectile2.png'
import projectile3Png from '../assets/projects/projectile3.png'

import darklight from '../assets/projects/darklight.mp4'

import darklightPng from '../assets/projects/darklight.png'

import library from '../assets/projects/library.mp4'
import library2 from '../assets/projects/library2.png'
import library3 from '../assets/projects/library3.png'

import libraryPng from '../assets/projects/library.png'

import mephious from '../assets/projects/mephious.mp4'

import mephiousPng from '../assets/projects/mephious.png'

import acorns from '../assets/projects/acorns.mp4'

import acornsPng from '../assets/projects/acorns.png'

import minoy from '../assets/projects/minoy.png'

import minoyPng from '../assets/projects/minoy.png'

import trobbit from '../assets/projects/trobbit.mp4'
import trobbitPng from '../assets/projects/trobbit.png'

import comali from '../assets/projects/comali.mp4'
import comaliPng from '../assets/projects/comali.png'

import vampy from '../assets/projects/vampy.mp4'
import vampyPng from '../assets/projects/vampy.png'
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";

export default function Projects() {

  // scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const projects = [
    {
      title: "3D World Generator",
      description: "Procedural terrain generation with OpenGL, controlled via webcam facial tracking. Done as part of an extension to the C Group Project",
      techstack: "Tech Stack: C, OpenGL, GLFW, Mediapipe, Python",
      image: terrainGif,
      placeholder : terrainPng,
      repo: "https://github.com/JayceFR/VisionTerrain",
      store: "",
      dataImages: [terrain2Gif, terrain3Gif, terrain4Gif],
      dataPlaceHolders: [terrain2Png, terrain3Png, terrain4Png],
      dataText: [
        "Procedural terrain generation driven by Perlin noise, with the world divided into chunks (each made of 16x16 blocks). This chunking system allows efficient rendering by only processing visible sections of the terrain, significantly improving performance.",
        "The environment can be navigated through an alternative interaction method: camera movement controlled by tracking facial data from a webcam. This approach was motivated by accessibility concerns, offering a hands-free alternative to traditional mouse input.",
        "Developed a custom OpenGL rendering pipeline with multiple shaders to achieve realistic visuals. Shaders were used for terrain rendering, animating fireflies, and simulating water with noise-based displacement and sine-wave oscillations, creating convincing lighting and surface effects."
    ]
    },
    {
        title: "EyeSpy – Mobile Security App",
        description: "Android security application that automatically detects and captures images of potential intruders, securely sending alerts and photos directly to your email.",
        techstack: "Tech Stack: Kotlin, Jetpack Compose, Flow, Google Sign-In, On-Device ML",
        image: eyespyGif,
        placeholder : eyespyPng,
        store: "https://play.google.com/store/apps/details?id=eye.spy",
        dataImages: [eyespy2, eyespy3],
        dataPlaceHolders: [eyespy2, eyespy3Png],
        dataText: [
        "Features a built-in personal assistant powered by on-device machine learning, allowing users to easily configure capture settings and security preferences.",
        "Seamlessly integrated with Google Account sign-in for secure authentication and user management. Intruder alerts and captured images are sent directly from the user’s authenticated Google account."
        ]

    },
    {
      title: "Podnik - Mobile game",
      description: "A mobile game that challenges players to navigate a series of procedurally generated levels defeating enemies and hacking computers!",
      techstack: "Tech Stack: C, Raylib, GLSL",
      image: popnik,
      placeholder : popnikPng,
      repo: "https://github.com/JayceFR/VampyReloaded",
      dataImages: [popnik2],
      dataPlaceHolders: [popnik2Png],
      dataText: ["Enemy use A* pathfinding to chase the player around the level, while the player can shoot projectiles to defeat them. Levels are procedurally generated using a cellular automata algorithm to create maze-like structures that are different each time."]
    },

    {
      title: "PawnRace - Mobile game",
      description: "A mobile game built as an extension to the PPT coursework PawnRace, where the game ends when one pawn reaches the opposite side of the board.",
      techstack: "Tech Stack: Kotlin, Jetpack Compose",
      image: pawnrace,
      placeholder : pawnracePng,
      repo: "https://github.com/JayceFR/PawnRace",
      dataImages: [pawnrace2, pawnrace3],
      dataPlaceHolders: [pawnrace2Png, pawnrace3Png],
      dataText: [
        "Features a two player local multiplayer mode, allowing two players to compete on the same device by taking turns.",
        "Includes a custom built AI opponent built using Minimax algorithm and alpha-beta pruning, providing a challenging experience for solo players."
      ]
    },
    {
      title: "Musicify - Mobile Music Player",
      description: "A mobile app that allows users to play and manage their local music library with a sleek and intuitive interface. Supports playlists, shuffle, repeat, and background playback.",
      techstack: "Tech Stack: Kotlin, Jetpack Compose, Sqlite, Media3",
      image: musicify,
      placeholder : musicifyPng,
      repo: "https://github.com/JayceFR/Musicify",
      dataImages: [musicify2],
      dataPlaceHolders: [musicify2Png],
      dataText: [
        "Supports playlists, shuffle, repeat, and background playback."
      ]
    },
    {
      title: "Projectile - BPHO Project",
      description: "A website developed for the British Physics Computational Olympiad (BPHO) Secured Gold Award. Renders projectiles computed based on user-defined parameters.",
      techstack: "Tech Stack: React, GLSL, Three.js, Node.js, Github Pages",
      image: projectile,
      placeholder : projectilePng,
      repo: "https://github.com/JayceFR/Projectile",
      demo: "https://jaycefr.github.io/Projectile/",
      dataImages: [projectile2, projectile3],
      dataPlaceHolders: [projectile2Png, projectile3Png],
      dataText: [
        "Supports real time rendering of projectiles in graphs based on user-defined parameters. Immediate visual feedback allows users to understand the effects of different parameters on projectile motion.",
        "Features 3 different celestial bodies (Earth, Moon, Mars) with accurate gravitational forces, allowing users to simulate projectile motion in different environments."
      ]
    },
    {
      title: "Community Library",
      description: "A project aimed at creating a community-driven library platform where users can contribute, share, and discover books.",
      techstack: "Tech Stack: React, GoLang, MySQL",
      image: library,
      placeholder : libraryPng,
      repo: "https://github.com/JayceFR/Library_FrontEnd",
      dataImages: [library2, library3],
      dataPlaceHolders: [library2, library3],
      dataText: [
        "Uses a custom GoLang backend with a MySQL database to manage user data and book information.",
        "Features real time messaging using WebSockets to allow users to communicate to each other in real time."
      ]
    },
    {
      title: "DarkLight",
      description: "Game submitted to the PolyMars X ScoreSpace game jam. Travel as a descendant of the lord of the shadows looking for his lost brother captured by the Red Hoodies.",
      techstack: "Tech Stack: Python, Pygame",
      image: darklight,
      placeholder : darklightPng,
      repo: "https://github.com/JayceFR/DarkLight",
      demo: "https://www.youtube.com/watch?v=8KmwRP9enY4",
      store : "https://vicious-jayjan.itch.io/darklight",
      dataImages: [],
      dataText: []
    },
    {
      title: "Mephious",
      description: "Game submitted to the MelonJam 4 game jam. Ranked top 5",
      techstack: "Tech Stack: Python, Pygame",
      image: mephious,
      placeholder : mephiousPng,
      repo: "https://github.com/JayceFR/Mephious",
      demo: "https://www.youtube.com/watch?v=DzJlJjgDBQE",
      store : "https://vicious-jayjan.itch.io/mephious",
      dataImages: [],
      dataText: []
    },
    {
      title: "Autumn Acorns",
      description: "Game submitted to the Strawberry game jam. Secured gold",
      techstack: "Tech Stack: Python, Pygame",
      image: acorns,
      placeholder : acornsPng,
      repo: "https://github.com/JayceFR/JayCorn",
      demo: "https://www.youtube.com/watch?v=6HcEmO38BHQ",
      store : "https://vicious-jayjan.itch.io/autumn-acorns",
      dataImages: [],
      dataText: []
    },
    {
      title: "Minoy",
      description: "Game submitted to the MiniJam 133", 
      techstack: "Tech Stack: Python, Pygame",
      image: minoy,
      placeholder : minoyPng,
      repo: "https://github.com/JayceFR/Minoy",
      demo: "https://www.youtube.com/watch?v=rHwOz10aiPM",
      store : "https://vicious-jayjan.itch.io/minoy",
      dataImages: [],
      dataText: []
    },
    {
      title: "Trobbit",
      description: "Game submitted to the Pygame Community Easter Jam 2023", 
      techstack: "Tech Stack: Python, Pygame",
      image: trobbit,
      placeholder : trobbitPng,
      repo: "https://github.com/JayceFR/Trobbit",
      store : "https://vicious-jayjan.itch.io/trobbit",
      dataImages: [],
      dataText: []
    },
    {
      title: "Cozy Comali",
      description: "Game submitted to the Winter Melon Jam 2022", 
      techstack: "Tech Stack: Python, Pygame",
      image: comali,
      placeholder : comaliPng,
      repo: "https://github.com/JayceFR/Cozy_Comali",
      store : "https://vicious-jayjan.itch.io/cozy-comali",
      demo : "https://www.youtube.com/watch?v=QQwoFLNwITE",
      dataImages: [],
      dataText: []
    },
    {
      title: "Vampy",
      description: "Game submitted to the Mini Jam 118 : Vampires", 
      techstack: "Tech Stack: Python, Pygame",
      image: vampy,
      placeholder : vampyPng,
      repo: "https://github.com/JayceFR/Vampy",
      store : "https://github.com/JayceFR/Vampy",
      dataImages: [],
      dataText: []
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image">
              {/* <img src={project.image} alt={project.title} loading="lazy" /> */}
              <MediaWithLoader src={project.image} alt={project.title} placeholder={project.placeholder} className="grid" />
            </div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
  <div
    className="popup-overlay"
    onClick={() => setSelectedProject(null)} // closes when clicking overlay
  >
    <div
      className="project-popup"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
    >
      <button className="close-btn" onClick={() => setSelectedProject(null)}>
        ×
      </button>
      <h2>{selectedProject.title}</h2>
      <div className="popup-image">
        {/* <img src={selectedProject.image} alt={selectedProject.title} /> */}
        <MediaWithLoader src={selectedProject.image} alt={selectedProject.title} placeholder={selectedProject.placeholder} className="popup" />
      </div>
      <p>{selectedProject.description}</p>
      <p><em>{selectedProject.techstack}</em></p>

      {selectedProject.demo && (
        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
          {selectedProject.demo.includes("youtube") ? "Watch Demo" : "Live Site"}
        </a>
      )}
      {selectedProject.repo && (
        <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      )}
      {selectedProject.store && (
        <a href={selectedProject.store} target="_blank" rel="noopener noreferrer">
          {selectedProject.store.includes("play.google") ? "Play Store" : "Itch.io"}
        </a>
      )}

      {Array.from(
        { length: Math.max(selectedProject.dataImages.length, selectedProject.dataText.length) },
        (_, idx) => (
          <div className="popup-box" key={idx}>
            {selectedProject.dataImages[idx] && (
              <div className="popup-image">
                <MediaWithLoader
                  src={selectedProject.dataImages[idx]}
                  placeholder={selectedProject.dataPlaceHolders ? selectedProject.dataPlaceHolders[idx] : null}
                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                  className={"popup"}
                />
                {/* <img
                  src={selectedProject.dataImages[idx]}
                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                /> */}
              </div>
            )}
            {selectedProject.dataText[idx] && (
              <p className="popup-text">{selectedProject.dataText[idx]}</p>
            )}
          </div>
        )
      )}
    </div>
  </div>
)}

    </section>
  );
}

function ImageWithLoader({ src, placeholder, alt, className }) {
  const [loaded, setLoaded] = React.useState(false);

  // derive placeholder: replace `.gif` with `.png` if possible
  // const placeholder = src.endsWith(".gif")
  //   ? src.replace(".gif", "2.png") // e.g. eyespy.gif → eyespy2.png
  //   : null;

  return (
    <div className={`image-wrapper ${className || ""}`}>
      {!loaded && (
        placeholder ? (
          <img src={placeholder} alt={`${alt} cover`} className="placeholder" />
        ) : (
          <div className="spinner">
            <div className="loader" />
          </div>
        )
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out"
        }}
      />
    </div>
  );
}


function MediaWithLoader({ src, placeholder, alt, className }) {
  const [loaded, setLoaded] = React.useState(false);
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  return (
    <div className={`media-wrapper ${className || ""}`}>
      {/* Show placeholder/spinner until loaded */}
      {!loaded && (
        placeholder ? (
          <img src={placeholder} alt={`${alt} cover`} className="placeholder" />
        ) : (
          <div className="spinner"><div className="loader" /></div>
        )
      )}

      {isVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={placeholder}
          onLoadedData={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        >
          <source src={src} type={src.endsWith(".mp4") ? "video/mp4" : "video/webm"} />
        </video>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      )}
    </div>
  );
}



