var either = require('./../'),
    expect = require('chai').expect,
    assert = require('chai').assert;

describe('When having a left value', function() {
	var instanceWithLeftValue, expectedValue = 'left';	

	before(function() {
		instanceWithLeftValue = either.left(expectedValue);
	});

	it('Should fold left', function() {
		instanceWithLeftValue.fold(
			function left(value) { expect(value).to.be.equal(expectedValue) },
			function right(value) { assert.fail();  }
		);
	});

	it('Should indicate that it has a left value', function() {
		expect(instanceWithLeftValue.hasLeft()).to.be.true;
	});

	it('Should indicate that it does NOT have a right value', function() {
		expect(instanceWithLeftValue.hasRight()).to.be.false;
	});

	it('Should have a left value', function() {
		expect(instanceWithLeftValue.left()).to.be.equal(expectedValue);
	});

	it('Should NOT have a right value', function() {
		expect(instanceWithLeftValue.right()).to.be.null;
	});
});

describe('When having a right value', function() {
	var instanceWithRightValue, expectedValue = 'right';	

	before(function() {
		instanceWithRightValue = either.right(expectedValue);
	});

	it('Should fold right', function() {
		instanceWithRightValue.fold(
			function left(value) { assert.fail(); },
			function right(value) { expect(value).to.be.equal(expectedValue) }
		);
	});

	it('Should indicate that it does NOT have a left value', function() {
		expect(instanceWithRightValue.hasLeft()).to.be.false;
	});

	it('Should indicate that it has a right value', function() {
		expect(instanceWithRightValue.hasRight()).to.be.true;
	});

	it('Should NOT have a left value', function() {
		expect(instanceWithRightValue.left()).to.be.null;
	});

	it('Should have a right value', function() {
		expect(instanceWithRightValue.right()).to.be.equal(expectedValue);
	});
});

describe('When folding with anything but a function', function() {
	var instance;

	before(function() {
		instance = either.left('Some value');
	});

	it('Should throw an error when folding left without a function', function() {
		var invalidFoldArguments = function() { instance.fold( {}, function right(value) {} )};
		expect(invalidFoldArguments).to.throw(either.InvalidOptionError);
	});

	it('Should throw an error when folding right without a function', function() {
		var invalidFoldArguments = function() { instance.fold( function left(value) {}, '' )};
		expect(invalidFoldArguments).to.throw(either.InvalidOptionError);
	});
});
