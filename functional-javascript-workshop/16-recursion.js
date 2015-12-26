module.exports = function getDependencies(tree, deps, map) {
  deps = deps || [];
  map = map || {};
  if (tree.dependencies) {
    Object.keys(tree.dependencies).forEach(function(key) {
      var subtree = tree.dependencies[key];
      var dependency = key + '@' + subtree.version;
      if (!map.hasOwnProperty(dependency)) {
        map[dependency] = true;
        deps.push(key + '@' + subtree.version);
      }
      getDependencies(subtree, deps, map);
    });
  } 
  return deps.sort();
};
