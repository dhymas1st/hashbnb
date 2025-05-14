import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-38013603/original/2c52aa10-296f-4046-8d67-4f8419f632e5.jpeg?im_w=1200"
        alt="Imagem da acomodação"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          Stúdio moderno e aconchegante, sacada, cozinha compacta,
          ar-condicionado, Smart TV, além de muitas outras comodidades.
          localizado a 300 m do metrô Anhangabaú e a 500 m da estação República.
          Tenha a segurança de um condomínio com portaria 24h. A piscina, a
          academia e a sala de reuniões estão disponíveis para o hóspede. Self
          check in ! Os hóspedes recebem a senha (fechadura eletrónica) no dia
          da chegada.
        </p>
      </div>
      <p>
        <span>R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
