from config import db

# Takes the object that was created from the sql db usung SQLALCHEMY, and maps it into class with table structure where each column has is own data types and constrains.
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(30), unique=True, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    bullet_1 = db.Column(db.String(200), unique=False, nullable=False)
    bullet_2 = db.Column(db.String(200), unique=False, nullable=False)
    bullet_3 = db.Column(db.String(200), unique=False, nullable=False)
    bullet_4 = db.Column(db.String(200), unique=False, nullable=False)
    bullet_5 = db.Column(db.String(200), unique=False, nullable=False)
    img_1 = db.Column(db.String(100), unique=False, nullable=True)
    img_2 = db.Column(db.String(100), unique=False, nullable=True)
    img_3 = db.Column(db.String(100), unique=False, nullable=True)
    img_4 = db.Column(db.String(100), unique=False, nullable=True)
    category = db.Column(db.String(10), unique=False, nullable=True)
    is_new = db.Column(db.String(6), unique=False, nullable=True)
    group = db.Column(db.String(15), unique=False, nullable=True)
    allias = db.Column(db.String(20), unique=False, nullable=True)
    in_cart = db.Column(db.String(6), unique=False, nullable=True)
    best_seller = db.Column(db.Integer, nullable=True)

    # Here it is creating a function or method that will take the above class (object) and converts them into a python dictionary which has the same structure of a json file but with cammel case by convention.
    def to_json(self):
        return {   
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "bullet1": self.bullet_1, 
            "bullet2": self.bullet_2,
            "bullet3": self.bullet_3,
            "bullet4": self.bullet_4, 
            "bullet5": self.bullet_5, 
            "img1": self.img_1,
            "img2": self.img_2,
            "img3": self.img_3,
            "img4": self.img_4,
            "category": self.category, 
            "isNew": self.is_new, 
            "group": self.group, 
            "allias": self.allias,
            "inCart": self.in_cart,
            "bestSeller": self.best_seller
         } 
       
    # NOTE: JSON is camel case and python snake