const plugin = (options = {}) => tree => {
  options.foo = options.foo || {}

  const process = node => {
    if (node.tag && node.tag === 'script' && node.attrs) {
      if (node.attrs.type === 'module') {
        removeTag(node)
      }

      if (node.attrs.nomodule === '' || node.attrs.nomodule) {
        delete node.attrs.nomodule
      }
    }

    if (node.tag && node.tag === 'link' && node.attrs && node.attrs.rel === 'modulepreload') {
      removeTag(node)
    }

    return node
  }

  return tree.walk(process)
}

function removeTag(node) {
  node.tag = false
  node.content = []
}

export default plugin
