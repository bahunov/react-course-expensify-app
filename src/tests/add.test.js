const add = (a,b) => a+b;

const generateGreeting = (name = 'Unknown') => (`Hello ${name}`);

test('should add two numbers', () =>{
    const result = add(3,5);
    expect(result).toBe(8)
});

test('should contain name', () =>{
    const name = generateGreeting('Bahader')
    expect(name).toContain('Bahader')
});

test('should contain uknown when no name', () =>{
    const name = generateGreeting()
    expect(name).toContain('Unknown')
});