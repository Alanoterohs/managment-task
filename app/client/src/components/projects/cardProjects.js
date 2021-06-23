function CardProject({ setClick, value, setProjects }) {
  return (
    <div>
      <span> crear nuevo proyecto </span>
      <input
      type='text'
      placeholder='proyecto'
      value={value}
      onChange={e => setProjects(e.target.value)}
      />
    <button onClick= {() => setClick(false)}>Adherir proyecto</button>
    </div>
  );
};

export default CardProject;
