import * as  navigationActions from './navigation';
import * as  todosActions from './todos';
import * as  testActions from './test';


export default {...navigationActions, ...todosActions,...testActions};
