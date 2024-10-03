from flask import request, jsonify
from config import app, db
from models import Products

@app.route("/products", methods=["GET"])
def get_products():
    products = Products.query.all()
    json_products = list(map(lambda x: x.to_json(), products)) 
    return jsonify({"products": json_products})
    

@app.route("/create_product", methods=["POST"])
def create_product():
    title = request.json.get("title")
    price = request.json.get("price")
    bullet_1 = request.json.get("bullet_1")

    if not title or not price or not bullet_1:
        return (
            jsonify({"message": "You must include data"}), 400,
        ) 
    new_product = Products(title=title, price = price, bullet_1 = bullet_1)

    try: 
        db.session.add(new_product)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400   
    return jsonify({"message":"User created!"}), 201

@app.route("/update_product/<int:user_id>")
def update_product(user_id):
    product = Products.query.get(user_id)

    if not product:
        return jsonify({"message": "User not found"}), 404
    data = request.jason
    product.title = data.get("title", product.title)
    product.price = data.get("price", product.price)
    product.bullet_1 = data.get("bullet_1", product.bullet_1)

    db.session.commit()
    return jsonify({"message": "Product updtated"}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)    