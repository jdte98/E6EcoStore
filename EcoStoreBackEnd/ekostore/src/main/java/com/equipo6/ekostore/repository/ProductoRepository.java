package com.equipo6.ekostore.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.equipo6.ekostore.model.Producto;

public interface ProductoRepository extends MongoRepository<Producto, String>{
	
	List<Producto> findByCodigoproducto(Long codigoproducto);
	
	List<Producto> findByNombreproducto(String nombreproducto);

}
