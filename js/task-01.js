const listEl = document.querySelector('#categories')

console.log(`Number of categories: ${listEl.children.length}`)

for (const liEl of listEl.children) {
    console.log(`Category: ${liEl.firstElementChild.textContent}`)
    console.log(`Elements: ${liEl.lastElementChild.children.length}`)
}

