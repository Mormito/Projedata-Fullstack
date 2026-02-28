INSERT INTO product (id, name, price) VALUES
                                          (1, 'Office Chair', '120.00'),
                                          (2, 'Laptop', '1500.00'),
                                          (3, 'Smartphone', '800.00'),
                                          (4, 'Desk Lamp', '45.00'),
                                          (5, 'Bookshelf', '200.00')
    ON CONFLICT (id) DO NOTHING;

INSERT INTO raw_material (id, name, quantity) VALUES
                                                  (1, 'Steel', 1000),
                                                  (2, 'Wood', 500),
                                                  (3, 'Plastic', 300),
                                                  (4, 'Glass', 200),
                                                  (5, 'LED Bulbs', 100),
                                                  (6, 'Screws', 5000),
                                                  (7, 'Copper Wire', 200),
                                                  (8, 'Circuit Boards', 50),
                                                  (9, 'Foam Padding', 100)
    ON CONFLICT (id) DO NOTHING;

INSERT INTO product_materials (id, product_id, quantity, raw_material_id) VALUES
                                                                              (1, 1, 50, 1),
                                                                              (2, 1, 5, 3),
                                                                              (3, 1, 2, 9),
                                                                              (4, 1, 20, 6),
                                                                              (5, 2, 2, 3),
                                                                              (6, 2, 1, 7),
                                                                              (7, 2, 1, 8),
                                                                              (8, 2, 4, 6),
                                                                              (9, 3, 1, 3),
                                                                              (10, 3, 1, 7),
                                                                              (11, 3, 1, 8),
                                                                              (12, 3, 2, 6),
                                                                              (13, 4, 1, 3),
                                                                              (14, 4, 1, 4),
                                                                              (15, 4, 2, 5),
                                                                              (16, 4, 4, 6),
                                                                              (17, 5, 30, 2),
                                                                              (18, 5, 20, 6),
                                                                              (19, 5, 5, 1)
    ON CONFLICT (id) DO NOTHING;