INSERT INTO drinks (description,img, name,price,type)
VALUES ("vinoo rosso", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'Vino rosso',23,'rosso'),
("vinoo rosso", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'Vino rosso',23,'bianco'),
("vinoo rosso", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'Fanta',23,'analcolica'),
 ("Forte", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'Vino rosso',33,'rosso');


 INSERT INTO foods (description,img, name,price,type)
 VALUES ("spaghetti", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'spaghetti',23,'Primo'),
 ("ravioli", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'ravioli di carne',23,'Primo'),
 ("risotto", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'Risotto  con Bisque di crostacei',23,'Primo'),
  ("tagliatella", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'Tagliatella nera',33,'Primo');


INSERT INTO tabella(name)
 VALUE('Rose'),('Girasole'),('Tulipani'),('Ciclamino');


INSERT INTO ordini(is_payed,local_date,seats,table_id)
 VALUE(1,'2022-01-01',1,1),(1,'2022-11-11',1,2),(1,'2022-03-18',1,1),(1,'2022-08-15',1,3);


 INSERT INTO food_has_order(food_id,order_id) VALUE(1,1),(2,1),(2,1),(3,1);

 INSERT INTO drinks_has_order(drink_id,order_id) VALUE(1,1),(2,1),(2,1),(3,1);




