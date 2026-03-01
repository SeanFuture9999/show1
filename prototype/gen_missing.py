#!/usr/bin/env python3
"""Generate missing Chapter 1 art assets using Gemini 3.1 Flash Image Preview."""

from google import genai
from google.genai import types
import base64
import sys
import os

API_KEY = "AIzaSyCDuVutKvoc4VkIGR3hd3S3sqiLhri5GIY"
MODEL = "gemini-2.0-flash-exp-image-generation"
BASE = os.path.dirname(os.path.abspath(__file__))

client = genai.Client(api_key=API_KEY)

ASSETS = {
    "park_tired": {
        "path": os.path.join(BASE, "assets/cg/char_park_tired.jpg"),
        "prompt": """Dark Korean manhwa style, cinematic composition, dramatic lighting, no text,
portrait orientation 512x1024, half-body character portrait,
middle-aged Korean man age 47, stocky heavyset build, dark short hair slicked back with gel, thick eyebrows,
dark navy blue suit stretched tight over belly, corporate ID card lanyard,
BUT completely different expression from his usual arrogance:
eyes closed or half-closed, leaning against a white corridor wall, head tilted slightly back,
suit jacket unbuttoned, tie loosened, first button undone,
exhausted aged expression, deeper nasolabara folds visible,
one hand holding a phone just hung up, arm hanging at his side,
no arrogance left — just a tired 47-year-old man who has worked 15 years of overtime,
cold white fluorescent corridor lighting making him look older and more worn out,
Korean manhwa ink line style, strong black outlines, dramatic shadows"""
    },
    "hoesik_soju": {
        "path": os.path.join(BASE, "assets/cg/cg_ch1_hoesik_soju.jpg"),
        "prompt": """Dark Korean manhwa style, cinematic composition, dramatic lighting, no text,
4:3 landscape orientation 1024x768,
Korean BBQ restaurant private room scene at night,
round table with charcoal grill in center, smoke rising, grilled meat sizzling,
multiple soju bottles and shot glasses on table, side dishes banchan scattered around,
a stocky middle-aged Korean man age 47 in dark navy suit sitting at the head of the table,
thick eyebrows, dark slicked-back hair, arrogant domineering expression,
he is forcefully pouring soju into a younger mans glass, intimidating body language,
the younger man age 28 with messy black hair and bangs, slim build, cheap dark suit,
sitting stiffly with a calm composed expression despite the pressure, small dark mole on left cheek near eye,
other office workers around the table looking uncomfortable, some drunk with red faces,
warm amber lighting from restaurant lamps overhead, steam and smoke creating hazy atmosphere,
power dynamics visible — the older man dominates the space while the younger man endures quietly,
Korean corporate hoesik drinking culture scene, oppressive yet warm-toned,
Korean manhwa ink line style, strong black outlines, dramatic shadows"""
    }
}

def generate_image(name, config):
    print(f"\n🎨 生成: {name}")
    print(f"   路徑: {config['path']}")
    
    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=config['prompt'],
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"]
            )
        )
        
        # Extract image from response
        for part in response.candidates[0].content.parts:
            if part.inline_data and part.inline_data.mime_type.startswith('image/'):
                img_data = part.inline_data.data
                os.makedirs(os.path.dirname(config['path']), exist_ok=True)
                with open(config['path'], 'wb') as f:
                    f.write(img_data)
                size_kb = len(img_data) / 1024
                print(f"   ✅ 成功！大小: {size_kb:.0f}KB")
                return True
            elif part.text:
                print(f"   文字回應: {part.text[:100]}")
        
        print("   ❌ 沒有圖片在回應中")
        return False
        
    except Exception as e:
        print(f"   ❌ 錯誤: {e}")
        return False

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "all"
    
    if target == "all":
        for name, config in ASSETS.items():
            generate_image(name, config)
    elif target in ASSETS:
        generate_image(target, ASSETS[target])
    else:
        print(f"未知目標: {target}")
        print(f"可用: {', '.join(ASSETS.keys())} 或 all")
