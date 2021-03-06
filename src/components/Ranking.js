import React from "react";


export default class Ranking extends React.Component {
  componentWillMount() {
    this.props.onMount(this.props.categoryId);
  }

  //componentWillReceiveProps(nextProps) {
  //  if (this.props.categoryId !== nextProps.categoryId) {
  //    this.props.onUpdate(nextProps.categoryId);
  //  }
//  }

  renderItem = () => {
    if (this.props.error) {
      return <p>error</p>;
    } else if (typeof this.props.ranking === "undefined") {
      return <p>loading</p>
    } else {
      return (
        <ol>
          {this.props.ranking.map(item => (
            <li key={`ranking-item-${item.code}`}>
              <img alt={item.name} src={item.imageUrl} />
              <a href={item.url} target="_blank">{item.name}</a>
            </li>
          ))}
        </ol>
      );
    }
  }


  render() {
    const { category } = this.props;

    return (
      <div>
        <h2>{
          typeof category !== "undefined"
            ? `${category.name}のランキング`
            : ""
        }</h2>
        {this.renderItem()}
      </div>
    );
  }
}

Ranking.defaultProps = {
  categoryId: "1"
};