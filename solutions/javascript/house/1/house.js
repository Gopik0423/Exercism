export class House {
  static subjects = [
    'the house that Jack built.',
    'the malt',
    'the rat',
    'the cat',
    'the dog',
    'the cow with the crumpled horn',
    'the maiden all forlorn',
    'the man all tattered and torn',
    'the priest all shaven and shorn',
    'the rooster that crowed in the morn',
    'the farmer sowing his corn',
    'the horse and the hound and the horn'
  ];

  static actions = [
    '',
    'lay in',
    'ate',
    'killed',
    'worried',
    'tossed',
    'milked',
    'kissed',
    'married',
    'woke',
    'kept',
    'belonged to'
  ];

  static verse(n) {
    const lines = [`This is ${House.subjects[n - 1]}`];

    for (let i = n - 1; i > 0; i--) {
      lines.push(`that ${House.actions[i]} ${House.subjects[i - 1]}`);
    }

    return lines;
  }

  static verses(start, end) {
    const result = [];

    for (let i = start; i <= end; i++) {
      result.push(...House.verse(i));
      if (i !== end) result.push('');
    }

    return result;
  }
}