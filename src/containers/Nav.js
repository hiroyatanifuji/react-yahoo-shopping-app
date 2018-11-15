import Nav from "../components/Nav";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  categories: state.shopping.categories
});

export default connect(mapStateToProps)(Nav);