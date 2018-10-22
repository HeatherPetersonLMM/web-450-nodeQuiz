let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = 'nQuizUser';
config.database.password = 'User1234';
config.database.port = '63642';
config.database.url = 'ds263642.mlab.com';
config.database.name = 'nodequiz';


module.exports = config;