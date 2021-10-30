;(function () {
  enum role {
    student,
    teacher,
    admin,
  }
  console.log(role.admin) // 2
  console.log(role['teacher']) //1
  console.log(role[0]) //‘student’
})()
