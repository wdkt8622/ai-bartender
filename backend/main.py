from fastapi import FastAPI
from models import RecommendationInput, RecommendationOutput
import requests

app = FastAPI()

def get_cocktail_recommendation(ingredients: str, mood: str) -> RecommendationOutput:
    # ChatGPT APIのURLとAPIキーを設定します。
    api_url = "https://api.openai.com/v1/engines/davinci-codex/completions"
    api_key = "your_api_key"

    # APIへのリクエストヘッダーとペイロードを設定します。
    headers = {"Authorization": f"Bearer {api_key}"}
    prompt = f"Create a cocktail recipe based on the ingredients '{ingredients}' and the mood '{mood}'. Include the cocktail name and a description."
    payload = {
        "engine": "davinci-codex",
        "prompt": prompt,
        "max_tokens": 100,
        "n": 1,
        "stop": None,
        "temperature": 0.7,
    }

    # APIリクエストを送信し、レスポンスを受け取ります。
    response = requests.post(api_url, headers=headers, json=payload)
    response_data = response.json()

    # レスポンスデータからカクテルのおすすめと紹介文を抽出し、RecommendationOutputオブジェクトを返します。
    recommendation_text = response_data["choices"][0]["text"]
    cocktail_name, description = recommendation_text.split(".", 1)
    return RecommendationOutput(cocktail_name=cocktail_name.strip(), description=description.strip())

@app.post("/recommendation", response_model=RecommendationOutput)
async def create_recommendation(recommendation_input: RecommendationInput):
    return get_cocktail_recommendation(recommendation_input.ingredients, recommendation_input.mood)
