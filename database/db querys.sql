select * from usuarios;

use BackendDB;


# Ayuda para dropeos
DROP TABLE Usuarios;
DROP TABLE Rols;
DROP TABLE roles;

DROP TABLE usuario_tiene_rol;

# Creacion de tablas principales
CREATE TABLE usuarios (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(90) NOT NULL,
    apellido VARCHAR(90) NOT NULL,
    correo VARCHAR(180) NOT NULL UNIQUE,
    telefono VARCHAR(90) NOT NULL,
    contrasenia VARCHAR(90) NULL,
    imagen VARCHAR(255) NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL
);

CREATE TABLE roles (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(90) NOT NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL
);

# Tabla la cual cruza los roles con los usuarios
CREATE TABLE usuario_tiene_rol(
	id_usuario BIGINT NOT NULL,
    id_rol BIGINT NOT NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL,
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(id_rol) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY(id_usuario, id_rol)
);


INSERT INTO Rols(
	id,
	nombre,
    createdAt,
    updatedAt
)
VALUES(
	1,
	'ADMINISTRADOR',
    '2024-04-01',
    '2024-04-01'
);

INSERT INTO Rols (
	id,
	nombre,
    createdAt,
    updatedAt
)
VALUES(
	2,
	'REPARTIDOR',
    '2024-04-01',
    '2024-04-01'
);

INSERT INTO Rols (
	id,
	nombre,
    createdAt,
    updatedAt
)
VALUES(
	3,
	'CLIENTE',
    '2024-05-01',
    '2024-05-01'
)

/* Tabla Test
CREATE TABLE usuarios (
	id int NOT NULL,
    nombre varchar(45),
    apellido varchar(45),
    correo varchar(45),
    telefono varchar(45),
    contrasenia varchar(45),
    imagen varchar(45),
    rol_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (rol_id) REFERENCES roles(id)
);*/ 


/* Gringo
CREATE TABLE users(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(180) NOT NULL UNIQUE,
    name VARCHAR(90) NOT NULL,
    lastname VARCHAR(90) NOT NULL,
    phone VARCHAR(90) NOT NULL UNIQUE,
    image VARCHAR(255) NULL,
    password VARCHAR(90) NOT NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL
);*/ 

