export const authRoles = {
  sa: ['SA'],
  admin: ['SA', 'ADMIN'],
  editor: ['SA', 'ADMIN', 'EDITOR'],
  user: ['SA', 'USER', 'ADMIN'],
  guest: ['SA', 'ADMIN', 'EDITOR', 'GUEST']
}