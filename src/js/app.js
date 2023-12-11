import Character from './Character';
import Team from './Team';

const team = new Team();
team.add(new Character('Лучник', 'Bowman'));
team.add(new Character('Демон', 'Daemon'));

team.characters.forEach((character) => {
  // eslint-disable-next-line no-console
  console.log(character);
});
