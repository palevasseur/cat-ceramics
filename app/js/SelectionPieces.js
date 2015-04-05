// SelectionPieces class
// todo: rename CollectionPieces => SelectionPieces
// todo: rename CollectionPiecesManager => SelectionPiecesManager
function CollectionPieces(name) {
    this.name = name;
    this.selections = new Array();
}
CollectionPieces.prototype.select = function (pieceNumber) {
    this.selections.push(pieceNumber);
};
CollectionPieces.prototype.unselect = function (pieceNumber) {
    var posSel = this.selections.indexOf(pieceNumber);
    if (posSel != -1) {
        this.selections.splice(posSel, 1);
    }
};
CollectionPieces.prototype.IsSelected = function (pieceNumber) {
    if (this.selections.indexOf(pieceNumber) != -1) {
        return true;
    }
    else {
        return false;
    }
};
// CollectionPiecesManager class
function CollectionPiecesManager() {
    this.selections = new Array();
    this.currentSelectionId = 0;
}
CollectionPiecesManager.prototype.createSelection = function (name) {
    var newSelection = new CollectionPieces(name);
    this.selections.push(newSelection);
    return newSelection;
};
CollectionPiecesManager.prototype.getCurrentSelection = function () {
    if (this.currentSelectionId <= this.selections.length - 1)
        return this.selections[this.currentSelectionId];
    else
        return null;
};
//# sourceMappingURL=SelectionPieces.js.map