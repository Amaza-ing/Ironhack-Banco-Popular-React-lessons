function Country(props) {
  // const { country, population, info } = props;

  return (
    <div>
      <p>Some history about: {props.country}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat
        cupiditate itaque? Vitae pariatur error praesentium, corrupti ad officia
        excepturi soluta commodi ratione, autem similique aut ullam minima sit?
        Saepe!
      </p>
      <p>Population: {props.population}</p>
      <p>area: {props.info.area} - language: {props.info.language}</p>
    </div>
  );
}

export default Country;
