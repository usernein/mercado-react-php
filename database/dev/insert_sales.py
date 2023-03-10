import random

import psycopg2

with psycopg2.connect(
    database="postgres",
    user="postgres",
    password="postgres",
    host="127.0.0.1",
    port="5432",
) as conn:
    cursor = conn.cursor()

    cursor.execute("INSERT INTO sales (finished) values (false) returning id;")
    sale_id = cursor.fetchone()[0]

    cursor.execute("SELECT id FROM products ORDER BY RANDOM() LIMIT 10")
    wanted_products = cursor.fetchall()

    for row in wanted_products:
        amount = random.choice([1, 1, 1, 2, 3])
        cursor.execute(
            (
                "INSERT INTO sales_products (sale_id, product_id, amount)"
                " values (%s, %s, %s)"
            ),
            (sale_id, row[0], amount),
        )

    conn.commit()
