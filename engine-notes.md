# FX-M Notes

## Per part

A part can have ONE algorithm (up to 8 operators). Also a common section

### Common / Part settings

#### Common section General

- Volume (0 - 127) -> 100
- Pan (L63 - L1 - C - R1 - R63) -> C
- Dry Level (0 - 127) -> 127
- Var Send (0 - 127) -> 0
- Rev Send (0 - 127) -> 12
- Part Output (not needed)
- Mono/Poly (mono / poly) -> poly
- Key Assign (single / multi) -> multi
- KeyOnDly Sync (off / on) -> off
- Delay Length (0 - 127) -> 0
- Arp Play Only (off / on) -> off
- Random Pan (0 - 127) -> 0
- Alternate Pan (L64 - L1 - C - R1 - R63) -> C
- Scaling Pan (-64 / +63) -> 0
- Velocity Limit (1 / 127 x2) -> 1 and 127
- Note Limit (C -2 - G 8 x2) -> C -2 and G 8
- Velocity Offset (0 - 127) -> 64
- Velocity Depth (0 - 127) -> 64

#### Common section Algorithm

- Algorithm (1 - 88) -> 1
- Feedback (0 - 7) -> 0

#### Operator Form / Freq

- Time
  - Attack (0-99) -> 0
  - Decay (0 - 99) -> 0
- Level
  - Initial (-50, +50) -> 0
  - Attack (-50, +50) -> 0
- Freq Mode (Ratio / Fixed) -> Ratio
- Coarse (0 - 31) -> 1
- Fine (0 - 11) -> 0
- Spectral
  - Sine -> Default
  - All 1
  - All 2
  - Odd 1
  - Odd 2
  - Res 1
  - Res 2
  - Skirt (0 -7) -> 0
  - Resonance (0 - 99 ) -> 0
- Key On Reset (off / on) -> on
- Ratio (read only)
- Detune (-15 - +15) -> 0

NOTES: Skirt not available on sine. Resonance only available on Res 1 and 2.
Ratio is based on coarse + fine. Starting on 0.50

#### Level

- Time
  - Hold (0 - 99) -> 0
  - Attack (0 - 99) -> 0
  - Decay1 (0 - 99) -> 0
  - Decay2 (0 - 99) -> 0
  - Release (0 - 99) -> 40
  - Break Point (A -1 - C 8) -> C 3
- Level
  - Attack (0 - 99) -> 99
  - Decay1 (0 - 99) -> 99
  - Decay2 (0 - 99) -> 99
  - Rel(Hold) (0 - 99) -> 0
  - Lvl/Key Lo (0 - 99) -> 0
  - Lvl/Key Hi (0 - 99) -> 0
  - Level (0 - 99) -> 0 (except operator 1, has 99)
  - Level/Vel (-7 - +7) -> 0
  - Time (0 - 7) -> 0
  - Curve Lo (-Linear, -Exp, +Exp, +Linear) -> -Linear
  - Curve Hi (-Linear, -Exp, +Exp, +Linear) -> -Linear

### Pitch / Filter

#### Pitch

- Portamento (not really a subsection)
  - Master SW (off / on) -> on
  - Part SW (off / on) -> off
  - Mode (Fingered / Full-time) -> full time
  - Time (0 - 127) -> 64
  - Time Mode (Rate1, Time1, Rate2, Time2) -> rate1
  - Note Shift (-24 - +24) -> 0
  - Detune (-12.8Hz - +12.7Hz) -> 0-0Hz
  - Pitch Bend down (-48 - +24) -> -2
  - Pitcn Bend up (-48 - +24) -> +2
  - Micro tuning name(
    Equal Temperament -> Default
    Pure Major
    Pure Minor
    Werckmeister
    Kirnberger
    Valloti & Young
    1/4 shift
    1/4 tone
    1/8 tone
    Indian
    Arabic 1
    Arabic 2
    Arabic 3
    )

#### PEG / SCALE

- Time
  - Attack (0 - 99) -> 0
  - Decay1 (0 - 99) -> 0
  - Decay2 (0 - 99) -> 0
  - Release (0 - 99)
  - Center Key (C -2 - G 8) -> C3
  - Pitch/Key (-200% - +200%) -> +100%
- Level
  - Initial (-50 - +50) -> 0
  - Attack (-50 - +50) -> 0
  - Decay1 (-50 - +50) -> 0
  - Decay2 (-50 - +50) -> 0
  - Release (-50 - +50) -> 0
  - Pitch/Vel (-64 - +63) -> 0
- PEG Depth (8 oct, 2 oct, 1 oct, 0.5 oct) -> 8 oct
- Depth/Vel (0 - 7) -> 0
- Time/Key (0 - 7) -> 0
- Random Pitch (0 - 127) -> 0

#### Filter Type

- Filter Type (LPF24D, LPF24A, LPF18, LPF18s, LPF12+HPF12, LPF6, HPF12, HPF24D, HPF12, BPF12D, BPFw, BPF6, BEF12, BEF6, DualLPF, DualHPF, DualBPF, DualBEF, LPF12+BPF6, Thru) -> Thru default
