import requests
import xml.etree.ElementTree as ET
import json
from datetime import datetime
import os

def fetch_google_trends():
    # Google Trends RSS Feed (Spain)
    RSS_URL = "https://trends.google.com/trends/trendingsearches/daily/rss?geo=ES"
    
    print(f"Fetching trends from {RSS_URL}...")
    try:
        response = requests.get(RSS_URL)
        response.raise_for_status()
    except Exception as e:
        print(f"Error fetching trends: {e}")
        return

    # Parse XML
    root = ET.fromstring(response.content)
    channel = root.find('channel')
    
    trends = []
    
    # Namespaces for Google Trends specific tags
    ns = {'ht': 'https://trends.google.com/trends/trendingsearches/daily'}
    
    for item in channel.findall('item')[:10]: # Top 10 trends
        title = item.find('title').text
        approx_traffic = item.find('ht:approx_traffic', ns).text if item.find('ht:approx_traffic', ns) is not None else "N/A"
        
        # Get description (google trends description is usually just a list of related news)
        description = item.find('description').text or ""
        
        # Create a more narrative paragraph (simulation in this case, 
        # normally we could use an AI or craft it from the news snippets)
        news_titles = [n.find('ht:news_item_title', ns).text for n in item.findall('ht:news_item', ns) if n.find('ht:news_item_title', ns) is not None]
        
        if news_titles:
            paragraph = f"Hoy, '{title}' es uno de los temas más comentados en España. El interés ha crecido exponencialmente debido a noticias como '{news_titles[0]}'. Este fenómeno refleja una tendencia clara en el consumo de información actual, captando la atención de miles de usuarios que buscan profundizar en los detalles de este acontecimiento."
        else:
            paragraph = f"El término '{title}' ha irrumpido con fuerza en las búsquedas diarias. Con más de {approx_traffic} consultas, se posiciona como un tema clave para entender las inquietudes y focos de interés de la audiencia hoy. La rapidez con la que se ha viralizado subraya la importancia de este tema en la conversación digital."

        trends.append({
            "title": title,
            "traffic": approx_traffic.replace(',', '.'),
            "paragraph": paragraph,
            "explore_link": f"https://www.google.com/search?q={title.replace(' ', '+')}"
        })

    data = {
        "date": datetime.now().strftime("%d %B %Y"),
        "trends": trends
    }

    # Save to trends.json in the root
    with open('trends.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully saved {len(trends)} trends to trends.json")

if __name__ == "__main__":
    fetch_google_trends()
