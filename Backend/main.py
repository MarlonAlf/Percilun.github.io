from flask import request, jsonify
from config import app, db
from models import Product

# By placing /Admin (endpoint) in the browser it by default triggers a GET request and the code bellow handels it

# --------------------------  GET PRODUCTS -----------------------
@app.route("/get_products", methods=["GET"])
def get_products():
    # Gets python dictionary data from models.py 
    products = Product.query.all()
    
    json_products = list(map(lambda x: x.to_json(), products)) # Converts each python dictionary to JSON object

    return jsonify({"products": json_products}) # jsonify converts Python data structures (like lists, dicts) into a propper JSON response for sending over HTTP. It's the envelope

# --------------------------  CREATE PRODUCT -----------------------    
# This is listening when a POST request is send in /create_product page (endpoint) of the front end.    
@app.route("/create_product", methods=["POST"])
def create_product():
    title = request.json.get("title")
    price = request.json.get("price")
    bullet_1 = request.json.get("bullet1")
    bullet_2 = request.json.get("bullet2")
    bullet_3 = request.json.get("bullet3")
    bullet_4 = request.json.get("bullet4")
    bullet_5 = request.json.get("bullet5")
    img_1 = request.json.get("img1")
    img_2 = request.json.get("img2")
    img_3 = request.json.get("img3")
    img_4 = request.json.get("img4")
    category = request.json.get("category")
    is_new = request.json.get("isNew")
    group = request.json.get("group")
    allias = request.json.get("allias")
    in_cart = request.json.get("inCart")
    best_seller = request.json.get("bestSeller")



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
            jsonify({"message": "You must include bullet 1"}), 400,
        )
    if not bullet_2:
        return (
            jsonify({"message": "You must include bullet 2"}), 400,
        )
    if not bullet_3:
        return (
            jsonify({"message": "You must include bullet 3"}), 400,
    )
    if not bullet_4:
        return (
            jsonify({"message": "You must include bullet 4"}), 400,
    )
    if not bullet_5:
        return (
            jsonify({"message": "You must include bullet 5"}), 400,
    )
    if not img_1:
        return (
            jsonify({"message": "You must include image 1"}), 400,
    )
    if not img_2:
        return (
            jsonify({"message": "You must include image 2"}), 400,
    )
    if not img_3:
        return (
            jsonify({"message": "You must include image 3"}), 400,
    )
    if not img_4:
        return (
            jsonify({"message": "You must include image 4"}), 400,
    )

    if not category:
        return (
            jsonify({"message": "You must include category"}), 400,
        )
    if not is_new:
        return (
            jsonify({"message": "You must include new"}), 400,
        )
    if not group:
        return (
            jsonify({"message": "You must include group"}), 400,
    )
    if not allias:
        return (
            jsonify({"message": "You must include allias"}), 400,
    )
    if not in_cart:
        return (
            jsonify({"message": "You must include if in cart"}), 400,
    )
    if not best_seller:
        return (
            jsonify({"message": "You must include best seller rang"}), 400,
        )
    
 
    # If there is data it creates a new product OBJECT
    new_product = Product(title=title, price=price, bullet_1=bullet_1, bullet_2=bullet_2, bullet_3=bullet_3, bullet_4=bullet_4, bullet_5=bullet_5, img_1=img_1, img_2=img_2, img_3=img_3, img_4=img_4, category=category, is_new=is_new, group=group, allias=allias, in_cart=in_cart, best_seller=best_seller)

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
    product.bullet_2 = data.get("bullet2", product.bullet_2)
    product.bullet_3 = data.get("bullet3", product.bullet_3)
    product.bullet_4 = data.get("bullet4", product.bullet_4)
    product.bullet_5 = data.get("bullet5", product.bullet_5)
    product.img_1 = data.get("img1", product.img_1)
    product.img_2 = data.get("img2", product.img_2)
    product.img_3 = data.get("img3", product.img_3)
    product.img_4 = data.get("img4", product.img_4)
    product.category = data.get("category", product.category)
    product.is_new = data.get("isNew", product.is_new)
    product.group = data.get("group", product.group)
    product.allias = data.get("allias", product.allias)
    product.in_cart = data.get("inCart", product.in_cart)
    product.best_seller = data.get("bestSeller", product.best_seller)


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