package com.Devs6.PrjFinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Devs6.PrjFinal.entities.Jogo;

public interface JogoRepository extends JpaRepository <Jogo, Long> {
}