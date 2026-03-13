import { useState, useEffect, useRef } from "react";

const stories = [
  {
    id: 1,
    title: "The Last Cartographer",
    author: "Elara Voss",
    genre: "Fantasy",
    readTime: "8 min",
    excerpt: "She drew maps of places that didn't exist yet — and somehow, they always came true.",
    cover: "🗺️",
    color: "#6B3FA0",
    featured: true,
    content: `The ink had barely dried when the city appeared on the horizon.

Mira pressed her fingers against the parchment, tracing the outline of towers she had sketched only hours ago — spires of obsidian glass rising from a valley that every map before hers had shown as empty. The cartographer's compass trembled in her hand.

"You've done it again," whispered Fen, leaning over her shoulder. His breath smelled of pine resin and old libraries.

She hadn't done anything. That was the truth she could never admit aloud. The maps drew themselves, her hand merely a vessel, the ink flowing from some source deeper than memory or imagination. She was a stenographer for geography that hadn't yet decided to exist.

The first time it happened, she was seventeen. She had drawn a harbor town to the east — romantic fiction, she'd thought, something to hang beside her bed. Six months later, refugees from the inland floods arrived and built exactly that town, stone by stone, without ever seeing her drawing.

Now she was twenty-nine, and every map she'd ever made had manifested. All forty-three of them.

She rolled the parchment carefully, slid it into the copper tube at her belt. The city on the horizon had begun to glow.

"We should go," she said. "Before it finishes becoming real."

"Shouldn't we want to see it?"

Mira looked at Fen — kind, curious Fen, who had followed her across six countries without asking why. "The things I draw," she said quietly, "aren't always beautiful once they're real."

She turned her horse south, and did not look back.

Behind them, the obsidian towers caught the last of the light and held it, burning like bottled fire, a city born from nothing but a lonely woman's restless hand.`,
  },
  {
    id: 2,
    title: "Signal Loss",
    author: "Theo Marsh",
    genre: "Sci-Fi",
    readTime: "6 min",
    excerpt: "The colony ship fell silent on Day 400. Only one crew member noticed.",
    cover: "🛸",
    color: "#1A6B8A",
    featured: false,
    content: `Day 400. The morning announcements didn't play.

At first, Yael thought it was a glitch — the kind of minor system hiccup that Engineering fixed before breakfast. She waited in her bunk, listening for the automated chime, the recorded voice of Commander Solis reading weather reports for a planet they hadn't reached yet.

Silence.

She dressed and walked the corridor to the communal deck. Fourteen crew members sat eating, talking, laughing. The coffee machine gurgled. Someone was playing cards.

No one had noticed.

"Did you hear the morning announcement?" she asked Dmitri, the ship's geologist.

He looked up from his eggs. "Sure. Same as always."

Yael hadn't heard it. She was certain. But Dmitri's eyes held no confusion, no sign that he was lying. He believed it completely.

She went to the broadcast archive. Day 400's morning log: empty. Day 399: empty. She scrolled back — Day 391 was the last recorded entry. Nine days of silence that no one but her had noticed.

The colony ship *Meridian* was 4.2 light-years from the nearest relay station. Whatever was broadcasting to her crewmates' minds, it wasn't coming from the ship's systems.

And whatever had stopped broadcasting to hers — she wasn't sure if that was a malfunction.

Or a message.`,
  },
  {
    id: 3,
    title: "The Bread Woman",
    author: "Nadia Solano",
    genre: "Literary",
    readTime: "5 min",
    excerpt: "Every morning at 5am, she baked bread for people who had forgotten how to cry.",
    cover: "🍞",
    color: "#8B5E3C",
    featured: false,
    content: `The bakery opened before dawn, before the grief had time to calcify into routine.

Carmela had learned this accidentally. Her husband died on a Tuesday, and by Thursday she found herself in the kitchen at 4am, hands white with flour, and for forty minutes she did not think about him. Just the yeast and the warmth and the slow rise.

She never meant to start a business. But neighbors smelled the bread, and then neighbors of neighbors. A man who had lost his daughter to the war came every morning and sat at the window table for exactly twenty minutes. He never bought anything the first two weeks. On the fifteenth day, he bought a single roll, ate it in silence, and wept — openly, unselfconsciously, the way children cry.

He thanked her on the way out. He came back the next day.

Carmela began to understand what she was making. Not bread, exactly. Or not only bread. She was making permission. The warm, yeasty, undeniable permission to put something in your mouth that tasted like it had been made for you specifically — and feel, briefly, that the world had not entirely turned its back.

The grief didn't leave. She knew better than to promise that.

But it loosened. Like dough under patient hands, it loosened enough to breathe.`,
  },
  {
    id: 4,
    title: "Root Memory",
    author: "Sable Whitmore",
    genre: "Fantasy",
    readTime: "7 min",
    excerpt: "The oldest tree in the forest remembered a city that had once stood beneath it.",
    cover: "🌳",
    color: "#2E6B4F",
    featured: false,
    content: `The botanist pressed her ear to the bark and listened.

She'd done this as a child, convinced trees had heartbeats. Her professors had cured her of the notion, mostly. But standing beneath the Sorrowwood — three thousand years old by carbon dating, older by local legend — she felt it again: a deep subsonic rhythm, too slow to count, like a pulse from something vast and patient.

"What did you see?" she whispered.

The research wasn't scientific. She knew that. She had notebooks full of scientific data: growth rings, soil composition, mycorrhizal mapping. This was different. This was her standing in the rain at dusk talking to a tree.

The wind moved through the Sorrowwood's canopy like breath.

Later, cleaning her equipment, she found a drawing in her notebook she didn't remember making. Rooflines. A market square. A fountain with a strange seal — half bird, half flame. She'd sketched it in her own handwriting, but had no memory of the motion.

She took the drawing to the town historian, an old woman named Gret who kept records going back four centuries.

Gret looked at the seal for a long time. Then she said, very quietly: "That was the seal of Amaris. It burned to the ground in 1091. There are no images of it. No images have ever been found."

The botanist looked at the ink on her fingers, still faintly dark.

She went back to the Sorrowwood the next morning and pressed her ear to the bark again.

This time, she brought more paper.`,
  },
  {
    id: 5,
    title: "The Interpreter",
    author: "Kael Oduya",
    genre: "Thriller",
    readTime: "9 min",
    excerpt: "She translated seven languages. The eighth one was translating her.",
    cover: "🌐",
    color: "#8B2E2E",
    featured: false,
    content: `Room 4B at the international tribunal smelled of recycled air and old ambitions.

Leila had worked here for six years, translating Arabic, Farsi, Swahili, French, Portuguese, Mandarin, and Russian — sometimes simultaneously, her voice a low murmur into the microphone as diplomats constructed their careful versions of reality.

She was proud of her neutrality. She had no political opinions in this building. Her job was accuracy, not judgment.

On the morning of the Mazari testimony, she noticed something wrong in the third sentence.

The witness was speaking Dari. Leila's Dari was functional, not native — she'd disclosed this and been approved regardless. But functional was enough to hear it: the word the witness used for "government order" was actually closer to "divine instruction." Metaphor, perhaps. Or mistranslation waiting to become history.

She flagged it through protocol. The presiding judge noted it, moved on.

But in the afternoon session, the lead prosecutor used her translation — her words — to build an argument that hinged entirely on state authority. Not divine mandate. Not the mystical force the witness had described.

Leila typed a correction into the transcript system. The system returned an error: *File locked. Administrator access required.*

She looked up at the gallery. A man in a grey suit was watching her with steady, unblinking attention.

She typed the correction again. The same error.

The prosecutor continued. Her words filled the room, building a case from the architecture of a language that wasn't quite hers, constructing a guilt from a meaning she had almost gotten right.

Almost.`,
  },
  {
    id: 6,
    title: "Half-Light Hours",
    author: "Rue Delacroix",
    genre: "Literary",
    readTime: "4 min",
    excerpt: "He called every Sunday at 6pm. Then he died. The calls kept coming.",
    cover: "📞",
    color: "#4A4A7A",
    featured: false,
    content: `The first call came three weeks after the funeral.

Marcus nearly dropped the phone when he saw the name on the screen. *Dad.* He let it ring until voicemail — his father's voice, recorded years ago, cheerful and alive: *You've reached Gerald. Leave a message and I might call you back!*

He'd forgotten the voicemail existed. He sobbed for twenty minutes.

The second call came the following Sunday. Same time: 6:02pm. He answered it.

Silence, and then the faint sound of wind — or breath — and a warmth that came through the speaker like the memory of sitting at a kitchen table in a yellow house in 1994.

He said, "Dad?"

Nothing. And then the call ended.

He called his sister, who told him kindly that their father's phone had been canceled. The number was disconnected.

The third call came on Sunday. He answered again.

This time, he didn't say anything. He just sat with it, the open line and its soft ambient presence, and after a while he understood he wasn't supposed to speak. He was supposed to listen — not for words, but for something older than words. The particular quality of attention that his father had always given him. Patient. Undemanding. Simply there.

When the call ended he felt, for the first time since the funeral, that he was going to be okay.

He started setting his phone on the table at 6pm on Sundays.

He never missed a call.`,
  },
];

const GENRES = ["All", "Fantasy", "Sci-Fi", "Literary", "Thriller"];

const StarField = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      alpha: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.3 + 0.05,
    }));
    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha += Math.sin(Date.now() * s.speed * 0.001) * 0.01;
        s.alpha = Math.max(0.05, Math.min(0.85, s.alpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,210,255,${s.alpha})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
};

const glowStyle = (color) => ({
  boxShadow: `0 0 30px ${color}44, 0 0 60px ${color}22`,
});

export default function App() {
  const [view, setView] = useState("home"); // home | browse | read | write
  const [activeStory, setActiveStory] = useState(null);
  const [activeGenre, setActiveGenre] = useState("All");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ title: "", author: "", genre: "Fantasy", content: "" });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const featured = stories.find((s) => s.featured);
  const filtered = activeGenre === "All" ? stories : stories.filter((s) => s.genre === activeGenre);

  const openStory = (story) => { setActiveStory(story); setView("read"); window.scrollTo(0, 0); };

  return (
    <div style={styles.root}>
      <StarField />

      {/* NAV */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <button onClick={() => setView("home")} style={styles.logo}>
          <span style={styles.logoMark}>✦</span> Lore & Ink
        </button>
        <div style={styles.navLinks}>
          {[["home", "Home"], ["browse", "Stories"], ["write", "Write"]].map(([v, label]) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{ ...styles.navBtn, ...(view === v ? styles.navBtnActive : {}) }}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <main style={styles.main}>
        {/* ===== HOME ===== */}
        {view === "home" && (
          <div style={styles.fadeIn}>
            {/* Hero */}
            <section style={styles.hero}>
              <div style={styles.heroEyebrow}>✦ A place for stories that haunt you</div>
              <h1 style={styles.heroTitle}>
                Where Words
                <br />
                <span style={styles.heroAccent}>Become Worlds</span>
              </h1>
              <p style={styles.heroSub}>
                Discover dark fairytales, speculative fiction, and literary fragments from voices that refuse to be quiet.
              </p>
              <div style={styles.heroBtns}>
                <button onClick={() => setView("browse")} style={styles.btnPrimary}>
                  Explore Stories
                </button>
                <button onClick={() => setView("write")} style={styles.btnGhost}>
                  Submit Yours
                </button>
              </div>
            </section>

            {/* Featured */}
            {featured && (
              <section style={styles.section}>
                <div style={styles.sectionLabel}>✦ Featured Story</div>
                <div
                  style={{ ...styles.featuredCard, ...glowStyle(featured.color) }}
                  onClick={() => openStory(featured)}
                >
                  <div style={styles.featuredLeft}>
                    <div style={{ ...styles.featuredEmoji, background: featured.color + "33" }}>
                      {featured.cover}
                    </div>
                    <span style={{ ...styles.genrePill, background: featured.color + "44", color: "#fff" }}>
                      {featured.genre}
                    </span>
                  </div>
                  <div style={styles.featuredRight}>
                    <div style={styles.featuredMeta}>{featured.readTime} read · by {featured.author}</div>
                    <h2 style={styles.featuredTitle}>{featured.title}</h2>
                    <p style={styles.featuredExcerpt}>{featured.excerpt}</p>
                    <button style={{ ...styles.btnPrimary, marginTop: 24 }}>
                      Begin Reading →
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* Recent */}
            <section style={styles.section}>
              <div style={styles.sectionLabel}>✦ Recent Tales</div>
              <div style={styles.grid}>
                {stories.slice(1, 4).map((s) => (
                  <StoryCard key={s.id} story={s} onOpen={openStory} />
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: 36 }}>
                <button onClick={() => setView("browse")} style={styles.btnGhost}>
                  View All Stories →
                </button>
              </div>
            </section>

            {/* Manifesto */}
            <section style={styles.manifesto}>
              <div style={styles.manifestoInner}>
                <div style={styles.manifestoQuote}>"Every story is an act of faith —</div>
                <div style={styles.manifestoQuote2}>that someone, somewhere, needs exactly these words."</div>
                <div style={styles.manifestoAuthor}>— The Lore & Ink Creed</div>
              </div>
            </section>
          </div>
        )}

        {/* ===== BROWSE ===== */}
        {view === "browse" && (
          <div style={styles.fadeIn}>
            <div style={styles.pageHeader}>
              <h1 style={styles.pageTitle}>The Archive</h1>
              <p style={styles.pageSub}>Stories collected from the edges of imagination.</p>
            </div>
            <div style={styles.filterRow}>
              {GENRES.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGenre(g)}
                  style={{
                    ...styles.filterBtn,
                    ...(activeGenre === g ? styles.filterBtnActive : {}),
                  }}
                >
                  {g}
                </button>
              ))}
            </div>
            <div style={styles.grid}>
              {filtered.map((s) => (
                <StoryCard key={s.id} story={s} onOpen={openStory} />
              ))}
            </div>
          </div>
        )}

        {/* ===== READ ===== */}
        {view === "read" && activeStory && (
          <div style={styles.fadeIn}>
            <button onClick={() => setView("browse")} style={styles.backBtn}>
              ← Back to Archive
            </button>
            <article style={styles.article}>
              <div style={styles.articleHeader}>
                <div style={{ ...styles.articleEmoji, background: activeStory.color + "33" }}>
                  {activeStory.cover}
                </div>
                <span style={{ ...styles.genrePill, background: activeStory.color + "55", color: "#fff" }}>
                  {activeStory.genre}
                </span>
                <h1 style={styles.articleTitle}>{activeStory.title}</h1>
                <div style={styles.articleMeta}>
                  by <strong>{activeStory.author}</strong> · {activeStory.readTime} read
                </div>
                <p style={styles.articleExcerpt}>{activeStory.excerpt}</p>
                <div style={{ ...styles.articleDivider, background: activeStory.color }} />
              </div>
              <div style={styles.articleBody}>
                {activeStory.content.split("\n\n").map((para, i) => (
                  <p key={i} style={styles.articlePara}>{para}</p>
                ))}
              </div>
            </article>
            <div style={styles.moreSection}>
              <div style={styles.sectionLabel}>✦ More Stories</div>
              <div style={styles.grid}>
                {stories.filter((s) => s.id !== activeStory.id).slice(0, 3).map((s) => (
                  <StoryCard key={s.id} story={s} onOpen={openStory} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== WRITE ===== */}
        {view === "write" && (
          <div style={styles.fadeIn}>
            <div style={styles.pageHeader}>
              <h1 style={styles.pageTitle}>Submit a Story</h1>
              <p style={styles.pageSub}>Add your voice to the archive. All genres welcome.</p>
            </div>
            {submitted ? (
              <div style={styles.successBox}>
                <div style={styles.successEmoji}>✦</div>
                <h2 style={styles.successTitle}>Story Received</h2>
                <p style={styles.successText}>
                  Your story has been sent to the archive. We'll review it and reach out if it's selected.
                </p>
                <button
                  style={styles.btnPrimary}
                  onClick={() => { setSubmitted(false); setForm({ title: "", author: "", genre: "Fantasy", content: "" }); }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <div style={styles.formWrap}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Story Title</label>
                  <input
                    style={styles.input}
                    placeholder="The name of your tale..."
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                </div>
                <div style={styles.formRow}>
                  <div style={{ ...styles.formGroup, flex: 1 }}>
                    <label style={styles.label}>Your Name</label>
                    <input
                      style={styles.input}
                      placeholder="Author name or pen name"
                      value={form.author}
                      onChange={(e) => setForm({ ...form, author: e.target.value })}
                    />
                  </div>
                  <div style={{ ...styles.formGroup, flex: 1 }}>
                    <label style={styles.label}>Genre</label>
                    <select
                      style={styles.input}
                      value={form.genre}
                      onChange={(e) => setForm({ ...form, genre: e.target.value })}
                    >
                      {["Fantasy", "Sci-Fi", "Literary", "Thriller", "Horror", "Romance", "Other"].map((g) => (
                        <option key={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Your Story</label>
                  <textarea
                    style={{ ...styles.input, ...styles.textarea }}
                    placeholder="Begin your tale here..."
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                  />
                </div>
                <button
                  style={{
                    ...styles.btnPrimary,
                    opacity: form.title && form.author && form.content ? 1 : 0.45,
                    cursor: form.title && form.author && form.content ? "pointer" : "not-allowed",
                  }}
                  onClick={() => { if (form.title && form.author && form.content) setSubmitted(true); }}
                >
                  Submit to the Archive →
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={styles.logoMark}>✦</span> Lore & Ink · Stories for the sleepless
      </footer>
    </div>
  );
}

function StoryCard({ story, onOpen }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        ...styles.card,
        ...(hov ? { ...styles.cardHov, ...glowStyle(story.color) } : {}),
      }}
      onClick={() => onOpen(story)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ ...styles.cardTop, background: story.color + "22" }}>
        <span style={styles.cardEmoji}>{story.cover}</span>
        <span style={{ ...styles.genrePill, background: story.color + "55", color: "#fff" }}>
          {story.genre}
        </span>
      </div>
      <div style={styles.cardBody}>
        <div style={styles.cardMeta}>{story.readTime} · {story.author}</div>
        <h3 style={styles.cardTitle}>{story.title}</h3>
        <p style={styles.cardExcerpt}>{story.excerpt}</p>
      </div>
      <div style={{ ...styles.cardBar, background: story.color }} />
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #0a0612 0%, #0f0a1e 40%, #08111a 100%)",
    color: "#e8e0ff",
    fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif",
    position: "relative",
    zIndex: 1,
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 48px",
    transition: "background 0.3s, backdrop-filter 0.3s",
  },
  navScrolled: {
    background: "rgba(10,6,18,0.85)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(150,100,255,0.15)",
  },
  logo: {
    background: "none",
    border: "none",
    color: "#e8e0ff",
    fontSize: 22,
    fontFamily: "inherit",
    cursor: "pointer",
    fontWeight: 700,
    letterSpacing: "0.02em",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  logoMark: { color: "#a78bfa", fontSize: 20 },
  navLinks: { display: "flex", gap: 8 },
  navBtn: {
    background: "none",
    border: "none",
    color: "rgba(232,224,255,0.55)",
    fontSize: 15,
    fontFamily: "inherit",
    cursor: "pointer",
    padding: "8px 18px",
    borderRadius: 30,
    transition: "all 0.2s",
    letterSpacing: "0.03em",
  },
  navBtnActive: { color: "#e8e0ff", background: "rgba(167,139,250,0.15)" },
  main: { maxWidth: 1100, margin: "0 auto", padding: "120px 24px 60px", position: "relative", zIndex: 1 },
  fadeIn: { animation: "fadeIn 0.5s ease" },

  // Hero
  hero: { textAlign: "center", padding: "60px 0 80px" },
  heroEyebrow: {
    fontSize: 13,
    letterSpacing: "0.2em",
    color: "#a78bfa",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: "clamp(52px, 8vw, 96px)",
    fontWeight: 700,
    lineHeight: 1.05,
    margin: "0 0 20px",
    letterSpacing: "-0.02em",
    color: "#f0ebff",
  },
  heroAccent: {
    background: "linear-gradient(135deg, #a78bfa, #60a5fa, #f472b6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSub: {
    fontSize: 18,
    color: "rgba(232,224,255,0.6)",
    maxWidth: 520,
    margin: "0 auto 36px",
    lineHeight: 1.7,
  },
  heroBtns: { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" },

  // Buttons
  btnPrimary: {
    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    color: "#fff",
    border: "none",
    borderRadius: 30,
    padding: "14px 30px",
    fontSize: 15,
    fontFamily: "inherit",
    cursor: "pointer",
    fontWeight: 600,
    letterSpacing: "0.03em",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
  },
  btnGhost: {
    background: "transparent",
    color: "#a78bfa",
    border: "1.5px solid rgba(167,139,250,0.4)",
    borderRadius: 30,
    padding: "14px 30px",
    fontSize: 15,
    fontFamily: "inherit",
    cursor: "pointer",
    fontWeight: 500,
    letterSpacing: "0.03em",
    transition: "all 0.2s",
  },

  // Sections
  section: { marginBottom: 72 },
  sectionLabel: {
    fontSize: 12,
    letterSpacing: "0.18em",
    color: "#a78bfa",
    textTransform: "uppercase",
    marginBottom: 24,
  },

  // Featured
  featuredCard: {
    display: "flex",
    gap: 40,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(167,139,250,0.18)",
    borderRadius: 20,
    padding: "40px",
    cursor: "pointer",
    transition: "transform 0.25s",
    flexWrap: "wrap",
  },
  featuredLeft: { display: "flex", flexDirection: "column", alignItems: "center", gap: 16 },
  featuredEmoji: { fontSize: 72, width: 120, height: 120, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 20 },
  featuredRight: { flex: 1, minWidth: 240 },
  featuredMeta: { fontSize: 13, color: "rgba(232,224,255,0.45)", marginBottom: 10, letterSpacing: "0.06em" },
  featuredTitle: { fontSize: 36, fontWeight: 700, margin: "0 0 16px", lineHeight: 1.15, color: "#f0ebff" },
  featuredExcerpt: { fontSize: 17, color: "rgba(232,224,255,0.65)", lineHeight: 1.75, margin: 0 },

  // Cards
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 },
  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(167,139,250,0.12)",
    borderRadius: 16,
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  cardHov: {
    transform: "translateY(-5px)",
    borderColor: "rgba(167,139,250,0.35)",
  },
  cardTop: { padding: "24px 20px 20px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  cardEmoji: { fontSize: 38 },
  cardBody: { padding: "0 20px 20px", flex: 1 },
  cardMeta: { fontSize: 12, color: "rgba(232,224,255,0.4)", marginBottom: 8, letterSpacing: "0.06em" },
  cardTitle: { fontSize: 20, fontWeight: 700, margin: "0 0 10px", color: "#f0ebff", lineHeight: 1.25 },
  cardExcerpt: { fontSize: 14, color: "rgba(232,224,255,0.55)", lineHeight: 1.65, margin: 0 },
  cardBar: { height: 3, width: "100%", opacity: 0.7 },

  genrePill: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "4px 12px",
    borderRadius: 20,
  },

  // Manifesto
  manifesto: { padding: "60px 0 80px", textAlign: "center" },
  manifestoInner: { maxWidth: 700, margin: "0 auto" },
  manifestoQuote: { fontSize: "clamp(22px,3vw,32px)", fontStyle: "italic", color: "#d4c8ff", lineHeight: 1.5 },
  manifestoQuote2: { fontSize: "clamp(22px,3vw,32px)", fontStyle: "italic", color: "#d4c8ff", lineHeight: 1.5 },
  manifestoAuthor: { marginTop: 18, fontSize: 13, color: "rgba(167,139,250,0.6)", letterSpacing: "0.12em" },

  // Browse
  pageHeader: { textAlign: "center", marginBottom: 48, paddingTop: 20 },
  pageTitle: { fontSize: 52, fontWeight: 700, margin: "0 0 12px", color: "#f0ebff" },
  pageSub: { fontSize: 17, color: "rgba(232,224,255,0.5)", margin: 0 },
  filterRow: { display: "flex", gap: 10, marginBottom: 36, flexWrap: "wrap" },
  filterBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(167,139,250,0.2)",
    color: "rgba(232,224,255,0.55)",
    borderRadius: 30,
    padding: "8px 22px",
    fontSize: 14,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  filterBtnActive: {
    background: "rgba(124,58,237,0.3)",
    border: "1px solid rgba(167,139,250,0.6)",
    color: "#e8e0ff",
  },

  // Read
  backBtn: {
    background: "none",
    border: "none",
    color: "#a78bfa",
    fontSize: 14,
    fontFamily: "inherit",
    cursor: "pointer",
    marginBottom: 36,
    padding: 0,
    letterSpacing: "0.05em",
  },
  article: {
    maxWidth: 720,
    margin: "0 auto 72px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(167,139,250,0.14)",
    borderRadius: 20,
    padding: "48px 52px",
  },
  articleHeader: { textAlign: "center", marginBottom: 40 },
  articleEmoji: { fontSize: 56, width: 96, height: 96, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 20, margin: "0 auto 16px" },
  articleTitle: { fontSize: 40, fontWeight: 700, margin: "16px 0 12px", color: "#f0ebff", lineHeight: 1.15 },
  articleMeta: { fontSize: 14, color: "rgba(232,224,255,0.45)", marginBottom: 16, letterSpacing: "0.05em" },
  articleExcerpt: { fontSize: 17, fontStyle: "italic", color: "rgba(232,224,255,0.6)", lineHeight: 1.7, margin: 0 },
  articleDivider: { height: 2, width: 60, margin: "28px auto 0", opacity: 0.6, borderRadius: 2 },
  articleBody: {},
  articlePara: { fontSize: 17, lineHeight: 1.9, color: "rgba(232,224,255,0.8)", marginBottom: 24 },
  moreSection: { marginBottom: 72 },

  // Write
  formWrap: {
    maxWidth: 680,
    margin: "0 auto",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(167,139,250,0.14)",
    borderRadius: 20,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  formGroup: { display: "flex", flexDirection: "column", gap: 8 },
  formRow: { display: "flex", gap: 20 },
  label: { fontSize: 13, letterSpacing: "0.1em", color: "#a78bfa", textTransform: "uppercase", fontWeight: 600 },
  input: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(167,139,250,0.2)",
    borderRadius: 10,
    padding: "12px 16px",
    color: "#e8e0ff",
    fontSize: 16,
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s",
  },
  textarea: { minHeight: 240, resize: "vertical" },

  // Success
  successBox: {
    maxWidth: 480,
    margin: "0 auto",
    textAlign: "center",
    padding: "60px 40px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(167,139,250,0.18)",
    borderRadius: 20,
  },
  successEmoji: { fontSize: 48, color: "#a78bfa", marginBottom: 20 },
  successTitle: { fontSize: 30, fontWeight: 700, color: "#f0ebff", margin: "0 0 12px" },
  successText: { fontSize: 16, color: "rgba(232,224,255,0.6)", lineHeight: 1.7, marginBottom: 28 },

  footer: {
    textAlign: "center",
    padding: "32px",
    fontSize: 13,
    color: "rgba(167,139,250,0.35)",
    letterSpacing: "0.1em",
    borderTop: "1px solid rgba(167,139,250,0.08)",
    position: "relative",
    zIndex: 1,
  },
};

// Inject keyframe
const style = document.createElement("style");
style.textContent = `@keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(style);
