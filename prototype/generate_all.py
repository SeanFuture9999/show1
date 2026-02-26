#!/usr/bin/env python3
"""PixelLab batch asset generator — uses curl to avoid SSL issues."""

import json, base64, os, time, sys, subprocess

API_URL = "https://api.pixellab.ai/v1/generate-image-pixflux"
API_KEY = "440563e0-450a-4f63-bcba-bf8e88c2631e"
BASE = "/Users/annahuang/clawd/pixellab-test/重生抽卡復仇記/prototype/assets"
NEG = "cute, chibi, bright cheerful colors, western cartoon, 3D render"
STYLE = "Korean manhwa webtoon dark moody pixel art style"

ASSETS = [
    # === CHARACTERS (48x72) ===
    ("characters", "minheok_neutral.png", 48, 72, 42,
     f"Young Korean man, black hair, glasses, gentle face, dark suit, neutral expression, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "minheok_cold.png", 48, 72, 43,
     f"Young Korean man, black hair, glasses off, cold determined eyes, slight smirk, dark suit, intimidating aura, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "minheok_angry.png", 48, 72, 44,
     f"Young Korean man, black hair, angry expression, clenched jaw, intense eyes, dark suit, dramatic lighting, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "junwoo_smile.png", 48, 72, 45,
     f"Handsome Korean man, warm friendly smile but sinister undertone, expensive grey suit, charming, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "junwoo_evil.png", 48, 72, 46,
     f"Handsome Korean man, evil smirk, half face in shadow, menacing eyes, expensive suit, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "seryoung_elegant.png", 48, 72, 47,
     f"Beautiful Korean woman, elegant dress, cold composed expression, pearl earrings, long dark hair, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "park_arrogant.png", 48, 72, 48,
     f"Overweight middle-aged Korean man, slicked hair, expensive watch, arrogant sneering expression, tight suit, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "park_sweating.png", 48, 72, 49,
     f"Overweight middle-aged Korean man, sweating, panicking, loosening tie, terrified expression, tight suit, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "eunji_sweet.png", 48, 72, 50,
     f"Young Korean woman, professional attire, sweet helpful smile, neat hair, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "eunji_crying.png", 48, 72, 51,
     f"Young Korean woman, tears streaming, desperate expression, disheveled hair, professional attire wrinkled, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "jiwon_cheerful.png", 48, 72, 52,
     f"Short-haired Korean woman, denim jacket over office wear, earrings, confident bright smile, pixel art character portrait, {STYLE}, transparent background"),
    ("characters", "jiwon_angry.png", 48, 72, 53,
     f"Short-haired Korean woman, fiercely angry protective expression, pointing finger, denim jacket, earrings, pixel art character portrait, {STYLE}, transparent background"),

    # === BACKGROUNDS (200x120) ===
    ("backgrounds", "rooftop_night.png", 200, 120, 100,
     f"Corporate building rooftop at night, dark stormy sky, city lights below, dramatic atmosphere, Korean cityscape, {STYLE} background"),
    ("backgrounds", "goshiwon_room.png", 200, 120, 101,
     f"Tiny Korean goshiwon room, single bed, small desk, fluorescent light, cramped depressing space, morning light through tiny window, {STYLE} background"),
    ("backgrounds", "office_day.png", 200, 120, 102,
     f"Modern Korean corporate office, cubicles, fluorescent lights, cold sterile atmosphere, Sungwon Group logo on wall, {STYLE} background"),
    ("backgrounds", "meeting_room.png", 200, 120, 103,
     f"Corporate meeting room, long table, leather chairs, presentation screen, tense atmosphere, dark moody lighting, {STYLE} background"),
    ("backgrounds", "pojangmacha.png", 200, 120, 104,
     f"Korean street food tent bar at night, warm orange lantern light, soju bottles, steam from food, cozy warm atmosphere, {STYLE} background"),
    ("backgrounds", "hanriver_night.png", 200, 120, 105,
     f"Han River at night, city skyline reflected in water, bench, lonely atmosphere, moonlight, {STYLE} background"),
    ("backgrounds", "gangnam_street.png", 200, 120, 106,
     f"Gangnam district street, modern buildings, neon signs in Korean, busy city atmosphere, night time, {STYLE} background"),
    ("backgrounds", "cheongdam_restaurant.png", 200, 120, 107,
     f"High-end Cheongdam-dong restaurant interior, luxurious decor, dim mood lighting, wealthy atmosphere, {STYLE} background"),

    # === CG (160x120) ===
    ("cg", "cg_pushed.png", 160, 120, 200,
     f"Dramatic scene man being pushed off building rooftop by another man, woman watching coldly, night sky, city lights, falling moment frozen in time, dark dramatic {STYLE}"),
    ("cg", "cg_reborn.png", 160, 120, 201,
     f"Man waking up in tiny room, sweating, hand clutching glowing golden pocket watch on wrist, morning light, shocked expression, {STYLE}"),
    ("cg", "cg_gacha.png", 160, 120, 202,
     f"Mystical golden pocket watch floating in void, cards spinning around it, golden light rays, mysterious energy, dark blue and gold, {STYLE}"),
    ("cg", "cg_faceslap_park.png", 160, 120, 203,
     f"Corporate meeting room, young man standing confidently presenting evidence, older man slumped in chair sweating, colleagues watching in shock, dramatic moment, {STYLE}"),
    ("cg", "cg_eunji_tears.png", 160, 120, 204,
     f"Rooftop at sunset, young woman on her knees crying, young man extending hand to help her up, emotional redemptive moment, warm golden light, {STYLE}"),
    ("cg", "cg_watch_glow.png", 160, 120, 205,
     f"Close up of mysterious golden pocket watch, ancient symbols glowing, time distortion effect around it, dark mystical atmosphere, {STYLE}"),

    # === UI ===
    ("ui", "dialogue_box.png", 200, 50, 300,
     f"Dark elegant dialogue box frame, Korean manhwa style border, semi-transparent dark background, gold trim, pixel art UI element, {STYLE}"),
    ("ui", "arrogance_bar.png", 120, 16, 301,
     f"Red rage arrogance meter bar frame, ornate Korean style border, dark background, pixel art UI element, {STYLE}"),
    ("ui", "gacha_card_frame.png", 48, 72, 302,
     f"Mystical card frame with golden borders, dark background, sparkle effects, pixel art UI element, {STYLE}"),
    ("ui", "button_endure.png", 60, 24, 303,
     f"Game button with Chinese character endure text, dark blue color, pixel art game button, {STYLE}, transparent background"),
    ("ui", "button_strike.png", 60, 24, 304,
     f"Game button with Chinese character use text, dark red color, pixel art game button, {STYLE}, transparent background"),
    ("ui", "watch_icon.png", 32, 32, 305,
     f"Golden pocket watch icon, glowing, mysterious, pixel art icon, {STYLE}, transparent background"),
]


def call_api(desc, neg, width, height, seed, max_retries=3):
    """Call PixelLab via curl, return PNG bytes or None."""
    payload = json.dumps({
        "description": desc,
        "negative_description": neg,
        "image_size": {"width": width, "height": height},
        "seed": seed
    })

    for attempt in range(max_retries):
        try:
            result = subprocess.run(
                ["curl", "-s", "-X", "POST", API_URL,
                 "-H", "Content-Type: application/json",
                 "-H", f"Authorization: Bearer {API_KEY}",
                 "-d", payload],
                capture_output=True, text=True, timeout=120
            )
            body = json.loads(result.stdout)

            if "image" in body and "base64" in body["image"]:
                return base64.b64decode(body["image"]["base64"])
            else:
                err = body.get("detail", str(body)[:200])
                print(f"    ⚠️  attempt {attempt+1}: {err}", flush=True)
        except Exception as e:
            print(f"    ⚠️  attempt {attempt+1}: {e}", flush=True)

        wait = 10 * (attempt + 1)
        print(f"    ⏳ wait {wait}s...", flush=True)
        time.sleep(wait)

    return None


def main():
    for d in ["characters", "backgrounds", "cg", "ui"]:
        os.makedirs(os.path.join(BASE, d), exist_ok=True)

    results = {"ok": [], "fail": []}
    total = len(ASSETS)

    for i, (folder, fname, w, h, seed, desc) in enumerate(ASSETS, 1):
        fpath = os.path.join(BASE, folder, fname)

        print(f"\n[{i}/{total}] 🎨 {folder}/{fname} ({w}x{h})", flush=True)

        png = call_api(desc, NEG, w, h, seed)

        if png and len(png) > 100:
            with open(fpath, "wb") as f:
                f.write(png)
            print(f"    ✅ {len(png):,} bytes", flush=True)
            results["ok"].append((f"{folder}/{fname}", len(png)))
        else:
            print(f"    ❌ FAILED", flush=True)
            results["fail"].append(f"{folder}/{fname}")

        # rate limit: wait 4s between calls
        if i < total:
            time.sleep(4)

    # === REPORT ===
    print("\n" + "="*60, flush=True)
    print(f"🏁 COMPLETE: {len(results['ok'])}/{total} success, {len(results['fail'])}/{total} failed", flush=True)
    print("="*60, flush=True)

    for name, sz in results["ok"]:
        print(f"  ✅ {name} ({sz:,} bytes)", flush=True)
    for name in results["fail"]:
        print(f"  ❌ {name}", flush=True)


if __name__ == "__main__":
    main()
