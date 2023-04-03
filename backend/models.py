from pydantic import BaseModel

class RecommendationInput(BaseModel):
    ingredients: str
    mood: str

class RecommendationOutput(BaseModel):
    cocktail_name: str
    description: str