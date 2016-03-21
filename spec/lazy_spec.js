describe('lazy', function (){

  lazy('context', function () {
    return 'original';
  });

  it('sets context', function () {
    expect(context).toEqual('original')
  });

  describe('context changed', function () {
    lazy('context', function () {
      return 'new';
    });

    it('returns changed context', function () {
      expect(context).toEqual('new');
    });
  });

  describe('references another context', function () {
    lazy('otherContext', function () {
      return 'other';
    });

    lazy('context', function () {
      return otherContext;
    });

    it('returns context with referenced value', function () {
      expect(context).toEqual('other');
    });
  });
});
