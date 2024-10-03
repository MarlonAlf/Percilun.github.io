from config import db

# Creates an object
class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=True, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    bullet_1 = db.Column(db.String(380), unique=False, nullable=False)
    
    # Converts the above object to a python dictionary which has the same structure of a json file but with camel case by convention
    def to_json(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "bullet1": self.bullet_1 
         } 
    
    # NOTE: JSON is camel case and python snake