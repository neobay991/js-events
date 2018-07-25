(function(exports){
  function CalculatorController(){
    this._calculatorModel = new CalculatorModel();
    this._calculatorView = new CalculatorView();
  }

  CalculatorController.prototype.setEventListeners = function(){
    document.getElementById('square-button')
      .addEventListener('click', this.squareNumber.bind(this));

    document.getElementById('half-button')
      .addEventListener('click', this.halfNumber.bind(this));

    document.getElementById('percent-button')
      .addEventListener('click', this.percentageNumber.bind(this));
  }

  CalculatorController.prototype.squareNumber = function(){
    let value = document.getElementById('square-input').value
    let result = this._calculatorModel.square(value);
    this._calculatorView.buildOutput(result)
  }

  CalculatorController.prototype.halfNumber = function(){
    let value = document.getElementById('half-input').value
    let result = this._calculatorModel.half(value);
    this._calculatorView.buildOutput(result)
  }

  CalculatorController.prototype.percentageNumber = function(){
    let value = document.getElementById('percent1-input').value
    let value2 = document.getElementById('percent2-input').value
    let result = this._calculatorModel.calculatePercentage(value, value2);
    this._calculatorView.buildOutput(result)
  }

  exports.CalculatorController = CalculatorController
})(this);
