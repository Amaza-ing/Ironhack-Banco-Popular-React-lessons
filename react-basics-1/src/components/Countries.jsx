function Countries(props) {
  return (
    <div className="countries">
      <h2>Countries: </h2>
      {props.children}
      <h3>Happy travelling!</h3>
    </div>
  )
}

export default Countries