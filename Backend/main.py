from flask import request, jsonify
from config import app, db
from models import Product

# By placing /Admin (endpoint) in the browser it by default triggers a GET request and the code bellow handels it

# --------------------------  GET PRODUCTS -----------------------
@app.route("/Admin", methods=["GET"])
def get_products():
    products = Product.query.all()# SQLAlchemy takes the data from the database and automatically creates a Python object, ORM
    
    json_products = list(map(lambda x: x.to_json(), products)) # Converts each product object to JSON dictionary

    return jsonify({"products": json_products}) # jsonify converts Python data structures (like lists, dicts) into a proper JSON response for sending over HTTP. It's the envelope

# --------------------------  CREATE PRODUCT -----------------------    
# This is listening when a POST request is send in /create_product page (endpoint) of the front end.    
@app.route("/create_product", methods=["POST"])
def create_product():
    title = request.json.get("title")
    price = request.json.get("price")
    bullet_1 = request.json.get("bullet1")
    # If the above is not being sent from the frontend it displays an error message bellow
    if not title:
        return (
            jsonify({"message": "You must include title"}), 400,
        )
    if not price:
        return (
            jsonify({"message": "You must include price"}), 400,
        )
    if not bullet_1:
        return (
            jsonify({"message": "You must include bullet"}), 400,
        )
 
    # If there is data it creates a new product OBJECT
    new_product = Product(title=title, price=price, bullet_1=bullet_1)

    try: 
        db.session.add(new_product)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400   
    return jsonify({"message":"User created!"}), 201

# --------------------------  UPDATE PRODUCT -----------------------
@app.route("/update_product/<int:user_id>", methods=["PATCH"])  
# int: ensures the value is an integer, and user_id is the name of the variable that holds this integer.
def update_product(user_id):
    product = Product.query.get(user_id)

    if not product:        
        return jsonify({"message": "Product not found"}), 404
    data = request.json
    product.title = data.get("title", product.title)
    product.price = data.get("price", product.price)
    product.bullet_1 = data.get("bullet1", product.bullet_1)

    db.session.commit()
    return jsonify({"message": "Product updtated"}), 200

# --------------------------  DELETE PRODUCT -----------------------
@app.route("/delete_product/<int:user_id>", methods=["DELETE"])
def delete_product(user_id):
    product = Product.query.get(user_id)

    if not product:
        return jsonify({"message": "User not  found"}), 404
    
    db.session.delete(product)
    db.session.commit()

    return jsonify({"message": "User deleted" }), 200

# This avoids runing when imported which is the default behaviour
# This part creates a new sqlite table if there is name chaged
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)


#     Let's break down the line of code product = Product.query.get(user_id) from the function update_product(user_id).

# 1. Product
# This is a model class that typically represents a table in a database (e.g., a products table).
# Each instance of Product corresponds to a row in the table.
# 2. Product.query
# query is an object provided by SQLAlchemy (or another ORM framework) that allows you to interact with the database.
# It provides methods to query the database for records that match certain criteria (like filter(), all(), get(), etc.).
# 3. Product.query.get(user_id)
# get() is a method that retrieves a single record from the database based on its primary key.
# In this case, user_id is used as the argument, which is expected to be the primary key of the record you are looking for.
# The method will return the Product instance (i.e., the row from the database) where the primary key matches user_id.
# 4. product = Product.query.get(user_id)
# The result of Product.query.get(user_id) is stored in the product variable.
# This means product now holds the data of the specific product (row) that corresponds to the primary key value of user_id.
# Full breakdown:
# This line of code fetches a product from the database using the user_id as the key. The fetched product data is then stored in the variable product so that you can perform further operations on it, like updating its fields or displaying its information. If no product with the given user_id is found, product will be None.