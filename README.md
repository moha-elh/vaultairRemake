# Vaultaire · homepage redesign ("Engraved Vault")

A Next.js (App Router) rebuild of the [vaultaire.app](https://vaultaire.app/) homepage.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/layout.jsx        Fonts (next/font) and metadata
app/page.jsx          Page markup; repeated content lives in arrays at the top
app/Icons.jsx         Inline Phosphor icon sprite + <Icon name="..."/>
app/Reveal.jsx        Client component: scroll reveals and sticky-header state
app/globals.css       Tokens, components, sections, then hover/motion at the end
public/img/           Engraved illustrations and favicon
design/               Original canvas sources and the old static version (static-v1)
```

## Design system

| Token | Value | Use |
|---|---|---|
| `--paper` | `#fcf2e2` | Page background, sampled from the illustrations |
| `--ink` | `#1e3aa7` | Rules, accents, filled cells, footer |
| `--ink-deep` | `#142a86` | Headings |
| `--text` / `--muted` | `#3d4260` / `#5e6381` | Body / secondary text |

**Type:** Newsreader (semibold 600, roman + italic) for display text, labels, nav and buttons. Geist for body text. Geist Mono for code. All load from Google Fonts.

**Layout:** the page sits between two 1px ink rails (`.page`). Ruled grids use `.cells`, a grid with a `1px` gap over an ink background, so every divider is exactly one hairline. Cards follow a single pattern: `.cell__head` holds "NN. Title" at the top left and the icon at the top right, and the body sits at the bottom. `.cell--ink` is the filled, highlighted variant.

**Icons:** [Phosphor Icons](https://phosphoricons.com) in the Bold weight (MIT), embedded as `<symbol>`s at the top of `index.html` and used with `<svg class="icon"><use href="#i-name"/></svg>`. To add one, copy its path from `@phosphor-icons/core/assets/bold/<name>-bold.svg` into a new `<symbol id="i-name" viewBox="0 0 256 256">`.

## Breakpoints

- 1180px: the problem headline stacks above the keeper illustration, and features drop to 3 columns.
- 1100px: the trust strip and problems drop to 2 columns, and "the math behind the lock" stacks.
- 900–1000px: the nav hides, and the steps, security section and footer stack.
- 560px: everything becomes a single column.

## TODO

- [ ] Real Pro price (currently `[PRO PRICE]` in the Plans section)
- [ ] Mobile nav menu (the nav links are hidden below 900px)
- [ ] Localized versions (the live site supports 26+ languages)
