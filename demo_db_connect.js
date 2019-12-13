const mysql = require('mysql');
const port = 3306;
const app = express();

// create connection
const connection = mysql.createConnection({
  host: 'custom-mysql.gamification.svc.cluster.local',
  port: '3306',
  user: 'xxuser',
  password: 'welcome1',
  database: 'sampledb'
});
// connect to database
connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
