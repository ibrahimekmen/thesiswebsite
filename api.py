from fastapi import FastAPI
app=FastAPI()

a=[12,13,15,27]
@app.get("/")
def mert():
    return a[3]

@app.get("/malmert/{a_id}")
def mal(a_id:int):
    return a[a_id]