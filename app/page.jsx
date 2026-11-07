import Image from "next/image";
import Icons, { Icon } from "./Icons";
import Reveal from "./Reveal";
import hero from "../public/img/hero.png";
import keeper from "../public/img/keeper.jpg";
import roadHome from "../public/img/road-home-footer.jpg";

const APP_STORE = "https://vaultaire.app/go/app-store?ct=web_home";

const TRUST = [
  ["user-circle-dashed", "No accounts", "Nothing to sign up for"],
  ["envelope-simple-open", "No email required", "Or phone number"],
  ["shield-check", "No backdoors", "We don’t store keys"],
  ["cloud-check", "Encrypted before iCloud", "Servers see ciphertext only"],
];

const PROBLEMS = [
  ["eye-slash", "A Hidden album is a label, not a lock", "Anyone with your unlocked phone can open it in a couple of taps."],
  ["calculator", "Calculator disguises are a costume", "Once someone knows the trick, everything behind it is in plain view."],
  ["list-dashes", "Vault lists give you away", "Vaultaire never opens to a list of named vaults. Only a pattern grid."],
  ["hard-drives", "Servers are someone else’s computer", "Everything is encrypted on-device first. No server ever receives your keys."],
];

const STATS = [
  ["lock-key", "AES-256", "GCM, for every file"],
  ["key", "600k", "PBKDF2 iterations"],
  ["list-dashes", "9 words", "Recovery phrase"],
  ["user-circle-dashed", "Zero", "Accounts or emails"],
];

const FOLDERS = [
  ["Secret Cat", 24], ["Ninja Squirrel", 9], ["Spy Donut", 13],
  ["Top Secret Duck", 41], ["Not Memes", 108], ["Classified Snacks", 7],
  ["Covert Llama", 16], ["Banana Protocol", 3], ["Agent Hamster", 32],
];

// [icon, title, body, tag, isPro]
const FEATURES = [
  ["dots-nine", "Pattern Encryption", "Draw on a 5×5 grid. PBKDF2 turns it into a 256-bit key that unwraps your vault’s random master key.", "Core"],
  ["key", "Secret Phrase", "A nine-word recovery phrase (or your own) opens a separate encrypted envelope if you forget your pattern.", "Core"],
  ["mask-happy", "Plausible Deniability", "Different patterns open different vaults. No picker, no list. Nothing on screen says another vault exists.", "Core"],
  ["eye-slash", "Hidden Vaults", "The unlock screen never lists vaults, and file names on disk never reveal which vault they belong to.", "Core"],
  ["siren", "Duress Mode", "A special pattern opens one vault and silently removes the others from the device. Cloud backups stay recoverable.", "Pro", true],
  ["cloud-check", "iCloud Backup", "On by default. A separate pattern-derived key encrypts padded records before CloudKit ever sees them.", "Free + Pro"],
  ["share-network", "Secure Sharing", "Share a vault with a secret phrase. Limit opens, set an expiry, block export.", "Pro to create · free to open", true],
  ["devices", "Device Sync", "The same vault on iPhone and iPad, encrypted on-device before iCloud receives it.", "Pro", true],
  ["camera", "Secure Camera", "Shoot photos and video straight into the vault. Nothing touches your camera roll.", "Core"],
  ["squares-four", "App Icons", "Swap the icon for Calculator, Printer or five other utilities. Add a custom-named tile on iOS 18.", "Pro", true],
  ["shield-check", "Architecture", "AES-256-GCM for files, metadata, thumbnails, indexes and key wrappers. Separate vault, backup and recovery keys.", "Core"],
  ["hand-tap", "Ease of Use", "No setup wizard. AES-256 encryption that feels like unlocking your phone.", "Core"],
];

const SPEC = [
  ["Files", "AES-256-GCM: content, thumbnails, indexes"],
  ["Keys", "PBKDF2-HMAC-SHA512 · 600,000 iterations"],
  ["Metadata", "Authenticated AES-256-GCM"],
  ["Cloud", "Encrypted on device before iCloud receives it"],
];

const FREE = ["Up to 3 vaults", "100 photos + 10 videos total", "Pattern encryption & recovery phrase", "Encrypted iCloud backup", "Secure camera", "Open shared vaults"];
const PRO = ["Unlimited vaults & files", "Duress Mode", "Device Sync for iPhone + iPad", "Create secure shares with limits & expiry", "Disguised app icons", "Everything in Free"];

const FAQ = [
  ["What is Vaultaire?", "A local-first encrypted vault for iPhone and iPad. Files are encrypted with AES-256-GCM under a random master key, unlocked by a pattern you draw. No account."],
  ["What if I forget my pattern?", "Use your nine-word recovery phrase to regain access. Without the pattern or the phrase, nobody, including us, can decrypt your vault."],
  ["Can Apple see my files?", "No. Everything is encrypted on your device before iCloud receives it. Apple only ever stores ciphertext."],
  ["Do I need an account?", "No account, no email, no phone number. Install it and draw a pattern."],
  ["Do you optimize my data?", "Photos and videos are stored in an optimized form by default. Switch to “Original” in Settings to keep full quality."],
  ["How does sharing work?", "Share a vault with a secret phrase. You can limit opens, set an expiry and block export. Creating a share needs Pro; opening one is free."],
  ["Do you support folders?", "Yes. Folders and nested folders, with custom ordering."],
  ["What can I store?", "Photos, videos, documents, notes: any file type."],
  ["How many vaults can I have?", "Up to 3 on Free. Unlimited on Pro."],
  ["How many files per vault?", "Free includes 100 photos and 10 videos in total. Pro is unlimited."],
  ["Do you collect analytics?", "Anonymous usage and crash data, on by default. Turn it off any time with “Share errors anonymously” in Settings."],
];

// Verbatim 5-star reviews from the US App Store listing (Oct 2026 and earlier).
const APP_STORE_REVIEWS = "https://apps.apple.com/us/app/photo-vault-vaultaire/id6758529311?see-all=reviews";
const LEAD_REVIEW = {
  title: "Be more secure",
  body: "Love this app! Just one more (secure) way to keep the files, pics, or videos that really aren’t anyone else’s business but your own. Very intuitive interface, highly recommend.",
  name: "BoyLenny",
  date: "Oct 2026",
};
const REVIEWS = [
  ["Best photo vault app out!", "Super easy to use and does exactly what I need. Highly recommend to everyone!", "Andrewd3211", "Sep 2026"],
  ["Clean and Modern Design", "The app has a clean and modern interface. The design looks simple, and the layout is easy to understand. Overall, it feels well-organized.", "Zyphor Vexora", "Oct 2026"],
  ["great app", "Excellent UI, secure way to hide and organize files.", "bknc_m3", "Oct 2026"],
  ["Thank you!", "Exactly what I was looking for. Works perfectly.", "Perelises", "Jun 2026"],
];

const Stars = () => (
  <span className="stars" role="img" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star-fill" />)}
  </span>
);

const COMPARE = ["Apple Hidden Album", "Keepsafe", "Private Photo Vault", "Calculator apps"];

const num = (i) => String(i + 1).padStart(2, "0") + ".";
const stagger = (i) => ({ "--i": i });

function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((t) => <li key={t}><Icon name="plus" />{t}</li>)}
    </ul>
  );
}

function Folder({ name, count }) {
  return (
    <div className="folder">
      <svg viewBox="0 0 100 80" aria-hidden="true">
        <path className="folder__back" d="M10 2h22c3 0 5 1 7 3l4 4h47a8 8 0 0 1 8 8v53a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8z" />
        <rect className="folder__sheet" x="12" y="20" width="70" height="50" rx="3" />
        <rect className="folder__sheet folder__sheet--2" x="18" y="20" width="70" height="50" rx="3" />
        <g className="folder__lid">
          <rect className="folder__front" x="2" y="17" width="96" height="61" rx="8" />
          <rect x="2" y="66" width="96" height="1.2" fill="#fff" opacity=".3" />
          <rect x="2" y="70" width="96" height="1.2" fill="#fff" opacity=".22" />
        </g>
      </svg>
      <span className="folder__name">{name}</span>
      <span className="folder__count">{count} items</span>
    </div>
  );
}

const DOTS = Array.from({ length: 25 }, (_, k) => [12 + (k % 5) * 22, 12 + Math.floor(k / 5) * 22]);

export default function Home() {
  return (
    <>
      <Icons />
      <Reveal />
      <div className="page">
        <header className="site-header">
          <a className="brand" href="/" aria-label="Vaultaire home">
            <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden="true"><rect x="0.5" y="0.5" width="39" height="39" fill="#1e3aa7" /><path d="M9 11h7l4 11 4-11h7L23 31h-6z" fill="#fcf2e2" /></svg>
            Vaultaire
          </a>
          <nav className="nav" aria-label="Main">
            <a href="/features">Features</a>
            <a href="/how-it-works">How it works</a>
            <a href="/security">Security</a>
            <a href="/plans">Plans</a>
            <a href="/faq">FAQ</a>
          </nav>
          <a className="header-cta" href="https://vaultaire.app/go/app-store?ct=web_header_nav">
            Get the app <Icon name="arrow-up-right" />
          </a>
        </header>

        <main>
          {/* Hero */}
          <section className="section hero">
            <div className="hero__inner">
              <p className="hero__eyebrow">
                <span className="hero__stars" role="img" aria-label="5 stars">{[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star-fill" />)}</span>
                4.7 on the App Store
              </p>
              <h1 className="h-display hero__title">
                Your Hidden album{" "}
                <em className="hero__twist">
                  isn’t actually
                  <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14C60 6 120 5 180 9s90 4 117-3" /></svg>
                </em>{" "}
                hidden.
                <span className="hero__answer">Vaultaire is.</span>
              </h1>
              <p className="hero__lead">Your photos move into a vault only your pattern can open, encrypted on your phone. No account, no sign-up, no email.</p>
              <div className="hero__actions">
                <a className="btn btn--ink" href={APP_STORE}><Icon name="download-simple" />Download free</a>
                <a className="btn btn--outline" href="/how-it-works">See how it works</a>
              </div>
              <div className="hero__meta">
                <span>AES-256-GCM</span>
                <span>Zero accounts</span>
              </div>
            </div>
            <figure className="figure">
              <Image src={hero} sizes="(max-width: 1280px) 100vw, 1280px" loading="eager" fetchPriority="high" placeholder="blur"
                alt="Engraving of a walled hilltop citadel with a great round vault door cut into the cliff, above a calm sea." />
            </figure>
          </section>

          {/* Trust strip */}
          <section className="section cells trust" aria-label="What Vaultaire is built without">
            {TRUST.map(([icon, title, sub], i) => (
              <div className="cell" key={title} data-reveal="up" style={stagger(i)}>
                <span className="icon-box"><Icon name={icon} /></span>
                <div><div className="trust__title">{title}</div><div className="trust__sub">{sub}</div></div>
              </div>
            ))}
          </section>

          {/* 01 Problem */}
          <section className="section" aria-labelledby="problem-title">
            <div className="keeper">
              <div className="keeper__text" data-reveal="up">
                <p className="label">01. The problem</p>
                <h2 id="problem-title" className="h-section">Someone takes your phone. <em>Now what?</em></h2>
                <p>Hidden folders and calculator disguises hide things from a glance, not from a person holding your unlocked phone.</p>
              </div>
              <Image className="keeper__img" src={keeper} sizes="(max-width: 1280px) 100vw, 1280px"
                alt="Engraving of a robed figure turning a key in an iron-bound chest, with photographs, a sealed scroll, an inkwell and a potted plant on the table." />
            </div>
            <div className="cells problems">
              {PROBLEMS.map(([icon, title, body], i) => (
                <article className="cell" key={title} data-reveal="up" style={stagger(i)}>
                  <div className="cell__head"><h3 className="cell__title"><span>{num(i)}</span> {title}</h3><Icon name={icon} className="cell__icon" /></div>
                  <p className="cell__body">{body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* 02 Math */}
          <section className="section" aria-labelledby="math-title">
            <div className="section-head" data-reveal="up">
              <div>
                <p className="label">02. Under the hood</p>
                <h2 id="math-title" className="h-section">The math behind <em>the lock.</em></h2>
              </div>
              <p>Everything is encrypted on your phone before it goes anywhere. Lock it, and the active key state is gone.</p>
            </div>
            <div className="math">
              <div className="cells stats">
                {STATS.map(([icon, value, label], i) => (
                  <div className="cell stat" key={value} data-reveal="up" style={stagger(i)}>
                    <div className="cell__head"><span className="cell__title">{num(i)}</span><Icon name={icon} className="cell__icon" /></div>
                    <div><div className="stat__value">{value}</div><div className="stat__label">{label}</div></div>
                  </div>
                ))}
              </div>
              <div className="duress" data-reveal="up">
                <p className="label"><Icon name="siren" />Duress Mode · Pro</p>
                <h3 className="duress__title">Forced to <em>unlock?</em></h3>
                <p>Draw your duress pattern. One vault opens; the others are silently removed from the device. Your cloud backup stays recoverable with your phrase.</p>
                <a className="btn btn--paper btn--sm" href={APP_STORE}>Get Vaultaire Pro <Icon name="arrow-right" /></a>
                <div className="phone" aria-hidden="true">
                  <div className="phone__screen">
                    <div className="phone__island" />
                    <div className="phone__bar"><span>Vaults</span><span className="phone__add"><Icon name="plus" /></span></div>
                    <div>
                      <div className="phone__title">Vault</div>
                      <div className="phone__sub">9 folders · AES-256-GCM</div>
                    </div>
                    <div className="folders">
                      {FOLDERS.map(([name, count]) => <Folder key={name} name={name} count={count} />)}
                    </div>
                    <div className="phone__lock"><Icon name="lock-key" />Lock &amp; vanish</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 03 Features */}
          <section id="features" className="section" aria-labelledby="features-title">
            <div className="section-head" data-reveal="up">
              <div>
                <p className="label">03. Features</p>
                <h2 id="features-title" className="h-section">Twelve ways to <em>keep a secret.</em></h2>
              </div>
              <p>Zero-knowledge by design. Your files never leave your device unencrypted.</p>
            </div>
            <div className="cells features">
              {FEATURES.map(([icon, title, body, tag, pro], i) => (
                <article className={`cell${i === 0 ? " cell--ink" : ""}`} key={title} data-reveal="up" style={stagger(i % 4)}>
                  <div className="cell__head"><h3 className="cell__title">{num(i)} {title}</h3><Icon name={icon} className="cell__icon" /></div>
                  <p className="cell__body">{body}</p>
                  <span className={`cell__tag${pro ? " cell__tag--pro" : ""}`}>{tag}</span>
                </article>
              ))}
            </div>
          </section>

          {/* 04 How it works */}
          <section id="how-it-works" className="section" aria-labelledby="how-title">
            <div className="section-head" data-reveal="up">
              <div>
                <p className="label">04. How it works</p>
                <h2 id="how-title" className="h-section">From pattern to ciphertext <em>in three moves.</em></h2>
              </div>
            </div>
            <div className="cells steps">
              <article className="cell step" data-reveal="up" style={stagger(0)}>
                <div className="cell__head">
                  <span className="step__num">I.</span>
                  <span className="step__visual">
                    <svg width="80" height="80" viewBox="0 0 112 112" aria-hidden="true">
                      <g fill="#d5ccc0">{DOTS.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />)}</g>
                      <polyline points="12,12 34,12 56,12 78,12 78,34 78,56 56,78 34,100" fill="none" stroke="#1e3aa7" strokeWidth="2.5" />
                      <g fill="#1e3aa7"><rect x="8" y="8" width="8" height="8" /><rect x="30" y="96" width="8" height="8" /></g>
                    </svg>
                  </span>
                </div>
                <h3 className="step__title">Draw your pattern</h3>
                <p>At least six dots and one change of direction on a 5×5 grid. That’s your key. Nothing to type, nothing to remember on paper.</p>
                <div className="step__tech">PBKDF2 · DEVICE-WIDE KEYCHAIN SALT</div>
              </article>
              <article className="cell step" data-reveal="up" style={stagger(1)}>
                <div className="cell__head">
                  <span className="step__num">II.</span>
                  <span className="step__visual"><Icon name="folder-plus" /></span>
                </div>
                <h3 className="step__title">Load the vault</h3>
                <p>Import photos, videos, documents and notes, or shoot straight into it with the secure camera.</p>
                <div className="step__tech">AES-256-GCM · ENCRYPTED ON ENTRY</div>
              </article>
              <article className="cell cell--ink step" data-reveal="up" style={stagger(2)}>
                <div className="cell__head">
                  <span className="step__num">III.</span>
                  <span className="step__visual"><Icon name="lock-key" /></span>
                </div>
                <h3 className="step__title">Lock &amp; vanish</h3>
                <p>Locking discards the active key state. What’s left on the device is ciphertext, and an unlock screen that lists nothing.</p>
                <div className="step__tech">KEY STATE DISCARDED ON LOCK</div>
              </article>
            </div>
          </section>

          {/* 05 Security */}
          <section id="security" className="section security" aria-labelledby="security-title">
            <div className="security__copy" data-reveal="up">
              <p className="label">05. Security model</p>
              <h2 id="security-title" className="h-section">We don’t trust servers. <em>We trust math.</em></h2>
              <dl className="spec">
                {SPEC.map(([dt, dd]) => <div className="spec__row" key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>)}
              </dl>
            </div>
            <div className="security__code" data-reveal="up" style={stagger(1)}>
              <div className="code">
                <div className="code__bar"><span>vault.config</span><span>read-only</span></div>
                <pre><code>{`{
  cipher:        "AES-256-GCM",
  kdf:           "PBKDF2-HMAC-SHA512",
  iterations:    600000,
  icloud_backup: true,
  account:       null
}
`}<span className="comment">{`// Servers never receive your keys.
// Only your pattern or phrase decrypts.`}</span></code></pre>
              </div>
            </div>
          </section>

          {/* 06 Reviews */}
          <section id="reviews" className="section" aria-labelledby="reviews-title">
            <div className="section-head" data-reveal="up">
              <div>
                <p className="label">06. Reviews</p>
                <h2 id="reviews-title" className="h-section">Rated 4.7 by people who’d <em>rather not say why.</em></h2>
              </div>
              <a className="reviews__all" href={APP_STORE_REVIEWS}>All reviews on the App Store <Icon name="arrow-up-right" /></a>
            </div>
            <div className="cells reviews">
              <figure className="cell review-lead" data-reveal="up">
                <Stars />
                <blockquote>“{LEAD_REVIEW.body}”</blockquote>
                <figcaption><span className="review__name">{LEAD_REVIEW.name}</span> · {LEAD_REVIEW.title} · {LEAD_REVIEW.date}</figcaption>
              </figure>
              <div className="cell review-list">
                {REVIEWS.map(([title, body, name, date], i) => (
                  <figure className="review" key={name} data-reveal="up" style={stagger(i)}>
                    <div className="review__head"><span className="review__title">{title}</span><Stars /></div>
                    <blockquote>{body}</blockquote>
                    <figcaption><span className="review__name">{name}</span> · {date}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* 07 Plans */}
          <section id="plans" className="section" aria-labelledby="plans-title">
            <div className="section-head" data-reveal="up">
              <div>
                <p className="label">07. Plans</p>
                <h2 id="plans-title" className="h-section">Start free. <em>Go Pro</em> when you need more.</h2>
              </div>
            </div>
            <div className="cells plans">
              <div className="cell plan" data-reveal="left" style={stagger(0)}>
                <p className="label">Free</p>
                <div className="plan__price">$0</div>
                <Checklist items={FREE} />
                <a className="btn btn--outline" href={APP_STORE}>Download free</a>
              </div>
              <div className="cell cell--ink plan" data-reveal="right" style={stagger(1)}>
                <div className="plan__head label"><span>Vaultaire Pro</span><span>Unlimited</span></div>
                <div className="plan__price">$49.99<span className="plan__per">/year</span></div>
                <Checklist items={PRO} />
                <a className="btn btn--paper" href={APP_STORE}>Get Vaultaire Pro</a>
              </div>
            </div>
          </section>

          {/* 08 FAQ */}
          <section id="faq" className="section cells faq-wrap" aria-labelledby="faq-title">
            <div className="cell faq-intro" data-reveal="up">
              <p className="label">08. Questions</p>
              <h2 id="faq-title" className="h-section">Asked, <em>answered.</em></h2>
              <nav className="compare" aria-label="Comparisons">
                <div className="label compare__label">How Vaultaire compares</div>
                {COMPARE.map((c) => (
                  <a key={c} href="https://vaultaire.app/compare/">vs {c} <Icon name="arrow-up-right" /></a>
                ))}
              </nav>
            </div>
            <div className="cell faq">
              {FAQ.map(([q, a], i) => (
                <details name="faq" key={q} open={i === 0} data-reveal="right" style={stagger(i)}>
                  <summary>{q}<Icon name="plus" className="icon--toggle" /></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-cta" data-reveal="up">
            <h2>Encrypt your first file in under <em>ten seconds.</em></h2>
            <div className="footer-cta__side">
              <p>Free on the App Store for iPhone and iPad. No account, ever.</p>
              <a className="btn btn--paper" href="https://vaultaire.app/go/app-store?ct=web_footer"><Icon name="download-simple" />Download on the App Store</a>
            </div>
          </div>
          <div className="footer-cols">
            <div className="footer-brand">
              <div className="footer-brand__name">
                <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden="true"><rect x="0.5" y="0.5" width="39" height="39" fill="none" stroke="#fcf2e2" /><path d="M9 11h7l4 11 4-11h7L23 31h-6z" fill="#fcf2e2" /></svg>
                Vaultaire
              </div>
              <p className="footer-brand__tagline">A local-first encrypted vault for the things that are nobody else’s business.</p>
              <div className="socials">
                <a href="https://discord.gg/HSus4QXA4t" aria-label="Vaultaire on Discord"><Icon name="discord-logo" /></a>
                <a href="https://x.com/vaultaire_app" aria-label="Vaultaire on X"><Icon name="x-logo" /></a>
              </div>
            </div>
            <nav className="footer-col" aria-label="Product">
              <h3>Product</h3>
              <a href="https://vaultaire.app/features/">Features</a>
              <a href="/security">Security</a>
              <a href="https://vaultaire.app/whats-new/">What’s New</a>
            </nav>
            <nav className="footer-col" aria-label="Resources">
              <h3>Resources</h3>
              <a href="https://vaultaire.app/compare/">Compare</a>
              <a href="https://vaultaire.app/tools/">Tools</a>
              <a href="https://vaultaire.app/guides/">Guides</a>
              <a href="https://vaultaire.app/scenarios/">Scenarios</a>
              <a href="https://vaultaire.app/s/">Vault Invite</a>
            </nav>
            <nav className="footer-col" aria-label="Company">
              <h3>Company</h3>
              <a href="https://vaultaire.app/about/">About</a>
              <a href="https://vaultaire.app/support/">Support</a>
              <a href="https://vaultaire.app/privacy/">Privacy Policy</a>
              <a href="https://vaultaire.app/terms/">Terms of Use</a>
            </nav>
          </div>
          <div className="footer-bar">
            <span>© 2026 <a href="https://wraxle.com/">Wraxle LLC</a></span>
            <span>No accounts · No backdoors · No stored keys</span>
          </div>
        </div>
        <Image className="footer-art" src={roadHome} sizes="100vw"
          alt="Engraving of a walled castle on a rocky hilltop above a range of mountains." />
      </footer>
    </>
  );
}
