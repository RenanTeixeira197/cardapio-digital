import Cards from cards
import Cards from "../components/cards";
const card = () => {
  return (
    <div className="cards">
        <Cards titulo="Burguer de Picanha"
        descricao = "Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geleira de Bacon"
        preco="R$ 44,90"
        />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
    </div>
  )
}

export default card