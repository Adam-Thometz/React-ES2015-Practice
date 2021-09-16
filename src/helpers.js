function choice(items) {
  const idx = Math.floor(Math.random() * items.length)
  return items[idx]
}

function remove(items, item) {
  let i = 0
  while (i < items.length) {
    if (items[i] === item) {
      const val = items[i]
      items.splice(i, 1)
      return val
    } else {
      i++
    }
  }
}

export {choice, remove}