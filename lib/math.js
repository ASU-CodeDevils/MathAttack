
termGen = function() {
    var _first = Math.floor(Math.random() * 10);
    var _second = Math.floor(Math.random() * 10);

    if (_second > _first)
    {
        var temp = _first;
        _first = _second;
        _second = temp;
    }
    return {
        firstTerm: _first,
        secondTerm: _second
    };
};

operatorGen = function() {
    var operators = ["-", "+"];
    return operators[Math.round(Math.random())];

};



expressionGen = function() {
    var terms = termGen();
    var operator = operatorGen();
    var _answer;
    switch (operator) {
        case "+":
            _answer = terms.firstTerm + terms.secondTerm;
            break;
        case "-":
            _answer = terms.firstTerm - terms.secondTerm;
            break;
        case "*":
            _answer = terms.firstTerm * terms.secondTerm;
            break;
        case "/":
            _answer = terms.firstTerm / terms.secondTerm;
            break;
    }
    console.log(terms.firstTerm);
    console.log(operator);
    console.log(terms.secondTerm);
    console.log(_answer);
    return {
        firstTerm: terms.firstTerm,
        secondTerm: terms.secondTerm,
        operation: operator,
        answer: _answer
    }
};
module.exports = {
    expressionGen: expressionGen
};