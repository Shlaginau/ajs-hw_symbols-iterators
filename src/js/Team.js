export default class Team {
  constructor() {
    this.characters = new Set();
  }

  add(character) {
    if (!this.characters.has(character)) {
      this.characters.add(character);
    } else {
      throw new Error(`Character ${character.name} is already in the team.`);
    }
  }

  [Symbol.iterator]() {
    const charactersArray = Array.from(this.characters);
    let currentIndex = 0;

    return {
      next() {
        if (currentIndex < charactersArray.length) {
          currentIndex += 1;
          return {
            value: charactersArray[currentIndex - 1],
            done: false,
          };
        }

        return { done: true };
      },
    };
  }
}
