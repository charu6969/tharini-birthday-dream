import { AnimatePresence, motion, useInView } from "motion/react";
import {
  Gift,
  Heart,
  ImagePlus,
  Music2,
  Pause,
  Play,
  Sparkles,
  Volume2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import friendshipNight from "@/assets/friendship-night-boy-girl.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const birthday = new Date(2026, 8, 26, 0, 0, 0);

const letterLines = [
  "Over the years, I've probably given you enough reasons to be annoyed with me...",
  "I've made you cry more times than I'd ever want to admit.",
  "And somehow...",
  "I've also been lucky enough to be there when YOU were crying.",
  "We've had our fights.",
  "We've had our stupid moments.",
  "We've laughed at things that weren't even funny.",
  "We've annoyed each other.",
  "But through all of it...",
];

const understanding = [
  { prompt: "When I'm not okay...", answer: "Kuch toh hua haii mereko 👀", icon: "☁️" },
  { prompt: "When I say ‘I'm fine’...", answer: "She knows I'm NOT fine.", icon: "🌧️" },
  { prompt: "When I suddenly become quiet...", answer: "She notices.", icon: "🤫" },
  { prompt: "When my mood changes...", answer: "She notices before everyone else.", icon: "🌙" },
];

const timeline = [
  ["🌸", "The good days"], ["😂", "The stupid laughs"], ["🥹", "The crying sessions"],
  ["😤", "The fights"], ["🤍", "The ‘I'm here’ moments"], ["🌙", "The late-night conversations"],
  ["🫂", "The times you somehow made everything feel okay"],
];

const traits = [
  ["🌸", "Cute", "Unnecessarily cute sometimes."],
  ["🫶", "Caring", "Even when you pretend you're not."],
  ["🥹", "Understanding", "Probably your biggest superpower."],
  ["😂", "Slightly crazy", "The best kind of chaos."],
  ["😤", "Sometimes annoying", "But I wouldn't change it."],
  ["💗", "Extremely precious", "More than you probably realize."],
  ["👀", "Always knows", "Somehow, before I say a word."],
  ["🤍", "Always there", "I don't say thank you enough for that."],
];

const captions = [
  "Us being us 💗", "Certified chaos.", "One of my favourite humans.", "Why are we like this? 😭",
  "Somehow we survived.", "Core memory.", "That smile >>>", "Our little world.",
  "Best kind of nonsense.", "Always on my side.", "A forever favourite.", "More memories soon...",
];

const fullLetter = [
  "Dear Tharini,",
  "Happy 21st Birthday. ❤️",
  "I honestly don't know how to put everything we've been through into a few paragraphs.",
  "I've made you cry. I've annoyed you. I've probably tested your patience more times than I should have.",
  "But you've also been there when I've needed someone. You've understood my mood without me having to explain it. You've noticed when something was wrong even when I tried pretending everything was fine.",
  "And that little ‘kuch toh hua haii mereko’ energy of yours... I don't know how you do it.",
  "You're cute. You're caring. You're ridiculously understanding. And most importantly, you're YOU.",
  "Thank you for standing by me. Thank you for listening. Thank you for understanding. Thank you for staying.",
  "I hope when you look back at your 21st birthday, you remember how loved and appreciated you are.",
  "You deserve beautiful things. You deserve happiness. You deserve people who understand your heart. And I hope I get to be one of those people for a very, very long time.",
  "Happy 21st, Tharini. 🫶",
  "Here's to more fights, more stupid conversations, more laughing until we can't breathe, more random ‘kuch toh hua haii’ moments, and a whole lot more memories.",
  "Stay exactly the way you are. Because that's the Tharini I love having in my life.",
  "— Your favourite headache 💗",
];

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: "-10%" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: .75, delay }} className={className}>{children}</motion.div>;
}

function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={cn("story-section relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32", className)}><div className="relative z-10 mx-auto max-w-5xl">{children}</div></section>;
}

function FloatingMagic({ dark = false }: { dark?: boolean }) {
  const items = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    char: ["✦", "♡", "·", "✿"][i % 4], left: `${(i * 37) % 96}%`, delay: `${(i % 7) * -.9}s`, duration: `${6 + (i % 5)}s`, size: `${12 + (i % 4) * 4}px`,
  })), []);
  return <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", dark ? "text-moon-glow" : "text-primary/40")} aria-hidden="true">{items.map((item, i) => <span key={i} className="magic-float absolute -bottom-8" style={{ left: item.left, animationDelay: item.delay, animationDuration: item.duration, fontSize: item.size }}>{item.char}</span>)}</div>;
}

function Intro({ onOpen }: { onOpen: () => void }) {
  return <motion.div className="intro-screen fixed inset-0 z-50 grid place-items-center overflow-hidden px-6 text-center" exit={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }} transition={{ duration: 1 }}>
    <FloatingMagic />
    <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="relative z-10 max-w-2xl">
      <p className="mb-5 text-sm font-bold uppercase tracking-[.28em] text-primary/70">A little something, just for you</p>
      <h1 className="font-hand text-5xl text-foreground sm:text-7xl">Hey Tharini... <span className="inline-block animate-heartbeat">💗</span></h1>
      <motion.p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}>Someone has been trying to find the right words for you...</motion.p>
      <motion.p className="font-hand mt-4 text-2xl text-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>But honestly... I don't think words will ever be enough.</motion.p>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }}>
        <Button onClick={onOpen} size="lg" className="mt-10 h-auto rounded-full px-7 py-4 text-base shadow-glow hover:-translate-y-1">Open this little world I made for you <Sparkles /></Button>
      </motion.div>
    </motion.div>
    <div className="absolute bottom-7 font-hand text-lg text-primary/70">26 · 09 · 2026</div>
  </motion.div>;
}

function Countdown() {
  const calculate = () => Math.max(0, birthday.getTime() - Date.now());
  const [distance, setDistance] = useState(calculate);
  useEffect(() => { const timer = window.setInterval(() => setDistance(calculate()), 1000); return () => window.clearInterval(timer); }, []);
  const values = [
    [Math.floor(distance / 86400000), "days"], [Math.floor(distance / 3600000) % 24, "hours"],
    [Math.floor(distance / 60000) % 60, "minutes"], [Math.floor(distance / 1000) % 60, "seconds"],
  ] as const;
  return <Section className="countdown-band text-center">
    <FloatingMagic />
    <Reveal><p className="eyebrow">The sweetest wait</p><h2 className="section-title">{distance > 0 ? "Counting down to you" : "Today is your day!"}</h2><p className="mx-auto mt-4 max-w-xl text-muted-foreground">{distance > 0 ? "Counting down every second until your special day 🎂✨" : "The countdown is over — let the celebrating begin! 🎉"}</p></Reveal>
    <div className="mx-auto mt-10 grid max-w-3xl grid-cols-4 gap-2 sm:gap-5">{values.map(([value, label], i) => <Reveal key={label} delay={i * .08}><div className="time-card"><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div></Reveal>)}</div>
  </Section>;
}

function BirthdayHero() {
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const celebrated = candles.every((c) => !c);
  const blow = (index: number) => setCandles((old) => old.map((c, i) => i === index ? false : c));
  return <Section className="birthday-scene min-h-screen text-center" id="celebrate">
    <FloatingMagic />
    <div className="balloon balloon-one">21</div><div className="balloon balloon-two">♡</div>
    <Reveal><p className="eyebrow">26 · 09 · 2026</p><h2 className="font-display text-4xl font-bold leading-tight sm:text-6xl">Happy 21st Birthday,<br /><span className="font-hand text-primary">Tharini!</span> 🎂💗</h2></Reveal>
    <motion.div className="big-age" animate={{ scale: [1, 1.04, 1] }} transition={{ repeat: Infinity, duration: 3 }}>21</motion.div>
    <div className="cake mx-auto" aria-label="Birthday cake with five clickable candles">
      <div className="flex justify-center gap-4">{candles.map((lit, i) => <button key={i} onClick={() => blow(i)} className="candle" aria-label={lit ? `Blow out candle ${i + 1}` : `Candle ${i + 1} is out`}><span className={cn("flame", !lit && "flame-out")}>◆</span></button>)}</div>
      <div className="cake-top" /><div className="cake-body">THARINI</div><div className="cake-plate" />
    </div>
    <p className="mt-6 text-sm font-semibold text-primary">{celebrated ? "You made a wish! ✨" : "Tap each little flame and make a wish"}</p>
    <AnimatePresence>{celebrated && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="confetti-field" aria-hidden="true">{Array.from({ length: 32 }, (_, i) => <i key={i} style={{ left: `${(i * 29) % 100}%`, animationDelay: `${(i % 8) * .1}s` }} />)}</motion.div>}</AnimatePresence>
    <Reveal className="mt-16"><p className="font-hand text-3xl text-primary">21 looks really good on you. 🌸</p><p className="mt-5 text-lg text-muted-foreground">But this isn't really about you turning 21...</p><p className="mt-2 font-display text-2xl font-bold">It's about celebrating YOU.</p></Reveal>
  </Section>;
}

function EmotionalLetter() {
  return <Section className="paper-section"><Reveal className="mx-auto max-w-3xl text-center"><p className="eyebrow">A tiny confession</p><h2 className="section-title font-hand">Okay... let me tell you something.</h2></Reveal>
    <div className="letter-paper mx-auto mt-12 max-w-3xl">{letterLines.map((line, i) => <Reveal key={line} delay={Math.min(i * .05, .3)}><p className={cn("font-hand border-b border-primary/10 py-4 text-xl leading-relaxed sm:text-2xl", i > 5 && "text-center")}>{line}</p></Reveal>)}<Reveal><p className="stayed-word font-hand mt-8 text-center text-5xl">You stayed.</p></Reveal></div>
  </Section>;
}

function YouJustKnow() {
  return <Section className="warm-section"><Reveal className="text-center"><p className="eyebrow">That little superpower of yours</p><h2 className="section-title">Because somehow...<br /><span className="font-hand text-primary">you just know.</span></h2></Reveal>
    <div className="mt-12 grid gap-4 sm:grid-cols-2">{understanding.map((item, i) => <Reveal key={item.prompt} delay={i * .08}><motion.div whileHover={{ y: -5, rotate: i % 2 ? 1 : -1 }} className="understand-card"><div className="text-4xl">{item.icon}</div><p className="mt-4 text-sm font-semibold text-muted-foreground">{item.prompt}</p><div className="chat-bubble mt-5">{item.answer}</div></motion.div></Reveal>)}</div>
    <Reveal className="mx-auto mt-14 max-w-2xl text-center"><p className="text-xl leading-relaxed">You're one of those rare people who don't need an explanation.</p><p className="font-hand mt-3 text-4xl text-primary">You just understand.</p></Reveal>
  </Section>;
}

function MemoryTimeline() {
  return <Section className="timeline-section"><Reveal className="text-center"><p className="eyebrow">Every version of us</p><h2 className="section-title">Through everything...</h2></Reveal>
    <div className="timeline mx-auto mt-14 max-w-xl">{timeline.map(([icon, text], i) => <Reveal key={text} delay={.04 * i}><div className="timeline-item"><div className="timeline-dot">{icon}</div><p>{text}</p></div></Reveal>)}</div>
    <Reveal className="mt-12 text-center"><p className="text-muted-foreground">And every single time...</p><div className="mx-auto mt-5 grid h-24 w-24 place-items-center rounded-full bg-primary/10"><Heart className="h-12 w-12 animate-heartbeat fill-primary text-primary" /></div><p className="font-hand mt-5 text-4xl">You were there.</p></Reveal>
  </Section>;
}

function PersonalityCards() {
  const [active, setActive] = useState<number | null>(null);
  return <Section className="personality-section"><Reveal className="text-center"><p className="eyebrow">The Tharini collection</p><h2 className="section-title">Things that make you... <span className="font-hand text-primary">YOU 💗</span></h2></Reveal>
    <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">{traits.map(([icon, title, note], i) => <motion.button key={title} onClick={() => setActive(active === i ? null : i)} whileTap={{ scale: .96 }} className={cn("trait-card", active === i && "trait-active")} aria-expanded={active === i}><span className="text-3xl">{icon}</span><strong>{title}</strong><AnimatePresence>{active === i && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>{note}</motion.p>}</AnimatePresence></motion.button>)}</div>
  </Section>;
}

function ThankYou() {
  const lines = ["I know I don't say this enough.", "You've been one of the most constant people in my life.", "You've seen versions of me that not everyone gets to see.", "You've tolerated my nonsense.", "You've understood my silence.", "You've stayed through my worst moods.", "And somehow...", "You still choose to be my person."];
  return <Section className="midnight-section text-center text-night-foreground"><FloatingMagic dark /><div className="mx-auto max-w-3xl">{lines.map((line, i) => <Reveal key={line}><p className={cn("my-8 text-xl leading-relaxed sm:text-3xl", i === 0 && "font-hand text-4xl", i === lines.length - 1 && "font-display font-bold text-moon-glow")}>{line}</p></Reveal>)}<Reveal><h2 className="thank-you font-hand mt-20 text-7xl">Thank you.</h2></Reveal></div></Section>;
}

function PhotoGallery() {
  return <Section className="scrapbook-section"><Reveal className="text-center"><p className="eyebrow">Reserved for our chaos</p><h2 className="section-title">The memory wall 📸</h2><p className="mx-auto mt-4 max-w-lg text-muted-foreground">Twelve little spaces waiting for the moments only we understand.</p></Reveal>
    <div className="photo-grid mt-14">{captions.map((caption, i) => <Reveal key={caption} delay={(i % 4) * .05}><motion.div whileHover={{ rotate: 0, y: -8, scale: 1.03 }} className="polaroid" style={{ transform: `rotate(${[-3, 2, -1, 3][i % 4]}deg)` }}><div className="photo-placeholder"><ImagePlus /><span>memory {String(i + 1).padStart(2, "0")}</span></div><p className="font-hand">{caption}</p></motion.div></Reveal>)}</div>
  </Section>;
}

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(34);
  return <Section className="music-section"><Reveal className="mx-auto max-w-3xl text-center"><p className="eyebrow">Our little world</p><h2 className="section-title">Every friendship has a soundtrack...</h2>
    <div className={cn("music-player mt-12", playing && "music-playing")}><div className="album"><Heart className="fill-primary text-primary" /></div><div className="min-w-0 text-left"><p className="truncate font-display text-lg font-bold">Our song goes here</p><p className="text-sm text-muted-foreground">A little placeholder for your chosen song</p><label className="sr-only" htmlFor="song-progress">Song progress</label><input id="song-progress" type="range" min="0" max="100" value={progress} onChange={(e) => setProgress(Number(e.target.value))} className="mt-4 w-full accent-primary" /></div><Button size="icon" className="h-12 w-12 shrink-0 rounded-full" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause song preview" : "Play song preview"}>{playing ? <Pause /> : <Play />}</Button></div>
    <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"><Volume2 className="h-3 w-3" /> Music never starts automatically</p>
  </Reveal></Section>;
}

function FriendshipScene() {
  return <section className="friendship-scene relative min-h-[90vh] overflow-hidden"><img src={friendshipNight} alt="A boy and his girl best friend sitting together beneath a crescent moon" loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover" /><div className="scene-overlay absolute inset-0" /><FloatingMagic dark /><div className="relative z-10 mx-auto flex min-h-[90vh] max-w-4xl items-end px-6 pb-20 text-center text-night-foreground sm:pb-28"><Reveal><p className="font-hand text-3xl leading-relaxed sm:text-5xl">Some people come into your life...<br /><span className="text-xl sm:text-2xl">They stay for a chapter. Some stay for a season. And then there are people who somehow become part of your story.</span></p><p className="mt-8 font-display text-2xl font-bold text-moon-glow">You're definitely one of those people.</p></Reveal></div></section>;
}

function LetterSection() {
  const [open, setOpen] = useState(false);
  return <Section className="envelope-section text-center"><Reveal><p className="eyebrow">The part I really wanted to say</p><h2 className="section-title">I wrote you something...</h2></Reveal>
    <motion.div className={cn("envelope mx-auto mt-14", open && "envelope-open")} onClick={() => setOpen(true)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setOpen(true); }} aria-label="Open birthday letter"><div className="envelope-flap" /><Heart className="envelope-seal fill-primary text-primary" /></motion.div>
    {!open && <Button onClick={() => setOpen(true)} size="lg" className="mt-10 rounded-full">Open it 💌</Button>}
    <AnimatePresence>{open && <motion.article initial={{ opacity: 0, y: 80, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .8 }} className="full-letter mx-auto mt-12 max-w-3xl text-left">{fullLetter.map((p, i) => <motion.p key={p} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: Math.min(i * .06, .3) }} className={cn(i === 0 || i === fullLetter.length - 1 ? "font-hand text-3xl" : "")}>{p}</motion.p>)}</motion.article>}</AnimatePresence>
  </Section>;
}

function GiftReveal() {
  const [open, setOpen] = useState(false);
  return <Section className="gift-section min-h-screen text-center"><FloatingMagic /><Reveal><p className="eyebrow">Wait...</p><h2 className="section-title">There's one more thing.</h2></Reveal>
    <button onClick={() => setOpen(true)} className={cn("gift-box mx-auto mt-16", open && "gift-open")} aria-label="Open final birthday surprise"><span className="gift-lid" /><span className="gift-body"><Gift /></span></button>
    {!open && <Button onClick={() => setOpen(true)} size="lg" className="mt-10 rounded-full">Open it 🎁</Button>}
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", duration: 1 }} className="mt-14"><Sparkles className="mx-auto h-10 w-10 text-primary" /><h2 className="font-display mt-5 text-5xl font-black sm:text-8xl">THARINI <span className="text-primary">21</span> ✨</h2><p className="mx-auto mt-8 max-w-xl text-xl">Happy Birthday to one of the most special people in my life. 💗</p><p className="font-hand mt-5 text-3xl text-primary">Thank you for being my person.</p><p className="mt-6 font-bold">Now go enjoy being 21, birthday girl. 🎀</p></motion.div>}</AnimatePresence>
  </Section>;
}

function FinalScene() {
  return <Section className="final-scene flex min-h-screen items-center text-center text-night-foreground"><FloatingMagic dark /><Reveal className="mx-auto max-w-3xl"><div className="moon mx-auto" /><p className="font-hand mt-14 text-4xl leading-relaxed sm:text-6xl">Wherever life takes us...</p><p className="mt-6 text-xl leading-relaxed text-night-muted">I hope we always find our way back to these moments.</p><h2 className="font-display mt-16 text-4xl font-bold text-moon-glow sm:text-6xl">Happy Birthday, Tharini. ❤️</h2><p className="mt-20 text-xs text-night-muted">Made with way too many emotions and probably not enough sleep. 😭</p></Reveal></Section>;
}

export function BirthdayStory() {
  const [opened, setOpened] = useState(false);
  useEffect(() => { document.body.style.overflow = opened ? "" : "hidden"; return () => { document.body.style.overflow = ""; }; }, [opened]);
  return <main className="birthday-story"><AnimatePresence>{!opened && <Intro onOpen={() => setOpened(true)} />}</AnimatePresence>{opened && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}><Countdown /><BirthdayHero /><EmotionalLetter /><YouJustKnow /><MemoryTimeline /><PersonalityCards /><ThankYou /><PhotoGallery /><MusicPlayer /><FriendshipScene /><LetterSection /><GiftReveal /><FinalScene /></motion.div>}</main>;
}