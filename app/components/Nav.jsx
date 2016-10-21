var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>Nav</h1>
//         <Link to="/">Get weather</Link>
//         <Link to="/about">About</Link>
//         <Link to="/examples">Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = () => {
  return (
    <div>
      <h1>Nav</h1>
      <Link to="/">Get weather</Link>
      <Link to="/about">About</Link>
      <Link to="/examples">Examples</Link>
    </div>
  )
}

module.exports = Nav;
