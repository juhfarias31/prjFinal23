package com.Devs6.PrjFinal.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Devs6.PrjFinal.entities.Jogo;
import com.Devs6.PrjFinal.repositories.JogoRepository;

@Service
public class JogoService {
private final JogoRepository jogoRepository;

	@Autowired
	public JogoService(JogoRepository jogoRepository) {
		this.jogoRepository = jogoRepository;
	}
	
	public Jogo saveJogo(Jogo jogo) {
		return jogoRepository.save(jogo);
	}
	
	public Jogo getJogoById(Long id) {
		return jogoRepository.findById(id).orElse(null);
	}
	
	public Jogo getProdutoById(long id) {
		return jogoRepository.findById(id).orElse(null);
	}
	
	public List<Jogo> getAllJogos(){
		return jogoRepository.findAll();
	}
	
	public void deleteJogo(Long id) {
		jogoRepository.deleteById(id);
	}


}