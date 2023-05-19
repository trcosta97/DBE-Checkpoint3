package com.adocao.service;

import com.adocao.domain.Cachorro;
import com.adocao.domain.CachorroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CachorroService {

    @Autowired
    private CachorroRepository cachorroRepository;

    public Cachorro cadastrarCachorro(Cachorro cachorro){
        Cachorro cachorroCadastrado = cachorroRepository.save(cachorro);
        return cachorroCadastrado;
    }

    public Cachorro atualizarCachorro(Cachorro novoCachorro, Long id){
        Optional<Cachorro> cachorroOptional = cachorroRepository.findById(id);
        if(cachorroOptional.isPresent()){
            Cachorro cachorro = cachorroOptional.get();
            cachorro.setNome(novoCachorro.getNome());
            cachorro.setRaca(novoCachorro.getRaca());
            cachorro.setSexo(novoCachorro.getSexo());
            cachorroRepository.save(novoCachorro);
            return cachorro;
        }
        return null;
    }

    public Cachorro deletarCachorro(Long id){
        Optional<Cachorro> cachorroOptional = cachorroRepository.findById(id);
        if(cachorroOptional.isPresent()){
           Cachorro cachorro = cachorroOptional.get();
           cachorro.setAtivo(false);
           return cachorro;
        }
        return null;
    }


        public List<Cachorro> listarCachorrosOrdenadosPorDataCadastro() {
            Sort sort = Sort.by("dataCadastro").descending();
            return cachorroRepository.findAll(sort);
        }

    }








