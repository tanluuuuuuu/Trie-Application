export default class TrieNode {
    constructor(letter = null, endOfWord = false, content = {}) {
        this.letter = letter
        this.endOfWord = endOfWord
        this.children = {}
        this.content = content
    }


}