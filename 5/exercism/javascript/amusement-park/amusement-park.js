/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const newVisitor = new Object;
  newVisitor.name = name;
  newVisitor.age = age;
  newVisitor.ticketId = ticketId;
  return newVisitor;
  throw new Error('Please implement the createVisitor function.');
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
  throw new Error('Please implement the revokeTicket function.');
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  if (tickets.hasOwnProperty(ticketId)) {
    if (tickets[ticketId] !== null) {
      return `sold to ${tickets[ticketId]}`
    } else {
      return 'not sold'
    }
   
  } else {
    return `unknown ticket id`
  }
  throw new Error('Please implement the ticketStatus function.');
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  if (!tickets.hasOwnProperty(ticketId) || tickets[ticketId] === null) {
   return "invalid ticket !!!"
  } else {
    return tickets[ticketId]
  }
  throw new Error('Please implement the simpleTicketStatus function.');
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor.gtc?.version
  throw new Error('Please implement the gtcVersion function.');
}
