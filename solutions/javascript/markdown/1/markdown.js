function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function parser(markdown, delimiter, tag) {
  // Escape delimiter for regex safety
  const escaped = delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  // Non-greedy + global match
  const pattern = new RegExp(`${escaped}(.+?)${escaped}`, 'g');
  const replacement = `<${tag}>$1</${tag}>`;

  return markdown.replace(pattern, replacement);
}

function parse__(markdown) {
  return parser(markdown, '__', 'strong');
}

function parse_(markdown) {
  return parser(markdown, '_', 'em');
}

function parseText(markdown, list) {
  const parsedText = parse_(parse__(markdown));
  return list ? parsedText : wrap(parsedText, 'p');
}

function parseHeader(markdown, list) {
  let count = 0;

  while (markdown[count] === '#') {
    count++;
  }

  if (count === 0 || count > 6) {
    return [null, list];
  }

  const headerTag = `h${count}`;
  const content = markdown.slice(count).trim();
  const headerHtml = wrap(content, headerTag);

  if (list) {
    return [`</ul>${headerHtml}`, false];
  }

  return [headerHtml, false];
}

function parseLineItem(markdown, list) {
  if (markdown.startsWith('* ')) {
    const content = markdown.slice(2);
    const innerHtml = wrap(parseText(content, true), 'li');

    if (list) {
      return [innerHtml, true];
    }

    return [`<ul>${innerHtml}`, true];
  }

  return [null, list];
}

function parseParagraph(markdown, list) {
  if (list) {
    return [`</ul>${parseText(markdown, false)}`, false];
  }

  return [parseText(markdown, false), false];
}

function parseLine(markdown, list) {
  let [result, inListAfter] = parseHeader(markdown, list);

  if (result === null) {
    [result, inListAfter] = parseLineItem(markdown, list);
  }

  if (result === null) {
    [result, inListAfter] = parseParagraph(markdown, list);
  }

  return [result, inListAfter];
}

export function parse(markdown) {
  const lines = markdown.split('\n');
  let result = '';
  let list = false;

  for (let i = 0; i < lines.length; i++) {
    const [lineResult, newList] = parseLine(lines[i], list);
    result += lineResult;
    list = newList;
  }

  if (list) {
    result += '</ul>';
  }

  return result;
}