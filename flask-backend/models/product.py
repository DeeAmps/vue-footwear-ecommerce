from db import db


class Products(db.Model):
    __tablename__ = 'product'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    price = db.Column(db.String(80))
    rating = db.Column(db.Integer)
    imageUrl = db.Column(db.String(80))
    description = db.Column(db.String(180))

    def __init__(self, name, price, rating, imageUrl, description):
        self.name = name
        self.price = price
        self.rating = rating
        self.imageUrl = imageUrl
        self.description = description

    def json(self):
        return {'name': self.name, 'price': self.price, 'rating': self.rating, 'imageUrl': self.imageUrl, 'description': self.description}

    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
