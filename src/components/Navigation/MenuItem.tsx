
import MultiLevel from "./MultiLevel";
import SingleLevel from "./SingleLevel";

import { hasChildren } from "./utils";

function MenuItem({item}) {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
}

export default MenuItem;
