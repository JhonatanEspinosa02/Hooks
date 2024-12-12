export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((sprite) => (
          <img id={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
};
