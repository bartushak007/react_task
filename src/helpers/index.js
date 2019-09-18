export const resolvePath = (
  filePath,
  prefix = process.env.PUBLIC_URL.concat('/')
) => (filePath.startsWith('http') ? filePath : prefix.concat(filePath));

export const capitalizeFirst = str =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const validateIP = ip => {
  return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );
};
