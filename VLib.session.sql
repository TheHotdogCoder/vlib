CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL UNIQUE,
    pw VARCHAR(30) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);
-- @block
create table rspapers (
    id INT primary key auto_increment,
    title varchar(255) not null unique,
    pubDate year not null,
    authors text not null,
    currAdviser text not null,
    abstract longtext not null,
    imgref varchar(255) not null unique,
    isBorrowed boolean not null
);
-- @block
insert into rspapers (title, pubDate, authors, grade, currAdviser, isBorrowed)
values
    ('Assessing the Anti-Mitotic Property of the ethanolic crude extract of Mimosa Pudica using Allium Cepa Assay', 2024, 'C. Lagradante, L. Comentan, D. Sumpit, et. al.', 9, 'Mr. Ephraim Villacrusis', false),
    ('Metal Cleaning and Rust Removal Machinery using Electrolysis and Ultrasonic Waves', 2024, 'C. Cadag, J. Ambrocio, J. Cruz, et. al.', 9, 'Mr. Ephraim Villacrusis', false),
    ('Assisting Library Users through VLib: Virtual Library', 2024, 'A. Atencia, D. Mata, J. Odavar, et. al.', 9, 'Mr. Ephraim Villacrusis', false),
    ('J.A.D.E. : Jeepney Assistant Driver Electronic', 2024, 'K. Caranguian, V. Banera, M. Etcoy, et. al.', 9, 'Mr. Ephraim Villacrusis', false)
;
-- @block
alter table rspapers
modify column imgref longtext null;

-- @block
SELECT * FROM rspapers