export const isValidUuid = (uuid: string) => {
  const regexUuid = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
  
  return !!uuid.match(regexUuid);
}