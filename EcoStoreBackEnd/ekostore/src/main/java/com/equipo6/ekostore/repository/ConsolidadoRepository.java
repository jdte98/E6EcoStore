package com.equipo6.ekostore.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.equipo6.ekostore.model.Consolidado;

public interface ConsolidadoRepository extends MongoRepository<Consolidado, String>{
	
	List<Consolidado> findByCiudad(String ciudad);

}
