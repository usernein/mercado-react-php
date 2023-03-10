-- Adminer 4.8.1 PostgreSQL 15.2 (Debian 15.2-1.pgdg110+1) dump

\connect "postgres";

DROP TABLE IF EXISTS "categories";
DROP SEQUENCE IF EXISTS categories_id_seq;
CREATE SEQUENCE categories_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 9 CACHE 1;

CREATE TABLE "public"."categories" (
    "id" integer DEFAULT nextval('categories_id_seq') NOT NULL,
    "name" character varying(100) NOT NULL,
    "tax_percentage" numeric(6,2) DEFAULT '0' NOT NULL,
    "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "categories" ("id", "name", "tax_percentage", "created_at") VALUES
(1,	'Alimentos não perecíveis',	0.05,	'2023-03-10 19:12:40.34043+00'),
(2,	'Doces e guloseimas',	0.05,	'2023-03-10 19:12:40.34043+00'),
(3,	'Frutas, vegetais, grãos e leguminosas',	0.05,	'2023-03-10 19:12:40.34043+00'),
(4,	'Padaria e frios',	0.05,	'2023-03-10 19:12:40.34043+00'),
(5,	'Sorvetes e congelados',	0.05,	'2023-03-10 19:12:40.34043+00'),
(6,	'Bebidas',	0.05,	'2023-03-10 19:12:40.34043+00'),
(7,	'Bebidas alcoólicas',	0.05,	'2023-03-10 19:12:40.34043+00'),
(8,	'Higiene pessoal',	0.05,	'2023-03-10 19:12:40.34043+00'),
(9,	'Limpeza',	0.05,	'2023-03-10 19:12:40.34043+00');

DROP TABLE IF EXISTS "products";
DROP SEQUENCE IF EXISTS products_id_seq;
CREATE SEQUENCE products_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 103 CACHE 1;

CREATE TABLE "public"."products" (
    "id" integer DEFAULT nextval('products_id_seq') NOT NULL,
    "name" character varying(100) NOT NULL,
    "price" numeric(10,2) NOT NULL,
    "category_id" integer NOT NULL,
    "available_amount" integer DEFAULT '0' NOT NULL,
    "measurement" character varying(15) DEFAULT 'unit' NOT NULL,
    "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "products" ("id", "name", "price", "category_id", "available_amount", "measurement", "created_at") VALUES
(1,	'Açúcar',	5.00,	1,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(2,	'Arroz',	5.00,	1,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(3,	'Café',	5.00,	1,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(4,	'Farinha',	5.00,	1,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(5,	'Feijão',	5.00,	1,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(6,	'Macarrão',	5.00,	1,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(7,	'Óleo',	5.00,	1,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(8,	'Pipoca',	5.00,	1,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(9,	'Sal',	5.00,	1,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(10,	'Bala',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(11,	'Biscoito',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(12,	'Bolacha',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(13,	'Bolo',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(14,	'Chiclete',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(15,	'Chocolate',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(16,	'Cookie',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(17,	'Doce de leite',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(18,	'Gelatina',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(19,	'Geleia',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(20,	'Pirulito',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(21,	'Rosquinha',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(22,	'Torta',	5.00,	2,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(23,	'Abacaxi',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(24,	'Alho',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(25,	'Aveia',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(26,	'Banana',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(27,	'Batata',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(28,	'Cebola',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(29,	'Cenoura',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(30,	'Ervilha',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(31,	'Grão de bico',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(32,	'Granola',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(33,	'Lentilha',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(34,	'Limão',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(35,	'Maçã',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(36,	'Manga',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(37,	'Milho',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(38,	'Pera',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(39,	'Pimentão',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(40,	'Quinoa',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(41,	'Salsa',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(42,	'Tomate',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(43,	'Uva',	5.00,	3,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(44,	'Achocolatado',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(45,	'Bisnaguinha',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(46,	'Cereal',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(47,	'Danone',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(48,	'Manteiga',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(49,	'Margarina',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(50,	'Mortadela',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(51,	'Pão de cachorro-quente',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(52,	'Pão de forma',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(53,	'Pão de hambúrguer',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(54,	'Pão de queijo',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(55,	'Peito de peru',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(56,	'Presunto',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(57,	'Queijo',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(58,	'Requeijão',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(59,	'Salame',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(60,	'Torrada',	5.00,	4,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(61,	'Açaí',	5.00,	5,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(62,	'Hambúrguer',	5.00,	5,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(63,	'Lasanha',	5.00,	5,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(64,	'Picolé',	5.00,	5,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(65,	'Pizza',	5.00,	5,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(66,	'Pote de sorvete',	5.00,	5,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(67,	'Salsicha',	5.00,	5,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(68,	'Água',	5.00,	6,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(69,	'Chá',	5.00,	6,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(70,	'Energético',	5.00,	6,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(71,	'Iogurte',	5.00,	6,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(72,	'Leite',	5.00,	6,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(73,	'Suco',	5.00,	6,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(74,	'Refrigerante',	5.00,	6,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(75,	'Cerveja',	5.00,	7,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(76,	'Vodka',	5.00,	7,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(77,	'Vinho',	5.00,	7,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(78,	'Absorvente',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(79,	'Algodão',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(80,	'Condicionador',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(81,	'Cotonete',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(82,	'Desodorante',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(83,	'Escova de cabelo',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(84,	'Escova de dente',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(85,	'Gel',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(86,	'Papel higiênico',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(87,	'Pasta de dente',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(88,	'Sabonete',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(89,	'Shampoo',	5.00,	8,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(90,	'Água sanitária',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(91,	'Alvejante',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(92,	'Amaciante',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(93,	'Bacia',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(94,	'Balde',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(95,	'Desinfetante',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(96,	'Detergente',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(97,	'Esponja',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(98,	'Luva',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(99,	'Papel toalha',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(100,	'Rodo',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(101,	'Sabão em pó',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(102,	'Sabão em barra',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00'),
(103,	'Vassoura',	5.00,	9,	0,	'unit',	'2023-03-10 19:12:40.34043+00');

DROP TABLE IF EXISTS "sales";
DROP SEQUENCE IF EXISTS sales_id_seq;
CREATE SEQUENCE sales_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."sales" (
    "id" integer DEFAULT nextval('sales_id_seq') NOT NULL,
    "finished" boolean DEFAULT false NOT NULL,
    "taxes_price" numeric(10,2) DEFAULT '0' NOT NULL,
    "total_price" numeric(10,2) DEFAULT '0' NOT NULL,
    "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "sales" ("id", "finished", "taxes_price", "total_price", "created_at") VALUES
(1,	'f',	0.03,	65.03,	'2023-03-10 19:12:40.487784+00');

DROP TABLE IF EXISTS "sales_products";
DROP SEQUENCE IF EXISTS sales_products_id_seq;
CREATE SEQUENCE sales_products_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 10 CACHE 1;

CREATE TABLE "public"."sales_products" (
    "id" integer DEFAULT nextval('sales_products_id_seq') NOT NULL,
    "sale_id" integer NOT NULL,
    "product_id" integer NOT NULL,
    "amount" integer DEFAULT '0' NOT NULL,
    "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT "sales_products_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "sales_products" ("id", "sale_id", "product_id", "amount", "created_at") VALUES
(2,	1,	6,	2,	'2023-03-10 19:12:40.487784+00'),
(7,	1,	8,	2,	'2023-03-10 19:12:40.487784+00'),
(9,	1,	21,	2,	'2023-03-10 19:12:40.487784+00'),
(6,	1,	33,	1,	'2023-03-10 19:12:40.487784+00'),
(8,	1,	60,	1,	'2023-03-10 19:12:40.487784+00'),
(5,	1,	67,	1,	'2023-03-10 19:12:40.487784+00'),
(4,	1,	74,	1,	'2023-03-10 19:12:40.487784+00'),
(3,	1,	96,	1,	'2023-03-10 19:12:40.487784+00'),
(10,	1,	99,	1,	'2023-03-10 19:12:40.487784+00'),
(1,	1,	101,	1,	'2023-03-10 19:12:40.487784+00');

ALTER TABLE ONLY "public"."products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."sales_products" ADD CONSTRAINT "sales_products_product_id_fkey" FOREIGN KEY (product_id) REFERENCES products(id) NOT DEFERRABLE;
ALTER TABLE ONLY "public"."sales_products" ADD CONSTRAINT "sales_products_sale_id_fkey" FOREIGN KEY (sale_id) REFERENCES sales(id) NOT DEFERRABLE;

-- 2023-03-10 19:44:03.511983+00
