// https://github.com/angular/protractor/blob/master/docs/getting-started.md
// https://github.com/angular/protractor/blob/master/docs/api.md

describe('Search pieces', function() {
    // got to Catalogue page
    browser.get('index.html#/catalogue');

    //var elemDispIcon = element(by.model('chkIconPhotos'));

    it('should filter pieces', function() {
        var elemSearch = element(by.model('txtFilter'));
        elemSearch.sendKeys("N10");

        // following test works with count()
        var elemPieces = element.all(by.repeater("ceramique in ceramiques"));
        console.log("elemPieces = " + elemPieces);
        expect(elemPieces.count()).toBe(4);

        // following test wotks with
        element.all(by.repeater("ceramique in ceramiques")).then(function(items){
            expect(items.length).toBe(4);
        });

        // need element(...).THEN(...) to have good value item[0] instead of undefined
        element.all(by.repeater("ceramique in ceramiques")).then(function(items){
            expect(items[0].getText()).toBe("N10\nN10 - 2013-12-24 la bouille - 23122013 - PC230126.jpg");
        });
    });
});