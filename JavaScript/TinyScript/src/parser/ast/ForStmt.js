const Stmt = require("./Stmt")
const ASTNodeTypes = require('./ASTNodeTypes')

class ForStmt extends Stmt {
    constructor(parent, type, label) {
        super(parent, ASTNodeTypes.FOR_STMT, 'for')
    }
}

module.exports = ForStmt
