function Thumbnail({key,source,alt}) {
  return <img className="thumbnail" id={key} alt={alt} src={source} ></img>;
}

export default Thumbnail;
