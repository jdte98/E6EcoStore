package com.equipo6.ekostore.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.equipo6.ekostore.model.Usuario;

import java.util.List;


public interface UsuarioRepository extends MongoRepository<Usuario, String> {

	List<Usuario> findByUsername (String username);
	
	List<Usuario> findByNombreusuario(String nombreusuario);
	
}
