function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.foods);
    }, 2000);
  });
};

describe('mocking learning', () => {
  it('mock a reg function', () => {
    const fetchDog = jest.fn();
    fetchDog('snickers');
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toBeCalledWith('snickers');
    fetchDog('hugo');
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  it('can create a person', () => {
    const me = new Person('Wes', ['pizza', 'burgs']);
    expect(me.name).toBe('Wes');
  });

  it('can fetch foods', async () => {
    const me = new Person('Wes', ['pizza', 'burgs']);
    me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'ramen']);
    const favFoods = await me.fetchFavFoods();
    expect(favFoods).toContain('sushi');
  });
});
