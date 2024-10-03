from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask (__name__)
CORS(app)

# Initialize database specifying its location in my local PC and no tracking modifications
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
 
# Creates a database instance, object
db = SQLAlchemy(app)      