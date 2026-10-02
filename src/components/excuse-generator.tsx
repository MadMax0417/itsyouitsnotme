"use client";

import { useState } from "react";

const selectorItems = [
  "The Bible",
  "The Ghost",
  "The Water",
  "The Silence",
  "The Truth",
  "The Drama",
  "The Outburst",
  "The Chaos",
  "The Last Dance",
  "The Long Goodbye",
  "The Therapist",
  "The Spreadsheet",
  "The Zodiac",
] as const;

const vibeMessages: Record<(typeof selectorItems)[number], string[]> = {
  "The Bible": [
    "I am currently taking a brief spiritual sabbatical from emotional chaos. I will return with a calmer, more honest heart.",
    "My soul has entered a quiet season of detachment, and I need to let the noise go before I can love anyone properly.",
    "I am not ending this out of malice — I am simply being obedient to the peace I have been praying for.",
    "I’ve realized my destiny is not in a group chat, and my soul has politely requested a different chapter.",
    "God is not trying to ruin this for me; He is just making it very clear I should stop over-investing in the wrong story.",
    "I checked the signs, and every one of them politely suggested I stop texting you back.",
    "My higher self filed a complaint, and after a long review I decided to honor it this time.",
    "I asked for clarity and the universe responded with three birds and one unread message, so here we are.",
  ],
  "The Ghost": [
    "I have become a very haunted and unavailable person, which is why I am going to disappear for a while and let the silence do the talking.",
    "I have started fading into the background, and I think it's kinder to leave before this gets any more confusing.",
    "I am not ready to be emotionally visible, and pretending otherwise is unfair to both of us.",
    "I’ve accidentally become a professional ghost, and I’m trying to keep this one clean before I fully disappear.",
    "I’m not ignoring you; I’m simply becoming the kind of emotionally unavailable person who leaves before the plot twist arrives.",
    "My spirits have been asked to leave the building, and as their medium I have no choice but to comply.",
    "I’ve been advised that my vibe no longer matches this frequency, and I take professionalism seriously.",
    "I am now committed to a new avant-garde one-woman show where I simply do not reply.",
  ],
  "The Water": [
    "I feel like I am standing in a river and trying to hold on to something that has already moved on. I think we need to let it float away.",
    "This connection feels like a tide that keeps pulling me somewhere I can't fully stay. I need to stop fighting the current.",
    "I'm realizing I am not a place you can build a life on — I am more of a temporary pause, and I think that is the honest answer.",
    "I’ve been trying to swim upstream for months, and it turns out I’m not built for this particular current.",
    "This has become an emotional tide pool: a lot of splash, no actual landing, and I think we should both leave while it's still charming.",
    "Every time I think we hit land, another wave reminds me that solid ground is currently unavailable.",
    "I floated where this carried me for long enough, and the mariner's advice is to figure out where I'm going myself.",
    "I’m afraid I can no longer supply the swimwear or the solo on this particular ocean tour.",
  ],
  "The Silence": [
    "I'm actually entering a silent retreat for the next 6 to 18 months. I don't have my phone, but I'll think of you every time I hear a bell.",
    "I am taking a full emotional mute button for a while, and this is the least dramatic way to protect both of us.",
    "I need a break from all noise, and right now that means stepping away from conversations that keep circling without landing.",
    "My phone is officially on a wellness leave, and the silence is the only emotionally mature thing left in this situation.",
    "I’ve been practicing a very disciplined form of communication avoidance, and unfortunately it means I can no longer be available to this dynamic.",
    "I bought a silent retreat package and I intend to get my money's worth, so this is the last sentence I can say.",
    "My notification budget is spent for the season, and this conversation exceeded its allocation.",
    "Silence is apparently my love language now, and I hope this message does it justice.",
  ],
  "The Truth": [
    "The truth is I have been trying to want this more than I actually do, and that's not fair to either of us.",
    "I don't want to keep pretending I'm more invested than I am, because that would be dishonest and exhausting.",
    "I've been honest with myself, and it turns out my feelings have quietly been leaving the building.",
    "The truth is I keep hoping for a different conversation and being disappointed by the same one.",
    "I practiced radical honesty alone in my car, and the truth was roughly four minutes long. So here it is.",
    "I’ve run the numbers on my own effort and they did not meet the minimum viable investment.",
    "Brutal honesty, but gentle: I think we peaked around the second week and have been coasting downhill since.",
  ],
  "The Drama": [
    "This has become a full-time performance, and I am tired of rehearsing a version of us that no longer feels true.",
    "The chemistry has become more exhausting than exciting, and I think I need to stop the show before it gets worse.",
    "I can't keep acting like this is a plot twist worth staying for. I need to step out of the story before it eats my peace.",
    "I’ve started to notice this relationship has become a very expensive soap opera, and I’m choosing peace over another season.",
    "I’m not breaking up with you in a dramatic way; I’m simply refusing to keep auditioning for a role I no longer want.",
    "Last season's writers room and I have mutually agreed not to renew this storyline.",
    "This plot has too many twists and I have officially requested to be written out of my own franchise.",
    "The drama subscription auto-renewed and I forgot to cancel, so consider this my cancellation request.",
  ],
  "The Outburst": [
    "I'm trying to say this gently, but this dynamic has become too heavy for me to keep carrying alone.",
    "I need to stop trying to make this work when my body and mind keep signaling discomfort.",
    "I've reached the point where staying would be an act of avoidance, and I owe us both more clarity than that.",
    "I had a very small outburst internally, and it's taken me this whole message to apologize for interrupting.",
    "I need to protect my peace before I say something at full volume that I genuinely don't mean.",
    "This is me catching the outburst one second early, because I value us enough to stop just short of it.",
    "I almost typed a longer message; this one required a moment of emotional regulation.",
  ],
  "The Chaos": [
    "This relationship feels like a series of confusing interruptions, and I need a clean break before it gets more messy.",
    "I can't keep participating in a situation that leaves me feeling like a background character in my own life.",
    "I'm not saying this to hurt you — I'm saying it because the chaos is starting to feel more permanent than the peace.",
    "I’ve realized life with you is like a group project where no one reads the brief and I’m suddenly interested in my own grade.",
    "At this point, even my nervous system has started filing a formal complaint, so I’m leaving before the chaos gets a sequel.",
    "The group chat for this relationship has several unread messages and no admin, which feels symbolic.",
    "I think we have officially achieved pre-production on a sequel nobody asked for.",
    "This has enough plot holes that even my calendar has stopped making sense.",
  ],
  "The Last Dance": [
    "This is my final graceful bow, and I think it is kinder to leave now than to drag the ending into a more painful version.",
    "I want to end this with respect and clarity, before we both turn a decent beginning into a prolonged goodbye.",
    "I believe the kindest thing I can do is close this chapter cleanly and leave the dance before it becomes exhausting.",
    "I've learned a lot from this number, especially the choreography of leaving.",
    "The final song is playing and I think we both know it's my cue to take the last bow.",
    "I'd like to freeze the frame right here, mid-smile, before it becomes a blooper reel.",
    "Thank you for the spotlight, but I think my best performance is scheduled for a different stage.",
  ],
  "The Long Goodbye": [
    "I've been trying to outgrow this quietly, and I think it is time to admit the ending has already started.",
    "This has been a long, slow goodbye in my head, and I think it is kinder to name it before it turns into something uglier.",
    "I need to leave the door open for peace, which means I shouldn't keep rehearsing a future that isn't really there.",
    "I’ve now reached the stage where staying would just be an expensive way to keep pretending, so I’m choosing the clean exit.",
    "I think we’ve both been emotionally practicing a breakup for a while, and I’d rather do the graceful version than the messy one.",
    "We have been waving goodbye for what feels like several administrations, so let’s finally do it.",
    "I suspect we both already RSVP’d to the ending, I’m just reading the card out loud.",
    "The goodbye has had its own subplot for a while; I’m proposing we let it headline.",
  ],
  "The Therapist": [
    "My therapist says I should stop communicating indirectly, so consider this the direct version.",
    "I have done the inner work, and the inner work says goodbye.",
    "In our sessions I keep hearing the same summary, and it is: this needs to end.",
    "I brought this to my process circle and we agreed the kindest next step is a clean exit.",
    "My therapist charges by the hour and I am not spending another session on this.",
    "I’ve been journaling about this for months and the ending keeps winning the argument.",
  ],
  "The Spreadsheet": [
    "I ran the quarterly review and this relationship is consistently below target, so we're sunsetting it.",
    "The data says the effort curve peaked in Q1 and has been on a steady decline ever since.",
    "I built a model for this and it returned a single, unanimous recommendation: end it.",
    "The KPIs are not being met, and I am not authorized to extend the roadmap.",
    "I audited our last six months and the ROI simply does not justify a renewal.",
    "My notes app has four pages about this and every page ends with the same cell in red.",
  ],
  "The Zodiac": [
    "The stars have reviewed our chart and politely asked us not to text each other anymore.",
    "Mercury retrograde is doing the heavy lifting here, but so is the obvious incompatibility.",
    "My moon sign and yours just got into an argument, and I think we should honor the outcome.",
    "The transit suggests I go no-contact until the vibe improves, and it is not improving.",
    "I checked the compatibility app and it lowered itself to a whisper when I opened it.",
    "The universe is very clear that this season belongs to someone else entirely.",
  ],
};

const diagnostics: Record<(typeof selectorItems)[number], string[]> = {
  "The Bible": ["Unclear romantic intentions", "Emotional whiplash", "Favorite reframe: “I need space”"],
  "The Ghost": ["Poor communication", "Mixed signals", "Subtle avoidance"],
  "The Water": ["Mood swings", "Confusing energy", "No clear future"],
  "The Silence": ["Impossible to reach", "Stonewalling", "No accountability"],
  "The Truth": ["Honest but detached", "No effort from both sides", "Zero momentum"],
  "The Drama": ["High emotional volatility", "Constant chaos", "No peace"],
  "The Outburst": ["Reactivity", "Short fuse", "No calm resolution"],
  "The Chaos": ["Disappearing acts", "Never-ending confusion", "No clarity"],
  "The Last Dance": ["Trying to be kind", "Wasting time", "No real spark"],
  "The Long Goodbye": ["Lingering hope", "Fading effort", "Quiet resentment"],
  "The Therapist": ["Boundary issues", "Over-explaining", "Projection detected"],
  "The Spreadsheet": ["Negative ROI", "Missing data", "Zero deliverables"],
  "The Zodiac": ["Mercury retrograde", "Incompatible moons", "Misaligned stars"],
};

function getRandomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function ExcuseGenerator() {
  const [selectedVibe, setSelectedVibe] = useState<(typeof selectorItems)[number]>("The Bible");
  const [message, setMessage] = useState<string>(vibeMessages["The Bible"][0]);
  const [generation, setGeneration] = useState(4);
  const [copied, setCopied] = useState(false);

  const updateMessage = (vibe: (typeof selectorItems)[number]) => {
    const nextMessage = getRandomItem(vibeMessages[vibe]);
    setSelectedVibe(vibe);
    setMessage(nextMessage);
    setGeneration((current) => current + 1);
    setCopied(false);
  };

  const handleRegenerate = () => {
    const nextVibe = getRandomItem(selectorItems.filter((vibe) => vibe !== selectedVibe));
    updateMessage(nextVibe);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="excuse-generator" className="mx-auto w-full max-w-[1200px] px-5 py-6">
      <div className="rounded-[26px] border border-[#1c1829] bg-[#f5f1ee] p-4 shadow-[0_18px_30px_rgba(28,24,41,0.08)]">
        <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#2b2740]">
          <span className="rounded-full border border-[#c7bfcf] bg-[#fef9ff] px-2 py-1">Exit</span>
          <span className="rounded-full border border-[#c7bfcf] bg-[#fef9ff] px-2 py-1">No active</span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_1.6fr]">
          <div className="rounded-[22px] border border-[#201d2d] bg-[#f5f2ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-black uppercase tracking-[0.15em] text-[#2b2740]">Choose Your Vibe</h3>
              <button
                type="button"
                onClick={handleRegenerate}
                className="text-xl text-[#ff4fb0]"
                aria-label="Regenerate vibe"
              >
                <span key={generation} className="spin-once inline-block" aria-hidden>
                  ↻
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {selectorItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateMessage(item)}
                  className={`rounded-xl border border-[#b6a9d1] px-2 py-2 text-left text-[12px] font-semibold text-[#1f1d2e] transition ${
                    item === selectedVibe
                      ? "bg-[#ff4fb0] text-white shadow-[0_6px_18px_rgba(255,79,176,0.25)]"
                      : "bg-white/80"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-[#d3c7f1] bg-[#f3ecff] p-3 text-[11px] font-medium text-[#514c63]">
              <span className="font-black uppercase tracking-[0.12em] text-[#2a2940]">Exit Diagnostics</span>
              <ul key={selectedVibe} className="animate-message-swap mt-3 space-y-1.5">
                {diagnostics[selectedVibe].map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[22px] border border-[#1b1728] bg-[#fffaf7] p-4">
            <div className="mb-4 flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#34304a]">
              <span className="rounded-full border border-[#c8c0d9] bg-[#f4f3ff] px-2 py-1.5">Vibe: {selectedVibe}</span>
              <span className="rounded-full border border-[#c8c0d9] bg-[#f4f3ff] px-2 py-1.5">
                Generation {generation}:20
              </span>
            </div>

            <div className="rounded-[22px] border border-[#d4cedi] bg-[#f6f1ef] p-5 text-[15px] font-medium text-[#1d1a2c] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:text-[22px]">
              <p key={generation} className="animate-message-swap leading-[1.1] tracking-[-0.05em]">“{message}”</p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleRegenerate}
                className="rounded-full bg-[#ff4fb0] px-5 py-2.5 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_9px_20px_rgba(255,79,176,0.28)]"
              >
                Regenerate Another
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-full border border-[#2d2940] bg-white px-5 py-2.5 text-sm font-black uppercase tracking-[0.08em] text-[#1e1b2e]"
              >
                <span key={copied ? "copied" : "copy"} className="inline-block animate-pop-in">
                  {copied ? "Copied!" : "Copy to Clipboard"}
                </span>
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#d8d0d5] pt-4 text-center">
              <div>
                <div className="text-3xl font-black tracking-[-0.06em] text-[#1d1a2c]">52.8k</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b5666]">Excuse generated</div>
              </div>
              <div>
                <div className="text-3xl font-black tracking-[-0.06em] text-[#1d1a2c]">94.2%</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b5666]">No counter arguments</div>
              </div>
              <div>
                <div className="text-3xl font-black tracking-[-0.06em] text-[#1d1a2c]">0.0%</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b5666]">Regrets recorded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
