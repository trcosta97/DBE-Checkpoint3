package com.adocao.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity(name="cachorro")
@Table(name = "tb_cachorro")
@Getter
@Setter
public class Cachorro {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "id_cachorro")
    private Long id;
    @Column(name = "nome_cachorro")
    private String nome;
    @Column(name = "raca_cachorro")
    private String raca;
    @Column(name = "sexo_cachorro")
    private Sexo sexo;
    @Column(name = "data_cadastro")
    @Temporal(TemporalType.DATE)
    @CreatedDate
    private LocalDate dataCadastro;
    @Column(name = "data_atualizacao")
    @UpdateTimestamp
    private LocalDate dataAtualizacao;
    @Column(name="cachorro_ativo")
    private Boolean ativo;

    public Cachorro(CachorroDTO dados) {
        this.nome = dados.nome();
        this.raca = dados.raca();
        this.sexo = dados.sexo();
    }
}
