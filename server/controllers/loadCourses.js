const pool = require("../config/db");

const loadCourses = async (req, res) => {
  try {
    const data = await pool.query(
      `SELECT courseID,coursename ,description,url FROM COURSE`
    );
    // console.log(data);
    res.json(data.rows);
  } catch (err) {
    console.log(err);
  }
};

const grabCourse = async (req, res) => {
  const { courseid } = req.body;

  // console.log(req.body    );

  try {
    const data = await pool.query(
      `SELECT *  FROM COURSE WHERE courseID=${courseid}`
    );
    // console.log(data.rows);

    const books = await pool.query(
      `select * from recommended_books where courseid = ${courseid}`
    );
    const college = await pool.query(
      `select * from recommended_colleges  where courseid = ${courseid}`
    );

    data.rows[0].books = books.rows;
    data.rows[0].colleges = college.rows;
    res.json(data.rows[0]);
  } catch (err) {
    console.log(err);
  }
};

const searchCourses = async (req, res) => {
  console.log("Reach serachCourses");
  // console.log(req.body);

  try {
    const user = await pool.query(
      ` select courseid,coursename,description from course where coursename like '${req.body.searchCourse}%'`
    );
    // console.log(user.rows);
    res.json(user.rows);
  } 
  catch (err) {
    res.json(err);
  }
};

module.exports = { loadCourses, grabCourse, searchCourses };
