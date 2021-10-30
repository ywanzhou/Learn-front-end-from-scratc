;(function () {
  // 定义一个函数
  const getValue: () => number = (): number => {
    return 0
  }

  enum role1 {
    student = getValue(),
    // teacher, // error 枚举成员必须具有初始化表达式。
    // admin, // error 枚举成员必须具有初始化表达式。
  }
  const TEACHER_ROLE: number = 3
  // 每个名具有指定的值
  enum role2 {
    student,
    teacher = TEACHER_ROLE,
    // admin, // error 枚举成员必须具有初始化表达式。
  }
})()
