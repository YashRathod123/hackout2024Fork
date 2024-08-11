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
  } catch (err) {
    res.json(err);
  }
};

const filterQuestions = async (req, res) => {
  console.log("Reach filterQuestions");

  var arrOfCid = req.body.cid;

  console.log(arrOfCid);

  if (!arrOfCid ||arrOfCid.length == 0) {  
    try {
      const courses = await pool.query(`select * from questions `);

      res.json(courses.rows);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  } else {
    var s = "";

    for (var i = 0; i < arrOfCid.length; i++) {
      if (i == arrOfCid.length - 1) {
        s += `courseid = '${arrOfCid[i]}'`;
      } else {
        s += `courseid =  '${arrOfCid[i]}' or `;
      }
    }
    try {
      const courses = await pool.query(`select * from questions where ${s}`);

      res.json(courses.rows);
    } catch (err) {
      res.json(err);
    }
  }
};

const addQuestion = async (req,res)=>{

    try{
      // const addedQuestion = await pool.query(`insert into questions (qusid,qes,id,course,)`);

      res.json(addedQuestion.rows[0]);
    }
    catch(err){
      console.log(err);
      res.json(err);
    }
}

module.exports = { filterQuestions, loadCourses, grabCourse, searchCourses };
