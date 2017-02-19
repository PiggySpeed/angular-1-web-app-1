module.exports = function scaleService() {

  var data = {
    currentIndex: 2
  };

  function setIndex(index) {
    data.currentIndex = index;
    console.log('changed ', data);
  }

  function resetIndex() {
    data.currentIndex = 0;
  }

  function getData() {
    return data;
  }

  return {
    setIndex: setIndex,
    resetIndex: resetIndex,
    getData: getData
  };

};
