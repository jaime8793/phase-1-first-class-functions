function receivesAFunction(fn) {
    return fn();
  }
  function returnsANamedFunction() {
    return receivesAFunction;
  }
  function returnsAnAnonymousFunction() {
    return function () {};
  }