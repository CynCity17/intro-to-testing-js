// Unit tests for the helloWorld function
describe('sayHello', function() {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello()).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello()).not.toBe("Hello, Alex!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});