/**
 * Rocsato Conservatory of Music — Choreography & Disciplines Engine
 * 
 * Part 1: Approach RCM Emblem
 * Part 2: Enter through the aperture of the 'C' into controlled darkness
 * Part 3: Discovery chamber — "Find Your Instrument"
 * Part 4: Disciplines scroll-driven narrative with emerging visual plates
 */

// ============================================================================
// CENTRALIZED DISCIPLINES DATA REPOSITORY (disciplines contract)
// Easily updated with final photography and instructor rosters.
// ============================================================================
const DISCIPLINES_DATA = [
  {
    id: 'piano',
    index: 'Discipline 01',
    name: 'Piano & Keyboard',
    description:
      'Immersive study in touch, tone production, and the expansive literature of the pianoforte. From Bachian counterpoint to the romantic weight of Brahms and Rachmaninoff, instruction emphasizes ergonomic freedom and architectural clarity.',
    paletteGradient: 'radial-gradient(circle at 60% 40%, #2e1a1c 0%, #150f11 50%, #080708 100%)',
    plateEcho: 'The Acoustic Hammer & String',
    instructor: {
      name: 'Faculty Chair in Piano',
      title: 'Studio Professor',
      initials: 'PF',
      status: 'Inquire for Studio Audition'
    }
  },
  {
    id: 'strings',
    index: 'Discipline 02',
    name: 'Stringed Instruments',
    description:
      'Violin, viola, violoncello, and double bass. Technique built from the bow arm inward—cultivating projection without force, nuanced vibrato, and intimate chamber ensemble communication.',
    paletteGradient: 'radial-gradient(circle at 55% 45%, #221c17 0%, #14100c 50%, #080708 100%)',
    plateEcho: 'Vibrancy of the Resonating Body',
    instructor: {
      name: 'Faculty Chair in Strings',
      title: 'Master Artist-in-Residence',
      initials: 'SF',
      status: 'Selective Studio Placement'
    }
  },
  {
    id: 'brass',
    index: 'Discipline 03',
    name: 'Brass',
    description:
      'Horn, trumpet, trombone, and tuba. Grounded in acoustic resonance, pristine intonation, and breath support that transforms metallic resistance into warm, noble sonority.',
    paletteGradient: 'radial-gradient(circle at 45% 40%, #2d2613 0%, #171308 50%, #080708 100%)',
    plateEcho: 'Breath Cultivated into Golden Harmonic',
    instructor: {
      name: 'Faculty Chair in Brass',
      title: 'Principal Soloist',
      initials: 'BF',
      status: 'Studio Audition by Invitation'
    }
  },
  {
    id: 'woodwinds',
    index: 'Discipline 04',
    name: 'Woodwinds',
    description:
      'Flute, oboe, clarinet, and bassoon. Cultivating the individual singer within the reed and embouchure. Rigorous attention to finger mechanics, color shading, and orchestral leadership.',
    paletteGradient: 'radial-gradient(circle at 50% 50%, #18231e 0%, #0d1411 50%, #080708 100%)',
    plateEcho: 'Articulated Air & Subtle Reed Colors',
    instructor: {
      name: 'Faculty Chair in Woodwinds',
      title: 'Studio Professor',
      initials: 'WF',
      status: 'Limited Masterclass Openings'
    }
  },
  {
    id: 'voice',
    index: 'Discipline 05',
    name: 'Voice & Lyric Arts',
    description:
      'The human body as an unmediated instrument. Bel canto foundation, dramatic diction across Italian, German, French, and English, and unforced acoustic ring built for hall projection.',
    paletteGradient: 'radial-gradient(circle at 50% 35%, #341e26 0%, #1a0f13 50%, #080708 100%)',
    plateEcho: 'The Living Instrument of Breath & Text',
    instructor: {
      name: 'Faculty Chair in Voice',
      title: 'Vocal Pedagogue & Recitalist',
      initials: 'VF',
      status: 'Consultative Evaluation'
    }
  },
  {
    id: 'historical',
    index: 'Discipline 06',
    name: 'Historical Performance',
    description:
      'Early music interpretation spanning the Medieval, Renaissance, and Baroque eras. Dedicated study in period temperament, historically informed ornamentation, and instruments including the hurdy-gurdy, cornetto, viola da gamba, and harpsichord.',
    paletteGradient: 'radial-gradient(circle at 50% 40%, #251c14 0%, #150f09 50%, #080708 100%)',
    plateEcho: 'Temperament, Gut String & Ancient Wood',
    instructor: {
      name: 'Faculty Chair in Historical Practice',
      title: 'Scholar & Multi-Instrumentalist',
      initials: 'HP',
      status: 'Open to Specialized Scholars'
    }
  }
];

// ============================================================================
// MOUNT DISCIPLINES DOM
// ============================================================================
function renderDisciplines() {
  const root = document.getElementById('disciplinesRoot');
  if (!root) return;

  root.innerHTML = DISCIPLINES_DATA.map((d) => `
    <article class="discipline-chapter" id="${d.id}" data-discipline="${d.id}">
      <div class="discipline-inner">
        <!-- Emerging Visual Plate -->
        <div class="discipline-visual-stage">
          <div class="discipline-frame">
            <div class="discipline-img-placeholder" style="background: ${d.paletteGradient};">
              <div class="discipline-shadow-scrim"></div>
              <span class="discipline-plate-badge">${d.index}</span>
              <span class="discipline-plate-echo">${d.plateEcho}</span>
            </div>
          </div>
        </div>

        <!-- Editorial Copy & Instructor Slot -->
        <div class="discipline-editorial">
          <span class="discipline-index">${d.index}</span>
          <h2 class="discipline-title">${d.name}</h2>
          <p class="discipline-description">${d.description}</p>
          
          <div class="instructor-dock">
            <div class="instructor-avatar-frame" aria-hidden="true">
              <span class="instructor-avatar-initials">${d.instructor.initials}</span>
            </div>
            <div class="instructor-meta">
              <span class="instructor-role-label">${d.instructor.title}</span>
              <h3 class="instructor-name">${d.instructor.name}</h3>
              <span class="instructor-status">${d.instructor.status}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// ============================================================================
// SCROLL CHOREOGRAPHY ENGINE
// ============================================================================
function initPortalChoreography() {
  const portalStage = document.getElementById('portalStage');
  const openingChamber = document.getElementById('openingChamber');
  const apertureRig = document.getElementById('apertureRig');
  const transitDarkness = document.getElementById('transitDarkness');
  const discoveryChamber = document.getElementById('discoveryChamber');
  const scrollIndicator = document.getElementById('scrollIndicator');

  if (!portalStage || !apertureRig) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) {
    // Elegant fallback: make everything readable and discoverable without scroll locks
    if (discoveryChamber) {
      discoveryChamber.style.opacity = '1';
      discoveryChamber.style.transform = 'none';
      discoveryChamber.style.position = 'relative';
    }
    return;
  }

  function onScroll() {
    const stageRect = portalStage.getBoundingClientRect();
    const stageHeight = portalStage.offsetHeight - window.innerHeight;
    
    // Progress within the portal section: 0.0 to 1.0
    const progress = Math.min(Math.max(-stageRect.top / stageHeight, 0), 1);

    // ------------------------------------------------------------------------
    // TIMELINE PHASES (0.00 -> 1.00)
    // 0.00 - 0.12 : Rest state, subtle approach cue
    // 0.12 - 0.50 : Moving forward into the negative space of the 'C'
    // 0.40 - 0.60 : Passage through darkness (the void inside the aperture)
    // 0.58 - 0.88 : Discovery chamber ("Find Your Instrument") rises in new room
    // 0.88 - 1.00 : Discovery chamber gently fades as disciplines emerge
    // ------------------------------------------------------------------------

    // Phase 1 & 2: Zoom and pull forward through the 'C'
    if (progress < 0.60) {
      const zoomProgress = Math.min(Math.max((progress - 0.08) / 0.44, 0), 1);
      
      // Smooth cubic curve for cinematic pull-through
      const easedZoom = Math.pow(zoomProgress, 2.8);
      
      // Scale up to 26x so the camera travels cleanly *inside* the negative space of the C
      const scale = 1 + easedZoom * 25;
      
      // The center counter of the 'C' sits around (200, 200) in the 400x400 viewBox.
      // We translate the rig toward the opening of the C as we get closer.
      const translateX = easedZoom * -20;
      const translateY = easedZoom * 0;

      apertureRig.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
      
      // Fade out surrounding titles / text early so only the glyph becomes the aperture
      const textFade = Math.max(1 - (progress / 0.18), 0);
      if (scrollIndicator) scrollIndicator.style.opacity = textFade;
      const chamberEyebrow = document.querySelector('.chamber-eyebrow');
      const chamberSubheading = document.querySelector('.chamber-subheading');
      if (chamberEyebrow) chamberEyebrow.style.opacity = textFade;
      if (chamberSubheading) chamberSubheading.style.opacity = textFade;

      openingChamber.style.opacity = progress > 0.52 ? Math.max(1 - (progress - 0.52) / 0.08, 0) : 1;
    } else {
      openingChamber.style.opacity = 0;
    }

    // Transit darkness: fades to pure black as the viewer slips into the counter of the letter
    if (progress >= 0.35 && progress <= 0.65) {
      const darkProgress = (progress - 0.35) / 0.20;
      transitDarkness.style.opacity = Math.min(Math.max(darkProgress, 0), 1);
    } else if (progress > 0.65 && progress < 0.90) {
      // Hold high darkness behind the discovery chamber
      transitDarkness.style.opacity = 1;
    } else if (progress < 0.35) {
      transitDarkness.style.opacity = 0;
    }

    // Part 3: "Find Your Instrument" discovery chamber
    if (progress >= 0.54 && progress <= 0.96) {
      // Small visual breath after darkness before fade-in
      const revealProgress = Math.min(Math.max((progress - 0.56) / 0.18, 0), 1);
      const exitProgress = Math.min(Math.max((progress - 0.86) / 0.10, 0), 1);

      const opacity = revealProgress * (1 - exitProgress);
      const translateY = 24 * (1 - revealProgress) - (exitProgress * 20);

      discoveryChamber.style.opacity = opacity;
      discoveryChamber.style.transform = `translateY(${translateY}px)`;
      discoveryChamber.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
    } else {
      discoveryChamber.style.opacity = 0;
      discoveryChamber.style.pointerEvents = 'none';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}

// ============================================================================
// DISCIPLINES EMERGENCE OBSERVER (Restrained photographic reveals)
// ============================================================================
function initDisciplinesObserver() {
  const chapters = document.querySelectorAll('.discipline-chapter');
  if (!chapters.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -15% 0px',
    threshold: 0.25
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const frame = entry.target.querySelector('.discipline-frame');
      const editorial = entry.target.querySelector('.discipline-editorial');

      if (entry.isIntersecting) {
        if (frame) frame.classList.add('is-revealed');
        if (editorial) editorial.classList.add('is-revealed');
      } else {
        // As visitor scrolls beyond, softly retreat into darkness
        if (entry.boundingClientRect.top > 0) {
          if (frame) frame.classList.remove('is-revealed');
          if (editorial) editorial.classList.remove('is-revealed');
        }
      }
    });
  }, observerOptions);

  chapters.forEach((ch) => observer.observe(ch));
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderDisciplines();
  initPortalChoreography();
  initDisciplinesObserver();
});