
class ASTNode {

    constructor(_parent, _type = null, _label = null) {

        // 树结构
        this.children = []
        this.parent = _parent

        // 关键信息
        this.lexeme = null
        this.type = _type
        this.label = _label

    }

    getChild(index) {
        return this.children[index]
    }

    addChild(node) {
        this.children.push(node)
    }

    getLexeme() {
        return this.lexeme
    }

    getChildren() {
        return this.children
    }

    getType() {
        return this.type
    }

    print(indent = 0) {
        console.log(`${''.padStart(indent * 2, ' ')}${this.label}`)
        this.children.forEach(item => item.print(indent + 1))
    }

}

module.exports = ASTNode
