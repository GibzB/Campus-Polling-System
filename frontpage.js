
class MyComponent extends React.Component {

  constructor(props) {
    super(props);
  }
render() {
    return (
      // The JSX code you put here is what your component will render
      <div id='header'>
<h1>Campus Polling App!</h1>
</div>
    );
  }
};
ReactDOM.render(<MyComponent/>, document.getElementById("header"));
