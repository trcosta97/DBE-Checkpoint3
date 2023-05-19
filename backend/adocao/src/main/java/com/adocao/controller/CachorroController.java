package com.adocao.controller;

import com.adocao.domain.Cachorro;
import com.adocao.domain.CachorroDTO;
import com.adocao.service.CachorroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CachorroController {

    @Autowired
    private CachorroService cachorroService;

    @PostMapping("/cachorro")
    public ResponseEntity<Cachorro> cadastrarCachorro(@RequestBody CachorroDTO dados){
        var cachorro = new Cachorro(dados);
        cachorroService.cadastrarCachorro(cachorro);
        return ResponseEntity.ok(cachorro);
    }

    @PutMapping("/cachorro/{id}")
    public ResponseEntity<Cachorro> atualizarCachorro(@PathVariable Long id, @RequestBody CachorroDTO dados){
        var cachorroAtualizado = new Cachorro(dados);
        cachorroService.atualizarCachorro(cachorroAtualizado, id);
        return ResponseEntity.ok(cachorroAtualizado);
    }

    @GetMapping("/ordenados")
    public ResponseEntity<List<Cachorro>> listarCachorrosOrdenadosPorDataCadastro() {
        List<Cachorro> cachorros = cachorroService.listarCachorrosOrdenadosPorDataCadastro();
        return ResponseEntity.ok(cachorros);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Cachorro> deletarCachorro(@PathVariable Long id){
        Cachorro cachorroDeleteado = cachorroService.deletarCachorro(id);
        return ResponseEntity.ok(cachorroDeleteado);
    }
}
