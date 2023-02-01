from flask import Blueprint
from db import db
from models.product import Products

products_bp = Blueprint('products', __name__, url_prefix='/products')

# Path: resources/products.py


@products_bp.route('/')
def get_products():
    return [product.json() for product in Products.query.all()]


@products_bp.route('/<int:id>')
def get_product(id):
    product = Products.query.get(id)
    if product:
        return product.json()
    return {'message': 'Product not found'}, 404
