import { Link,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import UsersComponent from './Components/UsersComponent'
import PostsComponents from './Components/PostsComponents';
import PostUserComponent from './Components/PostUserComponent'
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello </h1>
      <Link to="/users">Users</Link> {'  '} | {' '}
      <Link to="/posts">Posts</Link>
      <Switch>
        <Route path="/users" component={UsersComponent} exact={true}></Route>
        <Route path="/posts" component={PostsComponents} exact={true}></Route>
        <Route path="/userPosts" component={PostUserComponent}exact={true}></Route>
      </Switch>

    </div>
  );
}

export default App;
