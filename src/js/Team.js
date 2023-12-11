export default class Team {
  constructor() {
    this.characters = [];
    this.currentIndex = 0;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.currentIndex < this.characters.length) {
      this.currentIndex += 1;
      return {
        value: this.characters[this.currentIndex],
        done: false,
      };
    }

    return { done: true };
  }

  add(character) {
    if (!this.characters.find((char) => char === character)) {
      this.characters.push(character);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Character ${character.name} is already in the team.`);
    }
  }
}
