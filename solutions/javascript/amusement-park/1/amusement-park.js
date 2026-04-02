//
// Amusement Park Visitor & Ticket System
//

// Task 1: Create a visitor
export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId
  };
}


// Task 2: Revoke ticket
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}


// Task 3: Check ticket status
export function ticketStatus(tickets, ticketId) {
  if (!(ticketId in tickets)) {
    return 'unknown ticket id';
  }

  if (tickets[ticketId] === null) {
    return 'not sold';
  }

  return `sold to ${tickets[ticketId]}`;
}


// Task 4: Simple ticket status
export function simpleTicketStatus(tickets, ticketId) {
  const result = tickets[ticketId];

  if (result === undefined || result === null) {
    return 'invalid ticket !!!';
  }

  return result;
}


// Task 5: GTC version check
export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}