import json

import psycopg2

conn = psycopg2.connect(
    database="postgres",
    user="postgres",
    password="postgres",
    host="127.0.0.1",
    port="5432",
)
cursor = conn.cursor()

with open("products_list.json") as f:
    products_list = json.load(f)

for category, data in products_list.items():
    cursor.execute(
        (
            "INSERT INTO categories (name, tax_percentage) VALUES (%s, %s)"
            " RETURNING id"
        ),
        (category, 0.05),
    )
    cat_id = cursor.fetchone()[0]

    for name in data["items"]:
        cursor.execute(
            (
                "INSERT INTO products (name, price, category_id) VALUES (%s,"
                " %s, %s) RETURNING id"
            ),
            (name, 5.0, cat_id),
        )

conn.commit()

conn.close()
