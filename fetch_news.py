import feedparser
import json
import os
import re

def fetch_motogp_news():
    # RSS Feed from Crash.net MotoGP (it's reliable and has descriptions)
    # Alternatively: https://www.motogp.com/en/news/rss
    RSS_URL = "https://www.crash.net/rss/motogp"
    
    print(f"Fetching news from {RSS_URL}...")
    feed = feedparser.parse(RSS_URL)
    
    news_items = []
    
    for entry in feed.entries[:8]:  # Get the 8 most recent news
        # Try to find an image in the description or content
        image_url = ""
        img_match = re.search(r'<img[^>]+src="([^">]+)"', entry.description)
        if img_match:
            image_url = img_match.group(1)
        
        # Clean description from HTML tags
        clean_desc = re.sub(r'<[^>]+>', '', entry.description)
        # Limit description length
        clean_desc = (clean_desc[:120] + '...') if len(clean_desc) > 120 else clean_desc

        news_items.append({
            "title": entry.title,
            "link": entry.link,
            "description": clean_desc,
            "image": image_url or "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000", # Fallback image
            "date": entry.published if 'published' in entry else ""
        })
    
    # Save to news.json
    with open('news.json', 'w', encoding='utf-8') as f:
        json.dump(news_items, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully saved {len(news_items)} news items to news.json")

if __name__ == "__main__":
    fetch_motogp_news()
