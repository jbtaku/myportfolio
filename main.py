from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pred import pred
from PIL import Image

app = FastAPI()

origins = [
    # "http://localhost:3000/"   
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/upload/")
async def upload_image(image: UploadFile = File(...)):
    contents = await image.read()
    answer = pred(contents)
    return {"answer": answer}